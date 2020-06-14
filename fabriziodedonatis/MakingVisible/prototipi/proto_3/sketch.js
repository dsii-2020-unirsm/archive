// -
// interfaccia proto v1.0 by Fabrizio De Donatis [keyword1, keyword2]
// 2020 © Fabrizio De Donatis, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
//
// questa interfaccia servirà al progetto per selezionare strumenti e colori
// —

var w, h;
var tlbr = 25;
var trbl = 5;
var spazioX, spazioY;
var menu_strum = [];
var menu_col = [];
var hue2, sat, light;
var w_int = 60;
var h_int = 60;
var colore = 160;
var alfa = 260;

function setup() {
  colorMode(HSL, 360);
  w = windowWidth;
  h = windowHeight;
  spazioX = w * 0.05;
  spazioY = w * 0.01;
  createCanvas(w, h);
  menu_strum[0] = new Testo();
  menu_strum[1] = new Pennellino();
  menu_col[0] = new Nero();
  menu_col[1] = new MultiCol();

}

function draw() {
  background(220);
  menu_strum[0].display();
  menu_strum[1].display();
  menu_col[0].display();
  menu_col[1].display();

  colore = map(mouseX, menu_col[1].x, menu_col[1].x + menu_col[1].w, 0, 360, true);
  console.log(colore);
  menu_col[1].changeColor();

  for (i = 0; i < menu_strum.length; i++) {
    var d = dist(mouseX, mouseY, menu_strum[i].x + menu_strum[i].w / 2, menu_strum[i].y + menu_strum[i].h / 2)
    if (d < menu_strum[i].w / 2) {
      menu_strum[i].alfa = 0;
    } else {
      menu_strum[i].alfa = 260;
    }
  }
} //--fine draw  

function Testo() {
  this.nome = "testo";
  this.stato = false;
  this.w = w_int;
  this.h = h_int;
  this.x = spazioX;
  this.y = spazioY;
  this.colore = color(180, 20, 300)
  this.alfa = alfa;

  this.display = function() {
    push();
    stroke(100);
    fill(this.colore);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    push()
    fill(0);
    textSize(45);
    textAlign(CENTER);
    text('t', this.x + this.w / 2, this.y + this.h * 0.7);
    pop()
    pop()
    push();
    stroke(100);
    fill(180, 20, 300, this.alfa);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    pop();


  }
}

function Pennellino() {
  this.nome = "pennellino";
  this.stato = false;
  this.w = w_int;
  this.h = h_int;
  this.x = menu_strum[0].x + spazioX * 2.5;
  this.y = spazioY;
  this.colore = color(180, 20, 300);
  this.alfa = alfa;
  this.display = function() {
    push();
    stroke(100);
    fill(this.colore);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    pop();
    push()
    noFill();
    stroke(0, 0, 0);
    translate(this.x, this.y);
    bezier(45, 10, 10, 10, 70, 60, 10, 35);
    pop()
    push();
    stroke(100);
    fill(180, 20, 300, this.alfa);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    pop();

  }
}

function Nero() {
  this.nome = "nero";
  this.stato = false;
  this.w = w_int;
  this.h = h_int;
  this.x = menu_strum[1].x + spazioX * 3;
  this.y = spazioY;
  this.colore = color(0, 0, 0)

  this.display = function() {
    push();
    stroke(100);
    fill(this.colore);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    pop();
  }
}

function MultiCol() {

  this.nome = "colorato";
  this.stato = false;
  this.w = w * 0.4;
  this.h = h_int;
  this.x = menu_col[0].x + spazioX * 2.5;
  this.y = spazioY;
  this.colore = color(colore, 100, 100);
  // colore= map(mouseX, this.x, this.w , 0, 360, true);

  this.changeColor = function() {
    this.colore = color(colore, 360, 200);
  }
  //colore= map(mouseX, this.x, this.x+this.w , 0, 360, true);
  console.log(colore);


  this.display = function() {
    push();
    stroke(100);
    fill(this.colore);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    pop();
  }
}