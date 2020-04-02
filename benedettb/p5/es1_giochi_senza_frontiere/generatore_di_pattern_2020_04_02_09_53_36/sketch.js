// generatore di pattern by Benedetta Borghi con Eleonora Di Francesco
// 2019 © Benedetta Borghi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup() { 
  createCanvas(400, 400);
  frameRate(2);
  colorMode(HSL);
} 

function draw() { 
  background(220,0,0);
  for (var i = 0  ;  i < 40  ;  i++) {
    
    for (var v= 0; v < 40 ; v++) {
    
    if (i % 2 == 0) {
      fill (100,40,50);
    } else {
      fill (90,10,70);
    }
    ellipse (i*10+5, v*10+5, 10); 
      
    }
  }
}