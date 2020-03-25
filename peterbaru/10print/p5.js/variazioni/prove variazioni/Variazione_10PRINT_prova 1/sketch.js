// Pietro Baruzzi @peterbaru © 2017 MIT License
// Variazione 10PRINT | San Marino, IT | 3.2020
// Educational purpose, made for DSII2020 lab @UniRSM

let w = 0;
let h = 0;
let dim = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(4);
}


function draw() {
  stroke ("#f49b31");
  w += dim;
  if (random(2) < 1) {
  circle(w + dim, h +dim , w+dim, h);
  } else {
  circle(w + dim , h , w, h+dim);
  }
  
  if (w>windowWidth) {
    background("#867ade");
    w=0;
    h+=dim;
  }
  
}

// aggiungi camminatori se premi il mouse
function mousePressed() {
  w = 0;
  h = 0;
  background("#3a31f4");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}