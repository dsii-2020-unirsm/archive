// camminatori indipendenti by Benedetta Borghi
//a partire da sketch di Daniele Tabellini @Fupete
// 2019 © Benedetta Borghi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let Palline = []; // < array di linee
let n = 40; // < numero palline iniziali

function preload() {
//
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // WEBGL-->3D  P2D--> 2D
  background(0, 0, 0);
  colorMode(HSB);

  // gruppo iniziale di Linee
  for (let i=0; i<n; i++) {
    Palline.push(new Astronave(i));
  }
}

function draw() {
  background(0, 0, 0);

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

  

// definizione della classe pallina
function Astronave(_id) {

  // dati e costruttore
  this.id = _id;
  this.x = width/2 + random (-width/5,width/5);
  this.y = height/2 + random (-height/5,height/5);

  this.colore = random(360);

  // funzionalità

  this.mostrati = function() {
    stroke(this.colore, 30, 50);
    fill(this.colore, 30, 50);
    ellipse(this.x,this.y, 10, 10);
  }

  /*this.spostati = function() {
    this.x += 10 * random(-1,1);
    this.y += 10 * random(-1,1);
  }*/
  let tx= 10 * random(-1,1);
  let ty= 10 * random(-1,1);
  
  let v = random(0.001, 0.005)
  
   this.spostati = function() {
     this.x = map(noise(tx), 0, 1, 0, width);
     this.y = map(noise(ty), 0, 1, 0, height);
     tx += v;
     ty += v;

};

//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}