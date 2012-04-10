
var canvas;
var context;
var ipad;
var canvasWidth;
var canvasHeight;

$(document).ready(function() {
	ipad = (window.navigator.userAgent.match('iPad'))?true:false;
	
	canvas = $("#animation_canvas").get(0);
	context = canvas.getContext("2d");

	canvasWidth = canvas.width;
	canvasHeight = canvas.height;

	if(window.devicePixelRatio == 2) {
		canvas.setAttribute('width', canvasWidth * 2);
		canvas.setAttribute('height', canvasHeight * 2);
		context.scale(2,2);
	}
	
	if (ipad) {
		$("#animation_canvas").bind('touchstart', function(e) {
			var x = e.originalEvent.targetTouches[0].pageX - this.offsetLeft;
			var y = e.originalEvent.targetTouches[0].pageY - this.offsetTop;
			mouse_down(x, y);
		});	
	} else {
		$("#animation_canvas").mousedown(function(e) {
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			mouse_down(x, y);
	   	});
	}

	if (ipad) {
		$("#animation_canvas").bind('touchmove', function(e) {
			var x = e.originalEvent.targetTouches[0].pageX - this.offsetLeft;
			var y = e.originalEvent.targetTouches[0].pageY - this.offsetTop;
			mouse_move(x, y);
			e.originalEvent.preventDefault();
		});
	} else {
		$("#animation_canvas").mousemove(function(e) {
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			mouse_move(x, y);
	   	});
	}

	if (ipad) {
		$(document).bind('touchend', function(e) {
			mouse_up();
		});		
	} else {
		$(document).mouseup(function(e) {
			mouse_up();
		});
	}
	
	init();
	draw();
});

function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineTo(x3, y3);
	context.closePath();
	context.fill();
	
	drawLine(x1, y1, x2, y2);
	drawLine(x2, y2, x3, y3);
	drawLine(x3, y3, x1, y1);
}

function drawRectangle(center_x, center_y, width, height) {
	context.beginPath();
	context.moveTo(center_x - width/2, center_y - height/2);
	context.lineTo(center_x + width/2, center_y - height/2);
	context.lineTo(center_x + width/2, center_y + height/2);
	context.lineTo(center_x - width/2, center_y + height/2);
	context.closePath();
	context.fill();
	context.stroke();
}

function Drawable(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.isInside = function(x, y) {
		return (x < (this.x + this.width) &&
		 		x > this.x &&
		 		y < (this.y + this.height) &&
				y > this.y);
	};
}

// function setPixel(imageData, x, y, r, g, b, a) {
//     index = (x + y * imageData.width) * 4;
//     imageData.data[index+0] = r;
//     imageData.data[index+1] = g;
//     imageData.data[index+2] = b;
//     imageData.data[index+3] = a;
// }




// // create a new pixel array
// imageData = context.createImageData(canvas.width, canvas.height);
// 
// for (i = 0; i < imageData.width; i++) {
// 	for (j = 0; j < imageData.height; j++) {
// 		if ((i % 2) == (j % 2)) {
// 			setPixel(imageData, i, j, 255,255,255,255)
// 		} else {
// 			setPixel(imageData, i, j, 0,0,0,255)
// 		}
// 	}
// }
// 
// // copy the image data back onto the canvas
// context.putImageData(imageData, 0, 0); // at coords 0,0



