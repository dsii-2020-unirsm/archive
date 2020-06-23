// -
// Esercizi p5 0.2 by Angelica Gasperoni [pattern, modulo]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// 

var dim = 10
var quante = 8

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke()

  
  dim = (map(mouseX, 0, width, 5, 10))
  quante = (map(mouseY, 0, height, 2, 20))
  for (var col = 0; col < width / (dim * quante); col++) {
    for (var rig = 0; rig < height / (dim * quante); rig++) {
      offsetX = dim * quante * col
      offsetY = dim * quante * rig
      disegnaQuadri(offsetX, offsetY)
    }
  }
  
      
      if (mouseX<=300) {
        fill( (random(100, 255)), (random(255)), (random(250)), 200); 
      } else if (mouseY<=600) {  
        fill(0, (random(100, 255)), (random(100, 255)), 200); 
      } else { 
        fill( (random(10, 255)), (random(10, 255)), (random(10, 255)), 155); 
      }
}

function disegnaQuadri(offsetX, offsetY) {
  for (var x = 0; x < quante*2; x++) {
    for (var y = 0; y < x % quante; y++) {
      square(offsetX + x, offsetY + y, frameCount%50, frameCount%50) //modulo utilizzato nella dimenzione degli oggetti
    }
  }
  }