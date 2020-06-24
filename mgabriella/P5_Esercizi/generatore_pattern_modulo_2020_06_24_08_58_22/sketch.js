// -
// generatore di pattern by mgabriella [pattern, colori]
// 2020 © Maria Gabriella @mgabriella, Daniele @Fupete and the course DSII2020 at //DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/mgabriella
// Educational purposes, MIT License, 2020, San Marino
// —
let x;
let y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //frameRate(50);
    background(0);
    rectMode(CENTER);
}

function draw () {
    frameRate(10);
    for (var x = 0; x<= 50; x++) {
    for (var y= 0; y<= 100; y++) { 
      if (x % 2 == 0 || y % 2 == 0) {
      stroke(random(50), random(150), 255);
      rect(y*20, x*20, cos(frameCount), sin(frameCount));
        rect(y*20, x*20, frameCount%10, frameCount%10);
      }else{
      stroke(random(230), random(300), 30);
      fill(random(180), random(300), 150);
      rect(y*20, x*20, sin(frameCount), frameCount%30);
        circle(y*20, x*20, frameCount%10, frameCount%10);
      }
    }
  }
}
