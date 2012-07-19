var Animation = {
	init:function(container){
	
	}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki ondalık kesirleri toplayınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.appendInput({
				width:'100px',
				position:'relative',
				left:'10px',
				paddingRight:'10px',
				textAlign:'right',
				fontSize:'24px',
				top:'-10px'
			});
			
			$(Interaction.input)
				.attr('maxlength','7')
				.keydown(function(event){
					var pos;
					if(event.keyCode == 8)
						pos = 1;
					else
						pos = 0; 
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(pos);
						textRange.moveStart(pos);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(pos,pos);
						return true;
					}
				})
				.keyup(function(event){
					
//					if(this.value.length == 3 && (event.keyCode == 8 || event.keyCode == 46))
				//		this.value = ','+this.value;
					
					
				})
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.html('<div id="addend1"></div><div id="addend2"></div><div id="line"><img src="/assets/animations/plus_sign.png" /></div><br/>')
				.append(Interaction.input)
				.css({
					width:120,
					position:'absolute',
					top:'70px',
					left:'150px',
					fontSize:'24px',
					textAlign:'right',
					lineHeight:'30px'
				});
			$('#line',div).css({
				height:'2px',
				borderBottom:'2px solid #000',
				position:'relative',
				top:'5px',
				left:'15px'
			});
			$('#line img',div).css({
				position:'relative',
				top:'-15px',	
				left:'10px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			});
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			Interaction.questionDiv = div;
			Interaction.addend1Div = $('#addend1',div).get(0);
			Interaction.addend2Div = $('#addend2',div).get(0);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			if(Interaction.solutionDiv)
				$(Interaction.solutionDiv).remove();
			function checkAddend2(){
				(Interaction.addend1+Interaction.addend2)*10
			}
			Interaction.addend1 = Math.floor(Math.random()*1000)/100;
			do
				Interaction.addend2 = Math.floor(Math.random()*1000)/100;
				while(
					function(){
						var t = Interaction.addend1+Interaction.addend2;
						var float = t - Math.floor(t);
						if(Math.floor(t * 100)%10 == 0)
							return true;
						else
							return false;
					}()
				)
			$(Interaction.addend1Div).html(Util.numberTurkishFloating(Interaction.addend1,2));
			$(Interaction.addend2Div).html(Util.numberTurkishFloating(Interaction.addend2,2));
			
		},
	isAnswerCorrect : function(value){
			if(value == Util.numberTurkishFloating(Interaction.addend1 + Interaction.addend2,2))
				return true;
			else 
				return false;
		},
	onCorrectAnswer : function(){
			
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu ' +  Util.numberTurkishFloating(Interaction.addend1 + Interaction.addend2,2) + ' olacaktı',false);
			
		},
}