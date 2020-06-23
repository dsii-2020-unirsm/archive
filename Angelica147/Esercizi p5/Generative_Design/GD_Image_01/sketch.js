// -
// Image_01_Generative Design by Angelica Gasperoni [grid, mouse]
// 2020 © Angelica @Angelica147, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Generative Design, Visualize, Program, and Create with Javascript in p5.js di Benedikt Gross, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni, Joey Lee
// 
// Copyright (c) 2019 ml5 for https://opensource.org/licenses/MIT
// original license: MIT License
// —
//
//Un'immagine viene caricata e mmostrata in una griglia definita dal muose. Ciascuna casella nella griglia è riempita con una copia scalata dell'immagine caricata
//
//

var img;

function preload() { //caricamento dell'immagine
  img = loadImage('image.jpg'); //siamo sicuri che sia caricata prima di iniziare le funzioni setup e draw
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  var tileCountX = mouseX / 3 + 1; //la posizione del mouse determina tileCountX
  var tileCountY = mouseY / 3 + 1; //la posizione del mouse determina tileCountY
  var stepX = width / tileCountX; //la posizione del mouse determina la larghezza
  var stepY = height / tileCountY; //la posizione del mouse determina l'altezza
  
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      image(img, gridX, gridY, stepX, stepY); //usando la funzione image viene disegnata la foto
      //l'angolo in alto a sinistra dell'immagine si trova nella griglia (gridX,gridY); larghezza e altezza sono determinate dalla larghezza della tile stepX e altezza delle piastrelle stepY.
    }
  }
}
