// JavaScript Document
var Acinim = function(){};
function animationInit(){}

/*Styles*/
var shapeStyle = {'stroke-width':'2px'};
var expandedShapeStyle = {'fill':'#aaa'}; 
/*Styles*/

function interactionInit(container){
	
	Acinim();
	Acinim.firstCall = true;
	Acinim.container = container;
	Acinim.yonerge = document.createElement('div');
	Acinim.yonerge.className = 'objective';
	Acinim.yonerge.text1 = 'Aşağıdaki geometrik cisimlerden açınımını elde etmek istediğinizin üzerine fare ile tıklayın.';
	Acinim.yonerge.text2 = 'Aşağıdaki açınımın hangi geometrik cisim olduğunu görmek için açınımının üzerine fare ile tıklayın.';
	Acinim.yonerge.innerHTML = Acinim.yonerge.text1;
	/*$(Acinim.yonerge).css({
			height:'60px',
			marginTop:'30px',
			marginBottom:'50px',
			borderRadius:'15px',
			backgroundColor:'rgb(219,237,244)',
			fontSize:'14px',
			border:'1px solid #666',
			boxSizing:'border-box',
			padding:'5px',
			textAlign:'center',
			lineHeight:'25px'
		});*/
	Acinim.yonerge.style.boxSizing
	Acinim.container.appendChild(Acinim.yonerge);
	////console.log('Im here');
	
	Acinim.shapes = document.createElement('div');
	$(Acinim.shapes).css({
			height:'200px'
			
		});
	Acinim.shapes.id = 'acinim_shapes';
	Acinim.shapes.innerHTML = '<div id="acinim_shapes_L"></div><div id="acinim_shapes_R"></div>';
	Acinim.container.appendChild(Acinim.shapes);
	$(Acinim.container).append('<style>div#acinim_shapes > div{float:left;width:50%;cursor:pointer;height:100%;}</style>');
	//Acinim.ShowShapes();
	

	Cube(document.getElementById('acinim_shapes_L'),200,200);
	RectangularPrism(document.getElementById('acinim_shapes_R'),200,200);

	Acinim.ShowShapes();
}
function ShowPaperSet(st,animTime){
	if(st==null || st == 'undefined')
		return;
	st.attr({
		opacity: 0,
		transform: "t0, -30 s0.3, 0.3, 100,100"
		});
	var anim = Raphael.animation({transform:"t0, 0 s1,1,100,100", opacity:1}, animTime);
	st.animate(anim);
}
function HidePaperSet(st,animTime){
	if(st==null || st == 'undefined')
		return;
	st.attr({
		opacity: 1,
		transform: "t0, 0 s1,1,50,100"
		});
	var anim = Raphael.animation({transform:"t0, -30 s0.3, 0.3, 50,100", opacity:0}, animTime);
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
			Cube.paper.rect(x1,y1,w,h).attr(shapeStyle);
			DrawLine(x1,y1,x1+k*w,y1-k*h,Cube.paper).attr(shapeStyle);
			DrawLine(x1+k*w,y1-k*h,x1+w+k*w,y1-k*h,Cube.paper).attr(shapeStyle);
			DrawLine(x1+w,y1,x1+w+k*w,y1-k*h,Cube.paper).attr(shapeStyle);
			DrawLine(x1+w+k*w,y1-k*h,x1+w+k*w,y1+h-k*h,Cube.paper).attr(shapeStyle);
			DrawLine(x1+w,y1+h,x1+w+k*w,y1+h-k*h,Cube.paper).attr(shapeStyle);
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
			x1 = 10;
			y1 = Cube.height * Cube.scale;
			a  = Cube.width * (1-2*Cube.scale);
			y1 -= a;
			Cube.paper.setStart();
			Cube.paper.rect(x1,y1+a,4*a,a).attr(expandedShapeStyle);
			DrawLine(x1+a,y1+a,x1+a,y1+2*a,Cube.paper).attr(expandedShapeStyle);
			DrawLine(x1+2*a,y1+a,x1+2*a,y1+2*a,Cube.paper).attr(expandedShapeStyle);
			DrawLine(x1+3*a,y1+a,x1+3*a,y1+2*a,Cube.paper).attr(expandedShapeStyle);
			Cube.paper.rect(x1+r1*a,y1,a,a).attr(expandedShapeStyle);
			Cube.paper.rect(x1+r2*a,y1+2*a,a,a).attr(expandedShapeStyle);
			Cube.set = Cube.paper.setFinish();
			ShowPaperSet(Cube.set,0.7e3);
			
			
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
			_w = Math.floor(Math.sin(toRadians(RectangularPrism.a_w))*d);
			_h = Math.floor(Math.sin(toRadians(RectangularPrism.a_h))*d);
			
			RectangularPrism.paper.setStart();
			RectangularPrism.paper.rect(x1,y1,w,h).attr(shapeStyle);
			DrawLine(x1,y1,x1+_w,y1-_h,RectangularPrism.paper).attr(shapeStyle);
			DrawLine(x1+_w,y1-_h,x1+w+_w,y1-_h,RectangularPrism.paper).attr(shapeStyle);
			DrawLine(x1+w,y1,x1+w+_w,y1-_h,RectangularPrism.paper).attr(shapeStyle);
			DrawLine(x1+w+_w,y1-_h,x1+w+_w,y1+h-_h,RectangularPrism.paper).attr(shapeStyle);
			DrawLine(x1+w,y1+h,x1+w+_w,y1+h-_h,RectangularPrism.paper).attr(shapeStyle);
			RectangularPrism.set = RectangularPrism.paper.setFinish();
			
			
		};
		RectangularPrism.drawExpansion = function(){
			RectangularPrism.paper.clear();
			var x1,y1,w,h,k,d,W,H;
			x1 = 1;
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
			DrawLine(x1+h,y1+h,x1+h,y1+h+w,RectangularPrism.paper).attr(expandedShapeStyle);
			DrawLine(x1+h+d,y1+h,x1+h+d,y1+h+w,RectangularPrism.paper).attr(expandedShapeStyle);
			DrawLine(x1+2*h+d,y1+h,x1+2*h+d,y1+h+w,RectangularPrism.paper).attr(expandedShapeStyle);
			RectangularPrism.DrawSides(x1,y1,w,h,d,RectangularPrism.paper,r1,true).attr(expandedShapeStyle);
			RectangularPrism.DrawSides(x1,y1,w,h,d,RectangularPrism.paper,r2,false).attr(expandedShapeStyle);
			RectangularPrism.set = RectangularPrism.paper.setFinish();
			ShowPaperSet(RectangularPrism.set,0.7e3);
			
		};
		RectangularPrism.DrawSides = function(x,y,w,h,d,paper,r,isTop){
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

Cube.ShowExpansion = function(shape){

	//clear L and R containers
	var animTime = 0.7e3;
	HidePaperSet(Cube.set,animTime);
	HidePaperSet(RectangularPrism.set,animTime);
	setTimeout(function(){
			Acinim.yonerge.innerHTML = Acinim.yonerge.text2;
			Cube.container.onclick = Acinim.ShowShapes;
			RectangularPrism.paper.clear();
		},animTime);
	setTimeout(Cube.drawExpansion,animTime);
	

};
RectangularPrism.ShowExpansion = function(shape){

	
	//clear L and R containers
	var animTime = 0.7e3;
	HidePaperSet(Cube.set,animTime);
	HidePaperSet(RectangularPrism.set,animTime);
	setTimeout(function(){
			Acinim.yonerge.innerHTML = Acinim.yonerge.text2;
			RectangularPrism.container.onclick = Acinim.ShowShapes;
			Cube.paper.clear();
		},animTime);
	setTimeout(RectangularPrism.drawExpansion,animTime);
	

};
Acinim.ShowShapes = function(){
	//console.log("I'm here");
	var animTime = 0.7e3;
	if(Acinim.firstCall == true){
		Acinim.yonerge.innerHTML = Acinim.yonerge.text1;
		Acinim.firstCall = false;
		Cube.container.onclick = Cube.ShowExpansion;
		RectangularPrism.container.onclick = RectangularPrism.ShowExpansion;
		Cube.drawShape();
		RectangularPrism.drawShape();
		return;
	}
	//console.log('238');
	//console.log(Cube.set.length);
	//console.log(RectangularPrism.set.length);
	HidePaperSet(Cube.set,animTime);
	HidePaperSet(RectangularPrism.set,animTime);
	
	setTimeout(function(){
			Acinim.yonerge.innerHTML = Acinim.yonerge.text1;
			Cube.container.onclick = Cube.ShowExpansion;
			RectangularPrism.container.onclick = RectangularPrism.ShowExpansion;
			Cube.drawShape();
			ShowPaperSet(Cube.set,animTime);
			RectangularPrism.drawShape();
			ShowPaperSet(RectangularPrism.set,animTime);
		},animTime);
	
	
};


$(document).ready(function(){interactionInit(document.getElementById('interaction_container'))});

function DrawLine(x1,y1,x2,y2,paper){
	return paper.path('M'+x1+' '+y1+'L'+x2+' '+y2);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}