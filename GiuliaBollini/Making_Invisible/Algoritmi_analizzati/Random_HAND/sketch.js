let immagine = 'hand'

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

