// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px','font-weight':'bold','fill':'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
//var shapeStyle = {'fill':'#fff','shape-rendering':'crispEdges'};
var shapeStyle = {'fill':'#fff'};
var dropableShapeHoverStyle = {'stroke':'#000','fill':'#dd9','stroke-width':2};
var dropableShapeDefaultStyle = {'stroke':'#999','fill':'rgb(146,208,80)','stroke-width':1};
var dropableShapeDroppedTrueStyle = {'stroke':'#0f0','fill':'#afa'};
var dropableShapeDroppedFalseStyle = {'stroke':'#f00','fill':'#f00'};
/*Styles*/

var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çokgenlerden düzgün olanları seçiniz.');
	Interaction.container = container;
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	Interaction.createDropableShape(w*0.8,0,w*0.2,h);
	Interaction.generateRandomShapes(w*0.05,h*0.2,w*0.7,h*0.8);
	Interaction.preventDrag = false;
	Interaction.dropableShape.scale(Main.scale, new Point(0,0));
	paper.view.draw();
};

Interaction.generateRandomShapes = function(X,Y,WIDTH,HEIGHT){
	Interaction.shapes = [];
	var maxW = WIDTH*0.2;
	var maxH = HEIGHT*0.3;
	
	var start = function(){
		this.ox = this.position.x;
		this.oy = this.position.y;
		this.odx = 0;
		this.ody = 0;
		var svg_offset = $(Interaction.container).offset();
		this.s_left = svg_offset.left;
		this.s_top = svg_offset.top;
		this.inDropableShape = false;
		if(this.preventDrag == null || this.preventDrag == 'undefined')
			this.preventDrag = false;
		return true;
	},
	move = function(dx,dy,x,y){
		if(this.preventDrag == true )
			return;
		//this.toFront();
		this.odx += dx;
		this.ody += dy;
		this.position = [this.position.x + dx,this.position.y + dy];
		if(Interaction.dropableShape.hitTest([x-this.s_left,y-this.s_top])){
			this.inDropableShape = true;
			Interaction.dropableShape.style = dropableShapeHoverStyle;
		}
		else{
			Interaction.dropableShape.style = dropableShapeDefaultStyle;
			this.inDropableShape = false;
		}
		return true;
	},
	up = function(){
		if(this.preventDrag == true)
			return;
		//this.preventDrag=true;
		Interaction.dropableShape.style = dropableShapeDefaultStyle;
		
		var revert = false;
		/*if(this.inDropableShape == true){
			if(this.data('isRegular') === true){
				this.animate({opacity:0.1},400,this.remove);
				this.data('isRegular',false);
				Interaction.dropableShape.animate(dropableShapeDroppedTrueStyle,400,this.callback);
			}
			else
				revert = true;
		}
		else
			revert = true;*/
		//if(revert == true){
			//var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
			//var velocity = 1;// px/ms
			//var time  = distance / velocity;
			//Interaction.dropableShape.animate(dropableShapeDroppedFalseStyle,time);
			//this.animate({transform:'T'+(-this.odx)+','+(-this.ody)+'...'},time*4,this.callback);
			AnimationManager.translate(this,new Point(this.ox - this.position.x,this.oy - this.position.y),500)
		//}
		//var isExist=false;
		//for(var i=0; i < Interaction.shapes.length ;i++)
		//	if(Interaction.shapes[i] != 'undefined' && Interaction.shapes[i].data('isRegular')==true)
		//		isExist=true;
		//if(isExist == false)
		//	Interaction.setStatus('Tebrikler bütün düzgün çokgenleri buldunuz. <input type="button" onclick="Interaction.container.innerHTML=null;Interaction.init(Interaction.container);" value="Baştan Başla" class="control_button"/>');
	};
	do{///generate shapes randomly
		var x,y,w,h;
		var p = Interaction.findSpace(WIDTH,HEIGHT);

		x = p.x+X, y = p.y+Y;
		Interaction.shapeType = Math.floor(Math.random()*6);
		Interaction.shapeType = 0;
		w = maxW*0.7;
		h = maxH*0.7;
		var shape;
		var isRegular;
		if(Util.rand01() == 0)
			isRegular = true;
		else
			isRegular = false;
		switch(Interaction.shapeType){
			case 0:
				h = w = Math.min(w,h);
				if(isRegular == false){
					while(h == w || h > maxH)
						h = Math.floor(Math.random()*2)*10+w-20;
				}
				//shape = Interaction.paper.rect(x,y,w,h).data({'x':x,'y':y,'w':w,'h':h});
				//shape = new Path.Rectangle(new Point(x,y),new Size(w,h));
				//shape = new Path.Rhomboid(new Point(x,y),new Size(w*0.8,h),w*0.2);
				//shape = new Path.Cube(new Point(x,y),Math.min(h,w));
				shape = new Path.Rhombus(new Point(x,y),new Size(h,w));
				break;
				
			case 1:
				var a,b,c;
					a = b = c = 5;
				if(isRegular == false){
					if(Util.rand01() == 0)
						a = 4, b = 3;
					else
						a = 3, b = 4;
				}	
				//shape = Triangle(a,b,c,x,y,w,h);
				shape = new Path.Bowl(x,y,w,h);
				shape.data = {'x':x,'y':y,'w':w,'h':h};
				break;
			case 2:
				if(isRegular == false)
					shape = pentagon(x,y,w,h);
				else
					shape = regularpentagon(x,y,w,h);
				break;
			case 3:
				if(isRegular == false)
					shape = hexagon(x,y,w,h);
				else
					shape = regularhexagon(x,y,w,h);
				break;
			case 4:
				if(isRegular == true)
					continue;
				shape = Interaction.paper.rhomboid(x,y+h*0.1,w*0.2,w*0.8,h*0.7);
				break;
			case 5:
				if(isRegular == true)
					continue;
				shape = Interaction.paper.rhombus(x,y+h*0.1,w,h*0.7);
				break;
		}
		shape.style = {
			fillColor : '#FFF',
			strokeColor : '#000',
			strokeWidth : 2
		}
		shape.start = start;
		shape.move = move;
		shape.up = up;
		shape.order = Interaction.shapes.length;
		Interaction.shapes.push(shape);
		
	}while( Interaction.shapes.length < 15 )
	
	var drag = new Tool();
	drag.onMouseDown = function(event){
		if(event.item){
			drag.shape = event.item;
			event.item.start();
		}
	};
	drag.onMouseDrag = function(event){
			drag.shape.move(event.delta.x,event.delta.y,event.x,event.y);
	};
	drag.onMouseUp = function(event){
		
		drag.shape.up();
		drag.shape = null;
	}
	drag.activate();
};

Interaction.createDropableShape = function(X,Y,WIDTH,HEIGHT){
	
	var x,y,rx,ry,length;
	length = Math.min(WIDTH,HEIGHT);
	w = length * 0.90;
	h = length * 0.80;
	x = X + (WIDTH-w)*0.5;
	y = Y + (HEIGHT-h) * 0.5;
	Interaction.dropableShape = new Path.Oval(new Rectangle(new Point(x,y), new Size(w,h)));

	Interaction.dropableShape.style = {
			fillColor : 'blue',
			strokeColor : 'red',
			strokeWidth : 5
		}
	var tool = new Tool();

	tool.onMouseMove = function(e){
		var hitResult = project.hitTest(
				[e.point.x*Main.scale,e.point.y*Main.scale],
				{
					fill: true, 
					stroke: true,
					tolerance: 0,
					center:true,
					bounds:true
				}
			);
	}

};

//find left-upper-most empty space to place a shape
Interaction.findSpace = function(w,h){
	var n = Interaction.shapes.length;
	var p = {
			x:Math.floor(n%5)*w*0.2,
			y:Math.floor(n/5)*h*0.3
		};
	return p;
}

function Triangle(i,j,k,x,y,maxW,maxH,paper){
	this.i=i,this.j=j,this.k=k;
	this.p1={x:0,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
	this.a1=null,this.a2=null,this.a3=null;
	var a = Math.min(maxW,maxH);
	var _c = a/Math.max(i,j,k);
	//console.log(_c);
	this.p1.x = x;
	this.p1.y = y+a;
	this.p2.x = this.p1.x + this.i*_c;
	this.p2.y = this.p1.y;
	var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
	this.p3.x = this.p1.x + Math.cos(a)*k*_c;
	this.p3.y = this.p1.y - Math.sin(a)*k*_c;
	var triangle = new Path.Triangle(this.p1,this.p2,this.p3);
	triangle.strokeColor = 'black';
	triangle.strokeWidth = 2;
	triangle.scale(Main.scale,[0,0])
	return triangle;
}
function pentagon(x,y,w,h){
	var o=[10,70,150,200,300];
	return Interaction.paper.equiradialPolygon(x,y,w,h,o);
}
function regularpentagon(x,y,w,h){
	return Interaction.paper.regularPolygon(x,y,w,h,5);
}

function hexagon(x,y,w,h){
	var o=[10,50,100,150,200,300];
	return Interaction.paper.equiradialPolygon(x,y,w,h,o);
	
}
function regularhexagon(x,y,w,h){
	return Interaction.paper.regularPolygon(x,y,w,h,6);
	
}
Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}