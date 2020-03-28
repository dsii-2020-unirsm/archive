**variazione in 10PRINT**

Partendo dalla creazione di un labiritno su COMMODORE64  

`10 PRINT CHR$(32+(INT(RND(1)+.5)*155));:GOTO 10` 

ispirato a quello proposto a pagina 110 del manuale 10 PRINT CHR$(205.5+RND(1));:GOTO 10, ho cercato di riproporlo utilizzando archi di circonferenza di 4 tipologie differenti.
Questi si sommano l'uno all'altro dopo aver riempito la schermata andando a realizzare un pattern in continua evoluzione che può essere resettato con il click del mouse.
Inoltre l'utilizzdo di un `noise()` per il colore di riempimento genera una sfumatura continua che permette di individuare le sovrappostizioni delle diverse forme in maniera chiara.

link p5.js [+](https://editor.p5js.org/peterbaru/full/0ObnZePTZ)

link p5.js prove precedenti e variazioni su altri oggetti [+](https://editor.p5js.org/peterbaru/sketches/NevPD-pZu) [+](https://editor.p5js.org/peterbaru/sketches/v0DC1j59w)
