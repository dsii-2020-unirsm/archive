// -
// dotare i camminatori di indipendenza 0.1 by peterbaru [camminatori, indipendenti]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —

let camminatori = []
//let num = 10
// let dim = 15

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)

  let num = windowWidth / 35

  for (let i = 0; i < num; i++) {
    camminatori.push(new Walker(i))
  }
}

function draw() {
  background(250)

  for (let i = 0; i < camminatori.length; i++) {
    camminatori[i].mostrati()
    camminatori[i].spostati()
  }
}

function Walker(_id) {
  this.id = _id
  this.x = 0
  this.y = 0
  this.t = random(100)
  this.incremento = random(0.5, 2) * 0.005
  this.r = random(100, 255)
  this.g = random(50, 255)
  this.b = random(100, 255)
  this.alpha = random(50, 100)

  this.mostrati = function() {
    let diminiziale = windowHeight / 3.5

    this.dim = map(this.y, 0, height, 5, diminiziale)
    noStroke()
    fill(this.r, this.g, this.b, this.alpha)
    rect(this.x, this.y, this.dim, this.dim)
  }

  this.spostati = function() {
    this.x = noise(this.t) * width
    this.y = noise(this.t + 15) * height
    this.t = this.t + this.incremento
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}