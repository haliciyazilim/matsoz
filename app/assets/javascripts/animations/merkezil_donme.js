function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	
	point=Circle.create(center_x,center_y,4);
	triangle=Triangle.create(center_x+80,center_y-80,center_x+110,center_y-160,center_x+140,center_y-80);
	triangle.setRotatable(true);
	triangle.setMovable(true);
	triReverse=Triangle.create(center_x-80,center_y+80,center_x-110,center_y+160,center_x-140,center_y+80);
	
	line1=DashedLine.create(triangle.x1(),triangle.y1(),triReverse.x1(),triReverse.y1());
	line2=DashedLine.create(triangle.x2(),triangle.y2(),triReverse.x2(),triReverse.y2());
	line3=DashedLine.create(triangle.x3(),triangle.y3(),triReverse.x3(),triReverse.y3());
	
	triangle.onRotate = function(rotation){
		triReverse.setRotation(-rotation);
		console.debug(triangle.x1());
		line1.setCorners(triangle.x1(),triangle.y1(),triReverse.x1(),triReverse.y1());
		//line2.setCorners(triangle.x2(),triangle.y2(),triReverse.x2(),triReverse.y2());
		//line3.setCorners(triangle.x3(),triangle.y3(),triReverse.x3(),triReverse.y3());		
	}
	
	scene.addDrawable(triangle);
	scene.addDrawable(triReverse);
	scene.addDrawable(point);
	scene.addDrawable(line1);
	//scene.addDrawable(line2);
	//scene.addDrawable(line3);
}

var DashedLine = Movable.extend ({
	construct: function (x1, y1, x2, y2) {
		this.setCorners(x1, y1, x2, y2);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
	},
	
	draw: function () {
	    context.beginPath();
	    context.moveTo(this.x1(), this.y1());
	    
	    var dX = this.x2() - this.x1();
	    var dY = this.y2() - this.y1();
	    var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / 5);
	    var dashX = dX / dashes;
	    var dashY = dY / dashes;
	    
	    var q = 0;
	    var x1=this.x1();
	    var y1=this.y1();
	    while (q++ < dashes) {
	     x1 += dashX;
	     y1 += dashY;
	     context[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
	    }
	    context[q % 2 == 0 ? 'moveTo' : 'lineTo'](this.x2(), this.y2());
	    
	    context.stroke();
	    context.closePath();
		Movable.draw.call(this);
	},
	
	// Getters
	x1: function () {
		return this.x() + this._x1;
	},
	
	y1: function () {
		return this.y() + this._y1;
	},
	
	x2: function () {
		return this.x() + this._x2;
	},
	
	y2: function () {
		return this.y() + this._y2;
	},
	
	// Setters
	setCorners: function (x1, y1, x2, y2) {
				this._width = Math.max(Math.abs(x1-x2), 20);
				this._height = Math.max(Math.abs(y1-y2), 20);
				this.setCenter((x1 + x2)/2, (y1 + y2)/2);
				this._x1 = x1 - this.x();
				this._y1 = y1 - this.y();
				this._x2 = x2 - this.x();
				this._y2 = y2 - this.y();
				
				scene.redraw();
	}
});