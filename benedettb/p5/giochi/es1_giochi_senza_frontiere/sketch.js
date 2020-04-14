let step = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);

  
  colorMode(HSB);
  
  //fill(0, 255, 255);
  
}

function draw() {
  background(0, 0, 0);
  
  /*da controllare
  push(); // < equivalente di pushMatrix in Processing
  translate(0,0); //0);*/
  
   let stepR = radians(step);
  
  for(var a = 0; a <= 360; a += step) {
    
    fill(a, 255, 255);
    stroke(a, 255, 255);
    
    let aR = radians(a);
    
    arc(width/2, height/2, 500, 500, aR, aR+stepR, PIE);
    
    // e poi un bel cerchio nero per fare un anello
  noStroke();
  fill(0);
  ellipse(width/2, height/2, 200, 200);
  }
  //pop();
  
}


function keyPressed() {
  if (key == ' ') {
    if (step == 1) {
      step = 10;
    } else {
      step = 1;
    }
  }
}

/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}*/