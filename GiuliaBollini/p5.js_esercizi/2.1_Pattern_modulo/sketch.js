function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(250);
  noStroke();
  frameRate(7);
  
  for (let x = 0; x < width; x+=25) {
    for (let y = 0; y <height; y+=25) {
      
      if (mouseX<=300) {
        fill( (random(100, 255)), (random(255)), (random(250)), 200); 
      } else if (mouseY<=600) {  
        fill(0, (random(100, 255)), (random(100, 255)), 200); 
      } else { 
        fill( (random(10, 255)), (random(10, 255)), (random(10, 255)), 155); 
      }
      
    ellipse (x,y,frameCount%40, frameCount%40);
  } }
  }