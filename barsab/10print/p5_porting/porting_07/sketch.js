// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let w = 16;
let h = 16;
let index = 0;
function setup() {
      frameRate(1);
      createCanvas(1024, 680);
      smooth();
}
function draw() {
  noStroke();
    background('#F5C03E');
    let riga = (pow(2, (random(1, 6))));
    let u = height / (riga + 4);
    let spessore = (pow(2, (random(1, 4))));
    let uth1 = u / spessore;
    let uth2 = u + uth1;
    let startX = (-u * 0.75);
    let startY = height/2 - riga/2 * u;
    let endX = width+u;
    let endY = height/2 + riga/2 * u;
    for (let x = startX; x < endX; x += u) {
      for (let y = startY; y < endY; y += u) {
        if (random(1) > 0.5) {
          fill('#F5F5EB');
          quad(x, y, x+u, y+u, x+uth2, y+u, x+uth1, y);
        }
        else {
          fill('#158ca7');
          quad(x, y+u, x+u, y, x+uth2, y, x+uth1, y+u);
        }
} }

 
}
