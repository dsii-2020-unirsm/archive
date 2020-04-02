// Pietro Baruzzi @peterbaru © 2017 MIT License
// generatore di mondi | San Marino, IT | 3.2020
// Educational purpose, made for DSII2020 lab @UniRSM

let posizione;
let velocita;
let palline = 15;

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i=0; i<palline; i++) {
  camminatore[i] = new Walker();  
  }
}

function draw() {
  background(100,1);
  
  for (let i=0; i<camminatore.length; i++) {
 
    camminatore[i].muoviti();
    camminatore[i].mostrati();
  }
}

  class Walker {
    constructor() {  //funzione setup che definisce la posizione iniziale
  this.posizione = createVector(random(width),random(height*0.3));
  this.velocita = createVector(random(0), random(0));
  this.coloreg = random(255);
  this.coloreb = random(255); 
  this.accelera = createVector(random(-0.001, 0.001), random(0.01));    
  this.velocitaMax = 10;
      
  
    }
    
    mostrati() {
    fill (0, this.coloreg, this.coloreb, 10);
    ellipse (this.posizione.x, this.posizione.y, frameCount%30, random(frameCount%30));
    }
    
    muoviti() {
      this.velocita.add(this.accelera); 
      this.velocita.limit(this.velocitaMax); 
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

