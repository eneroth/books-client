(ns client.websocket-handler
  (:require [client.channel-helpers :as h :refer [Message]]
            [client.helper :refer [log log-message-formater]]
            [chord.client :refer [ws-ch]]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :refer [close! split <! >! map> map< filter< put! close! alts! chan timeout sliding-buffer]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; Address to host
(def servers-addresses ["ws://localhost:5000"
                        "ws://books-server.herokuapp.com"
                        "ws://tree-mind-tone.herokuapp.com"])

(defn get-connection-supply-channels
  "Returns a vector of tuples, one for every
  address in the list supplied to the function.
  Every tuple is of format [address channel].
  Taking from the channel in the tuple will  
  return a websocket-channel, when the websocket-
  channel to the server in question is ready." 
  [ws-addresses]
  (doall 
    (reduce #(assoc %1 (ws-ch %2) %2) {} ws-addresses)))

(defn close-all!
  "Closes all channels in list"
  [channels]
  (doall 
    (map close! channels)))

(defn close-channel-and-resultant!
  "Takes a channel that is expected to return a channel.
  Closes the channel that is expected, if such a channel
  is returned within a second, and closes it.
  Regardless, it then closes the channel supplied."
  [channel]
  (go 
    (let [[ws-channel _] (alts! [(timeout 1000)
                                 channel])]
      (when ws-channel
        (close! ws-channel))
      (close! channel)))
  nil)

(defn close-resultant-channels!
  [channels]
  (doall 
    (map close-channel-and-resultant! channels)))

(defn terminable-channel
  "Creates a message handler that shuts down when 
  receiving a socket-closed-message.
  Optionally takes an identifier string that will 
  be printed when go-loop is closed down. Returns
  the receiving channel."
  [in-channel out-channel & identifier]
  (go-loop
    []
    (when-let [message (<! in-channel)]
      (if (not (h/socket-closed-message? message))
        (do
          (log "passing on message")
          (>! out-channel message)
          (log "Done")
          (recur))
        (do 
          (if identifier
            (log "Closing down" (first identifier))))))
    out-channel))

(defn send-socket-closed-messages
  "Sends socket-closed-message's to all channels in collection"
  [channels]
  (doall 
    (map #(put! % h/socket-closed-message) channels)))

(defn open-connection
  "Establishes a loop that maintains a connection to a server.
  Will attempt reconnection if disconnected.
  
  Returns two channels in a vector. The first is the channel
  on which data messages can be passed to and from server.
  The second is a meta channel that receives a messages each
  time the channel is either disconnected or connected."
  []
  (let [write-to-client  (chan)
        read-from-client (chan)
        status-channel   (chan (sliding-buffer 1))
        command-channel  (chan)]
    (go-loop 
      []
      ;; Send "trying to connect" message
      (>! status-channel  (h/attempting-connect-message servers-addresses))
      
      (let [channels-and-addresses           (get-connection-supply-channels servers-addresses)
            connection-channels              (keys channels-and-addresses)
            connection-addresses             (vals channels-and-addresses)
            [ws-channel successful-channel]  (alts! connection-channels {:priority true}) 
            address                          (get channels-and-addresses successful-channel)]
        
        ;; Don't do anything unless we get a socket
        (when ws-channel
          ;; Close all channels which were not used
          (let [unused-channels (vec (remove #{successful-channel} connection-channels))]
            ;(js/console.log unused-channels)
            (close-resultant-channels! unused-channels))
          
          ;; All messages are formated automatically. The format is
          ;; {:type :a-type, :content "any content"
          (let [[ws-errors read-from-server] (split #(contains? % :error) ws-channel)
                write-to-server ws-channel]
            
            ;; Notify meta channel that connection is successfully established
            (>! status-channel (h/connection-successful-message address))
            
            ;; Message receiver. Dispatches to app-channel.
            (loop []
              (let [[message channel] (alts! [read-from-server
                                              read-from-client
                                              ws-errors
                                              command-channel])]
                (when message 
                  (condp = channel
                    read-from-client (>! write-to-server (h/record-to-message message))
                    read-from-server (>! write-to-client (h/message-to-record message))
                    ws-errors        (>! status-channel  (h/error-to-record   message))
                    command-channel  (when (= (:type message)
                                              (:type h/request-socket-close))
                                       (close! ws-channel)))
                  (recur))))
            
            ;; Notify of read/write loop termination on meta channel
            (>! status-channel  (h/connection-closed-message address)))))
      (recur))
    [(h/combine-channels write-to-client read-from-client)
     status-channel
     command-channel]))
