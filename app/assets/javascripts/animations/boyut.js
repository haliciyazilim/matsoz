/*Styles*/
function __Styles(){
	textStyle = {strokeColor : '#000', fillColor: new RgbColor(0.75,0.91,0.94,1) };
	edgeStyle = {
		strokeColor:'#255b63',
		fillColor:'#bfe8ef'
	};
	twoDimensionalShapeStyle = {
		strokeColor:'#255b63',
		fillColor:new RgbColor(0.75,0.91,0.94,1),
		strokeWidth : 2
	};
	oneDimensionalShapeStyle = {
		strokeColor:'#255b63',
		fillColor : new RgbColor(1,1,1,0),
		strokeWidth : 2
	};
	threeDimensionalShapeStyle = {
		strokeColor:'#255b63',
		fillColor:new RgbColor(0.75,0.91,0.94,0.8),
		strokeWidth : 2
	};
	dashedLineStyle = {
		strokeColor : "#000"
	}
	bowlHoverStyle = {strokeColor : '#000', fillColor :'#ff9' , strokeWidth : 2}
	//var bowlDefaultStyle = {'stroke':'#000','fill':'#fff'};
	bowlDroppedTrueStyle = {strokeColor : '#0f0', fillColor :'#afa' }//{'stroke':'#0f0','fill':'#afa'};
	bowlDroppedFalseStyle = {strokeColor : '#f00', fillColor :'#faa' }//{'stroke':'#f00','fill':'#faa'};
	bowlDefaultStyle = {fillColor: '#fff', strokeColor : '#000' , strokeWidth : 2}/*

	oneDimensionalShapeStyle.fillColor = new RgbColor(1,1,1,0);
	threeDimensionalShapeStyle.fillColor = new RgbColor(0.75,0.91,0.94,0.8)*/

}
	

/*Styles*/

var Animation = {};

Animation.init = function(container){
	Animation.container = container;
	var w=$(container).width(), h=$(container).height();
	var a = Math.min(w,h) * 0.3;
	var i = a*0.4;
	var j = a*0.6;
	x = w *0.5-10;
	y = h*0.5;
	//console.log(x,y)
	var p1 = new Point(x-a,y+a);
	var p2 = new Point(x+a,y+a);
	var p3 = new Point(x+a,y-a);
	var p4 = new Point(x-a,y-a);
	var p5 = new Point(x-a+j,y-a-i);
	var p6 = new Point(p5.x+2*a,p5.y);
	var p7 = new Point(p6.x,p6.y+2*a);
	Animation.path = new Path();
	Animation.path.set_style({
		strokeColor:'#000',
		strokeWidth:2
	});
	Animation.line1 = new Path.Line(
		p1,
		p4
	);
	Animation.line3 = new Path.Line(
		p2,
		p7
	);
	Animation.line2 = new Path.Line(
		p1,
		p2
	);
	Animation.text1 = new PointText(
		new Point(
			p1.x-20,
			(p1.y+p4.y)*0.5
		)
	);
	Animation.text2 = new PointText(
		new Point(
			(p1.x+p2.x)*0.5,
			p1.y+20
		)
	);
	Animation.text3 = new PointText(
		new Point(
			(p7.x+p2.x)*0.5+10,
			(p7.y+p2.y)*0.5+10
		)
	);
	Animation.text1.content = '1';
	Animation.text2.content = '2';
	Animation.text3.content = '3';
	var animationHelper = {
		count:0,
		opacity:0,
		line1Opacity:0,
		line2Opacity:0,
		line3Opacity:0,
		text1Opacity:0,
		text2Opacity:0,
		text3Opacity:0
	}
	
	var lineStyle = {
		strokeWidth:3,
		strokeColor:'#f00'
	};
	var textStyle = {
		fillColor:'#f00',
		strokeColor:'#f00'
	}
	Animation.text1.set_style(textStyle);
	Animation.text2.set_style(textStyle);
	Animation.text3.set_style(textStyle);
	Animation.path.add(p4);
	Animation.path.add(p1);
	Animation.path.add(p2);
	Animation.path.add(p3);
	Animation.path.add(p4);
	Animation.path.add(p5);
	Animation.path.add(p6);
	Animation.path.add(p7);
	Animation.path.add(p2);
	Animation.path.add(p3);
	Animation.path.add(p6);
	Animation.line1.set_style(lineStyle);
	Animation.line3.set_style(lineStyle);
	Animation.line2.set_style(lineStyle);
	Animation.line1.strokeColor = '#f00';
	Animation.line3.strokeColor = '#0f0';
	Animation.line2.strokeColor = '#00f';
	animationHelper.animate = Item.prototype.animate;
	Animation.onFrame = function(){
		Animation.path.opacity = animationHelper.opacity;
		Animation.line1.opacity = animationHelper.line1Opacity;
		Animation.line3.opacity = animationHelper.line3Opacity;
		Animation.line2.opacity = animationHelper.line2Opacity;
		Animation.text1.opacity = animationHelper.text1Opacity;
		Animation.text3.opacity = animationHelper.text3Opacity;
		Animation.text2.opacity = animationHelper.text2Opacity;
		if( animationHelper.text3Opacity == 1 ){
			Animation.onFrame = null;
			//console.log("asdasd");
			var div = document.createElement('div');
			$(Animation.container).append(div);
			$(div)
				.html('<span style="color:#f00">1.&emsp;Boy</span><br/><span style="color:#00f">2.&emsp;En</span><br/><span style="color:#0f0">3.&emsp;Derinlik</span>')
				.css({
					position:'absolute',
					left:'50%',
					marginLeft:'100px',
					opacity:0,
					top:'50%',
					marginTop:'-50px',
					lineHeight:'33px'
				})
				.animate(
					{opacity:1},
					1000
				);
				
		}
	};
	animationHelper.animate({
		style:{
			opacity:1
		},
		duration:2000
	});
	animationHelper.animate({
		style:{
			line1Opacity:1
		},
		duration:1000,
		delay:2000
	});
	animationHelper.animate({
		style:{
			line2Opacity:1
		},
		duration:1000,
		delay:3000
	});
	animationHelper.animate({
		style:{
			line3Opacity:1
		},
		duration:1000,
		delay:4000
	});
	animationHelper.animate({
		style:{
			text1Opacity:1
		},
		duration:1000,
		delay:5000
	});
	animationHelper.animate({
		style:{
			text2Opacity:1
		},
		duration:1000,
		delay:6000
	});
	animationHelper.animate({
		style:{
			text3Opacity:1
		},
		duration:1000,
		delay:7000
	});	
}

var Interaction = {};
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Yandaki nesneleri kaç boyutlu olduğuna göre sınıflandırmak için fare ile sürükleyerek ilgili sepete atınız.');
	
	bowlHoverStyle.fillColor = new RgbColor(1,1,0.6); //:'#ff9' , strokeWidth : 2}
	//var bowlDefaultStyle = {'stroke':'#000','fill':'#fff'};
	bowlDroppedTrueStyle.fillColor = new RgbColor(0.7,1,0.7)// :'#afa' }//{'stroke':'#0f0','fill':'#afa'};
	bowlDroppedFalseStyle.fillColor = new RgbColor(1,0.7,0.7)//:'#faa' }//{'stroke':'#f00','fill':'#faa'};
	bowlDefaultStyle.fillColor = new RgbColor(1,1,1);//: '#fff', strokeColor : '#000' , strokeWidth : 2}
	
	Interaction.container = container;
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	Interaction.paper = {width:$(container).width(), height: $(container).height()}
	var w = Interaction.paper.width;
	var h = Interaction.paper.height;
	
	Interaction.shapeCount = 1;
	Interaction.generateBowls(w,h);
	Interaction.nextQuestion();
	var drag = new Tool();
	drag.setHitTestOptions({ fill: true, stroke: true, segments: true, tolerance: 25 });
	drag.onMouseDown = function(event){
		if(event.item){
			drag.shape = event.item;
			event.item.start();
		}
	};
	drag.onMouseDrag = function(event){
		if(drag.shape)
			drag.shape.move(event.delta.x,event.delta.y,event.point.x,event.point.y);
	};
	drag.onMouseUp = function(event){
		if(drag.shape)
			drag.shape.up();
		drag.shape = null;
	}
	drag.activate();
}
Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}
Interaction.nextQuestion = function(){
	if(Interaction.shape)
		Interaction.shape.remove();
	Interaction.shapeCount++;
	Interaction.preventDrag = false;
	var w = Interaction.paper.width;
	var h = Interaction.paper.height;
	Interaction.generateRandomShape(0.4*w,0.19*h,0.2*w,0.22*h);
	var start = function () {
		if(Interaction.preventDrag)
			return;
		this.ox = this.position.x;
		this.oy = this.position.y;
		this.odx = 0;
		this.ody = 0;
		var svg_offset = $(Interaction.container).offset();
		this.s_left = svg_offset.left;
		this.s_top = svg_offset.top;
		this.inDropableShape = false;
		if(this.preventDrag == null || this.preventDrag == undefined)
			this.preventDrag = false;
		Interaction.droppedBowl = undefined;
		return true;
	},
    move = function (dx, dy,x,y) {
		if(Interaction.preventDrag)
			return;
		this.odx += dx;
		this.ody += dy;
		this.position = [this.position.x + dx,this.position.y + dy];
		var hitResult = project.activeLayer.hitTest([x,y], { fill: true, stroke: true, segments: true, tolerance: 2 , class: 'bowl'});
		for(var d in Interaction.dim){
				Interaction.dim[d].style = bowlDefaultStyle;		
			}
		Interaction.droppedBowl = null;
		if(hitResult){	
			Interaction.droppedBowl = hitResult.item;
			Interaction.droppedBowl.style = bowlHoverStyle;
		}
    },
    up = function () {
		if(Interaction.preventDrag)
			return;
		if(Interaction.droppedBowl!=null 
			&& Interaction.droppedBowl!= undefined
			&& Interaction.shape.dimension == Interaction.droppedBowl.dimension
			){
			Interaction.preventDrag = true;
			Interaction.shape.scaleRatio = 0.9
			Interaction.shape.opacityX=1;
			Interaction.shape.animate({
				style:{
					opacityX:-0.3,
					scaleRatio:1
				},
				duration:500,
				update:function(){
					if(this.opacityX < 0.7)
						this.opacity = this.opacityX+0.3;
					this.scale(this.scaleRatio);	
				}
			});
			Interaction.droppedBowl.animate({
				style:bowlDroppedTrueStyle,
				duration:5,
				callback:function(){
					Interaction.droppedBowl.animate({
						style:bowlDefaultStyle,
						duration:500,
						delay:500,
						callback:function(){
							Interaction.droppedBowl.style = bowlDefaultStyle;
							Interaction.nextQuestion();
							}
						}
					)
				}
			});
		}  
		else{
			Interaction.preventDrag = true;
			var callback = function(){
				Interaction.preventDrag = false;
			}
			if(Interaction.droppedBowl!= null 
			&& Interaction.droppedBowl!= undefined)
				Interaction.droppedBowl.animate({style:bowlDroppedFalseStyle,duration:5});
			var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
			var velocity = 1;// px/ms
			var time  = distance / velocity;
			
			this.animate({
				style:{
					position:new Point(this.ox,this.oy)
				},
				duration:time,
				callback:callback
			});
		}        
    };
	Interaction.shape.move = move;
	Interaction.shape.up = up;
	Interaction.shape.start = start;
}

Interaction.generateRandomShape = function(x,y,w,h){
	var NUMBER_OF_SHAPES  = 35;
	Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
	if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
		Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
	shapeType = Interaction.shuffledArray[Interaction.shapeCount];
	///*TEST*/shapeType = 25; /*TEST*/
	switch(shapeType){
		case 0:
			Interaction.shape = new Path.Circle(new Point(x+w*0.5,y+h*0.5),5);
			Interaction.shape.style = {
					fillColor : twoDimensionalShapeStyle.strokeColor,
					strokeColor : twoDimensionalShapeStyle.strokeColor
				}
			Interaction.shape.dimension = 0;
			break;
		case 1:
			Interaction.shape = new Path.Rectangle(new Point(x+w*0.2,y+h*0.2), new Size(w*0.6,h*0.6));
			Interaction.shape.dimension = 1;
			break;
		case 2:
			var a = Math.min(w,h)*0.5;
			Interaction.shape = new Path.Circle(new Point(x+w*0.5,y+h*0.5),a);
			Interaction.shape.dimension = 1;
			break;
		case 3:
			var l = Math.min(w,h);
			Interaction.shape = new Path.Line(new Point(x+w*0.2,y+h*0.2), new Point(x+w*0.8,y+h*0.8));
			Interaction.shape.dimension = 1;
			break;
		case 4:
			Interaction.shape = new Path.OneSidedArrow(new Point(x+w*0.1,y+h*0.5), new Point(x+w*0.8,y+h*0.5), 10, 30);
			Interaction.shape.dimension = 1;
			Interaction.shape.arrow = true;
			break;
		case 5:
			Interaction.shape = new Path.Rectangle(new Point(x+w*0.2,y+h*0.2),new Size(w*0.6,h*0.6));
			Interaction.shape.dimension = 2;
			break;
		case 6:
			var a = Math.min(w,h)*0.5;
			Interaction.shape = new Path.Circle(new Point(x+w*0.5,y+h*0.5), a );
			Interaction.shape.dimension =2 ;
			break;
		case 7:
			Interaction.shape = new Path.Rhomboid(new Point(x+w*0.2,y+h*0.2), new Size(w*0.6,y*0.6),w*0.2 );
			Interaction.shape.dimension = 2;
			break;
		case 8:
			Interaction.shape = new Path.Triangle(new Point(x+w*0.2,y+h*0.8), new Point(x+w*0.8,y+h*0.8), new Point(x+w*0.5,y+h*0.2));
			Interaction.shape.dimension = 2;
			break;
		case 9:
			var a = Math.min(w,h)*0.6;
			Interaction.shape = new Path.RectanglePrisim(new Point(x,y),new Size(a,a),new Size(a*0.4,a*0.4));
			
			Interaction.shape.dimension = 3;
			break;
		case 10:
			var a = Math.min(w,h);
			Interaction.shape = new Path.Sphere(new Point(x+w*0.5,y+h*0.5),a*0.5);
			Interaction.shape.dimension = 3;
			break;
		case 11:
			Interaction.shape = new Path.Cylinder(new Point(x+w*0.2,y+h*0.2), new Size(w*0.6,h*0.6));
			Interaction.shape.dimension = 3;
			break;
		case 12:
			Interaction.shape = new Path.RegularPolygon(new Point(x,y),new Size(w,h),5,30);
			Interaction.shape.dimension = 2;
			break;
		case 13:
			Interaction.shape = new Path.RegularPolygon(new Point(x,y),new Size(w,h),5,60);
			Interaction.shape.dimension = 1;
			break;
		case 14:
			Interaction.shape = new Path.RegularPolygon(new Point(x,y),new Size(w,h),6,90);
			Interaction.shape.dimension = 2;
			break;
		case 15:
			Interaction.shape = new Path.RegularPolygon(new Point(x,y),new Size(w,h),6,120);
			Interaction.shape.dimension = 1;
			break;
		case 16:
			Interaction.shape = new Path.Trapezoid(new Point(x,y),new Size(w,h),w*0.2);
			Interaction.shape.dimension = 1;
			break;
		case 17:
			Interaction.shape = new Path.Trapezoid(new Point(x,y),new Size(w,h),w*0.3);
			Interaction.shape.dimension = 2;
			break;
		case 18:
			Interaction.shape = new Path.Pyramid(new Point(x,y),new Size(w,h));
			Interaction.shape.dimension = 3;
			break;
		case 19:
			Interaction.shape = new Path.Cone(new Point(x+w*0.1,y),new Size(w*0.8,h));
			Interaction.shape.dimension = 3;
			break;
		case 20:
			Interaction.shape = new Path.Rhombus(new Point(x+w*0.2,y+h*0.2), new Size(w*0.6,y*0.6) );
			Interaction.shape.dimension = 1;
			break;
		case 21:
			Interaction.shape = new Path.Rhombus(new Point(x+w*0.2,y+h*0.2), new Size(w*0.6,y*0.6) );
			Interaction.shape.dimension = 2;
			break;
		case 22:
			Interaction.shape = new Path.Rhomboid(new Point(x+w*0.2,y+h*0.2), new Size(w*0.6,y*0.6),w*0.2 );
			Interaction.shape.dimension = 1;
			break;
		case 23:
			var a =Math.min(x,y);
			Interaction.shape = new Path.SquarePrisim(new Point(x,y),a*0.7,a*0.4);
			Interaction.shape.dimension = 3;
			break;
		case 24:
			Interaction.shape = new Path.RectanglePrisim(new Point(x,y),new Size(w*0.7,h*0.7),new Size(w*0.3,h*0.3));
			Interaction.shape.dimension = 3;
			break;
		case 25:
			Interaction.shape = new Path.TrianglePrisim(new Point(x,y),new Size(w,h));
			Interaction.shape.dimension = 3;
			break;
		case 26:
			Interaction.shape = new Path.Triangle(new Point(x+w*0.3,y+h*0.7), new Point(x+w*0.9,y+h*0.6), new Point(x+w*0.5,y+h*0.1));
			Interaction.shape.dimension = 2;
			break;
		case 27:
			Interaction.shape = new Path.Triangle(new Point(x+w*0.3,y+h*0.7), new Point(x+w*0.9,y+h*0.6), new Point(x+w*0.5,y+h*0.1));
			Interaction.shape.dimension = 1;
			break;
		case 28:
			Interaction.shape = new Path.Triangle(new Point(x+w*0.2,y+h), new Point(x+w,y+h), new Point(x+w,y));
			Interaction.shape.dimension = 1;
			break;
		case 29:
			Interaction.shape = new Path.Triangle(new Point(x+w*0.2,y+h), new Point(x+w,y+h), new Point(x+w*0.2,y));
			Interaction.shape.dimension = 2;
			break;
		case 30:
			Interaction.shape = new Path.Triangle(new Point(x+w*0.2,y+h), new Point(x+w*0.8,y+h), new Point(x+w,y));
			Interaction.shape.dimension = 2;
			break;
		case 31:
			var l = Math.min(w,h);
			Interaction.shape = new Path.Line( new Point(x+w,y), new Point(x,y+h) );
			Interaction.shape.dimension = 1;
			break;
		case 32:
			Interaction.shape = new Path.OneSidedArrow(new Point(x,y), new Point(x+w,y+h*0.5), 10, 30);
			Interaction.shape.dimension = 1;
			Interaction.shape.arrow = true;
			break;
		case 33:
			Interaction.shape = new Path.OneSidedArrow(new Point(x+w*0.5,y+h), new Point(x+w*0.5,y), 10, 30);
			Interaction.shape.dimension = 1;
			Interaction.shape.arrow = true;
			break;
		case 34:
			Interaction.shape = new Path.OneSidedArrow(new Point(x+w*0.5,y), new Point(x+w*0.5,y+h), 10, 30);
			Interaction.shape.dimension = 1;
			Interaction.shape.arrow = true;
			break;
		
	}
	if(Interaction.shape.dimension == 1)
		Interaction.shape.set_style(oneDimensionalShapeStyle);
	else if(Interaction.shape.dimension == 2)
		Interaction.shape.set_style(twoDimensionalShapeStyle);
	else if(Interaction.shape.dimension == 3){
		Interaction.shape.set_style(threeDimensionalShapeStyle);
		if(Interaction.shape.children)
			for (var i=0; i < Interaction.shape.children.length; i++)
				if(Interaction.shape.children[i].class == "dashed")
					Interaction.shape.children[i].set_style(dashedLineStyle)
	}
	if(Interaction.shape.arrow == true)
		Interaction.shape.set_style({fillColor:twoDimensionalShapeStyle.strokeColor})
}

Interaction.generateBowls = function(w,h){
	var _w = 0.20*w, _h =0.22*h;
	var dim = [];	
	for(var i=0; i< 4 ; i++){
		dim[i] = new Path.Bowl(new Point(i*0.25*w+0.025*w,0.6*h+0.04*h), new Size(_w,_h)) ;
		dim[i].style = bowlDefaultStyle;
		dim[i].dimension = i;
		dim[i].class = "bowl";
		var t;
		if(i == 0 ){
			t = new PointText(new Point(dim[i].position.x-_w*0.3,dim[i].position.y));
			t.content = "Boyutu\nyok";
		}
		else{
			t = new PointText(new Point(dim[i].position.x-_w*0.25,dim[i].position.y));
			t.content = ""+i+" Boyutlu";
		};
		t.style = textStyle;
	}
	Interaction.dim = dim;
}
