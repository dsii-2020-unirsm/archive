// -
// variazione10Print 0.6 by peterbaru [10Print, commodore64]
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
// [key_pressed S] viene salvata l'immagine
// [key_pressed N] viene generato un nuovo sfondon
//
// —


//variabili che definiscono il codice

let dim = 12 //dimensione sfera
let numspost = 1/2 //distanza tra sfere
let t = 0 //incremento iniziale colore
let dimspost
let trasparenza = 3 //trasparenza sfondo

function setup() {
  cnv = createCanvas(windowWidth, windowHeight)
  background(192, 218, 255)

  //la funzione inizia a disegnare dal centro della canvas
  x = width/2
  y = height/2
}

function draw() {
  stroke(0)
  strokeWeight(0.05)

  dimspost = dim + numspost //spostamento tra 2 archi

  let spostamento = int(random(4)) //scegli direzione
  let arco = int(random(0, 12)) //scegli tipo di arco
  let opaco = int(random(255)) //scegli opacità arco

  let r = 255 * noise(t + 5)
  let g = 255 * noise(t + 30)
  let b = 255 * noise(t + 55)

  t += 0.01 //incremento

  fill(r, g, b, opaco) //colore archi

  //definisci quale arco (la sfera piena ha una probabilità minore)
  if (arco == 0) {
    arc(x, y, dim, dim, 0, 2 * PI)
  } else if (arco == 1) {
    arc(x, y, dim, dim, 0, PI / 2)
  } else if (arco == 2) {
    arc(x, y, dim, dim, PI / 2, PI)
  } else if (arco == 3) {
    arc(x, y, dim, dim, PI, PI * (3 / 2))
  } else if (arco == 4) {
    arc(x, y, dim, dim, PI * (3 / 2), 2 * PI)
  } else if (arco == 5) {
    arc(x, y, dim, dim, 0, PI)
  } else if (arco == 6) {
    arc(x, y, dim, dim, PI / 2, PI * (3 / 2))
  } else if (arco == 7) {
    arc(x, y, dim, dim, PI * (3 / 2), PI / 2)
  } else if (arco == 8) {
    arc(x, y, dim, dim, PI, 0)
  } else if (arco == 9) {
    arc(x, y, dim, dim, 0, PI * (3 / 2))
  } else if (arco == 10) {
    arc(x, y, dim, dim, PI / 2, 2 * PI)
  } else if (arco == 11) {
    arc(x, y, dim, dim, PI, PI / 2)
  } else if (arco == 12) {
    arc(x, y, dim, dim, PI * (3 / 2), PI)
  }
  
//  rect(x,y,dim,dim)

  //definizione direzione
  if (spostamento == 0) {
    x += dimspost
  } else if (spostamento == 1) {
    y += dimspost
  } else if (spostamento == 2) {
    x -= dimspost
  } else if (spostamento == 3) {
    y -= dimspost
  }

  //contenimento nella canvas
  if (x > width) {
    x = 0
    background(255, 255, 255, trasparenza)
  }
  if (x < 0) {
    x = width
    background(255, 255, 255, trasparenza)
  }
  if (y > height) {
    y = 0
    background(255, 255, 255, trasparenza)
  }
  if (y < 0) {
    y = height
    background(255, 255, 255, trasparenza)
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(192, 218, 255)
}

function keyPressed() {
  if (key == 's') {
    console.log('Preparo il salvataggio')
    save(cnv, 'Variazione10PRINT.jpg');
  }

  if (key == 'n') {
    console.log('Nuovo Sfondo')
    background(random(255), 140, random(255))
  }
}
