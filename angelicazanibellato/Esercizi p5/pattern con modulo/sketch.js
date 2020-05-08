// generatore di pattern by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let dim = 20

function setup() {
  createCanvas(600, 600)
  ellipseMode(CENTER)
}
function draw() {
  background('#829FD9')
  noFill()
  
  
    for (let x = 0; x < width / dim + 1; x++) {
    for (let y = 0; y < height / dim + 1; y++) {
    
        if (x % 2 == 0 || y % 2 == 0) {
        if (mouseX < width / 2) {
          stroke('#F26430')
          strokeWeight(1)
        } else {
          stroke('#F2BC8D')
          strokeWeight(3)
        }
        

  ellipse(x*dim,y*dim,dim+(sin(frameCount/10)*7),dim+(sin(frameCount/10)*7));
}
  }
   }
    }
