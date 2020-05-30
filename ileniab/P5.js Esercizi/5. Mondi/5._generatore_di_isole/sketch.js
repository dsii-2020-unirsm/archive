// -
// generatore di isole a by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @aparrish (twitter.com/aparrish) for https://creative-coding.decontextualize.com/changes-over-time/
// original license: Creative Commons Attribution-NonCommercial 4.0 International License
//
// @fupete (https://github.com/fupete) for https://editor.p5js.org/fupete/sketches/JNiVWhfJof
// -
//
let position;
let velocity;
let cornice= 20;

let camminatore = [];

function setup() {
createCanvas(400, 400);
background(135,206,250);
for (let i=0; i<10; i++) {
camminatore[i] = new Walker();
}
  frameRate(5);
}

function draw() {

 
for (let i=0; i<camminatore.length; i++) {
let colorR=random(100,250);
let colorG=random(200,255);
let colorB=random(123,250);
fill (colorR,colorG,colorB,50);
camminatore[i].step();
camminatore[i].display();
}
}

class Walker {
constructor() { //funzione setup che definisce la posizione iniziale
this.position = createVector(random(110,200),random(110,300));
this.velocity = createVector(random(1), random(2.3));
}

display() {

noStroke();
let dim1= random(20, 30);
let dim2= random(20, 30);
ellipse (this.position.x, this.position.y, dim1, dim2);
}

step() {
this.position.add(this.velocity);

if ((this.position.x > width/3) || (this.position.x < 50)) {
this.velocity.x = this.velocity.x * -1;
}

if ((this.position.y > height/3) || (this.position.y <50)) {
this.velocity.y = this.velocity.y * -1;

}
}
}
