// OCCHIO DI BUE
// forma/ellisse/stroke V

// esercizio by Benedetta Borghi based on @Fupete sketch's
// 2019 © Benedetta Borghi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// keys:
// Key [SPACE] ... hints ON/OFF

let myBoolean = false;
let pad = 150;
let diam = 100;

function setup() {
  createCanvas(800, 800); 
  pixelDensity(displayDensity());
  
  // stile
  stroke(255);
  strokeWeight(200);
  noFill();
}

function draw() {
  background(0);
  
  // usa il "pad" per calcolare dove posizionare 
  // i quattro elementiCircolari...
  translate(width/2-pad, height/2-pad);
  elementoCircolare (diam);
  translate (pad*2, 0);
  elementoCircolare (diam);
  translate(0, pad*2);
  elementoCircolare (diam);
  translate (-pad*2, 0);
  elementoCircolare (diam);
}

function elementoCircolare(d) {
  // funzione di generazione degli elementi circolari
  // fatti da un ellisse di diametro d e
  // da un punto... 
  ellipse (0, 0, d, d);
  punto();
}

function punto() {
  // funzione di generazione dei punti
  // fatti da piccoli ellissi pieni 
  // usiamo push/pop style per non cambiare
  // la formattazione generale
  push();
  fill(255);
  noStroke();
  ellipse(0, 0, 20, 20);
  pop();
}

function keyPressed() {
  if (key == ' ') hints = !hints;
}