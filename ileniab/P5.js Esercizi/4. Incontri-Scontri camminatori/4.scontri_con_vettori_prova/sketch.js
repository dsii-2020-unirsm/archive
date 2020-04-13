let camminatore = []
let position;
let velocity;
let num = 5


function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < num; i++) {
    camminatore[i] = new Walker(random(width), random(height));
  }
}

function draw() {
  background(220);
  for (var i = 0; i < camminatore.length; i++) {
    camminatore[i].step();
    camminatore[i].mostrati();
    //for per cambiare i colori      
    for (var j = 0; j < camminatore.length; j++) {
      if (i != j && camminatore[i].interseca(camminatore[j])) {
        camminatore[i].cambiaColore();
        camminatore[j].cambiaColore();
        camminatore[i].scontro();
        camminatore[j].scontro();
      }
    }
  }

}

function Walker(x, y) {
  this.position = createVector(200, 200);
  this.velocity = createVector(random(1), random(2.3));

  this.position.x = x
  this.position.y = y
  
  this.r = 15
  this.t = random(50)
  this.col = color(255);

  this.cambiaColore = function() {
    this.col = color(random(255), random(255), random(255));
  }

  this.interseca = function(other) {
    this.d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    if (this.d <= this.r + other.r) //se la distanza è < della somma dei due raggi
    {
      console.log("scontro: " + this.d)
      return true;
    } else {
      return false;
    }
  }

  this.mostrati = function() {
    noStroke()
    fill(this.col)

    ellipse(this.position.x, this.position.y, this.r * 2, this.r * 2)
  }


  
  this.step = function() {

    var step = p5.Vector.random2D();

   
      step.setMag(2); //imposta grandezza vettore
    

    //costringi la posizione x all'interno della canvas
    this.position.x = constrain(this.position.x, 0 + this.r, width - this.r);

    //costringi la posizione y all'interno della canvas
    this.position.y = constrain(this.position.y, 0 + this.r, height - this.r);

    this.position.add(step); //aggiungi alla posizione lo step
  }
  
this.scontro= function(){
this.position.add(this.velocity);
this.velocity.x = this.velocity.x * -1;
this.velocity.y = this.velocity.y * -1;

}

}