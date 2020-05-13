// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  frameRate(10);
    for (var x = 0; x<=width; x+=50) {
    for (var y=0; y<=height; y+=70) { 
      if (x % 4 == 0 || y % 4 == 0) {
      fill((random(100, 255)), (random(100, 255)), (random(125, 255)), 255);           
      rect(x,y,frameCount%50, frameCount%70);
      
    } else {
      fill(random(255), random(255), 255);
      rect(x*50, y*70, frameCount%50, frameCount%70);
      }
    }
  }
}

