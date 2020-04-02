let nomi = ["Faccio","volare","gli aeroplani.","... AH NO","sto nuotando","con i delfini."];

function setup() {  
  createCanvas(800, 800);  
   pixelDensity(displayDensity());  
  
  // 5 frame al secondo ... lento e scattoso ...  
  frameRate(5);  
  
  // formattazione del testo  
  textSize(50);  
  textAlign(CENTER);  
}  
  
function draw() {  
  background(0);  
    // nel centro dello schermo  
  translate(width/2, height/2);  
  
  // quale nome  
  let i = frameCount%nomi.length;  
  
  text(nomi[i], 0, 0);  
  fill(255);  
}  
