// -
// Esercizi p5 0.5 by Angelica Gasperoni [camminatori, mondi]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
//

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
//  camminatore = new Camminatore();
  background(255, 0, 127);
  
  let num = 3;
  
  for (let i = 0; i < num; i++) {
    camminatore.push(new Camminatore(i))
  }
} //for per farne più di uno

function draw() {
  for (let i = 0; i < camminatore.length; i++) {
  camminatore[i].step();
  camminatore[i].render();}
}

function Camminatore (_id) {
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.t = random(100);
  this.incremento = random(0.5, 2)*0.005;
  
  this.step = function () {
    let dimensione = windowHeight / 3.5;
    
  this.dim = map(this.y, 0, height, 5, dimensione);
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.dim, this.dim);
  }
  
  this.render = function () {
    this.x = noise(this.t)*width;
    this.y = noise(this.t+15)*height;
    this.t = this.t + this.incremento; 
    }
}

    

