// -
// Sound Classification 0.8 by Angelica Gasperoni [sound, draw]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// The Coding Train / Daniel Shiffman for https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A
// 
// Copyright (c) 2019 ml5 for https://opensource.org/licenses/MIT
// original license: MIT License
// —
//
//Premi play e attendi che venga riconosciuto il suono
//Una volta riconosciuto, inizierà a disegnare l'animale riconosciuto
//
//



// The SketchRNN model
let model;
// Start by drawing
let previous_pen = 'down';
// Current location of drawing
let x, y;
// The current "stroke" of the drawing
let strokePath;




// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/i-OVB_GIc/';

//////
let riconosciuto = false
let cosae = ""
let modalitaDisegno = false

//////



// 1. CARICA MODELLO DEI SUONI ALLENATO SU TEACHABLE MACHINE

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
        // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
  //model = ml5.sketchRNN('cat', prontoaDisegnare);
}



// 2. CREA LA TELA

function setup() {
  createCanvas(640, 520);
    // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}



// 3. COMINCIA A CLASSIFICARE L'AUDIO

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
//  classifier.stop(clear);
}



// 4. CERCA DI TROVARE UN RISULTATO: se trova un risultato, va in gotResults; se va in gotResults, mette in label il contenuto (il risultato)

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}




//// Reset the drawing
//function startDrawing() {
//  conta = 0;
//  background(220);
//  // Start in the middle
//  x = width / 2;
//  y = height / 2;
//  model.reset();
//  // Generate the first stroke path
//  model.generate(gotStroke);
//}





// 5. NEL DRAW GUARDA SE: 
// - è non riconosciuto, torna all'inizio e riascolta
// - è riconosciuto, carica il modello del risultato riconosciuto (cane/gatto)

function draw() {
  background(0);
  
  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);
  
  // Background noise is headphones
  let emoji = "🎧";
  // Pick an emoji based on label
  if (!riconosciuto) {
    if (label == "Dog"|| label == "dog") {
      riconosciuto = true
      //cosae = label
      caricaModello('dog');
      //model = ml5.sketchRNN('dog', prontoaDisegnare);
    } else if (label == "Cat" || label == "cat") {
      riconosciuto = true
      //cosae = label
      caricaModello('cat');
      //model = ml5.sketchRNN('cat', prontoaDisegnare);
    }
     
    console.log(caricaModello);
}
    

    // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}
  
  
// 6. CARICA IL MODELLO  

  
function caricaModello(cosae) {   // If something new to draw
  // caricare il modello... quello hai messo nel preload!
  console.log("modello pronto");
  model = ml5.sketchRNN('cat');
  model = ml5.sketchRNN('dog');

}

function disegna() {
  modalitaDisegno = true
  //caricaModello(cosae)
} //la chiamo troppe volte

// A new stroke path
function gotStroke(err, s) {
  strokePath = s;
}  
  

function disegna() {
   // loop di sketch rnn...
     // questo sotto è nel loop
  if (strokePath) {
    // If the pen is down, draw a line
    if (previous_pen == 'down') {
      stroke(0);
      strokeWeight(3.0);
      line(x, y, x + strokePath.dx, y + strokePath.dy);
    }
    // Move the pen
    x += strokePath.dx;
    y += strokePath.dy;
    // The pen state actually refers to the next stroke
    previous_pen = strokePath.pen;
    // If the drawing is complete
    if (strokePath.pen !== 'end') {
      strokePath = null;
      model.generate(gotStroke);
    }
  
  //console.log(cosae)
  // chiamare funzione disegna quando ha caricato
  disegna(startDrawing)
  }
}


