/*Styles*/
var textStyle = {strokeColor : '#000', fillColor: '#000' };
var edgeStyle = {strokeColor : "#000", fillColor : '#fff'};
var twoDimensionalShapeStyle = {
	strokeColor : "#000",
	fillColor : "#ccc",
	strokeWidth : 2
};
var oneDimensionalShapeStyle = {
	strokeColor : "#000",
	fillColor : "#fff",
	strokeWidth : 2
};
var threeDimensionalShapeStyle = {
	strokeColor : "#000",
	fillColor : "#ccc",
	strokeWidth : 2
};
var angleStyle = {'fill':'#DDD'};
//var bowlHoverStyle = {'stroke':'#999','fill':'#ff9'};
var bowlHoverStyle = {strokeColor : '#000', fillColor :'#ff9' , strokeWidth : 2}
//var bowlDefaultStyle = {'stroke':'#000','fill':'#fff'};
var bowlDroppedTrueStyle = {'stroke':'#0f0','fill':'#afa'};
var bowlDroppedFalseStyle = {'stroke':'#f00','fill':'#faa'};
var bowlDefaultStyle = {fillColor: '#fff', strokeColor : '#000' , strokeWidth : 2}
/*Styles*/

var Animation = {};

Animation.init = function(container){
	var w=$(container).width(), h=$(continer).height();
	
	x = w *0.5;
	y = h*0.5;
	
	var p1 = new Point(x,y)	
	
}

var Interaction = {};

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki nesneleri kaç boyutlu olduğuna göre sınıflandırmak için fare ile sürükleyerek ilgili sepete atınız.');
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
	drag.setHitTestOptions({ fill: true, stroke: true, segments: true, tolerance: 15 });
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
	if(Interaction.shape != 'undefined' && Interaction.shape != null)
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
			Interaction.shape.animate({
				style:{opacity:0},
				duration:500
			});
			Interaction.droppedBowl.animate({
				style:bowlDroppedTrueStyle,
				duration:500,
				callback:function(){
					Interaction.droppedBowl.animate({
						style:bowlDefaultStyle,
						duration:500,
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
				Interaction.droppedBowl.animate(bowlDroppedFalseStyle,500);
				
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
	var NUMBER_OF_SHAPES  = 26;
	Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
	if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
		Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
	shapeType = Interaction.shuffledArray[Interaction.shapeCount];
	///*TEST*/shapeType = 11; /*TEST*/
	switch(shapeType){
		case 0:
			Interaction.shape = new Path.Circle(new Point(x+w*0.5,y+h*0.5),5);
			Interaction.shape.style = {
					fillColor : '#000',
					strokeColor : '#000'
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
			Interaction.shape = new Path.Cube(new Point(x+w*0.5-a*0.5,y+h*0.5-a*0.5),a);
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
			Interaction.shape = new Path.Trapezoid(new Point(x,y),new Size(w,h),w*0.6);
			Interaction.shape.dimension = 1;
			break;
		case 17:
			Interaction.shape = new Path.Trapezoid(new Point(x,y),new Size(w,h),w*0.4);
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
	}
	if(Interaction.shape.dimension == 1)
		Interaction.shape.setStyle(edgeStyle);
	else if(Interaction.shape.dimension == 2)
		Interaction.shape.setStyle(twoDimensionalShapeStyle);
	else if(Interaction.shape.dimension == 3)
		Interaction.shape.setStyle(threeDimensionalShapeStyle);
	
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