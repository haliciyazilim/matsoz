
// Interaction Constants
var NUMBER_OF_INTERACTION_TYPES = 7;
var PATTERN_SIZE = 7;


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
			Main.setObjective('Yandaki sayı örüntüsünü tamamlayınız.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			/*
				Initialize your interaction here
			*/
			
			Interaction.count = 0;
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_INTERACTION_TYPES);
			
			$(container).append('<div id="patternContainer"></div>');
			$("#patternContainer").css({
				position: "absolute",
				left: "50px",
				top: "100px",
				width: "490px",
				'font-size': "32px",
				'text-align': 'center'
			})
			
			$(container).append('<div id="answerEntry"></div>');
			$("#answerEntry").css({
				position: "absolute",
				top: "170px",
				left: "100px"
			})
			
			Interaction.input1 = Interaction.appendInput({
				top: '160px',
				left: '366px',
				width: '60px'
			});
			
			$(Interaction.input1).attr('maxlength', 4);
			
			Interaction.input2 = Interaction.appendInput({
				top: '160px',
				left: '446px',
				width: '60px'
			});
			
			$(Interaction.input2).attr('maxlength', 4);
			
			Interaction.appendButton({
				bottom: '10px',
				right: '10px'
			})
			
			Interaction.appendStatus({
				top: '260px',
				left: '100px',
				width: '327px',
				'text-align': 'center'
			})
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){		
			Interaction.pattern = [];
			var count = (Interaction.count++)%Interaction.shuffledArray.length;
			//count = 7;
			
			if (count < 6) {
				$("#answerEntry").html("Soru işareti yerine gelecek sayıyı giriniz: ");
				
				$(Interaction.input2).val(0);
				$(Interaction.input2).css('visibility', 'hidden');
			} else {
				$("#answerEntry").html("Soru işareti yerine gelecek sayıları sırasıyla giriniz: ");
				$("#answerEntry").css({
					left: "40px"
				});
				
				$(Interaction.input2).css('visibility', 'visible');
			}
			
			switch (Interaction.shuffledArray[count]) {
			//	switch (6) {
				case 0: 			// Addition
					var startNumber = Util.randomInteger(1, 10);
					var increment = Util.randomInteger(1, 10);
					
					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber+=increment);
					}
					
					break;
					
				case 1: 			// Subtraction
					var startNumber = Util.randomInteger(1, 10);
					var increment = Util.randomInteger(1, 10);
					
					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber+=increment);
					}
					
					Interaction.pattern.reverse();
					
					break;
					
				case 2: 			// Multiplication
					var startNumber = Util.randomInteger(1, 5);
					var multiplier = Util.randomInteger(2, 4);

					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber*=multiplier);
					}

					break;
					
				case 3:	 			// Division
					var startNumber = Util.randomInteger(1, 5);
					var multiplier = Util.randomInteger(2, 4);

					Interaction.pattern.push(startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber*=multiplier);
					}

					Interaction.pattern.reverse();
					
					break;
					
				case 4: 			// Power
					var startNumber = Util.randomInteger(1, 5);

					Interaction.pattern.push(startNumber*startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push((++startNumber)*startNumber);
					}
					
					break;
					
				case 5: 			// Reverse Power
					var startNumber = Util.randomInteger(1, 5);

					Interaction.pattern.push(startNumber*startNumber);
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push((++startNumber)*startNumber);
					}
					
					Interaction.pattern.reverse();

					break;
					
				case 6: 			// Recursive
					var startNumber = Util.randomInteger(1, 10);
					
					var recursiveStartNumber = Util.randomInteger(1, 10);
					var increment = Util.randomInteger(1, 10);
					
					recursivePattern = [];
					recursivePattern.push(recursiveStartNumber);
					for (i = 1; i < PATTERN_SIZE - 1; i++) {
						recursivePattern.push(recursiveStartNumber+=increment);
					}
					
					if (Util.rand01()) {
						recursivePattern.reverse();
					}
					
					Interaction.pattern.push(startNumber)
					for (i = 1; i < PATTERN_SIZE; i++) {
						Interaction.pattern.push(startNumber+=recursivePattern[i-1]);
					}
					
					if (Util.rand01()) {
						Interaction.pattern.reverse();
					}
					
					break;
					
			}
			
			if (count < 6) {
				if (count < 3) {
					Interaction.questionIndex = PATTERN_SIZE - 1;
				} else {
					Interaction.questionIndex = Util.randomInteger(0, PATTERN_SIZE);
				}
			
				Interaction.correctAnswer = Interaction.pattern[Interaction.questionIndex];
				Interaction.pattern[Interaction.questionIndex] = '?';
			
				var patternString = ""+Interaction.pattern[0];
				for (i = 1; i < Interaction.pattern.length; i++) {
					patternString += ", " + Interaction.pattern[i];
				}
			
				$("#patternContainer").html(patternString);
			} else {
				//Interaction.questionIndex1 = 
			}
		},
	isAnswerCorrect : function(value){
			return value[0] == Interaction.correctAnswer;
		},
	onCorrectAnswer : function(){
			var patternString = "";
			if (Interaction.questionIndex == 0) {
				patternString += "<span class='status_true' style='font-size: 32px'>" + Interaction.correctAnswer + "</span>";
			} else {
				patternString += Interaction.pattern[0];
			}

			for (i = 1; i < Interaction.pattern.length; i++) {
				if (i == Interaction.questionIndex) {
					patternString += ", <span class='status_true' style='font-size: 32px'>" + Interaction.correctAnswer + "</span>";
				} else {
					patternString += ", " + Interaction.pattern[i];
				}
			}
	
			$("#patternContainer").html(patternString);
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Olmadı! Doğru cevap ' + Interaction.correctAnswer + ' olacaktı.', false);
			
			var patternString = "";
			if (Interaction.questionIndex == 0) {
				patternString += "<span class='status_false' style='font-size: 32px'>" + Interaction.correctAnswer + "</span>";
			} else {
				patternString += Interaction.pattern[0];
			}
			
			for (i = 1; i < Interaction.pattern.length; i++) {
				if (i == Interaction.questionIndex) {
					patternString += ", <span class='status_false' style='font-size: 32px'>" + Interaction.correctAnswer + "</span>";
				} else {
					patternString += ", " + Interaction.pattern[i];
				}
			}
		
			$("#patternContainer").html(patternString);
		},
}
