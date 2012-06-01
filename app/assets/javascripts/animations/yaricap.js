function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2 , y3 = canvasHeight/2+150;
	angle = 0;
	radius = 100;
	
	circle=Circle.create(center_x, center_y, radius);

	angleTip = Circle.create(x2,y2, 7);
	angleTip.fillStyle='red';
	angleTip.setMovable(true);
	
    radiusLine = Line.create(center_x, center_y, x2, y2)
	radiusLine.strokeStyle = 'green';
	radiusLine.setMovable(false);

	infoLabel=Label.create(20,10,"Aşağıdaki çemberin yarıçapı");
	infoLabel.fillStyle='black';
	infoLabel.setFontSize=10;
	
	prevAngle=findAngle(center_x, center_y, angleTip.centerX(), angleTip.centerY());
	
	angleTip.onMove=function(x,y){
		new_x=3.5 + x;
		new_y=3.5 + y;
		
		angle = findAngle(center_x, center_y, new_x, new_y);
		if( angle > prevAngle -(Math.PI/12) && angle < prevAngle+(Math.PI/12) ){
			radius=Math.sqrt((x-center_x)*(x-center_x)+(y-center_y)*(y-center_y));
			circle.setRadius(radius);
			circle.setCenter(center_x,center_y);
			angleTip.setCenter(circle.centerX()+radius*Math.cos(prevAngle),circle.centerY()-radius*Math.sin(prevAngle));
			radiusLine.setCorners(circle.centerX(),circle.centerY(),circle.centerX()+radius*Math.cos(prevAngle),circle.centerY()-radius*Math.sin(prevAngle));
		}else{
			angleTip.setCenter(circle.centerX()+radius*Math.cos(angle),circle.centerY()-radius*Math.sin(angle));
			radiusLine.setCorners(circle.centerX(),circle.centerY(),circle.centerX()+radius*Math.cos(angle),circle.centerY()-radius*Math.sin(angle));
		}

		

	
	}
	
	scene.addDrawable(circle);
	scene.addDrawable(radiusLine);
	scene.addDrawable(angleTip);
	//scene.addDrawable(infoLabel);
	
}
