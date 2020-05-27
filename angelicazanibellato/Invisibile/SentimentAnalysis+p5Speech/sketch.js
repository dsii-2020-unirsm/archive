// -
// p5Specch+sentimentAnalysis 0.12 by angelica [ml5, getSentiment]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/src/Sentiment
// original license: MIT License
//
//@ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/src/Sentiment
//original license: MIT License
// —
//
// Help:
// [mouse] submitBtn
//
// —



//P5 SPEECH
let parola;
let riconosciParola;

//SENTIMENT ANALYSIS
let sentimentResult;
let statusEl;
let percentuale;

function setup() {
  createCanvas(120, 120);
  background(255);



  // inizializzare il sentimento
  sentiment = ml5.sentiment('movieReviews', modelReady);

  // impostare l'html
  statusEl = createP('Sto caricando il modello');
  sentimentResult = createP('Percentuale del sentimento:');



  //P5 SPEECH

  let lingua = navigator.language || 'en-US'; //var lingua che imposta il linguaggio
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);
  let continous = true; //ascolta di continuo
  let interim = false; // scrive quando fai una pausa
  riconosciParola.start(continous, interim);
}

//end P5 SPEECH


function ModelReady() {
  // model is ready
  statusEl.html('model loaded');
}

// SENTIMENT ANALYSIS

function getSentiment() {

  //input da analizzare
  const text = parola;

  // fai la previsione
  const prediction = sentiment.predict(text);
  percentuale = int((prediction.score) * 100);

  // visualizza il risultato del sentimento sulla pagina html
  sentimentResult.html('Percentuale sentimento: ' + percentuale + " %");
  console.log("prediction: " + percentuale);

  //stampa();

}

function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore
    parola = riconosciParola.resultString;
    getSentiment(parola);

    createP('Testo: ' + riconosciParola.resultString);
    console.log(riconosciParola.resultString);
  }
}


function modelReady() {
  console.log('ready!')

}

function draw() {


  if (percentuale <= 25) {
    rect(40, 40, 40, 40);
    fill(0, 0, 250); //tristezza
    r = 0;
    g = 0;
    b = 250;

    coloreImg(r, g, b);

  } else if (percentuale > 25 && percentuale <= 50) {
    rect(40, 40, 40, 40);
    fill(250, 0, 0); //rabbia

    r = 250;
    g = 0;
    b = 0;

    coloreImg(r, g, b);

  } else if (percentuale > 50 && percentuale <= 75) {
    rect(40, 40, 40, 40);
    fill(250, 200, 0); //divertimento

    r = 250;
    g = 200;
    b = 0;

    coloreImg(r, g, b);
  } else if (percentuale > 75) {
    rect(40, 40, 40, 40);
    fill(0, 250, 0); //felicità
    
    r = 0;
    g = 250;
    b = 0;

    coloreImg(r, g, b);
  }

}

function coloreImg(r, g, b) {

  console.log('rosso: ' + r + ' verde: ' + g + ' blu: ' + b);
}
