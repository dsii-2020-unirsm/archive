// generatore casuale di parole by Pietro Baruzzi
// 2019 © Pietro Baruzzi, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// generatore casuale di parole, ogni volta che viene premuto il mouse
// il loop si ferma e rimane fissa sullo schemro una parola.
// se viene premuto un tasto della tastiera il loop riparte generando
//  altre parole.

//creo array contententi le sillabe
  let sillabe = ["ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "che", "chi","da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ghe", "ghi", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "za", "ze", "zi", "zo", "zu", "con",  ];

let sillabefinali = ["ba", "be", "bi", "bo", "ca", "ce", "ci", "co", "che", "chi","da", "de", "di", "do", "fa", "fe", "fi", "fo", "ga", "ge", "gi", "go", "ghe", "ghi", "la", "le", "li", "lo", "ma", "me", "mi", "mo", "na", "ne", "ni", "no", "pa", "pe", "pi", "po", "ra", "re", "ri", "ro", "sa", "se", "si", "so", "ta", "te", "ti", "to", "va", "ve", "vi", "vo", "za", "ze", "zi", "zo", "gna", "gne", "gni",  "gno", "gli"]

  let parola = "";


function setup() {
  createCanvas(windowWidth, 500);
  textAlign(CENTER, CENTER);
  frameRate(10);
  textFont('Courier New', 32);
  fill(225);
}

function draw() {
  background(0);
  
  //definisco la sillaba iniziale con cui viene composta la parola
  parola = random(sillabe);
  
  //vengono definite il numero di sillabe interne che deve avere la
  //parola (la prima e l'ultima sono definite indipendentemente)
  numerosillabe = int(random(0,3));
  
  //ciclo for che scrive le sillabe a seconda del numero estratto
  for (i=0; i<numerosillabe; i++){
  sillaba = random(sillabe);
  parola += sillaba;
}
  
  //inserimento sillaba finale 
  parola += random(sillabefinali);
  
  //scrittura parola 
  text (parola, width/2, height/2)

}

//se il mouse viene premuto le parole si fermano
function mousePressed() {
  noLoop();
}

//se la tastiera viene premuta le parole ripartono
function keyPressed() {
  loop();
  draw();
}
