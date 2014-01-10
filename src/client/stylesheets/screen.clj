(ns client.stylesheets.screen
  (:require [garden.def :refer [defstylesheet defstyles defrule]]
            [garden.units :refer [px]]
            [garden.color :as color :refer [hsl rgb rgba]]))


(def blue (rgb 1 88 155))

(def gray (rgb 47 41 51))
(def dark-teal (rgb 1 162 166))
(def teal (rgb 41 217 194))
(def green (rgb 189 242 113))
(def yellow (rgb 255 255 166))

(def light-blue (rgb 51 156 204))

(def orange (rgb 204 126 109))


(defstyles screen
  {:vendors ["webkit" "moz" "o" "ie"]}
  
  [:input  {:outline "none"}]
  
  [:button {:outline "none"}]
  
  [:body {:font-family "sans-serif"
          :background {:color gray}
          :font-size (px 16)
          :line-height 1.5}
   
   [:ul#search-results 
    {:list-style "none"
     :padding 0}
    
    [:li#search-result
     {:color "white"
      :display "block"
      :margin {:top (px 15)}}]]
   
   [:div#app 
    {:max-width (px 400)
     :margin {:left  "auto"
              :right "auto"}
     :padding (px 20)}
    [:button#search 
     {:height (px 40)
      :width (px 80)
      :padding 0
      :margin 0
      :color gray
      :background {:color orange}
      :font {:size (px 22)}
      :border {:style "none"}}]
    
    [:div#search-box 
     {:max-width (px 400)
      :margin {:left "auto"
               :right "auto"}
      :overflow "hidden"
      :padding 0
      :display "flex"
      :align-items "stretch"
      :justify-content "flex-end"
      :background {:color "white"}
      :border {:radius (px 4)}}
     ^:prefix {:box {:shadow "3px 3px 0px 0px rgba(0,0,0,0.45)"}}
     
     [:input#search-field 
      {:border "none"
       :flex-grow 1
       :background "none"
       :margin {:left (px 5)}
       :font {:size (px 22)}}]]]])




