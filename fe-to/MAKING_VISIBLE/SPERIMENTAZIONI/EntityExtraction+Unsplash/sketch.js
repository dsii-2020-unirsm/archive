// -
// Making Visible - Deja-Vu - EntityExtraction + Unsplash by Federico Topa 
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Dandelion Entity Extraction API for https://dandelion.eu/
// Daniele Tabellini @fupete © 2018 MIT License
// Random images Unspash
// —



let linkimg;
var imgsResolution = "320x240";
var img = [];

function preload() {


}

function setup() {

  createCanvas(windowWidth, windowHeight);
  //frameRate(30);
  background(222);

  arrayFrasi = ['the boy played football in barcelona', 'the boy hides behind the bush because he is afraid of the dragon']

  button = createButton('GIOCA');
  button.position(width / 2, height / 2);
  button.size(150, 60);
  button.mousePressed(loadRandomSentence);

}

function loadRandomSentence() {

  let frase = random(arrayFrasi)
  console.log("Frase generate: " + frase)
  loadJSON('https://api.dandelion.eu/datatxt/nex/v1/?lang=en%20&text=' + frase + '&include=types%2Cabstract%2Ccategories%2Clod&include=image&min_confidence=0,0&token=5db5cba74eb741bba4068e13c54c917b', gotData);

}


function carica(keywords) {
  var url = "https://source.unsplash.com/" + imgsResolution + "/?" + keywords + "&" + random(200); // < un random per caricarne sempre una nuova anche sugli stessi temi

  var img_Loading = loadImage(url);
  return img_Loading;

}



function draw() {
  background(0);
  let newW = windowWidth / img.length
  let newH = newW / (320 / 240)

  for (var i = 0; i < img.length; i++) {
    image(img[i], (i * newW), 0, newW, newH);
  }
}


function gotData(datatxt) {

  img = []
  for (let i = 0; i < datatxt.annotations.length; i++) {
    let keyword = datatxt.annotations[i].spot;
    //linkimg = datatxt.annotations;
    let imgCanvas = carica(keyword)
    img.push(imgCanvas)

  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}