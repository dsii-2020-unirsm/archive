let cubes = []
let n = 4
let world = 700
let quantiCubi = n*n*n
console.log(quantiCubi)
let unit = world / n
let noiseScale = 0.02
let t = 0
let tIncr = 0.1

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  pixelDensity(displayDensity())

let index = 0
for (let x = 0; x < n; x++)
  for(let y = 0; y < n; y++)
    for(let z = 0; z < n; z++) {
      cubes.push(new Cube(index))
      cubes[index].x = x
      cubes[index].y = y
      cubes[index].z = z
      index++
    }
  
  console.log(cubes.length)
}

function draw() {
  background(0);
  
  orbitControl()
  
  translate(-world / 2 - unit / 2, -world / 2 - unit / 2, -world / 2 - unit / 2)
  
  for(let i=0; i<cubes.length; i++) {
    cubes[i].display()
  }
  
/*  noFill()
  stroke(255)
  strokeWeight(4)
  translate(world/2 - unit / 2, world/2 - unit / 2, world/2 - unit / 2)
  box(world)
  */
  t+=tIncr
  }

function Cube(_id) {
  this.id = _id
  this.x = 0
  this.y = 0
  this.z = 0
  
  this.display = function() {
    push()
    fill(noise(this.x*noiseScale*t, this.y*noiseScale*t, this.z*noiseScale*t)*255, 200)
    stroke(noise(this.x*noiseScale*t, this.y*noiseScale*t, this.z*noiseScale*t)*255)
    translate(this.x*unit, this.y*unit, this.z*unit)
    box(unit)
    pop()
  }
}