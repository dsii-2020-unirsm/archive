// generatore di pattern by Pietro Baruzzi 
// 2019 © Pietro Baruzzi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


// dimensione modulo % di riferimento
let modulo = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  frameRate(20);
}


function draw() {
 //ciclo for per righe
 for (x=0; x<(width*2.1); x+=modulo){
   //ciclo for per colonne
    for (y=0; y<(height*2.1); y+=modulo){
      
      //colore della figura iniziale
      if((frameCount%modulo)<(modulo/2)) {
         fill(225, 175 , 10, 110);
         } else {
           
     //colore figura in base alla posizione del mouse
           if (mouseY<windowHeight/2) {
         fill(7, random (75) , 48, 110);
           } else {
         fill(90, random(14, 88) , 172, 110);
           }
      }
      
//disegna il rettangolo e il cerchio con i dati ricavati sopra
      circle(x/2, y/2, frameCount%(modulo/2));
      rect(x, y, frameCount%modulo, frameCount%modulo, 10);
    }
 }
}

