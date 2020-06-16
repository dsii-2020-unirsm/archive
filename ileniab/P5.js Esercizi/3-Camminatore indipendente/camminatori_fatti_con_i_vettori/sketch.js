// -
// Camminatori fatti con i vettori by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

let position;

let dim = 20;

let n= 10;

let camminatore = []; //array vuoto

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < n; i++) {
    camminatore[i] = new Walker(); //crea camminatori di numero = n 
  }
}

function draw() {
  background(230, 230, 250);

  for (let i = 0; i < camminatore.length; i++) {

    camminatore[i].step(); //sposta
    camminatore[i].display();  //mostra
  }
}

class Walker { //classe di camminatori
  constructor() { //funzione setup che definisce la posizione iniziale
    this.position = createVector(200, 200);

  }

  display() {
    noStroke();
    fill(75, 0, 130, 50);
    ellipse(this.position.x, this.position.y, dim, dim);
  }

  step() {

    var step = p5.Vector.random2D();

    var r = random(100);
    if (r < 1) { //l'1%
      //ridimensiona il vettore con la moltiplicazione random tra 0 e 25
      step.mult(random(25)); 
    } else {
      step.setMag(2);    //imposta grandezza vettore
    }
    
    //costringi la posizione x all'interno della canvas
    this.position.x = constrain(this.position.x, 0 + dim, width - dim);
    
    //costringi la posizione y all'interno della canvas
    this.position.y = constrain(this.position.y, 0 + dim, height - dim);
    
    this.position.add(step); //aggiungi alla posizione lo step
  }
}