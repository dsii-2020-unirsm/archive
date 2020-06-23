// -
// variazione10Print 1.1 by Angelica [10Print, commodore64]
// 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
// 
// —

//OGGETTO PARAMETRI
// Inserire i parametri da modificare

let parametri = {

  coloreSfondo: [50, 50, 50],

  dimCerchio: 20,

  riempimento: true,
  coloreCerchio: [255, 255, 255, 80],

  bordo: true,
  coloreBordo: [50, 50, 50],
  dimensioneBordo: 1,
};


// FUNZIONE GUI
//valori all'avvio dello sketch

window.onload = function() {
  var gui = new dat.GUI();

  //colore sfondo
  gui.addColor(parametri, 'coloreSfondo');

  //crea una tendina che nasconde i parametri 
  var f1 = gui.addFolder('Riempimento');
  //colore cerchio
  f1.addColor(parametri, 'coloreCerchio');
  //slider dimensione cerchio
  f1.add(parametri, 'dimCerchio', 1, 80);

  var bordo = gui.addFolder('Bordo');
  bordo.addColor(parametri, 'coloreBordo'); //colore
  bordo.add(parametri, 'dimensioneBordo', 0, 10); //dimensione 

};

//variazione 10PRINT

let h = 0;
let w = 0;
let dim = 20;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(parametri.coloreSfondo); //"#B88199"
}

function draw() {

  if (parametri.riempimento) {
    fill(parametri.coloreCerchio);
  } else {
    noFill();
  }

  (parametri.bordo)
  stroke(parametri.coloreBordo)
  strokeWeight(parametri.dimensioneBordo)



  frameRate(30); //velocità 
  translate((-dim / 2), windowHeight - (dim / 2));

  w += dim;

  if (random(2) <= 0.5) {
    ellipse(w + 10, h + 10, parametri.dimCerchio, parametri.dimCerchio);

  } else if (random(2) > 0.5 && random(2) <= 1) {
    ellipse(w, h, parametri.dimCerchio, parametri.dimCerchio);

  } else if (random(2) > 1 && random(2) <= 1.5) {
    strokeWeight(parametri.dimensioneBordo)


  } else {
    ellipse(w + 5, h + 5, parametri.dimCerchio, parametri.dimCerchio);

  }


  t += 0.08; //velocità


  if (w > windowWidth) {
    w = 0;
    h -= parametri.dimCerchio;
  }

  if (h < (-windowHeight)) {
    background(parametri.coloreSfondo)
    w = 0;
    h = 0;
  }


}