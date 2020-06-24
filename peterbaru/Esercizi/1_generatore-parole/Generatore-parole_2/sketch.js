// -
// Generatore casuale di parole 0.4 by peterbaru [parole, random]
// 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
//
// Help:
// [mouse_pressed] se il mouse viene premuto si ferma su una parola
// [key_pressed] se viene premuto un tasto della tastiera si riattiva
//
// —

// generatore casuale di parole, ogni volta che viene premuto il mouse
// il loop si ferma e rimane fissa sullo schemro una parola.
// se viene premuto un tasto della tastiera il loop riparte generando
//  altre parole.

//creo array contententi le sillabe
  let sillabe = ["ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "che", "chi","da", "de", "di", "do", "du", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ghe", "ghi", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "pa", "pe", "pi", "po", "pu", "qu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "va", "ve", "vi", "vo", "vu", "za", "ze", "zi", "zo", "zu", "con",  ];

let sillabefinali = ["ba", "be", "bi", "bo", "ca", "ce", "ci", "co", "che", "chi","da", "de", "di", "do", "fa", "fe", "fi", "fo", "ga", "ge", "gi", "go", "ghe", "ghi", "la", "le", "li", "lo", "ma", "me", "mi", "mo", "na", "ne", "ni", "no", "pa", "pe", "pi", "po", "ra", "re", "ri", "ro", "sa", "se", "si", "so", "ta", "te", "ti", "to", "va", "ve", "vi", "vo", "za", "ze", "zi", "zo", "gna", "gne", "gni",  "gno", "gli"]

let parola = "";

let definizione = "";

let categoria = ["animale", "insetto", "luogo", "posto", "persona", "mammifero", "oggetto", "utensile", "elemento", "abito", "albero", "pianta", "edificio", "pietanza", "opera", "mezzo", "raccolta", "periodo", "era", "sistema"]

let verbo = ["genera", "ascolta", "si trova su", "condivide", "ammira", "sollecita", "apprezza", "disprezza", "scopre", "soregge", "guarda", "stringe", "collega", "si trova dentro", "separa", "fa partire", "comincia", "copre", "sovrasta"]

let complemento_ogg = ["le case", "i rumori", "le fronde", "i tramonti", "le persone", "le macchine", "i computer", "gli occhiali", "le montagne", "i colori", "le nazioni", "le statue", "gli edifici"]


function setup() {
  createCanvas(windowWidth, 500);
  textAlign(CENTER, CENTER);
  frameRate(10);
  fill(225);
  console.log("premi il mouse sullo schermo per selezionare una parola e leggerne la definizione")
}

function draw() {
  background(0);
  
  //definisco la sillaba iniziale con cui viene composta la parola
  parola = random(sillabe);
  
  //vengono definite il numero di sillabe interne che deve avere la
  //parola (la prima e l'ultima sono definite indipendentemente)
  numerosillabe = int(random(0,3));
  
  //ciclo for che scrive le sillabe a seconda del numero estratto
  for (let i=0; i<numerosillabe; i++){
  sillaba = random(sillabe);
  parola += sillaba ; 
}
  
  //inserimento sillaba finale 
  parola += random(sillabefinali);
  
  //scrittura parola 
  textFont('Courier New', 32);
  text (parola, width/2, height/3)
  
 let verbo1 = random(verbo)
 let verbo2 = random(verbo)
  
 let complemento_ogg1 = random(complemento_ogg)
 let complemento_ogg2 = random(complemento_ogg)
  
      
  if(mouseIsPressed) {
  fermaLoop();
    if (verbo1 != verbo2 && complemento_ogg1 != complemento_ogg2){
  definizione = random(categoria) + " che " + verbo1 + " "+ complemento_ogg1 + " e " + verbo2 + " " + complemento_ogg2 
    console.log("ora premi una qualsiasi lettera della tastiera per farlo ripartire")
    }
  textFont('Helvetica', 20);
    text("Parola:", width/2, (height*(1/3))-40)
    text("Definizione:", width/2, (height*(2/3))-40)
  text(definizione, width/2, height*(2/3))
       }
}

function fermaLoop() {
noLoop()
}

//se la tastiera viene premuta le parole ripartono
function keyPressed() {
  loop();
  draw();
    console.log("quando vuoi ripremi il mouse per visualizzare un'altra parola")
}