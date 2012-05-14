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
	angleTip.movable=true;
	
    line1 = Line.create(center_x, center_y, x2, y2)
	line1.strokeStyle = 'green';
	line1.movable = false;
	
	line2 = Line.create(center_x, center_y, x2, y2);
	line2.movable = false;

	angleTip.onMove = function(x,y){
		
		new_x=10 + x; 
		new_y=10 + y; 
		angle = Math.atan((new_y - center_y) / (new_x - center_x));
	
		
		if (new_x >= center_x && new_y < center_y) {
			angle = 0 - angle;

		
		} else if (new_x < center_x && new_y <= center_y) {
			angle = Math.PI - angle ;

		}else if(new_x <= center_x && new_y > center_y){
			angle = Math.PI - angle ;
			if(new_x == center_x)
				angle=3*Math.PI/2;

		}
		else if(new_x > center_x && new_y >= center_y){
			angle = 2*Math.PI - angle;

		}
		
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
		angleArc.setEndAngle(0 - angle);
		sectorArc.setEndAngle(0 - angle);
	}
	
	scene.addDrawable(mainCircle);
	scene.addDrawable(sectorArc);
	scene.addDrawable(label);
	scene.addDrawable(angleArc);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(angleTip);
	
	
}