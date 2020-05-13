// 10 PRINT - 2° version by francy96 @Francesca1996 
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

//MOUSE PRESSED
//KEYBOARD "1" e "2"

let w = 10;  //16
let h = 10;  //16
let x1;
let x2;
let y1;
let y2;
let index = 0;
let actRandomSeed = 0;
let t = 0;
let spazio;


let rnd = 2;

//-----------SETUP
function setup() {
  fullscreen(false);
  createCanvas (650, 650); //650 both
   
  background(300, 150, 255);
  frameRate(250);
}


//-----------DRAW
function draw() {
   strokeWeight(mouseX / 40); //MOUSEX
   randomSeed(actRandomSeed);
  
   //LINEE
   x1 = w * index;       
   x2 = x1 + w;           
   y1 = h * 1;            
   y2 = h * 2;             
  
  if (random(rnd) < 1) {
    line(x2, y1, x1, y2);
    stroke(255);
    } else {
      line(x1, y1, x2, y2);
      //stroke(0);
    }
  
    index++;
  
    if (index == width / w) {
      p = get (0, h, width, h * (height / 10)); //h * 23
      background(300, 150, 255);  //cancella lo schermo 
      set(0, 30, p);              //rilascia l'immagine p alle cordinate 0,0
      index = 0;
   }
}


//-----------PREMI MOUSE
function mousePressed() {             
  stroke(0);        
}


//-----------LINE VERSE - PREMI 1 o 2
function keyReleased() {
  if (key == '1') {
   rnd = 5; 
  }
  if (key == '2') {
   rnd = 1;
  }  
}
