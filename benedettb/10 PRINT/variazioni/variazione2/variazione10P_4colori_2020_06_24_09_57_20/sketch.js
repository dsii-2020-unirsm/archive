//  
// Variazione 10 PRINT by Benedetta Borghi
// 2020 © Benedetta Borghi, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// Credits/Thanks to:
// Daniel Shiffman 10 print variation for original code

let spacing;
let x= 0;
let y= 0;
let x1;
let y1= 0;
let x2;
let y2;
let x3= 0;
let y3;



function setup() {
  spacing=20;
  createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(60);
  
  x1=width-spacing;
  x2=width-spacing;
  y2=height-spacing;
  y3=height-spacing;
  
  

}

function draw() {
  stroke(random(255),random(255),random(255));
  strokeWeight(4);
  
  
  
  if (random(1) > 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
 
  
x = x + spacing;
if (x > windowWidth) {
  x = 0;
  y= y + spacing;
  }

if (y>windowHeight) {
  y=0;
  x =0;
}
  
  
 if (random(1) > 0.5) {
    line(x1, y1, x1 + spacing, y1 + spacing);
  } else {
    line(x1, y1 + spacing, x1 + spacing, y1);
  }
  
  y1 = y1 + spacing;
if (y1 > windowHeight) {
  y1 = 0;
  x1= x1 - spacing;
  }
  
  if (x1<0) {
    y1 =0;
    x1 =windowWidth;
  }
  
  if (random(1) > 0.5) {
    line(x2, y2, x2 + spacing, y2 + spacing);
  } else {
    line(x2, y2 + spacing, x2 + spacing, y2);
  }
  
   x2 = x2 - spacing;
if (x2<0) {
  x2 = windowWidth;
  y2= y2 - spacing;
  }
  
   if (y2<0) {
    y2 =windowHeight;
    x2 =windowWidth;
  }
  
   if (random(1) > 0.5) {
    line(x3, y3, x3 + spacing, y3 + spacing);
  } else {
    line(x3, y3 + spacing, x3 + spacing, y3);
  }
  
   y3 = y3 - spacing;
if (y3<0) {
  y3 = windowHeight;
  x3= x3 + spacing;
  }
  
   if (x3>windowWidth) {
    y3 =windowHeight;
    x3 =0;
  }
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





