// -
// 5_camminatori_disegna_mondi_0.3 by Eleonora Di Francesco [camminatori, noise]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [key == da 1 a 5] cambia brush 
// [key == UP_ARROW] genera camminatore 
// [key == DOWN_ARROW] elimina camminatore
// [mouseX] dimensione camminatore
// [mousePressed] pulisce canvas
//
// —


let svg = [];
let svgKey;

let camminatori = []; 
let n = 1;

let t;
let t_incr;

function preload() {
  svg.push(loadImage('svg/brush1.svg'));
  svg.push(loadImage('svg/brush2.svg'));
  svg.push(loadImage('svg/brush3.svg'));
  svg.push(loadImage('svg/brush4.svg'));
  svg.push(loadImage('svg/brush5.svg'));
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  background(45);
  svgKey = random(svg);
  
  for (let i=0; i<svg; i++) {
    camminatori.push(new brush(i));
  }
}

function draw() {

  push();
  translate(0,0);
  
  for (var i=0; i<camminatori.length; i++) {
    camminatori[i].spostati();
    camminatori[i].mostrati();
    
    }
  pop();

}

function brush(_id) {

  this.id = _id;
  this.x = width/2 + random (-width/5,width/5);
  this.y = height/2 + random (-height/5,height/5);

  this.t = random(1000);
  this.t_incr = 0.003 * random(2);
  

  this.mostrati = function() {
    let diam = map(mouseX, 0, windowWidth, 5,80);
    let color = map(mouseY, 0, windowWidth, 0,100);

    image(svgKey,this.x, this.y, diam,diam);
  }

  this.spostati = function() {
    //noise per muovere i camminatori
    this.x = noise(this.t) * width;
    this.y = noise(this.t + 5) * height;
    
    this.t += this.t_incr;
  }
}

function mousePressed(){
  background(45);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    camminatori.push(new brush(svg));
  } else if (keyCode === DOWN_ARROW) {
    camminatori.pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyReleased() {
  if (key == '1') {svgKey = svg[0];}
  if (key == '2') {svgKey = svg[1];}
  if (key == '3') {svgKey = svg[2];}
  if (key == '4') {svgKey = svg[3];}
  if (key == '5') {svgKey = svg[4];}

}