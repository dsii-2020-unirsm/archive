// Pietro Baruzzi @peterbaru © 2017 MIT License
// Variazione 10PRINT | San Marino, IT | 3.2020
// Educational purpose, made for DSII2020 lab @UniRSM

let w = 0; 
let h = 0; 
let dimensione = 16;
let index = 0;
let indey = 0;
let a = 23;

//permette di definire i parametri
function setup() {  
   createCanvas(640, 384); //dimensione dell'area
   background("#302226"); //colore di sfondo
   strokeWeight(3);  //spessore barretta
   stroke("#F535AA"); //colore della barra
   noSmooth(); //sfumatura della barra
}

//permette di disegnare gli elementi
function draw() {
  //calcolo le coordinate delle barre
  let x1 = (w+dimensione)*index; //calcolo la x del primo punto
  let x2 = x1 + (w+dimensione); //calcolo la x del secondo punto
  let y1 = (h+dimensione) * a; //calcolo la y del primo punto
  let indovina = random (2);
  
   if (indovina < 0.5) {
     
     noFill();
     stroke ("#FF0080");
     arc(x1, y1, 10, 10, HALF_PI, PI);
     
   } else if (indovina >= 0.5 && indovina < 1 ) {
     stroke ("#00FFFF");
     arc(x2, y1, 10, 10, 2*HALF_PI, PI);
     
     
   } else if (indovina >= 1 && indovina < 1.5 ) {
     stroke ("#FF8040");
     arc(x2, y1, 10, 10, 3*HALF_PI, PI);
  
   } else {
     stroke ("#8D38C9");
     arc(x1, y1, 10, 10, 4*HALF_PI, PI);
     
   }
  

index++; //somma 1 ogni volta per passare alla casella dopo
if (index == width/(w+dimensione)) { //se la riga è completa
var  p = get(0, (h+dimensione), width, (h+dimensione)*a);
     background("#302226");
     set(0,0, p);
     index = 0;
  }  
}