
var rectWidth;
var rectHeight;
var movingEdge;
var movingEdgeGrabbed = false;

function mouse_down (x, y) {
	if (movingEdge.isInside(x, y)) {
		movingEdgeGrabbed = true;
	}
	
	draw();
}

function mouse_move (x, y) {
	if (movingEdgeGrabbed) {
		movingEdge.x = x;
	}
	
	draw();
}

function mouse_up () {
	movingEdgeGrabbed = false;
}

function init() {
	mouseIsDown = false;
	angleGrabbed = false;
	
	rectWidth = 200;
	rectHeight = 100;
	
	movingEdge = new Drawable(canvasWidth/2 + rectWidth/2, canvasHeight/2 - rectHeight/2, 20, rectHeight);
}

function draw() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	
	context.lineWidth = 4;
	context.lineCap = 'round';

	context.fillStyle = 'teal';
	context.strokeStyle = 'black';
	drawRectangle(canvasWidth/2, canvasHeight/2, rectWidth, rectHeight);
	
	context.beginPath();
	context.lineWidth = 8;
	context.strokeStyle = 'maroon';
	context.moveTo(movingEdge.x, movingEdge.y);
	context.lineTo(movingEdge.x, movingEdge.y + movingEdge.height);
	context.stroke();
}
