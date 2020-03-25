let w = 16;
let h = 16;
let index = 0;

function setup() {
 createCanvas(640, 384);
 background("#0f0");
 strokeWeight(3);
 //stroke(3, 200, 90); //colore delle linee
 smooth();
}

function draw() {
 let x1 = w*index;
 let x2 = x1 + w;
 let y1 = h*23;
 let y2 = h*24;
 if (random(2) < 1) {
 //line(x2, y1, x1, y2);
   strokeWeight(3);
   stroke("rgb(0,0,255)");
   fill("fffff");
   circle(x1+8, y1+8, w);
 } else {
   //line(x1, y1, x2, y2);
   strokeWeight(3);
   stroke("black");
   noFill(2);
  circle(x1+8, y1+8, w);
 }
 index++;
 if (index == width/w) {
 p = get(0, h, width, h*23); //get 
 background("#0f0");
 set(0, 0, p);
 index = 0;
 }
}