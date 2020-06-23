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
let dim = 20; //dimensione
let t = 0; //variabile

function setup() {
  createCanvas(windowWidth, windowHeight); //canvas della dimensione dello schermo
  background("#FFC0CB"); //codice colore sfondo
}

function draw() {  
  
  let r = 255; //minore è la differenza tra le coordinate, più uniforme sarà la sequenza di rumore risultante
  let g = 255 * noise(t+5); //variazione in base al valore t: t > = colori  più distinti, t < = colori più sfumati gradualmente
  let b = 255 * noise(t+50);
  
  fill(r,g,b); //metodo di colore da usare
  frameRate(20); //velocità 
  translate((-dim/2), windowHeight-(dim/2)); //punto di partenza
  
  w += dim+10; //distanza tra gli oggetti
  

  if (random(2) <= 0.5) { //lancio un "dado": valore compreso tra 0 e 2: se è <= 0.5 allora fammi questo oggetto
  rect(w, h, dim+10, dim-2);
  noStroke();
    
  } else if (random(2) > 0.5 && random(2) <= 1) {
  noStroke();
  ellipse(w, h, dim+6, dim+6);
    
  } else if (random(2) > 1 && random(2) <= 1.5) {
  rect(w, h, dim+9, dim+9);

 
  } else {
  ellipse(w, h, dim+12, dim+12);
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