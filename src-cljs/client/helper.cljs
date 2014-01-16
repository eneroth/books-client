(ns client.helper)

(defn ws-num-to-string
  [num]
  (condp = num
    0 "connecting"
    1 "connected"
    2 "closing"
    3 "closed"))


(defn log-message-formater
  [prefix string-to-log]
  (let [log-message (str prefix ": " string-to-log)]
    log-message))

(defn log
  [& string-to-log]
  (js/console.log (apply str (interpose " " string-to-log))))

(defn interpose-authors
  [authors]
  (let [temp-vec (vec (interpose ", " authors))
        temp-count (count temp-vec)]
    (if (< 1 temp-count)
      (assoc temp-vec (- temp-count 2) " and ")
      temp-vec)))