let x = 0;
let y = 0;
let spacing = 20;


function setup() {
  createCanvas(500, 500);
  background(245);
  textSize(20);
  frameRate(30);

}

function draw() {
  
  if (random(2) > 1) {
    noStroke();
    fill(0,0,255);
    text('1', x, y);
  } else {
    stroke(0);
    fill(255);
    text('0', x, y);
  }
  
  /* VARIAZIONE CON ELLIPSE 
  if (random(2) > 1) {
    noStroke();
    fill(0,0,random(255));
    ellipse(x,y,spacing,spacing);
  
  } else {
    strokeWeight(4);
    noFill();
    ellipse(x,y,spacing-10,spacing-10);
  } 
  */
  
  /* ORIGINALE SHIFFMAN
  if (random(2) > 1) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  } 
  */
  
x = x + spacing;
if (x > width) {
  x = 0;
  y = y + spacing;
}
if (y > height) {
  background(255);
  x = 0;
  y = 0;
}
}