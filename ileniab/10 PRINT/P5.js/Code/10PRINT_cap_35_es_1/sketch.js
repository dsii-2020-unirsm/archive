let w = 16; 
let h = 16;  
let index = 0; 

//definisci i paramentri
function setup() {
  createCanvas(640, 384); //dimensione della finestra
  background("#0000ff");  //colore di sfondo
  strokeWeight(3);        //spessore linea
  stroke(244, 200, 0);    //colore della linea 
  noSmooth();             //no sfumatura linea
}

function draw() {
  
  let x1 = w*index;  //16*0,16*1,16*2 successione di numeri per coord. x
  let x2 = x1 + w;  //avanza di 16 la x successiva
  let y1 = h*23;  //punto y altezza
  let y2 = h*24;   //parte da bordo schermo 24*16=384px
  
if (random(2) < 1) {
line(x2, y1, x1, y2); //primo punto xy e secondo punto xy della linea
} else {
line(x1, y1, x2, y2); //primo punto xy e secondo punto xy della linea
}
  
index++; //sequenza di numeri in  successione
if (index == width/w) { // se la riga è completa riparti da index=0
var p = get(0, h, width, h*23);  //pimg.get(x, y, w, h)
background(0,255,95);
set(0, 0, p); //pimg.set(x, y, c) c	int:any value of the color datatype
index = 0;
}

}

//PImage(width, height, format, factor)