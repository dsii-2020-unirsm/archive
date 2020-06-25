// -
// Paesaggio sensibile by barsab
// 2020 © barsab, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm
// github.com/dsii-2020-unirsm — github.com/fupete 
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// Dandelion Entity Extraction API for https://dandelion.eu/  
// Ml5 for https://learn.ml5js.org/docs/#/reference/object-detector
// ML5 for https://learn.ml5js.org/docs/#/reference/sentiment



// sentiment analysis
let sentiment;
let valore_sentimento;
let inputBox;
let sentimentResult;
let sendButton;

//cocossd
let video;
let detector;
let detections;

//entity extraction
let hashtag;

//albero arrabbiato
let angle
let startWeight = 11;

//albero neutro

var maxLevel = 7; // La quantità di rami nidificati che suddividerà. 
var rootBranch = null;
var debug = false;

//albero felice
let colors = ["#FFFF00", "#00FFFF", "#FF00FF"];

function setup() {
  //coco
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.size(width, 380);
    video.hide();
    detector = ml5.objectDetector('cocossd', modelReady1)

  // initialize sentiment
  sentiment = ml5.sentiment('movieReviews', modelReady);

  // setup the html sentiment
  console.log('Loading Model...');
  inputBox = createInput('Raccontami ciò che senti');
  inputBox.size(width-60, 40);
  inputBox.position(width/10-60/2, height/2+40);
  sendButton = createButton('INVIA');
  sendButton.position(width/2-105/2, height/2+100);
  sendButton.size(105,30);
  sendButton.style('color: #94DECF');
  sendButton.style('background-color: #FFFFFF');
  sendButton.style('border: none');
  sendButton.style('border-radius: 20px');
  sendButton.style('box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)');
  // predicting the sentiment on mousePressed()
  sendButton.mousePressed(getSentiment);
}

//coco
function modelReady1(){
  console.log('model COCO loaded')
  detect();
}

function detect(){
  detector.detect(video, gotResults);
}

function gotResults(err, results){
  if(err){
    console.log(err);
    return
  }

  detections = results;

  detect();
}

// sentiment analysis
function getSentiment() {
  // get the values from the input
  const text = inputBox.value();

  // make the prediction
  const prediction = sentiment.predict(text);

  // display sentiment result
  valore_sentimento = int((prediction.score) * 100);
  console.log("prediction: " + valore_sentimento);
  console.log("sentiment:" + prediction.score);
  keywords();
}

function modelReady() {
  // model is ready
  console.log('model SENTIMENT loaded');
}
  
//entity extraction
  function keywords(){
loadJSON('https://api.dandelion.eu/datatxt/nex/v1/?lang=en%20&text='+inputBox.value()+'&include=types%2Cabstract%2Ccategories%2Clod&include=image&min_confidence=0,0&token=5db5cba74eb741bba4068e13c54c917b', gotData);
}

function gotData(datatxt) {
  for (let i = 0; i < datatxt.annotations.length; i++) {
    let keyword = datatxt.annotations[i].spot;
    console.log(' '+ keyword );
    hashtag = createP('keywords: ');
    hashtag.html(' #' + keyword + " ");
    //hashtag.position(width/2, height/2);
    hashtag.style('float: left');
  }
}

function draw() {
    background(148, 222, 207);
    image(video, width/2-480/2, 0, 480, 360);
    if (detections) {
      detections.forEach(detection => {
        noStroke();
        fill(255);
        strokeWeight(2);
        text(detection.label, detection.x + 4, detection.y + 10)

        noFill();
        strokeWeight(3);
        if(detection.label === 'person'){
          stroke(0, 255, 0);
        }else if(detection.label === 'bottle' && valore_sentimento <= (35)) {
          alberoarrabbiato();
        }
        else if(detection.label === 'bottle' && valore_sentimento <= (66)) {
          alberotriste();
        }
         else if(detection.label === 'bottle' && valore_sentimento <= (100)) {
          alberofelice();
        }
          else {
          stroke(0,0, 255);
        }
        //rect(detection.x, detection.y, detection.width, detection.height);  
      })
    } 
}

function alberoarrabbiato(){
          colorMode(RGB);
          translate(width / 2, height)
          angle = 0.54
          stroke(50, 50, 250)
          ramo(150, startWeight)
          translate(0, -150)
  function ramo(length, weightIn) {
    let weight = weightIn - 1
    strokeWeight(weight)
    line(0,0,0, -length)
    translate(0, -length)
    if (length > 8) {
        push()
            rotate(angle)
            ramo(length * 0.67, weight)
        pop()
        push()
            rotate(-angle)
            ramo(length * 0.67, weight)
        pop()
        push()
            rotate(-angle -angle)
            ramo(length * 0.67, weight)
        pop()
    }
  }
}

function alberotriste(){
  colorMode(HSB, 255);
  generateNewTree();
  push();
		translate(width / 2, height - height / 4);
		treeIterator(rootBranch, 0, 0, 0);
	pop();
	noStroke();
  // La posizione di un ramo è sempre relativa al suo genitore.
function Branch(length, angle, level) {
	this.vel = 0;
	this.acc = 0
	this.level = level;
	this.angle = angle;
	this.restAngle = angle;
	this.length = length;
	this.children = [];
	this.leaves = [];
	
	// Se il ramo è abbastanza alto, inizia a generare foglie e bacche.
	if (this.level > maxLevel - 3) {
		for (let i = 0; i < int(random(6)); i++) {
			if (i % 6 == 0) {
				this.leaves.push(new Berry());
			} else {
				this.leaves.push(new Leaf());
			}
		}
	}
	
	// Aggiunge un nuovo ramo come figlio.
	this.newBranch = function(angle, mult) {
		let newBranch = new Branch(this.length * mult, angle, this.level + 1)
		this.children.push(newBranch);
    return newBranch;
	}
	
	// Acquista una nuova velocità.
	this.applyForce = function(force) {
    this.acc += force;
	}
	
	// Simula il suo nuovo angolo.
	this.move = function() {
		// Aggiunge un po 'di vento debole in modo che ci sia un movimento sottile quando è inattivo.
		let windMult = map(this.level, 0, maxLevel, 0.1, 1) * random(0.75, 1.25);
		let wind = noise(frameCount * 0.002) * 0.5 * windMult;
		this.applyForce(wind);
		
		// Fai sempre in modo che l'angolo ritorni alla sua posizione di partenza.
		// Questo è ciò che fa rimbalzare i rami.
		let angleThresh = 10;
		let spring = new p5.Vector(this.restAngle, 0);
		let distance = dist(this.angle, 0, this.restAngle, 0);
		spring.sub(new p5.Vector(this.angle, 0));
		spring.normalize();
		this.applyForce(spring.x);
		
	}
}
// La posizione di una foglia è sempre relativa al suo ramo genitore.
function Leaf() {
	this.hue = random(70, 90);
	this.sat = random(130, 150);
	this.val = random(150, 220);
	this.opacity = random(20, 70);
	this.size = random(10, 60);
	this.offsetX = random(-10, 10);
	this.offsetY = random(-10, 10);
}
// La posizione di una bacca è sempre relativa alla sua filiale madre.
function Berry() {
	this.hue = random(0, 25);
	this.sat = random(200, 255);
	this.val = random(200, 230);
	this.opacity = random(150, 200);
	this.size = random(3, 8);
	this.offsetX = random(-5, 5);
	this.offsetY = random(-5, 5);
}
// Prende un ramo e genera nuovi rami che partiranno da esso.
// Questa è una funzione ricorsiva che costituisce la struttura dell'albero.
function subDivide(branch) {
  let newBranches = [];
  let newBranchCount = int(random(1, 4));
  let minLength = 0.7;
  let maxLength = 0.85;
  
	// Gli angoli cambieranno a seconda di quanti nuovi rami verranno creati.
  if (newBranchCount == 2) {
		newBranches.push(branch.newBranch(random(-45.0, -10.0), random(minLength, maxLength)));
		newBranches.push(branch.newBranch(random(10.0, 45.0), random(minLength, maxLength)));
	} else if (newBranchCount == 3) {
		newBranches.push(branch.newBranch(random(-45.0, -15.0), random(minLength, maxLength)));
		newBranches.push(branch.newBranch(random(-10.0, 10.0), random(minLength, maxLength)));
		newBranches.push(branch.newBranch(random(15.0, 45.0), random(minLength, maxLength)));
	} else {
		newBranches.push(branch.newBranch(random(-45.0, 45.0), random(minLength, maxLength)));
  }
	
	// Se i nuovi rami non hanno ancora raggiunto il livello massimo, genera nuovi rami da loro.
  for (let i = 0; i < newBranches.length; i++) {
    if (newBranches[i].level < maxLevel) {
      subDivide(newBranches[i]);
    }
  }
}


// Crea un nuovo albero. Il primo ramo è sempre verticale al centro della scena.
function generateNewTree() {
	rootBranch = new Branch(random(80.0, 150.0), -90, 0);
  subDivide(rootBranch);
}


// Una funzione ricorsiva per visualizzare l'albero.
// Usa `push` e` pop` in modo che non dobbiamo occuparci di posizioni reali.
// Invece ci preoccupiamo solo della lunghezza e dell'angolo di un ramo in modo da poterli posizionare relativamente.
function treeIterator(branch, worldX, worldY, worldA) {
	// Anche se `push` e` pop` aiuteranno * a visualizzare * l'albero, abbiamo ancora bisogno di un mezzo per interagire con esso.
	// Quindi, per interagire con il mouse, dobbiamo tenere traccia della posizione / rotazione dell'attuale ramo.
	worldA += branch.angle;
	
	let vec = new p5.Vector(branch.length, 0);
	vec.rotate(radians(worldA));
	
	worldX += vec.x;
	worldY += vec.y;
	
	push();
		stroke(15, 100, 150 * map(branch.level, 0, maxLevel, 1, 1.5));
		strokeWeight(maxLevel - branch.level + 1);
		
		// Spingi il ramo se è a distanza del mouse.
		let d = dist(mouseX, mouseY, worldX + width / 2, worldY + height - height / 4);
		let distThresh = 250;
		if (d < distThresh) {
			let force = map(d, 0, distThresh, 1, 0);  // I rami più vicini saranno spinti di più.
			
			// Inverti l'angolo a seconda della posizione del mouse.
			if (mouseX > worldX + width / 2) {
				force *= -1;
			}

			// I rami inferiori hanno una maggiore resistenza.
			force *= map(branch.level, 0, maxLevel, 0.2, 1);
			branch.applyForce(force);
			
			// Mentre siamo qui, possiamo visualizzare se questo ramo viene spinto.
			if (debug) {
				stroke(0, 255, 255);
			}
		}
	
		// il ramo si muove.
		branch.move();
	
		rotate(radians(branch.angle));
		
		// linee che disegnano il ramo.
		line(0, 0, branch.length, 0);
		
		if (debug) {
			// Disegna punti di debug.
			if (d < 200) {
				stroke(80, 255, 255);
				strokeWeight(5);
				point(0, 0);
			}
		} else {
			// Disegna foglie e bacche.
			if (branch.leaves.length > 0) {
				for (let i = 0; i < branch.leaves.length; i++) {
					stroke(branch.leaves[i].hue, branch.leaves[i].sat, branch.leaves[i].val, branch.leaves[i].opacity);
					strokeWeight(branch.leaves[i].size);
					point(branch.length + branch.leaves[i].offsetX, branch.leaves[i].offsetY);
				}
			}
		}
	
		translate(branch.length, 0);
		
		// Continua a ripetere i rami e passa i valori del mondo.
		for (let i = 0; i < branch.children.length; i++) {
			treeIterator(branch.children[i], worldX, worldY, worldA);
		}
	pop();
}
}

function alberofelice(){
  colorMode(RGB);
  angleMode(DEGREES);
  strokeWeight(5);
  drawTree(width / 2, height + 80, 0, 100);
  function drawTree(x, y, t, s) {
	let nx = x + s * sin(t);
	let ny = y - s * cos(t);
	let c;
	if (s < 20) {
		c = color(colors[floor(random(colors.length))]);
		c.setAlpha(80);
	} else {
		c = color(83, 83, 83);
		c.setAlpha(50);
	}
	stroke(c);
	line(x, y, nx, ny);

	if (s > 0) {
		drawTree(nx, ny, t + random(2, 35), s - random(5, 10));
		drawTree(nx, ny, t - random(2, 35), s - random(5, 10));
	}
  
}
  angleMode(RADIANS);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}