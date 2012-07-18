// JavaScript Document
var animationTextStyle = {
	fontSize:16
}
var Animation = {

	init:function(container){
			function textAnimate(point,content,style,animateStyle,delay,callback){
				var pT1 = new PointText(point);
				pT1.content = content;
				pT1.setStyle(animationTextStyle);
				pT1.setStyle(style);
				pT1.animate({
					style:animateStyle,
					duration:1000,
					delay:delay,
					callback:callback,
					animationType:'easeInEaseOut'
				});
				return pT1;
			};
			Animation.container = container;
			var p1 = new Point(250.5,50.5);
			var p2 = new Point(250.5,100.5);
			var p3 = new Point(250.5,150.5);
			
			textAnimate(
				p1,
				'4569',
				{opacity:0},
				{opacity:1},
				100
			);
			textAnimate(
				p1.add(50,0),
				' x 1',
				{opacity:0},
				{opacity:1},
				600
			);
			textAnimate(
				p1.add(102,0),
				'=',
				{opacity:0},
				{opacity:1},
				600
			);
			textAnimate(
				p1.add(82,0),
				'0',
				{opacity:0},
				{opacity:1},
				600,
				function(){
					this.animate({
					style:{fillColor:new RgbColor(1,0,0)},
					duration:500,
					delay:900,
					});
				}
			)
			textAnimate(
				p1.add(122,0),
				'4569',
				{opacity:0},
				{opacity:1},
				1200
			);
			textAnimate(
				p1.add(82,0),
				'0',
				{opacity:0},
				{opacity:1,position:p1.add(170,0),fillColor:new RgbColor(1,0,0)},
				3000
			);
			
			var delay = 3000;
			textAnimate(
				p2,
				'4569',
				{opacity:0},
				{opacity:1},
				100+delay
			);
			textAnimate(
				p2.add(50,0),
				' x 1',
				{opacity:0},
				{opacity:1},
				600+delay
			);
			textAnimate(
				p2.add(112,0),
				'=',
				{opacity:0},
				{opacity:1},
				600+delay
			);
			textAnimate(
				p2.add(82,0),
				'00',
				{opacity:0},
				{opacity:1},
				600+delay,
				function(){
					this.animate({
					style:{fillColor:new RgbColor(1,0,0)},
					duration:500,
					delay:900,
					});
				}
			)
			textAnimate(
				p2.add(132,0),
				'4569',
				{opacity:0},
				{opacity:1},
				1200+delay
			);
			textAnimate(
				p2.add(82,0),
				'00',
				{opacity:0},
				{opacity:1,position:p2.add(180,0),fillColor:new RgbColor(1,0,0)},
				3000+delay
			);
			
			
			var delay = 6000;
			textAnimate(
				p3,
				'4569',
				{opacity:0},
				{opacity:1},
				100+delay
			);
			textAnimate(
				p3.add(50,0),
				' x 1',
				{opacity:0},
				{opacity:1},
				600+delay
			);
			textAnimate(
				p3.add(122,0),
				'=',
				{opacity:0},
				{opacity:1},
				600+delay
			);
			textAnimate(
				p3.add(82,0),
				'000',
				{opacity:0},
				{opacity:1},
				600+delay,
				function(){
					this.animate({
					style:{fillColor:new RgbColor(1,0,0)},
					duration:500,
					delay:900,
					});
				}
			)
			textAnimate(
				p3.add(142,0),
				'4569',
				{opacity:0},
				{opacity:1},
				1200+delay
			);
			textAnimate(
				p3.add(82,0),
				'000',
				{opacity:0},
				{opacity:1,position:p3.add(190,0),fillColor:new RgbColor(1,0,0)},
				3000+delay
			);

		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki çarpma işlemini yapınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.appendInput({
				position:'relative',
				width:'120px',
				top:'-2px',
				fontSize:'20px',
				height:'35px'
			});
			$(Interaction.input).attr('maxlength','7')
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.css({
					position:'absolute',
					top:100,
					right:200,
					lineHeight:'40px',
					fontSize:'20px',
					width:'300px',
					height:'50px',
					letterSpacing:'1px',
					textAlign:'right'
				})
				.html('<span id="factor1"></span>&nbsp;x&nbsp;<span id="factor2"></span>&nbsp;=&nbsp;')
				.append(Interaction.input);
			Interaction.questionDiv = div;
			Interaction.factor1Span = $('span#factor1',div).get(0);
			Interaction.factor2Span = $('span#factor2',div).get(0);
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			});
			Interaction.appendStatus({
				bottom:'50px',
				right:'170px'
			})
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			if(Interaction.solutionDiv)
				$(Interaction.solutionDiv).remove();
				
			Interaction.factor1 = Math.floor(Math.random()*10000);
			Interaction.factor2 = Math.pow(10,Math.floor(Math.random()*3+1)); 
			$(Interaction.factor1Span).html(Interaction.factor1);
			$(Interaction.factor2Span).html(Interaction.factor2);
			
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.factor1 * Interaction.factor2)
				return true;
			else 
				return false;
		},
	onCorrectAnswer : function(){
			
		},
	onWrongAnswer : function(){
			
		},
	onFail : function(){
			Interaction.pause = true;
			Interaction.setStatus('Yanlış cevap, doğrusu ' +  Interaction.factor1 * Interaction.factor2 + ' olacaktı',false);
			Interaction.solutionDiv = $(Interaction.questionDiv).clone().insertAfter(Interaction.questionDiv);
			var zeros = $('#factor2',Interaction.questionDiv).html();
			zeros = '<span class="zero">'+zeros.substring(1,zeros.length)+'</span>';
			
			var html = "" + $(Interaction.solutionDiv).html();
			html = html.substring(0,html.indexOf('<input')) + Interaction.factor1 + zeros;
			console.log($(Interaction.solutionDiv).css('top'));
			$(Interaction.solutionDiv)
				.html(html)
				.append('<span id="result"></span>')
				.css({
					top:$(Interaction.solutionDiv).position().top+60
				});
			
			$('#factor2',Interaction.solutionDiv)
				.html(1+zeros )
			$('#factor2 .zero',Interaction.solutionDiv)
				.css({color:'#000'})
				.animate(
					{color:'#f00'},
					1000
				);
			$('.zero',Interaction.solutionDiv)
				.css({color:'#000'})
				.delay(500)
				.animate(
					{color:'#f00'},
					1000,
					function(){
						Interaction.pause = false;
					}
				);
			
		},
}