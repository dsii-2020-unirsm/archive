// -
// Intro Paesaggio sensibile by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete 
// Educational purposes, MIT License, 2020, San Marino
// —


let button;
let intro = ["Come sarebbe","Come sarebbe","il mondo","se l'ambiente","potesse leggere","le nostre percezioni","e attivare","un dialogo?"];

function setup() {
  createCanvas(800, 800);
  // 5 frame al secondo
  frameRate(5);
  
  // formattazione del testo
  textSize(50);
  textAlign(CENTER);
  fill(255);
}

function draw() {
  background(148, 222, 207);
  // quale parola
  let i = frameCount%intro.length;
  text(intro[i], width/2, height/2);
  button = createButton('PROVA');
  button.position(width/2-105/2, height/2+30/2);
  button.size(105,30);
  button.style('color: #94DECF');
  button.style('background-color: #FFFFFF');
  button.style('border: none');
  button.style('border-radius: 20px');
  button.style('box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)');
  button.hide();
  if (intro[i] === "un dialogo?"){
  intro=[""];
  button.show();
  button.mousePressed(changeBG);
  }
}
function changeBG() {

}
