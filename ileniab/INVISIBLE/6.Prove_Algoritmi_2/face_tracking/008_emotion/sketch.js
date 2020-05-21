// -
// Prima prova facetracking EmotionRecogniction + P5 speech by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

let d= 1.5;
// let dimensioneTesto=1;
 // P5 SPEECH-------
 let riconosciParola;
 let parola;
// let x=positions[60][0];
// let y=positions[60][0]-20;
// let larg=105;
// let alt=75;


function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,380);
    textAlign(CENTER);
}
//     //-------------P5 SPEECH-------------------------------
//
 let lingua = 'IT'; //var lingua che imposta il linguaggio
 riconosciParola = new p5.SpeechRec(lingua, gotSpeech);
 let continous = true; //ascolta di continuo
 let interim = true; //true va a capo e scrive tutto. false scrive solo quando fai una pausa
 riconosciParola.start(continous, interim);
//
// //imposto lo stile del testo
//
 textFont('Roboto');
 rectMode(CENTER);

//--------END-----P5 SPEECH--------------------------------


function draw() {
    getPositions();
    getEmotions();

    clear();

    textSize(30);
    noStroke();
    fill(0,10);
    rect(0,0,width,height);

    drawPoints();
    drawParola();

    if (emotions) {

        for (var i = 0;i < predictedEmotions.length;i++) {
            fill(35);

            rect(i * 110+20, height-30, 20, -predictedEmotions[i].value * 40);

            textSize(7);
            text("ANGRY", 30, height-20);
            text("SAD", 135, height-20);
            text("SURPRISED", 255, height-20);
            text("HAPPY", 360, height-20);

            textSize(30);
            fill(255);
            //console.log(predictedEmotions);

            if(predictedEmotions[0].value >= 0.4){
                fill(217, 32, 39);
                rect(positions[60][0],positions[60][0]-20, 105*d, 75*d);
                fill(0);
                text("ANGRY",  positions[60][0],positions[60][0]-20, 105*d, ((75*d)/2));
                //console.log("angry");
            }
            else if(predictedEmotions[1].value >= 0.4){
                fill(57, 32, 217);
                rect(positions[60][0],positions[60][0]-20, 105*d, 75*d);
                fill(0);
                text("SAD",  positions[60][0],positions[60][0]-20, 105*d, ((75*d)/2));
                //console.log("sad");
            }
            else if(predictedEmotions[2].value >= 0.4){
                fill(32, 217, 192);
                ellipse(positions[60][0],positions[60][0]-20, 105*d, 75*d);
                fill(0);
                text("SURPRISED", positions[60][0],positions[60][0]-20, 105*d, ((75*d)/2));
                //console.log("surprised");
            }
            else if(predictedEmotions[3].value >= 0.7){
                fill(217, 214, 32);
                ellipse(positions[60][0],positions[60][0]-20, 105*d, 75*d);
                fill(0);
                text("HAPPY", positions[60][0],positions[60][0]-20, 105*d, ((75*d)/2));
                //console.log("happy");
            }
        }
    }
}

 function gotSpeech() { //callback function
   if (riconosciParola.resultValue) { //se il risultato ha valore
     console.log(riconosciParola.resultString);
   }
 }
//
 function drawParola() {
   fill(0);
   noStroke();
   textSize(15);
   textAlign(CENTER, CENTER);
   text(riconosciParola.resultString, positions[60][0],positions[60][0]-20, 105*d, ((75*d)/2)));
//
 }

function drawPoints() {
    fill(255);
rectMode(CENTER);
    for (var i=0; i<positions.length -3; i++) {
        ellipse(positions[i][0], positions[i][1], 2, 2);
        rect(positions[60][0],positions[60][0]-20, 105, 75);

    }
}
