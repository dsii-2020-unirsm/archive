// -
// FaceApi_ estrazione schema landmark by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @nome (twitter.com/nome) for https://www.indirizzolinkvarioogithub.pippo/gino/mino
// original license: Tipo licenza
//
// @nome2 (github.com/nome2) for https://www.altro indirizzolinkvarioogithub.pippo/gino/mino
// original license: Tipo licenza
// —

let faceapi;
let video;
let detections;


// by default all options are set to true
const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    // load up your video
    video = createCapture(VIDEO);
    video.size(windowWidth, windowHeight);
  
         video.hide(); // Hide the video element, and just show the canvas
  
    faceapi = ml5.faceApi(video, detection_options, modelReady)
    textAlign(RIGHT);
}

function draw (){
  
  

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

     background(220);
  
   // image(video, 0,0, width, height)
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
    stroke(161, 95, 251)
    strokeWeight(2)

    for(let i = 0; i < detections.length; i++){
        const mouth = detections[i].parts.mouth; 
        const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;
        
      // individuo array naso
      //console.log(nose[3])
      // disegno linea assetto naso
      push()
       stroke(0,200,10)
       line((nose[0]._x) - windowWidth/4 , (nose[0]._y), 
            (nose[6]._x) - windowWidth/4 , (nose[6]._y))   
      pop()
      
      push()
      stroke(255)
      let v1 = createVector(rightEyeBrow[3]._x, rightEyeBrow[3]._y,0);
      let v2 = createVector(rightEye[4]._x, rightEye[4]._y,0);
      let c = p5.Vector.dist(v1, v2);
      let m = map(c, 38, 52, 0, 255);
      //console.log(m);
      fill(m*1.2,m*1,m*0.7)
      ellipse((mouth[0]._x) - (windowWidth/4), (mouth[0]._y),
              (mouth[0]._x) - (mouth[6]._x), (mouth[3]._y)-(mouth[9]._y))
      pop()
      
        drawPart(mouth, true);
        drawPart(nose, false);
        drawPart(leftEye, false);
        drawPart(leftEyeBrow, false);
        drawPart(rightEye, false);
        drawPart(rightEyeBrow, false);

    }

}

function drawPart(feature, closed){
    
    beginShape();
    for(let i = 0; i < feature.length; i++){
        const x = feature[i]._x
        const y = feature[i]._y
        
        // qui chiedo di numerare i landmark
        push()
          textSize(10);   
          stroke(255)
          strokeWeight(1);  // spessore testo
          text(i, x, y);
        pop()
        vertex(x, y)
     
    }
    
    if(closed === true){
        endShape(CLOSE);
    } else {
        endShape();
    }
    
}