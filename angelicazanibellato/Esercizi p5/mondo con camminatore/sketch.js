
// -
// mondo_con_camminatore 0.7 by angelica [keyword1, keyword2]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —

let camminatore = [];

function setup() {
  createCanvas(600,600);
for (let i=0; i< 50; i++) {
  camminatore[i] = new Walker();  
  }
  camminatore = new Walker();
 background('#353FF2');


}

function draw() {
  camminatore.step();
  camminatore.render();
 for (let i=0; i<camminatore.length; i++) {
 
    camminatore[i].step();
    camminatore[i].display();
  }
}


class Walker {
  constructor(){
    //posizione di partenza
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke('#F2D64B');
    fill(255);
    ellipse(this.x,this.y,25,25);
  }

  step() {
    var choice = floor(random(4));
    if (choice == 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
