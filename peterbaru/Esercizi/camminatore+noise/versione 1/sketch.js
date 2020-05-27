// -
// caminatori 0.1 by peterbaru [camminaotri, noise]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —

let Palline = []; // < array di linee
let n = 10; // < numero linee iniziali
let t = 0;

function preload() {
//
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // < P2D--> 2D
  background(30);

  // gruppo iniziale di palline
  for (let i=0; i<n; i++) {
    Palline.push(new Astronave(i)); // < push al quale è possibile tornare
  }
}

function draw() {
  background(30);

  push(); // < equivalente di pushMatrix in Processing
  translate(0,0); //0);

  // mostra gruppo di palline
  for (var i=0; i<Palline.length; i++) {
      Palline[i].mostrati();
      Palline[i].spostati();
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

  // funzionalità
  this.mostrati = function() {
    ellipse(this.x,this.y, 10, 10);
  }

  this.spostati = function() {

  //  this.x += 10 * random(-1,1);
  //  this.y += 10 * random(-1,1);
      this.x = (width * noise(t + 5 + _id));
      this.y = (height * noise(t + 25 + _id));

      //incremento
      t = t + 0.001;
  }
}


//da inserire sempre utilizzando windoWidth
//se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
