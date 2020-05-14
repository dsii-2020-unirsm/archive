// Walker Scontro by francy96 @Francesca1996
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let position;

let x = 200;
let y = 200;

let a = 220;
let b = 220;

let xvelocità = 7;
let yvelocità = 10;

let avelocità = 10;
let bvelocità = 7;

positionrect = [];
positioncircle = [];

function setup() {
  createCanvas(400,400);
  background(170);
  
  
  frameRate(10);
}
 
function draw (){
  x = int(x + xvelocità * random(-1, 1));
  y = int(y + yvelocità * random(-1, 1));
  background(170);
  
  
  if ((x > width) || (x < 0)) {
    xvelocità = xvelocità * -1;
    
  }
  if ((y > height) || (y < 0)) {
    yvelocità = yvelocità * -1;
       
  }
  
  
  rect(x,y,30,30);
  text('rect', x + 5 , y + 17);
  stroke(0);
  positionrect = [x, y];
  //console.log(positionrect);
  
  
  a = int(a + xvelocità * random(-1, 1));
  b = int(b + yvelocità * random(-1, 1));
  
  if ((a > width) || (a < 0)) {
    xvelocità = xvelocità * -1;
    
  }
  if ((b > height) || (b < 0)) {
    yvelocità = yvelocità * -1;
      
  }
  ellipse(a,b,40,40);
  text('circle', a - 12 , b + 4);
  stroke(0);
  positioncircle = [a, b];
  
  /*if (positionrect.x == positioncircle.a || positionrect.y == positioncircle.b ) {
  text('SCONTRO', (width /2) - 40, height / 2);
  
  }
  */
  if (positionrect.x == positioncircle.a || positioncircle.a == positionrect.x ||      positionrect.y == positioncircle.b || positioncircle.b == positionrect.y  ) {
  text('SCONTRO', (width /2) - 40, height / 2);
   
  }
  
  text('rect = x' + ' ' + x + ' y ' + ' ' + y, (width /2) - 40, (height / 2) + 10);
  text('circle = x' + ' ' + a + ' y ' + ' ' + b, (width /2) - 40, (height / 2) + 20); 
  text(BOLD);
  
  console.log(positioncircle);
  console.log(positionrect);
}



