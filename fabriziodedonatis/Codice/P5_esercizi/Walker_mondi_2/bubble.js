function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.r = 15; // raggio
  this.sat=0;
  this.hue=0;
  this.col = color(this.hue, this.sat, 220);
   this.t = random(100); //inizializzo punti di curva noise diversi
  this.gap = random(0.005, 0.001) //salto nel gap temporale
  this.pow=0.001;
  
  
    this.changeColor = function() {
      
      this.sat++
      this.col = color(this.hue, this.sat, 260);
      //this.col = color(random(255), random(255), random(255));
      if( this.sat > 360) {
      this.sat=0;
      this.hue+=10;
      this.pow+= 0.001; 
      }
    }
    
    this.intersects = function(other){
      var d = dist(this.x, this.y, other.x, other.y )
      if ( d<= this.r + other.r) {
        this.gap = random(0.005, 0.001)
       // this.gap = this.gap* -1*0.9
        return true;
      } else {
      return false;
      }
    }
  
    this.reverse = function(){
      this.gap = this.gap* -1
    }
  
    this.display = function () {
      stroke(this.col);
      //fill(this.col);
      //noFill()
      
     blendMode(DIFFERENCE) //MULTIPLY
      push()
      //stroke(this.hue,this.sat,200)
     // triangle(this.x, this.y, this.x/2, this.y,this.x*2, this.y*2);
      //triangle(this.x, this.y, this.r*2, h-this.r*2,w-this.r*2, h-this.r*2);
     // line(this.x, this.y, w-this.r*2, h-this.r*2);
      pop()
     // triangle(this.x, this.y, w-this.r*2, this.r*2,this.r*2, this.r*2);
     // line(this.x, this.y, w-this.r*2, this.r*2);
     // line(this.x, this.y, this.r*2, this.r*2); 
    }
  
    this.update = function(){
        //this.x = this.x + random(-1,1);
        //this.y = this.y + random(-1,1);
      this.t =this.t+ this.gap;
    this.x = map(noise(this.t), 0 ,1 ,-w*0.15 , w*1.15); 
    this.y = map(noise(this.t+5), 0 ,1 ,-h*0.15 , h*1.15);
      
      if (this.x > width - this.r || this.x < this.r) {
      this.gap = this.gap * -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.gap = this.gap * -1;
    }
  }
      
    
  
  
  
  
}
//
