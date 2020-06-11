let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/3V2YfNi1m/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = '';
let word = '';
let l = '';
let l1 = '';
let count = 0;
let n = 60;
let sent='';
let f=0;
let len=0;
  let foo = new p5.Speech();
// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}
function setup() {
  createCanvas(300, 200);
  // Create the video
  button = createButton('Convert');
  button.position(330,30);
  button.mousePressed(convert);
  button = createButton('Clear');
  button.position(330,60);
  button.mousePressed(cls);
  button = createButton('Back');
  button.position(330,90);
  button.mousePressed(back);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  

  colorMode(RGB, 100);
  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);
  stroke('green');


  noFill();
  //square(200, 50, 100);
  // Draw the label
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text(label, 10, 10);
  textAlign(CENTER);
  text(word, width / 2, height - 4);

}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  let c = flippedVideo.get(0, 0, 320, 240);
  classifier.classify(c, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  if (label === 'Nothing') {
    l = l.concat('1');
    count++;
  } else {
    l = l.concat(label);
    count++;
  }
  if (count === n) {
    letter(l);
    count = 0;
    l = '';
    if (l1 !== '1') {
      word = word.concat(l1);
      f=0;
      len++;
      
    } else {
       f++;
      if(f===1){
        word = word.concat(' ');
        len++;
      }
  }
  }
  setInterval(classifyVideo(), 1300);
}

function letter(l) {
  let k = 0;
  for (let i = 0; i < n; i++) {
    let c = 0;
    for (let j = 0; j < n; j++) {
      if (l[i] === l[j]) {
        c++;
      }
      if (c > k) {
        k = c;
        l1 = l[i];
      }
    }
  }
}
function spell(sent){
var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if (this.readyState === this.DONE) {
    a = this.responseText;
    a = JSON.parse(a);
    console.log(a.suggestion);
    foo.speak(a.suggestion);
  }
});

xhr.open("GET", "https://montanaflynn-spellcheck.p.rapidapi.com/check/?text=" + sent);
xhr.setRequestHeader("x-rapidapi-host", "montanaflynn-spellcheck.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "64316f0976msh4af7d6244bdf278p11219ejsna08b83584ba5");

xhr.send(data);
}
function convert(){
  spell(word);
}
function cls(){
  word='';
}
function back(){
  word=subset(word,0,len--);
}
// </script>