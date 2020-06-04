// -
// Generatore parole 0.2 by Fabrizio De Donatis [generatore, parole]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// genera parole da un catalogo di sillabe
//
// —

let consonanti = ['q', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'l', 'z', 'c', 'v', 'b', 'n', 'm'];

let vocali = ['a', 'e', 'i', 'o', 'u'];
let parola="";
let rnd;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Calibri');
  textSize(40);
  fill(0, 255, 2);
  frameRate(5);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(3);

  parola = random(consonanti);

  num_lettere = int(random(1, 9));
console.log(num_lettere);
  for (i = 0; i < num_lettere; i++) {
    
          rnd = int(random(2));
    
   
     if (rnd > 0) {
      estr_vocale = random(vocali);
      parola += estr_vocale;
       
      estr_consonante = random(consonanti);
      parola += estr_consonante;
      i++;
       
      } else {
      estr_consonante = random(consonanti);
      parola += estr_consonante;
      
    }

  }

  text(parola, width / 2, height / 2);


}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}