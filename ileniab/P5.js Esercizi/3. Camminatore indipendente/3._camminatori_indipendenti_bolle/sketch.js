// -
// Camminatori indipendenti, bolle by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @aparrish (twitter.com/aparrish) for https://creative-coding.decontextualize.com/changes-over-time/
// original license: Creative Commons Attribution-NonCommercial 4.0 International License
//
// @fupete (https://github.com/fupete) for https://editor.p5js.org/fupete/sketches/mUjICxVFn
// -

let camminatori= [];

let dim= 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let n=windowWidth/5;
  for(let i=0; i<n; i++){
    camminatori.push(new Walker(i));
  }
}

function draw() {
  background(100,30,220,50);
  for (let i = 0; i < camminatori.length; i++) {
    camminatori[i].mostrati()
    camminatori[i].spostati()
  }
}

function Walker(_id){
  this.id=_id;
  this.x = this.r = 0;
  this.y = this.g = 0;
  this.b=0;
  
  this.t = random(100);
  this.tIncr = random(-0.5, 0.5) * 0.01 //velocità diverse
  
  
  this.mostrati = function(){
  push();
    
    noStroke();
    
    this.r = map(this.x, 0, width, 50, 155);
    
    this.g = map(this.y, 0, height, 0, 255);
    
    this.b = map(this.x, 0, width, 130, 255);
    
    this.dim= map(this.y, 0, height, 90, 1);
    
    fill(this.r,this.g,this.b, 70);
    
    ellipse(this.x, this.y, this.dim, this.dim);
    
  pop();
  } 
  
  this.spostati = function(){
  this.x= noise(this.t)*width;
  this.y= noise(this.t + 5)*height;
  this.t=this.t+this.tIncr;
  }
  
}
