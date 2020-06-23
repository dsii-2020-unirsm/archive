// -
// 1_generatore_casuale_parole_0.2 by Eleonora Di Francesco [parole, caso]
// 2020 © Eleonora Di Francesco, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [key == lettere] determina iniziale parola 
// [mousePressed] salva parola nella lista
//
// —

let alfabeto = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];
let vocali= ["a","e","i","o","u"];
let consonanti= ["b","c","d","f","g","h","l","m","n","p","q","r","s","t","v","z"];

let parola = "";
let lista=[];
let par;

function setup() {
  createCanvas(500, 300);
  frameRate(1);
  textSize (40);
  list_par = createP(' ');
}


function draw() {
  
  background(220);
  if (key == 'a'){parola = "a"; genera_con();}
  if (key == 'b'){parola = "b"; genera_voc();}
  if (key == 'c'){parola = "c"; genera_voc();}
  if (key == 'd'){parola = "d"; genera_voc();}
  if (key == 'e'){parola = "e"; genera_con();}
  if (key == 'f'){parola = "f"; genera_voc();}
  if (key == 'g'){parola = "g"; genera_voc();}
  if (key == 'h'){parola = "h"; genera_voc();}
  if (key == 'i'){parola = "i"; genera_con();}
  if (key == 'l'){parola = "l"; genera_voc();}
  if (key == 'm'){parola = "m"; genera_voc();}
  if (key == 'n'){parola = "n"; genera_voc();}
  if (key == 'o'){parola = "o"; genera_con();}
  if (key == 'p'){parola = "p"; genera_voc();}
  if (key == 'q'){parola = "q"; genera_voc();}
  if (key == 'r'){parola = "r"; genera_voc();}
  if (key == 's'){parola = "s"; genera_voc();}
  if (key == 't'){parola = "t"; genera_voc();}
  if (key == 'u'){parola = "u"; genera_con();}
  if (key == 'v'){parola = "v"; genera_voc();}
  if (key == 'z'){parola = "z"; genera_voc();}

  list_par.html("lista parole: " + lista).style('font-size', '20px');

}

function genera_voc(){
  parola += random(vocali);
  for (i = 0; i < random(0,3); i++) {
    parola += random(consonanti);
    parola += random(vocali);
    
  }
  text(parola,width/3,height/2);
}

function genera_con(){
  for (i = 0; i < random(0,3); i++) {
    parola += random(consonanti);
    parola += random(vocali);
  }
  text(parola,width/3,height/2);
}

function mousePressed(){
  lista.push(parola);
  //dconsole.log(lista);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}