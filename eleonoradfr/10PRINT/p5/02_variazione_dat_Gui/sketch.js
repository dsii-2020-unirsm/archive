// OGGETTO PARAMETRI

let parametri = {
  
  diametroEllisse1: 20,
  diametroEllisse2: 5,

  coloreEllisse1: [0, 0, 255],
  coloreEllisse2: [0, 0, 255],

  testo: "10PRINT", 
  mostraTesto: false,
  xTesto: 200,
  yTesto: 250, 
  dimensioniTesto: 20,
  coloreTesto: [0, 0, 255],

  pulisci: function() { 
    background(245);
    x=0;
    y=0;
  }

};

// FUNZIONE GUI

window.onload = function() {

  var gui = new dat.GUI();
  
  var f1 = gui.addFolder('Ellisse');
  f1.add(parametri, 'diametroEllisse1', 1, 30);
  f1.addColor(parametri, 'coloreEllisse1');
  f1.add(parametri, 'diametroEllisse2', 1, 30)
  f1.addColor(parametri, 'coloreEllisse2');
  
  var f2 = gui.addFolder('Testo');
  f2.add(parametri, 'xTesto', 10, 490);
  f2.add(parametri, 'yTesto', 10, 490);
  f2.add(parametri, 'dimensioniTesto', 10, 50);
  f2.addColor(parametri, 'coloreTesto');

  gui.add(parametri, 'pulisci');
    
}

let x = 0;
let y = 0;


function setup() {
  createCanvas(w=500, w);
  background(245);
  textSize(20);
  frameRate(20);

}

function draw() {

  if (random(2) > 1) {
    noStroke();
    fill(parametri.coloreEllisse1);
    ellipse(x,y,parametri.diametroEllisse1, parametri.diametroEllisse1);
  
  } else {
    noStroke();
    fill(parametri.coloreEllisse2);
    ellipse(x,y,parametri.diametroEllisse2, parametri.diametroEllisse2);
  } 


x = x + parametri.diametroEllisse1;
if (x > w) {
  x = 0;
  y = y + parametri.diametroEllisse1;
}
  
if (y > w) {
  background(245);
  x = 0;
  y = 0;
}

  push();
  fill(parametri.coloreTesto);
  textSize(parametri.dimensioniTesto);
  translate(parametri.xTesto, parametri.yTesto);
  text(parametri.testo, 0, 0);
  pop();


}

