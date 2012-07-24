
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
				"line-height": "42px",
				'font-size': "32px",
				'text-align': 'center'
			})
			
			$(container).append('<div id="answerEntry"></div>');
			$("#answerEntry").css({
				position: "absolute",
				top: "170px",
				left: "130px",
				width:"300px",
				"text-align": "center"
			})
			
			Interaction.appendButton({
				bottom: '10px',
				right: '10px'
			})
			
			Interaction.appendStatus({
				top: '260px',
				left: '114px',
				width: '327px',
				'text-align': 'center'
			})
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){		
			Interaction.pattern = [];
			var count = (Interaction.count++)%Interaction.shuffledArray.length;
			
			if (Interaction.count < 6) {
				$("#answerEntry").html("Yukarıdaki boşluğu doldurunuz.");
			} else {
				$("#answerEntry").html("Yukarıdaki boşlukları doldurunuz.");
			}
			
			switch (Interaction.shuffledArray[count]) {
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
			
			if (Interaction.count < 6) {
				if (Interaction.count < 3) {
					Interaction.questionIndex = PATTERN_SIZE - 1;
				} else {
					Interaction.questionIndex = Util.randomInteger(0, PATTERN_SIZE);
				}
			
				Interaction.pattern[Interaction.questionIndex] = Interaction.addInput({
					isNumber:true,
					maxLength: (""+Interaction.pattern[Interaction.questionIndex]).length,
					css: {
						position: "relative",
						"font-size": "32px"
					},
					correctAnswer: Interaction.pattern[Interaction.questionIndex]
				});			
			} else {
				Interaction.questionIndex1 = Util.randomInteger(0, PATTERN_SIZE - 1);
				
				do {
					Interaction.questionIndex2 = Util.randomInteger(Interaction.questionIndex1 + 1, PATTERN_SIZE);					
				} while (Interaction.questionIndex2 == Interaction.questionIndex1);
				
				Interaction.pattern[Interaction.questionIndex1] = Interaction.addInput({
					isNumber:true,
					maxLength: (""+Interaction.pattern[Interaction.questionIndex1]).length,
					css: {
						position: "relative",
						"font-size": "32px"
					},
					correctAnswer: Interaction.pattern[Interaction.questionIndex1]
				});
				
				Interaction.pattern[Interaction.questionIndex2] = Interaction.addInput({
					isNumber:true,
					maxLength: (""+Interaction.pattern[Interaction.questionIndex2]).length,
					css: {
						position: "relative",
						"font-size": "32px"
					},
					correctAnswer: Interaction.pattern[Interaction.questionIndex2]
				});
			}
			
			$("#patternContainer").html("");
			$("#patternContainer").append(Interaction.pattern[0]);
			
			for (i = 1; i < Interaction.pattern.length; i++) {
				$("#patternContainer").append(", ");
				$("#patternContainer").append(Interaction.pattern[i]);
			}
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
			$("#patternContainer").html("");
			
			if (typeof Interaction.pattern[0] == "number") {
				$("#patternContainer").append(Interaction.pattern[0]);
			} else {
				$("#patternContainer").append("<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[0].correctAnswer + "</span>");
			}
			
			for (i = 1; i < Interaction.pattern.length; i++) {
				$("#patternContainer").append(", ");
				
				if (typeof Interaction.pattern[i] == "number") {
					$("#patternContainer").append(Interaction.pattern[i]);
				} else {
					$("#patternContainer").append("<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[i].correctAnswer + "</span>");
				}	
			}
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			if (Interaction.count < 6) {
				Interaction.setStatus('Olmadı! Doğru cevap ' + Interaction.pattern[Interaction.questionIndex].correctAnswer + ' olacaktı.', false);
			} else {
				if (Interaction.questionIndex1 < Interaction.questionIndex2) {
					Interaction.setStatus('Olmadı! Doğru cevaplar '
					 						+ Interaction.pattern[Interaction.questionIndex1].correctAnswer
					 						+ ' ve '
					 						+ Interaction.pattern[Interaction.questionIndex2].correctAnswer
					 						+ ' olacaktı.', false);
				} else {
					Interaction.setStatus('Olmadı! Doğru cevaplar '
					 						+ Interaction.pattern[Interaction.questionIndex2].correctAnswer
					 						+ ' ve '
					 						+ Interaction.pattern[Interaction.questionIndex1].correctAnswer
					 						+ ' olacaktı.', false);
				}
			}
			
			$("#patternContainer").html("");
			
			if (typeof Interaction.pattern[0] == "number") {
				$("#patternContainer").append(Interaction.pattern[0]);
			} else {
				$("#patternContainer").append("<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[0].correctAnswer + "</span>");
			}
			
			for (i = 1; i < Interaction.pattern.length; i++) {
				$("#patternContainer").append(", ");
				
				if (typeof Interaction.pattern[i] == "number") {
					$("#patternContainer").append(Interaction.pattern[i]);
				} else {
					$("#patternContainer").append( "<span class='status_true' style='font-size: 32px'>" + Interaction.pattern[i].correctAnswer + "</span>");
				}	
			}
		},
}
