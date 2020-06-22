// -
// Camminatori disegna mondi by Gregorio Vaccari [modulo]
// 2020 © Gregorio @Gregorio-V, Daniele @Fupete and the course DSII2020 @UniRSM 
// github.com/fupete — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino
// —

let scuri = [];
let chiari = [];

let blu = 10;
let bianchi = 10;

let dimensione_ini = 5;

let slider;

function setup() {
  createCanvas(500, 500);
  slider = createSlider(1, 5, 1);
  slider.position(10, 10);
  slider.style('width', '80px');
  frameRate(60);
  noStroke();
  background(0)
  for (let i = 0; i < blu; i++) {
    scuri.push(new Ball());
  }
  
   for (let i = 0; i < bianchi; i++) {
    chiari.push(new Ball());
  }

}

class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.randomX = Math.random() * 100000;
    this.randomY = Math.random() * 100000;


  }

  update(x) {

    this.x = noise(this.randomX + millis() * (x/10000))
    this.y = noise(this.randomY + millis() * (x/10000))
    this.x = map(this.x, 0, 1, -width/1.5, width*1.5);
    this.y = map(this.y, 0, 1, -height/1.5, height*1.5);

  }

  draw(r,g,b) {
    noStroke(255)
    fill(r, g, b,80); // posso aggiungere l'alfa se voglio
    circle(this.x, this.y, dimensione_ini);
  }

}

function draw() {
  background(0, 0, 0, 1);
  let val = slider.value();
  noFill()
  stroke(0, 3, 68)
  strokeWeight(3)

  dimensione_ini = frameCount%15
  
  scuri.forEach((pallina) => {
    pallina.update(val);
    pallina.draw(0,0,255);
  });

  chiari.forEach((pallina) => {
    pallina.update(val);
    pallina.draw(180,160,230);
  });

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}