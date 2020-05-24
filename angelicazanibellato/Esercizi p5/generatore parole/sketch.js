// -
// generatore_parole 0.5 by angelica [walker, keyword2]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —



let parola= ""; //stringa vuota dove metto le lettere

 let vocali = ["a","e","i","o","u"];
 let consonanti = ["b","c","d","f","g","h", "l", "m", "n", "p", "q", "r", "s", "t", "v", "z"];

function setup() {
createCanvas(600,600);
textFont('Georgia');
textSize(40);
fill(0,0,255);
frameRate(2);
textAlign(CENTER,CENTER);

}

function draw() {
background(255, 204, 0);


  
  parola = random(consonanti);
  numlettere = int(random(1,6));
  
for (i=0; i < numlettere; i++) {
vocale = random(vocali);
consonante = random(consonanti);
parola += vocale;
parola += consonante;

}

  text(parola, width/2,height/2);

}
