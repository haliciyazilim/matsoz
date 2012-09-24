/*Styles starts*/
var circleStyle = {
	strokeColor:'#255b63',
	strokeWidth:2
};
var rulerStyle = {
	
}
var circularAreaStyle = {
	strokeColor:'#000',
	strokeWidth:2,
	fillColor:'#ffa'
}
/*Styles ends*/

var Animation = {
	init:function(container){
		function htmlPlaceAndAnimate(text,x,y,delay,callback){
			var div = document.createElement('div');
			$(Animation.container).append(div);
			$(div)
				.html(text)
				.css({
					position:'absolute',
					top:y,
					left:x,
					opacity:0
				})
				.delay(delay)
				.animate(
					{opacity:1},
					1000
				);
			if(callback)
				callback(div);
			return div;
		}
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var x = w *0.5;
		var y = h*0.5;
		var R = 75;
		var shapes = [];
		var circleCenter = new Point(x-100,y);
		var circle = new Path.Circle(circleCenter,R);
		circle.set_style(circularAreaStyle);
		circle.fillColor = new RgbColor(1,1,0.8,0);
		circle.opacity = 0;
		var animHelper = new AnimationHelper({
			angle:0,
			circleCenter:circleCenter,
			R:R
		});
		animHelper.animate({
			style:{angle:359},
			duration:1000,
			update:function(){
				if(Animation.arcByAngle)
					Animation.arcByAngle.remove();
				if(this.angle == 359)
					return;
				Animation.arcByAngle = new Path.ArcByAngle(this.circleCenter,this.R,this.angle,0);
				Animation.arcByAngle.strokeColor = circularAreaStyle.strokeColor;
				Animation.arcByAngle.strokeWidth = circularAreaStyle.strokeWidth;
				
				//console.log(Animation.arcByAngle);
//				console.log(this.circleCenter.toString());
			}
		})
		var text = new PointText(
			new Point(
				circleCenter.x-10,
				circleCenter.y+20
			)
		)
		text.content = 'O';
		var circlePoint = new Path.Circle(circleCenter,3);
		circlePoint.set_style({fillColor:'#000'});
		var radius = new Path.Line(
			circleCenter,
			new Point(
				circleCenter.x + R*Math.cos(Util.degreeToRadian(-15)),
				circleCenter.y + R*Math.sin(Util.degreeToRadian(-15))
			)
		);
		radius.set_style(circularAreaStyle);
		var radius2 = new Path.Line(
			circleCenter,
			new Point(
				circleCenter.x + R*Math.cos(Util.degreeToRadian(-195)),
				circleCenter.y + R*Math.sin(Util.degreeToRadian(-195))
			)
		)
		radius2.set_style(circularAreaStyle);
		var rText = new PointText(new Point(
				circleCenter.x + R*Math.cos(Util.degreeToRadian(-15))*0.5,
				circleCenter.y + R*Math.sin(Util.degreeToRadian(-15))*0.5+15
		));
		rText.content = "r";
		shapes.push(radius2);
		shapes.push(rText);
		shapes.push(circle);
		shapes.push(text);
		shapes.push(radius);
		shapes.push(circlePoint);
		$(shapes).each(function(){
			this.opacity = 0;
		});
		circle.animate({
			style:{opacity:1},
			duration:1,
			delay:900
		});
		circle.animate({
			style:{fillColor:new RgbColor(1,1,0.8,1)},
			duration:1000,
			delay:1000
		})
		circlePoint.animate({
			style:{opacity:1},
			duration:1000
		});
		text.animate({
			style:{opacity:1},
			duration:1000
		});
		radius.animate({
			style:{opacity:1},
			duration:1000,
			delay:1100
		});
		rText.animate({
			style:{opacity:1},
			duration:1000,
			delay:1100,
			callback:function(){
				this.animate({
					style:{opacity:0},
					duration:1000,
					delay:1000
				})
			}
		});
		radius2.animate({
			style:{opacity:1},
			duration:1000,
			delay:2200
		});
		
		htmlPlaceAndAnimate(
			'π = ',
			x+50,
			y,
			3000
		);
		htmlPlaceAndAnimate(
			'',
			458,
			90,
			3000,
            function(div){
                $(div).css({
                    position:'absolute',
                    top:'90px',
                    borderBottom:'1px solid #000',
                    height:'1px',
                    width:'170px'
                })
            }
		);
		htmlPlaceAndAnimate(
			'dairenin çevre uzunluğu',
			x+85,
			y-10,
			5500,
			function(div){
				$(div).animate({color:'#f00'},400).delay(500).animate({color:'#000'},400)
			}
		);
		
		circle.animate({
			style:{strokeWidth:4,strokeColor: new RgbColor(1,0,0)},
			duration:400,
			delay:6500
		});
		circle.animate({
			style:{strokeWidth:2,strokeColor: new RgbColor(0,0,0)},
			duration:400,
			delay:7500
		});
		
		htmlPlaceAndAnimate(
			'çap',
			x+145,
			y+10,
			8000,
			function(div){
				$(div).animate({color:'#f00'},1000).animate({color:'#000'},1000)
			}
		);
		radius.animate({
			style:{strokeWidth:4,strokeColor: new RgbColor(1,0,0)},
			duration:400,
			delay:9000
		});
		radius.animate({
			style:{strokeWidth:2,strokeColor: new RgbColor(0,0,0)},
			duration:400,
			delay:10000
		});
		radius2.animate({
			style:{strokeWidth:4,strokeColor: new RgbColor(1,0,0)},
			duration:400,
			delay:9000
		});
		radius2.animate({
			style:{strokeWidth:2,strokeColor: new RgbColor(0,0,0)},
			duration:400,
			delay:10000
		});
		
		htmlPlaceAndAnimate(
			' = ',
			x+255,
			y,
			11000
		);
		htmlPlaceAndAnimate(
			'3,14',
			x+270,
			y,
			12000            
		);
        Main.animationFinished(15000);
	}
};
var Interaction = {
	images:[
		{
			id:'ruler',
			src:'/assets/animations/pi/ruler_4cm.png'
		}
	],
	getFramework : function() {
		return 'paper';
	},
	init: function(container){
        Interaction.container = container;
		Main.setObjective('Yandaki cetveli sürükleyip kullanarak verilen çemberin çapını ölçünüz. “Aç” düğmesine basıp oluşan çemberin uzunluğunu ölçünüz. Bu iki uzunluktan hareketle π (pi) sayısını yaklaşık olarak bulup kutuya yazınız ve kontrol ediniz.');
		Interaction.paper = {
			width:$(container).width(),
			height:$(container).height()
		};
		var ac = document.createElement('input');
		ac.setAttribute('type','button');
		$(container).append(ac);
		$(ac)
			.attr({
				class:'control_button',
				value:'',
				onClick:'Interaction.drawLine()'
			})
			.css({
				backgroundImage:'url(/assets/btn_gray_expand_text.png)',
				position:'absolute',
				top:'200px',
				left:'30px',
				width:'57px',
				height:'32px'
			});

        Interaction.appendInput({
            top:'200px',
            right:'130px',
            width:'4.5ex'
        }).maxLength = 4;
        Interaction.appendInput({
            top:'175px',
            right:'225px'
        });
        Interaction.appendInput({
            top:'225px',
            right:'225px',
            zIndex:9
        })

		Interaction.appendButton({
            bottom:'10px',
            right:'50px'
        })

        Interaction.appendStatus({
            bottom:'20px',
            right:'160px',
            width:'400px',
            textAlign:'right'
        })
		Interaction.span = document.createElement('div');
		$(container).append(Interaction.span);
		$(Interaction.span)
			.css({
				position:'absolute',
				top:'210px',
				right:'180px',
				width:'280px',
				height:'20px',
				textAlign:'right',
				fontWeight:'bold',
				fontSize:'16px'
			})
			.html('π’nin yaklaşık değeri = <span style="border-bottom: 1px solid #000;position: relative;top: -10px;">&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;</span> = ');
        Util.dom({
            tag:'span',
            parent:container,
            html:'br',
            css:{
                position:'absolute',
                top:parseInt($(Interaction.inputs[1]).css('top'),10)+12,
                right:parseInt($(Interaction.inputs[1]).css('right'),10)-20
            }
        });
        Util.dom({
            tag:'span',
            parent:container,
            html:'br',
            css:{
                position:'absolute',
                top:parseInt($(Interaction.inputs[2]).css('top'),10)+12,
                right:parseInt($(Interaction.inputs[2]).css('right'),10)-20
            }
        })
		Interaction.pause = false;
		Interaction.drawRuler(10,10);
		Interaction.prepareNextQuestion();
	},
	nextQuestion:function(){
        if(Interaction.circleRadius == undefined)
            Interaction.circleRadius = 60;
		else{
            var circle;
            do 
                circle = Math.floor(Math.random()*5+5)*6;
                while(circle == Interaction.circleRadius)
            Interaction.circleRadius = circle;
        }
            
        Interaction.circlePosition = new Point(75,75);
        Interaction.lineStartPoint = new Point(150,75+Interaction.circleRadius);
		if(Interaction.circle)
			Interaction.circle.remove();
		if(Interaction.drawLine.arc)
			Interaction.drawLine.arc.remove();
		if(Interaction.drawLine.line)
			Interaction.drawLine.line.remove();
		Interaction.trial = 0;
        Interaction.isLineDrawed = false;
		Interaction.drawCircle();
		Interaction.ruler.animate({
			style:{position:Interaction.ruler.firstPosition},
			duration:500
		});
		
	},
	drawRuler:function(x,y){
		Interaction.ruler = new Raster('ruler');
		Interaction.ruler.set_style(rulerStyle)
		var firstPosition = new Point(
			x+Interaction.ruler.bounds.width+0.5,
			y+Interaction.ruler.bounds.height*0.5
		);
		Interaction.ruler.position = firstPosition;
		Interaction.ruler.firstPosition = firstPosition;
		Interaction.ruler.guide = true;
		Interaction.ruler.class = 'ruler';
		var tool = new Tool();
		tool.onMouseDown = function(event){
			if(Interaction.ruler.bounds.contains(event.point)){
				this.drag = true;
				this.totalDelta = new Point(0,0);
				this.firstPosition = Interaction.ruler.position;
			}
		}
		tool.onMouseDrag = function(event){
            if(!this.drag)
                return;
			var newPoint = this.firstPosition.add(this.totalDelta).add(event.delta);
            //change byu the circles radius;
			if(Interaction.isLineDrawed && newPoint.x < 400 && 
                newPoint.x > 350 && 
                newPoint.y > Interaction.lineStartPoint.y+Interaction.ruler.bounds.height*0.5-20 && 
                newPoint.y < Interaction.lineStartPoint.y+Interaction.ruler.bounds.height*0.5+20){
				Interaction.ruler.position = Interaction.lineStartPoint
                    .add(
                    Interaction.ruler.bounds.width*0.5-10,
                    Interaction.ruler.bounds.height*0.5+1
                    );
			}else{
				Interaction.ruler.position = newPoint;
			}
				this.totalDelta = this.totalDelta.add(event.delta);
		}
		tool.onMouseUp = function(){
			this.drag = false;
		}
		tool.activate();
	},
	drawCircle:function(){
		Interaction.circle = new Group();
		var circle = new Path.Circle(
			Interaction.circlePosition,
			Interaction.circleRadius
		);
		
		circle.set_style(circleStyle);
		var point = new Path.Circle(Interaction.circlePosition,2);
		point.set_style({
			fillColor:circleStyle.strokeColor
		});
		
		
		Interaction.ruler.insertAbove(circle);
		Interaction.ruler.insertAbove(point);
		
		Interaction.circle.addChild(circle);
		Interaction.circle.addChild(point);
	},
	drawLine: function(){
		if(Interaction.pause === true)
			return;
		Interaction.isLineDrawed = true;
		var drawLineHelper = new AnimationHelper({
			position:new Point(
				Interaction.circlePosition.x,
				Interaction.circlePosition.y
			),
			angle:0
		});
		Interaction.onFrame = function(){
			if(Interaction.drawLine.arc)
				Interaction.drawLine.arc.remove();
			Interaction.pause = true;
			if(drawLineHelper.angle == 0){
				Interaction.drawLine.arc = new Path.Circle(
					drawLineHelper.position,
					Interaction.circleRadius
				);
				Interaction.drawLine.arc.set_style(circleStyle);
				Interaction.drawLine.arc.opacity = 0.5;
			}
			else if(drawLineHelper.angle > 0 && drawLineHelper.angle <= 360){				
				var x = Interaction.circleRadius*2*Math.PI;
				if(drawLineHelper.angle == 360){ 
					x *= 1;
					drawLineHelper.angle = 361;
				}
				else
					x *= (drawLineHelper.angle%360)/360;
				
				
				if(drawLineHelper.angle < 360){
					Interaction.drawLine.arc = new Path.ArcByAngle(
						Interaction.lineStartPoint.add(x,-Interaction.circleRadius),
						Interaction.circleRadius,
						-270+drawLineHelper.angle+360,
						-270
					);
					Interaction.drawLine.arc.set_style(circleStyle);
					Interaction.drawLine.arc.opacity = 0.5;
                    //Interaction.ruler.insertAbove(Interaction.drawLine.arc);
				}
				if(Interaction.drawLine.line)
					Interaction.drawLine.line.remove();
				Interaction.drawLine.line = new Path.Line(
					 Interaction.lineStartPoint,
                     Interaction.lineStartPoint.add(x,0)
				);
				Interaction.drawLine.line.set_style(circleStyle);
				Interaction.ruler.insertAbove(Interaction.drawLine.line);
			}
			else{
				Interaction.pause = false;
				Interaction.onFrame = null;
			}
		};
		drawLineHelper.animate({
			style:{
				angle:360
			},
			duration:1000,
			delay:1000
		});
		drawLineHelper.animate({
			style:{
				position:new Point(
					Interaction.circlePosition.x+100,
					Interaction.circlePosition.y
				)
			},
			duration:900,
			animationType:'easeOut'
		});
		
	},
    preCheck : function(){

    },
    isAnswerCorrect : function(values){
        console.log(values);
        if(values[2] != (""+Interaction.circleRadius / 60).replace(".",","))
            return false;
        if(parseFloat(values[1].replace(",","."),10) < (Interaction.circleRadius / 60)  * 3 ||
           parseFloat(values[1].replace(",","."),10) > (Interaction.circleRadius / 60)  * 3.15)
            return false;
        if(parseFloat(values[0].replace(",","."),10) < 3 ||
           parseFloat(values[0].replace(",","."),10) > 3.15 )
            return false;
        return true;
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.inputs[2].value = (""+Interaction.circleRadius / 60).replace(".",",");
        Interaction.inputs[1].value = (""+(Interaction.circleRadius / 60 * 6)).replace(".",",");
        Interaction.inputs[0].value = 3;
        Interaction.inputs[0].style.color = "#0a0";
        Interaction.inputs[1].style.color = "#0a0";
        Interaction.inputs[2].style.color = "#0a0";
        Interaction.setStatus('Yanlış cevap, doğrular kutularda gösterilmektedir',false);
    }

};
