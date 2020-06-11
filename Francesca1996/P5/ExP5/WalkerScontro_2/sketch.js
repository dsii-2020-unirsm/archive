// -
// Walkerscontro2 by FrancescaDonati [walkers, meeting-crash]
// 2020 © FrancescaDonati @Francesca1996, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete - github.com/Francesca1996
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @Shiffman (github.com/shiffman) for youtube.com/user/shiffman
// original license: MIT License
// 
// @Monogrid (mono-grid.com/en/) for instagram.com/monogrid/?hl=it 
// —
//
// Help:
// [mouse] generate object
// [keyboard] delete object
//
// —


//-----------------------------CODE

let objects = []; //array inizialmente vuoto
let d;
let numberObjects = 10;
let t = 0;

//-----------------------------SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  console.log("ISTRUZIONI");
  console.log("1. premi il mouse per generare;");
  console.log("2. premi un pulsante sulla tastiera per eliminare.");
  
  for (let i = 0; i < numberObjects; i ++){
    //posizione randomica allo start
    objects[i] = new Objects(random(width), random(height));
  }
  //variabile del noise
  t += 0.01 
}

//-----------------------------cosa posso fare
//click mouse genere oggetti
function mousePressed() {
  objects.push(new Objects(mouseX,mouseY));
}

//premi un qualsiasi pulsante sulla tastiera elimini un oggetto
function keyPressed() {
  objects.splice(0, 1);
}

//-----------------------------DRAW
function draw() {
  background(255);
  
  //per ogni oggetto fa queste cose
  for (let i = 0; i < objects.length; i ++){
    objects[i].movimento();
    objects[i].display();
    
    // devo controllare che tutti si intersecano tra tutti oppure no
    // per ogni oggetto checka un altro oggetto
    for (let j = 0; j < objects.length; j++){
      
      //ma un oggetto non deve controllare se stesso
      // quindi se i != j
      if (i != j && objects[i].collisione(objects[j])) {
        objects[i].changeColor();
        objects[j].changeColor();
      }
    }
  }
}

// -------------------- Objects
function Objects (x, y, amp, id, others) {
  this.x = x;
  this.y = y;
  this.r = 10; //raggio
  this.others = others;
  //this.ampiezza = amp; //this.diameter = din;
  this.id = id;
  this.col = color(0, 200, 200, 150);
  
  //speed randomica
  this.xspeed = random(-4, 4);
  this.yspeed = random(-4, 4);
  
  //cambia colore 
  this.changeColor = function (){
    this.col = color(255, 100, 0, 150)
  }

  this.collisione = function (other) {
    d = dist(this.x, this.y, other.x, other.y);
    
    if (d <= this.r + other.r) {
      //se si toccano parte il random
      //se è minore di 1 il raggio diminuisce
      //altrimenti aumenta
      
      //cambio direzione
      this.xspeed = this.xspeed * -1;
      this.yspeed = this.yspeed * -1;
      
      if (random(2) < 1) {
        this.r = this.r - 0.3;
      } else {
        this.r = this.r + 0.3;
      }
      return true;
    } else {
      return false;
    }
  }

  this.display = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r *2);
  }
  
  this.movimento = function(){
    this.x = this.x + this.xspeed * noise(t);
    this.y = this.y + this.yspeed * noise(t);
    
    //così torna indietro
    if (this.x > width - this.r || this.x < this.r) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.yspeed = this.yspeed * -1;
    }
  }
}
