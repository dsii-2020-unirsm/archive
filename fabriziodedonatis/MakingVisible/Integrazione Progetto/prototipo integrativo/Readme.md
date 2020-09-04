### Integrazione tecnologica

#### PseNet
PoseNet è un algoritmo che individua la struttura delle giunture umane e ne permette l'utilizzo su codice.  
In questo prototipo si è associata una linea colorata che collega mano destra e mano sinistra e la muove nello spazio seguendone il movimento contestuale delle mani, la linea si allunga e accorcia poichè è stata agganciata ai nodi dell'array "Wrist".  
  
SKETCH --> https://editor.p5js.org/fabriziodedo13/sketches/05uYRoUOB  
DEMO FULL --> https://editor.p5js.org/fabriziodedo13/full/05uYRoUOB  
<img src="https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Integrazione Progetto/prototipo integrativo/img/proto_2.png" alt="alt text" width="100%">  
<img src="https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Integrazione Progetto/prototipo integrativo/img/PoseNet_Disegna Polsi.gif" alt="alt text" width="100%">  
  
#### HandPose Google AI  
è un API di Google AI che permette il riconoscimento delle mani e i suoi nodi.  
Come per PoseNet è possibile accedere agli elementi sottoforma di array e creare comandi virtuali, azioni, tracciature ecc.  
  
<img src="https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Integrazione Progetto/prototipo integrativo/img/googleAPI.png" alt="alt text" width="48%"> <img src="https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Integrazione Progetto/prototipo integrativo/img/hand3.gif" alt="alt text" width="48%">  
<img src="https://github.com/fabriziodedonatis/archive/blob/master/fabriziodedonatis/MakingVisible/Integrazione Progetto/prototipo integrativo/img/handpose_test.gif" alt="alt text" width="100%">
  
**GITHUB FORK project**  
https://github.com/tensorflow/tfjs-models/tree/master/handpose  
  
**HANDPOSE di GOOGLE AI**  
https://ai.googleblog.com/2019/08/on-device-real-time-hand-tracking-with.html  
https://storage.googleapis.com/tfjs-models/demos/handpose/index.html  
