// Covid-19, Hashtag Array. by Federico Topa
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino


function setup() {
createCanvas(1500, 1500);
  frameRate(60);
  background(0);

}

function draw() {	
let parole = ['#covid-19' , '#corona' , 'annoying' , '#virus' , '#home' , '#stay' , '#contagio', '#quarantena' , '#misenti?' , '#my' , '#friends' , '#and' , '#girlfriend' , '#again', '#F***', '#sex'];
let parola = random(parole);
let a = random(1, 3000);
let b = random(1, 3000);
let c = random(1, 3000);
	fill(0,0,255);
  textSize(random(1, 80));
  text(parola, a, b, c); 
	loop();
}