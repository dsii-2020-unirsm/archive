// -
// Pattern by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  frameRate(10);
    for (var x = 0; x<=80; x++) {
    for (var y=0; y<=80; y++) { 
      if (x % 4 == 0 || y % 4 == 0) {
      fill((random(100, 255)), (random(100, 255)), (random(100, 255)), 255); 
      circle(x*20, y*20,  frameCount%20, frameCount%20);
    } else {
      fill(random(255), random(255), 255);
      rect(y*20, x*20, frameCount%20, frameCount%20);
      }
    }
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
