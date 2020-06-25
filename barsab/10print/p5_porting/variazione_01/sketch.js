// -
// 10 print variation 0.2 by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

let x = 0;
let y = 20;
size = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
}

function draw() {
  if (random(1) > 0.5) {
    fill (random(255), 0, 100);
    rect(x, y, size, size);
  } 
  else {
    fill (random(255), 0, 200);
    ellipse (x, y, size);
  }
  x+=20
  if (x > windowWidth) {
    x = 0 ;
    y += 20;
  } 
  if (y > windowHeight) {
   x=x+20;
   y=x+20;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
