// -
// esercizio generatore di frasi insensate by mgabriella [parole, frasi]
// 2020 © Maria Gabriella @mgabriella, Daniele @Fupete and the course DSII2020 at //DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/mgabriella
// Educational purposes, MIT License, 2020, San Marino
// —

let word  = '...'

let verbi, sostantivi, aggettivi, avverbi, preposizioni;
verbi = ["fulminato", "schivato", "affettato", "arrotolato", "rotto", "respinto", "dormito", "ucciso"];
sostantivi = ["polso", "computer", "topo", "serpente", "mimo", "gatto", "cane"];
aggettivi = ["bello", "pigro", "professionale", "adorabile", "stupido", "ruvido", "morbido", "caldo",  "viscido"];
avverbi = ["lentamente", "elegantemente", "precisamente", "rapidamente", "tristemente", "umilmente", "orgogliosamente", "scioccante", "con calma", "appassionatamente"];
preposizioni = ["giù", "in", "sopra", "sotto", "dentro", "attraverso", "fuori", "verso"];

function setup() {
  createCanvas(800, 100);
  button = createButton('generate word');
  button.mousePressed(generateWord);
  button.position(350);
}

function generateWord(){
  word = "Il "+random(sostantivi)+" "+random(aggettivi)+", "+random(avverbi)+" è stato "+random(verbi)+" dal "+random(sostantivi)+" "+random(aggettivi)+" "+random(preposizioni)+" questo "+random(sostantivi)

}
function draw() {
textFont('Notable');
background(0);
textSize(10);
colorMode(HSB);
strokeWeight(2);
stroke(255, 204, 100);
fill(255);
text(word, 10, 50); // draw the word
}