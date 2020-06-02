// 
// -
// variazione 10Print - cerchi e colori by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

let w = 16;
let h =16;
let index = 0;

function setup() {
  //size(640, 384);
  createCanvas(640, 384);
 background("#0000ff");
 strokeWeight(3);
 stroke(224);
 //smooth();
 noSmooth(); 
  
}

function draw() {
  //background(220);
   let x1 = w*index;
 let x2 = x1 + w;
 let y1 = h*23;
 let y2 = h*24;
 if (random(2) < 1) {
  strokeWeight(2);
   stroke("white");
   fill(223,152,100);
 circle(x1+8, y1, w);
 } else {
   strokeWeight(2);
   stroke("yellow");
   noFill();
 circle(x1+8, y1, w);
 }
 index++;
 if (index == width/w) {
  p = get(0, h, width, h*23);
 background("#0000ff");
 set(0, 0, p);
 index = 0;
 }
}
