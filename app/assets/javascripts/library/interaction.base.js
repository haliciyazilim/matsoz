function InteractionBase(){
	
	Interaction.inputs = [];
	Interaction.__inputVersion = 0;
	Interaction.__status = function(e){
		switch(e){
			case Interaction.__status.WRONG:
					Interaction.setStatus('Yanlış cevap, tekrar deneyiniz.',false);
				break;
				
			case Interaction.__status.FAIL:
				break;
				
			case Interaction.__status.CORRECT:
				Interaction.setStatus('Tebrikler!',true);
				break;
				
			case Interaction.__status.FLOATING:
				Interaction.setStatus('Lütfen ondalıklı sayıları virgülle yazınız.',false);
				break;
				
			case Interaction.__status.EMPTY:
				if(Interaction.inputs.length > 1)
					Interaction.setStatus('Lütfen tüm kutucukları doldurunuz');
				else
					Interaction.setStatus('Lütfen kutucuğu doldurunuz');
				break;
				
			case Interaction.__status.NUMBER:
				if(Interaction.inputs.length > 1)
					Interaction.setStatus('Lütfen kutucuklara sayı giriniz',false);
				else
					Interaction.setStatus('Lütfen bir sayı giriniz.',false);
				break;
		}
	}
	Interaction.__status.WRONG 	= 1;
	Interaction.__status.FAIL 	 = 2;
	Interaction.__status.CORRECT  = 3;
	Interaction.__status.FLOATING = 4;
	Interaction.__status.EMPTY 	= 5;
	Interaction.__status.NUMBER   = 6;
	
	Interaction.setStatus = function(str,cls){
		$(Interaction.status ).html(str);
		if(cls === true)
			$(Interaction.status ).get(0).className = 'status_true';
		else if(cls === false)
			$(Interaction.status ).get(0).className = 'status_false';
		else
			$(Interaction.status ).get(0).className = 'status';
	};
	
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
		if(Interaction.__inputVersion == 2){
			throw 'You cannot use Interaction.appendInput after Interaction.addInput ';
		}
		Interaction.__inputVersion = 1;
		if(isNumber == undefined || isNumber == null)
			isNumber = true;
		var input = Interaction.createInput(isNumber,3);
		$(input)
			.css({
				position:'absolute'
			})
		if(Interaction.inputs.length == 0)
			Interaction.input = input;
		Interaction.inputs.push(input);
		$(Interaction.container).append(input);
		$(input).css(css);
		return input;
	};
	
	/*
	*	example call
	*	Interaction.addInput({
	*		isNumber:true,
	*		maxLength:5,
	*		reverseText:false,
	*		css:{
	*			width:35px,
	*			fontSize:22px
	*		},
	*		correctAnswer:15,
	*		or
	*		correctAnswer:function(){
	*				return Interaction.value1 / Interaction.value2;
	*		},
	*	})
	*/

	Interaction.addInput = function(opt){
		if(Interaction.__inputVersion == 1){
			throw 'You cannot use Interaction.addInput after Interaction.appendInput';
		}
		Interaction.__inputVersion = 2;
		if(opt.correctAnswer == undefined){
			throw 'You have to define a correctAnswer object or value';
		}
		var input = Interaction.createInput(opt.isNumber,opt.maxLength);		
		input.correctAnswer = opt.correctAnswer;
		Interaction.inputs.push(input);
		$(input).css(opt.css);
		return input;
	}
	
	Interaction.createInput = function(isNumber,maxLength){
		var input = document.createElement('input');
		if(isNumber==true){
			input.setAttribute('onkeypress','return Interaction.__inputFilter__onlyNumbers(event)');
			input.setAttribute('isNumber','true');
		}
		else 	
			input.setAttribute('isNumber','false');
		input.setAttribute('type','text');
		$(input)
			.attr({
				'class':'input',
				'maxLength':maxLength
			})
			.css({
				width:parseInt($(input).css('fontSize'),10)*maxLength*0.5+2
			})
			.keyup(function(event){
				if(event.keyCode == 13)
					Interaction.button.click();
			})
		return input;
	};
	
	Interaction.flushInputs = function(){
		$(Interaction.inputs).each(function(index, element) {
            $(this).remove();
        });
		Interaction.inputs = [];
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
		if(Interaction.__inputVersion == 2)
			Interaction.flushInputs();
		for(i = 0; i < Interaction.inputs.length; i++){
			if(Interaction.inputs[i]){
				Interaction.inputs[i].value = '';
				$(Interaction.inputs[i]).removeClass('input_user_answer_correct');
				$(Interaction.inputs[i]).removeClass('input_user_answer_wrong');
				$(Interaction.inputs[i]).removeClass('input_correct_answer');
			}
		}
		if(Interaction.button){
			Interaction.button.className = 'control_button';
			Interaction.button.onclick = Interaction.checkAnswer;
		}
		Interaction.trial = 0;
		Interaction.nextQuestion();
	};
	Interaction.checkAnswer = function(){
		if(Interaction.pause == true)
			return;
			
		var isCorrect;
		if(Interaction.__inputVersion == 2){
			isCorrect = true;
			for(var i=0; i<Interaction.inputs.length;i++){
				var value = Interaction.inputs[i].value;
				if($(Interaction.inputs[i]).val() == ""){
					Interaction.__status(Interaction.__status.EMPTY);
					//Interaction.setStatus('Lütfen tüm kutucukları doldurunuz');
					return;
				}
				if(value == "" ||isNaN(value) && value.indexOf(',') < 0) {
					Interaction.__status(Interaction.__status.NUMBER);
					//Interaction.setStatus('Lütfen bir sayı giriniz.',false);
					return;
				}
				if(value.indexOf('.') > 0){
					Interaction.__status(Interaction.__status.FLOATING);
					//Interaction.setStatus('Lütfen ondalıklı sayıları virgülle yazınız.',false);
					return;
				}
				
				var isInputCorrect;
				if(typeof Interaction.inputs[i].correctAnswer == 'function')
					isInputCorrect = (value == Interaction.inputs[i].correctAnswer(value));
				else
					isInputCorrect = (value == Interaction.inputs[i].correctAnswer);
				
				if(isInputCorrect === true){
					$(Interaction.inputs[i]).addClass('input_user_answer_correct');
				}
				else{
					$(Interaction.inputs[i]).addClass('input_user_answer_wrong');
					isCorrect = false;
				}
			}
		}
		else{
			if(Interaction.inputs.length == 1){
				var value = $(Interaction.input).val();
				isCorrect = Interaction.isAnswerCorrect(value);
			}else if(Interaction.inputs.length > 1){
				var values = [];
				for(var i=0; i<Interaction.inputs.length;i++){
					values[i] = Interaction.inputs[i].value;
					if(Interaction.inputs[i].getAttribute('isNumber') == 'true'){			
						
						if(values[i] == "" ||isNaN(values[i]) && values[i].indexOf(',') < 0) {
							Interaction.__status(Interaction.__status.NUMBER);
							//Interaction.setStatus('Lütfen bir sayı giriniz.',false);
							return;
						}
						if(values[i].indexOf('.') > 0){
							Interaction.__status(Interaction.__status.FLOATING);
							//Interaction.setStatus('Lütfen ondalıklı sayıları virgülle yazınız.',false);
							return;
						}
					}
				}
				isCorrect = Interaction.isAnswerCorrect(values);
			}else
				isCorrect = Interaction.isAnswerCorrect();
		}
		
		//call user-defined functions
		if(isCorrect){
			Interaction.__status(Interaction.__status.CORRECT);
//			Interaction.setStatus('Tebrikler!',true);
			if(Interaction.onCorrectAnswer)
				Interaction.onCorrectAnswer();
		}
		else if(Interaction.trial == 0){
			Interaction.__status(Interaction.__status.WRONG);
//			Interaction.setStatus('Yanlış cevap, tekrar deneyiniz.',false);
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
	};
	
	Interaction.__inputFilter__onlyNumbers = function allowOnlyNumber(e,allowedchars){
		console.log("I'm here");
		var isPassKey =function (key,allowedchars){
			if(allowedchars!=null){
				for(var i=0;i<allowedchars.length;i++){
					if(allowedchars[i]==String.fromCharCode(key))
						return true;
					}
				}
			return false;		
		};
		var key=e.charCode==undefined?e.keyCode:e.charCode;
		if((/^[0-9]+|,$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){
			return true;
		}
		else{
			return false;
		}
	};
}