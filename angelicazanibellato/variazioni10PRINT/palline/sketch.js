// generatore di pattern by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 204, 0);
  frameRate(5);
noStroke();
  
  for (let x=0; x<windowWidth; x+=40) {
    for (let y=0; y<windowHeight; y+=10)  {
      
      if (random(2)<1){
         fill(250);
    circle(x+10,y+10,10,10);
    fill(0,0,255);
    circle(x,y,5,5);
        fill(255,0,255);
    circle(x+5,y+5,5,5);
}
  }
}
}