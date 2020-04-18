// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup() {
  createCanvas(800, 800);
  background(0);
  smooth();
  noStroke();
  rectMode(CENTER);
}

function draw() {
  frameRate(10);
  //disegno una griglia di rettangoli la cui dimensione aumenta progressivamente attraverso l'uso del modulo
  for (let x = 0; x<=width; x+=50) {
    for (let y=0; y<=height; y+=70) { 
      fill((random(100, 255)), (random(100, 255)), (random(125, 255)), 255); 
      rect(x,y,frameCount%50, frameCount%70);
    }
  }
}
