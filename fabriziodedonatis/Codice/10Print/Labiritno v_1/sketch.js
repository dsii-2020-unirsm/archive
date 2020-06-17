// -
// 10print_GUI labirinto v_1 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Help:
// use control panel for variation
//
// —



//let gifLength=180;
let canvas;
//PARAMETRI 
let parametri = {
  arco: 20,
  raggio: 40,
  caso: 0.7,
  step: 20,
  spessori: 1,
  colore1 :  [255,255,0],
  colore2 : [0,100,255]
}

window.onload = function() {

  var gui = new dat.GUI();
  var f0 = gui.addFolder('struttura');
  //gui.add(parametri, 'raggio', 0, 255);
  f0.add(parametri, 'step', 5, 50);
  f0.add(parametri, 'arco', 0, 80);
  f0.add(parametri, 'caso', 0, 1);
  f0.add(parametri, 'spessori', 0, 10);
  
  var evento1 = f0.add(parametri, 'raggio', 10, 500);
      evento1.onChange(function() { 
    background(0);
    r = parametri.raggio;
  });
  
  var f1 = gui.addFolder('Colori');
  f1.addColor(parametri, 'colore1');
  f1.addColor(parametri, 'colore2');
}



let w,h;
let arco=20; // lunghezza arco
let r=150; // raggio iniziale
let step=20; // distanziale raggio
let Arad, Brad; // radianti per il punto A e B
let Ax, Ay, Bx, By; // coordinate per il punto A e B
let caso=0.8;
let Atot;
let A=0;
//let colore1 = color(255,255,0);
//let colore2 = color(0,100,255);

//var capturer;
//var Timeout=100
function setup() {
  w=windowWidth;
  h=windowHeight;
  canvas = createCanvas(w, h);
  stroke(150)
  background(0);
 /* capturer = new CCapture( {
     format: 'webm',
	framerate: 60,
  quality: 10,
	verbose: true
} );*/
  
}


function draw() {
  //background(220);
  let from = color(parametri.colore1);
  let to = color(parametri.colore2);
  let addCol = map(r, parametri.raggio, w-w*0.1, 0, 1);
  let colore = lerpColor(from, to, addCol);
  stroke(colore);
  strokeWeight(parametri.spessori);
  translate(w/2,h/2);
  Arad= parametri.arco/(r);
  Brad= parametri.arco/(r+parametri.step);
  Ay=r/2*sin(A+Arad);
  Ax=r/2*cos(A+Arad);
  By=((r/2)+step/2)*sin(A+Arad);
  Bx=((r/2)+step/2)*cos(A+Arad);
  
  if (random()<parametri.caso){
     noFill()
     arc(0,0, r,r,A,(A+Arad));
    
  }
  else {
  line(Ax,Ay,Bx,By);
  }
  A+=Arad;
  if (degrees(A)>360) {
     A=0;
    r+=parametri.step;
  }

if (r> w) {
    background(0);
    r=parametri.raggio;
    
}
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0)
  w=windowWidth;
  h=windowHeight;
}

//------ registrazione

/*function keyTyped() {
  if (key === 'r') {
    capturer.start();
    console.log("start")
  } else if (key === 's') {
   capturer.save();
    console.log("stop")
  }
  // uncomment to prevent any default behavior
  // return false;
}*/