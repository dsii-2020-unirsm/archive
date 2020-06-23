// -
// incontri scontri tra camminatori 0.3 by peterbaru [camminatori, scontri]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// -
// Credits/Thanks to: 
// @shiffman (twitter.com/shiffman) for https://shiffman.net/, https://www.youtube.com/watch?v=GY-c2HO2liA
// —
//
// Help:
// [key] viene eliminato un camminatore
// [mouse] viene aggiunto un camminatore
//
// —

let camminatori = []
let d
let num = 8
let t = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  textAlign(CENTER, CENTER)

  for (let i = 0; i < num; i++) {
    camminatori[i] = new Walker(random(width), random(height))
  }
}

function draw() {
  background(220, 220, 220, 40)

  for (let i = 0; i < camminatori.length; i++) {
    camminatori[i].spostati()
    camminatori[i].mostrati()

    for (let j = 0; j < camminatori.length; j++) {
      if (i != j && camminatori[i].collisione(camminatori[j])) {

        camminatori[i].nuovocolore();
        camminatori[j].nuovocolore();

        camminatori[i].xvel = (-1) * camminatori[i].xvel
        camminatori[j].xvel = (-1) * camminatori[j].xvel
        camminatori[i].yvel = (-1) * camminatori[i].yvel
        camminatori[j].yvel = (-1) * camminatori[j].yvel
      }
    }
  }
  t += 0.01
}

function Walker(x, y) {
  this.x = x
  this.y = y
  this.r = 20
  this.t = random(100)
  this.val = ""
  this.col = color(255)

  this.xvel = random(-5, 5)
  this.yvel = random(-5, 5)

  this.collisione = function(altra) {
    d = dist(this.x, this.y, altra.x, altra.y)

    if (d < this.r + altra.r) {
      return true;
    } else {
      return false;
    }
  }

  this.mostrati = function() {
    noStroke()
    fill(this.col);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r)
    fill(0, 255, 0)
    text(this.val, this.x, this.y)

  }

  this.nuovocolore = function() {
    this.col = color(0)
    this.val  = "toc"
  }

  this.spostati = function() {
    this.x = this.x + this.xvel * noise(this.t)
    this.y = this.y + this.yvel * noise(this.t)

    if (this.x < 0 || this.x > width) {
      this.xvel = (-1) * this.xvel
    } else if (this.y < 0 || this.y > height) {
      this.yvel = (-1) * this.yvel
    }
  }
}

function mousePressed() {
  camminatori.push(new Walker(mouseX, mouseY))
}

function keyPressed() {
  camminatori.pop()
}