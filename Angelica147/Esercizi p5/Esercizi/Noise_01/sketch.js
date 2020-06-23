// -
// Noise by Nome Studente [noise, circle] 
// 2020 © Angelica Gasperoni, Daniele @Fupete and the course DSII2020 @UniRSM 
// github.com/fupete — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino
// —

var palline = []; // < array delle palline
var n = 40; // < numero sfere iniziali
var v = 0; //aumentandolo, aumenta la velocità delle palline

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  background(30);
  

  // gruppo iniziale di palline
  for (var i=0; i<n; i++) {
    palline.push(new cerchi(i));
  }
  
}

function draw() {
  background(30);
  
  //orbitControl(); // < attiva controllo orbita 3d col mouse... (posso usarlo solo se ho WEBGL invece di P2D)

  push(); // < equivalente di pushMatrix in Processing
  translate(30,30);
  // mostra gruppo di palline creando un ciclo for
  for (var i=0; i<palline.length; i++) {
      palline[i].creaSfera(); //crea le palline
      palline[i].muoviti(); //le fa muovere
    }
  pop();

}

// aggiungi palline se premi il mouse
function mousePressed() {
  palline.push(new cerchi(palline.length));
}

// togli l'ultima pallina se premi un tasto
function keyPressed() {
  palline.pop();
}

// definizione della classe cerchi
function cerchi(_id) {

  // dati e costruttore
  this.id = _id;
 
  // funzionalità
  // funzione crea definisce dove e di che dimensioni
  this.creaSfera = function() {
    circle(this.x1, this.y1, 15,15);
  }
  // funzione muoviti, rende "schizzofrenico" il movimento usando il noise
  this.muoviti = function() {
    this.x1 = (noise (v + _id) * width);
    this.y1 = (noise (v + 1 + _id) * height);
    v = v + 0.0005; // frame count (maggiore è il valore, maggiore sarà la velocità dello spostamento delle mie sfere)
  }}



//da inserire sempre utilizzando windowWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}
