// -
// DeletePixels 0.13 by angelica [faceTracking, getSentiment]
// 2020 © angelica, Daniele @Fupete and the course DSII2020 at DESIGN.unirsm 
// github.com/dsii-2020-unirsm — github.com/fupete
// Educational purposes, MIT License, 2020, San Marino
// —
// Credits/Thanks to: 
// @ml5js (github.com/ml5js) for https://github.com/ml5js/ml5-library/tree/development/src/Sentiment
// original license: MIT License
//
//// @stc (github.com/stcs) https://github.com/stc/face-tracking-p5js
// original license: MIT License
//
// —



function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,380);
    textAlign(CENTER);
}

function draw() {
    getPositions();
    getEmotions();
    
    clear();
    
    textSize(40);
    noStroke();
    fill(0,10);
    rect(0,0,width,height);
    
    drawPoints();

    if (emotions) {
        
        for (var i = 0;i < predictedEmotions.length;i++) {
            fill(35);
            
            rect(i * 110+20, height-30, 20, -predictedEmotions[i].value * 40);
            
            textSize(7);
            text("ANGRY", 30, height-20);
            text("SAD", 135, height-20);
            text("SURPRISED", 255, height-20);
            text("HAPPY", 360, height-20);
            
            textSize(30);
            fill(255);
            console.log(predictedEmotions);
            
            if(predictedEmotions[0].value >= 0.4){
                background(255,0,0, 40);
                text("ANGRY", width/2, height/2);
                //console.log("angry");
            }
            else if(predictedEmotions[1].value >= 0.4){
                background(250,200,0, 40);
                text("SAD", width/2, height/2);
                //console.log("sad");
            }
            else if(predictedEmotions[2].value >= 0.4){
                background(255,255,0, 40);
                text("EXCITEMENT", width/2, height/2);
                //console.log("surprised");
            }
            else if(predictedEmotions[3].value >= 0.7){
                background(0,255,0, 40);
                text("HAPPY", width/2, height/2);
                //console.log("happy");
            }
        }
    } 
}

function drawPoints() {
    fill(255);
    for (var i=0; i<positions.length -3; i++) {
        ellipse(positions[i][0], positions[i][1], 2, 2);
    }
}

