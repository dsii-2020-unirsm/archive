let x = 0;
let y = 0;
let spacing = 10;
let sweight = 1;
let width = 0;
let height = 0;
var test;
//var CharSet = "";
var sets = 
   ["voc","cons","spa"];
let scheme = ['#524E43','#64676E','#B4C5CC','#609692','#DCE1DB'];

var vocali = "aeiou";
var consonanti = "bcdfghlmnpqrstvz";  
var spazio = "_";

//converting the string into an array of single characters
vocali = vocali.split("");
consonanti = consonanti.split("");
spazio = spazio.split("");

function setup() {
	createCanvas(width = windowWidth, height = windowHeight);
	background(0);
} 

function draw() {	
	
  test = chars(); // send to get rand character
  
	fill( random(255,255,0),random(255,0,0), random(255,0,255));
	if(random(1) < 10) {	
		text( test, x, y, x + spacing,y + spacing);
	}
	else {	
		text(test,x, y + spacing, x + spacing, y);
	}
	
	x = x + spacing;	
	if(x > width) {
		x = 0;
		y = y + spacing+30;
	}
	if( y > height - (10 * spacing)){
		reset();
	}
}

 function reset(){
	createCanvas(width = windowWidth, height = windowHeight - spacing);
	background(0);
	x = 0;
	y = 0;
	draw();
}

// Called by DRAW function 
function chars()
{   var text2use; 
    CharSet = sets[Math.floor(Math.random()*sets.length)];

    if( CharSet == "voc" )
    {  text2use = vocali[Math.floor(Math.random() * vocali.length)];   
    }
    else if (CharSet == "cons")
    {  text2use = consonanti[Math.floor(Math.random() * consonanti.length)];
    }
    else if (CharSet == "spa")
    {  text2use = spazio[Math.floor(Math.random() * spazio.length)];
    }
    
    return text2use;
}
// ==========================================

window.onresize = reset;