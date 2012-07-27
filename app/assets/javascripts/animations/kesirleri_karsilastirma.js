var Animation = {
	init:function(container){
			Animation.container = container;
		
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda verilen doğal sayı ile kesri karşılaştırınız. Aralarına küçük, büyük ya da eşit işaretlerini sürükleyerek yerleştiriniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			var sortingDiv = document.createElement('div');
			sortingDiv.id = 'sortingDiv';
			$(container).append(sortingDiv);
			$(sortingDiv).html('<img id="lessThan" class="drg" src="/assets/animations/yuzdeleri_karsilastirma/sol_ok.png" /><img id="equalTo src="" /><img id="greaterThan" class="drg" src="/assets/animations/yuzdeleri_karsilastirma/sag_ok.png" />');
			$(sortingDiv).css({
							width: '100px',
							height: '40px',
							position: 'absolute',
							left: '200px',
							top: '10px',
					//		border: 'solid'
						});
						
			$('#lessThan').css({
							position: 'absolute',
							left: '0px',
							top: '0px',
						});
			$('#lessThan').draggable({revert: "invalid", helper: "clone"});

			$('#greaterThan').css({
							position: 'absolute',
							left: '60px',
							top: '0px',
						});
			$('#greaterThan').draggable({revert: "invalid", helper: "clone"});
			
			$('#sortingDiv img').draggable({stack: "#sortingDiv img"});
			
			var answerDiv = document.createElement('div');
			answerDiv.id = 'answerDiv'
			$(container).append(answerDiv);
			$(answerDiv).html('<div id="answer"></div>')
			$('#answer').css({
							width: '40px',
							height: '40px',
							position: 'absolute',
							left: '200px',
							top: '80px',
							border: 'solid'
						});
			$('#answer').droppable({
						accept: '.drg',
						drop: function(event, ui){
							clone = $(ui.draggable).clone();
							$(clone).attr('id', $(ui.draggable).id+"1")
							$('#answer').append(clone);
							$(clone)
							$("#answer .drg").css({left: '4px', top: '4px'})
						}
					});
						
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
	
		},
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		},
}