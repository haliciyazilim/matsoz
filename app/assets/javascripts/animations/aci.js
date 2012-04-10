
var angle;
var angleGrabbed;

var angleHandle;

var center_x;
var center_y;

function mouse_down (x, y) {
	if (angleHandle.isInside(x, y)) {
		angleIsGrabbed = true;
	}

	draw();
}

function mouse_move (x, y) {
	if (angleIsGrabbed) {
		angle = Math.atan((y - center_y) / (x - center_x));
		
		if (x < center_x) {
			angle -= Math.PI;
		} else if (y > center_y) {
			angle -= Math.PI * 2;
		}
		
		if (angle < - Math.PI * 2 + Math.PI / 30 || angle > - Math.PI / 30) {
			angle = 0;
		} else if (angle < - Math.PI / 2 + Math.PI / 30 && angle > - Math.PI / 2 - Math.PI / 30) {
			angle = - Math.PI / 2;
		} else if (angle < - Math.PI + Math.PI / 30 && angle > - Math.PI - Math.PI / 30) {
			angle = - Math.PI;
		} else if (angle < - Math.PI * 1.5 + Math.PI / 30 && angle > - Math.PI * 1.5 - Math.PI / 30) {
			angle = - Math.PI * 1.5;
		}
	}
	
	draw();
}

function mouse_up () {
	angleIsGrabbed = false;
}

function init() {
	center_x = canvasWidth/2 - 35;
	center_y = canvasHeight/2 + 35;
	
	angle = -Math.PI * 2.0/3.0;
	mouseIsDown = false;
	angleGrabbed = false;
	
	angleHandle = new Drawable(0, 0, 20, 20);
}

function draw() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	
	context.lineWidth = 4;
	context.lineCap = 'round';
	
	context.beginPath();
	context.arc(center_x, center_y, 30, 0, angle, true);
	context.strokeStyle = "green";
	context.stroke();
	
	context.beginPath();
	context.strokeStyle="black";
	drawLine(center_x, center_y, center_x + 100, center_y);
	drawLine(center_x, center_y, center_x + 100 * Math.cos(angle), center_y + 100 * Math.sin(angle));

	context.beginPath();
	angleHandle.x = center_x + 100 * Math.cos(angle);
	angleHandle.y = center_y + 100 * Math.sin(angle);
	context.arc(angleHandle.x, angleHandle.y, angleHandle.width/2, 0, Math.PI * 2);
	context.fillStyle = "red";
	context.fill();
	context.stroke();
		
    context.fillStyle="green";
    context.textAlign="center";
    context.textBaseline="middle";
    context.font="16pt Helvetica";
	context.fillText(Math.abs(Math.floor(angle / Math.PI * 180)) + "°", center_x + 40, center_y - 40);
	
}
