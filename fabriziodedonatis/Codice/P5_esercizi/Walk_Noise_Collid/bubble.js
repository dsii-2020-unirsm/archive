function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = 15; // raggio
  this.sat=0;
  this.hue=0;
  this.col = color(255, 255, 255);
   this.t = random(100); //inizializzo punti di curva noise diversi
  this.gap = random(0.005, 0.01) //salto nel gap temporale
  this.dir=1;
  
  
    this.changeColor = function() {
      this.sat++
      this.col = color(random(255), random(255), random(255));
      
    }
    
    this.intersects = function(other){
      var d = dist(this.x, this.y, other.x, other.y )
      if ( d<= this.r + other.r) {
        
       // this.gap = this.gap* -1
        return true;
      } else {
      return false;
      }
    }
  
    this.reverse = function(){
      this.gap = this.gap*-1
    }
  
    this.display = function () {
      stroke(255);
      fill(this.col);
      ellipse(this.x, this.y, this.r*2, this.r*2);
    
    }
  
    this.update = function(){
        //this.x = this.x + random(-1,1);
        //this.y = this.y + random(-1,1);
      this.t += this.gap;
    this.x = map(noise(this.t), 0 ,1 ,0-100 , w*1.2) ; 
    this.y = map(noise(this.t+25), 0 ,1 ,0-100 , h*1.3);
      
      if (this.x > width - this.r || this.x < this.r) {
      this.gap = this.gap * -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.gap = this.gap * -1;
    }
  }
      
    
  
  
  
  
}
//
