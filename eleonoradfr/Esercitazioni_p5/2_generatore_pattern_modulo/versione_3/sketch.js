// -
// 2_generatore_pattern_0.3 by Eleonora Di Francesco [modulo, pattern]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @Fupete for https://editor.p5js.org/fupete/sketches/s9jUi2xZU
// original license: MIT License
// —
//
// Help:
// [key == r] colore rosso 
// [key == g] colore verde
// [key == b] colore blu
// [key == c] colore ciano
// [key == m] colore magenta
// [key == y] colore giallo
// [mouseX] colore ellipse
// [mouseY] colore rect
// [mousePressed] orbit control
//
// —


let moduli = [];
let m = 8;
let mondo = 800;
let unit = mondo / m;

let colorex;
let colorey;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(displayDensity());
  
  let index = 0;
  
  for (let x = 0; x < m; x++){
    for (let y = 0; y < m; y++){
      for (let z = 0; z < m; z++) {
        moduli.push(new Modulo(index));
        moduli[index].x = x;
        moduli[index].y = y;
        moduli[index].z = z;
        index++;
      }
    }
  }
}


function draw() {
  colorex = map(mouseX, 0, windowWidth, 0,255);
  colorey = map(mouseY, 0, windowHeight, 0,255);
  
  frameRate(30);
  orbitControl();
  
  background(25);
  translate(-mondo/2 - unit/2, -mondo/2 - unit/2, -mondo/2 - unit/2);

  for (let i = 0; i < moduli.length; i++) {
    moduli[i].display();
  }

}

function Modulo(_id) {
  this.id = _id;
  this.x = 0;
  this.y = 0;
  this.z = 0;

  this.display = function() {
    push();
    translate(this.x*unit, this.y*unit, this.z*unit);
    
    if (this.x % 2 == 0 || this.y % 2 == 0 || this.z % 2 == 0 ) {
        strokeWeight(1);
        stroke(colorex);
        if (key == "r"){stroke(colorex,0,0);}
        if (key == "g"){stroke(0,colorex,0);}
        if (key == "b"){stroke(0,0,colorex);}
        if (key == "c"){stroke(0,colorex,colorex);}
        if (key == "m"){stroke(colorex,0,colorex);}
        if (key == "y"){stroke(colorex,colorex,0);}
        
        noFill();
        ellipse(this.x, this.y, sin(frameCount/50)*50, sin(frameCount/50)*50);

      } else {
        noStroke();
        fill(colorey);
        if (key == "r"){fill(colorey,0,0);}
        if (key == "g"){fill(0,colorey,0);}
        if (key == "b"){fill(0,0,colorey);}
        if (key == "c"){fill(0,colorey,colorey);}
        if (key == "m"){fill(colorey,0,colorey);}
        if (key == "y"){fill(colorey,colorey,0);}
        rect(this.x, this.y, sin(frameCount/70)*30, sin(frameCount/70)*30);
      }
    
    pop();
  }
}