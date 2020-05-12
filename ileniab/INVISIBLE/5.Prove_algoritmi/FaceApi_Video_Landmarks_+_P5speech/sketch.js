// -
// Prima prova video-FaceApi + P5 speech italiano by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

// In questo caso ho cercato di unire la FaceApi_video con p5.speech.js
// Dopo vari tentativi ho costruito un rettangolo sopra al volto,
// in modo tale da sfruttarlo come tela su cui lavorare, (per sostituire 
// momentaneamente la mascherina). 
// Al suo interno ho fissato il testo che p5speech riconosce,
// ad ogni pausa mi scriverà la stringa di parole dentro al riquadro.
// Il riquadro segue le coordinate del volto, perciò si visualizza anche 
// se la persona indossa una mascherina


// reference: https://learn.ml5js.org/docs/#/reference/face-api,
// https://idmnyu.github.io/p5.js-speech/


let riconosciParola;

let faceapi;
let video;
let detections;

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
  textSize(10);
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

  
//---------P5 SPEECH-------------------------------
  
    function draw(){
    //-------------------P5 SPEECH----------------------------------- 
     
    //  La stringa di testo verrà scritta a partire dal centro della canvas
  //  width/2,height/2 
  //  e si inserirà all'interno di un rettangolo largo width e alto height


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
    image(video, 0,0, width, height)
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
  
  function drawParola(x, y, larg,alt){
  fill(255);
  noStroke();
  text(riconosciParola.resultString,(x+(larg/2)), (y+(alt/2)+(alt/4)), larg, alt/2);
  }

function drawBox(detections){
    for(let i = 0; i < detections.length; i++){
        const alignedRect = detections[i].alignedRect;
        const x = alignedRect._box._x
        const y = alignedRect._box._y
        const boxWidth = alignedRect._box._width
        const boxHeight  = alignedRect._box._height
        
        fill(161, 95, 251);
        stroke(161, 95, 251);
        strokeWeight(2);
        rect(x+(boxWidth/2), (y+(boxHeight/2)+(boxHeight/4)), boxWidth, boxHeight/2);
      
        drawParola(x, y, boxWidth, boxHeight);
    }

    
}

function drawLandmarks(detections){
    noFill();
    stroke(161, 95, 251)
    strokeWeight(2)

    for(let i = 0; i < detections.length; i++){
       //const mouth = detections[i].parts.mouth; 
      //  const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;

     //   drawPart(mouth, true);
     //   drawPart(nose, false);
        drawPart(leftEye, true);
        drawPart(leftEyeBrow, false);
        drawPart(rightEye, true);
        drawPart(rightEyeBrow, false);

    }

}

function drawPart(feature, closed){
    
    beginShape();
    for(let i = 0; i < feature.length; i++){
        const x = feature[i]._x
        const y = feature[i]._y
        vertex(x, y)
    }
    
    if(closed === true){
        endShape(CLOSE);
    } else {
        endShape();
    }
    
}
  
// Problemi: 
// - elaborazione molto lenta, non riesco a capire se 
//   sia un problema di connessione o di caricamento del modello.
  
// - In più se smetto di parlare e ricomincio dopo essere passato
//   del tempo, p5 speech non registra più nulla.
  




