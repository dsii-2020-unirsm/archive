let w = 16;
let h = 16;
let index = 0;

function setup() {
  createCanvas(640, 384);
  background('#0000ff');
  strokeWeight(3);
  stroke(224);
  smooth();
  
}

function draw() {
  let x1 = w*index;
  let x2 = x1 + w;
  let y1 = h*23;
  let y2 = h*24;
  
  if (random(2) < 1) {
    line (x2, y1, x1, y2);
  } else {
    line (x1, y1, x2, y2);
  }
  
  index++;
  if (index == width/w) {
    p = get(0, h, width, h*23); 
    background('#0000ff');
    set(0, 0, p);
    index=0;
  }
  
}