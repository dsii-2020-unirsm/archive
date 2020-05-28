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

let objectDetector;

let img;
let objects = [];
let status;

let modalita;


//sketchRNN
let model;
let previous_pen = 'down';
let x, y;
let strokePath;


const tipiImmagine = [
  'alarm_clock',
  'ambulance',
  'angel',
  'ant',
  'antyoga',
  'backpack',
  'barn',
  'basket',
  'bear',
  'bee',
  'beeflower',
  'bicycle',
  'bird',
  'book',
  'brain',
  'bridge',
  'bulldozer',
  'bus',
  'butterfly',
  'cactus',
  'calendar',
  'castle',
  'cat',
  'catbus',
  'catpig',
  'chair',
  'couch',
  'crab',
  'crabchair',
  'crabrabbitfacepig',
  'cruise_ship',
  'diving_board',
  'dog',
  'dogbunny',
  'dolphin',
  'duck',
  'elephant',
  'elephantpig',
  'eye',
  'face',
  'fan',
  'fire_hydrant',
  'firetruck',
  'flamingo',
  'flower',
  'floweryoga',
  'frog',
  'frogsofa',
  'garden',
  'hand',
  'hedgeberry',
  'hedgehog',
  'helicopter',
  'kangaroo',
  'key',
  'lantern',
  'lighthouse',
  'lion',
  'lionsheep',
  'lobster',
  'map',
  'mermaid',
  'monapassport',
  'monkey',
  'mosquito',
  'octopus',
  'owl',
  'paintbrush',
  'palm_tree',
  'parrot',
  'passport',
  'peas',
  'penguin',
  'pig',
  'pigsheep',
  'pineapple',
  'pool',
  'postcard',
  'power_outlet',
  'rabbit',
  'rabbitturtle',
  'radio',
  'radioface',
  'rain',
  'rhinoceros',
  'rifle',
  'roller_coaster',
  'sandwich',
  'scorpion',
  'sea_turtle',
  'sheep',
  'skull',
  'snail',
  'snowflake',
  'speedboat',
  'spider',
  'squirrel',
  'steak',
  'stove',
  'strawberry',
  'swan',
  'swing_set',
  'the_mona_lisa',
  'tiger',
  'toothbrush',
  'toothpaste',
  'tractor',
  'trombone',
  'truck',
  'whale',
  'windmill',
  'yoga',
  'yogabicycle',
  'everything',
];

let inp;
let tipo;

function preload() {
  let ind = floor(random(tipiImmagine.length));
  tipo = tipiImmagine[ind];
  model = ml5.sketchRNN(tipo, SonoPronto);
}

function SonoPronto() {
console.log("sono pronto");
}


function setup() {
  canvas = createCanvas(640, 480);

  background(220);

  let button = createButton('riprova');
  button.position(100, 500);
  button.mousePressed(startDrawing);

  startDrawing();

  objectDetector = ml5.objectDetector('cocossd', modelReady);
}

function startDrawing() {
  loop();
  background(220);
  x = width / 2;
  y = height / 2;

  model.reset();

  model.generate(gotStroke);
}

function analizza_disegno() {
    noLoop();
    modalita = 1;
    analizza();

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
   }
}


function draw() {

  if (strokePath) {

    if (strokePath.pen !== 'end') {
      strokePath = null;
      model.generate(gotStroke);
    } else{
      analizza_disegno();
    }
  }

  if (status != undefined) {

    for (let i = 0; i < objects.length; i++) {
      createP(objects[i].label + " " + nfc(objects[i].confidence * 100.0, 2) + "%");
    }
  }
}

// A new stroke path
function gotStroke(err, s) {
  strokePath = s;

  if (previous_pen == 'down') {
    stroke(0);
    strokeWeight(13);
    line(x, y, x + strokePath.dx, y + strokePath.dy);
  }
  // Move the pen
  x += strokePath.dx;
  y += strokePath.dy;
  // The pen state actually refers to the next stroke
  previous_pen = strokePath.pen;

  //console.log(s);
}
