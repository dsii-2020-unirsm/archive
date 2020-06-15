// Class definition for Pac
class Pac {
  constructor(_x, _y, _w, _h, _c, _s) {
    this.x = _x; // this refers to an object context
    this.y = _y; // use it to access the member variable
    this.w = _w;
    this.h = _h;
    this.c = _c;
    this.s = _s;
    // Not all properties need to have parameters
    // in the constructor function
    this.mouthClosingAmount = 0;
    this.mouthClosing = true;
  }
  
  animate() {
    // BOUNDARY CHECK
	if (this.mouthClosingAmount >= 44) { 
      // 44 instead of 45 because with 45, the arc
      // goes past 360 degrees and flashes temporarily
      // because it essentially disappears for a frame
		this.mouthClosing = false;
	} 
	if (this.mouthClosingAmount <= 0) {
		this.mouthClosing = true;
	}
	
	// UPDATE VALUE BASED ON CLOSING OR OPENING
	if (this.mouthClosing == true) {
		this.mouthClosingAmount = this.mouthClosingAmount + 4;
	} else {
		this.mouthClosingAmount = this.mouthClosingAmount - 4;
	}
  }
  
  
    //Move
  move() {
    this.x += 5;
    // Wrap around once we go past the right edge
    if (this.x > width + 55) {
      this.x = -55;
    }
  }
  
  draw() {
    // DRAWING
	fill(this.c);
	arc(this.x, this.y, this.w, this.h, 45 - this.mouthClosingAmount, 315 + this.mouthClosingAmount, PIE);
  }
}