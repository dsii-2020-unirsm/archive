// Wireframe testo, interazione con Mouse. by Federico Topa
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

var lettera = "FeTo";

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,0,255);
  stroke(255,0,255);
  noFill();
  textFont("times new roman");
  textSize(6);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(0,0,205);
  noStroke();
  fill((0,0,205));
  textSize((mouseX-width/2)*10+1);
  text(lettera, width/2, mouseY);
}

function mouseDragged(){

  stroke(255);
  noFill();
  textSize((mouseX-width/2)*10+1);
  text(lettera, width/2, mouseY);
}

