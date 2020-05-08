var inc = 0.05; // incremento ripetizione

var sizeSquared = 600; // dimensione della tela
var slashSize = 9; // grandezza deloo slash

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

  if(n < 50)
  {
    
    //line(x, y, x + slashSize, y + slashSize);
  }
  else
  {
    line(x, y + slashSize, x + slashSize, y);
  }

  x += slashSize;

  xoff += inc;

  if(x >= sizeSquared)
  {
    
    x = 0;
    xoff = 0;

    y += slashSize;
    yoff += inc;
}else
  {
    stroke( random(10,255),random(10,255), random(10,255));
    strokeWeight(1);
    line(x, y + slashSize, x + slashSize, y);
    
    noFill();
colorMode(RGB, 255, 255, 255, 1);
strokeWeight(2);
stroke(255, 0, 10, 0.3);  
  }
  
  if(n < 50)
  {
    
    line(x, y, x + slashSize, y + slashSize);
  }
  else
  {
    line(x, y + slashSize, x + slashSize, y);
  }
}