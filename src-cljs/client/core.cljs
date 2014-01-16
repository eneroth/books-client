(ns client.core
  (:require [client.websocket-handler :as websocket-handler]
            [client.channel-helpers :as h :refer [Message]]
            [client.helper :refer [log interpose-authors]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.dom]
            [goog.events :as events]
            [cljs.core.async :refer [split <! >! alts! put! admix mix chan timeout sliding-buffer]]
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
  
  
  (defn fake-error-button
    [state owner]
    (om/component
      (html [:div [:button {:id "fake-error"} "Fake an error!"]])))
  
  (defn search-widget 
    [state owner]
    (om/component
      (html [:div {:id "search-box"}
             [:input {:id "search-field" :placeholder "Search for a book"}]
             [:button {:id "search"} "Go!"]])))
  
  
  (defn search-item
    [item owner]
    (om/component 
      (let [title   (:title item)
            url     (:url item)
            authors (apply str (interpose ", " (:author item)))]
        (html 
          [:li#search-result
           [:a#book-amazon-link.hyphenate {:href url} title]
           [:div#authors authors]]))))
  
  (defn results-widget
    [state owner]
    (let [search-results (:search-results state)]
      (om/component
        (html [:ul {:id "search-results"}
               (om/build-all search-item (:search-results state) {:key :id})]))))
  
  
  (defn app [state owner]
    (reify
      
      om/IWillMount
      (will-mount
        [_]        
        (go-loop
          []
          (when-let [search-results (:val (<! search-results-ch))] 
            ;(log (pr-str search-results))
            (om/update! state assoc :search-results search-results)
            (recur))))
      
      om/IRender
      (render 
        [_]
        (html [:div
               ;(om/build widget state)
               ;(om/build fake-error-button state)
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

(defn add-ids
  "Adds a sequential ID to each element
  in a vector of maps."
  [vec-of-maps]
  (vec (map-indexed (fn [idx in-map]
                      (assoc in-map :id idx))
                    vec-of-maps)))

;; Open connection and get channels
(def server-channels        (websocket-handler/open-connection))
(def app-channel            (first server-channels))
(def server-status-channel  (second server-channels))
(def command-channel        (last server-channels))

;; Set up event/app loops and channels

(defn run
  []
  (let [[heartbeat-channel      rest-channel] (split #(h/has-type % :heartbeat)      app-channel)
        [search-results-channel rest-channel] (split #(h/has-type % :search-results) rest-channel)
        ;clicks-channel                        (h/listen (goog.dom/getElement "send") "click")
        ;fake-errors-channel                   (h/listen (goog.dom/getElement "fake-error") "click")
        search-init-events                    (h/clean-mix (h/listen (goog.dom/getElement "search") "click")
                                                           (h/listen (goog.dom/getElement "search-field") "keyup"))]
    
    (go-loop 
      []
      (when-let [message (<! server-status-channel)]
        (cond 
          (= (:type message) :error) (do 
                                       (log "Websocket error:" (or (:val message) "Unknown") "- attempting restart.")
                                       (>! command-channel h/request-socket-close))
          :else (log (str "Connection status: " (:val message))))
        (recur)))
    
    (comment 
      (go-loop 
        []
        (when-let [click (<! clicks-channel)]
          (let [message (Message. :info "You clicked a button!")]
            (log (:val message))
            (>! app-channel message)
            (recur))))
      
      (go-loop 
        []
        (when-let [click (<! fake-errors-channel)]
          (let [message (Message. :error "You faked an error!")]
            (log (:val message))
            (>! command-channel message)
            (recur)))))
    
    
    ;; Heartbeats
    ; Receiver
    (go-loop
      []
      (when-let [heartbeat (<! heartbeat-channel)]
        (js/console.log "Received server heartbeat")
        (recur)))
    
    ; Sender
    (go-loop
      []
      (<! (timeout 55000))
      (log "Sending client heartbeat")
      (>! app-channel (Message. :heartbeat "Client heartbeat"))
      (recur))
    
    
    ;; Search
    (go-loop
      []
      (when-let [search-init-event (<! search-init-events)]
        (let [is-button-click? (h/has-event-type? :click search-init-event)
              is-key-press-up? (h/has-event-type? :keyup search-init-event)
              is-enter-key?    (h/pressed-key-is? (:enter h/key-types) search-init-event)
              value            (.-value (goog.dom/getElement "search-field"))
              value-not-empty? (not (= value ""))
              message          (Message. :search value)]
          (when 
            (and value-not-empty?
                 (or is-button-click?
                     (and is-key-press-up?
                          is-enter-key?)))                  
            (>! app-channel message))
          (recur))))
    
    (go-loop
      []
      (when-let [search-results (:val (<! search-results-channel))]
        (let [message (Message. :update-search-results (add-ids search-results))]
          (log "Received search results!")
          ;(log (pr-str search-results))
          (>! om-channel message)
          (recur))))))

(defn ^:export main []
  (run))