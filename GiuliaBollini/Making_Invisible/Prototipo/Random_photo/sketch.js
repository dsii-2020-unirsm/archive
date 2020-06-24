// -
// Random photo 0.1 by GiuliaBollini
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @fupete (github.com/fupete ) for http://dsii-2018-unirsm.github.io/
// original license: © 2018 MIT License
// —
//
// Help:
// write a word to search a photo
//
// —


let immagine = 'smile'

function setup() {
  createCanvas(400, 400);
  img = carica();
}

function draw() {
  image(img,0,0);
}

function carica() {
  var url = "https://source.unsplash.com/" + "500x300" + "/?" + immagine + "&" + random(100);
  var img_Loading = loadImage(url);
  return img_Loading;
} 

