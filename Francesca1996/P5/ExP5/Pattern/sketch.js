// Pattern 1 by francy96 @Francesca1996 
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let larghezzaRect = 0;
let altezzaRect = 0;

let agrid = 0;
let bgrid = 0;

function setup() {
  createCanvas(800, 800);
  smooth();
  
  rectMode(CENTER);
}

function draw() {
  background(30);
  frameRate(10);
  
  agrid = 50 + 2;
  bgrid = 50 + 2;
  
  for (let a = 0; a < width; a += agrid) {
    for (let b = 0; b < height; b += bgrid) {
     rect(a, b, larghezzaRect, altezzaRect);
     fill(30);
     strokeWeight(2);
      
      if (mouseX <= width / 2) {
        larghezzaRect = (frameCount%50);
        altezzaRect = (20);
        stroke('#ffffff');
        rect(a, b, larghezzaRect, altezzaRect );
        ellipse(a, b, larghezzaRect  / 2, altezzaRect / 2);
        fill(30);
        
      } else if (mouseY <= height / 2) {
        larghezzaRect = (20);
        altezzaRect = (frameCount%50);
        stroke('#ffffff');
        circle(a, b, larghezzaRect, altezzaRect );
        rect(a, b, larghezzaRect  / 2, altezzaRect / 2);
        fill(30);
        
        
      }
      //rect(a, b, a, b);
  }
 }
}