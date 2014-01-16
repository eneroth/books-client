(ns client.websocket-handler
  (:require [client.channel-helpers :as h :refer [Message]]
            [client.helper :refer [log log-message-formater]]
            [client.chord :refer [ws-ch]]
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
    (reduce #(let [read-channel   (chan)
                   supply-channel (ws-ch %2 {:read-ch read-channel})]
               (assoc %1 
                 supply-channel [%2 read-channel])) {} ws-addresses)))

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
  (let [write-to-app    (chan)
        read-from-app   (chan)
        status-channel  (chan (sliding-buffer 1))
        command-channel (chan)]
    (go-loop 
      []
      ;; Send "trying to connect" message
      (js/console.log "Sending status message")
      (>! status-channel  (h/attempting-connect-message servers-addresses))
      (js/console.log "Status message sent")
      
      (let [channels-and-addresses           (get-connection-supply-channels servers-addresses)
            a (js/console.log "s1")
            connection-channels              (keys channels-and-addresses)
            a (js/console.log "s2")
            connection-addresses             (vals channels-and-addresses)
            a (js/console.log "s3")
            [ws-channel successful-channel]  (alts! connection-channels {:priority true}) 
            a (js/console.log "s4")
            address                          (first (get channels-and-addresses successful-channel))
            a (js/console.log "s5")]
        
        ;; Don't do anything unless we get a socket
        (when ws-channel
          ;; Close all channels which were not used
          (let [unused-channels (vec (remove #{successful-channel} connection-channels))]
            ;(js/console.log unused-channels)
            (close-resultant-channels! unused-channels))
          
          (let [origin-channel (chan)]
            (go-loop 
              []
              (let [message (<! ws-channel)]
                (if message
                  (do
                    ;(js/console.log "Message received:")
                    ;(js/console.log message)
                    (>! origin-channel message)
                    (recur))
                  (close! origin-channel))))
            
            ;; All messages are formated automatically. The format is
            ;; {:type :a-type, :content "any content"
            (let [[ws-errors read-from-server] (split #(contains? % :error) origin-channel)
                  write-to-server ws-channel]
              
              ;; Notify meta channel that connection is successfully established
              (>! status-channel (h/connection-successful-message address))
              
              ;; Message receiver. Dispatches to app-channel.
              (loop []
                (js/console.log "Client loop is waiting for message!")
                (let [[message channel] (alts! [read-from-server
                                                read-from-app
                                                ws-errors
                                                command-channel])]
                  (when message
                    (go 
                      (condp = channel
                        read-from-app    (>! write-to-server (h/record-to-message message))
                        read-from-server (>! write-to-app    (h/message-to-record message))
                        ws-errors        (do
                                           (js/console.log "Websocket error:" message)
                                           (close! ws-channel))
                        command-channel  (when (= (:type message)
                                                  (:type h/request-socket-close))
                                           (close! ws-channel))))
                    (recur)))))
            
            ;; Notify of read/write loop termination on meta channel
            (close! ws-channel)
            (js/console.log "Closing channel on" address)
            (>! status-channel  (h/connection-closed-message address)))))
      (recur))
    [(h/combine-channels write-to-app read-from-app)
     status-channel
     command-channel]))
