// JavaScript Document

/*Styles*/
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
//var shapeStyle = {'fill':'#fff','shape-rendering':'crispEdges'};
var shapeStyle = {strokeColor:'#000',strokeWidth:2,fillColor:'#fff'};
var dropableShapeHoverStyle = {strokeColor:'#000',fillColor:'#dd9',strokeWidth:2};
var dropableShapeDefaultStyle = "default";
var dropableShapeDefaultTriangleStyle = {strokeColor:'#999',fillColor:'rgb(146,208,80)',strokeWidth:1};
var dropableShapeDefaultRectangleStyle = {strokeColor:'#999',fillColor:'rgb(226,108,9)',strokeWidth:1};
var dropableShapeDefaultPentagonStyle = {strokeColor:'#999',fillColor:'rgb(177,160,198)',strokeWidth:1};
var dropableShapeDefaultHexagonStyle = {strokeColor:'#999',fillColor:'rgb(217,148,147)',strokeWidth:1};
var dropableShapeDroppedTrueStyle = {strokeColor:'#0f0',fillColor:'#afa'};
var dropableShapeDroppedFalseStyle = {strokeColor:'#f00',fillColor:'#f00'};
//Styles

var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çokgenleri sınıflandırınız.');
	Interaction.container = container;
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	project.activeLayer.removeChildren();
	Interaction.dropableShapes = {
		
		setStyle : function(style){
			if(style == dropableShapeDefaultStyle){
				Interaction.dropableShapes.triangle.setStyle(dropableShapeDefaultTriangleStyle);
				Interaction.dropableShapes.rectangle.setStyle(dropableShapeDefaultRectangleStyle);
				Interaction.dropableShapes.pentagon.setStyle(dropableShapeDefaultPentagonStyle);
				Interaction.dropableShapes.hexagon.setStyle(dropableShapeDefaultHexagonStyle);
			}
			else{
				Interaction.dropableShapes.triangle.setStyle(style);
				Interaction.dropableShapes.rectangle.setStyle(style);
				Interaction.dropableShapes.pentagon.setStyle(style);
				Interaction.dropableShapes.hexagon.setStyle(style);
			}
		}
		
	};
	Interaction.createDropableShapesLeft(w*0.0,0,w*0.2,h);
	Interaction.createDropableShapesRight(w*0.8,0,w*0.2,h);
	Interaction.dropableShapes.setStyle(dropableShapeDefaultStyle);
	Interaction.generateRandomShapes(w*0.2,h*0.1,w*0.6,h*0.8);
	Interaction.paper = {width:500,height:300};
	Interaction.preventDrag = false;
	if(Interaction.status == null || Interaction.status == 'undefined'){
		Interaction.status = document.createElement('div');
		Interaction.status.className = 'status_true';
		$(Interaction.status).css({'position':'absolute','top':''+(h-20)+'px','left':'0px','padding-left':'20px','width':'100%'});
		Interaction.container.appendChild(Interaction.status);
	}
	else
		Interaction.setStatus('');
	if(Interaction.viewDrawCalled == null || Interaction.viewDrawCalled == 'undefined'){
		paper.view.draw();
		Interaction.viewDrawCalled = true;
	}
	var drag = new Tool();
	drag.setHitTestOptions({ 
		fill: true, 
		stroke: true, 
		segments: true, 
		tolerance: 2, 
		class: "draggable" 
	});
	drag.onMouseDown = function(event){
		//Interaction.circleSet.start()
		if(event.item){
			drag.shape = event.item;
			event.item.start();
		}
	};
	drag.onMouseDrag = function(event){
		//Interaction.circleSet.move(event.delta.x,event.delta.y,event.point.x,event.point.y)
		//console.log(event.item);
		if(drag.shape)
			drag.shape.move(event.delta.x,event.delta.y,event.point.x,event.point.y);
	};
	drag.onMouseUp = function(event){
		if(drag.shape)
			drag.shape.up();
		drag.shape = null;
	}
	drag.activate();
};

var start = function(){
		//console.log('start preventDrag: '+this.preventDrag);
		this.ox = this.position.x;
		this.oy = this.position.y;
		this.hitShape = null;
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
		this.odx += dx;
		this.ody += dy;
		Interaction.dropableShapes.setStyle(dropableShapeDefaultStyle);
		this.position = [this.position.x + dx,this.position.y + dy];
		var hitResult = project.activeLayer.hitTest([x,y],{ fill: true, stroke: true, segments: true, tolerance: 2, class: "dropableShape" });
		if(hitResult){
			this.inDropableShape = true;
			this.hitShape = hitResult.item
			this.hitShape.setStyle(dropableShapeHoverStyle);
		}else{
			this.inDropableShape = false;
			this.hitShape = null;
		}
		
		return true;
	},
	up = function(){
		if(this.preventDrag == true)
			return;
		//console.log("abc");
		this.preventDrag=true;
		Interaction.dropableShapes.setStyle(dropableShapeDefaultStyle);
		
		var revert = false;
		if(this.inDropableShape == true){
			if(this.hitShape.numberOfEdges === this.numberOfEdges){
				//this.animate({opacity:0.1},400,this.remove);
				this.remove();
				this.class = null;
				
				//Interaction.dropableShape.animate(dropableShapeDroppedTrueStyle,400,this.callback);
				this.hitShape.setStyle(dropableShapeDroppedTrueStyle);
				setTimeout(function(){
						Interaction.dropableShapes.setStyle(dropableShapeDefaultStyle);
					},400);
			}
			else{
				revert = true;
				this.hitShape.setStyle(dropableShapeDroppedFalseStyle);
				setTimeout(function(){
						Interaction.dropableShapes.setStyle(dropableShapeDefaultStyle);
					},400);
			}
		}
		else
			revert = true;
		if(revert == true){
			var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
			var velocity = 1;// px/ms
			var time  = distance / velocity;
			/*this.callback = function(){
				this.preventDrag = false;
				console.log(this.preventDrag);
			}*/
			this.animate({
					style:{
						position:new Point(this.ox,this.oy)
						},
					duration: time,
					callback:this.callback
				});
		}
		var isExist=false;
		for(var i=0; i < Interaction.shapes.length ;i++)
				if(Interaction.shapes[i].class == "draggable")
					isExist=true;
		if(isExist == false)
			Interaction.setStatus('Tebrikler bütün çokgenleri doğru şekilde sınıflandırdınız. <input type="button" onclick="Interaction.init(Interaction.container);" value="Baştan Başla" class="control_button"/>');
	};
Interaction.generateRandomShapes = function(X,Y,WIDTH,HEIGHT){
	Interaction.shapes = [];
	var maxW = WIDTH*0.2;
	var maxH = HEIGHT*0.3;
	do{///generate shapes randomly
		var x,y,w,h;
		var p = Interaction.findSpace(WIDTH,HEIGHT);
		x = p.x+X, y = p.y+Y;
		Interaction.shapeType = Math.floor(Math.random()*6);
		//Interaction.shapeType = 2;
		w = maxW*0.7;
		h = maxH*0.7;
		var shape = {};
		var isRegular;
		var edgeNumber;
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
				shape = new Path.Rectangle(new Point(x,y),new Size(w,h));
				edgeNumber = 4;
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
				shape = new Triangle(a,b,c,x,y,w,h);
				edgeNumber = 3;
				break;
			case 2:
				if(isRegular == false)
					shape = pentagon(new Point(x,y), new Size(w,h));
				else
					shape = regularpentagon(new Point(x,y), new Size(w,h));
				edgeNumber = 5;
				break;
			case 3:
				if(isRegular == false)
					shape = hexagon(new Point(x,y), new Size(w,h));
				else
					shape = regularhexagon(new Point(x,y), new Size(w,h));
				edgeNumber = 6;
				break;
			case 4:
				if(isRegular == true)
					continue;
				shape = new Path.Rhomboid(new Point(x,y+h*0.1), new Size(w*0.8,h*0.7), w*0.2);
				edgeNumber = 4;
				break;
			case 5:
				if(isRegular == true)
					continue;
				shape = new Path.Rhombus(new Point(x,y+h*0.1),new Size(w,h*0.7) );
				edgeNumber = 4;
				break;
		}
		shape.numberOfEdges = edgeNumber;
		shape.class = "draggable";
		shape.style = shapeStyle;
		shape.start = start;
		shape.move = move;
		shape.up = up;
		shape.callback = function(){
			//console.log(this)
			this.preventDrag = false; 
			//console.log("I'm here");
			
		};
		shape.order = Interaction.shapes.length;
		Interaction.shapes.push(shape);
	}while( Interaction.shapes.length < 15 )

};
Interaction.createDropableShape = function(x,y,w,h,text){
	var shape = new Path.Oval(
		new Rectangle(
			new Point(x,y),
			new Size(w,h)
		)
	);
	shape.class = "dropableShape";
	//shape.style = dropableShapeDefaultStyle;
	var t1 = new PointText(new Point(x+w*0.5-20,y+h*0.5+5));
	t1.style = textStyle;
	t1.content = text;
	//t1.position = [x+w*0.5-t1.bounds.width*0.5,y+h*0.5+t1.bounds.height*0.5]
	return shape;
}
Interaction.createDropableShapesLeft = function(X,Y,WIDTH,HEIGHT){	
	var x,y,rx,ry,length;
	w = WIDTH * 0.90;
	h = WIDTH * 0.80;
	x = X + (WIDTH-w)*0.5;
	y = Y + (HEIGHT-h*2) * 0.5;
	Interaction.dropableShapes.triangle = Interaction.createDropableShape(x,y,w,h,"Üçgen");
	Interaction.dropableShapes.triangle.numberOfEdges = 3;
	Interaction.dropableShapes.rectangle = Interaction.createDropableShape(x,y+h*1.2,w,h,"Dörtgen");
	Interaction.dropableShapes.rectangle.numberOfEdges = 4;
};

Interaction.createDropableShapesRight = function(X,Y,WIDTH,HEIGHT){	
	var x,y,rx,ry,length;
	length = Math.min(WIDTH,HEIGHT);
	w = length * 0.90;
	h = length * 0.80;
	x = X + (WIDTH-w)*0.5;
	y = Y + (HEIGHT-h*2) * 0.5;
	Interaction.dropableShapes.pentagon = Interaction.createDropableShape(x,y,w,h,"Beşgen");
	Interaction.dropableShapes.pentagon.numberOfEdges = 5;
	Interaction.dropableShapes.hexagon = Interaction.createDropableShape(x,y+h*1.2,w,h,"Altıgen");
	Interaction.dropableShapes.hexagon.numberOfEdges = 6;
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
function Triangle(i,j,k,x,y,maxW,maxH){
	this.i=i,this.j=j,this.k=k;
	this.p1={x:0,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
	this.a1=null,this.a2=null,this.a3=null;
	var a = Math.min(maxW,maxH);
	var _c = a/Math.max(i,j,k);
	this.p1.x = x;
	this.p1.y = y+a;
	this.p2.x = this.p1.x + this.i*_c;
	this.p2.y = this.p1.y;
	var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
	this.p3.x = this.p1.x + Math.cos(a)*k*_c;
	this.p3.y = this.p1.y - Math.sin(a)*k*_c;
	return new Path.Triangle(this.p1,this.p2,this.p3);
};
function pentagon(p,s){
	var o=[10,70,150,200,300];
	return new Path.EquiradialPolygon(p,s,o);
}
function regularpentagon(p,s){
	return new Path.RegularPolygon(p,s,5);
}
function hexagon(p,s){
	var o=[10,50,100,150,200,300];
	return new Path.EquiradialPolygon(p,s,o);
}
function regularhexagon(p,s){
	return new Path.RegularPolygon(p,s,6);
}
Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}