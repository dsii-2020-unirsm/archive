// -
// maschera cerchi v1.3 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// source by P5 example @name Alpha Mask
// Helped  <--- @francy96 <--- by shiffman
//

// —
//
// Help:
// [mouseclick] mask on canvas

//
// —

//
let img ;
let cerchio;
let circleMask;
let mascheratura = [];
function preload() {
  img = loadImage('assets/moonwalk.jpg');
  //imgMask = loadImage('assets/mask.png');
}

function setup() {
  createCanvas(720, 400);
  cerchio = createGraphics(width, height);
  img.loadPixels();
  //img.mask(imgMask);
  //imageMode(CENTER);
  
}

function draw() {
  background(0, 102, 153);
  //image(img, width / 2, height / 2);
  //image(img, mouseX, mouseY);
  for (let i=0; i<mascheratura.length; i++){
    //bubbles[i].update();
    mascheratura[i].display();
  }
}

function mouseClicked(){
  imageMode(CENTER);
  img.updatePixels();
  circleMask= cerchio.circle(mouseX, mouseY, 40);
  img.mask(circleMask);
  let b = new Maschera(width/2, height/2, img);
  mascheratura.push(b);
  //image(img, width/2, height/2);
}

function Maschera(x,y,pict){
  this.x = x;
  this.y = y;
  this.img = pict;
  
      this.display = function() {
    imageMode(CENTER); 
    image(pict, this.x, this.y);
  }
}