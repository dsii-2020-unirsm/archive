// Pattern3 [GUI] by GiuliaBollini 
// 2020 © Giulia Bollini @GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —



// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {
  
  coloreSfondo: 255, // Slider: inserire valore all'avvio dello sketch 

  coloreEllisse: [50, 200, 200],
  
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

var evento1 = gui.add(parametri, 'diametroEllisse', 0, 50); // EVENTO: Viene chiamata una funzione al variare del parametro

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(parametri.coloreSfondo);
}

function draw() {
  //background(250);
  noStroke();
  frameRate(7);
  
  for (let x = 0; x < width; x+=25) {
    for (let y = 0; y <height; y+=25) {
      
      if (mouseX<=200) {
        fill(parametri.coloreEllisse);
        stroke(150,50,200);
        strokeWeight(3);
        ellipse (x + 5,y + 5,15,15);
      } else { 
        fill( (random(10, 255)), (random(10, 255)), (random(10, 255)), 155); 
        noStroke();
        ellipse (x,y,parametri.diametroEllisse, parametri.diametroEllisse);
   
      }
    }
  }
}