/*Styles*/
var solutionCSS = {
    position:'absolute',
    bottom:'10px',
    right:'137px',
    color:'green',
    fontSize:'16px',
    fontWeight:'bold'
};
var triangleStyle = {
	'fill': '#f55',
	'stroke-width':'2px'
};
var textStyle = {
	fontSize : 14,
	strokeColor : "#000",
	fillColor : "#000"
};
var edgeStyle = {
	strokeWidth : 2,
	strokeColor:'#255b63',
	fillColor:'#fff'
};
var angleStyle = {
	'stroke-width': '2px'
}; 
var rulerStyle = {
	strokeColor:'#000',
	strokeWidth: 2,
	fillColor : '#EED'
};
var rulerTextStyle = {};

var rulerLineStyle = {
	strokeWidth: 2,
	strokeColor:'#000'
};
var animationEdgeStyle = {
	strokeWidth: 2,
	strokeColor:'#000'
}
/*Styles*/

var Animation = {
	init:function(container){
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var x = w *0.5;
		var y = h*0.5;
		var R = 75;
		var p1 = new Point(x+100,y);
		var p2 = new Point(x+100+R,y);
		var p3 = new Point(x+100,y+R);
		var pT1 = new Point(x+150+R,y-15);
		var pT2 = new Point(x+150+R,y+15)
		var circleCenter = new Path.Circle(p1,4);
		circleCenter.set_style({
			fillColor:'#000'
		});
		var circleCenterText = new PointText(
			new Point(
				p1.x-15,
				p1.y+15
			)
		);
		circleCenterText.content = 'O';
		circleCenterText.set_style({
			strokeColor:'#000',
			fillColor:'#000'
		});
		
		var radiusText = new PointText(
			new Point(
				(p1.x+p2.x)*0.5,
				(p1.y+p2.y)*0.5+10
			)
		);
		radiusText.firstPosition = radiusText.position;
		radiusText.content = 'r';
		radiusText.opacity = 0;
		animationHelper = new AnimationHelper({
			angle:0,
			radiusOpacity:0
		});
		
		Animation.onFrame = function(event){
			
			if(animationHelper.angle > 0 && animationHelper.angle < 360){
				if(Animation.line1)
					Animation.line1.remove();
				Animation.line1 = new Path.Line(p1,p2.getRotatedPoint(-animationHelper.angle,p1));
				Animation.line1.set_style(animationEdgeStyle);
				radiusText.position = radiusText.firstPosition.getRotatedPoint(-animationHelper.angle,p1)
				
				if( animationHelper.radiusOpacity > 0)
					radiusText.opacity = 1;
				if(Animation.arc)
					Animation.arc.remove();
				 
				Animation.arc = new Path.ArcByAngle(p1,R,-animationHelper.angle);
				Animation.arc.set_style(animationEdgeStyle);
			}
			else if(animationHelper.angle == 360){
				if(Animation.line1)
					Animation.line1.remove();
				Animation.line1 = new Path.Line(p1,p2);
				Animation.line1.set_style(animationEdgeStyle);
				radiusText.animate({
					style:{opacity:0},
					duration:500
				});
				if(Animation.arc)
					Animation.arc.remove();
				Animation.arc = new Path.Circle(p1,R);
				Animation.arc.set_style(animationEdgeStyle);
				
			}
			else if(animationHelper.angle > 361 && animationHelper.angle < 720){
				if(Animation.line1){
					Animation.line1.remove();
					circleCenterText.remove();
					circleCenter.remove();
				}
				
				var x = R*2*Math.PI*(animationHelper.angle%360)/360;
				var _p1 = new Point(p1.x - x,p1.y);
				var _p = new Point(p3.x -x,p3.y);
				//console.log(_p1)
				if(animationHelper.angle < 710){
					Animation.arc.remove();
					Animation.arc = new Path.ArcByAngle(_p1,R,-270-animationHelper.angle,-270);
					Animation.arc.set_style(animationEdgeStyle);
				}
				if(Animation.line2)
					Animation.line2.remove();
				Animation.line2 = new Path.Line(p3,_p);
				Animation.line2.set_style(animationEdgeStyle);
			}
			else if (animationHelper.angle == 720){
				Animation.arc.remove();
			}
			else if(animationHelper.angle > 730 && animationHelper.angle < 1080){
				
				var angle = 1080-animationHelper.angle;
				var x = R*2*Math.PI*(angle)/360;
				var _p1 = new Point(p1.x - x,p1.y);
				var _p = new Point(p3.x -x,p3.y);
				if(animationHelper.angle < 1079){
					Animation.arc.remove();
					Animation.arc = new Path.ArcByAngle(_p1,R,-270-angle-360,-270);
					Animation.arc.set_style(animationEdgeStyle);
				}
				if(Animation.line2)
					Animation.line2.remove();
				Animation.line2 = new Path.Line(p3,_p);
				Animation.line2.set_style(animationEdgeStyle);
			}
			else if(animationHelper.angle == 1080){
				Animation.line2.remove();
				circleCenter = new Path.Circle(p1,4);
				circleCenter.set_style({
					fillColor:'#000'
				});
				Animation.arc.remove();
				Animation.arc = new Path.Circle( p1,R);
				Animation.arc.set_style(animationEdgeStyle);
				
				circleCenterText = new PointText(
					new Point(
						p1.x-15,
						p1.y+15
					)
				);
				circleCenterText.content = 'O';
				circleCenterText.set_style({
					strokeColor:'#000',
					fillColor:'#000'
				});
				radiusText.opacity = 1;
				Animation.line1 = new Path.Line(p1,p2);
				Animation.line1.set_style(animationEdgeStyle);
				
				var div = document.createElement('div')
				$(Animation.container).append(div);
				$(div)
					.html('O : Merkez<br/>r : yarıçap<br/>2 x r = R : çap<br/>')
					.css({
						position:'absolute',
						top:'50%',
						left:'50%',
						marginLeft:'-150px',
						marginTop:'-50px',
						lineHeight:'33px',
						opacity:0
					})
					.animate(
						{opacity:1},
						1000
					)
				animationHelper.angle = 1081;
			}
			else if(animationHelper.angle == 1081){
				Animation.onFrame = null;
				console.log("I'm here")
				var t1 = new PointText(pT1)
				t1.content = 'Çevre = Çap × π';
				var t2 = new PointText(pT2)
				t2.content = ' Ç = 2 × r × π';
				t1.opacity = 0;
				t2.opacity = 0;
				t1.animate({
					style:{opacity:1},
					duration:500
				});
				t2.animate({
					style:{opacity:1},
					delay:500,
					duration:500,
                    callback:Main.animationFinished
				});
			}
		}
		animationHelper.animate({
			style:{angle:360,radiusOpacity:1},
			duration:2000,
			delay:500,
			animationType:'easeInEaseOut'
		});
		animationHelper.animate({
			style:{angle:720},
			duration:2000,
			delay:3500,
			animationType:'easeInEaseOut'
		});
		animationHelper.animate({
			style:{angle:1080},
			duration:2000,
			delay:6500,
			animationType:'easeInEaseOut'
		});
	}
};

var Interaction = {};
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.images = [
	{
		id: "ruler",
		src: '/assets/animations/ruler.png'
	}
];
Interaction.init = function(container){
	Main.setObjective('Yandaki çemberin yarıçapını cetvel yardımıyla ölçünüz ve çevresini hesaplayınız. Bulduğunuz sonucu aşağıdaki kutucuğa yazınız ve “Kontrol” düğmesine basınız. <span style="font-weight:bold;">(π = 3 alınız.)</span>');
	Interaction.container = container;
	$(Interaction.container).append('<div id="B"></div>');

	Interaction.paper = {width:$(container).width(),height:$(container).height()};

	Interaction.appendInput({
        position:'static'
    });
    Interaction.appendButton({
        top:'200px',
        right:'80px'
    });
    Interaction.appendStatus({
        top:'250px',
        right:'80px'
    });
    $('div#B',Interaction.container).css({
        position:'absolute',
        right:'80px',
        top:'150px'
    })
    $('div#B',Interaction.container)
        .append('Çevre&nbsp;=&nbsp;')
        .append(Interaction.input)
        .append('&nbsp;br');

    Interaction.drawRuler();
	Interaction.prepareNextQuestion();
}

Interaction.generateCircle = function(){
	var x,y,r;
	x = Interaction.paper.width*0.3;
	y = Interaction.paper.height*0.5;
    if(Interaction.radiusArray == undefined){
        Interaction.radiusArray = Util.getShuffledArray(11,2);
        Interaction.radiusArrayIndex = 0;
    }

    r = Interaction.radiusArray[Interaction.radiusArrayIndex] * Interaction.br ;
    Interaction.radiusArrayIndex = ++Interaction.radiusArrayIndex % Interaction.radiusArray.length;

	Interaction.circleSet = new Group();
	var point = new Path.Circle(new Point(x,y),1);
	point.style = edgeStyle;
	var circle = new Path.Circle(new Point(x,y),r-1);
	circle.style = edgeStyle;
	var line = new Path.Line(new Point(x,y), new Point(x+r,y));
	line.style = edgeStyle;
	var text1 = new PointText(new Point(x-15,y+15));
	text1.content = "O";
	text1.style = textStyle;
	var text2 = new PointText(new Point(x+r*0.5-5,y+15));
	text2.content = "r";
	text2.style = textStyle;
	Interaction.circleSet.addChild(circle);
	Interaction.circleSet.addChild(point);
	Interaction.circleSet.addChild(line);
	Interaction.circleSet.addChild(text1);
	Interaction.circleSet.addChild(text2);
	Interaction.circleSet.insertBelow(Interaction.rulerSet);
	Interaction.r = r;
	Interaction.input.onkeyup = function(e){
		//console.log(e.keyCode)
		if(e.keyCode == 13)
			Interaction.checkAnswer();		
	}
	
}



Interaction.nextQuestion = function(){
    if(Interaction.isPaused())
        return;
	if(Interaction.circleSet)
		Interaction.circleSet.remove();
    $(Interaction.solution).remove();
	Interaction.preventDrag = false;
	
	Interaction.generateCircle();

	var callback = function(){
		Interaction.preventDrag = false;
	};
	if(Interaction.rulerSet.firstPosition)
		Interaction.rulerSet.animate({
			style:{
				position:Interaction.rulerSet.firstPosition
			},
			duration:300,
			callback:callback
		});
	Interaction.odx=0;
	Interaction.ody=0;
}
Interaction.isAnswerCorrect = function(value){
    var answer = Interaction.input.value;
	var rightAnswer = 2 * Interaction.r * 3 / Interaction.br;
    return answer == rightAnswer;
}

Interaction.onWrongAnswer = function(){

}

Interaction.onCorrectAnswer = function(){

}

Interaction.onFail = function(){
    var rightAnswer = 2 * Interaction.r * 3 / Interaction.br;
    Interaction.setStatus('Yanlış, doğru cevap: '+rightAnswer,false);
}

Interaction.showSolution = function(){
    Interaction.pause();
    var solution = Util.dom({
        tag:'div',
        parent:Interaction.container,
        css:solutionCSS,
        html:'<span id="0"></span><span id="1">&nbsp;x&nbsp;</span><span id="2"></span><span id="3">&nbsp;=&nbsp;</span><span id="4"></span>'
    });//2 * Interaction.r * 3 / Interaction.br
    Interaction.solution = solution;
    $(solution).html();
    $("#0",solution).html(Interaction.r / Interaction.br);
    $("#2",solution).html('3 x 2');
    $("#4",solution).html(2 * Interaction.r * 3 / Interaction.br);
    for(var i=0;i<5;i++)
        $("#"+i,solution).css({opacity:0}).delay(1000*i).animate({opacity:1},1000,(i==4?Interaction.resume:undefined));
}

Interaction.drawRuler = function(){
	var x,y,w,h,b,st;
	x = Interaction.paper.width*0.7;
	y = Interaction.paper.height*0.2;
	h = Interaction.paper.height*0.2;
	w = Interaction.paper.width*0.2;
	Interaction.rulerSet = new Raster('ruler');
	Interaction.rulerSet.name = 'rulerSet';
	Interaction.rulerSet.position = new Point(Math.floor(x),Math.floor(y)+0.5);
	//console.log([x,y])
	//return;
	Interaction.br = 12
	Interaction.rulerX=-1;Interaction.rulerY=-1;
	var move = function (dx,dy) {
		if(Interaction.preventDrag === true)
			return;
		if(this._x + dx+Interaction.odx <= 0 || this._xw + dx +Interaction.odx >= Interaction.paper.width)
			dx=0;
		if(this._y + dy +Interaction.ody<= 0 || this._yh + dy +Interaction.ody >= Interaction.paper.height)
			dy=0;
		Interaction.rulerSet.position = [Interaction.rulerSet.position.x + dx, Interaction.rulerSet.position.y+ dy];
	},
    up = function () {
		if(Interaction.preventDrag === true)
			return;
		Interaction.odx = this.odx;
		Interaction.ody = this.ody;
		
    };
	var drag = new Tool();
	drag.onMouseDown = function(event){
		this.drag = false;
		if(Interaction.rulerSet.bounds.contains(event.point)){
			this.drag = true;
		}
	}
	drag.onMouseDrag = function(event){
		if(this.drag==true){
			Interaction.rulerSet.move(event.delta.x,event.delta.y);
		}
	}
	drag.onMouseUp  = function(){
		this.drag = false;
	}
	drag.activate();
	Interaction.rulerSet.move = move;
	Interaction.rulerSet.up = up;
	Interaction.rulerSet.firstPosition = Interaction.rulerSet.position;

}
