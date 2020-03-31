// Generatore parole by francy96 @Francesca1996 
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

// generatore di nuovi strumenti per il design



let info = 'PREMI BARRA SPAZIATRICE';

//let a = 0;
  

let strumento1 = ['mouse', 'palette', 'musica', 'display', 'tastiera', 'touch', 'colore', 'photoshop', 'illustrator', 'indesign', 'code', 'grafico', 'sito', 'web', 'motion', 'aftereffects', 'video', 'frame', 'computer', 'rgb', 'idea', 'concept', 'fotografia','raw'];
let strumento2 = ['righello', 'matita', 'chiavistello', 'forbici', 'carta', 'arduino', 'gomma', 'rivista', 'giornale', 'inchiostro', 'sensore', 'radio', 'rhinoceros', 'metro', 'parametrico', 'modellatore', 'prototipazione', 'stampante3D', 'modello', 'calcolatrice', 'prodotto', 'materiale', 'cmyk'];

let parolaScelta1 = [];
let parolaScelta2 = [];

let w = 600;
let h = 600;
let a = (w / 6) / 2;
console.log(a);

function setup() {
  createCanvas(w, h); //windowWidth e windowHeight
  frameRate(1);
  textSize(20);
  textStyle(BOLD);
  noLoop(); 
  
}

function draw() {
  
  
  fill(int(random(255)), int(random(255)), int(random(255)));
  background(240);
  textStyle(BOLD);
  text(info, a, height / 5);
  
  parolaScelta1 = random(strumento1);
  console.log(parolaScelta1);
  console.log(parolaScelta1.length);
  
  parolaScelta2 = random(strumento2);
  console.log(parolaScelta2);
  console.log(parolaScelta2.length);
  
  let numeroRandom1 = random(1);
  console.log(numeroRandom1);
  
  let numeroRandom2 = random(1);
  console.log(numeroRandom2);
  
  if (numeroRandom1 < 0.5) {
    text(parolaScelta1[0], a, height / 2);   //33
    text(parolaScelta1[1], a + a, height / 2); //66
    text(parolaScelta1[2], a + a + a, height / 2); //99
    
  } else if (numeroRandom1 > 0.5) { 
    text(parolaScelta1[parolaScelta1.length - 1], a, height / 2); //33
    text(parolaScelta1[parolaScelta1.length - 2], a + a, height / 2); //66
    text(parolaScelta1[parolaScelta1.length - 3], a + a + a, height / 2); //99
    
  }
  
  
  if (numeroRandom2 < 0.5) {
    text(parolaScelta2[0], a + a + a + a, height / 2); //132
    text(parolaScelta2[1], a + a + a + a + a, height / 2); //165
    text(parolaScelta2[2], a + a + a + a + a + a, height / 2); //198
    
  } else if (numeroRandom2 > 0.5) { 
    
    text(parolaScelta2[parolaScelta2.length - 1], a + a + a + a, height / 2); //132
    text(parolaScelta2[parolaScelta2.length - 2], a + a + a + a + a, height / 2); //165
    text(parolaScelta2[parolaScelta2.length - 3], a + a + a + a + a + a, height / 2); //198
    
  }
  text(parolaScelta1 + ' + ' + parolaScelta2 , a, height / 3);
  
} 

function keyPressed (){
 
  draw();
  
}


