// generatore di pattern by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let position;
let velocity;

let camminatore = [];

function setup() {
  createCanvas(600, 600);
  for (let i=0; i< 50; i++) {
  camminatore[i] = new Walker();  
  }
}

function draw() {
  background(16, 33, 232);
  
  for (let i=0; i<camminatore.length; i++) {
 
    camminatore[i].step();
    camminatore[i].display();
  }
}

  class Walker {
    constructor() {  //funzione setup che definisce la posizione iniziale
  this.position = createVector(random(10),random(10));
  this.velocity = createVector(random(1), random(2.3));
    }
    
    display() {
    fill (255, 204, 0);
    stroke(255);
    ellipse (this.position.x, this.position.y, 50, 50);
    }
    
    step() {
      this.position.add(this.velocity);
      
    if ((this.position.x > width) || (this.position.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    } 
    
    if ((this.position.y > height) || (this.position.y <0)) {
      this.velocity.y = this.velocity.y * -1;

  }
 }
 } 