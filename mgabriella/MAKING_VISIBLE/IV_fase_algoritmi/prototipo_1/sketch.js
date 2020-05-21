// -
// sperimentazione prototipo_1 by Maria Gabriella Milinci [Face, Filter2d]
// 2020 © Nomestudente, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// @nome2 (github.com/ml5js) for https://learn.ml5js.org/docs/#/reference/face-api
//https://github.com/ml5js/ml5-library
//original license: MIT License
//Copyright (c) 2018 ML5.js
// —

let faceapi;
let video;
let detections;

// by default all options are set to true
const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}
function preload(){
    img = loadImage('mask.png')

}
function setup() {
  createCanvas(360, 270);

    // load up your video
    video = createCapture(VIDEO);
    video.size(width, height);
    // video.hide(); // Hide the video element, and just show the canvas
    faceapi = ml5.faceApi(video, detection_options, modelReady)
    textAlign(RIGHT);
}

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
        }

    }
    faceapi.detect(gotResults)
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
        const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;

        drawPart(mouth, true);
        //drawPart(nose, false);
        //drawPart(leftEye, true);
        //drawPart(leftEyeBrow, false);
        //drawPart(rightEye, true);
        //drawPart(rightEyeBrow, false);
        
    }

}

function drawPart(feature, closed){
    
 
    mLeftX = feature[0]._x
    mLeftY = feature[0]._y
    
    mRightX = feature[6]._x
    mRightY = feature[6]._y
    
    mCenterX = mLeftX+(mRightX-mLeftX)/2 
    mCenterY = mLeftY
    
    let d = dist(mLeftX, mLeftY, mRightX, mRightY)+60;
  
    aspectRatio = 500/347
    image(img, mLeftX-30, mLeftY-30, d, d/aspectRatio)
    
    beginShape();
    fill(255, 25, 155)
    ellipse(mCenterX, mCenterY+5, d-50)
    stroke(255);
    endShape();

     
    /*beginShape();
    for(let i = 0; i < feature.length; i++){
        const x = feature[i]._x
        const y = feature[i]._y
        vertex(x, y)
    }
    
    if(closed === true){
        endShape(CLOSE);
    } else {
        endShape();
    }*/
  
  
}
  
  