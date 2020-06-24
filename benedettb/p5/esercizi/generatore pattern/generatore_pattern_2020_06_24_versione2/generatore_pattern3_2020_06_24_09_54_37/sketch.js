// Generatore di pattern by Benedetta Borghi
// 2020 © Benedetta Borghi, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let diameter;
let angle = 0;

function setup() { 
  createCanvas(500,500);
  frameRate(5);
  colorMode(HSL);
  diameter = 10;
} 

function draw() { 
  background(150,100,50);
  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;
  //stroke(240,100,50);
  //strokeWeight(1 + (sin(frameCount % 15)));
  for (var i = 0  ;  i < 50 ;  i++) {
    
    for (var v= 0; v < 50 ; v++) {
    
    if (i % 2 == 0) {
      fill (240,100,50);
    } else {
      fill (180,100,50);
    }
      
    ellipse (i*10+5, v*10+5,d1,d2);
       angle += 0.02;
   
      
    }
  }
}