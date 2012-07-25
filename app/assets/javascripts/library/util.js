
var Util = {
	
	isInteger: function (value) {
			var intRegex = /^\d+$/;
			return intRegex.test(value);
		},
		
	isNumber: function (n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		},

	findDistance:function (x1,y1,x2,y2){
			var _i = x1-x2;
			var _j = y1-y2;
			return Math.sqrt(_i*_i + _j*_j);
		},
	
	findAngle:function (x1, y1, x2, y2) {
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
			
		},
	radianToDegree: function(a){
			return Math.round(a * (180/Math.PI));
		},
	
	//keep these two functions
	degreeToRadian : function (angle){
			return angle * (Math.PI / 180);
		},
	degreeToRadians: function (angle){
			return angle * (Math.PI / 180);
		},
		
		
	formatNumber: function(number,decimal){
			return Math.floor(number * decimal * 10) / (decimal * 10);
		},
	numberTurkishFloating: function(number,decimal){
			if(decimal==null || decimal==undefined)
				decimal = 1;
			
			if (decimal < 1) {
				return ""+Math.floor(number+0.5);
			}
			
			var float = number - Math.floor(number);
			var result = ""+Math.floor(number)+",";
			for(var i=0;i<decimal;i++) {
				result += Math.floor(float*Math.pow(10,i+1) + (i==decimal-1?0.5000000001:0)) % 10; 
			}
			
			return result;
		},
	rand01: function(){
			return Math.floor(Math.random()*2);
		},
		
	randomInteger: function(start, end) {
			return Math.floor(Math.random()*(end-start)+start)
		},
	randomDigit : function(){
			return Util.randomInteger(0,10);
		},
	
	loadImages: function(imageArray, callback) {
			var totalNoOfImages = imageArray.length;
			for (var key in imageArray) {
				image = imageArray[key];
				var img = $("<img id='"+image.id+"' />").attr('src', image.src).load(function() {
					if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0 || this.naturalWidth == null) {
						throw "Broken Image: " + image;
						totalNoOfImages--;
					} else {
						totalNoOfImages--;
						if (totalNoOfImages == 0) {
							callback();
						}
					}
				});
				$("head").append(img);
			}
		},
	getShuffledArray : function(to,from){
			if(from == null || from == undefined )
				from = 0;
			var a = [];
			for(var i=from,index=0; i<to ;i++,index++){
				a[index] = i;
			}
			var len = Math.floor(to - from);
			
			for(var i = len-1; i>=0 ; i--) {
				var p = parseInt(Math.random()*len,10);
				var t = a[i];
				a[i] = a[p];
				a[p] = t;
			}
			return a;
		},
	centerOfPoints:function(points){
			var total_x = 0;
			var total_y = 0;
			for(var i=0;i<points.length;i++){
				total_x += points[i].x;
				total_y += points[i].y;
			}
			var x = total_x / points.length;
			var y = total_y / points.length;
			return new Point(x,y);
		}
};