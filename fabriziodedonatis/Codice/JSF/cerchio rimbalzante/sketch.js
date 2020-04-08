// cerchio rimbalzante - exercise by P5 example
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 3.8; // Speed of the shape
let yspeed = 3.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(0);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill (255);
  ellipse(xpos, ypos, rad*3, rad*3);
  fill (0);
  ellipse(xpos, ypos, rad, rad);
   fill (255);
  ellipse(xpos, ypos, rad*0.3, rad*0.3);
  
  
}