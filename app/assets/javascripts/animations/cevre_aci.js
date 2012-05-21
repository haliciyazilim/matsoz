function animationInit(){
	radius=100;
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	corner_x = canvasWidth/2 - radius, corner_y = canvasHeight/2;
	angle = 0;
	
	
	angleArc=Arc.create(center_x,center_y,20,0,0,true);
	angleArc.strokeStyle='blue';
	
	label=Label.create(center_x+30,center_y-30,"60°");
	label.fillStyle='blue';
	
	bigCircle=Circle.create(center_x,center_y,radius);
	bigCircle.strokeStyle='#AAA5A5';
	
	cornerTip = Circle.create(center_x-radius,center_y,7);
	cornerTip.fillStyle='red';
	cornerTip.movable=true;
	
	tip1 = Circle.create(center_x+radius*Math.cos(Math.PI/3),center_y-radius*Math.sin(Math.PI/3),7);
	tip1.fillStyle='red';
	tip1.movable=true;
	
	tip2 = Circle.create(center_x+radius*Math.cos(Math.PI/3),center_y+radius*Math.sin(Math.PI/3),7);
	tip2.fillStyle='red';
	tip2.movable=true;
	
    line1 = Line.create(cornerTip.centerX(), cornerTip.centerY(), tip1.centerX(), tip1.centerY());
	line1.movable = false;
	
	line2 = Line.create(cornerTip.centerX(), cornerTip.centerY(), tip2.centerX(), tip2.centerY());
	line2.movable = false;
	
	cornerTip.angle=0;
	tip1.angle=Math.PI/3;
	tip2.angle=Math.PI/3;


	cornerTip.onMove = function(x,y){	
		new_x=3.5 + x;
		new_y=3.5 + y;
		angle = findAngle(center_x, center_y, new_x, new_y);
		this.angle=angle;
		cornerTip.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line1.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip1.centerX(),tip1.centerY());
		line2.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip2.centerX(),tip2.centerY());
		
	}
	
	tip1.onMove = function(x,y){
		new_x=3.5+x;
		new_y=3.5+y;	
		angle = findAngle(center_x, center_y, new_x, new_y);
		this.angle=angle;
		centerAngle=2*Math.PI-Math.abs(this.angle-tip2.angle);		
		toDegree=centerAngle*180/Math.PI*0.5;
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		tip1.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line1.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip1.centerX(),tip1.centerY());
	}

	tip2.onMove = function(x,y){
		new_x=3.5+x;
		new_y=3.5+y;	
		angle = findAngle(center_x, center_y, new_x, new_y);
		this.angle=angle;
		centerAngle=2*Math.PI-Math.abs(this.angle-tip1.angle);
		toDegree=centerAngle*180/Math.PI*0.5;
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		tip2.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line2.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip2.centerX(),tip2.centerY());
	}
	
	scene.addDrawable(bigCircle);
	scene.addDrawable(label);
	scene.addDrawable(angleArc);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(cornerTip);
	scene.addDrawable(tip1);
	scene.addDrawable(tip2);
	
}