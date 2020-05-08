// Camminatori IncontrieScontri(2). by Federico Topa 
//basato sul codice di Keith Peters. Multiple-object collision..Example P5
// 2020 © fe-to, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino

let numBalls = 150;
let spring = 1.5; //forza del rimbalzo tra le ball, le fa rimbalzare
let friction = -1; //forza del rimbalzo alle pareti
let balls = [];

function setup() {
  createCanvas(720, 400);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(3, 7), //dimensione
      i,
      balls
    );
  }
  noStroke();
  fill(0, 0, 255);
}

function draw() {
  background(0);
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();

  });
}

class Ball {
  constructor(xin, yin, din, idin, oin) { //x,y,diametro,id,other
    this.x = xin;
    this.y = yin;
    this.vx = 0; //velocità x
    this.vy = 0; // velocità y
    this.diameter = din;
    this.id = idin;
    this.others = oin;

  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy); //trova la distanza tra se stesso e gli altri
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) { //se la distanza è minore e quindi si toccano 
        //console.log("2");

        let angle = atan2(dy, dx); //arco tangente 2
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

    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2; //falla tornare indietro
      this.vx *= friction; //e la velocità x di = alla friction per la friction
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}