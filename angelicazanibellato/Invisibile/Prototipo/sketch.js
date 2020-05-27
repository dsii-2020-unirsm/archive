// -
// DeletePixel  0.12 by angelica [p5Speech, getSentiment]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/src/Sentiment
// original license: MIT License
//
//@IDMNYU (github.com/IDMNYU) for https://github.com/IDMNYU/p5.js-speech
// original license: MIT License
//
//@lokesh (github.com/lokesh) for https://github.com/lokesh/color-thief
// original license: MIT License
// —



//P5 SPEECH
let parola;
let riconosciParola;

//SENTIMENT ANALYSIS
let sentimentResult;
let percentuale;

//DELETEPIXEL
let r;
let g;
let b;
let img;


function preload() {
  img = loadImage('bird.jpg');
}


function setup() {

  createCanvas(600, 400);
  //image(img, 0, 0, 600, 400);

  // inizializzare il sentimento
  sentiment = ml5.sentiment('movieReviews', modelReady);

  // impostare l'html
  sentimentResult = createP('Percentuale del sentimento:');



  //P5 SPEECH-----------------------------------------------------------------

  let lingua = navigator.language || 'en-US';
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);
  let continous = false; // true=ascolta di continuo
  let interim = false; // scrive quando fai una pausa
  riconosciParola.start(continous, interim);
}


// SENTIMENT ANALYSIS----------------------------------------------------------

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

function gotSpeech() {

  if (riconosciParola.resultValue) { //se il risultato ha valore
    parola = riconosciParola.resultString; //scrivi stringa
    getSentiment(parola);

    createP('Il mio ricordo: ' + riconosciParola.resultString);
    console.log(riconosciParola.resultString);
  }
}


function modelReady() {
  console.log('ready!')

}

function draw() {
  image(img, 0, 0, 600, 400);
  let x = 30;
  let y = 30;

  if (percentuale <= 25) {
    ellipse(x, y, 40, 40);
    noStroke();
    fill(0, 0, 250); //tristezza

    r = 0;
    g = 0;
    b = 250;

    coloreImg(r, g, b);


  } else if (percentuale > 25 && percentuale <= 50) {
    ellipse(x, y, 40, 40);
    noStroke();
    fill(250, 0, 0); //rabbia

    r = 250;
    g = 0;
    b = 0;

    coloreImg(r, g, b);

  } else if (percentuale > 50 && percentuale <= 75) {
    ellipse(x, y, 40, 40);
    noStroke();
    fill(250, 200, 0); //divertimento

    r = 250;
    g = 200;
    b = 0;

    coloreImg(r, g, b);

  } else if (percentuale > 75) {
    ellipse(x, y, 40, 40);
    noStroke();
    fill(0, 250, 0); //felicità

    r = 0;
    g = 250;
    b = 0;

    coloreImg(r, g, b);
  }
}

function coloreImg(r, g, b) {

  console.log('rosso: ' + r + ' verde: ' + g + ' blu: ' + b);
  cancellacolore(r, g, b); //input colore
}


function cancellacolore(r1, g1, b1) {
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = 4 * (x + y * img.width);
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      //calcolo il valore assoluto 
      let val = Number(abs(r - r1) + abs(g - g1) + abs(b - b1));

      //range di pixel che si avvicinano al colore
      if (val > 250) {

        //stampa pixel neri
        img.pixels[index + 0] = 0;
        img.pixels[index + 1] = 0;
        img.pixels[index + 2] = 0;

      }


    }
  }

  img.updatePixels()
}
