// -
// Prima prova video-FaceApi + P5 speech + sentiment analysis di ML5 in inglese by Ilenia Balella [keyword1, keyword2]
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
// @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/face-api
// original license: MIT License
//
// @shiffman(https://github.com/shiffman) for https://github.com/shiffman/p5.js-speech
// original license: MIT License
//
// Ho unito FaceApe con la libreria P5.speech.js e
// la sentiment analisis di ML5.



// Reference: 
// https://learn.ml5js.org/docs/#/reference/face-api
// https://idmnyu.github.io/p5.js-speech/


// P5 SPEECH-------
let riconosciParola;
let parola;

// FACEAPI-------
let faceapi;
let video;
let detections;
let dimensioneForma = 1.5;
let dimensioneTesto = 1;

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

  textFont('Roboto');
  rectMode(CENTER);

  //--------END-----P5 SPEECH--------------------------------

  //--FACEAPI------------------------------------------------------
  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);
  // video.hide(); // Hide the video element, and just show the canvas
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
  sentimentResult.html('Sentiment score: ' + valoreSenti +"%");
  
  valoreSenti=  int((prediction.score)*100);
    
  console.log("prediction: "+ valoreSenti);
}


function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore
parola = riconosciParola.resultString;
getSentiment();
   
    console.log(riconosciParola.resultString);
  }

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

  fill(0);
  noStroke();
  textSize(15 * dimensioneTesto);
  textAlign(CENTER, CENTER);
  text(riconosciParola.resultString, x, y, larg, alt);


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


    let c = map(valoreSenti, 0, 100, 15, 255);
    fill(227, c, 104);

    noStroke();
    
    if (valoreSenti <= (33)) {
      dimensioneForma = 1.7;
      dimensioneTesto = 1.7;
      
      rect(xForma, yForma, widthForma, heightForma);
      textSize(15 * dimensioneTesto);

    } else if (valoreSenti > (33) && valoreSenti <= 66) {
      
      ellipse(xForma, yForma, widthForma, heightForma);
      textSize(15 * dimensioneTesto);

    } else if (valoreSenti > 60 && valoreSenti <= 100) {
     
      ellipse(xForma, yForma, widthForma, heightForma);
      textSize(15 * dimensioneTesto);

    }

    //--RICHIAMO LA FUNZIONE drawParola di p5 speech per passargli le coordinate del box
    drawParola(xForma, yForma, widthForma, heightForma);
    //--------------------------
  }
}




// Problemi: 
// - elaborazione molto lenta, non riesco a capire se 
//   sia un problema di connessione o di caricamento del modello.

// - In più se smetto di parlare e ricomincio, dopo essere passato
//   del tempo, p5 speech non registra più nulla.
