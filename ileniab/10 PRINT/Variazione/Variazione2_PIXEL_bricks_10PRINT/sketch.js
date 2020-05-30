
// -
// Pixel-bricks 10PRINT by Ilenia Balella [10PRINT, commodore64]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10PRINT book for https://nickm.com/trope_tank/10_PRINT_121114.pdf
// —
//



let x = 0; //coordinata x 
let y = 0; //coordinata y 
let dim = 16; 

let t = 0;
let t1 = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  //frameRate(5);
}

function draw() {
  translate((-dim/2),windowHeight+(dim/2));
  x += dim;
let colore = noise(t);
let colore1 = noise(t1);
//colore = map(colore, 0, 1, 0, width);
colore1 = map(colore1, 0, 1, 0, width);

  
  t += 0.01;
  t1 += 0.05;
  
 fill(colore1%255,colore%255,colore%255);

    rect(x, y, dim, dim);


  if (x> windowWidth) {
    x = 0;
    y -= dim;
  }
  if (y + dim < -(windowHeight)) {

    x = 0;
    y = 0;
  }

}
