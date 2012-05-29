function animationInit(){
	radius=100;
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	corner_x = canvasWidth/2 - radius, corner_y = canvasHeight/2;
	angle = 0;
	
	label=Label.create(center_x+30,center_y-30,"120°");
	label.fillStyle='blue';
	
	//debug
	label1=Label.create(center_x+30,center_y+110,"60°");
	label1.fillStyle='blue';
	label2=Label.create(center_x+30,center_y+150,"-60°");
	label2.fillStyle='blue';
	//
	
	bigCircle=Circle.create(center_x,center_y,radius);
	bigCircle.strokeStyle='#AAA5A5';
	
	centerPoint=Circle.create(center_x,center_y,1);
	centerPoint.strokeStyle='#AAA5A5';
	
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
	
	centerLine1=Line.create(center_x,center_y,tip1.centerX(), tip1.centerY());
	centerLine2=Line.create(center_x,center_y,tip2.centerX(), tip2.centerY());
	centerLine1.movable=false;
	centerLine2.movable=false;
	centerLine1.strokeStyle='#AAA5A5';
	centerLine2.strokeStyle='#AAA5A5';
	
	merkezArc=Arc.create(center_x,center_y,20,0,0,true);
	merkezArc.strokeStyle='#AAA5A5';
	
	cornerTip.angle=2*Math.PI/3;
	tip1.angle=Math.PI/3;
	tip2.angle=-Math.PI/3;
	tip1.realAngle=Math.PI/3;
	tip2.realAngle=5*Math.PI/3;
	var centerAngle=2*Math.PI/3;
	cornerTip.newAngle=2*Math.PI/3;
	cornerTip.isBetween=true;
	isChanged=false;

	cornerTip.onMove = function(x,y){	
		new_x=3.5 + x;
		new_y=3.5 + y;
		angle = findAngle(center_x, center_y, new_x, new_y);
		this.angle=angle;
		cornerTip.setCenter(center_x+radius*Math.
			cos(angle),center_y-radius*Math.sin(angle));
		line1.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip1.centerX(),tip1.centerY());
		line2.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip2.centerX(),tip2.centerY());
		if(!(angle < tip2.realAngle && angle > tip1.realAngle)){
				centerA=2*Math.PI-centerAngle;	
				toDegree=centerA*180/Math.PI;
				integerDeg=Math.floor(toDegree+0.5);
				label.setText(integerDeg+"°");
				cornerTip.newAngle=centerA;
				cornerTip.isBetween=false;
		}else{
			cornerTip.isBetween=true;
		}		
	}
	
	tip1.onMove = function(x,y){
		new_x=3.5+x;
		new_y=3.5+y;	
		angle = findAngle(center_x, center_y, new_x, new_y);
		tip1.realAngle=angle;
		this.angle=angle;
		tip1.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line1.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip1.centerX(),tip1.centerY());
		/////////////////////////
		if(!(cornerTip.angle < tip2.realAngle && cornerTip.angle > tip1.realAngle)){
				cornerTip.isBetween=false;
		}

		centerAngle=Math.abs(this.angle-tip2.angle);
		if(centerAngle > 2*Math.PI)
			centerAngle=-2*Math.PI+centerAngle;
		if(!cornerTip.isBetween &&  centerAngle>Math.PI)
			centerAngle=2*Math.PI-centerAngle;
		

		////////////////////////////
		toDegree=centerAngle*180/Math.PI;
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		//debug
		todeg=this.angle*180/Math.PI;
		label1.setText(Math.floor(todeg+0.5));
		label2.setText(Math.floor(tip2.angle*180/Math.PI+0.5));
		//
		centerLine1.setCorners(center_x,center_y,tip1.centerX(), tip1.centerY());
		
	}

	tip2.onMove = function(x,y){
		new_x=3.5+x;
		new_y=3.5+y;	
		angle = findAngle(center_x, center_y, new_x, new_y);
		tip2.realAngle=angle;
		this.angle=angle-2*Math.PI;
		tip2.setCenter(center_x+radius*Math.cos(angle),center_y-radius*Math.sin(angle));
		line2.setCorners(cornerTip.centerX(),cornerTip.centerY(),tip2.centerX(),tip2.centerY());
		////////////////////////////////////////////////////
		if(!(cornerTip.angle < tip2.realAngle && cornerTip.angle > tip1.realAngle)){
				cornerTip.isBetween=false;
		}

		centerAngle=Math.abs(tip1.angle-this.angle);
		if(centerAngle > 2*Math.PI)
			centerAngle=-2*Math.PI+centerAngle;			

		if(!cornerTip.isBetween && centerAngle>Math.PI)
			centerAngle=2*Math.PI-centerAngle;
		


		////////////////////////////////////////
		toDegree=centerAngle*180/Math.PI;
		//debug
		todeg=this.angle*180/Math.PI;
		label2.setText(Math.floor(todeg+0.5));
		label1.setText(Math.floor(tip1.angle*180/Math.PI+0.5));
		//
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		centerLine2.setCorners(center_x,center_y,tip2.centerX(), tip2.centerY());
		
	}
	
	scene.addDrawable(merkezArc);
	scene.addDrawable(bigCircle);
	scene.addDrawable(centerLine1);
	scene.addDrawable(centerLine2);
	scene.addDrawable(centerPoint);
	scene.addDrawable(label);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(cornerTip);
	scene.addDrawable(tip1);
	scene.addDrawable(tip2);
	
	scene.addDrawable(label1);
	scene.addDrawable(label2);
	
}