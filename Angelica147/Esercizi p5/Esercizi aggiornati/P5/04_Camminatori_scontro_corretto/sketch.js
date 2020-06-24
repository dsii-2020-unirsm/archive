// -
// Esercizi p5 0.3 by Angelica Gasperoni [camminatori, indipendenza]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
//

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
//  camminatore = new Camminatore();
  background(255, 0, 127);
  
  let num = 30;
  
  for (let i = 0; i < num; i++) {
    camminatore.push(new Camminatore(i))
  }
} //for per farne più di uno

function draw() {
  for (let i = 0; i < camminatore.length; i++) {
  camminatore[i].step();
  camminatore[i].render();
  
  
  
      for (var j = 0; j < camminatore.length; j++) {
      if (i != j && camminatore[i].interseca(camminatore[j])) {
        
        camminatore[i].nuovocolore();
        camminatore[j].nuovocolore();

        camminatore[i].nuovostroke();
        camminatore[j].nuovostroke();
  
       
      }
    }
  
  
  }
}

function Camminatore (x, y) {
  
    this.x = width/2;
    this.y = height/2;
    this.colore = color(255);
  
  
    this.nuovocolore = function() {
    this.colore = color(random(255), random(255), random(255))
  }

  this.interseca = function(altra) {
    var d = dist(this.x, this.y, altra.x, altra.y)
    if (d < this.r + altra.r) {
      return true;
    } else {
      return false;
    }
  }

  this.render = function() {
    stroke(1);
    circle(this.x,this.y, 20);
  }

  this.step = function() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x--;
    } else if (choice == 1) {
      this.x++;
    } else if (choice == 2) {
      this.y--;
    } else {
      this.y++;
    }
  }
}





