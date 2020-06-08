let parole  = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];

function setup() {
  createCanvas(500,500);
  background(250);
  frameRate(2);
}

function draw() {
  fill(random(250), random(0), random(250));
  textSize(30);
  text(parole [ int (random(7))], random(width), random(height));
}


 