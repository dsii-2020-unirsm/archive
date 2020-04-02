let step = 1;  
let stepR = radians(step);  

function setup() {  
  createCanvas(800, 800);  
  pixelDensity(displayDensity());  
  
  // tipo linea  
  noStroke();  
  strokeWeight(2);  
  strokeJoin(ROUND);  
  
  // formattazione colore  
  colorMode(HSB);  
  
  // colore di riempimento iniziale = rosso  
  fill(0, 255, 255);  
}  

function draw() {  
  background(0);  
  // per tutti i 360 gradi, ogni "step" gradi fai...  
  for (let a = 0; a <= 360; a += step) {  
    
    // riempimento e linea del tono della ruota colori  
    fill(a, 255, 255);  
    stroke(a, 255, 255);  
    
    // angolo in radianti per disegnare un arco  
    let aR = radians(a);  
    let stepR = radians(step);  
    
    // arco della sfumatura e dell'angolo, ci si somma "step" in radianti ogni pezzo di "torta"  
    arc(width/2, height/2, 500, 500, aR, aR+stepR, PIE);  
  }  
    // e poi un bel cerchio nero per fare un anello  
  noStroke();  
  fill(0);  
  ellipse(width/2, height/2, 200, 200);  
}  
