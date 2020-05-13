console.log('ml5 version:', ml5.version)

let soundClassifier;
let resultP;
function preload() {
  let options = { probabilityThreshold: 0.95}; //confidence score
  soundClassifier = ml5.soundClassifier('SpeechCommands18w'); //link del soundClassifier che voglio usare
  
}

function setup() {
  createCanvas(400, 400);
  resultP = createP('waiting...');
  resultP.style('font-size', '32pt'); //scrivo il risultato
  soundClassifier.classify(gotResults);//richiamo la libreria del soundClassifier
}

function gotResults(error, results) { //creo la funzione con error argument e result argument
  if (error) {
    console.log('something went wrong');
    console.error(error);
  }
  resultP.html(`${results[0].label} : ${results[0].confidence}`); //ora i risultati sono una stringa
}