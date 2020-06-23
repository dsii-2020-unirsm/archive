// -
// Esercizi p5 0.1 by Angelica Gasperoni [generatore, parole]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// 




var preposizioni = ["di!", "a?", "da!", "in!", "con?", "su!", "per?", "tra!", "fra?"];
var articoli = ["Il", "Lo", "La", "Gli", "Le", "Uno", "Una"];
var parola = "";


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  frameRate (5);
  textSize (30);
  }

function draw() {
  background(255);
  parola = random(articoli);
  parola = parola+random(preposizioni);
  text(parola, width/2, height/2)

}