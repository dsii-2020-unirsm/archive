// Giulia Bollini @GiuliaBollini © 2020
// Noise 
// github.com/GiuliaBollini/archive

let sfere = []; // < array delle sfere
let n = 20; // < numero sfere iniziali
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  background(50);
  

  // gruppo iniziale di sfere
  for (let i=0; i<n; i++) {
    sfere.push(new cerchi(i));
  }}

function draw() {
  background(50);
  
//orbitControl(); // < attiva controllo orbita 3d col mouse... (lo uso solo se ho WEBGL invece di P2D)

  push(); // < equivalente di pushMatrix in Processing (start a new drawing state)
  translate(0,0);
  // mostra gruppo di sfere
  for (let i=0; i<sfere.length; i++) {
      sfere[i].creaSfera();
      sfere[i].muoviti();
    }
  
  pop(); // (restore original state)

}

// aggiungi sfere se premi il mouse
function mousePressed() {
  sfere.push(new cerchi(sfere.length));
}

// togli l'ultima sfera se premi un tasto
function keyPressed() {
  sfere.pop();
}

// definizione della classe cerchi
function cerchi(_id) {

  // dati e costruttore
  this.id = _id;
 
  // funzionalità

  this.creaSfera = function() {
    circle(this.x1, this.y1, 20,20);}
  
  this.muoviti = function() {
    this.x1 = (noise (c + _id) * width);
    this.y1 = (noise (c + 1 + _id) * height);
    c = c + 0.0003; // maggiore è il valore, maggiore sarà la velocità dello spostamento delle mie sfere
  }}



//da inserire sempre utilizzando windowWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);}