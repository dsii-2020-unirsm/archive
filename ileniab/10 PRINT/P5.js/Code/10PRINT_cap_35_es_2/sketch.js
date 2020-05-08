function setup() {
  createCanvas(500, 500);
}

function draw() {
    
  noStroke();
  background(0, 255, 235);
  
  rows = int(pow(2, int(random(1, 2))));
  u = height / (rows + 1); /*altezza*/
  thickness = int(pow(2, int(random(1, 2)))); /**/
  uth1 = u / thickness;
  uth2 = u + uth1;
  startX = int(-u * 0.75);
  startY = height/2 - rows/2 * u;
  endX = width+u;
  endY = height/2 + rows/2 * u;
  
  for (x = startX; x < endX; x += u) {
  for (y = startY; y < endY; y += u) {
  if (random(1) > 0.5) {
      fill(255, 0, 0);
      quad(x, y, x+u, y+u, x+uth2, y+u, x+uth1, y);
      }
  else {
      fill(203,0,250);
      quad(x, y+u, x+u, y, x+uth2, y, x+uth1, y+u);
      }
  }
  }
}

