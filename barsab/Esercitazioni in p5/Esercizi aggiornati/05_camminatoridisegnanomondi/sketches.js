// -
// Camminatori che disegnano mondi by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @Thecodingtrain https://www.youtube.com/watch?v=BjoM9oKOAKY 

let walkers= []
let n = 750  //numero di camminatori
let xIncr = 0.01
let yIncr = 0.01
let tDelta= 0.0055
//t è la velocità
//t incr incremento velocità
// angle è l'angolo della linea

function setup() {
	createCanvas(windowWidth, windowHeight)
    background(0)
	noStroke()
	for (let i = 0; i < n; i++) {
        walkers.push(new Walker(i)) //crea il nuovo camminatore e gli passa un id
	}
}

function draw() {
  Walker.tIncr = map(mouseX, 0, width, 1, 8)
  Walker.Angle = map(mouseY, 0, height, 0, 2 * PI) //posizione verticale mouse
	for (let i = 0; i < walkers.length; i++) {
		walkers[i].update()
		walkers[i].show()
	}
}
function Walker(x_, y_) {
this.x = x_ || random(width)   //le sbarre stanno per "or"
this.y = y_ || random(height)
this.vel = createVector(0, 0)
this.t = 4 

  this.update = function () {
		let n = noise(this.x * xIncr, this.y * yIncr,tDelta)
        n = map(n, 0, 1, -2 * Walker.Angle + Walker.Angle, Walker.Angle) //parte con linee orizzontali
		this.vel = p5.Vector.fromAngle(n)
		this.vel.mult(this.t)
		this.x += this.vel.x
		this.y += this.vel.y

		if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
		if (this.y < 0) this.y = height
		if (this.y > height) this.y = 0
	}
  this.show = function () {
  this.r = map(this.x, 0, width, 0, 255)
  this.g = map(this.y, 0, height, 0, 255)  
  stroke((this.r), 0, (this.g), 55)
 line(this.x, this.y, this.x - this.vel.x, this.y - this.vel.y)
	}
}	

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
