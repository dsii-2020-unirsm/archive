// -
// PIXEL-GHOST 10PRINT by Ilenia Balella [10PRINT, commodore64]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10PRINT book for https://nickm.com/trope_tank/10_PRINT_121114.pdf
// —
//
// Help:
// [mouseX] agisce sulla dimensione (0, width e 5, 45);
// [mouseY] agisce sullo spostamento (0, height e 5, 45);
//




let x = 0; //coordinata x 
let y = 0; //coordinata y 
let dim = 15;
let sposta = dim;
let estrai;


let t = 0;
let t1 = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  x = width / 2;
  y = height / 2;
}

function draw() {

  estrai = int(random(4))

  let r = noise(t)*height;
  let g = noise(t1)*width;
  let b = noise(t)*width;
 
  t += 0.01;
  t1 += 0.05;
  
  let R= int(r%255); //intero del resto di 255 (che non sarà mai superiore a 255)
  let G= int(g%255);
  let B= int(b%255);
  
  console.log("R= "+ " " +r+" " +R + "  G= " + G + "  B= " + B);

  fill(R, G, B,30);
  
  dim= map(mouseX, 0, width, 5, 45);
  sposta= map(mouseY, 0, height, 5, 45);
  
  //estrazione randomica della forma e della posizione
  
  if (estrai == 0) {
    x -= sposta;
     ellipse(x, y, dim, dim);
  } else if (estrai == 1) {
    y += sposta;
     rect(x, y, dim, dim);
  } else if (estrai == 2) {
    x += sposta;
     ellipse(x, y, dim, dim);
  } else if (estrai == 3) {
    y -= sposta;
     rect(x, y, dim, dim);
  }
  
  

  // mantieni nei limiti della canvas
  x = constrain(x, 0, width); //tra 0 e larghezza
  y = constrain(y, 0, height); //tra 0 e altezza

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}