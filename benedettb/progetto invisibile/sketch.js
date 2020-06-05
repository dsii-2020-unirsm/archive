// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
LSTM Generator example with p5.js
This uses a pre-trained model on a corpus of Virginia Woolf
For more models see: https://github.com/ml5js/ml5-data-and-training/tree/master/models/charRNN
=== */

let charRNN;
// let textInput;
let lengthSlider;
let tempSlider;
let button;
let runningInference = false;
let detection_text = "";

function preload(){
  img1 = loadImage('images/cat.JPG');
  img2 = loadImage('images/cat2.JPG');
  img3 = loadImage('images/dog.jpg');
  img4 = loadImage('images/girasoli.jpg')

  images = [img1, img2, img3,img4];
}


function setup() {
  noCanvas();

  colorMode(HSB);

  // Create the LSTM Generator passing it the model directory
  objectDetector = ml5.objectDetector('cocossd', modelReadyO);
  charRNN = ml5.charRNN('./models/woolf/', modelReady);
  sentiment = ml5.sentiment('movieReviews', modelReadyS);

  // Grab the DOM elements
  // textInput = select('#textInput');
  lengthSlider = select('#lenSlider');
  tempSlider = select('#tempSlider');
  buttonDetect = select('#detect');
  button = select('#generate');

  // DOM element events
  buttonDetect.mousePressed(detectObject);
  button.mousePressed(generate);
  lengthSlider.input(updateSliders);
  tempSlider.input(updateSliders);
}

// Update the slider values
function updateSliders() {
  select('#length').html(lengthSlider.value());
  select('#temperature').html(tempSlider.value());
}

function modelReadyO() {
  select('#statusO').html('Model SSD loaded');
}

function modelReady() {
  select('#status').html('Model CharRNN loaded');
}

function modelReadyS() {
  select('#statusS').html('Model Sentiment loaded');
}

function detectObject(){

  for (let i = 0; i < images.length; i++){
    objectDetector.detect(images[i], gotResult);
  }

  function gotResult(err, results){
    objects = results;
    for (let i = 0; i < objects.length; i++) {
      detection_text += objects[0].label;
      detection_text += " ";
      select('#resultO').html(detection_text);
    }
  }
}

// Generate new text
function generate() {
  // prevent starting inference if we've already started another instance
  // TODO: is there better JS way of doing this?
  if(!runningInference) {
    runningInference = true;

    // Update the status log
    select('#status').html('Generating...');

    // Grab the original text
    // const original = textInput.value();
    // Make it to lower case
    // const txt = original.toLowerCase();

    // Check if there's something to send
    if (detection_text.length > 0) {
      // This is what the LSTM generator needs
      // Seed text, temperature, length to outputs
      // TODO: What are the defaults?
      const data = {
        seed: detection_text,
        temperature: tempSlider.value(),
        length: lengthSlider.value()
      };

      // Generate text with the charRNN
      final_text = charRNN.generate(data, gotData);

      // When it's done
      function gotData(err, result) {
        // Update the status log
        select('#status').html('Ready!');
        final_text = detection_text + result.sample;

        sentences = result.sample.split(".");

        final_text_no_first = "";
        for (let i = 1; i < sentences.length; i++) {
          final_text_no_first += sentences[i];
          if (i != (sentences.length - 1)) {
            final_text_no_first += ". ";
          }
          else{
            final_text_no_first += "...";
          }
        }

        select('#result').html(final_text_no_first);

        const prediction = sentiment.predict(detection_text + " " + final_text_no_first);
        select('#statusS').html('Ready!');
        select('#resultS').html(prediction.score);

        if (parseFloat(prediction.score) <= 0.5) {
          document.body.style.backgroundColor = "red";
        }
        else{
          document.body.style.backgroundColor = "green";
        }


        runningInference = false;
      }
    }
  }
}
