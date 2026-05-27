(ns calculador-trastes.handlers.handler)
(defn calcularDistPestana [escala traste]
  (* escala (- 1 (/ 1 (Math/pow 2 (/ traste 12))))))

(defn calcularDistPonte [escala dn]
  (- escala dn))



(defn calcularDados [escala]
  (let [trastes (range 1 25)
        distancias-pestana (map #(calcularDistPestana escala %) trastes)
        distancias-anteriores (cons 0 distancias-pestana)]
    (map
     (fn [traste distPestana distAnterior]
       {:traste traste
        :distPestana distPestana
        :distPonte (calcularDistPonte escala distPestana)
        :tamanhoTraste (- distPestana distAnterior)})
     trastes
     distancias-pestana
     distancias-anteriores)))