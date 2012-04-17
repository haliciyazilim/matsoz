
function animationInit () {
	x1 = canvasWidth/2 - 75, y1 = canvasHeight/2 - 50;
	x2 = canvasWidth/2 + 75, y2 = canvasHeight/2 + 50;
	
	rectangle = Rectangle.create(x1, y1, x2 - x1, y2 - y1);
	rectangle.fillStyle = 'teal';
	
	line = Line.create(x2, y1, x2, y2);
	line.strokeStyle = 'red';
	line.movable = true;
	line.lockMovementY = true;
	line.onMove = function (x, y) {
		if ((this.centerX() > x1 + rectangle.height() - 10) && 
			(this.centerX() < x1 + rectangle.height() + 10)) {
			x = x1 + rectangle.height();
			
			line.setCorners(x, line.y1(), x, line.y2());
		}
		rectangle.setCorners(x1, y1, line.centerX(), y2);
	};
	
	scene.addDrawable(rectangle);
	scene.addDrawable(line);
}
