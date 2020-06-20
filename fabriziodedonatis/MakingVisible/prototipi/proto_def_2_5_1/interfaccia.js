/* qui risiede l'interfaccia grafica di controllo*/

var tlbr = 25;
var trbl = 5;
var spazioX, spazioY;
var menu_strum = [];
var menu_col = [];
var hue2, sat, light;
var w_int = 60;
var h_int = 60;
var colore = 160;
var alfa = 100;


//-----ELEMENTI-------
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
    pop();
    push();
    fill(180, 0, 0, this.alfa);
    textSize(45);
    textAlign(CENTER);
    text('t', this.x + this.w / 2, this.y + this.h * 0.7);
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
    stroke(180, 0, 0, this.alfa);
    strokeWeight(2);
    translate(this.x, this.y);
    bezier(45, 10, 10, 10, 70, 60, 10, 35);
    pop()
    

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
  this.colore2 = color(colore, 100, 100);
  // colore= map(mouseX, this.x, this.w , 0, 360, true);

  this.changeColor = function() {
    this.colore = color(colore, 360, 200);
   // this.colore2 = color(colore, 360, 200);
  }
  //colore= map(mouseX, this.x, this.x+this.w , 0, 360, true);
  


  this.display = function() {
    push();
    stroke(100);
    fill(this.colore);
    rect(this.x, this.y, this.w, this.h, tlbr, trbl, tlbr, trbl);
    pop();
    push();
    fill(this.colore2);
    rect(this.x, this.y+this.h*0.6, this.w, this.h*0.4, tlbr, trbl, tlbr, trbl);
    pop();
  }
}