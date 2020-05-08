// 2020 © @barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup() {
  createCanvas(800,800);
  background('#463ea3');
  smooth();
 stroke('#9381de');
}

let n = 0;

function draw() {
    
      strokeWeight(3);

 if(n<width){
  for( let i = 0; i< height+10; i+=10) {
    let rand = int(random(2));
    if(rand == 0) {
      line(n,i,n+10,i+10);
    } else {
      line(n+10,i,n,i+10);
    }
  }
  }
  n+=10;  
}
