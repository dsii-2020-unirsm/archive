// -
// Esercizi p5 0.3 by Angelica Gasperoni [camminatori, indipendenza]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
//

let camminatore = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
//  camminatore = new Camminatore();
  background(255, 0, 127);
  
  let num = 3;
  
  for (let i = 0; i < num; i++) {
    camminatore.push(new Camminatore(i))
  }
} //for per farne più di uno

function draw() {
  for (let i = 0; i < camminatore.length; i++) {
  camminatore[i].step();
  camminatore[i].render();}
}

class Camminatore {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(1);
    circle(this.x,this.y, 20);
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x--;
    } else if (choice == 1) {
      this.x++;
    } else if (choice == 2) {
      this.y--;
    } else {
      this.y++;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}





