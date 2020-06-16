// -
// MY_SNAP+sketchRNN 6 by FrancescaDonati [prototype, ideas-shape]
// 2020 © FrancescaDonati @Francesca1996, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete - github.com/Francesca1996
// Educational purposes, MIT License, 2020, San Marino
//
// Help:
// [show objects] show the objects to use the algorithm
// ['SNAP'] press the 'SNAP' button to screenshot your scene
// ['DRAW'] then press the 'DRAW' button to draw your screenshotted scene
//
// —

//----------------------CODE----------------------------------

// SketchRNN COLLEGATO
// Visualizzo lo sketch
// ObjectDetection - cocossd COLLEGATO
// --> https://ml5js.org/reference/api-ObjectDetector/

//--------------VARIABILI VIDEO
// The video
let video;

// For displaying the label
//let label = "waiting...";
let oggettiTrovati = [];

// The ObjectDetector
let objDetect;

let button;

let snp;

let snapshots_count = 0;

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

let tipo;

//----------------------PRELOAD-------------------------------
// 1
function preload() {
  //PRELOAD VIDEO
  objDetect = ml5.objectDetector('cocossd', modelLoaded);

  //PRELOAD SKETCH
  console.log('ISTRUZIONI');
  console.log('1. poni degli oggetti davanti alla camera');
  console.log('2. Clicca SNAP per ottenere 1 screenshot,');
  console.log('3. poi clicca il pulsante DRAW per disegnarlo.');
}

//--------------MODEL LOADED
// 2
function modelLoaded() {
  console.log("Modello Caricato!");
  background(220); //toglie la scritta d'attesa
  text('Modello Pronto!', 10, 20);
  text('Per realizzare la tua scena', 10, 35);
  text('1. Poni i tuoi oggetti davanti alla camera:', 10, 50);
  text('2. clicca SNAP per ottenere uno screenshot della scena', 10, 65);
  text('3. clicca DRAW per disegnarla', 10, 80);
}

//----------------------SETUP--------------------------------
function setup() {
  video = createCapture(VIDEO); //show webcam image
  video.size(640, 520); // crea finestra video

  //bottone per screenshot
  // 3
  button = createButton('1. SNAP');
  button.mousePressed(takesnap);
  //SETUP SKETCH
  // 7
  button = createButton('2. DRAW');
  button.mousePressed(oraPuoi);

  createCanvas(640, 520); //--> snapshots
  background(220);
  text('Attendi qualche secondo...', 10, 20);
}

//----------------------CLASSYVIDEO
// 4
function detectVideo() {
  return objDetect.detect(video, gotResultsOBJ);
}

function gotResultsOBJ(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  // se gli oggetti che mostro corrispondono alla mia lista
  // allora riempie OggettiT
  oggettiTrovati = [];

  //console.log("Result COCO:",results);

  //.forEach --> analizza tutti gli elementi
  results.forEach(element => {
    // tmp = temporaneo
    // json
    tmp = {
      label_true: element.label,
      label_transform: trasformazione(element.label), // 6
      coordinataX: element.x,
      coordinataY: element.y,
      width: element.width,
      height: element.height
    }
    console.log("Elemento trovato:", tmp);
    if (tmp.label_transform != 'undefined') oggettiTrovati.push(tmp);
  });
  console.log("Oggetti trovati corretti:", oggettiTrovati);
}

//----------------------TAKESNAP
// 3
// async permette di attendere finchè non ho la risposta dal server
// thanks Shiffman --> https://www.youtube.com/watch?v=XO77Fib9tSI
async function takesnap() { //-----------> salva solo 1 img
  // 4
  //se premo snap una seconda volta mi lancia il confirm
  console.log("--- SNAP ---")
  if (snapshots_count == 0 || confirm("Vuoi rifare lo snapshot?")) {
    await detectVideo();
    // snp = snapshots
    snp = video.get();
    snapshots_count++;

    image(snp, 0, 0);

    //text
    textSize(20);
    //textAlign(CENTER, CENTER);

    // Draw green rect = object area
    stroke(0, 255, 0);
    noFill();
    strokeWeight(2);

    //array.forEach
    //forEach cicla per ogni elemento dell'array il codice
    //oggetto è l'elemento dell'array
    oggettiTrovati.forEach(
      oggetto => {
        rect(oggetto.coordinataX, oggetto.coordinataY, oggetto.width, oggetto.height);
        text(oggetto.label_transform, oggetto.coordinataX + oggetto.width / 2, oggetto.coordinataY + oggetto.height + 20);
      })
  }
}

//----------------------TRASFORMAZIONE
// 5
// sostituisce TeachableM
// trasforma questi oggetti
function trasformazione(label_iniziale) {
  switch (label_iniziale) {
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
    case 'book':
      return 'dolphin'
      break;
    case 'cell phone':
      return 'parrot'
      break;
    case 'mouse':
      return 'flower'
      break;
    case 'wine glass':
      return 'lighthouse'
      break;  
    default:
      return 'undefined'
  }
}

//--------------ORA PUOI
// 6
// --> click sul bottone DRAW
let draw_count = 0; //numero degli oggetti

// per disegnare 1 elemento alla volta
// i = numero degli oggetti che trova
function oraPuoi(i) {
  //video.hide(); //-------------> nasconde video

  if (snp != undefined) {
    //se i è diverso da undefined allora è un elemento che può disegnare
    //quindi draw_count diventa 1
    if (i !== undefined) draw_count = i;
    else draw_count = 0;

    //disegna gli oggetti uno alla volta
    //se draw_count è < del tot. dei disegni 
    //ha elementi da disegnare
    if (draw_count < oggettiTrovati.length) {
      tipo = oggettiTrovati[draw_count].label_transform;
      if (corrispondenza(tipo) == true) {
        //per caricare il modello 
        //bisogna dirgli il disegno che deve fare
        model = ml5.sketchRNN(tipo, console.log("Modello " + tipo + " pronto per disegno numero:" + draw_count));
        // 9
        startDrawing(); //inizia a disegnare
        // 10
        console.log('Disegno ' + ' ' + tipo); // --> entra
      }
    }
  } else {
    alert("Devi prima fare lo SNAP")
  }
}

//--------------START DRAWING
// 8
// Drawing
function startDrawing() {
  conta = 0;
  if (draw_count == 0) {
    background(220)
  }
  image(snp, 0, 0, 80, 60);
  // punto di generazione del disegno
  x = oggettiTrovati[draw_count].coordinataX;
  y = oggettiTrovati[draw_count].coordinataY;

  model.reset();
  // Generate the first stroke path
  model.generate(gotStroke); // 11
}

//----------------------DRAW-------------------------------
async function draw() {
  //DRAW SKETCH
  // If something new to draw
  if (strokePath) {
    // If the pen is down, draw a line

    //se non ha finito il disegno
    //continua a disegnare
    if (strokePath.pen !== 'end') {
      strokePath = null;
      await model.generate(gotStroke);

      //se il disegno è finito
      //disegna il prossimo elemento
      //(passa dra_count + 1) --> quindi l'elemento dopo
      if (strokePath.pen == 'end') { // quando ha finito il 1sketch
        oraPuoi(draw_count + 1); // draw_count aumenta
      }
    }
  }
}


//--------------CORRISPONDENZA
// 9
// se la parola è all'interno del array di SketchRNN
// allora ritorna true
// e potrà disegnare
function corrispondenza(miaParola) {
  for (let i = 0; i < tipiImmagine.length; i++) {
    if (tipiImmagine[i] == miaParola) {
      return true;
    }
  }
  return false;
}


//--------------GOT STROKE
// 11
// A new stroke path
function gotStroke(err, s) {
  strokePath = s;

  if (previous_pen == 'down') {
    stroke(0);
    strokeWeight(3.0);
    line(x, y, x + strokePath.dx, y + strokePath.dy); //entrano 4 parametri (2D)
  }

  // Move the pen
  x += strokePath.dx;
  y += strokePath.dy;

  // The pen state actually refers to the next stroke
  previous_pen = strokePath.pen;
  //console.log(s); //questo mi mostra i punti del tracciato
}