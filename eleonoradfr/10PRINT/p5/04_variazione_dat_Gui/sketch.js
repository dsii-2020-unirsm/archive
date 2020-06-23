// -
// Dat-Gui_10PRINT_variazione_0.2 by Eleonora Di Francesco [10PRINT, datGui]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @MrJ4ckpot for https://editor.p5js.org/fupete/sketches/Mw0ugXFno
// original license: Tipo licenza
// —

// OGGETTO PARAMETRI

let parametri = {
  
  forma: "scelta",
  dimensioneSVG: 20,
  
  dimensioniTesto: 10,
  coloreTesto: [0, 0, 0],

  pulisci: function() { 
    background(230);
    x = 0;
    y = 0;
  }

};

// FUNZIONE GUI

window.onload = function() {

  var gui = new dat.GUI();
  
  var f1 = gui.addFolder('SVG');
  f1.add(parametri, 'forma', ['cuori', 'quadri', 'fiori', 'picche']);
  f1.add(parametri, 'dimensioneSVG', 5, 25);
  
  var f2 = gui.addFolder('Testo');
  f2.add(parametri, 'dimensioniTesto', 5, 25);
  f2.addColor(parametri, 'coloreTesto');

  gui.add(parametri, 'pulisci');
    
}

let x = 10;
let y = 10;

let forme = [];
let formaScelta;

let carte= ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];

function preload() {
  forme.push(loadImage('svg/cuori.svg'));
  forme.push(loadImage('svg/quadri.svg'));
  forme.push(loadImage('svg/fiori.svg'));
  forme.push(loadImage('svg/picche.svg'));
}

function setup() {
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  background(230);
  textSize(30);
  imageMode(CENTER);
  formaScelta = random(forme);
}

function draw() {
  
  //possibilità di scegliere una tra le forme caricate
  if (parametri.forma == 'cuori') formaScelta = forme[0];
  else if (parametri.forma == 'quadri') formaScelta = forme[1]; 
  else if (parametri.forma == 'fiori') formaScelta = forme[2];
  else if (parametri.forma == 'picche') formaScelta = forme[3];
  

  if (random(2) > 1) {
    image(formaScelta, x, y, parametri.dimensioneSVG, parametri.dimensioneSVG);

  
  } else {
    textSize(parametri.dimensioniTesto);
    fill(parametri.coloreTesto);
    text(random(carte), x, y+5);
  } 


  x = x + parametri.dimensioneSVG + parametri.dimensioniTesto;
  if (x > windowWidth) {
      x = 10;
      y = y + parametri.dimensioneSVG + parametri.dimensioniTesto;
  }
  
  if (y > windowHeight) {
    background(230);
    x = 10;
    y = 10;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

