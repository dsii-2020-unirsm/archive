

// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreSfondo: 150, // Slider: inserire valore all'avvio dello sketch 
//  diametroEllisse: 150,

  mostraQuadrato: false, // Spunta: inserire stato iniziale
  xQuadrato: 50,
  coloreQuadrato: [0, 128, 255], // Color Picker: Inserire array RGB

  testo: "cambiami", // Inserimento testo: inserire valore iniziale
  xTesto: 50,
  yTesto: 50, // Inserimento testo: non aggiungere nulla
  dimensioniTesto: 32,


};

// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {

  var gui = new dat.GUI();
  gui.add(parametri, 'coloreSfondo', 0, 255); // Slider: inserire valore inferiore e maggiore


  var f1 = gui.addFolder('Quadrato'); // Crea una tendina che nasconde i prossimi parametri
  f1.add(parametri, 'mostraQuadrato'); // Spunta: non inserire nulla
  f1.add(parametri, 'xQuadrato', 0, 350);
  f1.addColor(parametri, 'coloreQuadrato'); // Color Picker: non inserire nulla

  var f2 = gui.addFolder('Testo');
  f2.add(parametri, 'testo', ['Sorbetto', 'Acqua', 'Tramonto', 'Occhiali da sole']); // Tendina: inserire array di valori
  f2.add(parametri, 'xTesto', 50, 400);
  f2.add(parametri, 'yTesto', 50, 400);
  f2.add(parametri, 'dimensioniTesto', 16, 80);

//  gui.add(parametri, 'weird'); // Pulsante chiama funzione: non aggiungere nulla
}


//let coloreEllisse; // ellisse // quadrato
let yQuadrato = 100;
let xTesto = 50;
let yTesto = 50;

let weirdStroke = 1;
let weirdColor = [0, 0, 0];

let evento1;

var words = ["sole", "mare", "spiaggia", "sdraio", "gelato", "ombrellone", "sabbia"];

function setup() {
  createCanvas(300, 300);
  frameRate (5);
}


function draw() {
 //   background(0);
 //   fill (255);

  
  text(random(words), 150, 150);
  textAlign(CENTER, CENTER);
  background(parametri.coloreSfondo);

  strokeWeight(weirdStroke);
  stroke(weirdColor);


  strokeWeight(1);
  stroke(20);

  fill(parametri.coloreQuadrato);
  if (parametri.mostraQuadrato) {
    rect(parametri.xQuadrato, yQuadrato, 50, 50);
  }

  noStroke();

  push();
  textSize(parametri.dimensioniTesto);
  translate(parametri.xTesto, 50);
  translate(50, parametri.yTesto);
  text(parametri.testo, 0, 0);
  pop();
}










 
