(ns calculador-trastes.api.server
  (:require [calculador-trastes.routes.app :refer [app]]
            [ring.adapter.jetty :as jetty]))

(defonce server (atom nil))



(defn start!
  []
  (reset! server
          (jetty/run-jetty app {:port 3001
                                :join? false})))

(defn stop!
  []
  (when @server
    (.stop @server)
    (reset! server nil)))