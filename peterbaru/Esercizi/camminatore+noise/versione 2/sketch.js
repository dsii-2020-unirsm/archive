// -
// caminatori 0.2 by Pietro [camminaotri, noise]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —

let Palline = []; // < array di linee
let n = 10; // < numero linee iniziali

function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // < P2D--> 2D
  background(30);

  // gruppo iniziale di palline
  for (let i = 0; i < n; i++) {
    Palline.push(new Astronave(i)); // < push al quale è possibile tornare
  }
}

function draw() {
  background(30);

  push(); // < equivalente di pushMatrix in Processing

  // mostra gruppo di palline
  for (var i = 0; i < Palline.length; i++) {
    Palline[i].spostati();
    Palline[i].mostrati();
  }
  pop();
}

// aggiungi camminatori se premi il mouse
function mousePressed() {
  Palline.push(new Astronave(Palline.length));
}

// togli ultimo camminatore se premi un tasto
function keyPressed() {
  Palline.pop();
}


// definizione della classe Linea
function Astronave(_id) {

  // dati e costruttore
  this.id = _id;
  this.x = 0
  this.y = 0
  this.t = random(200)
  this.incr = random(0.001, 0.01)

  // funzionalità
  this.mostrati = function() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }

  this.spostati = function() {

    this.x = width * noise(this.t);
    this.y = height * noise(this.t + 25);
    //incremento
    this.t += this.incr;
  }
}

//da inserire sempre utilizzando windoWidth
//se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
