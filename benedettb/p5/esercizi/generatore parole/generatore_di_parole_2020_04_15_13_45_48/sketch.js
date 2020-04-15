//LINGUAGGIO ALIENO
// generatore di parole by Benedetta Borghi
// 2019 © Benedetta Borghi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


let lettera= ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];
let numero=["1","2","3","4","5","6","7","8","9"];
let segno=["-","?","_"];
let parola = "";

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  textSize (40);
  fill(150,255,0);
  textFont('arial');
  textAlign(CENTER);
}

function draw() {
  background(150,45,210);
  for (let i = 0; i < lettera.length; i++) {
    parola = random(lettera);
    numero_estratto=random(numero);
    parola= parola+numero_estratto;
    segno_estratto=random(segno);
    parola=parola+segno_estratto;
    parola=parola+parola;
  }
  text(parola,width/2,height/2);
}
