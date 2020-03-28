// Pietro Baruzzi @peterbaru © 2017 MIT License
// Variazione 10PRINT | San Marino, IT | 3.2020
// Educational purpose, made for DSII2020 lab @UniRSM

let w = 0;
let h = 0;
let dim = 50;
let t=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#867ade");
}


function draw() {
  noStroke();
  
  let r = 255 * noise(t+5);
  let g = 255 * noise(t+30);
  let b = 255 * noise(t+55);
  
  fill(r,g,b);
  frameRate(15);
  translate((-dim/2),windowHeight-(dim/2));
  
  w += dim;
  if (random(2) <= 0.5) {
  arc(w, h, dim, dim, 0, 0.5*PI);
  } else if (random(2) > 0.5 && random(2) <= 1) {
  arc(w, h, dim, dim, 0, PI);
  } else if (random(2) > 1 && random(2) <= 1.5) {
  arc(w, h, dim, dim, 0, 1.5*PI);
  } else {
  arc(w, h, dim, dim, 0, 2*PI);
  }
  
  t+= 0.01;
  
  if (w>windowWidth) {
   // background("#8gfade");
    w=0;
    h-=dim;
  }
  
  if (h<(-windowHeight)) {
    w=0;
    h=0;
    fill("#ffffff");
  }
  
}

// aggiungi camminatori se premi il mouse
function mousePressed() {
  w = 0;
  h = 0;
  if (random(2) <1) {
  background("#3a31f4");
  } else  {
   background("#867ade");
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}