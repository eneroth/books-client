(ns client.core
  (:require [client.websocket-handler :as websocket-handler]
            [client.channel-helpers :as h :refer [Message]]
            [client.helper :refer [log]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.dom]
            [goog.events :as events]
            [cljs.core.async :refer [split <! >! put! chan timeout sliding-buffer]]
            [sablono.core :as html :refer [html] :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; Om constructs
(def app-state
  (atom {:search-results []}))

(def om-channel (chan))

;; Om widgets
(let [[search-results-ch rest-channel] (split #(h/has-type % :update-search-results) om-channel)]
  
  (defn widget 
    [state owner]
    (om/component
      (html [:div [:button {:id "send"} "Hello world!"]])))
  
  (defn search-widget 
    [state owner]
    (om/component
      (html [:div [:button {:id "search"} "Search"]
             [:input {:id "search-box" :placeholder "Search for a book"}]])))
  
  
  (defn search-item
    [item owner]
    (om/component 
      (html 
        [:li (:val item)])))
  
  (defn results-widget
    [state owner]
    (let [search-results (:search-results state)]
      (om/component
        (html [:ul 
               (om/build-all search-item (:search-results state) {:key :id})]))))
  
  
  (defn app [state owner]
    (reify
      
      om/IWillMount
      (will-mount
        [_]        
        (go-loop
          []
          (when-let [search-results (:val (<! search-results-ch))] 
            (log (pr-str search-results))
            (om/update! state assoc :search-results search-results)
            (recur))))
      
      om/IRender
      (render 
        [_]
        (html [:div
               (om/build widget state)
               (om/build search-widget state)
               (om/build results-widget state)]))))
  
  (om/root app-state app (goog.dom/getElement "app")))


(defn index-vec
  "Turns a vector of values into a vector of indexed maps.
  For example, [“moo” “oink”] becomes
  [{:id 0, :val “moo”} {:id 1, :val “oink”}] "
  [results]
  (vec (map-indexed (fn [idx value] 
                      {:id idx :val value}) 
                    results)))

;; Open connection and get channels
(def server-channels       (websocket-handler/open-connection))
(def app-channel           (first server-channels))
(def server-status-channel (second server-channels))

;; Set up event/app loops and channels
(let [[heartbeat-channel      rest-channel] (split #(h/has-type % :heartbeat)      app-channel)
      [search-results-channel rest-channel] (split #(h/has-type % :search-results) rest-channel)
      clicks-channel                        (h/listen (goog.dom/getElement "send") "click")
      search-clicks-channel                 (h/listen (goog.dom/getElement "search") "click")]
  
  (go-loop 
    []
    (when-let [message (<! server-status-channel)]
      (log (str "Connection status: " (:val message)))
      (recur)))
  
  (go-loop 
    []
    (when-let [click (<! clicks-channel)]
      (let [message (Message. :info "You clicked a button!")]
        (log (:val message))
        (>! app-channel message)
        (recur))))
  
  (go-loop
    []
    (when-let [heartbeat (<! heartbeat-channel)]
      (js/console.log "Received heartbeat")
      (recur)))
  
  (go-loop
    []
    (when-let [click (<! search-clicks-channel)]
      (let [value (.-value (goog.dom/getElement "search-box"))
            message (Message. :search value)]
        (>! app-channel message))
      (recur)))
  
  (go-loop
    []
    (when-let [search-results (:val (<! search-results-channel))]
      (let [message (Message. :update-search-results (index-vec search-results))]
        (log "Received search results!")
        (log (pr-str search-results))
        (>! om-channel message)
        (recur)))))

