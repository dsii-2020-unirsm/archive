## Sesto avanzamento

Obiettivo --> 
1. Estrarre l'area dell'oggetto che voglio "trasformare";
2. ottenere dal classificatore il tipo di oggetto che torna (avrò l'oggetto reale e l'oggetto "trasformato");
3. salvare le coordinate dell'oggetto posto nello spazio per poi passarle a SketchRNN, <br>
in modo che il disegno sia in quella posizione; 
4. disegnare gli oggetti "trasformati" nell'esatta posizione in cui li mostro in ingresso.

<br>
Prototipo <br>
MY_TeachableMachine+SNAP+sketchRNN 5       

[+](https://editor.p5js.org/francy96/sketches/dsSzCJAne)


![the source](https://github.com/Francesca1996/archive/blob/master/Francesca1996/INVISIBLE/6_avanzamento/6_avanzamento.jpg)


Considerazioni <br>
Teachable Machine non torna le coordinate degli oggetti che identifica, <br>
perciò al posto di utilizzare *ml5.imageClassifier* ho optato per *ml5.objectDetector* 
( [+](https://ml5js.org/reference/api-ObjectDetector/) )<br>
A questo punto ho eliminato il collegamento al modello allenato con Teachable Machine. <br>
Ho creato *function trasformazione* (riga 317 del codice) in cui ho inserito *switch()* che prende in entrata l'oggetto reale (per esempio *'cup'*, riconsociuto dall'object detector), mi restituisce l'oggetto "trasformato" grazie a *case* e *return*. <br>
