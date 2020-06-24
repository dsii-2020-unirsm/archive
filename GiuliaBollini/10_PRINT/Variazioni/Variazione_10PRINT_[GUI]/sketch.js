// -
// Variazione 10PRINT [GUI] 0.1 by GiuliaBollini
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [a] delete all
//
// —

// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreEllisse1: [100, 10, 200, 20],
  coloreEllisse2: [150, 100, 200, 100],
  
  diametroEllisse: 7,
  diametroEllisse1: 30,
  diametroEllisse2: 10,
}
  
// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {

  var gui = new dat.GUI();

var f1 = gui.addFolder('Ellisse 1');  
f1.addColor(parametri, 'coloreEllisse1'); // Color Picker: non inserire nulla 
  
var f1 = gui.addFolder('Ellisse 2');  
f1.addColor(parametri, 'coloreEllisse2'); // Color Picker: non inserire nulla

var evento1 = gui.add(parametri, 'diametroEllisse', 0, 100); // EVENTO: Viene chiamata una funzione al variare del parametro  

var evento1 = gui.add(parametri, 'diametroEllisse1', 0, 50); // EVENTO: Viene chiamata una funzione al variare del parametro

var evento1 = gui.add(parametri, 'diametroEllisse2', 0, 50); // EVENTO: Viene chiamata una funzione al variare del parametro
  
}

let w = 0; //width
let h = 0; //height
let x1;
let x2;
let y1;
let y2;
let dim = 30;

function setup() {
  createCanvas(windowWidth, windowHeight); //dimensione dello schermo
  background(250);
}

function draw() {  
  
  x1 = w + 15;
  x2 = w - 15; 
  y1 = h + 15; 
  y2 = h - 15; 
  
  translate((-dim/2), windowHeight-(dim/2));
  frameRate(20); //velocità 
   
  w += 40; //distanza tra gli oggetti
 
  if (random() < 0.5) { 
  noStroke();
    fill(random(150,250),random(150,250),random(150,250),200); 
    ellipse(x1+10,y1,parametri.diametroEllisse);
    
  } else {
  noStroke()
    fill(parametri.coloreEllisse1);
    ellipse(x2+20,y2,parametri.diametroEllisse1);
    fill(parametri.coloreEllisse2);
    ellipse(x2+20,y2,parametri.diametroEllisse2); 
    fill(random(100,250),random(100,250),random(100,250));
  }

  if (w > windowWidth) {
    w=10;
    h-=dim;
  }
  
  if (h<(-windowHeight)) {
    w=50;
    h=50; 
  }
}

function keyTyped() {
  if (key === 'a') { // se premo "a" pulisco il background
    background(255);}}