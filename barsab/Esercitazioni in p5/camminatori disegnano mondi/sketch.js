// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let w;

function setup(){
createCanvas(windowWidth, windowHeight, P2D);
frameRate(100);
w= new walker();
background(25,25,37);
}
let t = 0;
let t1 = 0;

function draw(){

t+=0.01;
t1+=0.05;
let r = noise(t);
let r1 = noise(t1);
r=map(r,0,1,0,width);
r1=map(r1,0,1,0,width);

w.display(r,r1);
}
function walker() {
 this.display = function(r,r1) {
  push()
  noStroke();
  fill(r%255,r1%255,r%255);
  ellipse(r,r1,width/100,height/100);
  pop()
  }
}
