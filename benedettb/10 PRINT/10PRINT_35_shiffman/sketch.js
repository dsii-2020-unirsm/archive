// VARIAZIONE CAP 35 by Benedetta Borghi
// 2019 © Benedetta Borghi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let x = 0;
let y = 0;
let spacing = 20;


function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  stroke(255);
  if (random(1) > 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  
x = x + spacing;
if (x > width) {
  x = 0;
  y= y + spacing;
}
}