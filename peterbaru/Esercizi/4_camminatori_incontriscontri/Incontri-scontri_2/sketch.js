  // -
  // incontri scontri tra camminatori 0.2 by peterbaru [camminatori, scontri]
  // 2020 © Pietro, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
  // github.com/dsii-2020-unirsm — github.com/peterbaru
  // Educational purposes, MIT License, 2020, San Marino
  // -
  // Credits/Thanks to: 
  // @shiffman (twitter.com/shiffman) for https://shiffman.net/, https://www.youtube.com/watch?v=GY-c2HO2liA
  //-

  let camminatori = []
  let num = 6
  let rnd
  let index = 1
  let a = 1
  let altezzabarra = 30

  function setup() {

    console.log("Le sfere hanno una dimensione fittizia e il numero che le rappresenta all'interno cresce in maniera lineare. Non corrisponde al reale valore dell'area di ogni cerchio.")
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < num; i++) {
      camminatori[i] = new Walker(random(width), random(height));
    }

    rnd = random(20)
  }

  function draw() {
    background(150, 150, 150, 100);

    for (let i = 0; i < camminatori.length; i++) {
      camminatori[i].spostati()
      camminatori[i].mostrati()

      for (var j = 0; j < camminatori.length; j++) {
        if (i != j && camminatori[i].interseca(camminatori[j])) {

          camminatori[i].nuovocolore();
          camminatori[j].nuovocolore();

          camminatori[i].cresci();
          camminatori[j].cala();

          background(255, 255, 255, 100);
        }
      }
      fill(200, 150, 10)
      rect(0, height - altezzabarra, width - a, altezzabarra)
      fill(0);
      textAlign(CENTER, CENTER);

      let percentuale = int(100 - (100 * a) / width)

      text("ENERGIA MASSIMA DA SCAMBIARE", width / 2, height - (altezzabarra / 2))
      fill(0, 0, 0);
      text(percentuale + "%", width - a, height - (altezzabarra + 10))
    }
  }

  function Walker(x, y) {
    this.x = x
    this.y = y
    this.r = 20
    this.dim = 50
    this.valore = parseInt(a)
    this.t = random(50)
    this.col = color(255)

    this.nuovocolore = function() {
      this.col = color(random(255), random(255), random(255))
    }

    this.interseca = function(altra) {
      var d = dist(this.x, this.y, altra.x, altra.y)
      if (d < this.r + altra.r) {
        return true;
      } else {
        return false;
      }
    }

    this.mostrati = function() {
      noStroke()
      fill(this.col);
      ellipse(this.x, this.y, this.r*2, this.r*2)
      //fill(0);
      //text(this.valore, this.x, this.y)
    }

    this.spostati = function() {
      this.x = noise(this.t) * width
      this.y = noise(this.t + 5) * height
      this.t += 0.01
    }

    this.cresci = function() {
      this.r += 1
      a += 0.2
      this.valore += 1

      if (a > width) {
        alert("energia da scambiare superata: premi 'OK' per ripartire")
        setup()
        a = 0
      }
    }
    this.cala = function() {
      this.r -= 1
      this.valore -= 1
    }
  }
