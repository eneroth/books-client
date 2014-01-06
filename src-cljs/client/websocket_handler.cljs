(ns client.websocket-handler
  (:require [client.channel-helpers :as h]
            [client.helper :refer [log log-message-formater]]
            [chord.client :refer [ws-ch]]
            [cljs.reader :refer [read-string]]
            [cljs.core.async :refer [close! split <! >! map> map< filter< put! close! alts! chan timeout sliding-buffer]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; Address to host
(def address "ws://localhost:5000")
(def address "ws://tree-mind-tone.herokuapp.com")

(defn open-connection
  "Establishes a loop that maintains a connection to a server.
  Will attempt reconnection if disconnected.
  
  Returns two channels in a vector. The first is the channel
  on which data messages can be passed to and from server.
  The second is a meta channel that receives a messages each
  time the channel is either disconnected or connected."
  []
  (let [read-channel  (chan)
        write-channel (chan)
        meta-channel  (chan (sliding-buffer 1))]
    (go 
      (>! meta-channel (h/attempting-connect-message address))
      (loop 
        []
        (let [[ws-channel from-channel] (alts! [(ws-ch address) (timeout 500)])]
          
          ;; Don't do anything unless we get a socket
          (when ws-channel
            
            ;; All messages are formated automatically. The format is
            ;; {:type :a-type, :content "any content"
            (let [formated-channel (map> h/record-to-message ws-channel)
                  formated-channel (map< h/message-to-record formated-channel)]
              
              ;; Send messages from app-channel to formated-channel
              ;; Let loop die if ws-channel dies
              (go-loop
                []
                (when-let [message (<! write-channel)]
                  (when (not (h/has-type message (:type h/socket-closed-message)))
                    (do
                      (>! formated-channel message)
                      (recur)))))
              
              ;; Notify meta channel that connection is successfully established
              (>! meta-channel h/connection-successful-message)
              
              ;; Message receiver. Dispatches to app-channel.
              (loop []
                (when-let [message (<! formated-channel)]
                  (do 
                    (>! read-channel message)
                    (recur))))

              ;; Send termination message to write loop and notify on meta channel
              (>! write-channel h/socket-closed-message)
              (>! meta-channel  h/attempting-connect-message))))
        (recur)))
    [(h/combine-channels read-channel write-channel)
     meta-channel]))
