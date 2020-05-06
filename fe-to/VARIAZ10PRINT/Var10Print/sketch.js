// Pattern 10PrintVar by Federico Topa
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

 x = 0;
 y = 0;
 let grandezza = 20;
 let r;

 function setup() {
   createCanvas(1500, 1500);
   frameRate(2);
   background(0);
 }

 function draw() {

   background(random(255), random(50), random(250));
   rectMode(CENTER);
   for (i = 0; i < width; i += grandezza) {
     for (j = 0; j < height; j += grandezza) {

       r = random(5);

       if (r < 3) {

         fill(0);
         rect(x + i, y + j, grandezza, grandezza);
       }
     }
   }
 }