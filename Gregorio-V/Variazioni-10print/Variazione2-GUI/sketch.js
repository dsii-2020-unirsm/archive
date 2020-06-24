// -
// 10Print variazione by Gregorio Vaccari [Gui, 10Print]
// 2020 © Gregorio @Gregorio-V, Daniele @Fupete and the course DSII2020 @UniRSM 
// github.com/fupete — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino
// —

// —
// Credits/Thanks to: 
// © Luigi @MrJ4ckpot 
// original license: MIT License
// —
// Help:
// [key] Premi "c" e salvi jpg
// —

//Help:
// Do not change backgound color to play properly.
// Wait your turn and Click to bet.

//------------------ GUI ---------------------//
// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreSfondo: [0, 0, 0], // Slider: inserire valore all'avvio dello sketch 
  coloreBet: [255, 0, 0],
  r1: 0,
  r2: 50,
  g1: 0,
  g2: 30,
  b1: 0,
  b2: 255,

  dimSqare: 14,
  dimStroke: 4,

}


// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {


  var gui = new dat.GUI();

  var f1 = gui.addFolder('Sfondo'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreSfondo'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Bet'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreBet'); // Color Picker: non inserire nulla

  //var evento1 = gui.add(parametri, 'diametroEllisse', 50, 500); // EVENTO: Viene chiamata una funzione al variare del parametro
  var evento1 = gui.addFolder('colore quadrati');
  evento1.add(parametri, 'r1', 0, 255);
  evento1.add(parametri, 'r2', 0, 255);
  evento1.add(parametri, 'g1', 0, 255);
  evento1.add(parametri, 'g2', 0, 255);
  evento1.add(parametri, 'b1', 0, 255);
  evento1.add(parametri, 'b2', 0, 255);

  var evento2 = gui.addFolder('Dimensioni');
  evento2.add(parametri, 'dimStroke', 1, 6);
  evento2.add(parametri, 'dimSqare', 4, 20);
  //evento1.onChange(function() { // La funzione viene chiamata MENTRE si cambia il valore
  //coloreEllisse = random(255);
  //});

}
//------------------ FINE GUI -------------------//


let w = 20;
let h = 20;
let index = 0;
let layer = 0;
let click = 1;

let speed = 1

let bets = {
  x: [],
  y: []
};
let points = 0

function setup() {
  frameRate(30)
  createCanvas(640, 384);
  background(255);
  stroke(255);
  rectMode(CENTER);
}

function draw() {

  if (click == 0) {
    for (var i = 0; i < speed; i++) { //ciclo for per velocizzare

      sfondo()
    }
  } // fine ciclo for

}

function sfondo() {

  let x1 = w * index;
  let x2 = x1 + w;
  let y1 = h * (height / h - 1) + (h * layer);
  let y2 = h * (height / h) + (h * layer);
  strokeWeight(parametri.dimStroke);
  fill(random(parametri.r1, parametri.r2), random(parametri.g1, parametri.g2), random(parametri.b1, parametri.b2))
  let dado = random(2)
  if (dado < 1) {
    square(x2, y1, parametri.dimSqare);
  } else if (dado > 1) {
    square(x1, y2, parametri.dimSqare);
  }
  index++;

  if (index == width / w) { //reset riga
    layer = layer - 2;
    index = 0;
  }
  if (y2 < 0) {

    click = 1
    layer = 0
    select('#ready').html("Ready");
    bet()
  }

  //console.log(layer)
}

function mousePressed() {

  if (click > 0 && mouseX > 0 && mouseY > 0) {
    if (parametri.coloreSfondo[1] > 0) {
      background(parametri.coloreSfondo)
    }
    strokeWeight(0);
    fill(parametri.coloreBet);
    circle(mouseX, mouseY, 15)
    fill(255)
    stroke(random(parametri.r1, parametri.r2), random(parametri.g1, parametri.g2), random(parametri.b1, parametri.b2))
    strokeWeight(parametri.dimStroke);

    click = 0

    bets.x.push(mouseX)
    bets.y.push(mouseY)

    select('#ready').html("Wait");

  }
}

function bet() {
  let c
  for (var i = 0; i < bets.x.length; i++) {
    c = get(bets.x[i], bets.y[i]);
    //console.log(c)
    if (c[0] == 255 && c[1] == 0 && c[2] == 0) {
      points = points + 1 * (i + 1); //sistemare punteggio co ciclo
    }

  }
  select('#punti').html(points + " points");
  // console.log(points);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    speed--
  }
  if (keyCode === RIGHT_ARROW) {
    speed++
  }
}