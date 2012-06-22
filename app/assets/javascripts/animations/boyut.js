/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var bowlHoverStyle = {'stroke':'#999','fill':'#ff9'};
var bowlDefaultStyle = {'stroke':'#000','fill':'#fff'};
var bowlDroppedTrueStyle = {'stroke':'#0f0','fill':'#afa'};
var bowlDroppedFalseStyle = {'stroke':'#f00','fill':'#faa'};
/*Styles*/

var Interaction =function(){};Interaction();

Interaction.init = function(container){
	Main.setObjective('Aşağıdaki nesneleri kaç boyutlu olduğuna göre sınıflandırmak için fare ile sürükleyerek ilgili sepete atınız.');
	Interaction.paper = new Raphael(container,$(container).width(),$(container).height());
	var w = Interaction.paper.width;
	var h = Interaction.paper.height;
	Interaction.generateBowls(w,h);
	Interaction.nextQuestion();
}

Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}

Interaction.highlight = function(x,y){
	Interaction.droppedBowl = null;
	Interaction.dim0.attr(bowlDefaultStyle);
	Interaction.dim1.attr(bowlDefaultStyle);
	Interaction.dim2.attr(bowlDefaultStyle);
	Interaction.dim3.attr(bowlDefaultStyle);
	var bowl;
	if(Interaction.isInBowl(x,y,Interaction.dim0)){
		bowl = Interaction.dim0.attr(bowlHoverStyle);
	}
	else if(Interaction.isInBowl(x,y,Interaction.dim1)){
		bowl = Interaction.dim1.attr(bowlHoverStyle);
	}
	else if(Interaction.isInBowl(x,y,Interaction.dim2)){
		bowl = Interaction.dim2.attr(bowlHoverStyle);
	}
	else if(Interaction.isInBowl(x,y,Interaction.dim3)){
		bowl = Interaction.dim3.attr(bowlHoverStyle);
	}
	else
		bowl = null;
	Interaction.droppedBowl = bowl;
		
}

Interaction.isInBowl =function(x,y,bowl){
	return bowl.attr('x') < x && 
		bowl.attr('x')+bowl.attr('width') > x &&
		bowl.attr('y') < y &&
		bowl.attr('y')+bowl.attr('height');
}

Interaction.nextQuestion = function(){
	if(Interaction.shape != 'undefined' && Interaction.shape != null)
		Interaction.shape.remove();
	Interaction.preventDrag = false;
	var w = Interaction.paper.width;
	var h = Interaction.paper.height;
	Interaction.generateRandomShape(0.4*w,0.19*h,0.2*w,0.22*h);
	Interaction.shape.attr({
            cursor: "move"
        });
	//Interaction.shapeStoredAttr = Interaction.shape.attr();
	var P={
		move:function(dx,dy){
			if(Interaction.preventDrag)
				return;
			// move will be called with dx and dy
			var nowX = this.ox + dx;
			var nowY = this.oy + dy;
			this.translate(dx - this.odx, dy - this.ody);
			this.odx = dx;
			this.ody = dy;
			//console.log([nowX,nowY,dx,dy,this.odx,this.ody,this.ox,this.oy]);
			Interaction.highlight(nowX,nowY);
		}
	}
	var E={
		move:function(dx,dy){
			if(Interaction.preventDrag)
				return;
			// move will be called with dx and dy
			var nowX = this.ox + dx;
			var nowY = this.oy + dy; 
			this.attr({cx: nowX, cy: nowY });
			Interaction.highlight(nowX,nowY);
		}
	}
	var start = function () {
		if(Interaction.preventDrag)
			return;
        // storing original coordinates
		this.isEllipse = this.data('isEllipse') || false;
		this.isPath = this.data('isPath') || false;
		//console.log(this.data('isEllipse'));
		var x = (this.isEllipse?this.attr('cx'):this.attr('x')),
		y = (this.isEllipse?this.attr('cy'):this.attr('y'));
        this.ox = x;
        this.oy = y;
		this.odx = 0;
 		this.ody = 0;
        this.attr({opacity: 0.5});     
    },
    move = function (dx, dy) {
		if(Interaction.preventDrag)
			return;
        // move will be called with dx and dy
		var nowX = this.ox + dx;
		var nowY = this.oy + dy; 
		this.attr({x: nowX, y: nowY });
		//console.log([nowX,nowY,dx,dy,this.odx,this.ody,this.ox,this.oy]);
		Interaction.highlight(nowX,nowY);
    },
    up = function () {
		if(Interaction.preventDrag)
			return;
        // restoring state
        this.attr({opacity: 1}); 
		if(Interaction.droppedBowl!=null && Interaction.droppedBowl!='undefined' && Interaction.shapeDimension == Interaction.droppedBowl.data('dim')){
			Interaction.preventDrag = true;
			Interaction.shape.animate({opacity:0},500);
			Interaction.droppedBowl.animate(bowlDroppedTrueStyle,500,function(){
					Interaction.droppedBowl.animate(bowlDefaultStyle,500,function(){
						Interaction.nextQuestion();
					});
				});
		}  
		else{
			Interaction.preventDrag = true;
			Interaction.shape.animate({opacity:1},500);
			var callback = function(){
				Interaction.preventDrag = false;
				
				}
			//console.log(Interaction.shapeStoredAttr);
			if(Interaction.droppedBowl!=null && Interaction.droppedBowl!='undefined')
				Interaction.droppedBowl.animate(bowlDroppedFalseStyle,500);
			if(this.isEllipse)
				this.animate({cx: this.ox, cy: this.oy,delay:500 },500,callback);
			else if(this.isPath)
				this.animate({transform:'T'+(-this.odx)+' '+(-this.ody)+' ...',delay:500},500,callback);
			else
				this.animate({x: this.ox, y: this.oy, delay:500 },500,callback);
			
		}        
    };
	if(Interaction.shape.data('isEllipse'))
		Interaction.shape.drag(E.move,start,up);
	else if(Interaction.shape.data('isPath'))
		Interaction.shape.drag(P.move,start,up);
	else
		Interaction.shape.drag(move,start,up);
}

Interaction.generateRandomShape = function(x,y,w,h){
	Interaction.shapeDimension = Math.floor(Math.random()*4);
	///*TEST*/Interaction.shapeDimension = 3; /*TEST*/
	switch(Interaction.shapeDimension ){
		case 0:
			var r = Math.min(w,h);
			Interaction.shape = Interaction.paper.circle(x+w*0.5,y+h*0.5,5).attr({'fill':'#000','stroke':'#000'}).data('isEllipse',true);
			break;
		case 1:
			switch( Math.floor(Math.random()*4) ){
				case 0:
					Interaction.shape = Interaction.paper.rect(x+w*0.2,y+h*0.2,w*0.6,h*0.6).attr(edgeStyle).data('isEllipse',false).data('isPath',false);
					break;
				case 1:
					var a = Math.min(w,h)*0.5;
					Interaction.shape = Interaction.paper.circle(x+w*0.5,y+h*0.5,a).data('isEllipse',true).attr(edgeStyle);
					break;
				case 2:
					var l = Math.min(w,h);
					Interaction.shape = Interaction.paper.line(x+w*0.2,y+h*0.2,x+w*0.8,y+h*0.8).attr(edgeStyle).data('isEllipse',false);
					break;
				case 3:
					Interaction.shape = Interaction.paper.sline(x+w*0.1,y+h*0.5,w*0.8).attr(edgeStyle).data('isEllipse',false).data('isPath',true);
					break;
			}
			break;
		case 2:
			switch(Math.floor(Math.random()*4)){
				case 0:
					Interaction.shape = Interaction.paper.rect(x+w*0.2,y+h*0.2,w*0.6,h*0.6).attr(edgeStyle).data('isEllipse',false).data('isPath',false).attr('fill','#999');
					break;
				case 1:
					var a = Math.min(w,h)*0.5;
					Interaction.shape = Interaction.paper.circle(x+w*0.5,y+h*0.5,a).attr({'fill':'#fff','stroke':'#000'}).data('isEllipse',true).attr(edgeStyle).attr('fill','#999');
					break;
				case 2:
					Interaction.shape = Interaction.paper.rhomboid(x+w*0.2,y+h*0.2,w*0.2,w*0.6,y*0.6).attr(edgeStyle).data({'isEllipse':false,'isPath':true}).attr('fill','#999');
					break;
				case 3:
					Interaction.shape = Interaction.paper.triangle(x+w*0.2,y+h*0.8,x+w*0.8,y+h*0.8,x+w*0.5,y+h*0.2).attr(edgeStyle).data({'isEllipse':false,'isPath':true}).attr('fill','#999');
					break;
			}
			break;
		case 3://
			switch(Math.floor(Math.random()*3)){
				case 0:
					var a = Math.min(w,h)*0.6;
					Interaction.shape = Interaction.paper.cube(x+w*0.5-a*0.5,y+h*0.5-a*0.5,a).attr(edgeStyle).data('isEllipse',false).data('isPath',true).attr('fill','#FFF');
					break;
				case 1:
					var a = Math.min(w,h);
					Interaction.shape = Interaction.paper.sphere(x+w*0.5,y+h*0.5,a*0.6,'#aaa').attr(edgeStyle).data('isEllipse',false).data('isPath',true);
					break;
				case 2:
					Interaction.shape = Interaction.paper.cylinder(x+w*0.2,y+h*0.2,w*0.6,h*0.6).attr(edgeStyle).data('isEllipse',false).data('isPath',true);
					break;
					
			}
			break;
	}
}

Interaction.generateBowls = function(w,h){
	Interaction.dim0 = Interaction.paper.bowl(0+0.025*w,0.6*h+0.04*h,0.20*w,0.22*h).attr(edgeStyle);
	Interaction.dim1 = Interaction.paper.bowl(0.25*w+0.025*w,0.6*h+0.04*h,0.20*w,0.22*h).attr(edgeStyle);
	Interaction.dim2 = Interaction.paper.bowl(0.50*w+0.025*w,0.6*h+0.04*h,0.20*w,0.22*h).attr(edgeStyle);
	Interaction.dim3 = Interaction.paper.bowl(0.75*w+0.025*w,0.6*h+0.04*h,0.20*w,0.22*h).attr(edgeStyle);
	//console.log(Interaction.dim0.data('cx'))
	Interaction.paper.text(Interaction.dim0.attr('x')+Interaction.dim0.attr('width')*0.5,Interaction.dim0.attr('y')+Interaction.dim0.attr('height')*0.5,'Boyutu\nyok').attr(textStyle);
	Interaction.paper.text(Interaction.dim1.attr('x')+Interaction.dim1.attr('width')*0.5,Interaction.dim1.attr('y')+Interaction.dim1.attr('height')*0.5,'1\nBoyultu').attr(textStyle);
	Interaction.paper.text(Interaction.dim2.attr('x')+Interaction.dim2.attr('width')*0.5,Interaction.dim2.attr('y')+Interaction.dim2.attr('height')*0.5,'2\nBoyutlu').attr(textStyle);
	Interaction.paper.text(Interaction.dim3.attr('x')+Interaction.dim3.attr('width')*0.5,Interaction.dim3.attr('y')+Interaction.dim3.attr('height')*0.5,'3\nBoyutlu').attr(textStyle);
	Interaction.dim0.data('dim',0);	
	Interaction.dim1.data('dim',1);
	Interaction.dim2.data('dim',2);
	Interaction.dim3.data('dim',3);
}