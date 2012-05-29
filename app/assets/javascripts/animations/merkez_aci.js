function animationInit(){
	radius=100;
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	angle = 0;
	
	label=Label.create(center_x+30,center_y-30,"120°");
	label.fillStyle='blue';
	
	bigCircle=Circle.create(center_x,center_y,radius);
	centerPoint=Circle.create(center_x,center_y,1);
	
	tip1 = Circle.create(center_x+radius*Math.cos(Math.PI/3),center_y-radius*Math.sin(Math.PI/3),7);
	tip1.fillStyle='red';
	tip1.movable=true;
	
	tip2 = Circle.create(center_x+radius*Math.cos(Math.PI/3),center_y+radius*Math.sin(Math.PI/3),7);
	tip2.fillStyle='red';
	tip2.movable=true;
	
	centerLine1=Line.create(center_x,center_y,tip1.centerX(), tip1.centerY());
	centerLine2=Line.create(center_x,center_y,tip2.centerX(), tip2.centerY());
	centerLine1.movable=false;
	centerLine2.movable=false;

	tip1.angle=Math.PI/3;
	tip2.angle=-Math.PI/3;
	var centerAngle=2*Math.PI/3;
	var angle1=Math.PI/3;
	var angle2=-Math.PI/3;
	
	merkezArc=Arc.create(center_x,center_y,20,tip2.angle,tip1.angle,true);
	merkezArc.strokeStyle='blue';

	tip1.onMove = function(x,y){
		new_x=3.5+x;
		new_y=3.5+y;	
		angle = findAngle(center_x, center_y, new_x, new_y);
		angle1=angle;
		tip1.angle=angle;
		tip1.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		centerAngle=Math.abs(tip1.angle-tip2.angle);
		if(centerAngle > 2*Math.PI)
			centerAngle=-2*Math.PI+centerAngle;
		toDegree=centerAngle*180/Math.PI;
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		centerLine1.setCorners(center_x,center_y,tip1.centerX(), tip1.centerY());
		merkezArc.setDirection(true);
		merkezArc.setStartAngle(angle2);
		merkezArc.setEndAngle(angle1);
	}

	tip2.onMove = function(x,y){
		new_x=3.5+x;
		new_y=3.5+y;	
		angle = findAngle(center_x, center_y, new_x, new_y);
		angle2=angle;
		tip2.angle=angle-2*Math.PI;
		tip2.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		centerAngle=Math.abs(tip1.angle-tip2.angle);
		if(centerAngle > 2*Math.PI)
			centerAngle=-2*Math.PI+centerAngle;
		toDegree=centerAngle*180/Math.PI;
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		centerLine2.setCorners(center_x,center_y,tip2.centerX(), tip2.centerY());	
		merkezArc.setDirection(false);
		merkezArc.setStartAngle(angle1);
		merkezArc.setEndAngle(angle2);

	}
	
	
	scene.addDrawable(bigCircle);
	scene.addDrawable(merkezArc);
	scene.addDrawable(centerLine1);
	scene.addDrawable(centerLine2);
	scene.addDrawable(centerPoint);
	scene.addDrawable(label);
	scene.addDrawable(tip1);
	scene.addDrawable(tip2);
}