// -
// Prima prova video-FaceApi + P5 speech italiano by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @IDMNYU for https://github.com/IDMNYU/p5.js-speech
// original license: MIT License
//
//  @ml5js (https://github.com/ml5js/ml5-library) for https://learn.ml5js.org/docs/#/reference/face-api
// original license: MIT License
//
// @shiffman(https://github.com/shiffman) for https://github.com/shiffman/p5.js-speech
// original license: MIT License
//
// @fupete (https://github.com/fupete) for https://editor.p5js.org/fupete/sketches/WUY1jA4jn 
//
// In questo caso ho cercato di unire la FaceApi_video con p5.speech.js
// inserendo dei parametri da poter modificare
// Per il momento ho inserito una GUI, impostando 
// diversi paramenti come la forma del riquadro, il suo
// colore, la sua dimensione, la dimensione del font e il suo colore.
// Queste variazioni dovranno poi essere comandate da un
// rilevatore di emozioni, che, in base al tono e 
// all’espressione facciale muoverà i parametri corrispondenti.



// reference: https://learn.ml5js.org/docs/#/reference/face-api,
// https://idmnyu.github.io/p5.js-speech/


let riconosciParola;

let faceapi;
let video;
let detections;

//-----------GUI------PARAMETRI---------------------------------------------

// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreForma: [161, 95, 251],

  dimensioneTesto:10,
  
  coloreTesto:255,
  
  selezionaForma: 1,

  dimensioneForma: 1,


}

// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {

  var gui = new dat.GUI();

  gui.addColor(parametri, 'coloreForma'); // Color Picker:non inserire nulla


  var forma = gui.addFolder('Forma'); // Crea una tendina che nasconde i prossimi parametri
  forma.add(parametri, 'dimensioneForma', 1, 3);
  forma.add(parametri, 'dimensioneTesto', 10, 50);
  forma.add(parametri, 'coloreTesto', 0, 255);
  forma.add(parametri, 'selezionaForma', 1, 2);
}

//------END-----GUI------PARAMETRI-------------------------------------------
//---------------

// by default all options are set to true
const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
}


function setup() {
  createCanvas(460, 350);

  //-------------P5 SPEECH-------------------------------

  let lingua = 'IT'; //var lingua che imposta il linguaggio
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);

  let continous = true; //ascolta di continuo
  let interim = false; //true va a capo e scrive tutto. false scrive solo quando fai una pausa

  riconosciParola.start(continous, interim);

  //imposto lo stile del testo

  textFont('Roboto');
  
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  //--------END-----P5 SPEECH--------------------------------


  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);
  // video.hide(); // Hide the video element, and just show the canvas
  faceapi = ml5.faceApi(video, detection_options, modelReady)
  textAlign(RIGHT);
}




function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore

    console.log(riconosciParola.resultString);

    //quante parole contiene     
    console.log(riconosciParola.resultString.split(' ').length);

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

  // background(220);
  background(255);
  image(video, 0, 0, width, height)
  if (detections) {
    if (detections.length > 0) {
      // console.log(detections)
      drawBox(detections)
      drawLandmarks(detections)
      drawParola()
    }

  }
  faceapi.detect(gotResults)
}
//------------------P5 SPEECH----------------------------------------------  
function drawParola(x, y, larg, alt) {
  
  fill(parametri.coloreTesto);
  noStroke();
  textSize(parametri.dimensioneTesto);
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

    fill(parametri.coloreForma);
    stroke(parametri.coloreForma);
    strokeWeight(2);
    
    let xForma = x + (boxWidth / 2);
    let yForma = y + (boxHeight / 2) + (boxHeight / 4);
    let widthForma = boxWidth * parametri.dimensioneForma;
    let heightForma = (boxHeight / 2) * parametri.dimensioneForma;
   
    n = parametri.selezionaForma;
    
    if (n == 1) {
     
     rect(xForma, yForma, widthForma, heightForma) ;
           
    } 
    
    else  {
      
      ellipse(xForma, yForma, widthForma, heightForma);
    }

    //--RICHIAMO LA FUNZIONE drawParola di p5 speech per passargli le coordinate del box

    drawParola(xForma, yForma, widthForma, heightForma);

    //--------------------------
  }


}

function drawLandmarks(detections) {
  noFill();
  stroke(161, 95, 251)
  strokeWeight(2)

  for (let i = 0; i < detections.length; i++) {
    //const mouth = detections[i].parts.mouth; 
    //  const nose = detections[i].parts.nose;
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;

    //   drawPart(mouth, true);
    //   drawPart(nose, false);
   // drawPart(leftEye, true);
   // drawPart(leftEyeBrow, false);
  //  drawPart(rightEye, true);
 //   drawPart(rightEyeBrow, false);

  }

}

function drawPart(feature, closed) {

  beginShape();
  for (let i = 0; i < feature.length; i++) {
    const x = feature[i]._x
    const y = feature[i]._y
    vertex(x, y)
  }

  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }

}

