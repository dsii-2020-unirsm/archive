// Camminatore_creaMondi 1.0 by GiuliaBollini 
// 2020 © Giulia Bollini @GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —


let spazio;
let camminatore;
let dimensione = 10;
let t;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  frameRate(10);
  
  spazio = 1000;
  camminatore = new Camminatore(250, 250);
  
}

function draw() {
  
  camminatore.update();
  camminatore.show();
  
  t += 0.50
}

class Camminatore {
  
  constructor(x, y) {
    this.ciao = createVector(x, y);
    this.vel = p5.Vector.random2D();
    
  }
  
  update () {
    this.vel.add(this.acc);
    this.ciao.add(this.vel);
    this.acc = p5.Vector.random2D();
 
  
  }
  
  show () {
    stroke(random(100, 200), random(100, 200), random(100, 200), 100);
    strokeWeight(3);
    //fill(random(0, 250));
    line(this.ciao.x, this.ciao.y, 300, 300);
  }
}