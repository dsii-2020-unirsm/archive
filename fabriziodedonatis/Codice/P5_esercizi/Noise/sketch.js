// -
// camminatori 0.1 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Help:
// [key] delete a walker
// [mouse] onclick, add more walkers

let Palline = []; // < array di linee
let n = 40; // < numero linee iniziali

//let xoff = 5.0; // inzializzo noise x 
//let yoff = 0.0; // inzializzo noise y 
let step=10; // step di spostamento

function preload() {
//
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // WEBGL-->3D  P2D--> 2D
  background(30);

  // gruppo iniziale di Linee
  for (let i=0; i<n; i++) {
    Palline.push(new Astronave(i));
  }
}

function draw() {
  background(30);

  //orbitControl(); // < attiva controllo orbita 3d col mouse...

  push(); // < equivalente di pushMatrix in Processing
  translate(0,0); //0);

  // mostra gruppo di Linee
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
  this.x = 0;
  this.y = 0;
  this.t = random(100); //inizializzo punti di curva noise diversi
  this.gap = random(0.005, 0.01) //salto nel gap temporale

  this.colore = random(45, 255);

  // funzionalità

  this.mostrati = function() {
    stroke(this.colore, 200);
    ellipse(this.x,this.y, 10, 10);
  }

   this.spostati = function() {
    this.t += this.gap;
    this.x = map(noise(this.t), 0 ,1 ,0 , width); 
    this.y = map(noise(this.t+25), 0 ,1 ,0 , height);
    //incremento
    
  }
}

   
//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



