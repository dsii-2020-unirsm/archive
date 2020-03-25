var w = 16; 
var h = 16; 
var index = 0;

//permette di definire i parametri
function setup() {  
   createCanvas(640, 384); //dimensione dell'area
   background("#0000ff"); //colore di sfondo
   strokeWeight(3);  //spessore barretta
   stroke(255, 255, 255); //colore della barra
   noSmooth(); //sfumatura della barra
}

//permette di disegnare gli elementi
function draw() {
  //calcolo le coordinate delle barre
  var x1 = w*index; //calcolo la x del primo punto
  var x2 = x1 + w; //calcolo la x del secondo punto
  var y1 = h*23; //calcolo la y del primo punto
  var y2 = h*24; //calcolo la y del secondo punto
  
   if (random(2) < 1) {                      
     line(x2, y1, x1, y2);
   } else {
       line(x1, y1, x2, y2);
}  //stabilisco quale delle barre devo disengare con il calcolo del lancio della moneta
  

index++; //somma 1 ogni volta per passare alla casella dopo
if (index == width/w) { //se la riga è completa
var  p = get(0, h, width, h*23);
     background("#0000ff");
     set(0, 0, p);
     index = 0;
  }
}