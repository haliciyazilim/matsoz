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
	strokeColor:"#000",
	fillColor:'rgb(242,221,179)'
};
var angleStyle = {
	'stroke-width': '2px'
};


/*Styles*/
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
	},
	{
		id : "paper",
		src : "/assets/animations/daire/paper.png"
	},
	{
		id : "scissor",
		src : "/assets/animations/daire/scissor.png"
	},
	{
		id : "scissor_half",
		src : "/assets/animations/daire/scissor_half.png"
	}
];

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki cetvel ve pergeli kullanarak seçeceğiniz yarıçap uzunluğuna sahip çemberi aşağıdaki “Çiz” düğmesine tıklayarak çiziniz. Daha sonra daire oluşturunuz.');

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
			top:Interaction.paper.height*0.4,
			left:Interaction.paper.width * 0.30,
			width:'30px',
			height:'30px'
		});
		
	Interaction.container.appendChild(Interaction.radius);
	
	Interaction.status = document.createElement('div');
	Interaction.status.className = "status_true";
	$(Interaction.status).css({
		position:'absolute',
		left:10,
		top:Interaction.paper.height*0.3,
		width:'40%'
	});
	Interaction.container.appendChild(Interaction.status);			
	Interaction.drawCircle.x = Interaction.paper.width*0.63;
	Interaction.drawCircle.y = Interaction.paper.height*0.55;
	Interaction.nextQuestion();
};

Interaction.nextQuestion = function(){
	Interaction.status.innerHTML = "";
	$(Interaction.radius).show();
	Interaction.r = null;
	Interaction.drawRuler();
	Interaction.initCompass();
	Interaction.circlePaper = new Raster('paper');
	Interaction.circlePaper.position = new Point(
		Math.floor(Interaction.drawCircle.x)+0.5, 
		Math.floor(Interaction.drawCircle.y)+0.5
	);
	Interaction.pause = false;
	$(Interaction.button).show();
	if(Interaction.showCircularRegion.circle)
		Interaction.showCircularRegion.circle.remove();
}

Interaction.pause = false;

Interaction.setRadius = function(r){
	Interaction.r = r;
	Interaction.radius.innerHTML = Util.numberTurkishFloating(r/Interaction.br,1);
};

Interaction.drawCircle = function(){
	if(Interaction.pause === true)
		return;
	$(Interaction.radius).hide();
	Interaction.status.innerHTML = "";
	$(Interaction.button).hide();
	Interaction.compass.remove();
	Interaction.ruler.remove();
	if(Interaction.splitCircularRegion.circle)
		Interaction.splitCircularRegion.circle.remove();
	Interaction.pause = true;
	var x,y,xc,yc,xr,yr,R,_o;
	
	if(Interaction.t)
		clearInterval(Interaction.t)
	if(Interaction.drawCircle.compass)
		Interaction.drawCircle.compass.remove();
	Interaction.drawCircle.compass = new Compass(
		Interaction.drawCircle.x,
		Interaction.drawCircle.y
	);
	Interaction.drawCircle.compass.changeDelta(Interaction.r-Interaction.drawCircle.compass.right.bounds.width);
	Interaction.drawCircle.compass.group.opacity=0;
	Interaction.drawCircle.compass.group.animate({
		style:{
			opacity:1
		},
		duration:500
	});
	if(Interaction.scissor)
		Interaction.scissor.remove();
	if(Interaction.drawCircle.textO)
		Interaction.drawCircle.textO.remove();
	if(Interaction.drawCircle.textR)
		Interaction.drawCircle.textR.remove();
	if(Interaction.drawCircle.lineR)
		Interaction.drawCircle.lineR.remove();
	Interaction.drawCircle._o = 20;
	Interaction.animationStarted = new Date().getTime();
	Interaction._o_old =0;
	
	Interaction.drawCircle.t = setInterval(
		function(){
			var dt = new Date().getTime() - Interaction.animationStarted;
			
			Interaction.drawCircle._o = dt * 0.22;
			
			if( Interaction.drawCircle._o >= 360 ){
				clearTimeout(Interaction.drawCircle.t);
				Interaction.drawCircle._o = 359.9;
				Interaction.pause = false;
				Interaction.drawCircle.textO = new PointText(
					new Point(
						Interaction.drawCircle.x-10,
						Interaction.drawCircle.y+10
					)
				);
				Interaction.drawCircle.textO.content = "O";
				Interaction.drawCircle.textR = new PointText(new Point(Interaction.drawCircle.x+Interaction.r*0.2,Interaction.drawCircle.y+15));
				Interaction.drawCircle.textR.content = "r = "+(Interaction.radius.innerHTML);
				Interaction.drawCircle.lineR = new Path.Line(new Point(Interaction.drawCircle.x,Interaction.drawCircle.y),new Point(Interaction.drawCircle.x+Interaction.r,Interaction.drawCircle.y));
				Interaction.drawCircle.lineR.setStyle(lineStyle);
				
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
				Interaction.scissor = new Raster('scissor');
				Interaction.scissor.position = new Point(
					Interaction.drawCircle.x+Interaction.br*9+Interaction.scissor.bounds.width*0.5+5,
					Interaction.drawCircle.y+Interaction.scissor.bounds.height*0.5			
				);
				Interaction.status.innerHTML = "O merkezli ve "+(Interaction.radius.innerHTML)+" birim yarıçaplı çember. Daire elde etmek icin makasa tiklayiniz.";
				Interaction.scissor.tool = new Tool();
				Interaction.scissor.tool.onMouseDown = function(event){
					if(Interaction.scissor.bounds.contains(event.point) == true){
						Interaction.splitCircularRegion();
					}
				}
				Interaction.scissor.tool.activate();
				
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
			Interaction.circlePaper.moveBelow(Interaction.drawCircle.circle);
		},
		1 
	);
	
		
};

Interaction.showCircularRegion = function(){
	Interaction.scissor_half.remove();
	Interaction.circlePaper.remove();
	/*Interaction.circlePaper.animate({
		style:{opacity:0},
		duration:200,
		callback:function(){Interaction.circlePaper.remove();}
	});*/
	Interaction.status.innerHTML = "O merkezli ve "+(Interaction.radius.innerHTML)+" birim yarıçaplı daire. <br />"
				
	if(Interaction.splitCircularRegion.circle)
		Interaction.splitCircularRegion.circle.remove();
	function flipCircularRegion(){
		var angle = new Date().getTime() - Interaction.showCircularRegion.startTime;
		angle *= 0.20;
		if(angle > 360){
			clearInterval(Interaction.showCircularRegion.t);
			Interaction.status.innerHTML += ' <input type="button" class="control_button" value="Yeniden çizdir" onclick="Interaction.nextQuestion()">';
			return;
		}
		var w = Interaction.r*Math.cos(Util.degreeToRadian(angle));
		if(Interaction.showCircularRegion.circle)
			Interaction.showCircularRegion.circle.remove();
		Interaction.showCircularRegion.circle = new Path.Oval(
			new Rectangle(
				new Point(
					Interaction.drawCircle.x-w,
					Interaction.drawCircle.y-Interaction.r
				),
				new Size(
					w*2,
					Interaction.r*2
				)
			)
		)
		if(angle > 90 && angle < 270)
			Interaction.showCircularRegion.circle.setStyle({strokeColor:'#000',fillColor:"#aaa"});
		else
			Interaction.showCircularRegion.circle.setStyle(circleStyle);
	}
	;
	
	setTimeout(
		function(){
			Interaction.drawCircle.circle.remove();
			Interaction.showCircularRegion.startTime = new Date().getTime();
			flipCircularRegion();
			Interaction.showCircularRegion.t = setInterval(flipCircularRegion,40);
		},
		300
	);
}

Interaction.splitCircularRegion = function(){
	Interaction.status.innerHTML = "";
	Interaction.scissor.tool.remove();
	Interaction.scissor.remove();
	if(Interaction.drawCircle.textO)
		Interaction.drawCircle.textO.remove();
	if(Interaction.drawCircle.textR)
		Interaction.drawCircle.textR.remove();
	if(Interaction.drawCircle.lineR)
		Interaction.drawCircle.lineR.remove();
	Interaction.scissor_half = new Raster("scissor_half");
	Interaction.scissor_half.position = [Interaction.drawCircle.x+Interaction.r,Interaction.drawCircle.y];
	Interaction.splitCircularRegion._o = 20;
	Interaction.splitCircularRegion._o_old = 0;
	Interaction.animationStarted = new Date().getTime();
	Interaction.splitCircularRegion.t = setInterval(
		function(){
			var dt = new Date().getTime() - Interaction.animationStarted;
			Interaction.splitCircularRegion._o = dt * 0.22;
			if(Interaction.splitCircularRegion._o > 360){
				clearInterval(Interaction.splitCircularRegion.t);
				Interaction.showCircularRegion();
				return false;
			}
			if(Interaction.splitCircularRegion.circle)
				Interaction.splitCircularRegion.circle.remove();
			var center = new Point(Interaction.drawCircle.x,Interaction.drawCircle.y);
			var radius = Interaction.r+1;
			var startAngle = Util.degreeToRadians(0);
			var endAngle = Util.degreeToRadians(-Interaction.splitCircularRegion._o);
			
			Interaction.scissor_half.rotate(+Interaction.splitCircularRegion._o_old-Interaction.splitCircularRegion._o, center);
			Interaction.splitCircularRegion._o_old = Interaction.splitCircularRegion._o;
			
			var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
			var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
								   center.y + Math.sin((startAngle+endAngle)/2) * radius);
			var point3 = new Point(center.x + Math.cos(endAngle) * radius,
								   center.y + Math.sin(endAngle) * radius);
			Interaction.splitCircularRegion.circle = new Path.Arc(point1, point2, point3);
			Interaction.splitCircularRegion.circle.setStyle(circleStyle);
			Interaction.splitCircularRegion.circle.setStyle({strokeColor:'#fff',strokeWidth:2,dashArray:[3,2]});
			Interaction.splitCircularRegion.circle.moveBelow(Interaction.scissor_half);
		},
		25
	);
	
}

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
	Interaction.tool = tool;
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
		Math.floor(x+Interaction.ruler.size.width*0.5),
		Math.floor(y+Interaction.ruler.size.height*0.5)
	];
	Interaction.br = Math.floor(Interaction.ruler.size.width*0.1);

	var _y1 = y+h*0.6;
	var _yt = y+h*0.4;
	var _y2 = y+h;
};