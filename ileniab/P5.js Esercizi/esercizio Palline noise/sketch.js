// W3_ Variazione: Palline noise

// 2020  @ileniab 
// github.com/ileniab — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino

let Palline = []; // < array di palline
let n = 10; // < numero palline iniziali
let t = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, P2D); // WEBGL-->3D  P2D--> 2D
  background(30);

  // gruppo iniziale di Palline
  for (let i=0; i<n; i++) {
    Palline.push(new Astronave(i));
  }
}

function draw() {
  background(30);

  push(); // < equivalente di pushMatrix in Processing
  translate(0,0); //trasla canva

  // mostra gruppo di palline
  for (var i=0; i<Palline.length; i++) {
      Palline[i].mostrati();
      Palline[i].spostati();
    }
  pop();
}

// aggiungi palline se premi il mouse
function mousePressed() {
  Palline.push(new Astronave(Palline.length));
}

// togli ultima pallina se premi un tasto
function keyPressed() {
  Palline.pop();
}


// definizione della classe Linea
function Astronave(_id) {

  // dati e costruttore
  this.id = _id;

//  this.colore = random(45, 255);

  // funzionalità

  this.mostrati = function() {
  //  stroke(this.colore, 200);
    ellipse(this.x,this.y, 10, 10);
  }

  this.spostati = function() {

      this.x = (width * noise(t + _id));
      this.y = (height * noise(t + 5 + _id));

      //incremento
      t = t + 0.0001;

  }

}

//da inserire sempre utilizzando windoWidth
// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
