var canvas;
var context;
var ipad;
var canvasWidth;
var canvasHeight;
var scene;

$(document).ready(function() {
	
	scene = Scene.create();
	
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
	
	window.requestAnimFrame = (function() {
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function(/* function */ callback, /* DOMElement */ element){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	
	if (ipad) {
		$("#animation_canvas").bind('touchstart', function(e) {
			var x = e.originalEvent.targetTouches[0].pageX - this.offsetLeft;
			var y = e.originalEvent.targetTouches[0].pageY - this.offsetTop;
			scene.mouse_down(x, y);
		});	
	} else {
		$("#animation_canvas").mousedown(function(e) {
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			scene.mouse_down(x, y);
	   	});
	}

	if (ipad) {
		$("#animation_canvas").bind('touchmove', function(e) {
			var x = e.originalEvent.targetTouches[0].pageX - this.offsetLeft;
			var y = e.originalEvent.targetTouches[0].pageY - this.offsetTop;
			scene.smouse_move(x, y);
			e.originalEvent.preventDefault();
		});
	} else {
		$("#animation_canvas").mousemove(function(e) {
			var x = e.pageX - this.offsetLeft;
			var y = e.pageY - this.offsetTop;
			scene.mouse_move(x, y);
	   	});
	}

	if (ipad) {
		$(document).bind('touchend', function(e) {
			scene.mouse_up();
		});		
	} else {
		$(document).mouseup(function(e) {
			scene.mouse_up();
		});
	}
	
	animationInit();
	mainLoop();
});

function mainLoop() {
	scene.draw();
	requestAnimFrame(mainLoop);
}

function clone(object) {
  function OneShotConstructor(){}
  OneShotConstructor.prototype = object;
  return new OneShotConstructor();
}

function forEachIn(object, action) {
  for (var property in object) {
    if (object.hasOwnProperty(property))
      action(property, object[property]);
  }
}

Object.prototype.create = function() {
  var object = clone(this);
  if (typeof object.construct == "function")
    object.construct.apply(object, arguments);
  return object;
};

Object.prototype.extend = function(properties) {
  var result = clone(this);

  forEachIn(properties, function(name, value) {
    result[name] = value;
  });
  return result;
};

var Scene = {
	construct: function () {
		this.drawables = [];
	},

	addDrawable: function(drawable) {
		this.drawables.push(drawable)
	},
	
	needsRedraw: true,
	redraw: function () {
		this.needsRedraw = true;
	},

	draw: function () {
		if (this.needsRedraw) {
			context.clearRect(0, 0, canvasWidth, canvasHeight);
			for (var i=0; i<this.drawables.length; i++) {
				if (this.drawables[i].visible) {
			    	this.drawables[i].draw();
				}
			}
			
			this.needsRedraw = false;
		}
	},
	
	//Event Handling
	mouse_down: function (x, y) {
		for (var i=this.drawables.length; i>0; i--) {
			if (this.drawables[i-1].mouse_down(x, y)) {
				return true;
			}
		}
		
		if (typeof this.onMouseDown == "function") {
			return this.onMouseDown(x, y);
		}
		
		return false;
	},
	
	mouse_move: function (x, y) {
		for (var i=this.drawables.length; i>0; i--) {
			if (this.drawables[i-1].mouse_move(x, y)) {
				return true;
			}
		}
		
		if (typeof this.onMouseMove == "function") {
			return this.onMouseMove(x, y);
		}
		
		return false;
	},
	
	mouse_up: function () {
		for (var i=this.drawables.length; i>0; i--) {
			if (this.drawables[i-1].mouse_up()) {
				return true;
			}
		}
		
		if (typeof this.onMouseUp == "function") {
			return this.onMouseUp(x, y);
		}
		
		return false;
	},

	// Utility Functions
	drawLine: function (x1, y1, x2, y2) {
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
	},

	drawTriangle: function (x1, y1, x2, y2, x3, y3) {
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.lineTo(x3, y3);
		context.closePath();
		context.fill();

		this.drawLine(x1, y1, x2, y2);
		this.drawLine(x2, y2, x3, y3);
		this.drawLine(x3, y3, x1, y1);
	},

	drawRectangle: function (x, y, width, height) {
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(x + width, y);
		context.lineTo(x + width, y + height);
		context.lineTo(x, y + height);
		context.closePath();
		context.fill();
		context.stroke();
	},
	
	// Math Functions
	Math:{
		distance: function (x1, y1, x2, y2) {
			return Math.sqrt((x1-x2) * (x1-x2) + (y1-y2)*(y1-y2));
		}
	}
	
};

var Drawable = {
	construct: function (x, y, width, height) {
		this.setBoundingBox(x, y, width, height);
	},
	
	contains: function (x, y) {
		return (x < (this.x() + this.width()) &&
		 		x > (this.x()) &&
		 		y < (this.y() + this.height()) &&
				y > (this.y()));
	},
	
	draw: function() {
		context.strokeStyle = this.strokeStyle;
		context.fillStyle = this.fillStyle;
		context.lineWidth = this.lineWidth;
		context.lineCap = this.lineCap;
	},		
	
	// Getters
	x: function () {
		return this._x;
	},
	
	y: function () {
		return this._y;
	},
	
	width: function () {
		return this._width;
	},
	
	height: function () {
		return this._height;
	},
	
	centerX: function () {
		return this.x() + this.width()/2;
	},
	
	centerY: function () {
		return this.y() + this.height()/2;
	},
	
	// Setters
	setBoundingBox: function (x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
		
		scene.redraw();
	},
	
	setOrigin: function (x, y) {
		this._x = x;
		this._y = y;
	},
	
	setX: function (x) {
		this._x = x;
	},
	
	setY: function (y) {
		this._y = y;
	},
	
	setCenter: function (centerX, centerY) {
		this._x = centerX - this.width()/2;
		this._y = centerY - this.height()/2;
	},
	
	
	// Event Handling
	mouse_down: function (x, y) {
		if (typeof this.onMouseDown == "function") {
			return this.onMouseDown(x, y);
		}
		
		return false;
	},
	
	mouse_move: function (x, y) {
		if (typeof this.onMouseMove == "function") {
			return this.onMouseMove(x, y);
		}
		
		return false;
	},
	
	mouse_up: function () {
		if (typeof this.onMouseUp == "function") {
			return this.onMouseUp();
		}
		
		return false;
	},
		
	visible: true,
		
	// Drawing Style		
	strokeStyle: 'black',
	fillStyle: 'white',
	lineWidth: 4,
	lineCap: 'round'
};

var Movable = Drawable.extend ({
	construct: function (x, y, width, height) {
		Drawable.construct.call(this, x, y, width, height);
	},
	
	onMouseDown: function (x, y) {
		if (this.contains(x, y) && this.movable) {
			this.moving = true;
			this.offset_x = x - this.x();
			this.offset_y = y - this.y();
			return true;
		} else {
			return false;
		}
	},
	
	onMouseMove: function (x, y) {
		if (this.moving) {
			if (!this.lockMovementX) {
				this.setX(x - this.offset_x);
			}
			
			if (!this.lockMovementY) {
				this.setY(y - this.offset_y);
			}
			
			if (typeof this.onMove == "function") {
				this.onMove(this.x(), this.y());
			}
			scene.redraw();
			return true;
		} else {
			return false;
		}
	},
	
	onMouseUp: function () {
		if (this.moving) {
			this.moving = false;
			return true;
		} else {
			return false;
		}
	},
	
	movable: false,
	moving: false,
	lockMovementX: false,
	lockMovementY: false
});

var Line = Movable.extend ({
	construct: function (x1, y1, x2, y2) {
		this.setCorners(x1, y1, x2, y2);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
	},
	
	draw: function () {
		Movable.draw.call(this);
		Scene.drawLine(this.x1(), this.y1(), this.x2(), this.y2());
	},
	
	// Getters
	x1: function () {
		return this.x() + this._x1;
	},
	
	y1: function () {
		return this.y() + this._y1;
	},
	
	x2: function () {
		return this.x() + this._x2;
	},
	
	y2: function () {
		return this.y() + this._y2;
	},
	
	// Setters
	setCorners: function (x1, y1, x2, y2) {
				this._width = Math.max(Math.abs(x1-x2), 20);
				this._height = Math.max(Math.abs(y1-y2), 20);
				this.setCenter((x1 + x2)/2, (y1 + y2)/2);
				this._x1 = x1 - this.x();
				this._y1 = y1 - this.y();
				this._x2 = x2 - this.x();
				this._y2 = y2 - this.y();
				
				scene.redraw();
	}
});


var Arc = Movable.extend ({
	construct: function (centerX, centerY, radius, startAngle, endAngle, isCounterClockwise) {
		this.setRadius(radius);
		this.setStartAngle(startAngle);
		this.setEndAngle(endAngle);
		this.setCenter(centerX, centerY);
		this.setDirection(isCounterClockwise);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
		this.fillStyle = "rgba(0,0,0,0)";
	},
			
	draw: function () {
		Movable.draw.call(this);
		context.beginPath();
		context.arc(this.centerX(), this.centerY(), this.radius(), -this.startAngle(), -this.endAngle(), this.direction());
		context.fill();
		context.stroke();
	},
	
	// Getters
	radius: function () {
		return this._radius;
	},
	
	startAngle: function () {
		return this._startAngle;
	},
	
	endAngle: function () {
		return this._endAngle;
	},
	
	direction: function (){
		return this._isCounterClockwise;
	},
	
	// Setters
	setRadius: function (radius) {
		this._radius = radius;
		this._width = 2*radius;
		this._height = 2*radius;
		scene.redraw();
	},
	
	setStartAngle: function (startAngle) {
		while (startAngle < 0) {
			startAngle += 2*Math.PI;
		}
		
		while (startAngle > 2*Math.PI) {
			startAngle -= 2*Math.PI;
		}
		
		this._startAngle = startAngle;
		scene.redraw();
	},
	
	setEndAngle: function (endAngle) {
		while (endAngle < 0) {
			endAngle += 2*Math.PI;
		}
		
		while (endAngle > 2*Math.PI) {
			endAngle -= 2*Math.PI;
		}
		
		this._endAngle = endAngle;
		scene.redraw();
	},
	
	setDirection: function (bool){
		this._isCounterClockwise=bool;
		scene.redraw();
	}
});

var Circle = Arc.extend ({
	construct: function (centerX, centerY, radius) {
		Arc.construct.call(this, centerX, centerY, radius, 0, Math.PI * 2, true);
		this.fillStyle = 'white';
	}
});

var Sector = Arc.extend ({
	construct: function (centerX, centerY, radius, startAngle, endAngle) {
		Arc.construct.call(this, centerX, centerY, radius, startAngle, endAngle, true);
		this.fillStyle = 'white';
	},
			
	draw: function () {
		Movable.draw.call(this);
		context.beginPath();
		context.moveTo(this.centerX(),this.centerY());
		context.arc(this.centerX(), this.centerY(), this.radius(), -this.startAngle(), -this.endAngle(), true);
		context.closePath();
		context.fill();
		context.stroke();
	},

	contains: function (x,y) {
		var angle = findAngle(this.centerX(), this.centerY(), x, y);
		var dist=0;
		dist=Math.sqrt((x-this.centerX())*(x-this.centerX())+(y-this.centerY())*(y-this.centerY()));
		return angle > this.startAngle() && angle < this.endAngle() && dist <= this.radius();
	}
});

var Triangle = Movable.extend ({
	construct: function (x1, y1, x2, y2, x3, y3) {
		this.setCorners(x1, y1, x2, y2, x3, y3);
		Movable.construct.call(this, this.x(), this.y(), this.width(), this.height());
	},
			
	// Drawing
	draw: function () {
		Movable.draw.call(this);	
		Scene.drawTriangle(this.x1(), this.y1(), this.x2(), this.y2(), this.x3(), this.y3());
	},
	
	// Getters
	x1: function () {
		return this.x() + this._x1;
	},
	
	y1: function () {
		return this.y() + this._y1;
	},
	
	x2: function () {
		return this.x() + this._x2;
	},
	
	y2: function () {
		return this.y() + this._y2;
	},
	
	x3: function () {
		return this.x() + this._x3;
	},

	y3: function () {
		return this.y() + this._y3;
	},
	
	// Setters
	setCorners: function (x1, y1, x2, y2, x3, y3) {
		_left = Math.min(x1,x2,x3);
		_right = Math.max(x1,x2,x3);
		_top = Math.min(y1,y2,y3);
		_bottom = Math.max(y1,y2,y3);
		
		this._x = _left;
		this._y = _top;
		this._width = _right-_left;
		this._height = _bottom-_top;
		
		this._x1 = x1 - this.x();
		this._y1 = y1 - this.y();
		this._x2 = x2 - this.x();
		this._y2 = y2 - this.y();
		this._x3 = x3 - this.x();
		this._y3 = y3 - this.y();
	
		scene.redraw();
	}
});

var Rectangle = Movable.extend({
	construct: function (x, y, width, height) {
		Movable.construct.call(this, x, y, width, height);
	},
	
	draw: function () {
		Movable.draw.call(this);
		Scene.drawRectangle(this.x(), this.y(), this.width(), this.height());
	},
	
	setCorners: function (x1, y1, x2, y2) {
		this._x = x1;
		this._y = y1;
		
		this._width = Math.abs(x1 - x2);
		this._height = Math.abs(y1 - y2);
		
		scene.redraw();
	}
});

var Label = Movable.extend({
	construct: function (x, y, text) {
		this.setText(text);
		Movable.construct.call(this, x, y, this.width(), this.height());
	},
	
	draw: function () {
		Movable.draw.call(this);
		context.font = this._fontSize + "pt " + this._fontFamily;
		context.textBaseline="top";
		context.fillText(this.text(), this.x(), this.y());
	},
	
	// Getters
	text: function () {
		return this._text;
	},
	
	fontSize: function() {
		return this._fontSize;
	},
	
	fontFamily: function () {
		return this._fontFamily;
	},
	
	// Setters
	setText: function (text) {
		this._text = text;
		this.measureSize();
				
		scene.redraw();
	},
	
	setFontSize: function (fontSize) {
		this._fontSize = fontSize;
		this.measureSize();
		scene.redraw();
	},
	
	setFontFamily: function (fontFamily) {
		this._fontFamily = fontFamily;
		this.measureSize();
		scene.redraw();
	},
	
	// Helpers
	measureSize: function () {
		this._height = this._fontSize * 1.5;
		context.font = this._fontSize + "pt " + this._fontFamily;
		this._width = context.measureText(this._text).width;
		
		scene.redraw();
	},
	
	// Members
	
	_fontSize: 16,
	_fontFamily: "Helvetica"
});

// Utility Functions

function findAngle(x1, y1, x2, y2) {
	if (y1 == y2) {
		if (x1 > x2) {
			return Math.PI;
		} else {
			return 0;
		}
	}
	
	if (x1 == x2) {
		if (y1 > y2) {
			return Math.PI/2;
		} else {
			return 3*Math.PI/2;
		}
		
	}
	
	angle = -Math.atan((y2 - y1) / (x2 - x1));
	
	if (x2 < x1) {
		angle += Math.PI;
	} else if (y2 > y1) {
		angle += 2 * Math.PI;
	}
	
	return angle;
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



