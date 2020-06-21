// -
// scontro_camminatori 0.8 by angelica [walker, keyword2]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —


let camminatore = []
let position
let num = 7


function setup() {
  createCanvas(600, 600);
  //background(50);

  for (var i = 0; i < num; i++) {
    camminatore[i] = new Walker(random(width), random(height));
  }
}

function draw() {
  background(50);
  for (var i = 0; i < camminatore.length; i++) {
    camminatore[i].step();
    camminatore[i].mostrati();
    for (var j = 0; j < camminatore.length; j++) {
      if (i != j && camminatore[i].interseca(camminatore[j])) {
        camminatore[i].cambiaColore();
        camminatore[j].cambiaColore();
      }
    }
  }

}



function Walker(x, y) {
  this.position = createVector(200, 200);

  this.position.x = x
  this.position.y = y

  this.r = 30
  //this.t = random(20)
  this.col = color(155);

  this.cambiaColore = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.interseca = function(other) {
    this.d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    if (this.d < this.r + other.r) //se la distanza è < della somma dei due raggi
    {
      return true;
    } else {
      return false;
    }
  }

  this.mostrati = function() {
    noStroke()
    fill(this.col)

    ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2)
  }



  this.step = function() {

    var step = p5.Vector.random2D();


    //step.setMag(2); grandezza vettore

    this.position.x = constrain(this.position.x, 0 + this.r, width - this.r);

    this.position.y = constrain(this.position.y, 0 + this.r, height - this.r);

    this.position.add(step); //aggiungi alla posizione lo step
  }



}
