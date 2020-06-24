// -
// Segni emotivi by Maria Gabriella Milinci [Segniemotivi, mascherina]
// 2020 © Maria Gabriella Milinci @mgabriella, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @ml5js (github.com/ml5js) for https://github.com/ml5js
// original license: MIT License
// 
// @processing (github.com/processing/p5.js) for https://github.com/processing/p5.js
// original license: Tipo licenza
//
// @TeachableMachine (github.com/googlecreativelab/teachable-machine-v1) for https://teachablemachine.withgoogle.com/
// original license : Apache License Version 2.0, January 2004 http://www.apache.org/licenses/
// —
//
// Help:
// [button] disegna - drawButton
// [button] random - randomButton
// [button] applica - stopDrawButton
// [mouse] seleziona immagine nella lista array - mouseIsPressed
//
// —





let faceapi;
let video;
let detections;
let classifier;
let label = ''
let withmask = false;
let drawing = false;
let videoImage;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/3V2YfNi1m/';
let linesArray = []


$( document ).ready(function() {
   $("#mask-list ul li").click(function () {
    
    $(".selected-mask").removeClass("selected-mask");
    $(this).addClass("selected-mask");
    selectedMask = $(".selected-mask img");
       var pos = selectedMask.attr('value')
       currentDraw = possibleDraws[pos]
       linesArray = [];
   });
});




// relative path to your models from window.location.pathname
const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
  Mobilenetv1Model: 'models',
  FaceLandmarkModel: 'models',
  FaceRecognitionModel: 'models',
  FaceExpressionModel: 'models',
}


let canvasW = 320; 
let canvasH = 240;

function preload(){
    //img = loadImage('')
    draw1 = loadImage('immagini_scelte/children2.png')
    draw2 = loadImage('immagini_scelte/arcobaleno.png')
    draw3 = loadImage('immagini_scelte/farfalle.png')
    draw4 = loadImage('immagini_scelte/girl.png')
    draw5 = loadImage('immagini_scelte/sole.png')
    draw6 = loadImage('immagini_scelte/famiglia.png')
    draw7 = loadImage('immagini_scelte/coccinella.png')
    draw8 = loadImage('immagini_scelte/fiori.png')
    draw9 = loadImage('immagini_scelte/pulcino.png')
    
    possibleDraws = [draw1, draw2, draw3, draw4, draw5, draw6, draw7, draw8, draw9]
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
function setup() {
  

  // load up your video
  video = createCapture(VIDEO);
  video.size(canvasW, canvasH);
  video.hide();


  console.log(video.width + ' ' +video.height)
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent("canvasContainer");
  //canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  
  flippedVideo = ml5.flipImage(video)
  // video.hide(); // Hide the video element, and just show the canvas
  faceapi = ml5.faceApi(video, detection_options, modelReady)
  textAlign(RIGHT);
    
  currentDraw = possibleDraws[0]
  

  //Bottoni per disegnare
  drawButton = createButton('disegna!');
  drawButton.size(120, 40)
  drawButton.position((windowWidth - drawButton.width) / 2-80, canvasH+20)
  drawButton.mousePressed(enableDraw);

  randomButton = createButton('fammi scegliere!');
  randomButton.size(120, 40)
  randomButton.position((windowWidth - randomButton.width) / 2+80, canvasH+20)
  randomButton.mousePressed(randomImg);

  stopDrawButton = createButton('applica!');
  stopDrawButton.size(120, 40)
  stopDrawButton.position((windowWidth - stopDrawButton.width) / 2, canvasH+20)
  stopDrawButton.mousePressed(disableDraw);
  stopDrawButton.hide()
    
  classifyVideo()
    
    
}

//Funzione che nasconde il video e mostra il canvas per disegnare
function randomImg(){
  
  currentDraw = random(possibleDraws)
  
  $(".selected-mask").removeClass("selected-mask");


}

//Funzione che nasconde il video e mostra il canvas per disegnare
function enableDraw(){
  drawing = true
  drawButton.hide()
  randomButton.hide()
  stopDrawButton.show()
  linesArray = []
  $(".selected-mask").removeClass("selected-mask");


}

//Funzione che toglie il canvas da disegno e mostra di nuovo il video
function disableDraw(){
  drawing = false
  drawButton.show()
  randomButton.show()
  stopDrawButton.hide()

  faceapi.detect(gotResults)
}


function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  let c = flippedVideo.get(0, 0, 320, 240);
  classifier.classify(c, gotResult);
}

function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  risultato = results[0].label;

    if(trim(String(risultato))=='without mask'){
        
        label = 'Indossa la mascherina'
        withmask = false
    } else {
        label=''
        withmask = true
    }
  setInterval(classifyVideo(), 1300);
}


function getRandomDraw(){
    var pos = floor(random(possibleDraws.length))
    currentDraw = possibleDraws[pos]
    return possibleDraws[pos]
}

function modelReady() {
  console.log('ready!')
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
  background(225);
  if(!drawing){
    videoImage = image(video, 0,0, canvasW, canvasH)
    if (detections) {
      if (detections.length > 0) {
        // console.log(detections)
       // drawBox(detections)
        drawLandmarks(detections)
      }
  
    }
    faceapi.detect(gotResults)
  }
  
}

function draw(){
  if(drawing){
    stroke(0, 0, 0)
    strokeWeight(2)

    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
      linesArray.push([mouseX, mouseY, pmouseX, pmouseY])
    }
  }
  
}
function drawBox(detections){
  for(let i = 0; i < detections.length; i++){
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x
    const y = alignedRect._box._y
    const boxWidth = alignedRect._box._width
    const boxHeight  = alignedRect._box._height
        
    noFill();
    stroke(161, 95, 251);
    strokeWeight(2);
    rect(x, y, boxWidth, boxHeight);
  }
    
}

function drawLandmarks(detections){
  noFill();
  stroke(255, 255, 255)
  strokeWeight(2)

  for(let i = 0; i < detections.length; i++){
    const mouth = detections[i].parts.mouth; 
    drawMask(mouth, true);
  }

}

function drawMask(feature, closed){
    
 if(withmask){
    mLeftX = feature[0]._x
    mLeftY = feature[0]._y
    
    mRightX = feature[6]._x
    mRightY = feature[6]._y
    
    mCenterX = mLeftX+(mRightX-mLeftX)/2 
    mCenterY = mLeftY
    
    let d = dist(mLeftX, mLeftY, mRightX, mRightY)+60;
    

    newDraw = currentDraw    
    aspectRatioDraw = newDraw.width/newDraw.height
    
    drawW = d-60
    drawH =drawW/aspectRatioDraw
    
    dCenterX=mCenterX-drawW/2
    dCenterY = mCenterY-drawH/2


    //Se c'è un disegno mostro quello, altrimenti un'immagine PNG
    if(linesArray.length==0){
      image(newDraw, dCenterX, dCenterY, drawW, drawH)
    } else {
      stroke(0, 0, 0)
      strokeWeight(2)
      for(let i=0; i<linesArray.length; i++){

        //Qui vado a scalare il disegno che avevo fatto
        let l = linesArray[i];
        let startX=((l[0]/canvasW)*drawW)+dCenterX
        let startY=((l[1]/canvasH)*drawH)+dCenterY
  
        let endX=((l[2]/canvasW)*drawW)+dCenterX
        let endY=((l[3]/canvasH)*drawH)+dCenterY
        line(startX, startY, endX, endY);
      }
    }
    
    
    
 }
  
  textSize(16);
  textAlign(LEFT);
  text(label, 90, 10);
    
    



  if(closed === true){
    endShape(CLOSE);
  } else {
    endShape();
  }
   
}
