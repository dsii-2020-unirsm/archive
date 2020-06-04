// -
// Prima prova in ITALIANO P5 speech con la sentiment analysis di dandelion by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @IDMNYU for https://github.com/IDMNYU/p5.js-speech
// original license: MIT License
//
// @dandelion (https://github.com/dandelion) for https://dandelion.eu/docs/api/datatxt/sent/v1/
// original license: [The "BSD licence"] Copyright (c) 2013 Dandelion All rights reserved
//
// @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/face-api
// original license: MIT License
//
// @shiffman(https://github.com/shiffman) for https://github.com/shiffman/p5.js-speech
// original license: MIT License
//
// La libreria P5.speech.js con la sentiment analisis di dandelion e cambiamento di forma
// REFERENCE: https://dandelion.eu/docs/api/datatxt/sent/v1/

/////////p5Speech---------------------------
let riconosciParola;
let parola;

/////////Sentiment Analysis Dandelion-------
let token = '480a2f4b0de248949240af0ee048278c';
let testoDaAnalizzare = " ";
let italiano = 'it';
let analisiCompleta = false;
let sentimentoColore;
let sentimento = 'neutral';
let valoreSenti = 0;
let statusEl;
let sentimentResult;


//---------------URL------DANDELION-------------------
function sentimental_analysis() {
  let url = 'https://api.dandelion.eu/datatxt/sent/v1/?lang=' + italiano + '&text=' + testoDaAnalizzare + '&token=' + token;
  loadJSON(url, mostraValore);
}
//----------------------------------------------------



///////SENTIMENT ANALYSIS---------
function mostraValore(r_) {
  analisiCompletata = true;
  valoreSenti = (r_.sentiment.score) * 100;
  sentimento = r_.sentiment.type;

  // display sentiment result on html page
  sentimentResult.html('Percentuale sentimento: ' + valoreSenti + "%");
  statusEl.html('modello caricato: ' + sentimento);

  if (analisiCompletata == true) {
    cambia_colore();
  }
}

function cambia_colore() {

  //   let c= map(valoreSenti,-100,100,15, 255);

  //   background(227, c, 104);

  console.log(valoreSenti);
}

/////////-------------------------
/*
function preload() {
  //---------------URL------DANDELION-------------------
  loadJSON('https://api.dandelion.eu/datatxt/sent/v1/?lang=it&text=Un giorno la mamma le consegna un cestino pieno di cose buone da portare alla nonna &token=f40b79e5ca0b4c1fabf29f4c240aadf9', gotData);
  //----------------------------------------------------
}
*/

function setup() {
  createCanvas(500, 500);

  // setup the html environment
  statusEl = createP('tipo sentimento:');
  sentimentResult = createP('Percentuale sentimento:');


  //-----------------------P5 SPEECH  -----------------
  let lingua = 'IT'; //var lingua che imposta il linguaggio
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);

  let continous = true; //ascolta di continuo
  let interim = true; //true va a capo e scrive tutto. false scrive solo quando fai una pausa

  riconosciParola.start(continous, interim);
  //-------------------END----P5 SPEECH  -----------------

}


function draw() {
  background(227, 195, 104);
  //cambia_colore();
  noStroke();
  if (valoreSenti <= (-30)) {
    rect(100, 100, 200, 200);
    fill(223, 104, 106); //rosso
  } else if (valoreSenti > (-30) && valoreSenti <= 30) {
    ellipse(100, 100, 200, 200);
    fill(78, 147, 196); //blu
  } else if (valoreSenti > 30 && valoreSenti <= 100) {
    ellipse(100, 100, 200, 200);
    fill(227, 225, 104); //giallo
  }
  scrivi();

}


function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore

    testoDaAnalizzare = (riconosciParola.resultString);
    sentimental_analysis();
    console.log(riconosciParola.resultString);

  }

}

function scrivi() {
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(riconosciParola.resultString, width / 2, height / 2, width, height);
  textFont('Roboto');
  textSize(30);
}

// function disegnaBox() {
  
// }
