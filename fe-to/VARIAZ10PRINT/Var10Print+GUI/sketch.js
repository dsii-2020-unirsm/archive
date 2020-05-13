// Pattern Var10Print + [GUI]. by Federico Topa 
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreSfondo: [255, 255, 0], // Slider: inserire valore all'avvio dello sketch 

  coloreEllisse1: [0, 0, 255],
  coloreEllisse2: [255, 161, 55],
  coloreTriang1: [250, 128, 255],
  coloreTriang2: [100, 128, 0],
  
  diametroEllisse: 25,

}


// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {


  var gui = new dat.GUI();

  var f1 = gui.addFolder('Sfondo'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreSfondo'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Ellise1'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreEllisse1'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Ellise2'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreEllisse2'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Triang1'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreTriang1'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Triang2'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreTriang2'); // Color Picker: non inserire nulla
  //var evento1 = gui.add(parametri, 'diametroEllisse', 50, 500); // EVENTO: Viene chiamata una funzione al variare del parametro
  
  var evento1 = gui.add(parametri, 'diametroEllisse', 0, 50); // EVENTO: Viene chiamata una funzione al variare del parametro

  //evento1.onChange(function() { // La funzione viene chiamata MENTRE si cambia il valore
  //coloreEllisse = random(255);
  //});


}


let x = 0; //coordinate punto di partenza x
let y = 0; //coordinate punto di partenza y


function setup() {

  //background(255);


  //coloreEllisse1 = color(random(255),random(255),random(255));
  //coloreEllisse2 = color(random(255),random(255),random(255));
  //coloreTriang1 = color(random(255),random(255),random(255));
  // coloreTriang2 = color(random(255),random(255),random(255));
  //coloreSfondo = color(random(255),random(255),random(255));

  createCanvas(700, 699);
  frameRate(18);
  background(parametri.coloreSfondo);
}

function draw() {



  if (random(1) > 0.5) { //0,5 significa il 50% tra l'if e l'else
    noStroke();
    fill(parametri.coloreTriang1);
    triangle(x, y, x + 35, y, x + 35, y + 35); //triangolo verde
    noStroke();
    fill(parametri.coloreEllisse1);
    ellipse(x + 16, y + 20, parametri.diametroEllisse, parametri.diametroEllisse); //ellisse rosso
    noStroke();
    fill(0);
    ellipse(x + 16, y + 20, 8, 8); //piccolo nero in rosso
  } else {
    noStroke();
    fill(parametri.coloreTriang2);
    triangle(x, y, x, y + 35, x + 35, y); //triangolo blu
    noStroke();
    fill(parametri.coloreEllisse2);
    ellipse(x + 16, y + 20, parametri.diametroEllisse, parametri.diametroEllisse); //ellisse rosa
    noStroke();
    fill(255);
    ellipse(x + 16, y + 20, 8, 8); //piccolo nero in rosa

  }

  x += 35; // gestisco la spaziatura
  if (x > width) {
    x = 0;
    y += 35;
  }

  if (y > height) { //lo faccio ripartire!
    background(parametri.coloreSfondo); //cancello i disegni di prima

    x = 0; //coordinate punto di partenza x
    y = 0; //coordiante punto di partenza y
  }
}