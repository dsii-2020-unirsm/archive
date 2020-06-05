// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let walkers= []
let n = 40 //numero di camminatori
let world = 1000      //scatolina nel quale le sfere si muovono

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for (let i=0; i<n; i++) {
  walkers.push(new Walker(i))  //crea il nuovo camminatore e gli passa un id
  }
}

function draw() {
  background(0);
  lights()
  orbitControl()
  translate(-world/2,-world/2,-world/2) //partire dal centro
  
  for (let i=0; i<walkers.length; i++) { 
  walkers[i].display()
  walkers[i].walk()
  }
  noFill()
  noStroke()
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
  this.t = random(100)     //se lascio 0, partono tutte dallo stesso punto/posizione
  this.tIncr = random(.5,2)*0.01   //incremento
  this.size = 0
  
  this.display = function() {
  push()
  this.r = map(this.x, 0, world, 0, 255)
  this.g = map(this.y, 0, world, 0, 255)
  this.b = map(this.z, 0, world, 0, 255)   
  this.size = noise(this.t + 15)* 70
  fill(this.r, this.g, this.b)
  noStroke()
  translate(this.x, this.y, this.z)  
  box(this.size)
  pop()
  }
  this.walk = function() {          
  this.x= noise(this.t) * world 
  this.y= noise(this.t+5) * world 
  this.y= noise(this.t+10) * world 
  this.t += this.tIncr
 }

}
