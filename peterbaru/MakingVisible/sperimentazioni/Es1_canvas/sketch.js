// -
// Sperimentazione objectDetector e SketchRNN 1.0 by peterbaru [objectDetector, SketchRNN]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/examples/p5js/SketchRNN
// original license: MIT License
//
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/examples/p5js/ObjectDetector
// original license: MIT License
// —
// [mouse] si deve disegnare sulla canvas per visualizzare gli elementi rappresentati
//
// —

let objectDetector;

let img;
let objects = [];
let status;

let modalita;


function setup() {
  canvas = createCanvas(500, 460);
  canvas.mouseReleased(analizza_disegno);
  background(220);
  objectDetector = ml5.objectDetector('cocossd', modelReady);
}

function analizza_disegno() {
  if (mouseIsPressed) {
    modalita = 1;
    analizza();
  } else {
    modalita = 0;
    console.log('modalità 0')
  }
}

// Change the status when the model loads.
function modelReady() {
  console.log("model Ready!")
}

// A function to run when we get any errors and the results
function gotResult(err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results)
  objects = results;
}

function analizza() {
  if (modalita == 1) {
    status = true;
    console.log('sono in analizza')
    objectDetector.detect(canvas, gotResult);
  // } else {
  //   status = false;
   }
}


function draw() {

  strokeWeight(15);
  stroke(0);

  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }



  // unless the model is loaded, do not draw anything to canvas
  if (status != undefined) {

    for (let i = 0; i < objects.length; i++) {
      //noStroke();
      //fill(0, 255, 0);
      createP(objects[i].label + " " + nfc(objects[i].confidence * 100.0, 2) + "%");
      // noFill();
      // strokeWeight(4);
      // stroke(0, 255, 0);
      // rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}
