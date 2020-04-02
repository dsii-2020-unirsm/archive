function setup() { 
  createCanvas(500, 500);
  frameRate(10);
  rectMode(CENTER);
} 

function draw() { 
  background(10);
  for (var i = 0  ;  i < 25  ;  i++) {
    for (var v= 0; v < 25; v++) {
    
    if (i % 2 == 0 || v % 2 == 0) {
      strokeWeight(2);
      stroke(random(255), random(255), 255);
      noFill();
      ellipse(i*25, v*25, 10, 10);
      
    }else {
      fill(random(255), random(255), 255);
      rect(i*25, v*25, frameCount%20, frameCount%20);
      }
    }
  }
}