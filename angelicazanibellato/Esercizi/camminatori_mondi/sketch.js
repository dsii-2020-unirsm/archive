// -
// Camminatori che generano mondi 0.7 by Angelica [walker, noise]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

 //Help:
// [mouse] change background's color

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(204, 187, 171);
  noStroke();
  strokeWeight(0.3);

  //numero camminatori
  let n = 10;

  for (let i = 0; i < n; i++) {
    camminatore.push(new Walker(i))
  }
}

function draw() {
  for (let i = 0; i < camminatore.length; i++) {
    camminatore[i].mostrati();
    camminatore[i].muoviti();
  }
}

function Walker() {
  this.x = 0;
  this.y = 0;
  this.t = random(50);
  this.inc = random(0.5, 2) * 0.02;
  this.colorR = random(255);
  this.colorB = random(255);



  this.mostrati = function() {
    let dim = windowWidth / 20;

    this.dim = map(this.y, 5, windowWidth, 5, dim);

    fill(this.colorR, 0, this.colorB, 50);
    ellipse(this.x, this.y, frameCount % 10, dim);
  }

  this.muoviti = function() {
    this.x = noise(this.t) * width;
    this.y = noise(this.t + 10) * height;
    this.t = this.t + this.inc;
  }


}

function mousePressed() {

  let color = floor(random(2));

  if (color == 0) {
    background(66, 85, 140); //blu
    stroke(66, 85, 140);
    strokeWeight(1.5);

  } else if (color == 1) {
    background(204, 187, 171); //beige
   noStroke();

  }
}