// -
// Proto_def_v2_5 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// PENNELLO 1 Credits/Thanks to:
// @Generative Gestaltung ---> P_2_3_1_01 
// original license: http://www.apache.org/licenses/LICENSE-2.0
//
// PENNELLO 2 Credits/Thanks to:
// @Generative Gestaltung ---> P_2_3_3_01
// original license: http://www.apache.org/licenses/LICENSE-2.0
// —
//
// Help:
// [webcam] required
// [microphone] required
// [mouth] vertical wide open select is 1, it's active the pen down for drawing inside the canvas, while when mouth open will select the tool and color inside the interface map
//
// —

let faceapi;
let video;
var detections;
let w;
let h;

//--- canvas interfaccia
var tavolozza;


//------ variabili controllo
//--bocca
let bocca = [];
let i_oriz;
let i_vert;
let rap_oriz;
let rap_vert;
//-----abilitazioni penna
let penna = 0; // penna=0 nondisegna, penna=1 disegna
let precpen = 0;
let attualepen = 0;
//-----abilitazioni selezione
var selezion=0;
let strumento = 0; // 0 per testo su path, 1 per barrette
let strumentoprec = 0;
let strumentoattuale = 0;

//-----INTERFACCE
var tavolozza;
var interfaccia;
//----p5speech
var ascolto;
// ----- variabili disegno
var disegna = false;
var naso = [];
var nasoX;
var nasoY;
var c;
var lineLength = 10;
var angle2 = 0.5;
var angleSpeed = 2;
var disegna;
var x = 0;
var y = 0;
var stepSize = 3.0;
var lineLength = 25;
//------testo su tracciato
var stepSize2 = 5.0;
var font = 'Georgia';
let frase = "picopallino ciao, il gatto dorme sui libri e fuori il solle splende tra le colline";
var fontSizeMin = 8;
var angleDistortion = 0.0;
var counter = 0;
// ----- variabili disegno
// by default all options are set to true
var detection_options;
//----SETUP------
function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  tavolozza = createGraphics(w, h);

  detection_options = {
    withLandmarks: true,
    withDescriptors: false,
  }
  // carico il video da webcam
  video = createCapture(VIDEO);
  video.size(w, h);
  video.hide(); // Hide the video element, and just show the canvas
  faceapi = ml5.faceApi(video, detection_options, modelReady)
  //textAlign(RIGHT);
  colorMode(HSL, 360);
  spazioX = w * 0.05;
  spazioY = w * 0.01;
  c = color(181, 157, 0); //colore pennello
  x = windowWidth / 2;
  y = windowHeight / 2;


  menu_strum[0] = new Testo();
  menu_strum[1] = new Pennellino();
  menu_col[0] = new Nero();
  menu_col[1] = new MultiCol();

  //-------carico p5speech 
  ascolto = new p5.SpeechRec('IT'); // new P5.SpeechRec object
  ascolto.continuous = true; // do continuous recognition
  ascolto.interimResults = false; // allow partial recognition (faster, less accurate)
  ascolto.start();
  //ascolto.onResult=parseResult;
  //  ascolto.onError= showError;
}
//----------SI DISEGNA---------------------------------------
function draw() {

  drawtavolozza();

  background(250,0,340);
  //clear();
  image(tavolozza, 0, 0);
  push();
  textFont('Roboto');
  textSize(12);
  textAlign(LEFT);
  text(ascolto.resultString, 50, 90);
  pop();
  

  menu_strum[0].display();
  menu_strum[1].display();
  menu_col[0].display();
  menu_col[1].display();

 if( nasoY<80) {
 
    if (nasoX>menu_strum[0].x && nasoX< menu_strum[0].x+menu_strum[0].w && seleziona ==1) {
      menu_strum[0].alfa = 360;
      menu_strum[1].alfa = 100;
      menu_strum[0].stato=true;
      menu_strum[1].stato=false;
      
      
    }
   if (nasoX>menu_strum[1].x && nasoX< menu_strum[1].x+menu_strum[1].w && seleziona ==1) {
      menu_strum[1].alfa = 360;
      menu_strum[0].alfa = 100;
      menu_strum[1].stato=true;
      menu_strum[0].stato=false;
    }
  
   
   if (nasoX>menu_col[0].x && nasoX< (menu_col[0].x + menu_col[0].w )&& seleziona ==1) {
     menu_col[1].colore2=color(0, 0, 0);
   c = color(0, 0, 0);
   }
   colore = map(nasoX, menu_col[1].x, menu_col[1].x + menu_col[1].w, 0, 360, true);
   menu_col[1].changeColor();
   if (nasoX>menu_col[1].x && nasoX< (menu_col[1].x + menu_col[1].w )&& seleziona ==1) {
  
     menu_col[1].colore2=menu_col[1].colore;
     c=menu_col[1].colore;
   }
  
   }
 

 push()
  blendMode(DIFFERENCE);
  strokeWeight(2);
  stroke(100, 260, 260)
  translate(nasoX, nasoY);
  line(-8, 0, 8, 0);
  line(0, -8, 0, 8);
  pop() 

  

}
//----TAVOLOZZA--------

function drawtavolozza() {

  if (disegna == true) {

    
    if (menu_strum[0].stato==true && penna == 0) { //carico il dettato
      frase = ascolto.resultString;
      //console.log(frase.length);
      //counter=0;
    }
    if (menu_strum[0].stato==true && penna == 1 && frase.length > 2) { //disegno dettato
      var d2 = dist(x, y, nasoX, nasoY);
      tavolozza.textSize(fontSizeMin + d2 / 3);
      var newLetter = frase.charAt(counter);
      stepSize2 = tavolozza.textWidth(newLetter);

      if (d2 > stepSize2) {
        var angle2 = atan2(nasoY - y, nasoX - x);
        tavolozza.push();
        tavolozza.textFont(font);
        tavolozza.textAlign(LEFT);
        tavolozza.fill(c);
        tavolozza.translate(x, y);
        tavolozza.rotate(angle2 + random(angleDistortion));
        tavolozza.text(newLetter, 0, 0);
        tavolozza.pop();
        counter++;
        if (counter > frase.length) counter = 0;
        x = x + cos(angle2) * stepSize2;
        y = y + sin(angle2) * stepSize2;
      }
    }
    //-----fine testo su path----

    //----disegno pennello
    if (menu_strum[1].stato==true && penna == 1) {
      var d = dist(x, y, nasoX, nasoY);
      if (d > stepSize) {
        var angle = atan2(nasoY - y, nasoX - x);
        tavolozza.push();
        tavolozza.translate(x, y);
        tavolozza.rotate(angle);
        tavolozza.stroke(c);
        tavolozza.line(0, 0, 0, lineLength * random(0.95, 1) * d / 100);
        tavolozza.pop();
        x = x + cos(angle) * stepSize;
        y = y + sin(angle) * stepSize;
      }
    }
  }
}
function parseResult() {
  
  // recognition system will often append words into phrases.
  // so hack here is to only use the last word:
  frase = ascolto.resultString;
  console.log(ascolto.resultValue);
  console.log(ascolto.resultConfidence);
  
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

  for (let i = 0; i < detections.length; i++) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;

    naso = nose;
    nasoX = map(w - naso[6].x, w*0.3, w*0.7, 0,w,true);
          //map(w - naso[6].x, 280, 420, 0,w,true);
    nasoY = map(naso[6].y,h*0.3, h*0.7, 0,h,true);
          //map(naso[6].y,183, 345, 0,h,true);
    bocca = mouth;
    disegna = true;

  }

  i_oriz = dist(bocca[6].x, bocca[6].y, bocca[0].x, bocca[0].y) //dist bocca orizz.
  i_vert = dist(bocca[14].x, bocca[14].y, bocca[9].x, bocca[9].y); //dist bocca vert.
  rap_oriz = (i_vert / i_oriz);
  rap_vert = (i_oriz / i_vert);
  console.log(rap_vert);
  // push();
  // fill('#ff0000')
  //  rect(width-20,20,rap_oriz * 10, rap_vert * 10);
  // pop();
  if (rap_vert < 1.1) {
    attualepen = 1;
    seleziona = 1;
  } else {
    attualepen = 0;
    seleziona = 0;
  }
  // qui effetto uno switch per abilitare il tratto
  if (nasoY > 80) {
    if ((attualepen == 1) && (precpen == 0)) {
      if (penna == 0) {
        x=nasoX;
        y=nasoY;
        penna = 1;
      } else {
        penna = 0;
      }
    }
    precpen = attualepen;
  }
}

function showError(){
    rect(0, h*0.4, w,h*0.2)
	text('p5Speech in errore', w/4, h/2);
}