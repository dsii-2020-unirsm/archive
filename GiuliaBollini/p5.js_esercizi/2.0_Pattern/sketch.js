function setup() {
  createCanvas(500, 500, P2D);
  background(110,20,20,70);
  noStroke();
  
for (var x=0;  x<width;  x+=10) {
    for (var y=0;  y<height;  y+=10) {
      
if (random() < 0.2) {  
  fill(250); 
  circle(x+10,y+10,7,0);
  fill(250,10,0);
  circle(x,y,5,5);
}}}}