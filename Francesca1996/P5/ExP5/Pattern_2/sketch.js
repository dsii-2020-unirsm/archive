// PatternSquare  by francy96 @Francesca1996
// 2020 © Francesca Donati, Daniele @Fupete and the course DSII2020 at DESIGN. unirsm 
// github.com/Francesca1996 — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

//mouseX inverte i colori delle forme
//mouseY cambia la dimensione dello stroke delle forme

let numero = 20;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  //background(220);
  //colorMode(RGB, 255, 255, 255);
  
  strokeWeight(mouseY/numero);
  
  for (let x = 0; x < numero; x ++){   
    for(let y = 0; y < numero; y++){
     
      let posizioneX = width / numero * x;    
      let posizioneY = height / numero * y;  //creo la griglia di rect
      
      if ((x + y) % 2 != 0){  //creo scacchiera
      fill(0 + mouseX)  
      rect(posizioneX, posizioneY, numero*2, numero*2); 
        
      fill(255 - mouseX);
      rect(posizioneX, posizioneY, numero, numero);  
        
      } else {
      fill(255 - mouseX)
      rect(posizioneX, posizioneY, numero*2, numero*2); 
      
      fill(0 + mouseX);
      rect(posizioneX, posizioneY, numero, numero); 
      }  
    }
  }
}


