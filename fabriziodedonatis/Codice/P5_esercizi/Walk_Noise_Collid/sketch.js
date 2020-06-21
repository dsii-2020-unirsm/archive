var bubbles=[];


let h;
let w;
let nBubble=10;

function setup() {
  w= windowWidth;
  h= windowHeight;
  createCanvas(w, h);
  //colorMode(HSB,360)
  for (var i =0; i<nBubble; i++) {
    bubbles[i]= new Bubble (random(width),random(height));
  }
  
  
}

function draw() {
  background(50);
  for (var i =0; i< bubbles.length; i++) {
    bubbles[i].update();   
    bubbles[i].display();
    for (var j =0; j< bubbles.length; j++) {
      if ( i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
        bubbles[i].reverse();
        bubbles[j].reverse();
        
  }
    }
  }
  
  
  
  
  
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}