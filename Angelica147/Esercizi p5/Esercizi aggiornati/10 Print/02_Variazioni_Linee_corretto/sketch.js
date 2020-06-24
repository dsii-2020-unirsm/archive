// -
// Variazioni 10 print 0.2 by Angelica Gasperoni [10print, variazioni]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// 
// 
// —
// Credits/Thanks to: 
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
// —
//
//
//

let w = 0; //larghezza
let h = 0; //altezza
let x1;
let x2;
let y1;
let y2;
let dim = 20; //dimensione
let t = 0; //variabile

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas della dimensione dello schermo
  background("#FFC0CB"); //codice colore sfondo
}

function draw() {  
  
  x1 = w + 10; //dimensione
  x2 = w - 10; //dimensione
  y1 = h + 10; //dimensione
  y2 = h - 10; //dimensione
  
  
//  fill(r,g,b); //metodo di colore da usare
  frameRate(50); //velocità 
  translate((-dim/2), windowHeight-(dim/2)); //punto di partenza
  
  w += 30; //distanza tra gli oggetti
  
 

  if (random(2) <= 1) { //lancio un "dado": valore compreso tra 0 e 2: se è <= 0.5 allora fammi questo oggetto
  line(x2, y1, x1, y2);
  stroke(255);
    
  } else {
  line (x1, y1, x2, y2);
  stroke(0);
  }
  
  t+= 0.1; //velocità
  
  if (w > windowWidth) {
    w=0;
    h-=dim; //parte dall'angolo in basso a sinistra e sale (-)
  }
  
  if (h<(-windowHeight)) {
    w=0;
    h=0; //riparte dall'angolo in basso a sinistra e scende
  }

}