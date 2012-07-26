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
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			/*
				Initialize your interaction here
			*/
			
			var input = Interaction.addInput({
				isNumber:true,
				maxLength:5,
				isAnswerCorrect:function(value){
						if(value==5)
							return true;
						return false;
					},
				css:{
						position:'absolute',
						top:'100px',
						left:'100px'
					}	
			});
			Interaction.appendStatus({
				bottom:'40px',
				right:'160px'	
			})
			Interaction.appendButton({
				bottom:'30px',
				right:'40px'	
			})
			Interaction.container.appendChild(input);
			
			Interaction.prepareNextQuestion();

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