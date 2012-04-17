
function animationInit () {
	cornerHandle = Circle.create(canvasWidth/2 - 20, canvasWidth/2 - 100, 14);
	cornerHandle.fillStyle = 'red';
	cornerHandle.movable = true;
	cornerHandle.onMove = function (x, y) {
		triangle.setCorners(this.centerX(), this.centerY(), triangle.x2(), triangle.y2(), triangle.x3(), triangle.y3());
	};
	
	triangle = Triangle.create(cornerHandle.centerX(), cornerHandle.centerY(),
								 canvasWidth/2 - 60, canvasWidth/2 + 40,
								 canvasWidth/2 + 60, canvasWidth/2 + 40);
	triangle.fillStyle = 'teal';
	
	scene.addDrawable(triangle);
	scene.addDrawable(cornerHandle);
}
