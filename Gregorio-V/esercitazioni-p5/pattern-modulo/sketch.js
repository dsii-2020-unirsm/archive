// -
// Pattern, controlled or caotic by Gregorio Vaccari [modulo]
// 2020 © Gregorio @Gregorio-V, Daniele @Fupete and the course DSII2020 @UniRSM 
// github.com/fupete — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino
// —

// Click to change mode. Controlled or caotic.

var div
var row
var columns
var mode = true
var corner = 3


function setup() {
  
  createCanvas(windowWidth, windowWidth);
  background(220);
  
  row = random(15,20)
  columns = random(15,20)
  
  
  
}

function draw() {
  if(mode===false){
  sfondo_caos()
  } else {
  sfondo_controll()
  }
  
}

function mouseClicked() {
  if (mode===true){
    mode = false}
  else{ mode=true}
}


function sfondo_caos() {
  frameRate(7)
  for (var x = 0; x < row; x++) {
    for (var y = 0; y < columns; y++) {
      var posX = x * (width / row)
      var posY = y * (height / columns)

      fill(random(255), random(20, 30), random(50, 60))
      strokeWeight(random(1,4))
      stroke(255)
      rect(posX, posY, width / row, height / columns,corner)
      
      var dado = ceil(random(10))
      if (dado == 3) { //linea verticale
        line(posX + (width / row) / 2,
          posY,
          posX + (width / row) / 2,
          posY + (height / columns)
        )
      } else if (dado == 2) { // linea orizzontale
        line(posX,
          posY + (height / columns) / 2,
          posX + (width / row),
          posY + (height / columns) / 2
        )
      } else if (dado == 4) { // doppia riga
        line(posX,
          posY + (height / columns) / 2,
          posX + (width / row),
          posY + (height / columns) / 2
        )
        line(posX + (width / row) / 2,
          posY,
          posX + (width / row) / 2,
          posY + (height / columns)
        )
      }

    }
  }
}

function sfondo_controll() {
  frameRate(1)
  for (var x = 0; x < row; x++) {
    for (var y = 0; y < columns; y++) {
      var posX = x * (width / row)
      var posY = y * (height / columns)

      fill(random(20,30), random(50, 60), random(255))
      
      stroke(255)
      rect(posX, posY, width / row, height / columns, corner)
      
      
      if (x%7 == 0 || y%7 == 0) { //linea verticale
        line(posX + (width / row) / 2,
          posY,
          posX + (width / row) / 2,
          posY + (height / columns)
        )
      } else if (x%6 == 0 || y%6 == 0) { // linea orizzontale
        line(posX,
          posY + (height / columns) / 2,
          posX + (width / row),
          posY + (height / columns) / 2
        )
      } else if (x%5 == 0 || y%5 == 0) { // doppia riga
        line(posX,
          posY + (height / columns) / 2,
          posX + (width / row),
          posY + (height / columns) / 2
        )
        line(posX + (width / row) / 2,
          posY,
          posX + (width / row) / 2,
          posY + (height / columns)
        )
      }

    }
  }

}


