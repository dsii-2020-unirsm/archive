let radius = 50;  
let c = new p5.Vector;  
speed = new p5.Vector(2.8, 2.2);  
direction = new p5.Vector(1, 1);  



function setup() {  
  createCanvas(400, 400);  
  stroke(255);  
  strokeWeight(200);  
  noFill();  

  ellipseMode(RADIUS);  
  c = new p5.Vector(width/2, height/2);  
}  

function draw() {  
  background(0);  
   c.x = c.x + (speed.x * direction.x);  
  c.y = c.y + (speed.y * direction.y);  

  if (c.x > width-radius || c.x < radius) {  
    direction.x *= -1;  
  }
  if (c.y > height-radius || c.y < radius) {  
    direction.y *= -1;  
  }  

  ellipse(c.x, c.y, radius, radius);  
  punto(c.x,c.y);  
}  
function punto(x, y) {  
  push();  
  fill(255);  
  noStroke();  
  ellipse(x, y, 10, 10);  
  pop();  
}  
