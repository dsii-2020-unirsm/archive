// sentiment analys + P5Speech di ML5 in inglese by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


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

}

function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore
    parola = riconosciParola.resultString;
    getSentiment();

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

  } else if (percentuale > 25 && percentuale <= 50) {
    rect(40, 40, 40, 40);
    fill(250, 0, 0); //rabbia

  } else if (percentuale > 50 && percentuale <= 75) {
    rect(40, 40, 40, 40);
    fill(250, 200, 0); //divertimento

  } else {
    rect(40, 40, 40, 40);
    fill(0, 250, 0); //felicità
  }

}