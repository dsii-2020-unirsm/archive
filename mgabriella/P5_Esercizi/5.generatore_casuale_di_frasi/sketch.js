let word  = '...'
let words = ['apple', 'bear', 'cat', 'dog'];

var verbi, sostantivi, aggettivi, avverbi, preposizioni;
verbi = ["fulminato", "schivato", "affettato", "arrotolato", "rotto", "respinto", "dormito", "ucciso"];
sostantivi = ["polso", "computer", "topo", "serpente", "professore", "gatto", "cane"];
aggettivi = ["bello", "pigro", "professionale", "adorabile", "stupido", "ruvido", "morbido", "caldo",  "viscido"];
avverbi = ["lentamente", "elegantemente", "precisamente", "rapidamente", "tristemente", "umilmente", "orgogliosamente", "scioccante", "con calma", "appassionatamente"];
preposizioni = ["giù", "in", "sopra", "sotto", "dentro", "attraverso", "fuori", "verso"];

function setup() {
  createCanvas(800, 200);
  
  button = createButton('generate word');

  button.mousePressed(generateWord);
  
}

function generateWord(){
  
  word = "Il "+random(sostantivi)+" "+random(aggettivi)+", "+random(avverbi)+" è stato "+random(verbi)+" dal "+random(sostantivi)+" "+random(aggettivi)+" "+random(preposizioni)+" questo "+random(sostantivi)

}
function draw() {
  background(220);
  

text(word, 10, 50); // draw the word
}