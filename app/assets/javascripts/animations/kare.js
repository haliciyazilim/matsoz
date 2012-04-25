
function animationInit () {
	xt = canvasWidth/2 - 75, yt = canvasHeight/2 - 50;
	xb = canvasWidth/2 + 75, yb = canvasHeight/2 + 50;
	
	rectangle = Rectangle.create(xt, yt, xb - xt, yb - yt);
	//rectangle.setCorners(xb,yt,xb,yb);
	rectangle.fillStyle = 'teal';
	
	label=Label.create(40,30,"Aşagıdaki dikdörtgenden kare elde ediniz.");
	label.fillStyle='black';
	
	line = Line.create(xb, yt, xb, yb);
	line.strokeStyle = 'red';
	line.movable = true;
	line.lockMovementY = true;
	line.onMove = function (x, y) {
		if ((this.centerX() > xt + rectangle.height() -10 ) && 
			(this.centerX() < xt + rectangle.height() + 10)) {
			x = xt + rectangle.height();
			rectangle.strokeStyle = 'yellow';	
			label.setText("Kare bulundu!");

		}else{
			rectangle.strokeStyle = 'black';	
			label.setText("");
		}

		if(this.centerX() < xt + 5){		
			line.setCorners(xt, line.y1(), xt, line.y2());
		}else{
			line.setCorners(x, line.y1(), x, line.y2());
			rectangle.setCorners(xt, line.y1(), x, line.y2());
		}
	};
	
	scene.addDrawable(rectangle);
	scene.addDrawable(line);
	scene.addDrawable(label);
}
