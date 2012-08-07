function __Styles(){
    animationTextStyle = {
        fontSize:24,
        fillColor:new RgbColor(1,1,1,0.9),
        font:"cursive"
    }
}

var Animation = {
	images:[
		{
			id:'board',
			src:'/assets/animations/board_black.jpg'
		}
	],

	init:function(container){
            Animation.container = container;
			var p1 = new Point(150.5,50.5);
			var p2 = new Point(150.5,100.5);
			var p3 = new Point(150.5,150.5);
			var w=$(container).width(), h=$(container).height();
			var board = new Raster('board');
			board.position = new Point(w*0.5,h*0.5+2)
			SingleLineMultiply(p1, 100,   "0", 5273, 7, animationTextStyle);
			SingleLineMultiply(p2,4100,  "00", 8324, 2, animationTextStyle);
			SingleLineMultiply(p3,8100, "000", 4921, 5, animationTextStyle);
            Main.animationFinished(13000); 
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
			$(Interaction.input).attr('maxlength','8')
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
			Interaction.factor2 = Math.pow(10,Math.floor(Math.random()*3+1))*Math.floor(Math.random()*9+1); 
			$(Interaction.factor1Span).html(Util.format(Interaction.factor1));
			$(Interaction.factor2Span).html(Util.format(Interaction.factor2));
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
			var zeros = $(Interaction.factor2Span).html();
			zeros = '<span class="zero">'+zeros.substring(1,zeros.length)+'</span>';
			var html = "" + $(Interaction.solutionDiv).html();
			html = html.substring(0,html.indexOf('<input')) +
					'<span id="result">' +
				   (Interaction.factor1*parseInt(Interaction.factor2Span.innerHTML.substring(0,1),10)) + zeros + 
				   '</span>';
			
			$(Interaction.solutionDiv)
				.html(html)
				.css({
					top:$(Interaction.solutionDiv).position().top+60
				});
			$('#result',Interaction.solutionDiv)
				.css({opacity:0})
				.delay(2000)
				.animate({opacity:1},1000);
			$('#factor2',Interaction.solutionDiv)
				.html(Interaction.factor2Span.innerHTML.substring(0,1)+zeros )
				.css({opacity:0})
				.delay(1000)
				.animate({opacity:1},1000);
			$('#factor2 .zero',Interaction.solutionDiv)
				.css({color:'#000'})
				.delay(3000)
				.animate(
					{color:'#f00'},
					1000
				);
			$('.zero',Interaction.solutionDiv)
				.css({color:'#000'})
				.delay(3500)
				.animate(
					{color:'#f00'},
					1000,
					function(){
						Interaction.pause = false;
					}
				);
		}
}

