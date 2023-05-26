# Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- v a applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul
  prezzo

  # steps

- 0 impostare il prompt per chiedere l'età del viaggiatore
- 0 impostare il prompt per chiedere i km che vuole percorrere
- 0 impostare un moltiplicatore \* 0.21
- 1 impostare un if se il numero dato dal prompt _chiedere l'età del viaggiatore_ è x < 18
- 2 impostare un if se il numero dato dal prompt _chiedere l'età del viaggiatore_ è x > 65
- 3 all'if che riguarda i minorenni applicare la sottrazione in percentuale del 20% al risultato del prezzo del biglietto
- 4 all'if che riguarda gli over 65 applicare la sottrazione in percentuale del 40% al risultato del prezzo del biglietto
