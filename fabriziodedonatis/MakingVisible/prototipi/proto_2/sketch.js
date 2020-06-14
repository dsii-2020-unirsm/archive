// -
// FaceApi_disegna_v2 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @Generative Gestaltung ---> P_2_3_1_01
// original license: http://www.apache.org/licenses/LICENSE-2.0
//

//
// Help:
// [webcam] required

let faceapi;
let video;
let detections;

let w;
let h;
//------ variabili controllo
//--bocca
bocca = [];
let Dx_oriz;
let Dy_oriz;
let i_oriz;
let Dx_vert;
let Dy_vert;
let i_vert;
let rap_oriz;
let rap_vert;
//-----abilitazioni penna
let penna = 0; // penna=0 nondisegna, penna=1 disegna
let precpen = 0;
let attualepen = 0;
//-----abilitazioni selezione
let tipo_pennello =0; // 0 per testo su path, 1 per barrette


// ----- variabili disegno
naso = [];
var c;
var lineLength = 10;
var angle2 = 0.5;
var angleSpeed = 2;
var disegna = false;
var x = 0;
var y = 0;
var stepSize = 3.0;
var lineLength = 25;
// ----- variabili disegno

// by default all options are set to true
const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
}


function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);

  // load up your video

  video = createCapture(VIDEO);

  video.size(w, h);

  video.hide(); // Hide the video element, and just show the canvas

  faceapi = ml5.faceApi(video, detection_options, modelReady)
  textAlign(RIGHT);
  c = color(181, 157, 0); //colore pennello
  x = windowWidth / 2;
  y = windowHeight / 2;
}

//----------SI DISEGNA---------------------------------------
function draw() {
  translate(w, 0);
  scale(-1, 1); // specchio la canvas

  if (disegna == true) {

    var d = dist(x, y, naso[6].x, naso[6].y);
    
    if (d > stepSize) {
      var angle = atan2(naso[6].y - y, naso[6].x - x);

      // push();

      translate(x, y);

      rotate(angle);
      stroke(c);
      line(0, 0, 0, lineLength * random(0.95, 1) * d / 100);
      //pop();

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }

}




//------MODELLO FACEAPI PRONTO----
function modelReady() {
  console.log('ready!')
  console.log(faceapi)
  faceapi.detect(gotResults)

}

//------ RISULTATO MODELLO FACEAPI-----
function gotResults(err, result) {
  if (err) {
    console.log(err)
    return
  }
  // console.log(result)
  detections = result;

  // background(220);
  // image(video, 0,0, width, height)
  if (detections) {
    if (detections.length > 0) {
      // console.log(detections)
      //   drawBox(detections)
      drawLandmarks(detections)

    }

  }
  faceapi.detect(gotResults)
}



//----FACEAPI ESTRAZIONE LANDMARKS
function drawLandmarks(detections) {
  // noFill();
  // stroke(161, 95, 251)
  //strokeWeight(2)
  

  for (let i = 0; i < detections.length; i++) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;
   // const leftEye = detections[i].parts.leftEye;
   // const rightEye = detections[i].parts.rightEye;
   // const rightEyeBrow = detections[i].parts.rightEyeBrow;
    //const leftEyeBrow = detections[i].parts.leftEyeBrow;
    naso = nose;
    bocca = mouth;

    disegna = true;

    // drawPart(mouth, true);
    //drawPart(nose, false);
    // drawPart(leftEye, false);
    // drawPart(leftEyeBrow, false);
    //  drawPart(rightEye, false);
    //  drawPart(rightEyeBrow, false);

  }
  
   Dx_oriz = (bocca[6].x - bocca[0].x);
    Dy_oriz = (bocca[6].y - bocca[0].y);
    i_oriz = Math.sqrt(Math.pow(Dx_oriz, 2) + Math.pow(Dy_oriz, 2)); //dist bocca orizz.

    Dx_vert = (bocca[14].x - bocca[9].x);
    Dy_vert = (bocca[14].y - bocca[9].y);
    i_vert = Math.sqrt(Math.pow(Dx_vert, 2) + Math.pow(Dy_vert, 2)); //dist bocca vert.

    rap_oriz = (i_vert / i_oriz);
    rap_vert = (i_oriz / i_vert);


    console.log("rapporto_O " + rap_oriz);
    console.log("rapporto_V " + rap_vert);

    if (rap_vert < 0.9) {
      attualepen = 1;
    } else {
      attualepen = 0;
    }

// qui effetto uno switch per abilitare il tratto
    if ((attualepen == 1) && (precpen == 0)) {  
      if (penna == 0) {
        penna = 1;

      } else {
        penna = 0;
      }

    }
    
    console.log(penna + " " + attualepen + " " + precpen);
    precpen=attualepen;

}


//-------------------------------------------------------------------------------
//---- disegna la box si potrebbe cancellare
/*  function drawBox(detections) {
  for (let i = 0; i < detections.length; i++) {
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x
    const y = alignedRect._box._y
    const boxWidth = alignedRect._box._width
    const boxHeight = alignedRect._box._height

    noFill();
    stroke(161, 95, 251);
    strokeWeight(2);
    rect(x, y, boxWidth, boxHeight);
  }

} */

/*function drawPart(feature, closed) {

  beginShape();
  for (let i = 0; i < feature.length; i++) {
    const x = feature[i]._x
    const y = feature[i]._y


  }
  disegna = true;
  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  } 

} */