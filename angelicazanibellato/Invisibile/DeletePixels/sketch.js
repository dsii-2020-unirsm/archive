// -
// DeletePixels 0.11 by angelica [deletePixels, color-thief]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// @lokesh (github.com/lokesh) for https://github.com/lokesh/color-thief
// original license: MIT License
// —


let img;

function preload() {
  img = loadImage('image/bird.jpg');
}

function setup() {
  createCanvas(600, 400);
  cancellacolore(0, 255, 0); //input colore
  image(img, 0, 0, 600, 400)

}


function cancellacolore(r1, g1, b1) {
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = 4 * (x + y * img.width);
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      //calcolo il valore assoluto 
      let val = Number(abs(r - r1) + abs(g - g1) + abs(b - b1));

      //range di pixel che si avvicinano al colore
      if (val > 300) {

        //stampa pixel neri
        img.pixels[index + 0] = 0;
        img.pixels[index + 1] = 0;
        img.pixels[index + 2] = 0;

      }


    }
  }

  img.updatePixels()


}
