// -
// DrawnStories 2.0 by peterbaru [racconti, disengi]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/examples/p5js/CharRNN/CharRNN_Text
// original license: MIT License
//
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/examples/p5js/ImageClassification/ImageClassification
// original license: MIT License
//
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/examples/p5js/ImageClassification/ImageClassification_DoodleNet_Canvas
// original license: MIT License
//
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/examples/p5js/SketchRNN
// original license: MIT License
//
// @IDMNYU (github.com/IDMNYU) for https://github.com/IDMNYU/p5.js-speech
// original license: MIT License
// —
// [mouse] premendo i diversi pulsanti si generano racconti partendo da un disegno o un'immagine
//
// —

let button1;
let button2;
let button5;
let centra = 45; //variabile per centrare i bottoni iniziali
let xbottoni = 800; //variabile x della posizione bottoni
let seleziona; //variabile per capire cosa si ha selezionato
let lunghezza_racconto
let temperatura_racconto

let immagini_genitori = [];
let immagini_totali;
let rnd1;
let rnd2;
let rnd3;
let rnd4;
var cnv2;
var canvasgenX = 640;
var canvasgenY = 426;

//variabili per CharRNN
let charRNN;
let textInput;
let runningInference = false;
let sel1;
let sel2;
let slider1;
let slider2;
let inp;
let canvasDisegno;

//variabili per SketchRNN
let classifier;
let canvas;
let label;
let confidence;

//variabili per Immagini classify
let classifier1;


function preload() {
  classifier = ml5.imageClassifier('DoodleNet');
  classifier1 = ml5.imageClassifier('MobileNet');

  let img0 = loadImage('images/img/img0.png');
  let img1 = loadImage('images/img/img1.png');
  let img2 = loadImage('images/img/img2.png');
  let img3 = loadImage('images/img/img3.png');
  let img4 = loadImage('images/img/img4.png');
  let img5 = loadImage('images/img/img5.png');
  let img6 = loadImage('images/img/img6.png');
  let img7 = loadImage('images/img/img7.png');

  immagini_totali = [img0, img1, img2, img3, img4, img5, img6, img7];

}

function setup() {
  createCanvas(900, 200);

  noStroke();
  fill(241, 161, 70);
  rect(0, 0, width / 3, height);

  fill(90, 160, 204);
  rect(width / 3, 0, width / 3, height);

  fill(60, 130, 68);
  rect(width / (3 / 2), 0, width / (3 / 2), height);

  button1 = createButton('Modalità disegna');
  button1.mousePressed(mod_disegna);
  button1.position((width / 6) - centra, height / 2);

  button2 = createButton('Modalità immagine');
  button2.mousePressed(mod_immagine);
  button2.position((width / 2) - centra, height / 2);

  button5 = createButton('Modalità genitori');
  button5.mousePressed(mod_genitori);
  button5.position((width * (5 / 6)) - centra, height / 2);

  button3 = createButton('Genera Racconto');
  button4 = createButton('Leggi Racconto');

  lunghezza_racconto = createDiv('Lunghezza racconto');
  lunghezza_racconto.position(xbottoni, 280);

  temperatura_racconto = createDiv('Temperatura');
  temperatura_racconto.position(xbottoni, 350);


  slider1 = createSlider(200, 3000, 800);
  slider2 = createSlider(0, 1, 0.5, 0.1);

  slider1.position(xbottoni, 310);
  slider2.position(xbottoni, 370);
  button3.position(xbottoni, 470);
  button4.position(xbottoni, 530);

  sel1 = createSelect();
  sel1.position(xbottoni, 450);
  sel1.option('Seleziona un autore..');
  sel1.option('Woolf');
  sel1.option('Baldwin');
  sel1.option('Darwin');
  sel1.option('Hemingway');
  sel1.option('Fratelli Grimm');
  sel1.option('Shakespear');
  sel1.changed(mySelectEvent);

  sel2 = createSelect();
  sel2.position(xbottoni, 510);
  sel2.option('Seleziona un lettore..');
  sel2.option('Moira');
  sel2.option('Diego');
  sel2.option('Jorge');
  sel2.option('Alice');
  sel2.option('Zosia');
  sel2.changed(mySelectEvent2);

  charRNN = ml5.charRNN('./models/baldwin/', modelReadyBaldwin);

  speech = new p5.Speech();

  console.log("Ecco il prototipo di Stories.jpg. Qui sono testate le diverse modalità di utilizzo del sistema. Per saperne di più visita la pagina github di riferimento con la spiegazine del progetto al seguente link: https://github.com/peterbaru/archive/tree/master/peterbaru/MakingVisible");
  console.log("Seleziona una modalità per generare una storia!");
}

function mySelectEvent() {
  let item = sel1.value();

  // Create the LSTM Generator passing it the model directory
  if (item === 'Woolf') {
    charRNN = ml5.charRNN('./models/woolf/', modelReadyWoolf);
    console.log('hai selezionato Woolf');
  } else if (item === 'Baldwin') {
    charRNN = ml5.charRNN('./models/baldwin/', modelReadyBaldwin);
    console.log('hai selezionato Baldwin');
  } else if (item === 'Darwin') {
    charRNN = ml5.charRNN('./models/darwin/', modelReadyDarwin);
    console.log('hai selezionato Darwin');
  } else if (item === 'Hemingway') {
    charRNN = ml5.charRNN('./models/hemingway/', modelReadyHemingway);
    console.log('hai selezionato Hemingway');
  } else if (item === 'Shakespear') {
    charRNN = ml5.charRNN('./models/shakespear/', modelReadyShakespear);
    console.log('hai selezionato Shakespear');
  } else if (item === 'Fratelli Grimm') {
    charRNN = ml5.charRNN('./models/GRIMM/', modelReadyGRIMM);
    console.log('hai selezionato Fratelli Grimm');
  }
}

function mySelectEvent2() {
  let item = sel2.value();

  // Create the LSTM Generator passing it the model directory
  if (item === 'Moira') {
    speech.setVoice('Moira');
    console.log('Legge Moira');
  } else if (item === 'Diego') {
    speech.setVoice('Diego');
    console.log('Legge Diego');
  } else if (item === 'Jorge') {
    speech.setVoice('Jorge');
    console.log('Legge Jorge');
  } else if (item === 'Alice') {
    speech.setVoice('Alice');
    console.log('Legge Alice');
  } else if (item === 'Zosia') {
    speech.setVoice('Zosia');
    console.log('Legge Zosia');
  }
}


function modelReadyWoolf() {
  console.log('Modello Woolf caricato');
}

function modelReadyBaldwin() {
  console.log('Modello Baldwin caricato');
}

function modelReadyDarwin() {
  console.log('Modello Darwin caricato');
}

function modelReadyHemingway() {
  console.log('Modello Hemingway caricato');
}

function modelReadyShakespear() {
  console.log('Modello Shakespear caricato');
}

function modelReadyGRIMM() {
  console.log('Modello fratelli Grimm caricato');
}

function objectPronto() {
  console.log("il modello è pronto")
}

function mod_disegna() {
  console.log("Hai selezionato la modalità disegna");
  seleziona = 2;
  canvas = createCanvas(280, 280);
  canvas.position(100, 150);
  background(220);
  canvas.mouseReleased(classifyCanvas);
}

function mod_immagine() {
  console.log("Hai selezionato la modalità immagine");
  seleziona = 3;
  var cnv1 = createCanvas(400, 280);
  cnv1.position(340, 150);
  background(220);

  sel3 = createSelect();
  sel3.position(xbottoni, 570);
  sel3.option('Seleziona un disegno..');
  sel3.option('Barca');
  sel3.option('Disegno Famiglia');
  sel3.option('Cane');
  sel3.changed(mySelectEvent3);
}

function mod_genitori() {
  console.log("Hai selezionato la modalità genitori");
  seleziona = 4;
  cnv2 = createCanvas(canvasgenX, canvasgenY);
  cnv2.position(100, 150);
  background(250);

  rnd1 = random(immagini_totali);
  rnd2 = random(immagini_totali);
  rnd3 = random(immagini_totali);
  rnd4 = random(immagini_totali);

  if (rnd1 != rnd2 && rnd1 != rnd3 && rnd1 != rnd4 && rnd2 != rnd3 && rnd2 != rnd4 && rnd3 != rnd4) {
    // console.log('primo valore: ' + rnd1 + ', secondo valore: ' + rnd2 + ', terzo valore: ' + rnd3 + ', quarto valore: ' + rnd4);

    immagini_genitori = [rnd1, rnd2, rnd3, rnd4];

    immagine_genitore();

  } else {
    mod_genitori();
  }
}

function mySelectEvent3() {
  let item = sel3.value();

  // Create the LSTM Generator passing it the model directory
  if (item === 'Barca') {
    img = loadImage('images/barca.png', immagine_caricata);
    console.log('hai selezionato la foto di una barca');
  } else if (item === 'Disegno Famiglia') {
    img = loadImage('images/family.png', immagine_caricata);
    console.log('hai selezionato il disegno di una famiglia');
  } else if (item === 'Cane') {
    img = loadImage('images/cane.png', immagine_caricata);
    console.log('hai selezionato la foto di una cane');
  }
}

function draw() {

  if (seleziona == 2) {
    strokeWeight(15);
    stroke(0);

    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
    }

  } else if (seleziona == 3) {

  } else if (seleziona == 4) {
    image(rnd1, 0, 0, canvasgenX / 2, canvasgenY / 2);
    image(rnd2, canvasgenX / 2, 0, canvasgenX / 2, canvasgenY / 2);
    image(rnd3, 0, canvasgenY / 2, canvasgenX / 2, canvasgenY / 2);
    image(rnd4, canvasgenX / 2, canvasgenY / 2, canvasgenX / 2, canvasgenY / 2);
  }
}

function immagine_caricata() {

  image(img, 0, 0, 400, 280);
  console.log('immagine caricata!')

  classifier1.classify(img, gotResult);
}

function immagine_genitore() {

  classifier1.classify(rnd1, gotResult);
}

function classifyCanvas() {
  classifier.classify(canvas, gotResult);
}

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }

  let risultati = results[0].label;
  //console.log(risultati);

  inp = createInput(risultati);
  inp.position(xbottoni, 200);
  inp.input(eventoInput);
  eventoInput();


}

function eventoInput() {
  textInput = inp.value();
  //  console.log(textInput);
  console.log("vedo un " + textInput + "! Clicca su 'Genera racconto' per sapere la sua storia.");
  button3.mousePressed(generate);
}

//creare nuovo testo
function generate() {
  // prevent starting inference if we've already started another instance
  if (!runningInference) {
    runningInference = true;

    // Update the status log
    console.log('Sto elaborando il racconto..');

    // Grab the original text
    const original = textInput;
    // Make it to lower case
    const txt = original;

    let lengthSlider = slider1.value();
    let tempSlider = slider2.value();


    // Check if there's something to send
    if (txt.length > 0) {
      // This is what the LSTM generator needs
      // Seed text, temperature, length to outputs
      // TODO: What are the defaults?
      const data = {
        seed: txt,
        temperature: tempSlider,
        length: lengthSlider
      };

      // Generate text with the charRNN
      charRNN.generate(data, gotData);


      // When it's done
      function gotData(err, result) {


        let frasi = result.sample.split('.');
        console.log(frasi);

        let num_punti = (frasi.length) - 1;

        //    let storia = frasi.slice(0, num_punti);

        let storia = "";
        for (i = 0; i < num_punti; i++) {
          storia += frasi[i] + ". "
        }

        console.log("Ora puoi leggere il tuo racconto! se lo vuoi ascoltare seleziona un lettore e clicca su 'Leggi racconto'");
        let testo_finito = 'Once upon a time a ' + txt + storia;

        //  console.log(testo_finito);
        var stampa = createP(testo_finito);
        stampa.position(40, 580);
        button4.mousePressed(leggi);

        function leggi() {
          speech.setRate(0.9);
          speech.setPitch(1);
          speech.speak(testo_finito);
        }
        runningInference = false;
      }
    }
  }
}
