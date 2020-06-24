// -
// NewHorizons Palette 0.2 by GiuliaBollini
// 2020 © GiuliaBollini, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// https://github.com/dsii-2020-unirsm/archive/tree/master/GiuliaBollini
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @voglervoice (github.com/voglervoice ) for https://github.com/googleartsculture/art-palette
// original license: Copyright 2018 Google Inc.
//
// Credits/Thanks to: 
// @fupete (github.com/fupete ) for http://dsii-2018-unirsm.github.io/
// original license: © 2018 MIT License
// —
//
// Help:
// write a place to search a photo and create a palette
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



function estraePalette() {
    var PALETTE_COLORS_COUNT = 5;
    var IMAGE_MAX_WIDTH = 400;

    var paletteElement = document.querySelector(".palette");
    var paletteElements =  [];
    let i = 0;
    while (i < PALETTE_COLORS_COUNT) {
      var li = document.createElement('li');
      paletteElement.appendChild(li);
      paletteElements.push(li);
      i++;}

    var canvas = document.createElement('canvas');
    var canvasContext = 
canvas.getContext('2d');
    document.body.appendChild(canvas);

    var imageInput = document.getElementById("image-input");

    var paletteExtractor = new PaletteExtractor();
    
    let inputFileReader = null;
    let image = null;

    imageInput.addEventListener("change", 
(event) => {
      var input = /** @type {!Element} */ (event.target);
      readInputFile(
          input,
          (dataUrl) => {
            image = new Image();
            image.onload = () => {
              if (image.width < 1 || 
image.height < 1) {
                return [];
              }

              var drawableRatio = image.width / image.height;
              image.width = Math.min(IMAGE_MAX_WIDTH, image.width);
              image.height = parseInt(image.width / drawableRatio, 10);
              canvas.width = image.width;
              canvas.height = image.height;
              canvasContext.drawImage(image, 0, 0, image.width, image.height);

              var data =
                  canvasContext.getImageData(0, 0, image.width, image.height)
                      .data;
              // Extracts the colors palette from image data.
              var hexPalette =
                  paletteExtractor.processImageData(data, PALETTE_COLORS_COUNT);

              let index = 0;
              for(var paletteColorElem of paletteElements){
                paletteColorElem.style.backgroundColor = hexPalette[index];
                index++;
              }
            };
            image.src = dataUrl;
          },
          (error) => {
            console.log(error);
          });
      // To allow uploading the same image twice.
      input.value = null;
    });

    /**
      * Loads input files.
      * @param {!Element} inputNode
      * @param {!Function} callbackSuccess
      * @param {!Function} callbackError
      */
    var readInputFile = function(inputNode, callbackSuccess, callbackError) {
      if (inputFileReader) {
        inputFileReader.onload = null;
        inputFileReader.onerror = null;
        inputFileReader.abort();
        inputFileReader = null;
      }
      if (inputNode.files && inputNode.files[0]) {
        inputFileReader = new FileReader();
        inputFileReader.onload = function(event) {
          callbackSuccess(event.target.result);
        };
        inputFileReader.onerror = callbackError;
        inputFileReader.readAsDataURL(inputNode.files[0]);
      }
    }
}