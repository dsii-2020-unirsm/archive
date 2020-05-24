// -
// variazione10Print 0.2 by Angelica [10Print, commodore64]
// 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
// —


let w = 0;
let h = 0;
let size = 30;
let t=0;

function setup() {
  
createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
}

function draw() {
  
  noStroke();
  noSmooth();
  fill(0,0,255)
  
  
  if (random(3)<1) {
  triangle(w, h, w+size, h, w + (size/2), h+size); 
  } else if  (random(3) > 1.5 && random(2) <= 2){
  triangle(w+size, h, w+size, h+size, w, h+(size/2));
} else if (random(2) > 2 && random(2) <= 2.5){
 triangle(w+size, h+size, w, h+size, w + (size/2), h);
} else {
 triangle(w, h+size, w, h, w+size, h+(size/2)); 
}
  
 w=w+size;

if (w > windowWidth) {
    w=0;
    h+=size;
   }

}


  
 
  
