//// simple UI interface example GUI
// 2019 © Benedetta Borghi, Daniele @Fupete e il corso DSII2019 presso DESIGN.unirsm 
// github.com/dsii-2020-unirsm - github.com/fupete
// Educational purpose, MIT License, 2020, San Marino 

// Credits/Thanks to: 
// https://editor.p5js.org/fupete/sketches/Mw0ugXFno for original code



// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreSfondo: 150, // Slider: inserire valore all'avvio dello sketch 
  diametroEllisse: 150,

  mostraQuadrato: false, // Spunta: inserire stato iniziale
  xQuadrato: 50,
  coloreLinea: [0, 128, 255], // Color Picker: Inserire array RGB

  testo: "Labirinto", // Inserimento testo: inserire valore iniziale
  yTesto: 50, // Inserimento testo: non aggiungere nulla
  dimensioniTesto: 32,

  weird: function() { // Pulsante chiama funzione: scrivere la funzione che si intende richiamare
    weirdStroke = 3 + random(8);
    //weirdColor = [random(255), random(255), random(255)];
  }

};




// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {

  var gui = new dat.GUI();
  gui.add(parametri, 'coloreSfondo', 0, 255); // Slider: inserire valore inferiore e maggiore

  var evento1 = gui.add(parametri, 'diametroEllisse', 50, 500); // EVENTO: Viene chiamata una funzione al variare del parametro

  evento1.onChange(function() { // La funzione viene chiamata MENTRE si cambia il valore
    coloreEllisse = random(255);
  });

  evento1.onFinishChange(function() { // La funzione viene chiamata DOPO aver cambiato il valore
    alert("BRAVO, hai vinto un MAPPAMONDO!");
  });

  var f1 = gui.addFolder('Linea'); // Crea una tendina che nasconde i prossimi parametri
  /*f1.add(parametri, 'mostraQuadrato'); // Spunta: non inserire nulla
  f1.add(parametri, 'xQuadrato', 0, 350);*/
  f1.addColor(parametri, 'coloreLinea'); // Color Picker: non inserire nulla

  var f2 = gui.addFolder('Testo');
  f2.add(parametri, 'testo', ['Laberinto', 'лабиринт', '迷宫', 'Labyrinth']); // Tendina: inserire array di valori
  f2.add(parametri, 'yTesto', 50, 400);
  f2.add(parametri, 'dimensioniTesto', 16, 80);

  gui.add(parametri, 'weird',1,5); // Pulsante chiama funzione: non aggiungere nulla
}


/*let coloreEllisse; // ellisse // quadrato
let yQuadrato = 100;
let yTesto = 50;

let weirdStroke = 1;
let weirdColor = [0, 0, 0];

let evento1;


function setup() {
  createCanvas(w = 400, w);

  coloreEllisse = random(256);
}*/


/*function draw() {
  background(parametri.coloreSfondo);

  strokeWeight(weirdStroke);
  stroke(weirdColor);

  fill(coloreEllisse);
  ellipse(w / 2, w / 2, parametri.diametroEllisse, parametri.diametroEllisse);

  strokeWeight(1);
  stroke(20);

  fill(parametri.coloreQuadrato);
  if (parametri.mostraQuadrato) {
    rect(parametri.xQuadrato, yQuadrato, 50, 50);
  }

  noStroke();

  push();
  textSize(parametri.dimensioniTesto);
  translate(50, parametri.yTesto);
  text(parametri.testo, 0, 0);
  pop();
}*/

let x = 0;
let y = 0;
let spacing = 20;
let weirdStroke = 1;


function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  strokeWeight(weirdStroke);
  stroke(parametri.coloreLinea);
  if (random(1) > 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
    
    push();
  textSize(parametri.dimensioniTesto);
  translate(50, parametri.yTesto);
  text(parametri.testo, 0, 0);
  pop();
  }
  
x = x + spacing;
if (x > width) {
  x = 0;
  y= y + spacing;
}
    if (y>height){
    background(0);
    x=0;
    y=0;
  }
}