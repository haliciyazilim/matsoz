function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	line1_x = 0, line1_y = 0;
	line2_x = 0, line2_y = 0;
	x2=center_x-100;
	y2=center_y;
	angle = 0;
	beta=0;
	radius=60;
	linearDist=0;
	
	mainCircle=Circle.create(center_x,center_y,radius);
	center=Circle.create(center_x,center_y,2);
	
	tip = Circle.create(x2,y2, 7);
	tip.fillStyle='red';
	tip.setMovable(true);
	
	linearDist=Math.sqrt((mainCircle.centerX()- x2)*(mainCircle.centerX()- x2)+(mainCircle.centerY()- y2)*(mainCircle.centerY()- y2));
	angle=findAngle(mainCircle.centerX(),mainCircle.centerY(), x2, y2);
	beta=Math.acos(radius/linearDist);
	line1_x=mainCircle.centerX()+radius*Math.cos(angle-beta);
	line1_y=mainCircle.centerY()-radius*Math.sin(angle-beta);
	
	line2_x=mainCircle.centerX()+radius*Math.cos(angle+beta);
	line2_y=mainCircle.centerY()-radius*Math.sin(angle+beta);
	
	line1Distance = Math.sqrt((line1_x-x2)*(line1_x-x2) + (line1_y-x2)*(line1_y-y2));
	line2Distance = Math.sqrt((line2_x-x2)*(line2_x-x2) + (line2_y-y2)*(line2_y-y2));
	
	line1=Line.create(x2,y2,line1_x+(line1_x-x2)/line1Distance*100,line1_y+(line1_y-y2)/line1Distance*100);
	line2=Line.create(x2,y2,line2_x+(line2_x-x2)/line2Distance*100,line2_y+(line2_y-y2)/line2Distance*100);
	
	dik1=Line.create(mainCircle.centerX(),mainCircle.centerY(),line1_x,line1_y);
	dik2=Line.create(mainCircle.centerX(),mainCircle.centerY(),line2_x,line2_y);
	
	
	//dik sembolleri
	sym_edge=10;
	dist1=Math.sqrt(radius*radius+sym_edge*sym_edge);
	alpha=Math.atan(sym_edge/radius);
	dist2=radius-sym_edge;
	teta=Math.atan(sym_edge/dist2);
	dist3=Math.sqrt(dist2*dist2+sym_edge*sym_edge);
	
	symbol1_x1 = mainCircle.centerX()+dist1*Math.cos(angle-beta-alpha);
	symbol1_y1 = mainCircle.centerY()-dist1*Math.sin(angle-beta-alpha);
	symbol1_x2 = mainCircle.centerX()+dist2*Math.cos(angle-beta);
	symbol1_y2 = mainCircle.centerY()-dist2*Math.sin(angle-beta);
	symbol1_x3 = mainCircle.centerX()+dist3*Math.cos(angle-beta-teta);
	symbol1_y3 = mainCircle.centerY()-dist3*Math.sin(angle-beta-teta);
	
	symbol2_x1 = mainCircle.centerX()+dist1*Math.cos(angle+beta+alpha);
	symbol2_y1 = mainCircle.centerY()-dist1*Math.sin(angle+beta+alpha);
	symbol2_x2 = mainCircle.centerX()+dist2*Math.cos(angle+beta);
	symbol2_y2 = mainCircle.centerY()-dist2*Math.sin(angle+beta);
	symbol2_x3 = mainCircle.centerX()+dist3*Math.cos(angle+beta+teta);
	symbol2_y3 = mainCircle.centerY()-dist3*Math.sin(angle+beta+teta);
	
	edge1_1=Line.create(symbol1_x1,symbol1_y1,symbol1_x3,symbol1_y3);
	edge1_2=Line.create(symbol1_x2,symbol1_y2,symbol1_x3,symbol1_y3);
		
	edge2_1=Line.create(symbol2_x1,symbol2_y1,symbol2_x3,symbol2_y3);
	edge2_2=Line.create(symbol2_x2,symbol2_y2,symbol2_x3,symbol2_y3);
	
	tip.onMove = function(x,y){
		new_x=tip.centerX(symbol2_x1,symbol2_y1,symbol2_x3,symbol2_y3); 
		new_y=tip.centerY(symbol2_x2,symbol2_y2,symbol2_x3,symbol2_y3); 
		
		linearDist=Math.sqrt((mainCircle.centerX()- new_x)*(mainCircle.centerX()- new_x)+(mainCircle.centerY()- new_y)*(mainCircle.centerY()- new_y));
		angle=findAngle(mainCircle.centerX(),mainCircle.centerY(), new_x, new_y);
		beta=Math.acos(radius/linearDist);
		
		
		line1_x=mainCircle.centerX()+radius*Math.cos(angle-beta);
		line1_y=mainCircle.centerY()-radius*Math.sin(angle-beta);
		
		line2_x=mainCircle.centerX()+radius*Math.cos(angle+beta);
		line2_y=mainCircle.centerY()-radius*Math.sin(angle+beta);
		
		line1Distance = Math.sqrt((line1_x-new_x)*(line1_x-new_x) + (line1_y-new_y)*(line1_y-new_y));
		line2Distance = Math.sqrt((line2_x-new_x)*(line2_x-new_x) + (line2_y-new_y)*(line2_y-new_y));
		
		line1.setCorners(tip.centerX(),tip.centerY(),line1_x+(line1_x-new_x)/line1Distance*100,line1_y+(line1_y-new_y)/line1Distance*100);
		line2.setCorners(tip.centerX(),tip.centerY(),line2_x+(line2_x-new_x)/line2Distance*100,line2_y+(line2_y-new_y)/line2Distance*100);
		
		symbol1_x1 = mainCircle.centerX()+dist1*Math.cos(angle-beta-alpha);
		symbol1_y1 = mainCircle.centerY()-dist1*Math.sin(angle-beta-alpha);
		symbol1_x2 = mainCircle.centerX()+dist2*Math.cos(angle-beta);
		symbol1_y2 = mainCircle.centerY()-dist2*Math.sin(angle-beta);
		symbol1_x3 = mainCircle.centerX()+dist3*Math.cos(angle-beta-teta);
		symbol1_y3 = mainCircle.centerY()-dist3*Math.sin(angle-beta-teta);
			
		symbol2_x1 = mainCircle.centerX()+dist1*Math.cos(angle+beta+alpha);
		symbol2_y1 = mainCircle.centerY()-dist1*Math.sin(angle+beta+alpha);
		symbol2_x2 = mainCircle.centerX()+dist2*Math.cos(angle+beta);
		symbol2_y2 = mainCircle.centerY()-dist2*Math.sin(angle+beta);
		symbol2_x3 = mainCircle.centerX()+dist3*Math.cos(angle+beta+teta);
		symbol2_y3 = mainCircle.centerY()-dist3*Math.sin(angle+beta+teta);
			
		dik1.setCorners(mainCircle.centerX(),mainCircle.centerY(),line1_x,line1_y);
		dik2.setCorners(mainCircle.centerX(),mainCircle.centerY(),line2_x,line2_y);
		edge1_1.setCorners(symbol1_x1,symbol1_y1,symbol1_x3,symbol1_y3);
		edge1_2.setCorners(symbol1_x2,symbol1_y2,symbol1_x3,symbol1_y3);
		edge2_1.setCorners(symbol2_x1,symbol2_y1,symbol2_x3,symbol2_y3);
		edge2_2.setCorners(symbol2_x2,symbol2_y2,symbol2_x3,symbol2_y3);
		
	}
	
	scene.addDrawable(mainCircle);
	scene.addDrawable(center);
	scene.addDrawable(line1);
	scene.addDrawable(line2);
	scene.addDrawable(tip);
	scene.addDrawable(dik1);
	scene.addDrawable(dik2);
	scene.addDrawable(edge1_1);
	scene.addDrawable(edge1_2);
	scene.addDrawable(edge2_1);
	scene.addDrawable(edge2_2);

	
	
}