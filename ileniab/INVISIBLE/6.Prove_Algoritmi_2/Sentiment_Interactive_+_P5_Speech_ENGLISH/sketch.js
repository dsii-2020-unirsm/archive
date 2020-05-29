// -
// Prima prova in INGLESE P5 speech con la sentiment analysis di ML5 by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
//  @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/sentiment
// original license: MIT License
//
//  @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/face-api
// original license: MIT License
//
// @shiffman(https://github.com/shiffman) for https://github.com/shiffman/p5.js-speech
// original license: MIT License
//


let riconosciParola;
let parola;

let predizione;
let sentiment;
let statusEl;
let sentimentResult;

function setup() {
  //noCanvas();
  createCanvas(500, 300);
  //-----------------------P5 SPEECH  -----------------
  let lingua = navigator.language || 'en-US'; //var lingua che imposta il linguaggio
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);

  let continous = true; //ascolta di continuo
  let interim = true; //true va a capo e scrive tutto. false scrive solo quando fai una pausa

  riconosciParola.start(continous, interim);
  //-------------------END----P5 SPEECH  -----------------

  // initialize sentiment
  sentiment = ml5.sentiment('movieReviews', modelReady);

  // setup the html environment
  statusEl = createP('Loading Model...');
  
  sentimentResult = createP('sentiment score:');

}

function draw() {
  
  background(227, 195, 104);
  let c= map(predizione,0,100,15, 255);
  
  background(227, c, 104);
  scrivi();
}

function getSentiment() {
  // get the values from the input
  const text = parola;

  // make the prediction
  const prediction = sentiment.predict(text);

  // display sentiment result on html page
  sentimentResult.html('Sentiment score: ' + predizione +"%");
  
  predizione=  int((prediction.score)*100);
    
  console.log("prediction: "+ predizione);
}

function modelReady() {
  // model is ready
  statusEl.html('model loaded');
}


function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore

    parola = riconosciParola.resultString;
    console.log(riconosciParola.resultString);
    getSentiment();
    //quanti spazi contiene     
    console.log(riconosciParola.resultString.split(' ').length);

  }

}

function scrivi() {
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(riconosciParola.resultString, width / 2, height / 2, width, height);
  textFont('Roboto');
  textSize(30);

}
