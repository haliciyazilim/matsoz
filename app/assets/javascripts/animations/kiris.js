function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2 + 100, y3 = canvasHeight/2;
	angle = 0;
	radius=100;
	
	circle=Circle.create(center_x, center_y, radius);

	tip1 = Circle.create(x2,y2, 7);
	tip1.fillStyle='red';
	tip1.movable=true;
	
	tip2 = Circle.create(center_x - radius, center_y, 7);
	tip2.fillStyle='red';
	tip2.movable=true;
	
    kiris = Line.create(center_x - radius, center_y, x2, y2)
	kiris.strokeStyle = 'green';
	kiris.movable = false;
	


	tip1.onMove = function(x,y){		
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

		tip1.setCenter(center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		kiris.setCorners(tip2.centerX(),tip2.centerY(),center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
	}
	
	tip2.onMove = function(x,y){		
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

		tip2.setCenter(center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		kiris.setCorners(tip1.centerX(),tip1.centerY(),center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
	}
	
	
	scene.addDrawable(circle);
	scene.addDrawable(kiris);
	scene.addDrawable(tip1);
	scene.addDrawable(tip2);

	
}