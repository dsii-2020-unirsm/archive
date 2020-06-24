// -
// Variazione 10PRINT 0.1 by GiuliaBollini
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [a] delete all
//
// —

let w = 0; //width
let h = 0; //height
let x1;
let x2;
let y1;
let y2;
let dim = 30;

function setup() {
  createCanvas(windowWidth, windowHeight); //dimensione dello schermo
  background(250);
}

function draw() {  
  
  x1 = w + 15;
  x2 = w - 15; 
  y1 = h + 15; 
  y2 = h - 15; 
  
  translate((-dim/2), windowHeight-(dim/2));
  frameRate(20); //velocità 
   
  w += 40; //distanza tra gli oggetti
 
  if (random() < 0.5) { 
  noStroke();
    fill(random(100,250),random(100,250),random(100,250),150); 
    ellipse(x1+10,y1,30);
    
  } else {
  noStroke()
    ellipse(x2+20,y2,25);
    fill(random(102,250),random(102,250),random(102,250));
    ellipse(x2+20,y2,10); 
    fill(random(100,250),random(100,250),random(100,250));
  }

  if (w > windowWidth) {
    w=10;
    h-=dim;
  }
  
  if (h<(-windowHeight)) {
    w=50;
    h=50; 
  }
}

function keyTyped() {
  if (key === 'a') { // se premo "a" pulisco il background
    background(255);}}