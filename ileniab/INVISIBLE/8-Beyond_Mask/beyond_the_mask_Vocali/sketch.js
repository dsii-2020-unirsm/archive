// -
// Subtitle + video-FaceApi + P5 speech + sentiment analysis di ML5 in inglese by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

// Credits/Thanks to: 
// @IDMNYU for https://github.com/IDMNYU/p5.js-speech
// original license: MIT License
//
//  @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/sentiment
// original license: MIT License
//
//  @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/face-api
// original license: MIT License
//
// @shiffman(https://github.com/shiffman) for https://github.com/shiffman/p5.js-speech
// original license: MIT License
//




// P5 SPEECH-------
let riconosciParola;
let parola;
let arrayP;
let lunghezzaFrase;
let arrayLettere;
let quanteLettere;

// FACEAPI-------
let faceapi;
let video;
let detections;
let dimensioneFormaLarg = 1.5;
let dimensioneFormaAlt = 1.5;
let dimensioneForma = 1.2;
let dimensioneTesto = 1.5;

//SENTIMENT ANALYIS ML5-------

let sentimentoColore;
let sentimento;
let valoreSenti;
let statusEl;
let sentimentResult;



/////////-------------------------

// FACE API by default all options are set to true
const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
}


function setup() {
  createCanvas(460, 350);

  // initialize sentiment
  sentiment = ml5.sentiment('movieReviews', ModelReady);

  // setup the html environment-------------------------------------
  statusEl = createP('Caricamento modello:');
  sentimentResult = createP('Percentuale sentimento:');

  //-------------P5 SPEECH-------------------------------

  let lingua = navigator.language || 'en-US'; //var lingua che imposta il linguaggio
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);
  let continous = true; //ascolta di continuo
  let interim = true; //true va a capo e scrive tutto. false scrive solo quando fai una pausa
  riconosciParola.start(continous, interim);

  //imposto lo stile del testo
  //textSize(15 * dimensioneTesto);
  textFont('Roboto');
  rectMode(CENTER);

  //--------END-----P5 SPEECH--------------------------------

  //--FACEAPI------------------------------------------------------
  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); // Hide the video element, and just show the canvas
  faceapi = ml5.faceApi(video, detection_options, modelReady);
  textAlign(RIGHT);
}

function ModelReady() {
  // model is ready
  statusEl.html('model loaded');
}

//--------------SENTIMENT ANALYSIS-----------------------------------------
function getSentiment() {
  // get the values from the input
  const text = parola;

  // make the prediction
  const prediction = sentiment.predict(text);

  // display sentiment result on html page
  sentimentResult.html('Sentiment score: ' + valoreSenti + "%");

  valoreSenti = int((prediction.score) * 100);

  console.log("prediction: " + valoreSenti);
}


function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore
    parola = riconosciParola.resultString;
    getSentiment();
    arrayP = riconosciParola.resultString.split(' ');
    lunghezzaFrase = (arrayP.length);

    // console.log(parola);
    // console.log(lunghezzaFrase);

    
  }

}


function analisiLettere(parola) {

  arrayLettere = Array.from(parola);
  quanteLettere = (arrayLettere.length);

  for (let l = 0; l < arrayLettere.length; l++) {

    if (arrayLettere[l] === "a") {
      dimensioneFormaLarg = 2.5;
      dimensioneFormaAlt = 1;
    } else if (arrayLettere[l] === "e") {
      dimensioneFormaLarg = 1.5;
      dimensioneFormaAlt = 1.7;
    } else if (arrayLettere[l] === "i") {
      dimensioneFormaLarg = 1.5;
      dimensioneFormaAlt = 2.4;
    } else if (arrayLettere[l] === "o") {
      dimensioneFormaLarg = 2.5;
      dimensioneFormaAlt = 1.5;
    } else if (arrayLettere[l] === "u") {
      dimensioneFormaLarg = 3.5;
      dimensioneFormaAlt = 2.5;
    } 
  }


  console.log(arrayLettere);
  console.log(quanteLettere);

}

//----------END----------P5 SPEECH-------------------------------- 

function modelReady() {
  console.log('ready!')
  console.log(faceapi)
  faceapi.detect(gotResults)

}

function gotResults(err, result) {
  if (err) {
    console.log(err)
    return
  }
  // console.log(result)
  detections = result;

  background(255);
  image(video, 0, 0, width, height)
  if (detections) {
    if (detections.length > 0) {
      drawBox(detections)
      //SCRIVO P5 SPEECH--------------------------------------------------
      drawParola()
    }

  }
  faceapi.detect(gotResults)
}





//------------------P5 SPEECH----------------------------------------------  
function drawParola(x, y, larg, alt) {
  noStroke();
  fill(0);

  if (lunghezzaFrase > 14) {
    textSize(14);

  } else {
    textSize(15 * dimensioneTesto);

  }
  // textSize(15 * dimensioneTesto);
  textAlign(CENTER, CENTER);
  text(riconosciParola.resultString, width / 2, height - (height / 13), width, height / 5);

}
  
//-------------------------------END----P5SPEECH--------------------------

function drawBox(detections) {
  for (let i = 0; i < detections.length; i++) {
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x
    const y = alignedRect._box._y
    const boxWidth = alignedRect._box._width
    const boxHeight = alignedRect._box._height


    let xForma = x + (boxWidth / 2);
    let yForma = y + (boxHeight / 2) + (boxHeight / 4);
    let widthForma = boxWidth * dimensioneForma;
    let heightForma = (boxHeight / 2) * dimensioneForma;

    strokeWeight(11);
    noFill();

    fill(255);
    rect(width / 2, height - (height / 10), width, height / 5);

    // let c = map(valoreSenti, 0, 100, 15, 255);
    // fill(227, c, 104);

    //--RICHIAMO LA FUNZIONE drawParola di p5 speech per passargli le coordinate del box
    drawParola(xForma, yForma, widthForma, heightForma);
    //--------------------------
    dimensioneFormaLarg = 1.5;
    dimensioneFormaAlt = 1.5;
    analisiLettere(parola);

    if (valoreSenti <= (33)) {

      dimensioneTesto = 1.7;
      noFill();
      stroke(223, 104, 106); //rosso
      rect(xForma, yForma, widthForma / dimensioneFormaLarg, heightForma / dimensioneFormaAlt);
      // textSize(15 * dimensioneTesto);

    } else if (valoreSenti > (33) && valoreSenti <= 66) {
      noFill();
      stroke(78, 147, 196); //blu
      ellipse(xForma, yForma, widthForma / dimensioneFormaLarg, heightForma / dimensioneFormaAlt);
      // textSize(15 * dimensioneTesto);

    } else if (valoreSenti > 66 && valoreSenti <= 100) {
      noFill();
      stroke(227, 225, 104); //giallo
      ellipse(xForma, yForma, widthForma / dimensioneFormaLarg, heightForma / dimensioneFormaAlt);
      //textSize(15 * dimensioneTesto);

    }


  }
}
