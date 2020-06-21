  // -
  // Camminatori che generano mondi 0.6 by Angelica [modulo, push/pop]
  // 2020 © Angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
  // github.com/dsii-2020-unirsm — github.com/fupete
  // Educational purposes, MIT License, 2020, San Marino

  //Help:
  // [mouse] change pattern's color

  let dim = 25;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    frameRate(10);
  }


  function draw() {
    background(50);
    for (let x = 0; x < 50; x++) {
      for (let y = 0; y < 50; y++) {

        if (x % 8 == 0 || y % 8 == 0) {
          noStroke();
          this.r = map(mouseX, 0, width, 0, 255)
          this.g = map(mouseY, 0, height, 0, 255)
          this.b = random(255)
          fill(this.r, this.g, this.b);
          //stroke(this.r, this.g, this.b);   
          ellipse(x * dim, y * dim, frameCount % 50)
        } else {
          noStroke();
          this.r = map(mouseX, 0, width, 0, 255);
          this.g = map(mouseY, 0, height, 0, 255);
          this.b = random(255);
          //strokeWeight(2);
          fill(this.r, this.g, this.b);

          rect(x * 25, y * 25, frameCount % 25, frameCount % 25, 2)
        }


      }
    }
  }
