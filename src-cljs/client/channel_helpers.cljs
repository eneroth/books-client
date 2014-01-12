(ns client.channel-helpers
  (:require [cljs.core.async.impl.protocols :as p]
            [client.helper :refer [log]]
            [cljs.core.async :refer [chan put! >! alts! admix mix]]
            [goog.events :as events]
            [cljs.reader :refer [read-string]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; DOM listening as a channel
(defn listen [element type]
  "Create a channel that transmits an event every time
  it is triggered."
  (let [out (chan)]
    (events/listen element type
                   (fn [e] (put! out e)))
    out))

;; Event parsing
(defn has-event-type?
  [event-type event]
  (= (keyword (.-type event))
     event-type))

(def key-types {:enter 13})

(defn pressed-key-is?
  [key-type event]
  (= (.-keyCode event)
     key-type))


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


(defn connection-closed-message
  [address]
  (Message. :connection-closed
            (str "Connection to " address " was closed!")))

(defn attempting-connect-message
  [address]
  (Message. :connection-attempt
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
  (= (keyword type) 
     (:type message)))


(defn socket-closed-message?
  [message]
  (has-type message (:type socket-closed-message)))

;; Channel wrangling

(defn clean-mix
  "Takes any number of channels and puts any message from any
  of them on the returned channel."
  [& channels]
  (let [out-chan (chan)]
    (go-loop
      []
      (let [[message channel] (alts! channels)]
        (when message
          (>! out-chan message)
          (recur))))
    out-chan))

(comment 
  (defn clean-mix
    "Takes any number of channels and puts any message from any
    of them on the returned channel."
    [& channels]
    (go
      (let [the-mix (mix (chan))]
        (map (partial admix the-mix) channels)
        the-mix))))

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