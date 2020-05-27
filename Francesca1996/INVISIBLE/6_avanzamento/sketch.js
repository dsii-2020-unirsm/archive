// 5

// MY_SNAP+sketchRNN 5 by francy96 @Francesca1996
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// NON C'É + TEACHEBLE 
//  X My model create by Teachable Machine 
//  X --> https://teachablemachine.withgoogle.com/train/image
//  X Thanks to The Coding Train / Daniel Shiffman 
//  X --> https://www.youtube.com/watch?v=kwcillcWOg0&feature=emb_rel_end

//+ P5.image
// reference get() --> https://p5js.org/reference/#/p5.Image/get

// SketchRNN COLLEGATO

// Visualizzo lo sketch

// ObjectDetection - cocossd COLLEGATO
// --> https://ml5js.org/reference/api-ObjectDetector/

// prissimo step --> 
// 1. tagliare l’immagine trovata da object detection
// --> https://ml5js.org/reference/api-ObjectDetector/
// 2. salvare le sue coordinate da qualche parte
// 3. poi la passo al classificatore solo quella sottoimmagine con l’oggetto
// 4. ti fai dire cos’è dal classificatore
// 5. lo passi a sketchrnn per disegnarlo in quella posizione


// -
// Help:
// ['SNAP' button] scenes screenshot
// ['DRAW' button] the model draws the objects
// -


//----------------------CODE----------------------------------

//--------------VARIABILI VIDEO
// The video
let video;

// For displaying the label
let label = "waiting...";
let oggettiTrovati = [];

// The ObjectDetector
let objDetect;

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

let coordinataX, coordinataY;
let label_transform;

let area;

//----------------------PRELOAD-------------------------------
// 1
function preload() {
  //PRELOAD VIDEO
  objDetect = ml5.objectDetector('cocossd',modelLoaded);
  
  //PRELOAD SKETCH
  console.log('ISTRUZIONI');
  console.log('1. Clicca SNAP per ottenere 1 screenshot,');
  console.log('2. poi clicca il pulsante DRAW per disegnarlo.');
}

//--------------MODEL LOADED
// 2
function modelLoaded(){
  console.log("Modello Caricato!");
  background(220); //toglie la scritta d'attesa
  text('Modello Pronto!', 270 , height/2);
}


//----------------------SETUP--------------------------------
function setup() {
  createCanvas(640, 520); //--> snapshots
  background(220);
  text('Attendi qualche secondo...', 250 , height/2);
  
  video = createCapture(VIDEO); //show webcam image
  video.size(640,520); // crea finestra video
  
  //bottone per screenshot
  // 3
  button = createButton('SNAP');
  button.mousePressed(takesnap);
  
  
  //SETUP SKETCH
  // 7
  button = createButton('DRAW');
  button.mousePressed(oraPuoi);
}

//----------------------CLASSYVIDEO
// 4
function detectVideo() {
  return objDetect.detect(video, gotResultsOBJ);
}

//----------------------TAKESNAP
// 3
// async permette di attendere finchè non ho la risposta dal server
// thanks Shiffman --> https://www.youtube.com/watch?v=XO77Fib9tSI
async function takesnap() {   //-----------> salva solo 1 img
  // 4
  await detectVideo();
  
  if (snapshots == "" ){
    // snp = snapshots
    let snp = video.get();
    snapshots.push(snp);
    
    image(snp, 0, 0);
    snapshots[0].name = oggettiTrovati[0].label_transform;
    
    // Draw the label
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(snapshots[0].name, width/2, height - 20); // cambiare label
    // Draw green rect = object area
    stroke(0, 255, 0);
    noFill();
    strokeWeight(3);
    rect(oggettiTrovati[0].coordinataX, oggettiTrovati[0].coordinataY, oggettiTrovati[0].width, oggettiTrovati[0].height);
  } else {
      snapshots = [];
  }
  
  console.log("Snapshots:",snapshots);
  console.log('Oggetto mostrato =' + ' ' + snapshots[0].name);
}

//----------------------gotResultsOBJ
// 5
//classification
function gotResultsOBJ(error, results) {
  if (error) { 
    console.error(error); 
    return;
  }
  
  // se gli oggetti che mostro corrispondono alla mia lista 
  // allora riempie OggettiT
  oggettiTrovati = [];
  
  console.log("Result COCO:",results);
  label = results[0].label;
  
  //.forEach --> analizza tutti gli elementi
  results.forEach(element => {

    // tmp = temporaneo
    // json
    tmp = {                    
      label_true : element.label,
      label_transform : trasformazione(element.label), // 6
      coordinataX : element.x,
      coordinataY : element.y,
      width : element.width,
      height : element.height 
    }
    
    console.log("Elemento trovato:", tmp);
    if (tmp.label_transform != 'undefined') oggettiTrovati.push(tmp);
  });
  console.log("Oggetti trovati:", oggettiTrovati);
}

//----------------------TRASFORMAZIONE
// 6
// sostituisce TeachableM
// trasforma questi oggetti
function trasformazione(label_iniziale){
  switch(label_iniziale) {
  case 'cup':
    return 'pineapple'
    break;
  case 'bottle':
    return 'palm_tree'
    break;
  case 'keyboard':
    return 'sea_turtle'
    break;
  case 'remote':
    return 'pool'
    break;
  default:
    return 'undefined'
  }
}


//--------------ORA PUOI 
// 7
// --> click sul bottone DRAW
let draw_count = 0; //numero degli oggetti 

function oraPuoi(i) { 
  video.hide(); //-------------> nasconde video
  
  if(i !== undefined) draw_count = i;
  else draw_count = 0;
  
  //disegna gli oggetti uno alla volta
  if (draw_count < oggettiTrovati.length){
    tipo = oggettiTrovati[draw_count].label_transform;
    model = ml5.sketchRNN(tipo, console.log("Modello " + tipo + " pronto per disegno numero:" + draw_count)); 
    if (corrispondenza = true) {
       // 9
       startDrawing(); //inizia a disegnare
       // 10
       console.log('Disegno ' + ' ' + tipo);  // --> entra
     }
  }
}

//--------------MODEL READY
function modelReady() {
  console.log('model loaded'); 
  startDrawing();
}


//--------------START DRAWING
// 10
// Drawing
function startDrawing() {
  conta=0;
  if (draw_count == 0) background(220);
  
  // punto di generazione del disegno
  x = oggettiTrovati[draw_count].coordinataX; 
  y = oggettiTrovati[draw_count].coordinataY;  

  model.reset();
  // Generate the first stroke path
  model.generate(gotStroke); // 11
}

//----------------------DRAW-------------------------------
async function draw() {
  
  // SHOW MY LITTLE SCREEN ON CANVAS
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
      await model.generate(gotStroke);
      
      if (strokePath.pen == 'end') { // quando ha finito il 1sketch 
        oraPuoi(draw_count + 1);     // draw_count aumenta
      }
    }
  }
}


//--------------CORRISPONDENZA
// 9
// se la parola è all'interno del array di SketchRNN
// allora ritorna true
// e potrà disegnare
function corrispondenza(miaParola){
  for(let i=0; i < tipiImmagine.length; i++){
    if (tipiImmagine[i] == miaParola){
      return true;
    }
  } return false;
}


//--------------GOT STROKE
// 11
// A new stroke path
function gotStroke(err, s) {
  strokePath = s;
  
    if (previous_pen == 'down') {
      stroke(0);
      strokeWeight(3.0);
      line(x , y, x + strokePath.dx, y + strokePath.dy); //entrano 4 parametri (2D)
    }
  
    // Move the pen
    x += strokePath.dx;
    y += strokePath.dy;
   
    // The pen state actually refers to the next stroke
    previous_pen = strokePath.pen;
    //console.log(s); //questo mi mostra i punti del tracciato
}
