  
// -
// Camminatori che generano mondi 0.6 by Angelica [modulo, push/pop]
// 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

 //Help:
// [mouse] change pattern's color

let modulo = 35;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  frameRate(50);
}


function draw() {
 for (x=0; x<(width*2); x+= modulo+35){
    for (y=0; y<(height*2); y+= modulo+35){
      
      
 push();
      this.r = map(mouseX, 0, width, 0, 255)
      this.g = map(mouseY, 0, height, 0, 255)
      this.b = random(255)
      stroke(this.r, this.g, this.b);
      noFill();
      circle(x, y, frameCount%(modulo*2), modulo);
      rect(x+modulo, y+modulo, frameCount%(modulo*2),frameCount%(modulo*2),2);

      pop();

           
    }
 }
}
