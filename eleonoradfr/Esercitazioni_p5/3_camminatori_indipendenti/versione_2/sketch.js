// -
// 3_camminatori_indipendenti_0.3 by Eleonora Di Francesco [camminatori, noise]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [key == UP_ARROW] genera camminatore 
// [key == DOWN_ARROW] elimina camminatore
// [mouseX] dimensione camminatore
// [mousePressed] stop
// [mouseReleased] play
//
// —

let camminatori = []; 
let n = 1;

let t;
let t_incr;

let mx;

let numeri = ["1","2","3","4","5","6","7","8","9"];

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  
  for (let i=0; i<n; i++) {
    camminatori.push(new Numero(i));
  }
}

function draw() {
  mx = map(mouseX, 0, windowWidth, 1,200);
  textSize(mx);

  background(30);

  push();
  translate(0,0);
  
  for (var i=0; i<camminatori.length; i++) {
    camminatori[i].spostati();
    camminatori[i].mostrati();
    
    }
  pop();

}

function Numero(_id) {

  this.id = _id;
  this.x = width/2 + random (-width/5,width/5);
  this.y = height/2 + random (-height/5,height/5);

  this.t = random(1000);
  this.t_incr = 0.001 * random(10);
  

  this.mostrati = function() {
    strokeWeight(3);
    stroke(random(255), random(255), 255);
    noFill();
    text(random(numeri),this.x,this.y);
  }

  this.spostati = function() {
    //noise per muovere i camminatori
    this.x = noise(this.t) * width;
    this.y = noise(this.t + 5) * height;
    
    this.t += this.t_incr;
  }
}

function mousePressed() {
  frameRate(0);
}

function mouseReleased() {
  frameRate(60);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    camminatori.push(new Numero(camminatori.length));
  } else if (keyCode === DOWN_ARROW) {
    camminatori.pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}