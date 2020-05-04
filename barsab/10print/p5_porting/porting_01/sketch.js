// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup() {
  createCanvas(800, 800);
  background('#463ea3');
  strokeWeight(5);
  stroke('#9381de');
  smooth();
}

function draw() {
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 20) {
      if (random(1) > 0.5) {
        line(x, y, x + 20, y + 20);
      } else {
        line(x, y + 20, x + 20, y);
      }
    }
  }
  noLoop();
}
