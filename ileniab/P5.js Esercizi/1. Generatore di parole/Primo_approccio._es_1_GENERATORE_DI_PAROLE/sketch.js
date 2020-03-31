// -
// Generatore di parole by Ilenia Balella ["il primo approccio"]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

let saluta=["ciao", "hello", "bonjour", "hola", "hallo"];

let domanda= ["come ti chiami?","what's your name?","comment tu t'appeles?","como te llamas?","wie heißt du?"]

let colore= ["#4E93C4","#6E6CAD","#DF686A","#E3C368",'#F0D7D3'];


function setup() {
  createCanvas(500, 500);
  textAlign(CENTER,CENTER);
  frameRate(5);
}

function draw() {
  let c= frameCount%colore.length;
  background(colore[c]);
  let a= frameCount%saluta.length; 
  
  textSize(40);
  fill(0);
  text(saluta[a],width/2,height/2);
  
}

function mousePressed(){
  frameRate(0);
  let c= frameCount%colore.length;
  background(colore[c]);
  let b= frameCount%domanda.length;
  text(domanda[b],width/2,height/2);
}

function keyPressed(){
  frameRate(5);
  draw();

}

  