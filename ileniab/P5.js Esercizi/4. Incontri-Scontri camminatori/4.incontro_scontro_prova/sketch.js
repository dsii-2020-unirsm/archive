// -
// incontro scontro prima prova by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

let camminatore = []
let num = 5


function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < num; i++) {
    camminatore[i] = new Walker(random(width), random(height));
  }
}

function draw() {
  background(220);
  for (var i = 0; i < camminatore.length; i++) {
    camminatore[i].spostati();
    camminatore[i].mostrati();
    //for per cambiare i colori      
    for (var j = 0; j < camminatore.length; j++) {
      if (i != j && camminatore[i].interseca(camminatore[j])) {
        camminatore[i].cambiaColore();
        camminatore[j].cambiaColore();
      }
    }
  }

}

function Walker(x, y) {

  this.x = x
  this.y = y
  this.r = 15
  this.t = random(50)
  this.col = color(255);

  this.cambiaColore = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.interseca = function(other) {
    this.d = dist(this.x, this.y, other.x, other.y);
    if (this.d < this.r + other.r) //se la distanza è < della somma dei due raggi
    {
      console.log("scontro: " + this.d)
      return true;
    } else {
      return false;
    }
  }

  this.mostrati = function() {
    noStroke()
    fill(this.col)
    ellipse(this.x, this.y, this.r * 2, this.r * 2)
  }

  this.spostati = function() {
    this.x = noise(this.t) * width
    this.y = noise(this.t + 5) * height
    this.t += 0.01
  }


}