// -
// camminatori che disegnano mondi 0.1 by Pietro [camminatori, mondi]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —


let camminatori = []
let num = 10
let t
let dim = 30

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  background(250)
  background(240, 100, 20)
  t = 0


  for (let i = 0; i < num; i++) {
    camminatori.push(new Walker(i))
  }
}

function draw() {

  translate(width * 2 / 5, 0)
  for (let i = 0; i < camminatori.length; i++) {
    camminatori[i].spostati()
    camminatori[i].mostrati()
  }
}

function Walker(_id) {
  this.id = _id
  this.x = 0
  this.y = 0
  this.t = random(100)
  this.dim = random(10)
  this.dime = random(frameCount / dim)

  this.mostrati = function() {
    let diminiziale = windowHeight / 3.5

    r = 255 * noise(t + 5);
    g = 255 * noise(t + 10);
    b = 255 * noise(t + 15);
    dime = dim + (sin(frameCount / dim) * dim / 2)

    stroke(r, g, b, 100)
    strokeWeight(4)
    circle(this.x, this.y, (3 * _id) + dim + (sin(this.dime) * (dim + this.dim) / 2), dim + (sin(this.dime) * dim / 2))
    t += 0.05
  }

  this.spostati = function() {
    this.x = noise(this.t) * 200 + (sin(frameCount / (_id * 10)) * 200)
    this.y = noise(this.t + 30) * height
    this.t += 0.005
  }
}

function mousePressed() {
  background(240, 100, 20, 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(240, 100, 20)
}
