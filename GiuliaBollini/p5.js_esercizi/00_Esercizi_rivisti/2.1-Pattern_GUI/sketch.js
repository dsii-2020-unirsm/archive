// -
// Pattern_GUI 0.1 by GiuliaBollini 
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
//
// —
//
// Help:
// [mouse] change square fill
//
// —


// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreQuadri: [0, 100, 100],
  
  dimensioneQuadri: 7,
}

// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {

  var gui = new dat.GUI();
  
  var f1 = gui.addFolder('Quadrati'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreQuadri'); // Color Picker: non inserire nulla

var evento1 = gui.add(parametri, 'dimensioneQuadri', 0, 50); // EVENTO: Viene chiamata una funzione al variare del parametro

}




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  noStroke();
  frameRate(5);
  
  for (let x = 0; x < width; x+=15) {
    for (let y = 0; y <height; y+=15) {   
      
      if (mouseX<=300) {
        fill ((random(0, 255)), (random(0, 255)), (random(0, 250),50), 150);
      } else {
        fill (parametri.coloreQuadri); 
      }
        
        rect (x,y,parametri.dimensioneQuadri, parametri.dimensioneQuadri); //modulo per la dimensione dei quadrati
    } 
  }
}