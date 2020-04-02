// Pietro Baruzzi @peterbaru © 2017 MIT License
// Esercizio camminatori indipendenti | San Marino, IT | 3.2020
// Educational purpose, made for DSII2020 lab @UniRSM

let posizione;
let velocita;
let palline = 150;

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i=0; i<palline; i++) {
  camminatore[i] = new Walker();  
  }
}

function draw() {
  background(255);
  
  for (let i=0; i<camminatore.length; i++) {
 
    camminatore[i].muoviti();
    camminatore[i].mostrati();
  }
}

  class Walker {
    constructor() {  //funzione setup che definisce la posizione iniziale
  this.posizione = createVector(random(width),random(height));
  this.velocita = createVector(random(-1,1), random(-2));
  this.colorer = random(255);
  this.coloreg = random(0,50);
  this.coloreb = random(255);    
  this.dim = random(50);
    }
    
    mostrati() {
    fill (0, this.coloreg, this.coloreb, 50);
    ellipse (this.posizione.x, this.posizione.y, this.dim, this.dim);
    }
    
    muoviti() {
      this.posizione.add(this.velocita);
      
    if (this.posizione.y > height) {
      this.posizione.y = 0;
    } else if (this.posizione.y < 0) {
      this.posizione.y = height;
    } 
    
    if ((this.posizione.x > width) || (this.posizione.x <0)) {
      this.velocita.x = this.velocita.x * -1;

   }
  }
 }


