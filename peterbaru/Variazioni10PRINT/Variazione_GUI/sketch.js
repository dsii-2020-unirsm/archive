// -
// variazione10Print 0.4.1 by Pietro [10Print, commodore64, GUI]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
// 
// @shiffman (https://twitter.com/shiffman) for https://natureofcode.com/, https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp00_introduction/NOC_I_01_RandomWalkTraditional/sketch.js
// original license: MIT License
// —

//variazione 10PRINT che permette di selezionare in maniera random
//quattro direzioni possibili in cui la funzione draw può disegnare
//quando viene tenuto premuto il mouse le sfere vengono disegnate con
//una distanza maggiore e con il bordo di colore nero


// OGGETTO PARAMETRI
let parametri = {

  coloreSfondo: [21, 49, 88],

  coloreBordo: [255, 255, 255],
  dimensioneElemento: 10,

  colElementoR: 223,
  colElementoG: 222,
  colElementoB: 43,

  cerchio: 0,

  dimBordo: 2,

  trasparenza: 150,
};

// FUNZIONE GUI
window.onload = function() {
  var gui = new dat.GUI();

  gui.addColor(parametri, 'coloreSfondo'); //modifica colore sfondo

  gui.add(parametri, 'dimensioneElemento', 1, 20); //modifica dimensione

  var elemento = gui.addFolder('colore');
  elemento.add(parametri, 'colElementoR', 0, 255); //colore R elemento
  elemento.add(parametri, 'colElementoG', 0, 255); //colore G elemento
  elemento.add(parametri, 'colElementoB', 0, 255); //colore B elemento
  elemento.add(parametri, 'trasparenza', 0, 255); //trasparenza elemento


  var bordo = gui.addFolder('bordo');
  bordo.add(parametri, 'cerchio', 0, 11); //cambio cerchio/quadrato
  bordo.add(parametri, 'dimBordo'); //dimensione bordo
  bordo.addColor(parametri, 'coloreBordo'); //colore bordo

}

//variabile che definisce l'intero codice
let dim = 6
let dimspost

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(parametri.coloreSfondo)

  rectMode(CENTER)

  //la funzione inizia a disegnare dal centro della canvas
  x = width / 2
  y = height / 2
}

function draw() {

  //se il mouse viene premuto
  if (keyIsPressed) {
    dimspost = parametri.dimensioneElemento * (2)
    strokeWeight(parametri.dimBordo)
    stroke(parametri.coloreBordo)
    rect(x, y, parametri.dimensioneElemento + (sin(frameCount / parametri.dimensioneElemento) * parametri.dimensioneElemento / 2), parametri.dimensioneElemento + (sin(frameCount / parametri.dimensioneElemento) * parametri.dimensioneElemento / 2), parametri.cerchio, parametri.cerchio)
  } else {
    dimspost = parametri.dimensioneElemento * (3 / 2)
  }

  let num = int(random(4))

  noStroke()
  fill(parametri.colElementoR, parametri.colElementoG, parametri.colElementoB, parametri.trasparenza)
  rect(x, y, parametri.dimensioneElemento + (sin(frameCount / parametri.dimensioneElemento) * parametri.dimensioneElemento / 2), parametri.dimensioneElemento + (sin(frameCount / parametri.dimensioneElemento) * parametri.dimensioneElemento / 2), parametri.cerchio, parametri.cerchio)

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
    background(parametri.coloreSfondo)
    x = width / 2
    y = height / 2
  }
}

function windowResized() {
  background(parametri.coloreSfondo)
}
