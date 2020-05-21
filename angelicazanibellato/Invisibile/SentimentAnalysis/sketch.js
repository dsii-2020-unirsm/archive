// sentiment analys di ML5 in inglese by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let sentiment;
let statusEl;
let submitBtn;
let inputBox;
let sentimentResult;
let prediction;
let percentuale;


function setup() {
  createCanvas(120,120);
  background(255);


  // inizializzare il sentimento
  sentiment = ml5.sentiment('movieReviews', modelReady);

  // impostare l'html
  statusEl = createP('Sto caricando il modello');
  inputBox = createInput('Scrivi il tuo ricordo...');
  inputBox.attribute('size', '100');
  submitBtn = createButton('invio');
  sentimentResult = createP('percentuale del sentimento:');

  // prevedere il sentimento al mousePressed()
  submitBtn.mousePressed(getSentiment);
  
}


function getSentiment() {

  // ottieni i valori dall'input
  const text = inputBox.value();

  // fai la previsione
  const prediction = sentiment.predict(text);
  console.log(prediction);
  
  percentuale = int((prediction.score)*100);

  // visualizza il risultato del sentimento sulla pagina html
  sentimentResult.html('percentuale del sentimento: ' + percentuale + '%');
}

function draw(){
  
  
  if ( percentuale <= 25) {
    rect (40,40,40,40);
    fill(0,0,250);
  }
  
  else if ( percentuale > 25 && percentuale <= 50) {
    rect (40,40,40,40);
    fill(250,0,0);
  }
  
 else if ( percentuale > 50 && percentuale <= 75) {
    rect (40,40,40,40);
    fill(250,200,0);
  }
  
  else {
  rect (40,40,40,40);
  fill(0,250,0);
  }
  
}

function modelReady() {
  // model is ready
  statusEl.html('Il modello è pronto');
}
