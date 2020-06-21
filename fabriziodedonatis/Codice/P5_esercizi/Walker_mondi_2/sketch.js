// -
// Walker Mondi 2 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @codingtrain https://www.youtube.com/watch?v=uAfw-ko3kB8&t=550s 
//

var bubbles=[];


let h;
let w;
let nBubble=3;

function setup() {
  w= windowWidth;
  h= windowHeight;
  createCanvas(w, h,);
  colorMode(HSB,360)
  for (var i =0; i<nBubble; i++) {
    bubbles[i]= new Bubble (random(width),random(height));
  }
  
  
}

function draw() {
  //background(50);
  for (var i =0; i< bubbles.length; i++) {
    bubbles[i].update();   
    bubbles[i].display();
    for (var j =0; j< bubbles.length; j++) {
      if ( i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
        //bubbles[i].reverse();
        //bubbles[j].reverse();
        
  }
    }
  }
  
  
  triangle(bubbles[0].x, bubbles[0].y,bubbles[1].x, bubbles[1].y,bubbles[2].x, bubbles[2].y)
  
  
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}