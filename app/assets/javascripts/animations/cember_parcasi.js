function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2 + 100, y3 = canvasHeight/2;
	
	startAngle=0;
	endAngle = 0;
	radius=100;
	
	cemberYay=Arc.create(center_x, center_y, radius, 0, -Math.PI/2,true);
	

	tip2 = Circle.create(x2,y2, 7);
	tip2.fillStyle='red';
	tip2.movable=false;
	
	tip1 = Circle.create(center_x, center_y - radius, 7);
	tip1.fillStyle='blue';
	tip1.movable=true;
	

	tip1.onMove = function(x,y){		
		new_x=10 + x; 
		new_y=10 + y; 
		
	
		endAngle = Math.atan((new_y - center_y) / (new_x - center_x));
	
		
		if (new_x >= center_x && new_y < center_y) {
			endAngle = 0 - endAngle;

		
		} else if (new_x < center_x && new_y <= center_y) {
			endAngle = Math.PI - endAngle ;

		}else if(new_x <= center_x && new_y > center_y){
			endAngle = Math.PI - endAngle ;
			if(new_x == center_x)
				endAngle=3*Math.PI/2;

		}
		else if(new_x > center_x && new_y >= center_y){
			endAngle = 2*Math.PI - endAngle;

		}
		
		if (endAngle > Math.PI * 2 - Math.PI / 30 || endAngle < Math.PI / 30) {
			endAngle = 0;
		} else if (endAngle < Math.PI / 2 + Math.PI / 30 && endAngle > Math.PI / 2 - Math.PI / 30) {
			endAngle = Math.PI / 2;
		} else if (endAngle < Math.PI + Math.PI / 30 && endAngle > Math.PI - Math.PI / 30) {
			endAngle = Math.PI;
		} else if (endAngle < Math.PI * 1.5 + Math.PI / 30 && endAngle > Math.PI * 1.5 - Math.PI / 30) {
			endAngle = Math.PI * 1.5;
		}

		tip1.setCenter(center_x+100*Math.cos(endAngle),center_y-100*Math.sin(endAngle));
		cemberYay.setDirection(true);
		cemberYay.setStartAngle(0-startAngle);
		cemberYay.setEndAngle(0-endAngle);
		tip2.movable=true;

	}
	
	tip2.onMove = function(x,y){		
		new_x=10 + x; 
		new_y=10 + y; 
		startAngle = Math.atan((new_y - center_y) / (new_x - center_x));
	
		
		if (new_x >= center_x && new_y < center_y) {
			startAngle = 0 - startAngle;

		
		} else if (new_x < center_x && new_y <= center_y) {
			startAngle = Math.PI - startAngle ;

		}else if(new_x <= center_x && new_y > center_y){
			startAngle = Math.PI - startAngle ;
			if(new_x == center_x)
				startAngle=3*Math.PI/2;

		}
		else if(new_x > center_x && new_y >= center_y){
			startAngle = 2*Math.PI - startAngle;

		}
		
		if (startAngle > Math.PI * 2 - Math.PI / 30 || startAngle < Math.PI / 30) {
			startAngle = 0;
		} else if (startAngle < Math.PI / 2 + Math.PI / 30 && startAngle > Math.PI / 2 - Math.PI / 30) {
			startAngle = Math.PI / 2;
		} else if (startAngle < Math.PI + Math.PI / 30 && startAngle > Math.PI - Math.PI / 30) {
			startAngle = Math.PI;
		} else if (startAngle < Math.PI * 1.5 + Math.PI / 30 && startAngle > Math.PI * 1.5 - Math.PI / 30) {
			startAngle = Math.PI * 1.5;
		}

		tip2.setCenter(center_x+100*Math.cos(startAngle),center_y-100*Math.sin(startAngle));
		cemberYay.setDirection(false);
		cemberYay.setStartAngle(0-endAngle);
		cemberYay.setEndAngle(0-startAngle);

	}
	
	
	scene.addDrawable(cemberYay);
	scene.addDrawable(tip1);
	scene.addDrawable(tip2);

	
}