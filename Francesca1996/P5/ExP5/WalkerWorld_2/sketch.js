// Walker World 2 - Ghost by francy96 @Francesca1996 
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let spazio;
let w;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); //windowWidth, windowHeight
  background(0);
  
  spazio = 400;
  
  w = new Walker(0);  
}

function draw() {

  w.display();
  w.walk();
  
  t += 0.01 //velocità movimento
}


function Walker () {  //creo la funzione del camminatore
  this.x = 0;
  this.y = 0;
  
  this.display = function () {   //visualizza cammiantore
    push();
    fill(0, 255, 255, 2);
    strokeWeight(2);
    stroke(255, 255, 255, 2);
    translate(this.x, this.y);
    ellipse(width / 2, height / 2, noise(t) * spazio / 2, noise(t) * spazio / 2);  
    pop();
  }  
  
  this.walk = function () {   //movimento camminatore
    this.x = noise(t + 2) * spazio;
    this.y = noise(t + 4) * spazio;
  }
}