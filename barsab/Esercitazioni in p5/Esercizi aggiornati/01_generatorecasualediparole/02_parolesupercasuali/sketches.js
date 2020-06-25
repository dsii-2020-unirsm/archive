// -
// Generatore di parole supercasuali by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

let b;
let i;
let lettera;
let np = 10;
let nl = 8; 
let lettere = ["a", "b", "c", "d", "e", "f", "g", "h","i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"];
let parola= "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ECF1F4');
  frameRate(10);
  fill('#1e1e24');
}

function draw() {
 for(b=0; b < np; b++) {
  parola= "";
  for(i=0; i< nl; i++) {
   lettera = random(lettere);
   parola += lettera;
   }
  text(parola,random(width), random(height));
    textSize(random(10, 60));
    fill('#1e1e24');
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#ECF1F4');
}


