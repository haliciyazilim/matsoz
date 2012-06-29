// JavaScript Document

var Main = function(){
	$(document).ready(Main.init);
}

Main.config = {
	defaultLibrary: "raphael"
};

Main.init = function(){
	Main.interaction = $('#interaction_container > .interaction').get(0);
	Main.objective = $('#interaction_container > .objective').get(0);
	Main.objective.className = "objective";
	//Main.InteractionContainer.appendChild(Main.ObjectiveContainer);
	var framework;
	if (typeof(Interaction.getFramework) == "function") {
		framework = Interaction.getFramework();
	} else {
		framework = Main.config.defaultLibrary;
	}
	
	if (framework == 'raphael') {
		Main.raphaelInit();
		Interaction.init(Main.interaction);
	} else if (framework == 'paper') {
		Main.scale = 1;
		paper.install(window);
		Main.paperInit();
		width = 512;
		height = 320;
		Main.interaction.innerHTML = "<canvas id='interaction_canvas' class='interaction_canvas' width='"+width*Main.scale+"px' height='"+height*Main.scale+"px'></canvas>"
		canvas = $('.interaction_canvas').get(0);
		paper.setup(canvas);
		AnimationManager();
		Interaction.init(Main.interaction);
	}
};

Main.paperInit = function() {
	Path.Triangle = function(p1,p2,p3){
		var triangle = new Path();
		triangle.add(p3);
		triangle.add(p1);
		triangle.add(p2);
		triangle.closed = true;
		return triangle;
	}
	Path.Bowl = function(x,y,w,h){
		var bowl = new Path();
		bowl.add([x,y]);
		bowl.add([x+w,y]);
		bowl.add([x+w*0.8,y+h]);
		bowl.add([x+w*0.2,y+h]);
		bowl.closed = true;
		return bowl;
	};
	Path.Rhomboid = function(p,s,_w){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var rhomboid = new Path();
		rhomboid.add([x+_w,y]);
		rhomboid.add([x+_w+w,y]);
		rhomboid.add([x+w,y+h]);
		rhomboid.add([x,y+h]);
		rhomboid.closed = true;
		return rhomboid;
	}
	Path.Cube = function(p,a){
		var x=p.x,y=p.y;
		var _x=x+a*0.3,_y=y+a*0.3;
		var cube = new Path();
		cube.add([x	,_y]);
		cube.add([x	,_y+a]);
		cube.add([x+a  ,_y+a]);
		cube.add([x+a  ,_y]);
		cube.add([x	,_y]);
		cube.add([_x   ,y]);
		cube.add([_x+a ,y]);
		cube.add([x+a  ,_y]);
		cube.add([x+a  ,_y+a]);
		cube.add([_x+a ,y+a]);
		cube.add([_x+a ,y]);
		cube.add([x+a	,_y])
		cube.closed = true;
		return cube;
	}
	Path.Rhombus = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var rhombus = new Path();
		rhombus.add([x,y+h*0.5]);
		rhombus.add([x+w*0.5,y]);
		rhombus.add([x+w,y+h*0.5]);
		rhombus.add([x+w*0.5,y+h]);
		rhombus.closed = true;
		return rhombus;
	}
	Path.Trapezoid = function(p,s,_w){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var trapezoid = new Path();
		trapezoid.add([x,y+h]);
		trapezoid.add([x+(w-_w)*0.5,y]);
		trapezoid.add([x+(w-_w)*0.5+_w,y]);
		trapezoid.add([x+w,y+h]);
		trapezoid.closed = true;
		return trapezoid;
	}
	Path.RegularPolygon = function(p,s,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return new Path.EquiradialPolygon(p,s,angles,o);
	};
	Path.EquiradialPolygon = function(p,s,angles,o){
		console.log(angles);
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var polygon = new Path();
		for(var i=0; i<angles.length ;i++){
			var _angle = Util.degreeToRadians(_o+angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			polygon.add([_x,_y]);
		};
		polygon.closed=true;
		return polygon;
	}
};

Main.raphaelInit = function(){
	Raphael.fn.triangle = function(x1,y1,x2,y2,x3,y3){
		var pathstring ='';
		pathstring += 'M'+x1+','+y1+'L'+x2+','+y2;
		pathstring += 'L'+x3+','+y3+' z';
		var triangle = this.path(pathstring);
		triangle.attr({x:x1,y:y3});
		return triangle;
	};
	
	Raphael.fn.line = function(x1,y1,x2,y2){
		var line = this.path('M'+x1+','+y1+'L'+x2+','+y2);
		line.attr('x',x1);
		line.attr('y',y1);
		line.data('isPath',true);
		return line;
	};
	
	Raphael.fn.bowl = function(x,y,w,h){
		var bowl = this.path('M'+x+','+y+'L'+(x+w)+','+y+'L'+(x+w*0.8)+','+(y+h)+'L'+(x+0.2*w)+','+(y+h)+' z');
		bowl.attr('x',x);
		bowl.attr('y',y);
		bowl.attr('width',w);
		bowl.attr('height',h);
		return bowl;
	};
	
	Raphael.fn.rhomboid = function(x,y,_w,w,h){
		var pathstring = '';
		pathstring += 'M'+(x+_w)+','+y+'L'+(x+_w+w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += 'L'+x+','+(y+h)+' z';
		var rhomboid = this.path(pathstring);
		rhomboid.attr({'x':x,'y':y});
		return rhomboid;
	};
	
	Raphael.fn.cube = function(x,y,a){
		var _x=x+a*0.4,_y=y+a*0.2;	
		var cube = this.path('M'+x+','+_y+'L'+x+','+(_y+a)+'L'+(x+a)+','+(_y+a)+'L'+(x+a)+','+_y+'L'+x+','+_y+'L'+_x+','+y+'L'+(_x+a)+','+y+'L'+(x+a)+','+_y+'L'+(x+a)+','+(_y+a)+'L'+(_x+a)+','+(y+a)+'L'+
		(_x+a)+','+y);
		cube.data('isPath',true);
		cube.attr('x',x);
		cube.attr('y',y);
		return cube;
	};
	Raphael.fn.rhombus = function(x,y,w,h){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y);
		pathstring += 'L'+(x+w)+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y+h);
		pathstring += 'z';
		var rhombus = this.path(pathstring);
		rhombus.data({'x':x,'y':y,'w':w,'h':h});
		return rhombus;
	}
	Raphael.fn.trapezoid = function(x,y,w,h,_w){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h);
		pathstring += 'L'+(x+(w-_w)*0.5)+','+y;
		pathstring += 'L'+(x+(w-_w)*0.5+_w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += ' z';
		var trapezoid = this.path(pathstring);
		trapezoid.data({'x':x,'y':y,'w':w,'h':h});
		return trapezoid;
	}
	Raphael.fn.sphere = function(x,y,r,fill){
		var sphere = this.ellipse(x, y, r, r).attr({
			fill: "r(.3,.25) white-" + fill,
			stroke: "none"
		});
		sphere.data('isEllipse',true);
		sphere.attr('x',x);
		sphere.attr('y',y);
		return sphere;
	};
	Raphael.fn.sline = function(x,y,l){
		var pathstring='';
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y-10);
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y+10);
		pathstring += 'M'+x+','+y+'L'+(x+l)+','+y;
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y-10);
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y+10);
		var sline = this.path(pathstring);
		sline.attr('x',x);
		sline.attr('y',y);
		return sline;
	}
	Raphael.fn.cylinder = function(x,y,w,h){
		var x1,y1,x2,y2;
		var pathstring='';
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y-h*0.2;
		y2 = y-h*0.2;
		pathstring += 'M'+x+','+y+'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		pathstring += 'L'+x+','+(y+h);
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h+h*0.2;
		y2 = y+h+h*0.2;
		pathstring += 'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+(y+h);
		pathstring += 'L'+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		var cylinder = this.path(pathstring);
		cylinder.data('isPath',true);
		cylinder.attr('x',x);
		cylinder.attr('y',y);
		cylinder.attr('fill','#fff');
		return cylinder;
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
	};
	
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
	};
	
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
	};
	
	Raphael.fn.regularPolygon = function(x,y,w,h,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return this.equiradialPolygon(x,y,w,h,angles,o)
	};
	Raphael.fn.equiradialPolygon = function(x,y,w,h,angles,o){
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var pathstring = '';
		for(var i=0; i<angles.length ;i++){
			pathstring += (i==0?'M':'L');
			var _angle = Util.degreeToRadians(_o+angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			pathstring += _x + ',' + _y;
		}
		pathstring += 'z';
		return this.path(pathstring);
	}
	
};

Main.setObjective = function(str){
	Main.objective.innerHTML = str;
};

Main();

var Util = {
	isInteger: function (value) {
		var intRegex = /^\d+$/;
		return intRegex.test(val);
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
	degreeToRadians: function  (angle) {
			return angle * (Math.PI / 180);
		},
	formatNumber: function(number,decimal){
			return Math.floor(number * decimal * 10) / (decimal * 10);
		},
	rand01: function(){
			return Math.floor(Math.random()*2);
		}
};

var AnimationManager = function(){
	AnimationManager.animations = [];
	//console.log('AnimationManager is initialized');
	view.onFrame = AnimationManager.onFrame;
}

AnimationManager.onFrame = function(event){
	
	for(var i=0; i<AnimationManager.animations.length ; i++){
		var anim = AnimationManager.animations[i];
			
		if(anim.startTime == null){
			anim.startTime = event.time;
			
		}
		var animate = false;
		anim.count++;
		anim.lastTime=event.time;
		switch(anim.type){
			case 'translate':
				var x,y;
				x  = anim.data.first_position.x + anim.data.delta.x*(event.time - anim.startTime);
				y  = anim.data.first_position.y + anim.data.delta.y*(event.time - anim.startTime);
				//console.log(anim.data.first_position.x, anim.data.delta.x,event.time , anim.startTime)
				anim.shape.position = [x,y];
				break;
		}
			//console.log(event.time,anim.startTime,anim.time);
		if(event.time - anim.startTime > anim.time/1000){
			anim.shape.position.x = anim.data.first_position.x + anim.data.delta.x * anim.time / 1000;
			anim.shape.position.y = anim.data.first_position.y + anim.data.delta.y * anim.time / 1000;
			AnimationManager.animations.splice(i,1);
			
		}
		
	}
	view.draw();
}
AnimationManager.translate = function(shape,delta,time){
	
	var anim = new Animation('translate');
	anim.shape = shape;
	anim.data.first_position = {x:shape.position.x,y:shape.position.y};
	anim.data.delta = {};
	anim.data.delta.x = delta.x/time*1000;
	anim.data.delta.y = delta.y/time*1000;
		
	//console.log(anim.data.first_position)
	anim.time = time;
	anim.startTime = null;
	anim.lastTime = null;
	AnimationManager.animations.push(anim);
}
function Animation(type){
	this.type = type;
	this.shape = null;
	this.time = null;
	this.data = {};
}
