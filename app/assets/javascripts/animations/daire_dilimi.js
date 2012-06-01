function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2 + 100, y3 = canvasHeight/2;
	angle = 0;
	circleRadius=100;
	
	mainCircle=Circle.create(center_x, center_y,circleRadius);
	mainCircle.strokeStyle='#AAA5A5';
	
	sectorArc=Sector.create(center_x,center_y,circleRadius,0,0);
	sectorArc.fillStyle='pink';
	
	angleArc=Sector.create(center_x,center_y,20,0,0);
	angleArc.strokeStyle='blue';
	angleArc.fillStyle='pink';
	label=Label.create(center_x+30,center_y-30,"0°");
	label.fillStyle='blue';
	
	
	angleTip = Circle.create(x2,y2,7);
	angleTip.fillStyle='red';
	angleTip.setMovable(true);
	
    line1 = Line.create(center_x, center_y, x2, y2)
	line1.strokeStyle = 'green';
	line1.setMovable(false);
	
	line2 = Line.create(center_x, center_y, x2, y2);
	line2.setMovable(false);

	angleTip.onMove = function(x,y){
		
		new_x=10 + x; 
		new_y=10 + y; 
		angle = findAngle(center_x, center_y, new_x, new_y);
		
		if (angle > Math.PI * 2 - Math.PI / 30 || angle < Math.PI / 30) {
			angle = 0;
		} else if (angle < Math.PI / 2 + Math.PI / 30 && angle > Math.PI / 2 - Math.PI / 30) {
			angle = Math.PI / 2;
		} else if (angle < Math.PI + Math.PI / 30 && angle > Math.PI - Math.PI / 30) {
			angle = Math.PI;
		} else if (angle < Math.PI * 1.5 + Math.PI / 30 && angle > Math.PI * 1.5 - Math.PI / 30) {
			angle = Math.PI * 1.5;
		}

		toDegree=angle*180/Math.PI;
		integerDeg=Math.floor(toDegree+0.5);
		label.setText(integerDeg+"°");
		angleTip.setCenter(center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		line1.setCorners(center_x,center_y,center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		angleArc.setEndAngle(angle);
		sectorArc.setEndAngle(angle);
	}
	
	scene.addDrawable(mainCircle);
	scene.addDrawable(sectorArc);
	scene.addDrawable(label);
	scene.addDrawable(angleArc);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(angleTip);
	
	
}