// -
// Pattern con modulo by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

let dim = 20; //dimensione oggetto
let n = 4;

function setup() {
  createCanvas(400, 400)
  rectMode(CENTER);

}

function draw() {
  background("#80ced6")
  noStroke()
  fill(0)


  for (let x = 0; x < width / dim + 1; x++) {
    for (let y = 0; y < height / dim + 1; y++) {

      let seno = dim + (sin(frameCount / 10) * dim / 2)

      if (x % 4 == 0 || y % 2 == 0) {
        fill("#d5f4e6")
        
      } else if (x % 5 == 0 || y % 3 == 0) {
        
        fill(254, 251, 216)
        
        if (mouseX < width / 2) {
          rect(dim * x, dim * y, dim / 2, seno)
        } else {
          rect(dim * x, dim * y, seno, dim / 2)
        }
        
      } else {
        fill(97, 134, 133, 90)
        ellipse(dim * x, dim * y, seno, seno)
      }

      ellipse(dim * x, dim * y, dim / 2, dim / 2)

    }

  }


}