// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let frameCount = 20;
let stepX; 
let stepY; 

function setup() {
  createCanvas(600, 600);
  background('#463ea3');

  stepX = width / frameCount;
  stepY = height / frameCount;

smooth();
noFill();
stroke(255);
randomSeed(0)

frameRate(1)
}

function draw() {
	background('#463ea3')
for (var gridY=0; gridY<height; gridY += stepY) {
  for (var gridX=0; gridX<width; gridX += stepX) {
    let posX = gridX;
    let posY = gridY;

    let toggle = floor(random(2));
    if (toggle == 0) {
     strokeWeight(2);
     line(posX, posY, posX+stepX, posY+stepY);
    }
    if (toggle == 1) {
     strokeWeight(2);
     line(posX, posY+stepY, posX+stepX, posY);
    }
  }
}
	
}
