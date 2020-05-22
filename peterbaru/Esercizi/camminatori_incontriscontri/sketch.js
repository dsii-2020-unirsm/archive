// -
// incontri scontri tra camminatori 0.1 by Pietro [camminatori, scontri]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// -
// Credits/Thanks to: 
// @shiffman (twitter.com/shiffman) for https://shiffman.net/
//-


let camminatori = []
let num = 10

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < num; i++) {
    camminatori[i] = new Walker(random(width), random(height));
  }
}

function draw() {
  background(20, 20, 40);

  for (let i = 0; i < camminatori.length; i++) {
    camminatori[i].spostati()
    camminatori[i].mostrati()

    for (var j = 0; j < camminatori.length; j++) {
      if (i != j && camminatori[i].interseca(camminatori[j])) {
        camminatori[i].nuovocolore();
        camminatori[j].nuovocolore();
        //    camminatori[i].inverti();
        //    camminatori[j].inverti();
        camminatori[i].cresci();
        camminatori[j].cresci();
      }
    }
  }
}

function Walker(x, y) {
  this.x = x
  this.y = y
  this.r = 10
  this.t = random(50)
  this.col = color(255)
  this.dim = 10

  this.nuovocolore = function() {
    this.col = color(random(255), random(255), random(255))
  }

  this.interseca = function(altra) {
    var d = dist(this.x, this.y, altra.x, altra.y);
    if (d < this.r + altra.r) {
      return true;
    } else {
      return false;
    }
  }

  this.mostrati = function() {
    noStroke()
    fill(this.col);
    ellipse(this.x, this.y, this.dim, this.dim)
  }

  this.spostati = function() {
    this.x = noise(this.t) * width
    this.y = noise(this.t + 5) * height
    this.t += 0.01
  }

  //   this.inverti = function() {
  //   this.x = noise(this.t) * (-width)
  //   this.y = noise(this.t + 5) * (-height)
  //   this.t = this.t + 0.01
  // }

  this.cresci = function() {
    this.dim += 0.1
  }

}
