(ns client.stylesheets.screen
  (:require [garden.def :refer [defstylesheet defstyles defrule]]
            [garden.core :refer [css]]
            [garden.units :refer [px]]
            [garden.color :as color :refer [hsl rgb rgba]]
            [client.helper :as h]))


(def blue (rgb 1 88 155))

(def gray (rgb 47 41 51))
(def dark-teal (rgb 1 162 166))
(def teal (rgb 41 217 194))
(def green (rgb 189 242 113))
(def yellow (rgb 255 255 166))

(def light-blue (rgb 51 156 204))

(def orange (rgb 204 126 109))

(def zen-and-tea
  {:dark       (rgb 41 41 41)
   :dark-teal  (rgb 91 120 118)
   :dark-green (rgb 143 158 139)
   :sand       (rgb 242 230 182)
   :brown      (rgb 65 42 34)})


;; Flex mixin
(def flex-mixin
  #{:flex :-webkit-flex :-moz-flex :-ms-flex :-o-flex})


(css
  
  {:vendors ["webkit" "moz" "o" "ms"]
   :output-to "resources/public/css/screen.css"
   :pretty-print? true}
  
  [:input  {:outline "none"}]
  
  [:button {:outline "none"}]
  
  [:body {:font-family "sans-serif"
          :background {:color "#ECEBF0"}
          :font-size (px 16)}
   
   [:a {:color (rgb 11 11 11)
        :text-decoration "none"}]
   
   [:ul#search-results 
    {:list-style "none"
     :padding 0}
    
    [:li#search-result
     {:color "white"
      :display "block"
      :margin {:top (px 15)}}
     
     [:div#authors
      {:color (rgb 99 99 99)
       :font {:style "italic"
              :size "smaller"}}]]]
   
   [:div#app 
    {:max-width (px 400)
     :margin {:left  "auto"
              :right "auto"}
     :padding (px 20)}
    

    
    [:div#search-box 
     {:max-width (px 400)
      :height "auto"
      :margin {:left "auto"
               :right "auto"}
      :overflow "hidden"
      :padding 0
      :display flex-mixin
      :background {:color "white"}
      :border {:radius (px 4)}}
     ^:prefix {:align-items "stretch"
               :justify-content "flex-end"
               :box {:shadow "0px 3px 0px 0px rgba(142,53,87,0.4)"}}
     
     [:input#search-field 
      {:border "none"
       :background {:color "none"}
       :margin {:left   0
                :right  0
                :bottom 0
                :top    0}
       :padding {:left   (px 10)
                :right  0
                :bottom 0
                :top    (px 0)}
       :font {:size (px 22)}}
      ^:prefix {:flex-grow 1}]
     
     [:button#search 
      {:height (px 40)
       :width (px 64)
       :padding 0
       :margin 0
       :color "white"
       :background {:color "#8E3557"}
       :font {:size (px 22)}
       :border {:style "none"}}]]]])



(defn -main
  [& args]
  (h/start-nstracker))



