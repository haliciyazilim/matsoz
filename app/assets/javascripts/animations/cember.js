function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2 + 100, y3 = canvasHeight/2;
	angle = 0;
	
	circle=Circle.create(center_x, center_y, 100);

	angleTip = Circle.create(x2,y2, 7);
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
		angle = findAngle(center_x,center_y,new_x,new_y);
		
		if (angle > Math.PI * 2 - Math.PI / 30 || angle < Math.PI / 30) {
			angle = 0;
		} else if (angle < Math.PI / 2 + Math.PI / 30 && angle > Math.PI / 2 - Math.PI / 30) {
			angle = Math.PI / 2;
		} else if (angle < Math.PI + Math.PI / 30 && angle > Math.PI - Math.PI / 30) {
			angle = Math.PI;
		} else if (angle < Math.PI * 1.5 + Math.PI / 30 && angle > Math.PI * 1.5 - Math.PI / 30) {
			angle = Math.PI * 1.5;
		}


		angleTip.setCenter(center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		line1.setCorners(center_x,center_y,center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
	}
	
	
	
	scene.addDrawable(circle);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(angleTip);

	
}