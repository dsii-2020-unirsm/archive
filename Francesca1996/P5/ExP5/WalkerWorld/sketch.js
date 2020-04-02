// Walker World by francy96 @Francesca1996
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


let x = 0;
let y = 0;
let xvelocità = 7;
let yvelocità = 10;
position = [];

function setup() {
  createCanvas(400,400);
  background('#7933ff');
  fill('#ff4606');
}
 
function draw (){
  x = x + xvelocità;
  y = y + yvelocità;
  
  if ((x > width) || (x < 0)) {
    xvelocità = xvelocità * -1;
    fill('#ff4606');
  }
  if ((y > height) || (y < 0)) {
    yvelocità = yvelocità * -1;
    fill('#ff7443');    
  }
  
  rect(x,y,16,16);
  stroke(0);
  
  position = [x, y];
  console.log(position);
}