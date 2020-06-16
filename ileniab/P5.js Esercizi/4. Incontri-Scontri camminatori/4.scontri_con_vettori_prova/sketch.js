// -
// incontro scontro prima prova con vettori by Ilenia Balella 
// 2020 © Ilenia Balella @ileniab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/ileniab
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @shiffman (https://github.com/shiffman) for https://shiffman.net/, https://www.youtube.com/watch?v=GY-c2HO2liA, https://www.youtube.com/watch?v=uAfw-ko3kB8
//-
// Help:
//[mouse clicked]: aggiungi un elemento
//
// quando si scontrano le palline, cambiano colore, aumentano di dimensione e si respingono. Se il raggio è superiore a 15 si trasformano in un quadrato

let camminatore = []
let position;
let velocity;
let num = 15;
let t = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  for (var i = 0; i < num; i++) {
    camminatore[i] = new Walker(random(width), random(height));
  }
}

function draw() {
  background(255, 150, 113, 85);
  for (var i = 0; i < camminatore.length; i++) {

    //for per cambiare i colori      
    for (var j = 0; j < camminatore.length; j++) {
      if (i != j && camminatore[i].interseca(camminatore[j])) {
        camminatore[i].scontro();
        camminatore[j].scontro();
        
        camminatore[i].cambiaColore();
        camminatore[j].cambiaColore();

        


      }
    }

    camminatore[i].step();
    camminatore[i].mostrati();
  }

}

//se premo il mouse mi aggiunge un camminatore sulle coordinate del cursore----------------------------------------

function mousePressed() {
  camminatore.push(new Walker(mouseX, mouseY));
}

//------------------------------------------------------------------------------------

function Walker(x, y) {

  this.xspeed = random(-4);
  this.yspeed = random(4);

  this.x = x;
  this.y = y;

  this.r = 10;
  this.ipotenusa = Math.sqrt((this.r * this.r) + (this.r * this.r));



  this.t += 0.01;

  this.col = color(214, 93, 177);

  this.interseca = function(other) {
    this.d = dist(this.x, this.y, other.x, other.y);


    if (this.d <= this.r + other.r || this.id <= this.ipotenusa + other.ipotenusa) //se la distanza è < della somma dei due raggi o della domma delle ipotenuse
    {
      console.log("scontro: " + this.d)

      this.r = this.r + 0.01 //incrementa il diametro se si intersecano

      return true;

    } else {
      return false;
    }
  }


  this.cambiaColore = function() {
    this.col = color(132, 94, 194);

  }



  this.mostrati = function() {
    if (this.r < 15) {

      noFill();
      stroke(this.col)
      strokeWeight(2);

      ellipse(this.x, this.y, this.r * 2, this.r * 2)
    } else {
      noStroke();
      fill(255, 111, 145);
      rect(this.x, this.y, this.r * 2, this.r * 2)

    }
  }



  this.step = function() {

    this.x = this.x + this.xspeed * noise(t);
    this.y = this.y + this.yspeed * noise(t);

    //così torna indietro
    if (this.x > width - this.r || this.x < this.r) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > height - (this.r * 2) || this.y < (this.r * 2)) {
      this.yspeed = this.yspeed * -1;
    }
  }

  this.scontro = function() {
    this.xspeed = this.xspeed * -1;
    this.yspeed = this.yspeed * -1;

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
