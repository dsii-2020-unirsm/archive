// -
// Generatore_parole 0.1 by GiuliaBollini 
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
//
// —


var r;
var g;
var b;
var c = 0;

var aggettivo = ["ambitious", "brave", "calm", "fancy", "fit", "kind", "lazy", "little", "scary"];
var oggetto = ["balloon", "cup", "glue", "sock", "apple", "book", "puzzle", "spoon", "crayon", "battery"];
var simbolo = ["-", "*", "÷","‘", "«", "`", "ˆ", "≠", "`", "´", "~"];
var parola = "";


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  frameRate (2);
  textSize (40);
  }

function draw() {
  background (100,10,50);
  
  r = random(255); // r è un numero random tra 0 - 255
  g = random(100,200); // g è un numero random tra 100 - 200
  b = random(100); // b è un numero random tra 0 - 100
  
  fill(r, g, b);
  
  parola = random(aggettivo);
  parola = parola+random(simbolo);
  parola = parola+random(oggetto);
  text(parola, width/2, height/2)

}