function animationInit(){
	radius=100;
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	corner_x = canvasWidth/2 - radius, corner_y = canvasHeight/2;
	angle = 0;
	
	label=Label.create(center_x+30,center_y-15,"120°");
	label.fillStyle='blue';
	
	label2 = Label.create(0, 0, "");
	label2.fillStyle = 'teal';
	
	bigCircle=Circle.create(center_x,center_y,radius);
	bigCircle.strokeStyle='#AAA5A5';
	
	centerPoint=Circle.create(center_x,center_y,1);
	centerPoint.strokeStyle='#AAA5A5';
	
	cornerTip = Circle.create(center_x-radius,center_y,7);
	cornerTip.angle = Math.PI;
	cornerTip.fillStyle='red';
	cornerTip.movable=true;
	
	tip1 = Circle.create(center_x+radius*Math.cos(Math.PI/3),center_y-radius*Math.sin(Math.PI/3),7);
	tip1.angle = Math.PI/3;
	tip1.fillStyle='red';
	tip1.movable=true;
	
	tip2 = Circle.create(center_x+radius*Math.cos(Math.PI/3),center_y+radius*Math.sin(Math.PI/3),7);
	tip2.angle = 5*Math.PI/3;
	tip2.fillStyle='red';
	tip2.movable=true;
	
    line1 = Line.create(cornerTip.centerX(), cornerTip.centerY(), tip1.centerX(), tip1.centerY());
	line1.movable = false;
	
	line2 = Line.create(cornerTip.centerX(), cornerTip.centerY(), tip2.centerX(), tip2.centerY());
	line2.movable = false;
	
	centerLine1=Line.create(center_x,center_y,tip1.centerX(), tip1.centerY());
	centerLine2=Line.create(center_x,center_y,tip2.centerX(), tip2.centerY());
	centerLine1.movable=false;
	centerLine2.movable=false;
	centerLine1.strokeStyle='#AAA5A5';
	centerLine2.strokeStyle='#AAA5A5';
	
	centerArc=Arc.create(center_x,center_y, 20, 0, 0, true);
	centerArc.strokeStyle = 'blue';
	
	cevreArc = Arc.create(center_x, center_y, 20, 0, 0, true);
	cevreArc.strokeStyle = 'teal';
	
	calculateAngles = function() {
		var minTip;
		var maxTip;
		var centerAngle;
		
		if (tip2.angle > tip1.angle) {
			if (cornerTip.angle > tip2.angle || cornerTip.angle < tip1.angle) {
				minTip = tip1;
				maxTip = tip2;
				
				centerAngle = tip2.angle - tip1.angle;
			} else {
				minTip = tip2;
				maxTip = tip1;
				
				centerAngle = Math.PI * 2 - tip2.angle + tip1.angle;
			}
		} else {
			if (cornerTip.angle > tip1.angle || cornerTip.angle < tip2.angle) {
				minTip = tip2;
				maxTip = tip1;
				
				centerAngle = tip1.angle - tip2.angle;
			} else {
				minTip = tip1;
				maxTip = tip2;
				
				centerAngle = Math.PI * 2 - tip1.angle + tip2.angle;
			}
		}
		
		integerAngle = Math.floor(centerAngle / Math.PI * 180 + 0.5); 
		label.setText(integerAngle+"°");
		
		centerArc.setStartAngle(minTip.angle);
		centerArc.setEndAngle(maxTip.angle);

		angle1 = findAngle(cornerTip.centerX(), cornerTip.centerY(), minTip.centerX(), minTip.centerY());
		angle2 = findAngle(cornerTip.centerX(), cornerTip.centerY(), maxTip.centerX(), maxTip.centerY());
		
		cevreArc.setStartAngle(angle1);
		cevreArc.setEndAngle(angle2);
		cevreArc.setCenter(cornerTip.centerX(), cornerTip.centerY());
		
		label2.setText(Math.floor(integerAngle/2 + 0.5) + "°");
		label2.setOrigin(cornerTip.x() + 30, cornerTip.y() - 5);
	};

	calculateAngles();

	cornerTip.onMove = function(x,y){
		angle = findAngle(center_x, center_y, this.centerX(), this.centerY());
		this.angle = angle;
		cornerTip.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line1.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip1.centerX(),tip1.centerY());
		line2.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip2.centerX(),tip2.centerY());

		calculateAngles();
	}
	
	tip1.onMove = function(x,y){
		angle = findAngle(center_x, center_y, this.centerX(), this.centerY());
		this.angle=angle;
		this.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line1.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip1.centerX(),tip1.centerY());
		centerLine1.setCorners(center_x,center_y,tip1.centerX(), tip1.centerY());

		calculateAngles();
	}

	tip2.onMove = function(x,y){
		angle = findAngle(center_x, center_y, this.centerX(), this.centerY());
		this.angle = angle;
		this.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line2.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip2.centerX(),tip2.centerY());
		centerLine2.setCorners(center_x,center_y,tip2.centerX(), tip2.centerY());
		
		calculateAngles();
	}
	
	scene.addDrawable(bigCircle);
	scene.addDrawable(centerArc);
	scene.addDrawable(cevreArc);
	scene.addDrawable(centerLine1);
	scene.addDrawable(centerLine2);
	scene.addDrawable(centerPoint);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(cornerTip);
	scene.addDrawable(tip1);
	scene.addDrawable(tip2);	
	scene.addDrawable(label);
	scene.addDrawable(label2);
}
