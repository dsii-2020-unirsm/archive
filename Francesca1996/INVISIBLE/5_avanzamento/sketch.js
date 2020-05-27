// 3 

// MY_TeachableMachine+SNAP+sketchRNN 3 by francy96 @Francesca1996
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// My model create by Teachable Machine 
// --> https://teachablemachine.withgoogle.com/train/image
// Thanks to The Coding Train / Daniel Shiffman 
// --> https://www.youtube.com/watch?v=kwcillcWOg0&feature=emb_rel_end

//+ P5.image
// reference get() --> https://p5js.org/reference/#/p5.Image/get

// Quando clicco il bottone 'SNAP' fa 1 screenshot
// (il limite dell'array è 1 screenshot alla volta)
// nell'array è dichiarato che oggetto è per Teachable Machine

// SketchRNN COLLEGATO

// Visualizzo lo sketch

// prissimo step --> 
// 1. tagliare l’immagine trovata da object detection
// 2. salvare le sue coordinate da qualche parte
// 3. poi la passo al classificatore solo quella sottoimmagine con l’oggetto
// 4. ti fai dire cos’è dal classificatore
// 5. lo passi a sketchrnn per disegnarlo in quella posizione


//----------------------CODE----------------------------------

//--------------VARIABILI VIDEO
// The video
let video;

// For displaying the label
let label = "waiting...";

// The classifier
let classifier;

//MY_MODEL - TEACHABLE_MACHINE
let modelURL = 'https://teachablemachine.withgoogle.com/models/Iys0kOJI1/'; 

let img;
let button;

let snapshots = [];

//--------------VARIABILI SKETCHRNN
// The SketchRNN model
let model;
// Start by drawing
let previous_pen = 'down';
// Current location of drawing
let x, y;
// The current "stroke" of the drawing
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

let inp ;
let tipo;

let miaParola; //la miaParola <------- snapshots[0].name 


//----------------------PRELOAD-------------------------------
function preload() {
  //PRELOAD VIDEO
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  
  //PRELOAD SKETCH
  console.log('ISTRUZIONI');
  console.log('1. Clicca SNAP per ottenere 1 screenshot,');
  console.log('2. poi clicca il pulsante DRAW per disegnarlo.');
  }


//--------------SONO PRONTO SKETCHRNN
function SonoPronto(){
  console.log("sono pronto");
}

//----------------------SETUP--------------------------------
function setup() {
  createCanvas(640, 520); //--> snapshots
//background(51);

  video = createCapture(VIDEO); //show webcam image
  video.size(640,520);
  //video.hide();
  //bottone per screenshot
  button = createButton('SNAP');
  button.mousePressed(takesnap);
  // STEP 2: Start classifying
  classifyVideo(); 
  
  //SETUP SKETCH
  //input
  //bottone per screenshot
 
  button = createButton('DRAW');
  button.mousePressed(oraPuoi);
}

//----------------------CLASSYVIDEO
// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

//----------------------TAKESNAP
function takesnap() {   //-----------> salva solo 1 img
  //image(video, 0, 0);
  if (snapshots == "" ){
    let snp = video.get();
    snapshots.push(snp);
    image(snp, 0, 0);
    snapshots[0].name = label;
    //label = miaParola;
  } else {
      snapshots = [];
  }
  console.log(snapshots);
  console.log('ciò che mostro =' + ' ' + snapshots[0].name);
  
}


//--------------ORA PUOI --> click sul bottone DRAW
function oraPuoi() { 
  SonoPronto();
  
  video.hide(); //-------------> nasconde video
  background(51);
  tipo = snapshots[0].name;
  console.log(tipo);
  model = ml5.sketchRNN(tipo, SonoPronto); 
  if (corrispondenza = true) {
     startDrawing();
     console.log('Ho disegnato ' + ' ' + tipo);  // --> entra
   }
}

//--------------MODEL READY
function modelReady() {
  console.log('model loaded'); //guaradre se + questo da cambiare
  startDrawing();
}


//--------------START DRAWING
// Reset the drawing
function startDrawing() {
 conta=0;
  background(220);
  // Start in the middle
  x = width / 2;
  y = height / 2;
  
  model.reset();
  // Generate the first stroke path
  model.generate(gotStroke);
}

//----------------------DRAW-------------------------------
function draw() {
  //background(0);
  //image(video, 0, 0); // Draw the video
  
  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height - 20);
  //SHOW MY LITTLE SCREEN ON CANVAS
  let w = 80;
  let h = 60;
  let x = 0;
  let y = 0;
  for (let i = 0; i < snapshots.length; i ++){
    image(snapshots[i],x, y, w, h);
    x = x + w;
    if (x > width) {
      x = 0;
      y = y + h;
    } 
  }
  
  //DRAW SKETCH
   // If something new to draw
  if (strokePath) {
    // If the pen is down, draw a line
    
    // If the drawing is complete
    if (strokePath.pen !== 'end') {
      strokePath = null;
      model.generate(gotStroke);
    }
  }
}


//--------------CORRISPONDENZA
function corrispondenza(miaParola){
  for(let i=0; i < tipiImmagine.length; i++){
    if (tipiImmagine[i] == miaParola){
      return true;
    }
  } return false;
}


//----------------------GOTRESULTS
// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}


//--------------GOT STROKE
// A new stroke path
function gotStroke(err, s) {
  strokePath = s;
  
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
  
   //console.log(s); //questo mi mostra i punti del tracciato
}

