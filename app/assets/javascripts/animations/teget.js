function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	line1_x1 = 0, line1_y1 = 0;
	line1_x2 = 0, line1_y2 = 0;
	angle = 0;
	beta=45*2*Math.PI/360;
	radius=60;
	x2 = center_x, y2 = center_y-radius;
	dist=radius*Math.sqrt(2);
	
	mainCircle=Circle.create(center_x,center_y,radius);
	
	tip = Circle.create(x2,y2, 7);
	tip.fillStyle='red';
	tip.movable=true;
	
	line1=Line.create(x2-radius,y2,x2+radius,y2);
	line1.strokeStyle='black';
	line1.movable=false;

	tip.onMove = function(x,y){
		new_x=10 + x; 
		new_y=10 + y; 
		angle=findAngle(mainCircle.centerX(),mainCircle.centerY(), new_x, new_y);
		line1_x1=mainCircle.centerX()+dist*Math.cos(angle-beta);
		line1_y1=mainCircle.centerY()-dist*Math.sin(angle-beta);
		line1_x2=mainCircle.centerX()+dist*Math.cos(angle+beta);
		line1_y2=mainCircle.centerY()-dist*Math.sin(angle+beta);
		tip.setCenter(mainCircle.centerX()+radius*Math.cos(angle),mainCircle.centerY()-radius*Math.sin(angle));
		line1.setCorners(line1_x1,line1_y1,line1_x2,line1_y2);
	}
	
	scene.addDrawable(mainCircle);
	scene.addDrawable(line1);
	//scene.addDrawable(line2);
	scene.addDrawable(tip);
	
	
}
