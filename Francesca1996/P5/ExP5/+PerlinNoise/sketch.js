// Daniele Tabellini @fupete © 2017 MIT License
// WEBGL Line issue | San Marino, IT | 6.2017
// Educational purpose, made for DSII2017 lab @UniRSM
//+ Perlin Noise

let Palline = []; // < array di linee
let n = 40; // < numero linee iniziali

let t = 0;

function preload() {
  //
}





function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // WEBGL-->3D  P2D--> 2D
  background(30);

  // gruppo iniziale di Linee
  for (let i = 0; i < n; i++) {
    Palline.push(new Astronave(i));
  }
}




function draw() {
  background(30);
  t = t + 0.05;

  //orbitControl(); // < attiva controllo orbita 3d col mouse...

  push(); // < equivalente di pushMatrix in Processing
  translate(0, 0); //0);

  // mostra gruppo di Linee
  for (var i = 0; i < Palline.length; i++) {
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
  this.x = width / 2 + random(-width / 5, width / 5);
  this.y = height / 2 + random(-height / 5, height / 5);

  this.colore = random(45, 255);

  // funzionalità

  this.mostrati = function() {
    stroke(this.colore, 200);
    ellipse(this.x, this.y, 10, 10);
  }

  let x = noise(t);
  
  this.spostati = function() {
    this.x += random(-1, 1) * (10 * map(x, 0, 1, -1, 1));
    this.y += random(-1, 1) * (10 * map(x, 0, 1, -1, 1));
    
    //this.x += 10 * random(-1, 1);
    //this.y += 10 * random(-1, 1);
  
  }
  
}


//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//Collapse