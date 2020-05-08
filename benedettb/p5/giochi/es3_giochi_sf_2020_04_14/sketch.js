// Words by @Benedetta Borghi
// dati/array/testo/frameCount   V

// esercizio by Benedetta Borghi based on @Fupete's sketch
// 2019 © Benedetta Borghi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


let nomi = ["abra", "kadabra", "astro", "nascente", "mago", "merlino", "domani", "al mare", "leggo", "akrobata quadrato", "leggo pesci molli", "kris"];

function setup() {
  createCanvas(800, 800);
  pixelDensity(displayDensity());
  
  // 5 frame al secondo ... lento e scattoso ...
  frameRate(5);
  
  // formattazione del testo
  textSize(50);
  textAlign(CENTER);
  fill(255);
}

function draw() {
  background(0);
  
  // nel centro dello schermo
  translate(width/2, height/2);
  
  // quale nome
  let i = frameCount%nomi.length;
  
  text(nomi[i], 0, 0);
}