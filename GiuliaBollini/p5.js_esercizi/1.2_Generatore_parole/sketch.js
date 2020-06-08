let parole = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];  

function setup() {
  createCanvas(500, 500);
  frameRate (3);
  background(10);
}

function draw() {
  background(90,10,10);
  text(random (parole),250,250);
  textSize(width / 6);
  textAlign(CENTER, CENTER);
  fill(230);
}

