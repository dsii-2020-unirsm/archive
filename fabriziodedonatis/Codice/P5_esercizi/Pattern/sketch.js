// -
// pattern 3 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// Help:
// move the mouse to change the opacity
// —

let larg;
let altez;
let w;
let h;
let divis=25;
let cont;

function setup() {
  w= windowWidth;
  h= windowHeight;
  createCanvas(w, h);
  rectMode(CENTER);
  larg= w/divis;
  altez= w/divis;
  //frameRate(10)
}

function draw() {
  background(255);
  cont=0;
 let opaX = map(mouseX, 0, width, 0, 255)
 let opaY = map(mouseY, 0, width, 0, 255)
  for (let gridY=0; gridY<divis+1; gridY++) {
      for (let gridX=0; gridX<divis+1; gridX++) {
  
        if (gridY%3==0 || gridX%3==0 ){
          
          push()
          noStroke()
          //stroke(150,200,50)
          fill(210,210,10,opaY)
          triangle(gridX*larg, gridY*altez, (gridX*larg)+larg, (gridY*altez)-altez, (gridX*larg)-larg, (gridY*altez)-altez)
         
         // line(gridX*larg, gridY*altez, (gridX*larg)+larg, (gridY*altez)-altez)
          //line(gridX*larg, gridY*altez, (gridX*larg)+larg, (gridY*altez)-altez)
          pop()
          
        } else if (gridY%2==0 || gridX%2==0 ){
          stroke(155,10,200)
          strokeWeight(1.5);
          line(gridX*larg, gridY*altez, (gridX*larg)+larg, (gridY*altez)-altez)
          line(gridX*larg, gridY*altez, (gridX*larg)+larg, (gridY*altez)+altez)
        }
        
        else if (gridY%1==0 || gridX%1==0 ){
          push()
          noStroke()
          fill(210,10,10,opaX)
          triangle((gridX*larg)-larg, (gridY*altez)-altez, (gridX*larg)-larg, (gridY*altez)+altez, (gridX*larg)+larg, (gridY*altez)+altez)
          pop()
        }
  
  
  }
  
  
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}