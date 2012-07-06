// JavaScript Document

/*Styles*/

var textStyle = {
	'font-size':'16px',
	'text-color': '#55f'
};
var lineStyle = {
	strokeColor:"#000",
	strokeWidth:1
}
var circleStyle = {
	strokeColor:"#000"
};
var angleStyle = {
	'stroke-width': '2px'
};


/*Styles*/
var Animation = function(){};Animation();
var Interaction = function(){}; Interaction();
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.images = [
	{
		id: "ruler",
		src: '/assets/animations/ruler.png'
	},
	{
		id: "compass_left_leg",
		src: '/assets/animations/compass_left_leg.png'
	},
	{
		id: "compass_knuckle",
		src: '/assets/animations/compass_knuckle.png'
	},
	{
		id: "compass_right_leg",
		src: '/assets/animations/compass_right_leg.png'
	}
];

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki cetvel ve pergeli kullanarak seçeceğiniz yarıçap uzunluğuna sahip çemberi aşağıdaki “Çiz” düğmesine tıklayarak çiziniz.');

	Interaction.container = container;
	Interaction.paper = {width:$(container).width(),height:$(container).height()};
	Interaction.button = document.createElement('input');
	Interaction.button.type = "button";
	Interaction.button.value = 'Çiz';
	Interaction.button.onclick = Interaction.drawCircle;
	Interaction.button.className = 'control_button'
	$(Interaction.button).css({
			position:'absolute',
			top:'30px',
			left:Interaction.paper.width * 0.5
		});
	Interaction.container.appendChild(Interaction.button);
	Interaction.radius = document.createElement('div');
	$(Interaction.radius).css({
			position:'absolute',
			top:'30px',
			left:Interaction.paper.width * 0.35,
			width:'30px',
			height:'30px'
		});
		
	Interaction.container.appendChild(Interaction.radius);
	
	Interaction.status = document.createElement('div');
	Interaction.status.className = "status_true";
	$(Interaction.status).css({
		position:'absolute',
		left:Interaction.paper.width*0.05,
		top:Interaction.paper.height*0.6,
		width:'40%'
	});
	Interaction.container.appendChild(Interaction.status);
				
	Interaction.r = null;
	Interaction.drawRuler();
	Interaction.initCompass();
};

Interaction.pause = false;

Interaction.setRadius = function(r){
	Interaction.r = r;
	Interaction.radius.innerHTML = Util.numberTurkishFloating(r/Interaction.br,1);
};

Interaction.drawCircle = function(){
	if(Interaction.pause === true)
		return;
	Interaction.status.innerHTML = "";
				
	Interaction.pause = true;
	var x,y,xc,yc,xr,yr,R,_o;
	Interaction.drawCircle.x = Interaction.paper.width*0.65;
	Interaction.drawCircle.y = Interaction.paper.height*0.55;
	
	if(Interaction.t)
		clearInterval(Interaction.t)
	if(Interaction.drawCircle.compass)
		Interaction.drawCircle.compass.remove();
	Interaction.drawCircle.compass = new Compass(Interaction.drawCircle.x,Interaction.drawCircle.y);
	Interaction.drawCircle.compass.changeDelta(Interaction.r-Interaction.drawCircle.compass.right.bounds.width);
		Interaction.drawCircle.compass.group.opacity=0;
	Interaction.drawCircle.compass.group.animate({
		style:{
			opacity:1
		},
		duration:500
	});
	Interaction.drawCircle.t = setInterval(
		function(){
			var dt = new Date().getTime() - Interaction.animationStarted;
			
			Interaction.drawCircle._o = dt * 0.22;
			
			if( Interaction.drawCircle._o >= 360 ){
				clearTimeout(Interaction.drawCircle.t);
				Interaction.drawCircle._o = 359.9;
				Interaction.pause = false;
				Interaction.drawCircle.textO = new PointText(new Point(Interaction.drawCircle.x-10,Interaction.drawCircle.y+10));
				Interaction.drawCircle.textO.content = "O";
				Interaction.drawCircle.textR = new PointText(new Point(Interaction.drawCircle.x+Interaction.r*0.2,Interaction.drawCircle.y+15));
				Interaction.drawCircle.textR.content = "r = "+(Interaction.radius.innerHTML);
				Interaction.drawCircle.lineR = new Path.Line(new Point(Interaction.drawCircle.x,Interaction.drawCircle.y),new Point(Interaction.drawCircle.x+Interaction.r,Interaction.drawCircle.y));
				Interaction.drawCircle.lineR.setStyle(lineStyle);
				Interaction.status.innerHTML = "O merkezli ve "+(Interaction.radius.innerHTML)+" birim yarıçaplı çember ";
				
				//Interaction.drawCircle.group = new Group();
				//Interaction.drawCircle.group.addChild(Interaction.drawCircle.textO);
				//Interaction.drawCircle.group.addChild(Interaction.drawCircle.textR);
				//Interaction.drawCircle.group.addChild(Interaction.drawCircle.lineR);
				Interaction.drawCircle.textO.opacity=0;
				Interaction.drawCircle.textO.animate({
					style:{
						opacity:1
					},
					duration:1000
				});
				
				Interaction.drawCircle.textR.opacity=0;
				Interaction.drawCircle.textR.animate({
					style:{
						opacity:1
					},
					duration:1000
				});
				Interaction.drawCircle.lineR.opacity=0;
				Interaction.drawCircle.lineR.animate({
					style:{
						opacity:1
					},
					duration:1000
				});
				Interaction.drawCircle.compass.group.opacity=1;
				Interaction.drawCircle.compass.group.animate({
					style:{
						opacity:0
					},
					duration:500
				});
			}
				
			var _x = Interaction.drawCircle.x + Interaction.r * Math.cos(Util.degreeToRadians(Interaction.drawCircle._o));
			var _y = Interaction.drawCircle.y + Interaction.r * Math.sin(Util.degreeToRadians(Interaction.drawCircle._o));
			if(Interaction.drawCircle.circle)
				Interaction.drawCircle.circle.remove();
			var center = new Point(Interaction.drawCircle.x,Interaction.drawCircle.y);
			
			var radius = Interaction.r;
			var startAngle = Util.degreeToRadians(0);
			var endAngle = Util.degreeToRadians(Interaction.drawCircle._o);
			
			Interaction.drawCircle.compass.rotate(-Interaction._o_old+Interaction.drawCircle._o, center);
			var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
			var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
								   center.y + Math.sin((startAngle+endAngle)/2) * radius);
			var point3 = new Point(center.x + Math.cos(endAngle) * radius,
								   center.y + Math.sin(endAngle) * radius);
			Interaction.drawCircle.circle = new Path.Arc(point1, point2, point3);
			Interaction.drawCircle.circle.setStyle(circleStyle);
			Interaction.drawCircle.circle.opacity = Interaction.drawCircle._o>200 ? 1 :Interaction.drawCircle._o/200; 
			Interaction._o_old = Interaction.drawCircle._o;
			Interaction.drawCircle.circle.moveBelow(Interaction.drawCircle.compass.group);
		},
		1 
	);
	
	if(Interaction.drawCircle.textO)
		Interaction.drawCircle.textO.remove();
	if(Interaction.drawCircle.textR)
		Interaction.drawCircle.textR.remove();
	if(Interaction.drawCircle.lineR)
		Interaction.drawCircle.lineR.remove();
	Interaction.drawCircle._o = 20;
	Interaction.animationStarted = new Date().getTime();
	Interaction._o_old =0;	
};

function Compass(x,y){
	this.defaultX = x;
	this.defaultY = y;
	this.left = new Raster('compass_left_leg');
	this.right = new Raster('compass_right_leg');
	this.knuckle = new Raster('compass_knuckle');
	this.R = this.left.size.height;
	this.group = new Group();
	this.group.addChild(this.left);
	this.group.addChild(this.right);
	this.group.addChild(this.knuckle);
	this.left.position = [
		x,
		y-this.left.size.height*0.5
	]; 
	this.knuckle.position = [
		x+this.left.size.width*0.5,
		y-this.left.size.height-this.knuckle.size.height*0.5
	];
	this.right.position = [
		x+this.left.size.width,
		y-this.right.size.height*0.5
	];

	this.d = this.right.position.x -this.left.position.x;
	
	this.remove = function(){
		this.left.remove();
		this.right.remove();
		this.knuckle.remove();
	};
	this.changeDelta = function(dx){
		var _betha = Math.acos((this.d)/(2*this.R));
		var _alpha = Math.acos((this.d+dx)/(2*this.R));
		var _o = Util.radianToDegree(_betha ) - Util.radianToDegree(_alpha);
		var dy  = this.R*(Math.sin(_betha) - Math.sin(_alpha));
		this.left.rotate(
			_o,
			[
				this.defaultX,
				this.defaultY
			]
		);
		this.right.rotate(
			-_o,
			[
				this.defaultX+this.d,
				this.defaultY
			]
		);
		this.knuckle.position.y += dy;
		this.right.position.x += dx;
		this.knuckle.position.x += dx/2;
		this.d += dx;
	};
	this.rotate = function(angle,point){
		this.left.rotate(angle,point);
		this.right.rotate(angle,point);
		this.knuckle.rotate(angle,point);
	}
};

Interaction.initCompass = function(){
	Interaction.compass = new Compass(Interaction.ruler.bounds.x,Interaction.ruler.bounds.y);
	Interaction.compass.right.class = "right_leg";

	Interaction.drawCompass(Interaction.br*2);
	var tool = new Tool();
	tool.drag = false;
	tool.onMouseDown = function(event){
		if(Interaction.compass.group.bounds.contains(event.point))
			this.drag=true;
	}
	tool.onMouseDrag = function(event){
		if(this.drag === true && Interaction.pause == false){
			Interaction.drawCompass(event.delta.x);
		}
	}
	tool.onMouseUp = function(){
		this.drag = false;
	}
	tool.activate();
};

Interaction.drawCompass = function(dx){
	if(dx == null || dx == undefined)
		dx = 0;
	if( Interaction.compass.d + dx > Interaction.br*9 ||
		Interaction.compass.d + dx < Interaction.br)
		return;
	Interaction.compass.changeDelta(dx)
	Interaction.setRadius(Interaction.compass.d);
};

Interaction.drawRuler = function(){
	var x,y,w,h,b,st;
	x = Interaction.paper.width*0.02;
	y = Interaction.paper.height*0.4;
	Interaction.ruler = new Raster('ruler');
	Interaction.ruler.position = [
		x+Interaction.ruler.size.width*0.5,
		y+Interaction.ruler.size.height*0.5
	];
	Interaction.br = Math.floor(Interaction.ruler.size.width*0.1);

	var _y1 = y+h*0.6;
	var _yt = y+h*0.4;
	var _y2 = y+h;
};