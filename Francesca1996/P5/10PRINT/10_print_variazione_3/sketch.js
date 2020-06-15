// -
// Variazione 10PRINT + P5.speech by FrancescaDonati [10PRINT, speak]
// 2020 © FrancescaDonati @Francesca1996, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete - github.com/Francesca1996
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [voice] generate the line / change weight line / change background-color
//
// —


//-------------------------CODE
//variabili P5.speech
let value = 0;
let parole = [];
let myRec;
let mostrecentword = "";
let button;
let x, y;
let dx, dy;
let step;
let direzione = "dx";

//variabili 10PRINT
let c;
let w = 10;
let h = 10;
let x1;
let x2;
let y1;
let y2;
let index = 0;
let actRandomSeed = 0;
let t = 0;
let rnd = 2;

//-------------------------
function setup() {
  createCanvas(650, 650);
  //console.log("ISTRUZIONI");
  //console.log("Clicca sulla tela per salvare la parola");

 
  //P5.speech
  myRec = new p5.SpeechRec('IT'); // new P5.SpeechRec object
  myRec.continuous = true; // do continuous recognition
  myRec.interimResults = true; // allow partial recognition (faster, less accurate)
  myRec.start();

  //se c'è un errore stampa in console
  //myRec.onResult=parseResult;
  myRec.onError = showError;

  step = 10;
  
  //10PRINT
  background(300, 150, 255);
  frameRate(250);
  strokeWeight(2);
}

//-------------------------
function draw() {
  //10PRINT
  randomSeed(actRandomSeed);

  //LINEE
  x1 = w * index;
  x2 = x1 + w;
  y1 = h * 1;
  y2 = h * 2;
  
  c = color('rgb(300, 150, 255)'); 
  
  Parlo();

  //al posto del random ho collegato p5.speech
  //direzione
  if (myRec.resultString == "destra") {
    direzione = "dx";
  } else if (myRec.resultString == "sinistra") {
    direzione = "sx";
  } 
  
  if (direzione == "dx"){
    line(x2, y1, x1, y2);
    console.log("destra");
  } else if (direzione == "sx"){
    line(x1, y1, x2, y2);
    console.log("sinistra");        
  }
  
  //spessore linea
  if (myRec.resultString == "1") {
    strokeWeight(1);
    console.log("1");
  } else if (myRec.resultString == "2") {
    strokeWeight(2);
    console.log("2");
  } else if (myRec.resultString == "3") {
    strokeWeight(3);
    console.log("3");
  } else if (myRec.resultString == "4") {
    strokeWeight(4);
    console.log("4");
  } else if (myRec.resultString == "5") {
    strokeWeight(5);
    console.log("5");
  } 
  
  //colore sfondo
  if (myRec.resultString == "verde") {
    c = ('rgb(100,255,100)');
    console.log("verde");
  } else if (myRec.resultString == "blu") {
    c = ('rgb(0,140,255)');
    console.log("blu");
  } else if (myRec.resultString == "rosso") {
    c = ('rgb(255,0,0)');
    console.log("rosso");
  } else if (myRec.resultString == "giallo") {
    c = ('rgb(255,204,0)');
    console.log("giallo");
  } else if (myRec.resultString == "bianco") {
    c = ('rgb(255,255,255)');
    console.log("bianco");
  }
  
  
  
  index++;

  if (index == width / w) {
    p = get(0, h, width, h * (height / 10)); //h * 23
    background(c); //cancella lo schermo 
    set(0, 30, p); //rilascia l'immagine p alle cordinate 0,0
    index = 0;

    //P5.speech
    fill(255);
    text("Speaking: ", 10, height - 5);
    fill(0, 255, 0)
    text(" ' " + myRec.resultString + " ' ", 70, height - 5);
    
  }
}

//-------------------------Parlo
function Parlo() {
  if (parole == "") {
    console.log(myRec.resultString);
    append(parole, myRec.resultString);
    console.log(parole);
  } else {
    parole = [];
    console.log(parole);
  }
}

//-------------------------
function parseResult() {
  // recognition system will often append words into phrases.
  // so hack here is to only use the last word:
  mostrecentword = myRec.resultString.split(' ').pop();
  console.log(myRec.resultString);
  console.log(myRec.resultString.split(' ').length);
}

//-------------------------
function showError() {
  console.log("There is an error");
}