// 10print 2° version + GUI by francy96 @Francesca1996 
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


//-----------CODE

//-----------OGGETTO PARAMETRI
// Inserire i parametri che si vogliono modificare, e i loro valori iniziali
let parametri = {

  coloreSfondo1: [300, 150, 255], // Slider: inserire valore all'avvio dello sketch 
 
  coloreLine1: [255, 255, 255],
  coloreLine2: [0, 0, 0],
  
  
  dimensioneStroke: 1,
  versoLine: 1,
};


//-----------FUNZIONE GUI
// Inserire i parametri e il loro range se presente.
// Si possono aggiungere sezioni nascoste dichiarandole con il metodo .addFolder();
window.onload = function() {


  var gui = new dat.GUI();

  var f1 = gui.addFolder('Sfondo1'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreSfondo1'); // Color Picker: non inserire nulla
  

  var f1 = gui.addFolder('Line1'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreLine1'); // Color Picker: non inserire nulla

  var f1 = gui.addFolder('Line2'); // Crea una tendina che nasconde i prossimi parametri
  f1.addColor(parametri, 'coloreLine2'); // Color Picker: non inserire nulla

  
  
  var evento1 = gui.add(parametri, 'dimensioneStroke', 0, 8); // EVENTO: Viene chiamata una funzione al variare del parametro
  
  var evento2 = gui.add(parametri, 'versoLine', 0, 8); // EVENTO: Viene chiamata una funzione al variare del parametro

  //evento1.onChange(function() { // La funzione viene chiamata MENTRE si cambia il valore
  //coloreEllisse = random(255);
  //});

//-----------VARIABILI
}
let w = 10;  //16
let h = 10;  //16
let x1;
let x2;
let y1;
let y2;
let index = 0;
let actRandomSeed = 0;


//-----------SETUP
function setup() {
  fullscreen(false);
  createCanvas (650, 650); //650 both
   
  background(parametri.coloreSfondo1);
  frameRate(250);
}


//-----------DRAW
function draw() {
   strokeWeight(parametri.dimensioneStroke); 
   randomSeed(actRandomSeed);
  
   //LINEE
   x1 = w * index;       
   x2 = x1 + w;           
   y1 = h * 1;            
   y2 = h * 2;             
  
  if (random(parametri.versoLine) < 1) {
    line(x2, y1, x1, y2);
    stroke(parametri.coloreLine1);
    } else {
      line(x1, y1, x2, y2);
      stroke(parametri.coloreLine2);
    }
  
    index++;
  
    if (index == width / w) {
      p = get (0, h, width, h * (height / 10)); //h * 23
      background(parametri.coloreSfondo1);  //cancella lo schermo 
      set(0, 30, p);              
      index = 0;
   }
}
