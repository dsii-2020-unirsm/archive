// -
// 2_generatore_pattern_0.2 by Eleonora Di Francesco [modulo, pattern]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [key == 1] colori freddi 
// [key == 2] colori caldi
// [key == 3] colore verde/giallo
// [mouseX] spessore stroke ellipse
//
// —

function setup() {
  createCanvas(600, 600);
  frameRate(5);
  rectMode(CENTER);

}

function draw() {

  background(10);
  let spessore = map(mouseX, 0, width, 2,8);
  
  
  for (var i = 0; i < 25; i++) {
    for (var v = 0; v < 25; v++) {

      if (i % 3 == 0 || v % 3 == 0) {
        strokeWeight(spessore);
        stroke(random(255));
        if (key == "1"){stroke(random(255), random(255), 255);}
        if (key == "2"){stroke(255, random(255), random(255));}
        if (key == "3"){stroke(random(255), 255, random(255));}
        noFill();
        ellipse(i * 25, v * 25, sin(frameCount/50)*50, sin(frameCount/50)*50);

      } else {
        noStroke();
        fill(random(255));
        if (key == "1"){fill(random(255), random(255), 255);}
        if (key == "2"){fill(255, random(255), random(255));}
        if (key == "3"){fill(random(255), 255, random(255));}
        rect(i * 25, v * 25, sin(frameCount/70)*20, sin(frameCount/70)*20);
      }
    }
  }
}
