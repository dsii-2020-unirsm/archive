// Pietro Baruzzi @peterbaru © 2017 MIT License
// camminatori indipendenti | San Marino, IT | 3.2020
// Educational purpose, made for DSII2020 lab @UniRSM

let posizione;
let velocita;
let palline = 300;

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i=0; i<palline; i++) {
  camminatore[i] = new Walker();  
  }
}

function draw() {
  background(220);
  
  for (let i=0; i<camminatore.length; i++) {
 
    camminatore[i].muoviti();
    camminatore[i].mostrati();
  }
}

  class Walker {
    constructor() {  //funzione setup che definisce la posizione iniziale
  this.posizione = createVector(random(width),random(height));
  this.velocita = createVector(random(3), random(1.5));
  this.colorer = random(255);
  this.coloreg = random(255);
  this.coloreb = random(255);    
    }
    
    mostrati() {
    fill (this.colorer, this.coloreg, this.coloreb);
    ellipse (this.posizione.x, this.posizione.y, 30, 30);
    }
    
    muoviti() {
      this.posizione.add(this.velocita);
      
    if (this.posizione.x > width) {
      this.posizione.x = 0;
    } else if (this.posizione.x < 0) {
      this.posizione.x = width;
    } 
    
    if ((this.posizione.y > height) || (this.posizione.y <0)) {
      this.velocita.y = this.velocita.y * -1;

   }
  }
 } 
