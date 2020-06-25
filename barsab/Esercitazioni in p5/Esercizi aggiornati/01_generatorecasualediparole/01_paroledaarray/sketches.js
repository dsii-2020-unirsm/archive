// -
// Generatore di parole casuali by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

let words = ["Battaglia","Carbone","Veloce","Permanente","Ranch","Traspirazione", "Mani", "Diamante", "Saggio", "Suono", "Declamare", "Colazione", "Archeologia", "Inviare", "Romanzo","Tastiera", "Slacciare","Triste","Turisti","Tenore","Seduta","Ampolla","Strato","Manette","Lame","Polvere", "Tubo", "Pigro", "Spaventapasseri", "Decifrare", "Pregare", "Mescolare",
"Soggetto", "Mancino", "Annunciare", "Chirurgo"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // frame al secondo
  frameRate(10);  
}

function draw() {
  background(0);
  let x = (words.length);
  for (i = 0; i < x; i++) {
    text(words [i],random(width), random(height));
    textSize(random(10, 60));
    fill(random(255),255,255);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
