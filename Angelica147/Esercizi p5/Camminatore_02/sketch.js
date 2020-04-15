let walkers = []
let n = 1
let world = 700

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  pixelDensity(displayDensity())

for (let i=0; i<n; i++)
walkers.push(new Walker(i))

}

function draw() {
  background(0);
  lights()
  
  orbitControl()
  
  translate(-world / 2, -world / 2, -world / 2)
  
  for(let i=0; i<walkers.length; i++) {
    walkers[i].display()
    walkers[i].walk()
  }
  
  noFill()
  stroke(255)
  strokeWeight(4)
  translate(world/2, world/2, world/2)
  box(world)
  }

function mousePressed() {
  walkers.push(new Walker(walkers.length))
}

function keyPressed() {
  walkers.pop()
}

function Walker(_id) {
  this.id = _id
  this.x = this.r = 0
  this.y = this.g = 0
  this.z = this.b = 0
  this.tDelta = random(100)
  this.t = random(100)
  this.tIncr = random(.5, 2) * 0.01
  this.size = 0
  
  this.display = function() {
    push()
    this.r = map(this.x, 0, world, 0, 255)
    this.g = map(this.y, 0, world, 0, 255)
    this.b = map(this.z, 0, world, 0, 255)
    this.size = noise(this.t + 15) * 100
    fill(this.r, this.g, this.b)
    noStroke()
    translate(this.x, this.y, this.z)
    sphere(this.size)
    pop()
  }
  
this.walk = function () {
  this.x = noise(this.t) * world
  this.y = noise(this.t + 5) * world
  this.z = noise(this.t + 10) * world
  this.t += this.tIncr
  }
}