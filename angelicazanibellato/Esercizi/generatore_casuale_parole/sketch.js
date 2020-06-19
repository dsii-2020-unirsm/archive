// -
// generatore_parole 0.5 by angelica [random, parole]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

let parola = ""; //stringa vuota dove metto le lettere

let vocali = ["A", "Å", " Ä", "E", "I", "O", " Ö", "U"];
let consonanti = ["B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

function setup() {

  createCanvas(600, 600);
  textFont('Verdana', 40);
  frameRate(1);
  textAlign(CENTER, CENTER);

}

function draw() {
  background("#F9EFE0");

  //consonante iniziale della parola
  parola = random(consonanti);

  //numero di lettere interne della parola
  numlettere = int(random(1, 6));

  for (i = 0; i < numlettere; i++) {
    vocale = random(vocali);
    consonante = random(consonanti);
    parola += vocale;
    parola += consonante;

  }
  //stringa di testo
  text(parola, width / 2, height / 2);

}
