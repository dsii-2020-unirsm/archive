// Pattern Var10Print(3). by Federico Topa
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


var x = 0;
var y = 0;

function setup() {
  createCanvas(680, 500);
  frameRate(18);
  background(0);
  //background(255);
}

function draw() {
  noStroke();
  //fill(24, 60, 132);
  fill(255);  
  //rect(x+20, y+20, 10, 10);

 if (random(1) > 0.5) {
    noStroke();
    fill(0, 255, 0);
    triangle(x, y, x+35, y, x+35, y+35);
    noStroke();
    fill(255, 0, 0);
    ellipse(x+16, y+20, 25, 25);
   	noStroke();
   	fill(0);
   	ellipse(x+16, y+20, 8, 8);
  } 
  else {
    noStroke();
    fill(0, 0, 255);
  	triangle(x, y, x, y+35, x+35, y);
    noStroke();
    fill(200, 0, 159);
    ellipse(x+20, y+20, 25, 25);
    noStroke();
   	fill(0);
   	ellipse(x+20, y+20, 8, 8);
    
  }

  x += 35;
  if (x > width) {
    x = 0;
    y += 35;
  }

  if (y > height) {
   background(0);
  	//background(255);
    x = 0;
    y = 0;
  }
}