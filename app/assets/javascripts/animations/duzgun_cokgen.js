// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var dropableShapeHoverStyle = {'stroke':'#999','fill':'#ff9'};
var dropableShapeDefaultStyle = {'stroke':'#000','fill':'#fff'};
var dropableShapeDroppedTrueStyle = {'stroke':'#0f0','fill':'#afa'};
var dropableShapeDroppedFalseStyle = {'stroke':'#f00','fill':'#faa'};
var dropableShapeDroppedFalseStyle = {'stroke':'#f00','fill':'#faa'};
/*Styles*/

var Interaction =function(){};Interaction();

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çokgenlerden düzgün olanları seçiniz.');
	Interaction.paper = new Raphael(container,$(container).width(),$(container).height());
	Interaction.container = container;
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	var w = Interaction.paper.width;
	var h = Interaction.paper.height;
	//Interaction.generateRandomShapes(w,h);
	Interaction.createDropableShape(w*0.8,0,w*0.2,h);
	Interaction.generateRandomShapes(w*0.8,h);
};

Interaction.generateRandomShapes = function(WIDTH,HEIGHT){
	Interaction.shapes = Interaction.paper.set();
	var maxW = WIDTH*0.2;
	var maxH = HEIGHT*0.3;
	do{
		var x,y,w,h;
		var p = Interaction.findSpace();
		x = p.x, y = p.y;
		Interaction.shapeType = Math.floor(Math.random()*1);
		w = maxW*0.8;
		h = maxH*0.8;
		var shape;
		switch(Interaction.shapeType){
			case 0:
				shape = Interaction.paper.rect(x,y,w,h);
				console.log(x,y,w,h)
				break;
		}
		var start = function(){console.log('drag started');},
		move = function(){console.log('dragging');},
		up = function(){
			if(Interaction.dropableShape.isMouseIn())
				alert('inside');
			else
				alert('outside')
			};
		shape.drag(move,start,up);
		Interaction.shapes.push(shape);
	}while(false && x+w+maxW < WIDTH && y+h+maxH < HEIGHT)
	
};

Interaction.createDropableShape = function(X,Y,WIDTH,HEIGHT){
	var x,y,rx,ry,length;
	x = X + WIDTH*0.5;
	y = Y + HEIGHT * 0.5;
	length = Math.min(WIDTH,HEIGHT);
	rx = length * 0.45;
	ry = length * 0.40;	
	Interaction.dropableShape = Interaction.paper.ellipse(x,y,rx,ry).attr(dropableShapeDefaultStyle);
	Interaction.dropableShape.mouseIn = false;
	var mouseOver = function(){
		Interaction.dropableShape.mouseIn = true;
	},
	mouseOut = function(){
		Interaction.dropableShape.mouseIn = false;
	};
	Interaction.dropableShape.isMouseIn = function(){
		return Interaction.dropableShape.mouseIn;
	};
	Interaction.dropableShape.mouseover(mouseOver);
	Interaction.dropableShape.mouseout(mouseOut);
	document.body.onclick = function(){console.log( Interaction.dropableShape.isMouseIn())}
	
};

//find left-upper-most empty space to place a shape
Interaction.findSpace = function(){
	var e = Interaction.shapes[Interaction.shapes.length];
	if(e)
		return {x:e.x+e.w,y:e.y+e.h};
	else
		return {x:0,y:0};
}