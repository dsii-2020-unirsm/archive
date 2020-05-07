// -
// Miss the ball by Gregorio Vaccari [vettori,game]
// 2020 © Gregorio @Gregorio-V, Daniele @Fupete and the course DSII2020 @UniRSM 
// github.com/fupete — github.com/dsii-2020-unirsm
// Educational purposes, MIT License, 2020, San Marino
// —

let numBalls = 10;
let spring = 0.05; //rimbalzo
//let gravity = 0.03;
let friction = -1; //frizione sul muro
let balls = [];
let life = 2000; //vite del giocatore
let livello = 0;
let testo = "";

function setup() {
  createCanvas(720, 400);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70), //dimensione
      i,
      balls
    );
  }
  noStroke();
  fill(255, 0, 0);
}

function draw() {
  background(0);
  
  game();
  
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.diff();
    ball.display();
    ball.mouse();
  });
  startGame();
  textSize(32);
  text(testo, 10, 30, 200,300);

}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = random(0, 4);
    this.vy = random(0, 4);
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    //this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= -1;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= -1;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= -1;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= -1;
    }
  }
  
  
  mouse() {
 
  let sbx = mouseX
  let sby = mouseY
  

  for (let i = 0; i < numBalls; i++) {
     //console.log("mouse" + sbx);


    if (sbx < this.x + this.diameter / 2 && sbx > this.x - this.diameter / 2 && sby>this.y-this.diameter/2 && sby<this.y+this.diameter/2 ) {
       this.diameter += 0.003;
       this.vx *= 1.002
      this.vy *= 1.002
      background(255);
      life -= 1;
      
    }
   }
  }

  diff(){
   //console.log( frameCount%500);
    
  if (frameCount%150==149){
      this.diameter *= 1.1;
      this.vx *= 1.1
      this.vy *= 1.1
      background(255,0,0);
      livello += 1;
  }
  }
  
  
  

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

function startGame(){
if (mouseX>0 && mouseY>0){
  
}
  else {
  livello=0;
    testo= "Evita le palle con il cursore e non uscire dal canvas"
    console.log(mouseX,mouseY,height,width,frameCount)
    
  }
} 

function game(){
if (life > 0){
testo = "Livello: " + livello ;
  }
  else {
  testo = "Game over Score: " + livello;  
  noLoop()
  }
}

