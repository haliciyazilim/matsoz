<<<<<<< HEAD
function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {

    images:[
        {
            id:'ant',
            src:'/assets/animations/uzunluklari_olcme/uzunluk_karinca.gif'
        },
        {
            id:'pencil',
            src:'/assets/animations/uzunluklari_olcme/uzunluk_kalem.gif'
        },
        {
            id:'apartment',
            src:'/assets/animations/uzunluklari_olcme/uzunluk_apartman.gif'
        },
        {
            id:'road',
            src:'/assets/animations/uzunluklari_olcme/uzunluk_yol.gif'
        }
    ],

    init:function(container){
        Animation.container = container;

        var antStart = 1000;
        var pencilStart = antStart+6000;
        var apartmentStart = pencilStart+6000;
        var roadStart = apartmentStart+6000;

        $(Animation.container).append($('#ant'));
        $(Animation.container).append($('#pencil'));
        $(Animation.container).append($('#apartment'));
        $(Animation.container).append($('#road'));

        $('#ant').css({
            position:'absolute',
            top:'20px',
            left:'0px',
            opacity:0
        });
        $('#ant').delay(antStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#pencil').css({
            position:'absolute',
            top:'20px',
            left:'200px',
            opacity:0
        });
        $('#pencil').delay(pencilStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#apartment').css({
            position:'absolute',
            top:'20px',
            left:'400px',
            opacity:0
        });
        $('#apartment').delay(apartmentStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#road').css({
            position:'absolute',
            top:'20px',
            left:'600px',
            opacity:0
        });
        $('#road').delay(roadStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(3000)});

    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki birimleri birbirine dönüştürünüz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendStatus({
            bottom:'50px',
            right:'160px'
        });

        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
        })

        Interaction.setRandomGenerator(4);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;

        if($('#questionDiv'))
            $('#questionDiv').remove();

        Interaction.flushInputs();
        Interaction.questionNum = Util.randomInteger(1, 10000);
        Interaction.ascDescPicker = Util.rand01();
        // cm-mm
        if(Interaction.randomNumber == 0){
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "cm";
                Interaction.answerUnit = "mm";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 10;
                if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Interaction.answer / Interaction.factor;
                }
                else{
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
            }
            else{
                Interaction.questionUnit = "mm";
                Interaction.answerUnit = "cm";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 10;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }
        // m-mm
        else if(Interaction.randomNumber == 1){
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "m";
                Interaction.answerUnit = "mm";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 1000;
                if(Interaction.questionNum % 100 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
                else if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 2)
                }
                else{
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 3)
                }
            }
            else{
                Interaction.questionUnit = "mm";
                Interaction.answerUnit = "m";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 1000;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }
        // m-cm
        else if(Interaction.randomNumber == 2){
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "m";
                Interaction.answerUnit = "cm";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 100;
                if(Interaction.questionNum % 100 == 0){
                    Interaction.question = Interaction.answer / 100;
                }
                else if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
                else {
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 2)
                }
            }
            else{
                Interaction.questionUnit = "cm";
                Interaction.answerUnit = "m";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 100;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }
        // m-km
        else{
            if(Interaction.ascDescPicker == 0){
                Interaction.questionUnit = "km";
                Interaction.answerUnit = "m";
                Interaction.answer = Interaction.questionNum;
                Interaction.factor = 1000;
                if(Interaction.questionNum % 100 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 1)
                }
                else if(Interaction.questionNum % 10 == 0){
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 2)
                }
                else{
                    Interaction.question = Util.numberTurkishFloating(Interaction.answer/Interaction.factor, 3)
                }
            }
            else{
                Interaction.questionUnit = "m";
                Interaction.answerUnit = "km";
                Interaction.question = Interaction.questionNum;
                Interaction.divider = 1000;
                Interaction.answer = Interaction.questionNum / Interaction.divider;
            }
        }

        // creating html elements
        if(Interaction.ascDescPicker == 1){

            Interaction.appendInput({
                width: '54px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '90px',
                top: "8px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '54px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '90px',
                top: "52px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '62px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '204px',
                top: "30px",
                fontSize: '20px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '5')
            $(Interaction.inputs[1]).attr('maxlength', '5')
            $(Interaction.inputs[2]).attr('maxlength', '5')

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "114px")
                .css("top", "72px")
                .css("width", "280px")
                .css("height", "100px")
                .css("font-size", 20)

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "106px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("right", "200px")
                .css("top", "38px")
                .css("text-align", "right");
            $('#questionN').html(""+Interaction.question+" "+Interaction.questionUnit+"  =  ");

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "88px")
                .css("top", "46px")
                .css("width", "60px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");

            $('#questionDiv').append('<p id="questionU" ><p/>');
            $('#questionU').css("width", "58")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "148px")
                .css("top", "38px")
                .css("text-align", "center");
            $('#questionU').html(" "+Interaction.answerUnit+"  =  ");

            $('#questionDiv').append('<p id="questionU2" ><p/>');
            $('#questionU2').css("width", "28")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "274px")
                .css("top", "38px")
                .css("text-align", "left");
            $('#questionU2').html(" "+Interaction.answerUnit);
        }
        else{

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '88px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '54px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '172px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '62px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '286px',
                top: "32px",
                fontSize: '20px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '5')
            $(Interaction.inputs[1]).attr('maxlength', '5')
            $(Interaction.inputs[2]).attr('maxlength', '5')

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "100px")
                .css("top", "72px")
                .css("width", "280px")
                .css("height", "100px")
                .css("font-size", 20)

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "106px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("right", "200px")
                .css("top", "38px")
                .css("text-align", "right");
            $('#questionN').html(""+Interaction.question+" "+Interaction.questionUnit+"  =  ");

            $('#questionDiv').append('<p id="cross1" >x</p>');
            $('#cross1')
                .css("position", "absolute")
                .css("left", "156px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU" ><p/>');
            $('#answerU').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "232px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#answerU').html(""+Interaction.answerUnit);

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2')
                .css("position", "absolute")
                .css("left", "268px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU2" ><p/>');
            $('#answerU2').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "356px")
                .css("top", "38px")
                .css("text-align", "center");
            $('#answerU2').html(""+Interaction.answerUnit);
        }
    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(Interaction.ascDescPicker == 1){
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseInt(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseFloat(ans33);

            Interaction.answer1 = Interaction.question;
            Interaction.answer2 = Interaction.divider;
            Interaction.answer3 = Interaction.question/Interaction.divider;
            if(ans11 == Interaction.answer1 && ans22 == Interaction.answer2 && ans33 == Interaction.answer3)
                return true;
            else
                return false;
        }
        else{
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseFloat(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseInt(ans33);

            Interaction.answer1 = parseFloat(Interaction.question.replace(/,/g, "."));
            Interaction.answer2 = Interaction.factor;
            Interaction.answer3 = Interaction.answer1 * Interaction.answer2;

            if(ans11 == Interaction.answer1 && ans22 == Interaction.answer2 && ans33 == Interaction.answer3)
                return true;
            else
                return false;

        }
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){

        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        if(Interaction.ascDescPicker == 1){
            Interaction.answer3 = Interaction.answer3.toString().replace(".", ",");
        }
        else{
            Interaction.answer1 = Interaction.answer1.toString().replace(".", ",")
        }

        Interaction.inputs[0].value = Interaction.answer1;
        Interaction.inputs[1].value = Interaction.answer2;
        Interaction.inputs[2].value = Interaction.answer3;
        Interaction.inputs[0].style.color = "green";
        Interaction.inputs[1].style.color = "green";
        Interaction.inputs[2].style.color = "green";

    }
}
=======

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var answerColor = "#069";
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation =function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
	Animation.container = container;
	
	$(container).append('<img id="ant" src="/assets/animations/uzunluklari_olcme/ant.png" />');
	$('#ant').css("width", "100px")
				.css("height", "80px")
				.css("position", "absolute")
				.css("left", "120px")
				.css("top", "100px");
				
	$(container).append('<img id="pencil" src="/assets/animations/uzunluklari_olcme/pencil.png" />');
	$('#pencil').css("width", "140px")
				.css("height", "140px")
				.css("position", "absolute")
				.css("left", "260px")
				.css("top", "50px");
	
	$(container).append('<img id="apartment" src="/assets/animations/uzunluklari_olcme/apartment.png" />');
	$('#apartment').css("width", "100px")
				.css("height", "140px")
				.css("position", "absolute")
				.css("left", "430px")
				.css("top", "30px");
	
	$(container).append('<img id="pitcher" src="/assets/animations/sivilari_olcme/pitcher.png" />');
	$('#pitcher').css("width", "100px")
				.css("height", "100px")
				.css("position", "absolute")
				.css("left", "570px")
				.css("top", "70px");

	AnimateHelper = new AnimationHelper({
		antOpacity: 0,
		pencilOpacity: 0,
		apartmentOpacity: 0,
		pitcherOpacity: 0
	});
	
	Animation.onFrame = function(event) {
		$('#ant').css("opacity", AnimateHelper.antOpacity);
		$('#pencil').css("opacity", AnimateHelper.pencilOpacity);
		$('#apartment').css("opacity", AnimateHelper.apartmentOpacity);
		$('#pitcher').css("opacity", AnimateHelper.pitcherOpacity);
	}
	
	AnimateHelper.animate({
		style: {
			antOpacity: 1,
		},
		duration: 1500,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			pencilOpacity: 1,
		},
		duration: 1500,
		delay: 3000,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			apartmentOpacity: 1,
		},
		duration: 1500,
		delay: 5000,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			pitcherOpacity: 1,
		},
		duration: 1500,
		delay: 7000,
		animationType: 'easeInEaseOut'
	});


}

Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Yandaki birimleri birbirine dönüştürünüz.');
	
	var questionUnit, answerUnit, unitPicker, ascDescPicker;
	var question, answer, divider, questionNum;
	
	questionNum = Math.floor(Math.random() * 9999) + 1;
	unitPicker = Math.floor(Math.random() * 4) + 1;
	ascDescPicker = Math.floor(Math.random() * 2) + 1;
	
	/* choose the question and answer units */
	// cm-mm
	if(unitPicker % 4 == 0){
		if(ascDescPicker % 2 == 0){
			questionUnit = "cm";
			answerUnit = "mm";
			answer = questionNum;
			factor = 10;
			if(questionNum % 100 == 0){
				question = answer /  factor;
			}
			else if(questionNum % 10 == 0){
				question = answer / factor;
			}
			else{
				question = Util.numberTurkishFloating(answer/factor, 1);
			}
		}
		else{
			questionUnit = "mm";
			answerUnit = "cm";
			question = questionNum;
			divider = 10;
			answer = questionNum / divider;
		}
	}
	// m-mm
	else if(unitPicker % 4 == 1){
		if(ascDescPicker % 2 == 0){
			questionUnit = "m";
			answerUnit = "mm";
			answer = questionNum;
			factor = 1000;
			if(questionNum % 100 == 0){
				question = Util.numberTurkishFloating(answer/factor, 1);
			}
			else if(questionNum % 10 == 0){
				question = Util.numberTurkishFloating(answer/factor, 2);
			}
			else{
				question = Util.numberTurkishFloating(answer/factor, 3);
			}
		}
		else{
			questionUnit = "mm";
			answerUnit = "m";
			question = questionNum;
			divider = 1000;
			answer = questionNum / divider;
		}
	}
	// m-cm
	else if(unitPicker % 4 == 2){
		if(ascDescPicker % 2 == 0){
			questionUnit = "m";
			answerUnit = "cm";
			answer = questionNum;
			factor = 100;
			if(questionNum % 100 == 0){
				question = answer / 100;
			}
			else if(questionNum % 10 == 0){
				question = Util.numberTurkishFloating(answer/factor, 1);
			}
			else{
				question = Util.numberTurkishFloating(answer/factor, 2);
			}
		}
		else{
			questionUnit = "cm";
			answerUnit = "m";
			question = questionNum;
			divider = 100;
			answer = questionNum / divider;
		}
	}
	// m-km
	else {
		if(ascDescPicker % 2 == 0){
			questionUnit = "km";
			answerUnit = "m";
			answer = questionNum;
			factor = 1000;
			if(questionNum % 100 == 0){
				question = Util.numberTurkishFloating(answer/factor, 1);
			}
			else if(questionNum % 10 == 0){
				question = Util.numberTurkishFloating(answer/factor, 2);
			}
			else{
				question = Util.numberTurkishFloating(answer/factor, 3);
			}
		}
		else{
			questionUnit = "m";
			answerUnit = "km";
			question = questionNum;
			divider = 1000;
			answer = questionNum / divider;
		}
	}
	/***************************************/
	
	//console.log("questionNum: "+questionNum);
//	//console.log("question: "+question+" "+questionUnit);
//	//console.log("answer: "+answer+" "+answerUnit);

	/* creating neccessary html elements */
	if(ascDescPicker % 2 == 1){
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
							.css("left", "114px")
							.css("top", "72px")
							.css("width", "280px")
							.css("height", "100px")

		$('#questionDiv').append('<p id="questionN" ><p/>');
		$('#questionN').css("width", "96px")
						.css("height", "30px")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("right", "200px")
						.css("top", "38px")
						.css("text-align", "right");
		$('#questionN').html(""+question+" "+questionUnit+"  =  ");
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="5"/>');
		$('#textInput1').css("width", "54")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "92px")
						.css("top", "12px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		
		$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "88px")
				.css("top", "46px")
				.css("width", "60px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
				
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="5"/>');
		$('#textInput2').css("width", "54")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "92px")
					.css("top", "52px")
					.css("text-align", "center");					
		$('#textInput2').addClass('input');
		
		$('#questionDiv').append('<p id="questionU" ><p/>');
		$('#questionU').css("width", "58")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "148px")
			//		.css("border", "solid")
					.css("top", "38px")
					.css("text-align", "center");
		$('#questionU').html(" "+answerUnit+"  =  ");
		
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="5"/>');
		$('#textInput3').css("width", "62")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "202px")
						.css("top", "34px")
						.css("text-align", "center");					
		$('#textInput3').addClass('input');
		
		$('#questionDiv').append('<p id="questionU2" ><p/>');
		$('#questionU2').css("width", "28")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "268px")
			//		.css("border", "solid")
					.css("top", "38px")
					.css("text-align", "left");
		$('#questionU2').html(" "+answerUnit);
	}
	else {
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
							.css("left", "100px")
							.css("top", "72px")
							.css("width", "280px")
							.css("height", "100px")

		$('#questionDiv').append('<p id="questionN" ><p/>');
		$('#questionN').css("width", "96px")
						.css("height", "30px")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("right", "200px")
						.css("top", "38px")
						.css("text-align", "right");
		$('#questionN').html(""+question+" "+questionUnit+"  =  ");
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="5"/>');
		$('#textInput1').css("width", "60")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "89px")
					.css("top", "34px")
					.css("text-align", "center");					
		$('#textInput1').addClass('input');
	
		$('#questionDiv').append('<p id="cross1" >x</p>');
		$('#cross1').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "156px")
				.css("top", "38px");
	
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="4"/>');
		$('#textInput2').css("width", "54")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "172px")
					.css("top", "34px")
					.css("text-align", "center");					
		$('#textInput2').addClass('input');
		
		$('#questionDiv').append('<p id="answerU" ><p/>');
		$('#answerU').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "230px")
					.css("top", "38px")
					.css("text-align", "center");
					
		$('#answerU').html(""+answerUnit);
					
		$('#questionDiv').append('<p id="equal2" >=</p>');
		$('#equal2').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "266px")
				.css("top", "38px");
	
	
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="4"/>');
		$('#textInput3').css("width", "62")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "284px")
					.css("top", "34px")
					.css("text-align", "center");					
		$('#textInput3').addClass('input');
	
		$('#questionDiv').append('<p id="answerU2" ><p/>');
		$('#answerU2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "348px")
					.css("top", "38px")
					.css("text-align", "center");
		$('#answerU2').html(""+answerUnit);
		
	}
	
	$(container).append('<button id="checkBtn" class="control_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "66px");
	$('#checkBtn').show();
	
	$(container).append('<button id="nextBtn" class="next_button"></button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "66px");
	$('#nextBtn').hide();
					
	$(container).append('<div id="statuss" class="status_true"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "140px")
					.css("top", "240px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center")
	
	
	$('#nextBtn').click(function() {
		var a = $('#interaction_canvas')
		$(Interaction.container).html("");
		$(Interaction.container).html(a);
		Interaction.init(container);
		
	});
	
	var deactivate = 0;
	var trial = 0;				
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if(trial == 2)
			return;
			
		var ans1, ans2, ans3;
		var answer1, answer2, answer3;
		
		if(ascDescPicker % 2 == 1){
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			
			if(ans1.indexOf(".") != -1 || ans2.indexOf(".") != -1 || ans3.indexOf(".") != -1) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen ondalıklı sayıları virgül kullanarak giriniz.");
			}
			else{
				ans11 = ans1.replace(/,/g, ".");
				ans22 = ans2.replace(/,/g, ".");
				ans33 = ans3.replace(/,/g, ".");
				
				if(ans11 == "" || ans22 == "" || ans33 == "" || !Util.isNumber(ans11) || !Util.isNumber(ans22) || !Util.isNumber(ans33)) {
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");	
				}
				else{
					ans11 = parseInt(ans11);
					ans22 = parseInt(ans22);
					ans33 = parseFloat(ans33);
					answer1 = question;
					answer2 = divider;
					answer3 = question/divider;
					if(ans11 == answer1 && ans22 == answer2 && ans33 == answer3) {
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						$('#checkBtn').hide();
						$('#nextBtn').show();
						deactivate = 1;
						$('.inp').each(function(index, element) {
							$(this).get(0).onkeydown = function(event){
													if(event.keyCode != 13)
														return false;
													$("#nextBtn").click();
												}   
					  });
					}
					// second wrong answer state
					else if(trial == 1)
					{
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
						answer3 = answer3.toString().replace(".", ",");
						$('#textInput1').val(answer1);
						$('#textInput2').val(answer2);
						$('#textInput3').val(answer3);
						$('#textInput1').css("color", inputBoxAnswerColor);
						$('#textInput2').css("color", inputBoxAnswerColor);
						$('#textInput3').css("color", inputBoxAnswerColor);
						$('#checkBtn').hide();
						$('#nextBtn').show();
						trial += 1;
						deactivate = 1;
						$('.inp').each(function(index, element) {
							$(this).get(0).onkeydown = function(event){
													if(event.keyCode != 13)
														return false;
													$("#nextBtn").click();
												}   
					  });
					}
					// first wrong answer state
					else if(trial == 0)
					{		
						trial += 1;
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Tekrar deneyiniz.");
					}
				} // end of "answer evaluation" of first type	
			} // end of "not using input with dot cases" of first type		
		} // end of first type
		else{
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			
			if(ans1.indexOf(".") != -1 || ans2.indexOf(".") != -1 || ans3.indexOf(".") != -1) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen ondalıklı sayıları virgül kullanarak giriniz.");
			}
			else{
				ans11 = ans1.replace(/,/g, ".");
				ans22 = ans2.replace(/,/g, ".");
				ans33 = ans3.replace(/,/g, ".");
				
				if(ans11 == "" || ans22 == "" || ans33 == "" || !Util.isNumber(ans11) || !Util.isNumber(ans22) || !Util.isNumber(ans33)) {
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");	
				}
				else{
					ans11 = parseFloat(ans11);
					ans22 = parseInt(ans22);
					ans33 = parseInt(ans33);
					answer1 = parseFloat(question.replace(/,/g, "."));
					answer2 = factor;
					answer3 = answer1 * answer2;
					//console.log(answer1);
					//console.log(answer2);
					//console.log(answer3);
					
					if(ans11 == answer1 && ans22 == answer2 && ans33 == answer3) {
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						$('#checkBtn').hide();
						$('#nextBtn').show();
						deactivate = 1;
						$('.inp').each(function(index, element) {
							$(this).get(0).onkeydown = function(event){
													if(event.keyCode != 13)
														return false;
													$("#nextBtn").click();
												}   
					  });
					}
					// second wrong answer state
					else if(trial == 1)
					{
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
						answer1 = answer1.toString().replace(".", ",");
						$('#textInput1').val(answer1);
						$('#textInput2').val(answer2);
						$('#textInput3').val(answer3);
						$('#textInput1').css("color", inputBoxAnswerColor);
						$('#textInput2').css("color", inputBoxAnswerColor);
						$('#textInput3').css("color", inputBoxAnswerColor);
						$('#checkBtn').hide();
						$('#nextBtn').show();
						trial += 1;
						deactivate = 1;
						$('.inp').each(function(index, element) {
							$(this).get(0).onkeydown = function(event){
													if(event.keyCode != 13)
														return false;
													$("#nextBtn").click();
												}   
					  });
					}
					// first wrong answer state
					else if(trial == 0)
					{		
						trial += 1;
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Tekrar deneyiniz.");
					}
				} // end of "answer evaluation" of second type	
			} // end of "not using input with dot cases" of second type	
		} // end of second type
	}
	
	// checkBtn click func. -> call submit	
	$('#checkBtn').click(submit);
	
	$('.inp').keydown(function() {
		if(deactivate == 0)
			$('#statuss').html("");
	});
		
	// enter keypress action
	$(".inp").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});	
}
>>>>>>> origin/abdullah-dev
