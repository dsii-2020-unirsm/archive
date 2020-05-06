let_w = 16;
let_h = 16;
let_index = 0;


function setup() {
  createCanvas(640, 384);
  background( '#0000ff' );
  strokeWeight(3);
  stroke(224);
  smooth();
}
function draw(){
createCanvas(1020, 680);
noStroke();
background(0, 0, 255);
let rows = int(pow(2, int(random(1, 6))));
let u = height / (rows + 4);
let thickness = int(pow(2, int(random(1, 4))));
let uth1 = u / thickness;
let uth2 = u + uth1;
let startX = int(-u * 0.75);
let startY = height/2 - rows/2 * u;
let endX = width+u;
let endY = height/2 + rows/2 * u;
for (let x = startX; x < endX; x += u) {
for (let y = startY; y < endY; y += u) {
if (random(1) > 0.5) {
fill(255);
quad(x, y, x+u, y+u, x+uth2, y+u, x+uth1, y);
}
else {
fill(0);
quad(x, y+u, x+u, y, x+uth2, y, x+uth1, y+u);
}
}  
}

  }