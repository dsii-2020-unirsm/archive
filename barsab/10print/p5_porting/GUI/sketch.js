// simple UI interface example [GUI]

// Credits/Thanks to: 
// @lo-th (github.com/lo-th) for the simple javascript ui https://github.com/lo-th/uil
// original license: MIT License here https://github.com/lo-th/uil/blob/gh-pages/LICENSE

// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let gui = new UIL.Gui({ // interfaccia
  css:'right:0; top:0;',
  bg:'#77a', 
  w:300 
} ); 


let coloreSfondo = '#463ea3'; // sfondo
let spessoreLinee= 5;
let coloreLinee = '#9381de';
let frameCount = 20;
let stepX; 
let stepY; 

function setup() {
  createCanvas(w=800, w);
  setupGui(); // < init interfaccia
  strokeWeight(spessoreLinee);
  stroke(coloreLinee);
  stepX = width / frameCount;
  stepY = height / frameCount;
  noFill();
  frameRate(1)
}


function draw() {
  background(coloreSfondo);
  for (var gridY=0; gridY<height; gridY += stepY) {
  for (var gridX=0; gridX<width; gridX += stepX) {
    let posX = gridX;
    let posY = gridY;

    let toggle = floor(random(2));
    if (toggle == 0) {
     strokeWeight(spessoreLinee);
     stroke(coloreLinee);
     line(posX, posY, posX+stepX, posY+stepY);
    }
    if (toggle == 1) {
     strokeWeight(spessoreLinee);
     stroke(coloreLinee);
     line(posX, posY+stepY, posX+stepX, posY);
    }
  }
}
}


function setupGui() {
  
  // SLIDER colore di fondo con funzione diretta
  gui.add('slide', { name:'Sfondo', value:20, min:0, max:255, step:10 }).onChange( function(valore){ coloreSfondo = valore } );
  
  //Slider colore linee
  gui.add('slide', { name:'Colore linee', value:20, min:0, max:255, step:10 }).onChange( function(valore){ coloreLinee = valore } );
  
 //Slider cambia spessore linee
  gui.add('slide', { name:'Spessore linee', value:5, min: 1, max:6, callback:cambiaSpessoreLinee});
  
  // pulsante
  gui.add('button', { name:'Weird', fontColor:'#ffffff', h:70}).onChange(function(v){ 
    coloreSfondo = color(random(255), random(255), random(255));
  });
}

var cambiaSpessoreLinee = function(valore){
  spessoreLinee = valore;
}
