let w = 16;
let h = 16;
let index = 0;
let layer = 0;
let click = 1;


let bets = {
  x: [],
  y: []
};
let points=0

function setup() {
  frameRate(90)
  createCanvas(640, 384);
  background(0);
  strokeWeight(3);
  stroke(255);
  rectMode(CENTER);
}

function draw() {
  if (click == 0) {
    sfondo()
  }
  
}

function sfondo() {
  translate(0, -4 * layer);
  let x1 = w * index;
  let x2 = x1 + w;
  let y1 = h * 23 + (h * layer);
  let y2 = h * 24 + (h * layer);
  if (random(2) < 1) {
    square(x2, y1, 10);
  } else {
    square(x1, y2 - 3, 10);
  }
  index++;

  if (index == width / w) { //reset riga
    layer = layer - 2;
    index = 0;
  }
  if (y2 < -height / 3) {
    click = 1
    layer = 0
    bet()
  }

  //console.log(layer)
}

function mousePressed() {
  if (click > 0) {
    strokeWeight(0);
    stroke(255);
    fill('red');
    circle(mouseX, mouseY - (-4 * layer), 15)
    fill(255)
    strokeWeight(3);

    click = 0

    //return the bet

    bets.x.push(mouseX)
    bets.y.push(mouseY - (-4 * layer))

   //console.log(bets.x[0])
   //console.log(bets.y)
    
    
  }
}

function bet() {
  let c
  for (var i = 0; i < bets.x.length; i++) {
    c = get(bets.x[i], bets.y[i]);
    //console.log(c)
    if (c[0]==255&&c[1]==0&&c[2]==0){
    points = points + 1*(i+1);//sistemare punteggio co ciclo
    }
    
  }
  select('#punti').html(points + " points");
 // console.log(points);
}