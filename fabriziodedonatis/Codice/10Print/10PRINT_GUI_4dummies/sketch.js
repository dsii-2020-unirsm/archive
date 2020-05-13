// Variazione 10PRINT con GUI
// version: "4dummies"
// inspired by "the coding train"_ https://www.youtube.com/watch?v=bEyTZ5ZZxZs _
// -----------------------------------------------------------------------------
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
//------------------------------------------------------------------------------

//PARAMETRI 
let parametri = {
  spazio: 8,
  sfondo: 100,
  casualità: 0.5
}

// FUNZIONE GUI
window.onload = function() {

  var gui = new dat.GUI();
  gui.add(parametri, 'sfondo', 0, 255);
  gui.add(parametri, 'spazio', 0, 50);
  gui.add(parametri, 'casualità', 0, 1);
}


let x = 0;
let y = 0;
let spazio;
let sfondo;
let casualita;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(parametri.sfondo);
}

function draw() {
  stroke(255);
  if (random(1) < parametri.casualità) {
    line(x, y, x + parametri.spazio, y + parametri.spazio);
  } else {
    line(x, y + parametri.spazio, x + parametri.spazio, y);
  }

  x = x + parametri.spazio;
  if (x > windowWidth) {
    x = 0;
    y = y + parametri.spazio;
  }

  if (y > windowHeight) {
    x = 0;
    y = 0;
    background(parametri.sfondo);
  }
}