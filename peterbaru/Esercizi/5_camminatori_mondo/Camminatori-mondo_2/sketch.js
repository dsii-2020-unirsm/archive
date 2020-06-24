// -
// camminatori che disegnano mondi 0.2 by peterbaru [camminatori, mondi]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
//
// [mouse] se viene premuto il mouse viene disegnato un nuovo sfondo random
// 
//—

let camminatori = []
let num = 200
let t = 0
let dim = 30
let x = 0
let y = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  background(25, 60, 78, 25)


  for (let i = 0; i < num; i++) {
    camminatori[i] = new Walker(random(width), random(height));
  }
}

function draw() {

  for (let i = 0; i < camminatori.length; i++) {
    camminatori[i].spostati()
    camminatori[i].mostrati()
  }
}

function Walker(x, y) {
  this.x = x
  this.y = y
  this.t = random(100)
  this.incr = random(100)
  this.colorer = 0
  this.coloreg = random(0, 255)
  this.coloreb = 0
  this.dim = 5

  this.mostrati = function() {
    noStroke()
    fill(this.colorer, this.coloreg, this.coloreb)
    rect(this.x, this.y, this.dim, this.dim)
  }

  this.spostati = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    this.t += 0.01
  }
}

function mousePressed() {
  background(random(255), random(255), random(255), 100)
  fill(255, 255, 255, 150)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(240, 100, 20)
}