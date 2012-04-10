
var handle;
var handleGrabbed;

function mouse_down (x, y) {
	if (handle.isInside(x, y)) {
		handleGrabbed = true;
	}

	draw();
}

function mouse_move (x, y) {
	if (handleGrabbed) {
		handle.x = x;
		handle.y = y;
	}
	
	draw();
}

function mouse_up () {
	handleGrabbed = false;
}

function init() {
	mouseIsDown = false;
	angleGrabbed = false;
	
	handle = new Drawable(canvasWidth/2 - 20, canvasWidth/2 - 100, 20, 20);
}

function draw() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	
	context.lineWidth = 4;
	context.lineCap = 'round';

	context.fillStyle = 'teal';
	drawTriangle(handle.x, handle.y,
				canvasWidth/2 - 60, canvasWidth/2 + 40,
				canvasWidth/2 + 60, canvasWidth/2 + 40);
		
	context.beginPath();
	context.arc(handle.x, handle.y, handle.width/2, 0, Math.PI * 2);
	context.fillStyle = "red";
	context.fill();
	context.stroke();
}
