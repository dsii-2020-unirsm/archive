# Prova speech italiano

La libreria P5.speech.js permette di riconoscere un discorso anche in lingua italiana.

Ho modificato l’algoritmo precedente per stampare la stringa di testo all'interno della canvas.

Inserendo la variabile `let interim = false;` elabora le frasi ad ogni pausa, diversamente scrive parola per parola, e difficilmente si riesce a comprendere il filo del discorso.
Ho fatto in modo che la stringa di testo elaborata da P5speech venga scritta allineata al centro della canvas, senza uscire dal riquadro, andando a capo ogni volta che la frase riempie la larghezza dello spazio. 

https://editor.p5js.org/ileniab/full/9SmdgQhLh

![foto](https://github.com/ileniab/archive/blob/master/ileniab/INVISIBLE/5.Prove_algoritmi/Prova_SPEECH_italiano/prova_speech_italiano.png)
