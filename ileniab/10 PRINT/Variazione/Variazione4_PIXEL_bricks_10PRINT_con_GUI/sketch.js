// -
// Variazione 10PRINT con GUI by Ilenia Balella [keyword1, keyword2]
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —


let x = 0; //coordinata x 
let y = 0; //coordinata y 


let t = 0;




// OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreSfondo: [18, 20, 23],
  
  dimensioneElemento: 16,

  colElementoR: 255,
  colElementoG: 255,
  colElementoB: 255,
  
  selezionaForma: 0,
  
}

// FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {

  var gui = new dat.GUI();

  gui.addColor(parametri, 'coloreSfondo'); // Color Picker: non inserire nulla


  var elemento = gui.addFolder('Elemento'); // Crea una tendina che nasconde i prossimi parametri
  elemento.add(parametri, 'dimensioneElemento', 1, 30);
  elemento.add(parametri, 'colElementoR', 0, 255);
  elemento.add(parametri, 'colElementoG', 0, 255);
  elemento.add(parametri, 'colElementoB', 0, 255);
  elemento.add(parametri, 'selezionaForma',0, 1);
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(parametri.coloreSfondo);
  noStroke();

 // frameRate(20);
}

function draw() {
  translate((-(parametri.dimensioneElemento) / 2), windowHeight + ((parametri.dimensioneElemento) / 2));
  x += (parametri.dimensioneElemento);
  
  let R = noise(t)*(parametri.colElementoR);
  let G = noise(t+5)*(parametri.colElementoG);
  let B = noise(t+10)*(parametri.colElementoB);


  t += 0.01;
  

  fill(R, G, B);
  
if(parametri.selezionaForma ==0){
  
  
  rect(x, y,  parametri.dimensioneElemento, (sin(frameCount / parametri.dimensioneElemento) * parametri.dimensioneElemento/2));

} else{
 ellipse (x, y,  parametri.dimensioneElemento, (sin(frameCount / parametri.dimensioneElemento) * parametri.dimensioneElemento/2));
}

 

  if (x > windowWidth) {
    x = 0;
    y -= (parametri.dimensioneElemento);
  }
  if (y + (parametri.dimensioneElemento) < -(windowHeight)) {

    x = 0;
    y = 0;
     background(parametri.coloreSfondo);
  }

}
