// -
// Pattern con modulo by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

function setup() {
createCanvas(600, 600);
colorMode(HSB);
noStroke();
rectMode(CENTER);

}

function draw() {
  
let from = color(218, 165, 32);
let to = color(72, 61, 139);
let interA = lerpColor(from, to, 0.33);
let interB = lerpColor(from, to, 0.66);
  
frameRate(5);
  
if (random(2)<0.25) {
fill(interA);
}
else if (random(2)<0.5) {
fill(from);
}
else if (random(2)<0.75) {
fill(interB);
}
else {
fill(to);}
  
  for (let x = 0; x<=width; x+=30) {
    for (let y=0; y<=height; y+=60) {
      rect(x, y, frameCount%30, frameCount%60);
    }
  }
  
   for (let x = 0; x<=width; x+=30) {
    for (let y=0; y<=height; y+=30) {
      
      ellipse(x, y, frameCount%30, frameCount%30);
      
      if (random(2)<0.25) {
      fill(interA);
      }
      else if (random(2)<0.5) {
      fill(from);
      }
      else if (random(2)<0.75) {
      fill(interB);
      }
      else {
      fill(to);
      }
    }
  }
}