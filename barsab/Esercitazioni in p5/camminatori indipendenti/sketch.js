// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let Palline = []; 
let n = 40; 
let t=0;
let space


function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  space=height;
  
  // creazione dell'array
  for (let i=0; i<n; i++) {
    Palline.push(new pallina(i));
  }
}

function draw() {
  background (random(255),255,255);

  for (var i=0; i<Palline.length; i++) {
      Palline[i].display();
      Palline[i].walk();
  }
  t+=0.02
}

function pallina(_id) {
  this.id = _id;
  this.x = 0
  this.y = 0;
  this.tDelta = random(100)

  this.display = function() {
    push()
    let r = 255 * noise(t+10);
    let g = 255 * noise(t+15);
    let b = 255 * noise(t+20);
    fill(r, g, b)
    noStroke()
    ellipse(this.x,this.y, space/10, space/10);
    translate(this.x, this.y);
    pop()
  }

  this.walk = function() {
    this.x = noise(t+this.tDelta)*space;
    this.y = noise(t+10+this.tDelta)*space;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
