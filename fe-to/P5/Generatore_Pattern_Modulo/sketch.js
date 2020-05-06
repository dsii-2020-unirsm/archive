
// Pattern Modulo. by Federico Topa partendo dal lavoro svolto 
// da  Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni-
// Generative Gestaltung – Creative Coding im Web


// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


let NumPiastrelleX = 50; // suddivisioni asse x
let NumPiastrelleY = 50; // suddivisioni asse y

let hueValues = [];
let saturationValues = [];
let brightnessValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(255);

  // init con valori casuali
  for (let i = 0; i < NumPiastrelleX; i++) {
    hueValues[i] = random(360);
    saturationValues[i] = (100);
    brightnessValues[i] = (100);
  }
}

function draw() {
  
  //limito le coordinate del mouse sul canvas
  
  let mX = constrain(mouseX, 0, width); // reference p5 Constrain (number to constrain, limite minimo, limite massimo)
  
  let mY = constrain(mouseY, 0, height);

  // contatore piastrelle
  
  let contatore = 0;

  // mappo il mouse sulla dimensione della griglia
  
  let currentNumPiastrelleX = int(map(mX, 0, width, 1, NumPiastrelleX));
  let currentNumPiastrelleY = int(map(mY, 0, height, 1, NumPiastrelleY));
  let tileWidth = width / currentNumPiastrelleX; //divido la larghezza del canvas per il numero di piastrelle generate
  let tileHeight = height / currentNumPiastrelleY; //divido l'altezza del canvas per il numero di piastrelle generate

  for (let gridY = 0; gridY < NumPiastrelleY; gridY++) {
    for (let gridX = 0; gridX < NumPiastrelleX; gridX++) {
      let posX = tileWidth * gridX;
      let posY = tileHeight * gridY;
      let index = contatore % currentNumPiastrelleX; //attraverso il contatore assegno poi il riempimento alle diverse parti generate dal movimento del mouse.

      // colore delle diverse  parti
      
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      contatore++;
    }
  }
}



