var Animation = {
	init:function(container){
			var div = document.createElement('div');
			$(container).append(div);
			$(div).css({
				width:'160px',
				position:'absolute',
				top:'20px',
				left:'60px',
				fontSize:'24px'
			})
			Animation.division = new LongDivision(4581,9,div);
			Animation.division.nodes.dividend.innerHTML += '<span style="color:#ccc">0</span>';
			Animation.division.nodes.divisor.innerHTML += '<span style="color:#ccc">0</span>';
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.appendInput({
				position:'relative',
				marginTop:'5px',
				marginLeft:'5px',
				width:'80px',
				fontSize:'28px',
				height:'35px',
				textAlign:'left'
			})
		//	$(Interaction.input).attr('maxlength',5)
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.html('<div id="dividend"></div><div id="divisor"></div>')
				.append(Interaction.input)
				.css({
					position:'absolute',
					top:'50px',
					left:'100px',
					width:'250px',
					height:'80px',
					fontSize:'28px'
				});
			Interaction.dividendDiv = $('#dividend',div).get(0);
			$(Interaction.dividendDiv)
				.css({
					height:'80px',
					float:'left',
					width:'120px',
					borderRight:'1px solid #000',
					textAlign:'right',
					paddingRight:'5px',
					paddingTop:'10px'
				});
			Interaction.divisorDiv = $('#divisor',div).get(0);
			$(Interaction.divisorDiv)
				.css({
					paddingTop:'10px',
					paddingLeft:'5px',
					height:'35px',
					float:'left',
					width:'90px',
					borderBottom:'1px solid #000'
				})
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
			Interaction.divisor = Math.pow(10,Math.floor(Math.random()*3+1))*Math.floor(Math.random()*9+1);
			Interaction.dividend = Interaction.divisor*Math.floor(Math.random()*1000+10);
			$(Interaction.dividendDiv).html(Interaction.dividend);
			$(Interaction.divisorDiv).html(Interaction.divisor);
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.dividend/Interaction.divisor)
				return true;
			else
				return false;
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu ' +  Interaction.dividend/Interaction.divisor + ' olacaktı',false);
			
		},
}

