//da aggiornare 
//cambiare con mousePressed la prima lettera

let alfabeto = ["a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"];
let vocali= ["a","e","i","o","u"];
let consonanti= ["b","c","d","f","g","h","l","m","n","p","q","r","s","t","v","z"];

let parola = "";

function setup() {
  createCanvas(400, 400);
  frameRate(1);
  textSize (40);
  
}


function draw() {
  
  background(220);  
  parola = "a";
  
  for (i = 0; i < 2; i++) {
    parola += random(consonanti);
    parola += random(vocali);
  }
  text(parola,width/3,height/2);
  
}



