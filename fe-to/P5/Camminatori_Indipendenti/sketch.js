// -
// Camminatori Indipendenti by Federico Topa 
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Gene Kogan for https://genekogan.com/code/p5js-perlin-noise/
// original license: GNU Lesser General Public License 
// —
// Help:
// [Mouse] Click per salvare jpg
// —


let ball = [];

let n = 15;

let c;
let t;
var r; 
var g;
var b;
var a;

function setup() {

  t = 0;
  c = createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < n; i++) {
    ball.push(new Ball());
  }
}

class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.randomX = Math.random() * 100;
    this.randomY = Math.random() * 100;
  }

  update() {

    this.x = noise(this.randomX + millis() * 0.0002) * width;
    this.y = noise(this.randomY + millis() * 0.0002) * height;
  }


  draw() {

    fill(r, g, b); 
    circle(this.x, this.y, 50); 

    r = 255 * noise(t + 20);
    g = 255 * noise(t + 30);
    b = 255 * noise(t + 40);
    a = random(200, 255); 
  }
}


function draw() {
background(0);
  ball.forEach((pallina) => {
    pallina.update();
    pallina.draw();
    t = t + 0.001;
  });
}

function mousePressed() {
 
  saveCanvas(c, 'myCanvas', 'jpg');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}