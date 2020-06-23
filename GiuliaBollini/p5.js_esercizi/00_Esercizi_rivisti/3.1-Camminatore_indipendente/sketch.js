// Camminatore indipendente 1.0 by GiuliaBollini 
// 2020 © Giulia Bollini @GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —


let spazio;
let camminatore;
let dimensione = 20;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  
  camminatore = new Camminatore(250, 250);
  
}

function draw() {
  
  background(random(150, 250), random(150, 250), random(200, 250),30);
  camminatore.update();
  camminatore.show();
  
}

class Camminatore {
  
  constructor(x, y) {
    this.vettore = createVector(x, y);
    this.vel = p5.Vector.random2D();
    
  }
  
  update () {
    this.vel.add(this.acc);
    this.vettore.add(this.vel);
    this.acc = p5.Vector.random2D();
  }
  
  
  show () {
    stroke(random(50, 200), random(50, 200), random(50, 200));
    fill(random(150, 200), random(150, 200), random(150, 200), 50);
    strokeWeight(1);
    circle(this.vettore.x, this.vettore.y, dimensione, dimensione);
  }
}