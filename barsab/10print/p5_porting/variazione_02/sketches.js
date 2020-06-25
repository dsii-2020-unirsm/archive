// -
// 10 print variation 0.2 by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —


let w = 16;
let h = 16;
let n=8;
x= 0;
y=0;


function setup() {
	  createCanvas(windowWidth, windowHeight);
      background(255);	 
	  strokeWeight(4);
      frameRate(1);
}
  
function draw(){
   for (let y=1;  y<height;  y+=40) {
         for (let x=1;  x<width;  x+=40) {
			z = int(random(4)); 

            if (z == 0) {
			  stroke(0,0,0);
               line( x, y+h, x+h,y );    // disegna  /          
            } else if (z == 1){
				stroke(255,0,0);
               line( x, y, x+h,y+h );   // disegna  \
			} else if (z == 2){
			   stroke('yellow');
               line( x+n, y, x+n,y+h );  // disegna  |
			} else {
			   stroke(0,0,255);
               line( x, y+n, x+16,y+n );  // disegna  --
            }  
         }
   }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
