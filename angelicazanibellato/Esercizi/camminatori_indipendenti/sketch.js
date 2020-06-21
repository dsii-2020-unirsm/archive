// -
// camminatori_indipendenti 0.4 by angelica [walker, keyword2]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [mouse] change color
// [mouse] add walker
// [key] remove walker
//
// —


let camminatori = [];
let num = 10;
let dim = 25;


function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER)


  for (let i = 0; i < num; i++) {
    camminatori.push(new Walker(i));

  }
}

function draw() {
  background('#E17369');

  for (let i = 0; i < camminatori.length; i++) {

    camminatori[i].muoviti();
    camminatori[i].mostrati();

  }

}

function mousePressed() {
  camminatori.push(new Walker(camminatori.length))
}

function keyPressed() {
  camminatori.pop()
}

function Walker(_id) {
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.t = random(100);
  this.tIncr = random(-1, 1.5) * 0.01


  this.mostrati = function() {
    push();
    this.r = map(mouseX, 0, width, 0, 255)
    this.g = map(mouseY, 0, height, 0, 255)
    this.b = random(255)
    fill(this.r, this.g, this.b)
    noStroke();
    ellipse(this.x, this.y, dim, dim)
    pop()

  }

  this.muoviti = function() {
    this.x = noise(this.t) * width;
    this.y = noise(this.t + 5) * height;
    this.t += this.tIncr

  }

}