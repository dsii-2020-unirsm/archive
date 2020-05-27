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
let centra = 45; //variabile per centrare i bottoni iniziali
let xbottoni = 800; //variabile x della posizione bottoni
let seleziona; //variabile per capire cosa si ha selezionato
let lunghezza_racconto
let temperatura_racconto

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
}

function setup() {
    createCanvas(600, 200);

    noStroke();
    fill(172, 20, 90);
    rect(0, 0, width / 2, height);

    fill(0, 40, 85);
    rect(width / 2, 0, width / 2, height);

    button1 = createButton('Modalità disegna');
    button1.mousePressed(mod_disegna);
    button1.position((width * (1 / 4)) - centra, height / 8);

    button2 = createButton('Modalità immagine');
    button2.mousePressed(mod_immagine);
    button2.position((width * (3 / 4)) - centra, height / 8);

    button3 = createButton('Genera Racconto');
    button4 = createButton('Leggi Racconto');

    lunghezza_racconto = createDiv('Lunghezza racconto');
    lunghezza_racconto.position(xbottoni, 80);

    temperatura_racconto = createDiv('Temperatura');
    temperatura_racconto.position(xbottoni, 140);


    slider1 = createSlider(200, 3000, 800);
    slider2 = createSlider(0, 1, 0.5, 0.1);

    slider1.position(xbottoni, 100);
    slider2.position(xbottoni, 160);
    button3.position(xbottoni, 260);
    button4.position(xbottoni, 320);

    sel1 = createSelect();
    sel1.position(xbottoni, 240);
    sel1.option('Seleziona un autore..');
    sel1.option('Woolf');
    sel1.option('Baldwin');
    sel1.option('Darwin');
    sel1.option('Hemingway');
    sel1.option('Fratelli Grimm');
    sel1.option('Shakespear');
    sel1.changed(mySelectEvent);

    sel2 = createSelect();
    sel2.position(xbottoni, 300);
    sel2.option('Seleziona un lettore..');
    sel2.option('Moira');
    sel2.option('Diego');
    sel2.option('Jorge');
    sel2.option('Alice');
    sel2.option('Zosia');
    sel2.changed(mySelectEvent2);

    charRNN = ml5.charRNN('./models/baldwin/', modelReadyBaldwin);

    speech = new p5.Speech();
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
    canvas = createCanvas(280, 280);
    canvas.position(100, 100);
    background(220);
    canvas.mouseReleased(classifyCanvas);
    seleziona = 2;
}

function mod_immagine() {

    seleziona = 3;

    var cnv1 = createCanvas(400, 400);
    cnv1.position(340, 100);
    background(220);

    sel3 = createSelect();
    sel3.position(xbottoni, 360);
    sel3.option('Seleziona un disegno..');
    sel3.option('Barca');
    sel3.option('Disegno Famiglia');
    sel3.option('Cane');
    sel3.changed(mySelectEvent3);
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

function immagine_caricata () {

image(img, 0, 0);
console.log('immagine caricata!')

classifier1.classify(img, gotResult);
}

function draw() {

    if (seleziona == 2) {
        strokeWeight(15);
        stroke(0);

        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    } else if (seleziona == 3) {

    }
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
    console.log(risultati);

    inp = createInput(risultati);
    inp.position(xbottoni, 200);
    inp.input(eventoInput);
    eventoInput();
}

function eventoInput() {
    textInput = inp.value();
    console.log(textInput);
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


                            let frasi =  result.sample.split('.');
                            console.log(frasi);

                            let num_punti = (result.sample.split('.').length)-1;

                            let finale = frasi.slice(0, num_punti);

                         // for (i=0; i<=num_punti; i++){
                         //
                         // let finale1 = frasi[i] + ". "
                         //
                         // }

                console.log('Ora puoi leggere il tuo racconto!');
                let testo_finito = 'Once upon a time a ' + txt + finale + ".";
              //  console.log(result.sample);

              //  console.log(testo_finito);
                var stampa = createP(testo_finito);
                stampa.position(40, 380);
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
