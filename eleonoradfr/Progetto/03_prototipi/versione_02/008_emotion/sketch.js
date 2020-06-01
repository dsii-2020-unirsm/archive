
let angry = [];
let sad = [];
let surprised = [];
let happy = [];

let picchi_angry = [];
let picchi_sad = [];
let picchi_surprised = [];
let picchi_happy = [];


let grafico = [];


function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,380);
    
    textAlign(CENTER);
    //background(52);
    
    for (let a=0; a<1; a++) {
        grafico.push(new emozione(a));
    }
    

}

function draw() {
    getPositions();
    getEmotions();
    
    //clear();
    
    textSize(30);
    noStroke();
    fill(0,10);
    rect(0,0,width,height);
     
    drawPoints();
    

    for (var i = 0;i < predictedEmotions.length;i++) {
            
            //fill(35);
            //rect(i * 110+20, height-30, 20, -predictedEmotions[i].value * 40);
            
            //textSize(7);
            //text("ANGRY", 30, height-20);
            //text("SAD", 135, height-20);
            //text("SURPRISED", 255, height-20);
            //text("HAPPY", 360, height-20);
            
            //textSize(10);
            //fill(25);
            //console.log(predictedEmotions);
            
            if(predictedEmotions[0].value >= 0.5){
                background(255,0,0, 20);
                //console.log("angry");
                salvareDato();
            }
            
            else if(predictedEmotions[1].value >= 0.5){
                background(0, 0, 255, 20);
                //console.log("sad");
                salvareDato();
            }
            
            else if (predictedEmotions[2].value >= 0.5){
                background(255,255,0, 20);
                //console.log("surprised");
                salvareDato();
            }
            
            else if(predictedEmotions[3].value >= 0.7){
                background(0,255,0, 20);
                //console.log("happy");
                salvareDato();
                
            }
           
    }
        
    for (var x=0; x < grafico.length; x++) {
      grafico[x].spostati();
      grafico[x].mostrati();
      
    }
}

function drawPoints() {
    fill(4);
    for (var i=0; i<positions.length -3; i++) {
        ellipse(positions[i][0], positions[i][1], 3, 3);  
    }  
}

function salvareDato(){
    
    angry.push(predictedEmotions[0].value);
    sad.push(predictedEmotions[1].value);
    surprised.push(predictedEmotions[2].value);
    happy.push(predictedEmotions[3].value);
    
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
  let y = height-20;


  this.mostrati = function() {
    let s=10;
    
    strokeWeight(3);
    stroke(0);
    noFill();
    ellipse(this.x,this.y_angry, s, s);
    textSize(10);
    fill(0);
    noStroke();
    text("ANGRY", this.x+30, this.y_angry+5);
    
    strokeWeight(3);
    stroke(0);
    noFill();
    ellipse(this.x,this.y_sad, s, s);
    textSize(10);
    fill(0);
    noStroke();
    text("SAD", this.x+20, this.y_sad+5);
    
    strokeWeight(3);
    stroke(0);
    noFill();
    ellipse(this.x,this.y_surprised, s, s);
    textSize(10);
    fill(0);
    noStroke();
    text("SURPRISED", this.x+40, this.y_surprised+5);
    
    strokeWeight(3);
    stroke(0);
    noFill();
    ellipse(this.x,this.y_happy, s, s);
    textSize(10);
    fill(0);
    noStroke();
    text("HAPPY", this.x+30, this.y_happy+5);
  }

  this.spostati = function() {
    background(0, 20);
    for (b=0;b<happy.length;b++){
        this.x = x + b/20;
        this.y_angry = y - (predictedEmotions[0].value*50);
        this.y_sad = y - (predictedEmotions[1].value*50);
        this.y_surprised = y - (predictedEmotions[2].value*50);
        this.y_happy = y - (predictedEmotions[3].value*50);
    }
  }  
  
}
