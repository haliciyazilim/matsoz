// JavaScript Document
var Acinim = function(){};
function animationInit(){}
function interactionInit(container){
	
	Acinim();
	
	Acinim.container = container;
	Acinim.yonerge = document.createElement('div');
	Acinim.yonerge.text1 = 'Aşağıdaki geometrik cisimlerden açınımını elde etmek istediğinizin üzerine fare ile tıklayın.';
	Acinim.yonerge.text2 = 'Aşağıdaki açınımın hangi geometrik cisim olduğunu görmek için açınımının üzerine fare ile tıklayın.';
	Acinim.yonerge.innerHTML = Acinim.yonerge.text1;
	$(Acinim.yonerge).css({
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
		});
	Acinim.yonerge.style.boxSizing
	Acinim.container.appendChild(Acinim.yonerge);
	//console.log('Im here');
	
	Acinim.shapes = document.createElement('div');
	$(Acinim.shapes).css({
			height:'200px'
			
		});
	Acinim.shapes.id = 'acinim_shapes';
	Acinim.shapes.innerHTML = '<div id="acinim_shapes_L"></div><div id="acinim_shapes_R"></div>';
	Acinim.container.appendChild(Acinim.shapes);
	$(Acinim.container).append('<style>div#acinim_shapes > div{float:left;width:50%;cursor:pointer;height:100%;}</style>');
	Acinim.ShowShapes();
	
	var Shapes = new Array();
	Shapes.push(new Cube(document.getElementById('acinim_shapes_L'),200,200));
	Shapes.push(new RectangularPrism(document.getElementById('acinim_shapes_R'),200,200));
	Acinim.ShapeList = Shapes;
	
	Acinim.ShowShapes();
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

function Cube (container,width,height){
	
		this.container = container;
		this.width = width;
		this.height = height;
		this.scale = 0.40;
		
		this.drawShape = function(){
			var paper = new Raphael(this.container,this.width,this.height);
			//console.log('Im here');
			var x1,y1,w,h,k;
			x1 = this.width * this.scale;
			y1 = this.height * this.scale;
			w  = this.width * (1-2*this.scale);
			h  = this.height * (1-2*this.scale);
			k  = 0.37;
			
			//draw rect
			paper.rect(x1,y1,w,h);
			DrawLine(x1,y1,x1+k*w,y1-k*h,paper);
			DrawLine(x1+k*w,y1-k*h,x1+w+k*w,y1-k*h,paper);
			DrawLine(x1+w,y1,x1+w+k*w,y1-k*h,paper);
			DrawLine(x1+w+k*w,y1-k*h,x1+w+k*w,y1+h-k*h,paper);
			DrawLine(x1+w,y1+h,x1+w+k*w,y1+h-k*h,paper);
		};
		$('').css()
		this.drawExpansion = function(){
			var paper = new Raphael(this.container,this.width,this.height);
			var r1 = Math.floor(Math.random()*4);
			var r2 = Math.floor(Math.random()*4);
			var x1,y1,a;
			x1 = 10;
			y1 = this.height * this.scale;
			a  = this.width * (1-2*this.scale);
			y1 -= a;
			
			paper.rect(x1,y1+a,4*a,a);
			DrawLine(x1+a,y1+a,x1+a,y1+2*a,paper);
			DrawLine(x1+2*a,y1+a,x1+2*a,y1+2*a,paper);
			DrawLine(x1+3*a,y1+a,x1+3*a,y1+2*a,paper);
			paper.rect(x1+r1*a,y1,a,a);
			paper.rect(x1+r2*a,y1+2*a,a,a);
		};
		
		return this;
	};
function RectangularPrism(container,width,height){
		this.container = container;
		this.width = width;
		this.height = height;
		this.scale = 0.37;
		this.a_h = 20;
		this.a_w = 25;
		this.drawShape = function(){
			var paper = new Raphael(this.container,this.width,this.height);
			var x1,y1,w,h,k,d;
			x1 = this.width * this.scale;
			y1 = this.height * this.scale;
			w  = this.width * (1-2*this.scale);
			h  = this.height * (1-2*this.scale);
			h  = w*0.6;
			d  = Math.floor(Math.sqrt(w * h))*1.2;
			//console.log('d: '+d);
			k  = 0.4;
			_w = Math.floor(Math.sin(toRadians(this.a_w))*d);
			_h = Math.floor(Math.sin(toRadians(this.a_h))*d);
			
			paper.rect(x1,y1,w,h);
			DrawLine(x1,y1,x1+_w,y1-_h,paper);
			DrawLine(x1+_w,y1-_h,x1+w+_w,y1-_h,paper);
			DrawLine(x1+w,y1,x1+w+_w,y1-_h,paper);
			DrawLine(x1+w+_w,y1-_h,x1+w+_w,y1+h-_h,paper);
			DrawLine(x1+w,y1+h,x1+w+_w,y1+h-_h,paper);
			
		};
		this.drawExpansion = function(){
			var paper = new Raphael(this.container,this.width,this.height);
			var x1,y1,w,h,k,d,W,H;
			x1 = 1;
			y1 = this.height * this.scale;
			w  = this.width * (1-2*this.scale);
			h  = this.height * (1-2*this.scale);
			h  = w*0.6;
			y1-= h;
			d  = Math.floor(Math.sqrt(w * h))*1.2;
			W  = 2 * (h + d);
			H  = 2 * h + w;
			var r1 = Math.floor(Math.random()*2);
			var r2 = Math.floor(Math.random()*2);
			
			paper.rect(x1,y1+h,W,w);
			DrawLine(x1+h,y1+h,x1+h,y1+h+w,paper);
			DrawLine(x1+h+d,y1+h,x1+h+d,y1+h+w,paper);
			DrawLine(x1+2*h+d,y1+h,x1+2*h+d,y1+h+w,paper);
			
			this.DrawSides(x1,y1,w,h,d,paper,r1,true);
			this.DrawSides(x1,y1,w,h,d,paper,r2,false);
			
			
		};
		this.DrawSides = function(x,y,w,h,d,paper,r,isTop){
				switch(r){
					case 0:
						paper.rect(x+h,y+(isTop?h+w:0),d,h);
						break;
					case 1:
						paper.rect(x+2*h+d,y+(isTop?h+w:0),d,h);
						break;
				}
			}
		return this;
	};

Acinim.ShowExpansion = function(shape){
	Acinim.yonerge.innerHTML = Acinim.yonerge.text2;
	//clear L and R containers
	$('#acinim_shapes > div').each(function(index, element) {
		this.innerHTML = '';
		this.onclick = Acinim.ShowShapes;
	});
	//call shape.drawExpansion
	shape.drawExpansion();

};
Acinim.ShowShapes = function(){
	Acinim.yonerge.innerHTML = Acinim.yonerge.text1;
	//clear L and R containers
	$('#acinim_shapes > div').each(function(index, element) {
		this.innerHTML = '';
		this.onclick = function(){Acinim.ShowExpansion(Acinim.ShapeList[index])};
	});
	//call drawShape for all elements in the Acinim.ShapeList
	$(Acinim.ShapeList).each(function(index, element) {
		this.drawShape();
	});
	
};


$(document).ready(function(){interactionInit(document.getElementById('interaction_container'))});

function DrawLine(x1,y1,x2,y2,paper){
	return paper.path('M'+x1+' '+y1+'L'+x2+' '+y2);
}
function toRadians (angle) {
  return angle * (Math.PI / 180);
}