// -
// generatore-parole 0.1 by Gregorio Vaccari [noise, parole]
// 2020 © Gregorio @Gregorio-V, Daniele @Fupete and the course DSII2020 @UniRSM 
// github.com/fupete — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino
// —

let min = 1;
let max = 4;
let maiuscola = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","Z"];
let vocali = ["a","e","i","o","u"];
let consonanti = ["b","c","d","f","g","h","l","m","n","p","q","r","s","t","v","z"];
let parola = "";

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  frameRate(2)
  textSize (50);
}

function draw() {
  background(220);
  parola = random(maiuscola);
  // lunghezza random della parola
  numero_sillabe = Math.floor(random(min,max));
  // ciclo for
  for (let i = 0; i < numero_sillabe; i++){
    vocale_estratta = random(vocali);
    parola = parola + vocale_estratta;
    consonante_estratta = random(consonanti);
    parola = parola + consonante_estratta;  
  }
  parola = parola + random(vocali);
  console.log(parola);
  text(parola, width/2,height/2)
  }
    
    
  
  
   
  // possibile implementazone:
  // mettere la possibilità di scegliere una o più lettere che devono essere contenute nella parola finale
  
