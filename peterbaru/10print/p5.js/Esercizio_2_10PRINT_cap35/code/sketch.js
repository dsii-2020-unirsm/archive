//permette di definire i parametri
function setup(){
createCanvas (1020, 680); //dimensione finestra
}

//permette di eseguire la funzione
function draw(){
noStroke(); //disabilita il disegno del tratto
background(0, 0, 255); //colore di sfondo
   let rows = int(pow(2, int(random(1,6))));
   let u = height / (rows + 4);
   let thickness = int(pow(2, int(random(1, 4)))); //spessore
   let uth1 = u / thickness;
   let uth2 = u + uth1;
   let startX = int(-u * 0.75); //punti di partenza
   let startY = height/2 - rows/2 * u;
   let endX = width+u;
   let endY = height/2 + rows/2 * u;
  for (let x = startX; x < endX; x += u) {
  for (let y = startY; y < endY; y += u) {
  if (random(1) > 0.5) {
  fill(255); //riempimento
  quad(x, y, x+u, y+u, x+uth2, y+u, x+uth1, y); //definizione poligno
  }
else {
fill(0);
quad(x, y+u, x+u, y, x+uth2, y, x+uth1, y+u);
  }
 }
}
}
