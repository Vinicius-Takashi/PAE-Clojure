(ns calculador-trastes.routes.app
  (:require [cheshire.core :as json]
            [reitit.ring :as ring]
            [calculador-trastes.handlers.handler :as handler]))
(defn calculadorTrastes-handler
  [request]
  (let [body (slurp (:body request))
        dados (json/parse-string body true)
        escala (:escala dados)]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/generate-string
            {:escala escala
             :resultado (handler/calcularDados escala)})}
    ))
(defn health-handler
  [request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body "{\"status\":\"ok\"}"})
(def app
  (ring/ring-handler
   (ring/router
    [["/health" {:get health-handler}]
     ["/calculador" {:post calculadorTrastes-handler}]])))