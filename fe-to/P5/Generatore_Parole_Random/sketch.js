// Generatore Random Parole. by Federico Topa in collab. con Gregorio Vaccari
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino



let min = 1;
let max = 4;

let vocali = ["a", "e", "i", "o", "u","y"];
let consonanti = ["b", "c", "d", "f", "g", "h", "l", "m", "n", "p", "q", "r", "s", "t", "v", "z", "x", "j"];
let parola = "";

function setup() {
  createCanvas(800, 800);
  background(0,0,255);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(50);
  text(parola, width / 2, height / 2)


}

function mousePressed() {
  background(0,0,255);
  text(parola, width / 2, height / 2);

}

function draw() {

  parola = random(consonanti);
  // lunghezza random della parola
  numero_sillabe = Math.floor(random(min, max));
  // ciclo for
  for (let i = 0; i < numero_sillabe; i++) {
    vocale_estratta = random(vocali);
    parola = parola + vocale_estratta;
    consonante_estratta = random(consonanti);
    parola = parola + consonante_estratta;
  }
}