function InteractionBase(){
	
	Interaction.inputs = [];
	
	Interaction.setStatus = function(str,cls){
		$(Interaction.status ).html(str);
		if(cls === true)
			$(Interaction.status ).get(0).className = 'status_true';
		else if(cls === false)
			$(Interaction.status ).get(0).className = 'status_false';
		else
			$(Interaction.status ).get(0).className = 'status';
	
	}
	Interaction.appendStatus = function(css){
		Interaction.status = document.createElement('div');
		$(Interaction.container).append(Interaction.status);
		$(Interaction.status)
			.attr({
				class:'status'
			})
			.css({
				position:'absolute',
			});
		$(Interaction.status).css(css);
	};
	
	Interaction.appendInput = function(css,isNumber){
		
		var input = document.createElement('input');
		if(isNumber!=undefined || isNumber != null)
			input.setAttribute('isNumber',isNumber);
		else	
			input.setAttribute('isNumber','true');
		
			
		if(Interaction.inputs.length == 0)
			Interaction.input = input;
		
		Interaction.inputs.push(input);
		$(Interaction.container).append(input);
		input.setAttribute('type','text');
		$(input)
			.attr({
				'class':'number_input_field',
				'maxlength':'3'
			})
			.css({
				position:'absolute',
			})
			.keyup(function(event){
				if(event.keyCode == 13)
					Interaction.button.click();
			});
		
		$(input).css(css);
	};
	
	Interaction.appendButton = function(css){
		Interaction.button = document.createElement('input');
		Interaction.button.setAttribute('type','button');
		$(Interaction.container).append(Interaction.button);
		$(Interaction.button)
			.attr({
				'class':'control_button',					
			})
			.css({
				position:'absolute',
				
			});
		$(Interaction.button).css(css);
	};
	Interaction.prepareNextQuestion = function(){
		if(Interaction.pause)
			return;
		if(Interaction.status)
			Interaction.setStatus('');
		for(i = 0; i < Interaction.inputs.length; i++){
			if(Interaction.inputs[i])
				Interaction.inputs[i].value = '';
		}
		if(Interaction.button){
			Interaction.button.className = 'control_button';
			Interaction.button.onclick = Interaction.checkAnswer;
		}
		Interaction.trial = 0;
		Interaction.nextQuestion();
	}
	Interaction.checkAnswer = function(){
		if(Interaction.pause == true)
			return;
		
		var value = $(Interaction.input).val();
		var values = [];
		


		for(var i=0; i<Interaction.inputs.length;i++){
			values[i] = Interaction.inputs[i].value;
			if(Interaction.inputs[i].getAttribute('isNumber') == 'true'){			
				if(values[i] == "" ||isNaN(values[i]) && values[i].indexOf(',') < 0){
					Interaction.setStatus('Lütfen bir sayı giriniz.',false);
					return;
				}
				if(values[i].indexOf('.') > 0){
					Interaction.setStatus('Lütfen ondalıklı sayıları virgülle yazınız.',false);
					return;
				}
			}
		}
		var isCorrect;
		
		if(Interaction.inputs.length == 1)
			 isCorrect = Interaction.isAnswerCorrect(value);
		else
			 isCorrect = Interaction.isAnswerCorrect(values);


		if(isCorrect){
			Interaction.setStatus('Tebrikler!',true);
			if(Interaction.onCorrectAnswer)
				Interaction.onCorrectAnswer();
		}
		else if(Interaction.trial == 0){
			Interaction.setStatus('Yanlış cevap, tekrar deneyiniz.',false);
			if(Interaction.onWrongAnswer)
				Interaction.onWrongAnswer();
		}
		else{
			if(Interaction.onFail)
				Interaction.onFail();
		}
		if(isCorrect || Interaction.trial > 0){
			Interaction.button.onclick = Interaction.prepareNextQuestion;
			Interaction.button.className = 'next_button';
		}
		Interaction.trial++;
	}
}