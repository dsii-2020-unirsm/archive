// -
// variazione10Print 0.4 by peterbaru [10Print, commodore64]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
// 
// @shiffman (github.com/shiffman) for https://natureofcode.com/, https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp00_introduction/NOC_I_01_RandomWalkTraditional/sketch.js
// original license: MIT License
// —
// Help:
// [mouse_pressed] le sfere sono cerchiate di nero e più distanziate
//
// —

//variazione 10PRINT che permette di selezionare in maniera random
//quattro direzioni possibili in cui la funzione draw può disegnare
//quando viene tenuto premuto il mouse le sfere vengono disegnate con
//una distanza maggiore e con il bordo di colore nero

//variabile che definisce l'intero codice
let dim = 6
let dimspost

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(192, 218, 255)

  //la funzione inizia a disegnare dal centro della canvas
  x = width / 2
  y = height / 2
}

function draw() {

  //se il mouse viene premuto
  if (mouseIsPressed) {
    dimspost = dim * 3
    strokeWeight(1)
    stroke(0)
    circle(x, y, dim + (sin(frameCount / dim) * dim / 2))
  } else {
    dimspost = dim * (3 / 2)
  }

  let num = int(random(4))
  col = int(random(255))

  noStroke()
  fill(255, 255, col, 150)
  circle(x, y, dim + (sin(frameCount / dim) * dim / 2))

  //definizione direzione
  if (num == 0) {
    x += dimspost
  } else if (num == 1) {
    y += dimspost
  } else if (num == 2) {
    x -= dimspost
  } else if (num == 3) {
    y -= dimspost
  }

  //se le sfere vengono disegnate fuori dalla canvas, questa
  //si riaggiorna
  if (x <= dimspost || x >= width - dimspost || y <= dimspost || y >= height - dimspost) {
    background(192, 218, 255)
    x = width / 2
    y = height / 2
  }
}

function windowResized() {
  background(192, 218, 255)
}
