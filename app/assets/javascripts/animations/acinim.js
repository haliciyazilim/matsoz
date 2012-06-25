// JavaScript Document
var Acinim = function(){};
function animationInit(){}

/*Styles*/
var shapeStyle = {'stroke-width':'2px'};
var expandedShapeStyle = {'fill':'#fff','stroke-width':'2px','stroke':'#000'}; 
/*Styles*/
var Interaction =function(){};Interaction();
Interaction.init = function(container){
	Acinim();
	Acinim.firstCall = true;
	Acinim.container = container;
	
	Acinim.yonergetext1 = 'Aşağıdaki geometrik cisimlerden açınımını elde etmek istediğinizin üzerine fare ile tıklayın.';
	Acinim.yonergetext2 = 'Aşağıdaki açınımın hangi geometrik cisim olduğunu görmek için açınımının üzerine fare ile tıklayın.';
	
	Main.setObjective(Acinim.yonergetext1);
	Acinim.shapes = document.createElement('div');
	$(Acinim.shapes).css({
			height:'200px'
			
		});
	Acinim.shapes.id = 'acinim_shapes';
	Acinim.shapes.innerHTML = '<div id="acinim_shapes_L"></div><div id="acinim_shapes_R"></div>';
	Acinim.container.appendChild(Acinim.shapes);
	$(Acinim.container).append('<style>div#acinim_shapes > div{padding-top:50px;float:left;width:50%;cursor:pointer;height:100%;}</style>');
	//Acinim.ShowShapes();
	

	Cube(document.getElementById('acinim_shapes_L'),200,200);
	RectangularPrism(document.getElementById('acinim_shapes_R'),200,200);

	Acinim.showShapes();
}

function showPaperSet(st,animTime){
	if(st==null || st == 'undefined')
		return;
	st.attr({
		opacity: 0,
	//	transform: "t0, -30 s0.3, 0.3, 100,100"
		});
	//var anim = Raphael.animation({transform:"t0, 0 s1,1,100,100", opacity:1}, animTime);
	var anim = Raphael.animation({opacity:1}, animTime);
	st.animate(anim);
}
function hidePaperSet(st,animTime){
	if(st==null || st == 'undefined')
		return;
	st.attr({
		opacity: 1,
	//	transform: "t0, 0 s1,1,50,100"
		});
	//var anim = Raphael.animation({transform:"t0, -30 s0.3, 0.3, 50,100", opacity:0}, animTime);
	var anim = Raphael.animation({opacity:0}, animTime);
	st.animate(anim);
}
/*
	Skeleton class for shape classes
	var ShapeName = function(container){
			this.continer = container;
			this.drawShape = function(){
					//draw the 3D shape on the container
				};
			this.drawExpansion = function(){
					//draw the 2D ranom generated shape on the container
				};
			return this;
		};
*/

var Cube = function(container,width,height){
	
		Cube.container = container;
		Cube.width = width;
		Cube.height = height;
		Cube.scale = 0.40;
		Cube.paper = new Raphael(Cube.container,Cube.width,Cube.height);
		
		Cube.drawShape = function(){
			Cube.paper.clear();
			////console.log('Im here');
			////console.log(Cube.paper.set().length);
			var x1,y1,w,h,k;
			x1 = Cube.width * Cube.scale;
			y1 = Cube.height * Cube.scale;
			w  = Cube.width * (1-2*Cube.scale);
			h  = Cube.height * (1-2*Cube.scale);
			k  = 0.37;
			
			//draw rect
			Cube.paper.setStart();
			Cube.paper.rect(x1,y1,w,h).attr(shapeStyle).attr({'fill':'#AAA'});
			Cube.paper.line(x1,y1,x1+k*w,y1-k*h).attr(shapeStyle);
			Cube.paper.line(x1+k*w,y1-k*h,x1+w+k*w,y1-k*h).attr(shapeStyle);
			Cube.paper.line(x1+w,y1,x1+w+k*w,y1-k*h).attr(shapeStyle);
			Cube.paper.line(x1+w+k*w,y1-k*h,x1+w+k*w,y1+h-k*h).attr(shapeStyle);
			Cube.paper.line(x1+w,y1+h,x1+w+k*w,y1+h-k*h).attr(shapeStyle);
			Cube.set = Cube.paper.setFinish();
			//ShowPaperSet(Cube.set,0.7e3);
			////console.log(Cube.paper.set());
			
		};
		
		Cube.drawExpansion = function(){
			Cube.paper.clear();
			//Cube.paper = new Raphael(Cube.container,Cube.width,Cube.height);
			var r1 = Math.floor(Math.random()*4);
			var r2 = Math.floor(Math.random()*4);
			var x1,y1,a;
			x1 = 40;
			y1 = Math.floor(Cube.height * Cube.scale);
			a  = Math.floor(Cube.width * (1-2*Cube.scale));
			y1 -= a;
			Cube.paper.setStart();
			Cube.paper.rect(x1,y1+a,4*a,a).attr(expandedShapeStyle);
			Cube.paper.line(x1+a,y1+a,x1+a,y1+2*a).attr(expandedShapeStyle);
			Cube.paper.line(x1+2*a,y1+a,x1+2*a,y1+2*a).attr(expandedShapeStyle);
			Cube.paper.line(x1+3*a,y1+a,x1+3*a,y1+2*a).attr(expandedShapeStyle);
			Cube.paper.rect(x1+r1*a,y1,a,a).attr(expandedShapeStyle);
			Cube.paper.rect(x1+r2*a,y1+2*a,a,a).attr(expandedShapeStyle);
			Cube.paper.rect(x1+a+1,y1+a+1,a-2,a-2).attr(expandedShapeStyle).attr({'fill':'#AAA','stroke-width':'0px','stroke':''});
			Cube.set = Cube.paper.setFinish();
			showPaperSet(Cube.set,0.7e3);
			
			
		};

		//return Cube;
	};
var RectangularPrism = function(container,width,height){
		RectangularPrism.container = container;
		RectangularPrism.width = width;
		RectangularPrism.height = height;
		RectangularPrism.scale = 0.37;
		RectangularPrism.a_h = 20;
		RectangularPrism.a_w = 25;
		RectangularPrism.paper = new Raphael(RectangularPrism.container,RectangularPrism.width,RectangularPrism.height);
		RectangularPrism.drawShape = function(){
			RectangularPrism.paper.clear();
			var x1,y1,w,h,k,d;
			x1 = RectangularPrism.width * RectangularPrism.scale;
			y1 = RectangularPrism.height * RectangularPrism.scale;
			w  = RectangularPrism.width * (1-2*RectangularPrism.scale);
			h  = RectangularPrism.height * (1-2*RectangularPrism.scale);
			h  = w*0.6;
			d  = Math.floor(Math.sqrt(w * h))*1.2;
			////console.log('d: '+d);
			k  = 0.4;
			_w = Math.floor(Math.sin(Util.degreeToRadians(RectangularPrism.a_w))*d);
			_h = Math.floor(Math.sin(Util.degreeToRadians(RectangularPrism.a_h))*d);
			
			RectangularPrism.paper.setStart();
			RectangularPrism.paper.rect(x1,y1,w,h).attr(shapeStyle).attr('fill','#AAA');
			RectangularPrism.paper.line(x1,y1,x1+_w,y1-_h).attr(shapeStyle);
			RectangularPrism.paper.line(x1+_w,y1-_h,x1+w+_w,y1-_h).attr(shapeStyle);
			RectangularPrism.paper.line(x1+w,y1,x1+w+_w,y1-_h).attr(shapeStyle);
			RectangularPrism.paper.line(x1+w+_w,y1-_h,x1+w+_w,y1+h-_h).attr(shapeStyle);
			RectangularPrism.paper.line(x1+w,y1+h,x1+w+_w,y1+h-_h).attr(shapeStyle);
			
			RectangularPrism.set = RectangularPrism.paper.setFinish();
			
			
			
		};
		RectangularPrism.drawExpansion = function(){
			RectangularPrism.paper.clear();
			var x1,y1,w,h,k,d,W,H;
			x1 = 20;
			y1 = RectangularPrism.height * RectangularPrism.scale;
			w  = RectangularPrism.width * (1-2*RectangularPrism.scale);
			h  = RectangularPrism.height * (1-2*RectangularPrism.scale);
			h  = w*0.6;
			y1-= h;
			d  = Math.floor(Math.sqrt(w * h))*1.2;
			W  = 2 * (h + d);
			H  = 2 * h + w;
			var r1 = Math.floor(Math.random()*2);
			var r2 = Math.floor(Math.random()*2);
			
			RectangularPrism.paper.setStart();
			RectangularPrism.paper.rect(x1,y1+h,W,w).attr(expandedShapeStyle);
			RectangularPrism.paper.line(x1+h,y1+h,x1+h,y1+h+w).attr(expandedShapeStyle);
			RectangularPrism.paper.line(x1+h+d,y1+h,x1+h+d,y1+h+w).attr(expandedShapeStyle);
			RectangularPrism.paper.line(x1+2*h+d,y1+h,x1+2*h+d,y1+h+w).attr(expandedShapeStyle);
			RectangularPrism.drawSides(x1,y1,w,h,d,RectangularPrism.paper,r1,true).attr(expandedShapeStyle);
			RectangularPrism.drawSides(x1,y1,w,h,d,RectangularPrism.paper,r2,false).attr(expandedShapeStyle);
			RectangularPrism.paper.rect(x1+1,y1+h+1,h-2,d+2).attr(expandedShapeStyle).attr({'fill':'#AAA','stroke':''});
			RectangularPrism.set = RectangularPrism.paper.setFinish();
			
			showPaperSet(RectangularPrism.set,0.7e3);
			
		};
		RectangularPrism.drawSides = function(x,y,w,h,d,paper,r,isTop){
				switch(r){
					case 0:
						return RectangularPrism.paper.rect(x+h,y+(isTop?h+w:0),d,h);
						break;
					case 1:
						return RectangularPrism.paper.rect(x+2*h+d,y+(isTop?h+w:0),d,h);
						break;
				}
			}
	};

Cube.showExpansion = function(shape){

	//clear L and R containers
	var animTime = 0.7e3;
	hidePaperSet(Cube.set,animTime);
	hidePaperSet(RectangularPrism.set,animTime);
	setTimeout(function(){
			Main.setObjective(Acinim.yonergetext2);
			Cube.container.onclick = Acinim.showShapes;
			RectangularPrism.paper.clear();
		},animTime);
	setTimeout(Cube.drawExpansion,animTime);
	

};
RectangularPrism.showExpansion = function(shape){

	
	//clear L and R containers
	var animTime = 0.7e3;
	hidePaperSet(Cube.set,animTime);
	hidePaperSet(RectangularPrism.set,animTime);
	setTimeout(function(){
			Main.setObjective(Acinim.yonergetext2);
			RectangularPrism.container.onclick = Acinim.showShapes;
			Cube.paper.clear();
		},animTime);
	setTimeout(RectangularPrism.drawExpansion,animTime);
	

};
Acinim.showShapes = function(){
	//console.log("I'm here");
	var animTime = 0.7e3;
	if(Acinim.firstCall == true){
		Main.setObjective(Acinim.yonergetext1);
		Acinim.firstCall = false;
		Cube.container.onclick = Cube.showExpansion;
		RectangularPrism.container.onclick = RectangularPrism.showExpansion;
		Cube.drawShape();
		RectangularPrism.drawShape();
		return;
	}
	//console.log('238');
	//console.log(Cube.set.length);
	//console.log(RectangularPrism.set.length);
	hidePaperSet(Cube.set,animTime);
	hidePaperSet(RectangularPrism.set,animTime);
	
	setTimeout(function(){
			Main.setObjective(Acinim.yonergetext1);
			Cube.container.onclick = Cube.showExpansion;
			RectangularPrism.container.onclick = RectangularPrism.showExpansion;
			Cube.drawShape();
			showPaperSet(Cube.set,animTime);
			RectangularPrism.drawShape();
			showPaperSet(RectangularPrism.set,animTime);
		},animTime);
	
	
};





