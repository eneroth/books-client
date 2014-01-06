(ns client.helper)


(defn log-message-formater
  [prefix string-to-log]
  (let [log-message (str prefix ": " string-to-log)]
    log-message))

(defn log
  [& string-to-log]
  (js/console.log (apply str (interpose " " string-to-log))))