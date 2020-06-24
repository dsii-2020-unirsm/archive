// -
// variazione10Print 0.6 by peterbaru [10Print, commodore64]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/peterbaru
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to:
// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10 book for https://10print.org/
//
// @shiffman (github.com/shiffman) for https://natureofcode.com/, https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp00_introduction/NOC_I_01_RandomWalkTraditional/sketch.js
// original license: MIT License
// —
// Help:
// [key_pressed S] viene salvata l'immagine
// [key_pressed N] viene generato un nuovo sfondo
//
// —

let parametri = {

  coloreSfondo: [192, 218, 255, 5],
  aggiornoSfondo: true,

  riempimento: true,
  coloreR: 255,
  coloreG: 255,
  coloreB: 255,

  bordo: false,
  coloreBordo: [50, 50, 50],
  dimensioneBordo: 1,

  cambiaFigura: false,
};

// FUNZIONE GUI
window.onload = function() {
  var gui = new dat.GUI();

  gui.addColor(parametri, 'coloreSfondo'); //modifica colore sfondo
  gui.add(parametri, 'aggiornoSfondo')

  var elemento = gui.addFolder('colore');
  elemento.add(parametri, 'riempimento');
  elemento.add(parametri, 'coloreR', 0, 255); //colore R elemento
  elemento.add(parametri, 'coloreG', 0, 255); //colore G elemento
  elemento.add(parametri, 'coloreB', 0, 255); //colore B elemento

  var bordo = gui.addFolder('Bordo');
  bordo.add(parametri, 'bordo');
  bordo.addColor(parametri, 'coloreBordo'); //modifica colore bordo
  bordo.add(parametri, 'dimensioneBordo', 1, 5); //modifica colore bordo

  gui.add(parametri, 'cambiaFigura')
}

//variabili che definiscono il codice

let dim //dimensione sfera
let numspost = 0 //distanza tra sfere
let t = 0 //incremento iniziale colore
let dimspost

//let trasparenza = 1 //trasparenza sfondo

function setup() {
  cnv = createCanvas(windowWidth, windowWidth / 2);
  //  cnv = createCanvas(windowWidth, windowWidth); //con la canvas quadrata i cerchi si sovrappongono ogni volta
  background(parametri.coloreSfondo)

  //la funzione inizia a disegnare dal centro della canvas
  x = 0
  y = 0
}

function draw() {

  let opaco = int(random(255)) //scegli opacità arco

  if (parametri.bordo) {
    stroke(parametri.coloreBordo)
    strokeWeight(parametri.dimensioneBordo)
  } else {
    noStroke();
  }

  dim = width / 100;
  dimspost = dim + numspost //spostamento tra 2 archi

  let spostamento = int(random(4)) //scegli direzione
  let arco = int(random(0, 12)) //scegli tipo di arco
  let quadrato = int(random(0, 4)) //scegli il tipo di quadrato

  if (parametri.riempimento) {
    let r = parametri.coloreR * noise(t + 5)
    let g = parametri.coloreG * noise(t + 30)
    let b = parametri.coloreB * noise(t + 55)

    t += 0.01 //incremento

    fill(r, g, b, opaco) //colore archi
  } else {
    noFill();
  }

  if (parametri.cambiaFigura) {
    //definisci quale arco (la sfera piena ha una probabilità minore)
    if (arco == 0) {
      arc(x, y, dim, dim, 0, 2 * PI)
    } else if (arco == 1) {
      arc(x, y, dim, dim, 0, PI / 2)
    } else if (arco == 2) {
      arc(x, y, dim, dim, PI / 2, PI)
    } else if (arco == 3) {
      arc(x, y, dim, dim, PI, PI * (3 / 2))
    } else if (arco == 4) {
      arc(x, y, dim, dim, PI * (3 / 2), 2 * PI)
    } else if (arco == 5) {
      arc(x, y, dim, dim, 0, PI)
    } else if (arco == 6) {
      arc(x, y, dim, dim, PI / 2, PI * (3 / 2))
    } else if (arco == 7) {
      arc(x, y, dim, dim, PI * (3 / 2), PI / 2)
    } else if (arco == 8) {
      arc(x, y, dim, dim, PI, 0)
    } else if (arco == 9) {
      arc(x, y, dim, dim, 0, PI * (3 / 2))
    } else if (arco == 10) {
      arc(x, y, dim, dim, PI / 2, 2 * PI)
    } else if (arco == 11) {
      arc(x, y, dim, dim, PI, PI / 2)
    } else if (arco == 12) {
      arc(x, y, dim, dim, PI * (3 / 2), PI)
    }

  } else {

    if (quadrato == 0) {
      rect(x, y, dim, dim)
    } else if (quadrato == 1) {
      rect(x, y, dim / 2, dim / 2)
    } else if (quadrato == 2) {
      rect(x - (dim/2), y, dim / 2, dim / 2)
    } else if (quadrato == 3) {
      rect(x, y - (dim/2), dim / 2, dim / 2)
    } else if (quadrato == 4) {
      rect(x - (dim/2), y - (dim/2), dim / 2, dim / 2)
    }
  }

  //definizione direzione
  if (spostamento == 0) {
    x += dimspost
  } else if (spostamento == 1) {
    y += dimspost
  } else if (spostamento == 2) {
    x -= dimspost
  } else if (spostamento == 3) {
    y -= dimspost
  }

  //contenimento nella canvas
  if (x > width) {
    x = 0
    if (parametri.aggiornoSfondo) {
      background(parametri.coloreSfondo)
    }
  }
  if (x < 0) {
    x = width
    if (parametri.aggiornoSfondo) {
      background(parametri.coloreSfondo)
    }
  }
  if (y > height) {
    y = 0
    if (parametri.aggiornoSfondo) {
      background(parametri.coloreSfondo)
    }
  }
  if (y < 0) {
    y = height
    if (parametri.aggiornoSfondo) {
      background(parametri.coloreSfondo)
    }
  }

  if (parametri.bordo == false && parametri.riempimento == false) {
    parametri.riempimento = true;
    alert("Attenzione, ha deselezionato tutti i valori! Per farti continuare ora rittiverò il colore di riempimento.");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth / 2)
  background(192, 218, 255)
}

function keyPressed() {
  if (key == 's') {
    console.log('Preparo il salvataggio')
    save(cnv, 'Variazione10PRINT.jpg');
  }

  if (key == 'n') {
    console.log('Nuovo Sfondo')
    background(random(255), 140, random(255))
  }
}