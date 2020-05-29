// -
// Prima prova di P5 speech by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @IDMNYU for https://github.com/IDMNYU/p5.js-speech
// original license: MIT License
//
// @shiffman(https://github.com/shiffman) for https://github.com/shiffman/p5.js-speech
// original license: MIT License
//
// riconoscimento del linguaggio inglese

// source code: Shiffman tutorial, https://www.youtube.com/watch?v=q_bXBcmfTJM
// e https://idmnyu.github.io/p5.js-speech/

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  let lingua = navigator.language || 'en-US'; //var lingua che imposta il linguaggio
  let riconosciParola = new p5.SpeechRec(lingua, gotSpeech);

 let continous = true; //ascolta di continuo
 let interim = false; //true va a capo e scrive tutto. false scrive solo quando fai una pausa

  riconosciParola.start(continous,interim);

  function gotSpeech() { //callback function
    if (riconosciParola.resultValue) { //se il risultato ha valore
     createP(riconosciParola.resultString); //scrivi la stringa del risultato
    }
    // console.log(riconosciParola);
  }

}

function draw() {
  background(220);
}
