// -
// esercizio 10PRINT con GUI by mgabriella [10print, gui]
// 2020 © Maria Gabriella @mgabriella, Daniele @Fupete and the course DSII2020 at //DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/mgabriella
// Educational purposes, MIT License, 2020, San Marino
// —
let parametri = {

  coloreSfondo: [255, 255, 0], // Slider: inserire valore all'avvio dello sketch 

  coloreEllisse: [0, 0, 255],
  
  coloreStroke: [255, 0, 0],
  
  diametroEllisse: 25,

}


// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {


  var gui = new dat.GUI();

  var f1 = gui.addFolder('Sfondo'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreSfondo'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Ellise'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreEllisse'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Stroke'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreStroke'); // Color Picker: non inserire nulla funzione al variare del parametro
  
  var evento1 = gui.add(parametri, 'diametroEllisse', 0, 50); // EVENTO: Viene chiamata una funzione al variare del parametro

  //evento1.onChange(function() { // La funzione viene chiamata MENTRE si cambia il valore
  //coloreEllisse = random(255);
  //});


}

let spacing = 30;
let x = spacing;
let y = spacing;
let radius = 25;


function setup() {
  createCanvas(640, 640);
  
  background(parametri.coloreSfondo);
}

function draw() {
  
  
  let w = random(1, 15); //stroke tra 1 e 8


  if (random(1) < 0.7) {
    stroke(parametri.coloreStroke);
    strokeWeight(w);
    fill(parametri.coloreEllisse);
    ellipse(x, y, parametri.diametroEllisse, parametri.diametroEllisse);
  }

  x += spacing;

  if (x >= width) {
    x = spacing;
    y += spacing;

  }
   if (y > height) { //lo faccio ripartire!
    background(parametri.coloreSfondo); //cancello i disegni di prima

    x = 0; //coordinate punto di partenza x
    y = 0; //coordiante punto di partenza y
  }
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }
}