// Disegnatore di mondi by Benedetta Borghi
// 2020 © Benedetta Borghi, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let Palline = []; // < array di linee
let n = 5; // < numero palline iniziali


function preload() {
//
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // WEBGL-->3D  P2D--> 2D
  background(0, 0, 0);
  colorMode(HSB);

  // gruppo iniziale di Linee
  for (let i=0; i<n; i++) {
    Palline.push(new Astronave(i));
  }
}

function draw() {
  //background(0, 0, 0);

  orbitControl(); // < attiva controllo orbita 3d col mouse...
  //translate(-windowWidth / 2, -windowHeight / 2);
  
  push(); // < equivalente di pushMatrix in Processing
  //translate(0,0); //0);
  


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
  /*this.id = _id;
  this.x = width/2 + random (-width/5,width/5);
  this.y = height/2 + random (-height/5,height/5);
  this.z = height/2 + random (-height/5,height/5);*/

  //this.colore = random(360);

  // funzionalità

  this.mostrati = function() {
     normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(200,200,200);
  torus(70);
  pop();
   
  }

  /*this.spostati = function() {
    this.x += 10 * random(-1,1);
    this.y += 10 * random(-1,1);
    this.z += 10 * random(-1,1);
    
  } */
  let tx= 10 * random(-1,1);
  let ty= 10 * random(-1,1);
  let tz= 10 * random(-1,1); 
  
  let v = random(0.001, 0.005)
  
   this.spostati = function() {
     this.x = map(noise(tx), 0, 1, 0, width);
     this.y = map(noise(ty), 0, 1, 0, height);
     this.z = map(noise(tz), 0, 1, 0, height);
     tx += v;
     ty += v;
     tz += v;

};

//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}