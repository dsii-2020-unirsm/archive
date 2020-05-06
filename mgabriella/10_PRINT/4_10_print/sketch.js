var inc = 10; // incremento ripetizione
var sizeSquared = 600; // dimensione della tela
var slashSize = 10; // grandezza dello slash

var x = 0, y = 0;
var xoff = 0, yoff = 0;

function setup()
{  
  createCanvas(sizeSquared, sizeSquared);
  background(0);
}

function draw()
{
  var n = noise(xoff, yoff) * 100; // variazione di gradazione
   stroke(n * 255 / 100); // colore della linea
  
   x += slashSize;

  xoff += inc;

  if(x >= sizeSquared)
  {
    x = 0;
    xoff = 0;

    y += slashSize++;
    yoff -= inc;
}else
  {
    stroke( random(10,255),random(10,255), random(10,255));
    strokeWeight(1);
    
  circle( y + slashSize, x + slashSize,y,x);
    
    noFill();
colorMode(RGB, 255, 255, 255, 0.5);
//strokeWeight(10);  
  }

}