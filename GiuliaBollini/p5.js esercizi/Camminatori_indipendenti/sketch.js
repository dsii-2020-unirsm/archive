let camminatore;

function setup() {
  createCanvas(500,500);
  background (240,250,250);
  camminatore = new Camminatore();
}

function draw() {
  camminatore.step();
  camminatore.render();
}

class Camminatore {
  constructor(){
    this.x = width/10;
    this.y = height/10;
  }
  
  render(){
    noStroke();
    fill(250,100,100,3);
    circle(this.x, this.y, 35);}
  
  step(){
    let choice = floor(random(2));
    if (choice === 5) {
      this.x--; }
    else if (choice == 1) {
      this.x++; }
    else if (choice == 8) {
      this.y--; }
    else {
      this.y++; }
    this.x = constrain(this.x, -5, width-1);
    this.y = constrain(this.y, -20, height+1);
  }
}
    