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
  ;(log "Message to convert to record:" message)
  ;(js/console.log message)
  (->> message :message read-string (apply ->Message)))

(defn record-to-message
  "Takes a record and produces a string suitable
  for transfer over websocket."
  [record]
  ;(log "Record to convert to message: (Message." (pr-str (:type record)) (str (pr-str (:val record)) ")"))
  (-> record vals vec pr-str))

(defn error-to-record
  "Takes a websocket error and converts to a standard message of type error"
  [error]
  ;(log "Converting error to message")
  (js/console.log error)
  (Message. :error (-> error :error)))

; Messages
(def socket-closed-message 
  (Message. :socket-closed
            "Socket closed"))

(defn attempting-connect-message
  [address]
  (Message. :attempting-connection
            (str "Attempting to connect to server " address)))

(defn connection-successful-message
  [address]
  (Message. :connection-successful
            (str "Server connection to " address " established!")))

(def request-socket-close
  (Message. :request-socket-close
            "Requesting to close websocket channel"))

;; Type checking
(defn has-type
  [message type]
  (= (keyword type) (:type message)))


(defn socket-closed-message?
  [message]
  (has-type message (:type socket-closed-message)))

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