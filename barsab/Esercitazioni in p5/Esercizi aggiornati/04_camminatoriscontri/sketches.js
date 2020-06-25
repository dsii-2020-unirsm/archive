// -
// Walker Noise Scontri by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @Thecodingtrain https://www.youtube.com/watch?v=uAfw-ko3kB8&t=550s 



let walkers = [];
let n = 40;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i ++){
    walkers[i] = new Walker(random(width), random(height));
  }
  t += 0.02 
}

function draw() {
  background(255);
  for (let i = 0; i < walkers.length; i ++){
    walkers[i].walk();
    walkers[i].display();
    for (let j = 0; j < walkers.length; j++){
      if (i != j && walkers[i].intersects(walkers[j])) {
        walkers[i].changeColor(220);
        walkers[j].changeColor(220);
        walkers[i].changeDirection();
        walkers[j].changeDirection();
        walkers[j].changeDimensioni();
        walkers[i].changeDimensioni();
      } else {
        walkers[i].changeColor(0);
        walkers[j].changeColor(0);
      }
    }
  }
}

function Walker (id, x, y, r) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.r = random(10,30);
  this.size = this.r *2
  this.t = random(10000);    
  this.tIncr = random(.5,1) * 0.01;
  this.brightness= 0;
  
    this.display = function(){
    noStroke();
    fill(this.brightness, 45, 100);
    ellipse(this.x, this.y, this.size, this.size);
  }
    this.walk = function(){
    this.x = map(noise(this.t+5), 0, 1, 0, width);
    this.y = map(noise(this.t+10), 0, 1, 0, height);
    this.t += this.tIncr
  }
  this.intersects = function (other) {
    d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
     return true;
      } else {
      return false;
      }
   }
  this.changeColor= function(bright) {
   this.brightness = bright;
  }
  this.changeDirection = function() {
    this.x= this.x*-10;
    this.y= this.y*-10;
  }
  this.changeDimensioni= function (){
  this.size+=0.05
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
