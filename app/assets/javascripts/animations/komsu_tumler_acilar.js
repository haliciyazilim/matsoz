function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2, y3 = canvasHeight/2 - 100 ;
	angle = 0;
	
	angleArc=Arc.create(center_x,center_y,15,0,0);
	angleArc.strokeStyle='blue';
	
	label=Label.create(center_x+35,center_y-15,"0°");
	label.fillStyle='blue';
	label.setFontSize(10);//px
	
	angleArc2=Arc.create(center_x,center_y,25,0,-Math.PI/2);
	angleArc2.strokeStyle='green';
	
	label2=Label.create(center_x+7,center_y-50,"90°");
	label2.fillStyle='green';
	label2.setFontSize(10);//px
	
	angleTip = Circle.create(x2,y2,10);
	angleTip.fillStyle='red';
	angleTip.movable=true;
	
    line1 = Line.create(center_x, center_y, x2, y2)
	line1.movable = false;
	
	line2 = Line.create(center_x, center_y, x2, y2);
	line2.movable = false;
	
	line3 = Line.create(center_x, center_y, x3, y3);
	line3.movable = false;
	
	//create info label of angles
	labelAlignmentY = center_y+50;
	
	infoLabel1 = Label.create(60, labelAlignmentY, "");
	infoLabel1.fillStyle='blue';

	infoLabel2 = Label.create(120, labelAlignmentY, "");
	infoLabel2.fillStyle='black';
	
	infoLabel3 = Label.create(center_x+100, labelAlignmentY, "");
	infoLabel3.fillStyle='green';
	
	angleTip.onMove = function(x,y){
		
		new_x=10 + x; 
		new_y=10 + y; 
		
		angle = Math.atan((new_y - center_y) / (new_x - center_x));
	
		
		if (new_x >= center_x && new_y < center_y) {
			angle = 0 - angle;
		} else if (new_x < center_x && new_y <= center_y) {
			angle = Math.PI/2 ;
		}else if(new_x <= center_x && new_y > center_y){
			angle = Math.PI/2;
		}else if(new_x > center_x && new_y >= center_y){
			angle =  0;
		}
		
		if (angle < Math.PI / 2 + Math.PI / 30 && angle > Math.PI / 2 - Math.PI / 30) {
			angle = Math.PI / 2;
		} else if (angle < Math.PI / 30) {
			angle = 0;
		} 

		toDegree=angle*180/Math.PI;
		integerDeg=Math.floor(toDegree+0.5);
		complement= 90 - integerDeg;
		label.setText(integerDeg+"°");
		label2.setText(complement+"°");
		infoLabel1.setText(integerDeg+"°");
		infoLabel2.setText("nin komşu tümler açısı");
		infoLabel3.setText(complement+"°");
		angleTip.setCenter(center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		line1.setCorners(center_x,center_y,center_x+100*Math.cos(angle),center_y-100*Math.sin(angle));
		if(angle == Math.PI/2){
			angleArc.setEndAngle(0 - Math.PI/2);
			angleArc2.setStartAngle(0);
			angleArc2.setEndAngle(0);
		}else{
			angleArc.setEndAngle(0 - angle);
			angleArc2.setStartAngle(0 - angle);
			angleArc2.setEndAngle(0 - Math.PI/2);
		}
	}
	
	scene.addDrawable(label);
	scene.addDrawable(label2);
	scene.addDrawable(infoLabel1);
	scene.addDrawable(infoLabel2);
	scene.addDrawable(infoLabel3);
	scene.addDrawable(angleArc);
	scene.addDrawable(angleArc2);
	scene.addDrawable(line3);
	scene.addDrawable(line2);
	scene.addDrawable(line1);
	scene.addDrawable(angleTip);
}
