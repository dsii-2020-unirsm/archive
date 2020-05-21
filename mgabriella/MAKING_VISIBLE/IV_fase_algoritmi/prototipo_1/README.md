# MAKING VISIBLE.

### Primo algoritmo

### Face Api

**PREMESSA:**  
Inizialmente avevo pensato di sperimentare su Yolo per concentrarmi sul rilevare la mascherina. Successivamente ho optato per Face Api poichè attraverso i "Lanadmarcks", i punti che rilevano la posizione degli elementi principali del viso, ho avuto la possibilità di individuare i punti che formano la posizione della bocca.

**SPERIMENTAZIONE:** https://editor.p5js.org/mgabriella/sketches/NqDiqnll8  
Ho spento gli elementi presenti sul viso che non mi servivano. (lankmarck occhi, naso, forma volto, sopracciglia) e lasciato quelli della bocca. Ho trovato i punti che fanno il contono della occa. Ho indivisuato che i lati della bocca sono i punti [0] e [6]. Impostando il centro trovato con la distanza tra i due punti, ho applicato una immagine png, caricata in preload. Ho usato la varibile distanza per il posizionamento della mascherina. Successivamente ho applicato il disegno di un ellisse. Questa prova serviva per capire se i vari elementi riuscivano a restare sui punti della bocca e a seguirla. Avendo usato la distanza tra i punti della bocca 0 e 6, che seguono i movimenti e variano con la grandezza della bocca, di conseguenza le immagini andranno a scalarsi.

**RIFLESSIONI:**  
Di base Face Api mi ha permesso di creare una sorta di filtro, ma inizialmente ho sempre pensanto alla realtà aumentata , quiandi ad una visione tridimentionale del viso. Face Api, sebbene rilevi il volto non fornisce una visione 3D di esso.  

Cercando su internet ho trovato che Tensorflow ha una visione tridimensionale del volto tramite Mesh:[facemesh](https://storage.googleapis.com/tfjs-models/demos/facemesh/index.html). La possibilità di avere una tela tridimensionale sul nostro volto avrebbe reso più realistico il progetto. Il problema è che non esistono algoritmi addestrati al riconoscimento del volto con la mascherina in 3d e il codice Tensorflow è in un linguaggio diverso da p5 e ml5 e usa la libreria Python.
