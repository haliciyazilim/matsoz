var Sector2 = Selectable.extend ({
	construct: function (centerX, centerY, radius, startAngle, endAngle,color) {
		this.setRadius(radius);
		this.setStartAngle(startAngle);
		this.setEndAngle(endAngle);
		this.setCenter(centerX, centerY);
		Selectable.construct.call(this, this.x(), this.y(), this.width(), this.height());
	},
			
	draw: function () {
		Selectable.draw.call(this);
		context.beginPath();
		context.moveTo(this.centerX(),this.centerY());
		context.arc(this.centerX(),this.centerY(),this.radius(),this.startAngle(), this.endAngle(), true);
		context.closePath();
		context.fill();
		context.stroke();
	},
	
	isInSector: function (x,y,ang) {
		
		if(x > this.centerX() && y < this.centerY()){
			
						//alert("x= "+x +"centerx= " + this.centerX());
			return ((x - this.centerX() < this.radius()*Math.cos(ang)) && (this.centerY() - y < this.radius()*Math.sin(ang)));

			//return true;
		
		}else if(x < this.centerX() && y < this.centerY()){
			return (this.centerX()-x > this.radius()*Math.cos(ang) && y - this.centerY() < this.radius*Math.sin(ang));
		}else if(x < this.centerX() && y > this.centerY()){
			return (this.centerX()-x > this.radius()*Math.cos(ang) && y - this.centerY() < this.radius*Math.sin(ang));
		}else{
			return (x - this.centerX() < this.radius()*Math.cos(ang) && y - this.centerY() < this.radius*Math.sin(ang));
		}	
	},
	
	// Getters
	radius: function () {
		return this._radius;
	},
	
	startAngle: function () {
		return this._startAngle;
	},
	
	endAngle: function () {
		return this._endAngle;
	},
	
	// Setters
	setRadius: function (radius) {
		this._radius = radius;
		this._width = 2*radius;
		this._height = 2*radius;
		scene.redraw();
	},
	
	setStartAngle: function (startAngle) {
		this._startAngle = startAngle;
		scene.redraw();
	},
	
	setEndAngle: function (endAngle) {
		this._endAngle = endAngle;
		scene.redraw();
	}
});