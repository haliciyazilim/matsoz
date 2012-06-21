// JavaScript Document


var Main = function(){
	Main.raphaelInit();
	$(document).ready(Main.init);
}

Main.init = function(){
	Main.interaction = $('#interaction_container > .interaction').get(0);
	Main.objective = $('#interaction_container > .objective').get(0);
	Main.objective.className = "objective";
	//Main.InteractionContainer.appendChild(Main.ObjectiveContainer);
	Interaction.init(Main.interaction);
}
Main.raphaelInit = function(){
	
	Raphael.fn.triangle = function(x1,y1,x2,y2,x3,y3){
		var st = this.set();
		st.push(this.line(x1,y1,x2,y2));
		st.push(this.line(x2,y2,x3,y3));
		st.push(this.line(x3,y3,x1,y1));
		return st;
	};
	
	Raphael.fn.line = function(x1,y1,x2,y2){
		return this.path('M'+x1+','+y1+'L'+x2+','+y2);
	};
	
	Raphael.fn.fraction = function(top_x, top_y, nom, denom,scale) {
		var st = this.set();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		if (nom) {
			pay=this.text(top_x+scale*5/7, top_y, nom);
			pay.attr({"font-size" :scale});
			st.push(pay);	
		}
		if (denom) {
			payda=this.text(top_x+scale*5/7, c2+scale, denom);
			payda.attr({"font-size" :scale});
			st.push(payda);			
		}
		var kesirCizgi="M"+top_x+" "+c2+"L"+c3+" "+c2;
		st.push(this.path(kesirCizgi));
		return st;
	};
	
	Raphael.fn.segmentedUmbrella = function (cx, cy, r, numberOfSegments) {
		var st = this.set();

		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(-i)/numberOfSegments - 90, 360*(-i-1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	}
	
	Raphael.fn.segmentedCircle = function (cx, cy, r, numberOfSegments) {
		var st = this.set();

		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(i)/numberOfSegments - 90, 360*(i+1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	}
	
	Raphael.fn.segmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments) {
		var st = this.set();
				
		for (i = 0; i < horizontalSegments; i++) {
			for (j = 0; j < verticalSegments; j++) {
				st.push(
					this.rect(x + i * width/horizontalSegments, y + j * height/verticalSegments, width/horizontalSegments, height/verticalSegments)
				);
			}
		}
		return st;
	}
}
Main.setObjective = function(str){
	Main.objective.innerHTML = str;
}
Main();

var Util = {
	
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
	degreeToRadians: function  (angle) {
			return angle * (Math.PI / 180);
		}
};