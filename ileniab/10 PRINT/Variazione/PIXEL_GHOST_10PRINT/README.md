# Variazione 3: "low resolution"

Ho tenuto in considerazione l’esercizio:

`10 POKE 1024+RND(1)*1000,77.5+RND(1) : GOTO 10`

con il comando POKE di 10PRINT, in cui la creazione del labirinto, invece che seguire un ordine orizzontale, 
si genera in maniera randomica all’interno dell’intero spazio della schermata, sovrapponendosi anche al codice stesso. 

Mi sono immaginata la creazione di un immagine, a bassissima risoluzione, che si compone pixel per pixel trasparenti di colore diverso. 
In base all’estrazione di un numero random, apparirà o un quadrato o un ellisse traslati nello spazio.
La posizione del mouse determina la distanza e la dimensione dell'oggetto.

https://editor.p5js.org/ileniab/full/ti-tr8Tel

![foto](https://github.com/ileniab/archive/blob/master/ileniab/10%20PRINT/Variazione/PIXEL_GHOST_10PRINT/pixel-ghost.png)
