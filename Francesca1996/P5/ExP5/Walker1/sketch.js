// Walker 1 by francy96 @Francesca1996 
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// Dotare i camminatori di indipendenza

let x;
let y;

posizione = [];

function setup() {
  createCanvas(400, 400);
  
  x = width / 2;
  y = height / 2;
   
 frameRate(10);
}

function draw() {
  background('#7933ff');
  
  
  strokeWeight(10);
  stroke(255);
  rect(x,y, 100, 20);
  circle(x, y - 10, 20, 20);
  circle(x + 100, y - 10, 20, 20);
  point(x + 40, y - 5);
  point(x + 60, y - 5);
  //stroke(255);
  
  
  let scelta = int(random(4)); //numero tra 0 e 3
  
  if (scelta == 0) {
    x ++;                     //dx
    fill('#ceff00');
  } else if (scelta == 1) {
    x --;                     //sx
    fill('#7933ff');
  } else if (scelta == 2) {
    y ++;                    //giù
    fill('#ceff00');
  } else {
    y --;                    //su
    fill('#7933ff');
  }
  posizione = [x, y];
  console.log(posizione);
}

function keyPressed (){
 text(posizione, x - 25, y - 10); 
}





