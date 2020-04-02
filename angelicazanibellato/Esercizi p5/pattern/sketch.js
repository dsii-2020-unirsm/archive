// generatore di pattern by angelicazanibellato
// 2019 © Angelica Zanibellato, Daniele @Fupete and the course DSII2019 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

function setup(){
createCanvas(500,500);
  
}

function draw(){

  background(255, 204, 0);
  ellipseMode(CENTER);
  
 for(let r=0;r<=width;r+=50){
  for(let c=0;c<=height;c+=50){
     
     frameRate(8);
     strokeWeight(1);
     stroke(255);
     fill(random(0,190), random (0,156), random (0,255));
  
     ellipse(c,r,(frameCount%6) * 10, 50);

    }
  }
  
 
  
}