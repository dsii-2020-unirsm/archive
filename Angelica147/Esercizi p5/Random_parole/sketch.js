var words = ["sole", "mare", "spiaggia", "sdraio", "gelato", "ombrellone", "sabbia"];


function setup() {
  createCanvas(300, 300);
  frameRate (5);
  }

function draw() {
  background(0);
  fill (255);
  text(random(words), 150, 150);
  textAlign(CENTER, CENTER);
}



 
