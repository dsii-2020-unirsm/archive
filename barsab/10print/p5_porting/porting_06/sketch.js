// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 800);
  background('#463ea3');
  strokeWeight(3);
  stroke(224);
}

function draw() {

  if (random(1) > 0.5) {
    line(x, y, x+40, y+40);
  } 
  else {
    line(x, y+40, x+40, y);
  }

  x += 40;
  if (x > width) {
    x = 0;
    y += 40; 
  }

  if (y > height) {
    x = 0;
    y = 0;
  }
}
