// -
// 10PRINT_variazione_0.2 by Eleonora Di Francesco [10PRINT, svg]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @CodingTrain for https://www.youtube.com/watch?v=bEyTZ5ZZxZs
//
// @generative-design for https://editor.p5js.org/generative-design/sketches/P_2_1_1_04
// —
//
// Help:
// [key == 1] svg luna 
// [key == 2] svg stella
// [key == 3] svg bersaglio
// [key == 4] svg freccia
// [key == 5] svg triangolo
// [key == r] pulisce canvas
// [mouseX] dimensione svg
// [mouseY] dimensione ellipse
//
// —

let x = 0;
let y = 10;

let svg = [];
let svgKey;

function preload() {
  svg.push(loadImage('svg/luna.svg'));
  svg.push(loadImage('svg/stella.svg'));
  svg.push(loadImage('svg/bersaglio.svg'));
  svg.push(loadImage('svg/freccia.svg'));
  svg.push(loadImage('svg/triangolo.svg'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15);
  textSize(20);
  frameRate(30);
  imageMode(CENTER);
  svgKey = random(svg);
}

function draw() {
  //re-map del movimento del mouse lungo assi x e y  
  //per determinare rispettivamente 
  //dimensione forma svg e dimensione ellipse
  let dim_x = map(mouseX, 0, windowWidth, 5,25);
  let dim_y = map(mouseY, 0, windowHeight, 5,25);
  
  if (random(2) > 1) {
    //forma dipende dal tasto premuto
    //dimensione dipende dalla x del mouse
    image(svgKey, x, y, dim_x,dim_x);
    
  } else {
    noStroke();
    colore();
    //dimensione dipende dalla y del mouse
    ellipse(x,y,dim_y,dim_y);
  }
  
  x = x + dim_x + dim_y;
  
  if (x > windowWidth) {
    x = 0;
    y = y + dim_x + dim_y;
  }
  
  if (y > windowHeight) {
    background(15);
    x = 0;
    y = 10;
  }
}

function keyReleased() {
  if (key == '1') {svgKey = svg[0];}
  if (key == '2') {svgKey = svg[1];}
  if (key == '3') {svgKey = svg[2];}
  if (key == '4') {svgKey = svg[3];}
  if (key == '5') {svgKey = svg[4];}
  
  if (key == 'r') { 
    background(15);
    x = 0;
    y = 10;
  }
}

function colore(){
  //colore ellipse in base alla forma scelta
  if (svgKey == svg[0] ){fill(237,242,239,98);}
  if (svgKey == svg[1] ){fill(87,196,229,98);}
  if (svgKey == svg[2] ){fill(249,112,104,98);}
  if (svgKey == svg[3] ){fill(33,39,56,98);}
  if (svgKey == svg[4] ){fill(209,214,70,98);}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}