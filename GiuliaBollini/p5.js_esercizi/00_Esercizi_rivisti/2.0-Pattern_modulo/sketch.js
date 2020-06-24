// Pattern_modulo 0.1 by GiuliaBollini 
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [mouse] change square fill


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  noStroke();
  frameRate(5);
  
  for (let x = 0; x < width; x+=25) {
    for (let y = 0; y <height; y+=25) {
      
      if (mouseX<=300) {
        fill( (random(0, 255)), (random(0, 255)), (random(0, 250),50), 150); 
      } else { 
        fill( (random(100, 255)), (random(100, 255)), (random(100, 255)),150); 
      }   
    rect (x,y,frameCount%15, frameCount%60); //modulo per la dimensione dei quadrati
    } 
  }
}