// -
// pattern con modulo percentuale 0.2 by peterbaru [pattern, modulo%]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
//
// @aparrish (twitter.com/aparrish) for https://creative-coding.decontextualize.com/changes-over-time/
// original license: Creative Commons Attribution-NonCommercial 4.0 International License
//
// —
// Help:
// [mouse_position] in base alla posizione del mouse variano i colori e lo spessore del bordo
//
// —

let dim = 30

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
}

function draw() {
  background(235)
  noStroke()
  b = map(mouseX, 0, width, 0, 255)
  spessore = map(mouseX, 0, width, 0, 2)

  for (let x = 0; x < width / (dim - 1); x++) {
    for (let y = 0; y < height / (dim - 1); y++) {

      g = random(80)

      if (x % 2 == 0 || y % 2 == 0) {
        if (mouseY < windowHeight / 2) {
          fill(7, g, 48, 110);
        } else {
          fill(90, g, 172, 110);
        }
        stroke(10)
        strokeWeight(spessore)
        rect(x * dim, y * dim, dim + (sin(frameCount / dim) * dim / 2), dim + (sin(frameCount / dim) * dim / 2), 10)
      } else {
        fill(275, 175, b)
        ellipse(x * dim, y * dim, dim / 2, dim / 2)
      }
    }
  }
}
