
function animationInit () {
	x1 = canvasWidth/2 - 20, y1 =  canvasWidth/2 - 100;
	x2 = canvasWidth/2 - 60, y2 = canvasWidth/2 + 40;
	x3 = canvasWidth/2 + 60, y3 = canvasWidth/2 + 40;

	cornerHandle = Circle.create(x1, y1, 10);
	cornerHandle.fillStyle = 'red';
	cornerHandle.setMovable(true);
	cornerHandle.onMove = function (x, y) {
		if (this.centerX() < x2 + 10 && this.centerX() > x2 - 10) {
			x = x2;
			this.setCenter(x2, this.centerY());
		} else if (this.centerX() < x3 + 10 && this.centerX() > x3 - 10) {
			x = x3;
			this.setCenter(x3, this.centerY());
		}
		
		triangle.setCorners(this.centerX(), this.centerY(), triangle.x2(), triangle.y2(), triangle.x3(), triangle.y3());
	};

	triangle = Triangle.create(x1, y1, x2, y2, x3, y3);
	
	triangle.fillStyle = 'teal';
	
	scene.addDrawable(triangle);
	scene.addDrawable(cornerHandle);
}
