  // -
  // Pattern con modulo 0.6 by Angelica [modulo, push/pop]
  // 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
  // github.com/dsii-2020-unirsm — github.com/fupete
  // Educational purposes, MIT License, 2020, San Marino

  //Help:
  // [mouse] change pattern's color

  let dim = 25;

  function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    frameRate(12);
  }


  function draw() {
    background(50);
    for (let x = 0; x < 100; x++) {
      for (let y = 0; y < 100; y++) {

        if (x % 8 == 0 || y % 8 == 0) {
          noStroke();
          this.r = map(mouseX, 0, width, 0, 255)
          this.g = map(mouseY, 0, height, 0, 255)
          this.b = random(255)
          fill(this.r, this.g, this.b);
          //stroke(this.r, this.g, this.b);   
          ellipse(x * dim, y * dim, frameCount % 15)
        } else {
          noFill();
          //this.r = map(mouseX, 0, width, 0, 255);
          //this.g = map(mouseY, 0, height, 0, 255);
          //this.b = random(255);
          strokeWeight(0.8);
          stroke(255);


          rect(x * 25, y * 25, frameCount % 50, frameCount % 50, 2)
        }


      }
    }
  }