// -
// Making Visible - Deja-Vu - TextSimilarity by Federico Topa 
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Dandelion Text Similarity API for https://dandelion.eu/
// —




//VEDI REFERENCE DANDELION-API PER AGGIUNGERE SYNTACTIC ALGORITHM &bow=always

let miodatatxt;
let risultato;
let myFont;

function preload() {

  myFont = loadFont('BungeeShade-Regular.ttf');

  loadJSON('https://api.dandelion.eu/datatxt/sim/v1/?text1= Il cacciatore cammina nel bosco e vede un lupo &text2= Il cacciatore cammina nel bosco e vede un lupo&token=5db5cba74eb741bba4068e13c54c917b&bow=always', gotData, 'jsonp');

}

function setup() {
  background(0);

  createCanvas(800, 400);

}

function gotData(datatxt) {

  miodatatxt = datatxt.similarity;
  risultato = datatxt.similarity * 100 + "%";

  console.log(datatxt);

  return (miodatatxt);
  return (risultato);


}

function draw() {

  background(0);

  if (miodatatxt == 1) {


    textFont(myFont);
    text("HAI VINTO!", width / 2, height / 2);
    text(risultato, width / 2, 280);
    textAlign(CENTER);
    textSize(60);
    fill(255, 255, 0);

  } else {


    textFont(myFont);
    text("RITENTA", width / 2, height / 2);
    text(risultato, width / 2, 280);
    textAlign(CENTER);
    textSize(60);
    fill(148, 0, 211);

  }
}