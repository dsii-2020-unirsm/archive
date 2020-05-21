// -
// Prima prova in ITALIANO P5 speech by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —

// La libreria P5.speech.js permette di riconoscere un discorso in lingua italiana.
// In questo caso, stamperò la stringa di testo all'interno della canvas.
// Inserendo una variabile interim=false elabora le frasi ad ogni pausa, diversamente
// scrive parola per parola, e difficilmente si riesce a comprendere il filo del discorso.
// Ho fatto in modo che la stringa di testo elaborata da P5speech venga scritta 
// solamente all'interno della canvas, senza uscire dal riquadro, andando a capo
// ogni volta che la frase riempie la larghezza dello spazio. Il testo è allineato 
// al centro.


let riconosciParola;


function setup() {
  createCanvas(500, 500);
  
  let lingua = 'IT'; //var lingua che imposta il linguaggio
  riconosciParola = new p5.SpeechRec(lingua, gotSpeech);

  let continous = true; //ascolta di continuo
  let interim = false; //true va a capo e scrive tutto. false scrive solo quando fai una pausa

  riconosciParola.start(continous, interim);

  //imposto lo stile del testo

  textFont('Roboto');
  textSize(30);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);


}

function draw() {
  background(227, 195, 104);

  //  La stringa di testo verrà scritta a partire dal centro della canvas
  //  width/2,height/2 
  //  e si inserirà all'interno di un rettangolo largo width e alto height

  text(riconosciParola.resultString, width / 2, height / 2, width, height);


}

function gotSpeech() { //callback function

  if (riconosciParola.resultValue) { //se il risultato ha valore

    console.log(riconosciParola.resultString);

    //quante parole contiene     
    console.log(riconosciParola.resultString.split(' ').length);

  }

}