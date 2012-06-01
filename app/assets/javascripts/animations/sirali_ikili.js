function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	
	line_x=Line.create(center_x-150,center_y,center_x+150,center_y);
	line_y=Line.create(center_x,center_y-150,center_x,center_y+150);
	
	x_coord=center_x+30;
	y_coord=center_y-30;
	
	proj_x=DashedLine.create(center_x,y_coord,x_coord,y_coord);
	proj_y=DashedLine.create(x_coord,center_y,x_coord,y_coord);
	
	coorLabel=Label.create(x_coord+4,y_coord-13,"("+x_coord+","+y_coord+")");
	coorLabel.setFontSize(13);
	
	coordPoint=Circle.create(x_coord,y_coord,1);
	coordPoint.fillStyle='red';
	coordPoint.movable=true;
	
	coordPoint.onMove = function(x,y){
		
	}
	
	scene.addDrawable(line_x);
	scene.addDrawable(line_y);
	scene.addDrawable(coorLabel);
	scene.addDrawable(coordPoint);
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