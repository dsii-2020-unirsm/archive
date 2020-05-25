// -
// variazione10Print 1.1 by Angelica [10Print, commodore64]
// 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
// 
// —


let h = 0;
let w = 0;
let dim = 30;
let t=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#B88199");
}

function draw() {
  
  let r = 255 * noise(t+5);
  let g = 255 * noise(t+25);
  let b = 255 * noise(t+50);
  
  fill(r,g,b);
  frameRate(30); //velocità 
  translate((-dim/2), windowHeight-(dim/2));
  
  w += dim;

  if (random(2) <= 0.5) {
  ellipse(w, h, dim+2, dim+2);
  stroke('#B88199');
    
  } else if (random(2) > 0.5 && random(2) <= 1) {
  noStroke();
  ellipse(w, h, dim+6, dim+6);
    
  } else if (random(2) > 1 && random(2) <= 1.5) {
  ellipse(w, h, dim+9, dim+9);
  strokeWeight(5);
 
  } else {
  ellipse(w, h, dim+12, dim+12);
  strokeWeight(10);
  }
  
  t+= 0.08; //velocità
  
  if (w > windowWidth) {
    w=0;
    h-=dim;
  }
  
  if (h<(-windowHeight)) {
    w=0;
    h=0;
  }
  
}