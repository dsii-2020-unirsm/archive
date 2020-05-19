// DeletePixels by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

//Reference ColorThief https://github.com/lokesh/color-thief


let img;

function preload() {
  img = loadImage('image/mare.jpg');
}

function setup() {
 createCanvas(600,400);
      cancellacolore(100,100,230);
    image(img, 0, 0, 600, 400)



  let CanvasImage = function (image) {
    this.canvas  = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.width  = this.canvas.width  = image.width;
    this.height = this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0, this.width, this.height);
};

CanvasImage.prototype.getImageData = function () {
    return this.context.getImageData(0, 0, this.width, this.height);
}
  


//quality quanti pixel vengono saltati prima che venga campionato quello successivo, deve essere un numero intero di valore 1 o superiore, il valore predefinito è 10

function createPixelArray(imgData, pixelCount, quality) {
    let pixels = imgData;
    let pixelArray = [];
  

  //offset è la posizione corrente dell'elemento

    for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
        offset = i * 4;
        r = pixels[offset + 0];
        g = pixels[offset + 1];
        b = pixels[offset + 2];
        a = pixels[offset + 3];
      

        /* If pixel is mostly opaque and not white
            if (typeof a === 'undefined' || a > 125) {
            if (!(r > 250 && g > 250 && b > 250)) {
            pixelArray.push([r, g, b]);
            }
        }
    }
    return pixelArray;
    console.log(pixelArray);
} */
  
  }
 }
}

function draw() {
 
}

function cancellacolore(r1,g1,b1){
  img.loadPixels();
  for(let x=0;x<img.width;x++){
  for(let y=0;y<img.height;y++){
    let index=4*(x+y*img.width);
    let r=img.pixels[index+0];
    let g=img.pixels[index+1];
    let b=img.pixels[index+2];
    let val=Number(abs(r-r1)+abs(g-g1)+abs(b-b1));
    if (val<200){
    
    img.pixels[index+0]=0;
    img.pixels[index+1]=0;
    img.pixels[index+2]=0;
    }
    

  }
  }
  
  img.updatePixels()
  
  
}




