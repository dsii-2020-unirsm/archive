// Generatore Mondi. by Federico Topa in collab Gregorio Vaccari,Gabriella Milinci
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


let ball = [];

let n = 40;

var r; // variabili per avere i colori randomici delle palline
var g;
var b;
var a;

function setup() {
 createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < n; i++) {
   ball.push(new Ball());
  }
}

class Ball {
  constructor () {
    this.x = 0;
    this.y = 0;
    this.randomX = Math.random() * 100;
    this.randomY = Math.random() * 100;
  }
  
  update () {
   
      this.x = noise(this.randomX + millis() * 0.0002) * width;
      this.y = noise(this.randomY + millis() * 0.0002) * height;
    }
  
  
  draw () {
    //fill(255);
    fill( r, g, b ); // posso aggiungere l'alfa se voglio
    circle(this.x, this.y, 30); //dimensione palline
    
    r = random(255); // r is a random number between 0 - 255
    g = random(255); // g is a random number betwen 100 - 200
    b = random(255); // b is a random number between 0 - 100
    //a = random(200,255); // a is a random number between 200 - 255
  }
}


function draw() {

    fill(255, 255, 255); //Non sembra cambiare nulla acceso o spento. mah?!
  //rect(0, 0, width, height);
  ball.forEach((pallina) => {
    pallina.update();
    pallina.draw();
  });
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
