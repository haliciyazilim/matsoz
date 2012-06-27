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

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çokgenlerden düzgün olanları seçiniz.');
	Interaction.paper = new Raphael(container,$(container).width(),$(container).height());
	Interaction.container = container;
	$(Interaction.container).css('position','relative');
	Interaction.status = document.createElement('div');
	Interaction.status.className = 'status_true';
	$(Interaction.status).css({'position':'absolute','top':''+(Interaction.paper.height*0.9)+'px','left':'0px','padding-left':'20px'});
	Interaction.container.appendChild(Interaction.status);
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	var w = Interaction.paper.width;
	var h = Interaction.paper.height;
	//Interaction.generateRandomShapes(w,h);
	Interaction.createDropableShape(w*0.8,0,w*0.2,h);
	Interaction.generateRandomShapes(w*0.05,h*0.2,w*0.7,h*0.8);
	Interaction.preventDrag = false;
};

Interaction.generateRandomShapes = function(X,Y,WIDTH,HEIGHT){
	Interaction.shapes = Interaction.paper.set();
	var maxW = WIDTH*0.2;
	var maxH = HEIGHT*0.3;
	var start = function(){
		this.x = this.data('x');
		this.y = this.data('y');
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
		this.toFront();
		this.transform('T'+(-this.odx+dx)+','+(-this.ody+dy)+'...' );
		//this.attr('-webkit-transform', 'translate3d('+(-this.odx+dx)+','+(-this.ody+dy)+',0)' );
		this.odx = dx;
		this.ody = dy;
		if(Interaction.dropableShape.isPointInside(x-this.s_left,y-this.s_top)){
			this.inDropableShape = true;
			Interaction.dropableShape.attr(dropableShapeHoverStyle);
		}
		else{
			Interaction.dropableShape.attr(dropableShapeDefaultStyle);
			this.inDropableShape = false;
		}
		return true;
	},
	up = function(){
		if(this.preventDrag == true)
			return;
		this.preventDrag=true;
		Interaction.dropableShape.attr(dropableShapeDefaultStyle);
		
		var revert = false;
		if(this.inDropableShape == true){
			if(this.data('isRegular') === true){
				this.animate({opacity:0.1},400,this.remove);
				this.data('isRegular',false);
				Interaction.dropableShape.animate(dropableShapeDroppedTrueStyle,400,this.callback);
			}
			else
				revert = true;
		}
		else
			revert = true;
		if(revert == true){
			var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
			var velocity = 1;// px/ms
			var time  = distance / velocity;
			Interaction.dropableShape.animate(dropableShapeDroppedFalseStyle,time);
			this.animate({transform:'T'+(-this.odx)+','+(-this.ody)+'...'},time*4,this.callback);
		}
		var isExist=false;
		for(var i=0; i < Interaction.shapes.length ;i++)
			if(Interaction.shapes[i] != 'undefined' && Interaction.shapes[i].data('isRegular')==true)
				isExist=true;
		if(isExist == false)
			Interaction.setStatus('Tebrikler bütün düzgün çokgenleri buldunuz. <input type="button" onclick="Interaction.container.innerHTML=null;Interaction.init(Interaction.container);" value="Baştan Başla" class="control_button"/>');
		//console.log(Interaction.shapes);
	};
	do{///generate shapes randomly
		var x,y,w,h;
		var p = Interaction.findSpace(WIDTH,HEIGHT);

		x = p.x+X, y = p.y+Y;
		Interaction.shapeType = Math.floor(Math.random()*6);
		//Interaction.shapeType = 3;
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
				shape = Interaction.paper.rect(x,y,w,h).data({'x':x,'y':y,'w':w,'h':h});
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
				shape = Triangle(a,b,c,x,y,w,h,Interaction.paper);	
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
		shape.data('isRegular',isRegular);
		shape.attr(shapeStyle);
		shape.drag(move,start,up);
		shape.callback=function(){Interaction.dropableShape.animate(dropableShapeDefaultStyle,200);this.preventDrag=false;}; 
		Interaction.shapes.push(shape);
	}while(Interaction.shapes.length < 15)
	
};

Interaction.createDropableShape = function(X,Y,WIDTH,HEIGHT){
	var x,y,rx,ry,length;
	x = X + WIDTH*0.5;
	y = Y + HEIGHT * 0.5;
	length = Math.min(WIDTH,HEIGHT);
	rx = length * 0.45;
	ry = length * 0.40;	
	Interaction.dropableShape = Interaction.paper.ellipse(x,y,rx,ry).attr(dropableShapeDefaultStyle);
	Interaction.paper.text(x,y,"Düzgün\nçokgen").attr(textStyle).mouseover(function(){return false;});

	
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
	return paper.triangle( this.p1.x,
					this.p1.y,
					this.p2.x,
					this.p2.y,
					this.p3.x,

					this.p3.y ).attr(shapeStyle);
	
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



