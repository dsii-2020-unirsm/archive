// -
// Making Visible - Deja-Vu - Codice Completo  by Federico Topa 
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Dandelion Entity Extraction API - Text Similarity API for https://dandelion.eu/
// Daniele Tabellini @fupete © 2018 MIT License
// Random images Unspash
// —



var imgsResolution = "320x240";
var img = [];
var currentSentence = ""
var percentage = ""

function preload() {

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  //frameRate(30);
  background(222);

  arrayFrasi = [' the boy played football in barcelona ', ' the boy hides behind the bush because he is afraid of the dragon ']


  input = createInput();
  input.position(10, 10);
  input.size(windowWidth - 30, 60)
  input.hide()

  playButton = createButton('GIOCA');
  playButton.position(width / 2 - 150 / 2, height / 3);
  playButton.size(150, 60);
  playButton.mousePressed(loadRandomSentence);

  loadButton = createButton('CARICA');
  loadButton.position(width / 2 - 150 / 2, 60 + 40);
  loadButton.size(150, 60);
  loadButton.hide()
  loadButton.mousePressed(loadSentence);

  tryAgainButton = createButton('RITENTA');
  tryAgainButton.position(width / 2 - 160 - 150 / 2, 60 + 60);
  tryAgainButton.size(150, 60);
  tryAgainButton.hide()
  tryAgainButton.mousePressed(tryAgain);

  reloadGameButton = createButton('NUOVA FRASE');
  reloadGameButton.position(width / 2 + 160 - 80 / 2, 60 - 0);
  reloadGameButton.size(150, 60);
  reloadGameButton.hide()
  reloadGameButton.mousePressed(newGame);

  loadVintoButton = createButton('NUOVA FRASE');
  loadVintoButton.position(width / 2 - 150 / 2, 60 + 250);
  loadVintoButton.size(150, 60);
  loadVintoButton.hide()
  loadVintoButton.mousePressed(newGame);



}

function loadRandomSentence() {


  currentSentence = random(arrayFrasi)
  console.log("Frase generate: " + currentSentence)
  generateImgs()


}

function generateImgs() {
  loadJSON('https://api.dandelion.eu/datatxt/nex/v1/?lang=en%20&text=' + currentSentence + '&include=types%2Cabstract%2Ccategories%2Clod&include=image&min_confidence=0,0&token=5db5cba74eb741bba4068e13c54c917b', gotData);
}

function loadImgs(keywords) {
  var url = "https://source.unsplash.com/" + imgsResolution + "/?" + keywords + "&" + random(200); // < un random per caricarne sempre una nuova anche sugli stessi temi

  var img_Loading = loadImage(url);
  return img_Loading;

}

function loadSentence() {
  let userSentence = input.value()
  if (userSentence === "") {
    alert("Inserisci almeno una frase")
  } else {
    console.log(userSentence)
    loadButton.hide()
    loadJSON('https://api.dandelion.eu/datatxt/sim/v1/?text1=' + currentSentence + '&text2=' + userSentence + '&token=5db5cba74eb741bba4068e13c54c917b&bow=always', checkSimilarity, 'jsonp');
  }



}

function checkSimilarity(datatxt) {

  let percentageValue = round(datatxt.similarity * 100, 3)
  if (percentageValue == 100) {
    percentage = "HAI VINTO!!!";

    //tryAgainButton.show()
    loadVintoButton.show()

  } else {
    percentage = percentageValue + "%";
    console.log(datatxt.similarity);
    console.log(percentage);
    tryAgainButton.show()
    reloadGameButton.show()
  }

}

function tryAgain() {
  generateImgs()
  tryAgainButton.hide()

  reloadGameButton.hide()
  loadButton.show()
  input.value("")
  percentage = ""
}

function newGame() {
  tryAgainButton.hide()
  reloadGameButton.hide()
  loadVintoButton.hide()
  input.value("")
  percentage = ""
  loadRandomSentence()

}


function draw() {
  background(0);
  let newW = windowWidth / img.length
  let newH = newW / (320 / 240)
  input.position(10, newH + 10);
  loadButton.position(width / 2 - 150 / 2, newH + 60 + 40);
  tryAgainButton.position(width / 2 - 160 - 150 / 2, newH + 60 + 60);
  reloadGameButton.position(width / 2 + 80 - 150 / 2, newH + 60 + 60);

  for (var i = 0; i < img.length; i++) {
    image(img[i], (i * newW), 0, newW, newH);
  }

  textSize(32);
  fill(255, 255, 255);
  text(percentage, width / 2 - 150 / 2, newH + 60 + 60);
}


function gotData(datatxt) {

  input.show()
  loadButton.show()
  playButton.hide()
  img = []
  for (let i = 0; i < datatxt.annotations.length; i++) {
    let keyword = datatxt.annotations[i].spot;
    //linkimg = datatxt.annotations;
    let imgCanvas = loadImgs(keyword)
    img.push(imgCanvas)

  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}