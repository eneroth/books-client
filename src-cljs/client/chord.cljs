(ns client.chord
  (:require [cljs.core.async :refer [chan <! >! put! close! timeout]]
            [cljs.core.async.impl.protocols :as p]
            [client.helper :refer [ws-num-to-string log]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn- read-from-ch! [ch ws]
  (set! (.-onmessage ws)
        (fn [ev]
          (let [message (.-data ev)]
            (put! ch {:message message})))))

(defn- write-to-ch! [ch ws]
  (go-loop []
           (let [msg (<! ch)]
             (when msg
               (.send ws msg)
               (recur)))))

(defn- make-open-ch [ws v]
  (let [ch (chan)]
    (set! (.-onopen ws)
          #(do
             (put! ch v)
             (close! ch)))
    ch))

(defn- on-error [ws read-ch]
  (set! (.-onerror ws)
        (fn [ev]
          (let [error (.-data ev)]
            (put! read-ch {:error error})))))

(defn- on-close [ws read-ch write-ch]
  (set! (.-onclose ws)
        (fn []
          (close! read-ch)
          (close! write-ch))))

(defn- combine-chs [ws read-ch write-ch]
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
            (p/close! write-ch)
            (.close ws))))

(defn ws-ch
  "Creates websockets connection and returns a 2-sided channel when the websocket is opened.
  Arguments:
  ws-url           - (required) link to websocket service
  :reading-buffer  - (optional) hash-map with settings for reading channel
  :writing-buffer  - (optional) hash-map with settings for writing channel
  
  supported keys for channel's options:
  
  * type - type of channel's buffer [:fixed :sliding :dropping :unbuffered] (default :unbuffered)
  * size - size of buffer (required for [:fixed :sliding :dropping])
  
  Usage:
  (:require [cljs.core.async :as a])
  
  
  (a/<! (ws-ch \"ws://127.0.0.1:6437\"))
  
  (a/<! (ws-ch \"ws://127.0.0.1:6437\" {:read-ch (a/chan (a/sliding-buffer 10))}))
  
  (a/<! (ws-ch \"ws://127.0.0.1:6437\" {:read-ch (a/chan (a/sliding-buffer 10))
  :write-ch (a/chan (a/dropping-buffer 10))}))"
  
  [ws-url & [{:keys [read-ch write-ch]}]]
  
  (let [web-socket (js/WebSocket. ws-url)
        read-ch (doto (or read-ch (chan))
                  (read-from-ch! web-socket))
        write-ch (doto (or write-ch (chan))
                   (write-to-ch! web-socket))
        combined-ch (combine-chs web-socket read-ch write-ch)
        socket-ch (make-open-ch web-socket combined-ch)]
    
    (on-error web-socket read-ch)
    (on-close web-socket read-ch write-ch)
    
    (go-loop
      []
      (<! (timeout 500))
      (let [ws-state (.-readyState web-socket)]
        ;(log "Status for " ws-url " is " (ws-num-to-string ws-state))
        (condp = ws-state 
          0 (recur)
          1 (recur)
          2 (do
              (log "Websocket connection to" ws-url "closing. Closing channels tied to socket.")
              (close! read-ch)
              (close! write-ch)
              (close! combined-ch)
              (close! socket-ch))
          3 (do
              (log "Websocket connection to" ws-url "closed. Closing channels tied to socket.")
              (close! read-ch)
              (close! write-ch)
              (close! combined-ch)
              (close! socket-ch)))))
    
    socket-ch))

