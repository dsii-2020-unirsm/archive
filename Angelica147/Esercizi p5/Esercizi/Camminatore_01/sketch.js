let camminatore;

function setup() {
  createCanvas(400,400);
  camminatore = new Camminatore();
  background(255, 0, 127);
}

function draw() {
  camminatore.step();
  camminatore.render();
}

class Camminatore {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(0,1);
    circle(this.x,this.y, 1);
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
