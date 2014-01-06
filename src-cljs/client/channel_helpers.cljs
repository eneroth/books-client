(ns client.channel-helpers
  (:require [cljs.core.async.impl.protocols :as p]
            [client.helper :refer [log]]
            [cljs.core.async :refer [chan put!]]
            [goog.events :as events]
            [cljs.reader :refer [read-string]]))

;; DOM listening as a channel
(defn listen [element type]
  "Create a channel that transmits an event every time
  it is triggered."
  (let [out (chan)]
    (events/listen element type
                   (fn [e] (put! out e)))
    out))

;; Message formatting
(defrecord Message [type val])

; parsers
(defn message-to-record
  "Takes a raw message from websocket and produces a record."
  [message]
  (log "Message to convert to record:" message)
  (js/console.log message)
  (->> message :message read-string (apply ->Message)))

(defn record-to-message
  "Takes a record and produces a string suitable
  for transfer over websocket."
  [record]
  (log "Record to convert to message: (Message." (pr-str (:type record)) (str (pr-str (:val record)) ")"))
  (-> record vals vec pr-str))

; Messages
(def socket-closed-message 
  (Message. :socket-closed
            "Socket closed"))

(defn attempting-connect-message
  [address]
  (Message. :attempting-connection
            (str "Attempting to connect to server " address)))

(def connection-successful-message
  (Message. :connection-successful
            "Connection to server successfully established"))


;; Type checking
(defn has-type
  [message type]
  (= (keyword type) (:type message)))


;; Channel wrangling
(defn combine-channels [read-ch write-ch]
  (reify
    p/ReadPort
    (take! [_ handler]
           (p/take! read-ch handler))
    
    p/WritePort
    (put! [_ msg handler]
          (p/put! write-ch msg handler))
    
    p/Channel
    (close! [_]
            (p/close! read-ch)
            (p/close! write-ch))))