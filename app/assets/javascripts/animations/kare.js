
function animationInit () {
	x1 = canvasWidth/2 - 75, y1 = canvasHeight/2 - 50;
	x2 = canvasWidth/2 + 75, y2 = canvasHeight/2 + 50;
	
	rectangle = Rectangle.create(0, 0, 0, 0);
	rectangle.setCorners(x1, y1, x2, y2);
	rectangle.fillStyle = 'teal';
	
	line = Line.create(x2, y1, x2, y2);
	line.strokeStyle = 'red';
	line.movable = true;
	line.lockMovementY = true;
	line.onMove = function (x, y) {
		if ((x > x1 + rectangle.height - 10) && 
			(x < x1 + rectangle.height + 10)) {
			x = x1 + rectangle.height;
			
			line.setCorners(x, line.y1(), x, line.y2());
		}
		rectangle.setCorners(x1, y1, x, y2);
	};
	
	scene.addDrawable(rectangle);
	scene.addDrawable(line);
}
