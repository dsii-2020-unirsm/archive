

//array dei valori delle emozioni ogni istante per le quattro emozioni
let angry = [];
let sad = [];
let surprised = [];
let happy = [];

let picchi_angry = [];
let picchi_sad = [];
let picchi_surprised = [];
let picchi_happy = [];

let grafico = [];

//cocossd
let video;
let detector;
let detections;

//albero triste
var maxLevel = 7; // La quantità di rami nidificati che suddividerà. 
var rootBranch = null;
var debug = false;

//albero felice
var levels = 18;
var drawLevel;
var points;

//stelle
var inc = 0.1;
var scl = 20;
var cols, rows;
var zoff = 0;
var flowfield;
var midPoint;

var stars = [];
var speed;

var fas =[];

//albero arrabbiato
let angle
let startWeight = 11;

function setup() {
    //facetracking
    loadCamera();
    loadTracker();
    loadCanvas(500,500);
    textAlign(CENTER);
    background(52);
    
    //coco
    createCanvas(500, 500);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    detector = ml5.objectDetector('cocossd', modelReady)
    
    for (let a=0; a<1; a++) {
        grafico.push(new emozione(a));
    }
}

function draw() {
    getPositions();
    getEmotions();
    
    clear();
    
    textSize(30);
    noStroke();
    fill(0,10);
    rect(0,0,width,height);
    image(video, 0, 0, width, height);

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
        } else if(detection.label === 'cellphone' && predictedEmotions[3].value >= 0.1) {
         alberofelice();
        }
        else if(detection.label === 'bottle' && predictedEmotions[0].value >= 0.1) {
          alberoarrabbiato();
        }
        else if(detection.label === 'bottle' && predictedEmotions[3].value >= 0.1) {
         alberofelice();
        }  else if(detection.label === 'bottle' && predictedEmotions[1].value >= 0.4) {
          alberotriste();
        }
          else {
          stroke(0,0, 255);
        }
        rect(detection.x, detection.y, detection.width, detection.height);  
      })
    }

    for (var i = 0;i < predictedEmotions.length;i++) {
            if(predictedEmotions[0].value >= 0.4){
                //console.log("angry");
                salvareDato();
            }
            
            else if(predictedEmotions[1].value >= 0.4){
                //console.log("sad");
                salvareDato();
            }
            
            else if (predictedEmotions[2].value >= 0.4){
                //console.log("surprised");
                salvareDato();
            }
            
            else if(predictedEmotions[3].value >= 0.4){
                //console.log("happy");
                salvareDato();
            }    
        }
        
        //push();
                translate(0,0); //0);
                for (var x=0; x < grafico.length; x++) {
                    grafico[x].spostati();
                    grafico[x].mostrati();
                }
        //pop();
     
}


function salvareDato(){
    angry.push(predictedEmotions[0].value);
    sad.push(predictedEmotions[1].value);
    surprised.push(predictedEmotions[2].value);
    happy.push(predictedEmotions[3].value);
    //salva i dati ogni secondo
    if(frameCount%30 == 0){
        //console.log(max(happy));
        picchi_angry.push(max(angry));
        picchi_sad.push(max(sad));
        picchi_surprised.push(max(surprised));
        picchi_happy.push(max(happy));
    }
    
}

function emozione(_id) {

  this.id = _id;
  let x = 0;
  let y = height-10;


  this.mostrati = function() {
    let s=10;
    
    strokeWeight(3);
    stroke(255,0,0);
    noFill();
    ellipse(this.x,this.y_angry, s, s);
    textSize(10);
    fill(255,0,0);
    noStroke();
    text("ANGRY", this.x+30, this.y_angry+5);
    
    strokeWeight(3);
    stroke(0, 0, 255);
    noFill();
    ellipse(this.x,this.y_sad, s, s);
    textSize(10);
    fill(0, 0, 255);
    noStroke();
    text("SAD", this.x+20, this.y_sad+5);
    
    strokeWeight(3);
    stroke(255,255,0);
    noFill();
    ellipse(this.x,this.y_surprised, s, s);
    textSize(10);
    fill(255,255,0);
    noStroke();
    text("SURPRISED", this.x+40, this.y_surprised+5);
    
    strokeWeight(3);
    stroke(0,255,0);
    noFill();
    ellipse(this.x,this.y_happy, s, s);
     textSize(10);
    fill(0,255,0);
    noStroke();
    text("HAPPY", this.x+30, this.y_happy+5);
  }

  this.spostati = function() {
    
    for (b=0;b<happy.length;b++){
        this.x = x + b/20;
        this.y_angry = y - (predictedEmotions[0].value*50);
        this.y_sad = y - (predictedEmotions[1].value*50);
        this.y_surprised = y - (predictedEmotions[2].value*50);
        this.y_happy = y - (predictedEmotions[3].value*50);

    }
  }

  
  
}
function modelReady(){
  console.log('model loaded')
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

function alberotriste(){
  colorMode(HSB, 255);
  generateNewTree();
  push();
		translate(width / 2, height - height / 4);
		treeIterator(rootBranch, 0, 0, 0);
	pop();
	
	fill(0);
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
function alberoarrabbiato(){
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
function alberofelice(){
  points = [];
	frameRate(6);
	for (let i = 0; i <= levels; i++) {
		points.push([i]);
	}
	drawY(levels,0,createVector(windowWidth/2,windowHeight));
	drawLevel = levels;
  for (let c = 0; c < points[drawLevel].length; c++) {
		let lastPos = points[drawLevel][c].l;
		let currentPos = points[drawLevel][c].c;
		strokeWeight(drawLevel);	
		stroke(map(drawLevel,0,levels,280,20));
		line(lastPos.x, lastPos.y, currentPos.x, currentPos.y);
	}
  function drawY(level,angle,lastPos) {
	
	// base case
	if (level < 0) return;
	
	// create vector, and add onto last location of branch
	let currentPos = createVector(0,-level*4).rotate(angle).add(lastPos);
	
	// other base case, if branch is under ground
	if (currentPos.copy().sub(createVector(mouseX,mouseY)).y > windowHeight) return;
	
	// add the line start end location into the level's array
	points[level].push({
		'l' : lastPos, 
		'c' : currentPos});
	
	// do branch if random lets it 
	if (parseInt(random(1+level*level/10)) != 0)
		drawY(level-1,angle-PI/random(4,8),currentPos);
	
	// do branch if random lets it 
	if (parseInt(random(1+level*level/10)) != 0)
		drawY(level-1,angle+PI/random(4,8),currentPos);
 }
}
function creastelle(){
 midPoint = createVector(width/2, height/2)
 cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 400; i++) {
    stars[i] = new Star();
  }
  
function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  this.show = function() {
    fill(190);
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 16, 0);
    strokeWeight(1);
    ellipse(sx, sy, r, r);
  }
}
}