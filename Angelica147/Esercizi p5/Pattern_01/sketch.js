function setup() {
  createCanvas(400, 400);
  background(255, 0, 127);
  noStroke();

for (var l=0; l<width; l+=8) {
  for (var a=0; a<height; a+=8) {
    if (random() < 0.6) {
       fill(0);
       rect(l+80, a+80, 80, 0);
       fill(0);
       rect(l,a,9,9);
      
  
}
}
}
}