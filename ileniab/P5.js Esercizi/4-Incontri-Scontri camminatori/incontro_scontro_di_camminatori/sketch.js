// -
// incontro scontro prima prova by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @shiffman (https://github.com/shiffman) for https://shiffman.net/, https://www.youtube.com/watch?v=GY-c2HO2liA, https://www.youtube.com/watch?v=uAfw-ko3kB8
//-
//Help:
//[mouse click]: aggiungi un camminatore
//

let camminatore = []
let num = 15;


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < num; i++) {
    camminatore[i] = new Walker(random(width), random(height));
  }
}

function draw() {
  background(132, 94, 194,50);
  
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
    if (random(2)< 1){
    this.col = color(255, 150, 113);
      this.r-=0.01;
    }
    else if (random(2)<=1 && random(2)<=1.9){
    this.col = color(249, 248, 113);
      this.r+=0.03;
    }
    else {
    this.col = color(255, 111, 145);
    this.r-=0.01;
    }
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
    this.y = noise(this.t + sin(15)) * height
    this.t += 0.01
  }


}

//se premo il mouse mi aggiunge un camminatore sulle coordinate del cursore-----------

function mousePressed() {
  camminatore.push(new Walker(mouseX,mouseY));
}

//--

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

