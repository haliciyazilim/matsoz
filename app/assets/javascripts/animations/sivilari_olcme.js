<<<<<<< HEAD
function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {
    init:function(container){
        Animation.container = container;

        $(container).append('<img id="shrub" src="/assets/animations/sivilari_olcme/sivilari_olcme_01.jpg" />');
        $('#shrub')
            .css("position", "absolute")
            .css("left", "70px")
            .css("bottom", "10px");

        $(container).append('<img id="milk" src="/assets/animations/sivilari_olcme/sivilari_olcme_02.jpg" />');
        $('#milk')
            .css("position", "absolute")
            .css("left", "280px")
            .css("bottom", "10px");

        $(container).append('<img id="water" src="/assets/animations/sivilari_olcme/sivilari_olcme_03.jpg" />');
        $('#water')
            .css("position", "absolute")
            .css("left", "430px")
            .css("bottom", "10px");

        $(container).append('<img id="pitcher" src="/assets/animations/sivilari_olcme/pitcher_bos.jpg" />');
        $('#pitcher')
            .css("position", "absolute")
            .css("left", "610px")
            .css("bottom", "10px")

        setTimeout('$("#pitcher").attr("src", "/assets/animations/sivilari_olcme/pitcher_animation.gif")', 8500);

     //   setTimeout('$("#pitcher").attr("src", "/assets/animations/sivilari_olcme/pitcher_dolu.jpg")', 13000)

        AnimateHelper = new AnimationHelper({
            shrubOpacity: 0,
            milkOpacity: 0,
            waterOpacity: 0,
            pitcherOpacity: 0
        });

        Animation.onFrame = function(event) {
            $('#shrub').css("opacity", AnimateHelper.shrubOpacity);
            $('#milk').css("opacity", AnimateHelper.milkOpacity);
            $('#water').css("opacity", AnimateHelper.waterOpacity);
            $('#pitcher').css("opacity", AnimateHelper.pitcherOpacity);
        }

        AnimateHelper.animate({
            style: {
                shrubOpacity: 1,
            },
            duration: 1500,
            delay: 1000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                milkOpacity: 1,
            },
            duration: 1500,
            delay: 3000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                waterOpacity: 1,
            },
            duration: 1500,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                pitcherOpacity: 1,
            },
            duration: 1000,
            delay: 7000,
            animationType: 'easeInEaseOut',
            callback: function(){
                Main.animationFinished(2000);
            }
        });

    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki dönüşümleri yapınız.');
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

        Interaction.setRandomGenerator(2);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        if($('#questionDiv'))
            $('#questionDiv').remove();
        Interaction.flushInputs();
        Interaction.randomNumber = randomNumber;

        Interaction.randNum = Util.randomInteger(1, 10000);

        if(Interaction.randomNumber == 0){
            Interaction.questionUnit = "mL";
            Interaction.answerUnit = "L";

            Interaction.question = Interaction.randNum;
            Interaction.answer = Interaction.question/100;

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '92px',
                top: "8px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '92px',
                top: "52px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '192px',
                top: "32px",
                fontSize: '20px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '5')
            $(Interaction.inputs[1]).attr('maxlength', '5')
            $(Interaction.inputs[2]).attr('maxlength', '5')

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                        .css("left", "124px")
                        .css("top", "72px")
                        .css("width", "266px")
                        .css("height", "100")
                        .css("font-size", 20)
            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "60px")
                    .css("height", "30px")
                    .css("position", "absolute")
                    .css("top", "38px")
                    .css("right", "236px")
                    .css("text-align", "right")
              //  .css("border", "solid")

            $('#questionDiv').append('<p id="questionU" >mL<p/>');
            $('#questionU').css("width", "32")
                .css("height", "30")
                .css("position", "absolute")
                .css("left", "36px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1') .css("position", "absolute")
                .css("left", "72px")
                .css("top", "38px");

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "92px")
                .css("top", "46px")
                .css("width", "62px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid")

            $('#questionDiv').append('<p id="answerU" >L<p/>');
            $('#answerU').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "148px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("left", "176px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU2" >L<p/>');
            $('#answerU2').css("width", "32")
                .css("height", "30")
                .css("box-sizing","border-box")
                .css("padding", "0")
                .css("position", "absolute")
                .css("left", "254px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionN').html(Interaction.question);
        }
        else{
            Interaction.questionUnit = "L";
            Interaction.answerUnit = "mL";

            Interaction.answer = Interaction.randNum;

            if(Interaction.randNum % 100 == 0){
                Interaction.question = Util.numberTurkishFloating(Interaction.answer/1000, 1)
            }
            else if(Interaction.randNum % 10 == 0){
                Interaction.question = Util.numberTurkishFloating(Interaction.answer/1000, 2)
            }
            else{
                Interaction.question = Util.numberTurkishFloating(Interaction.answer/1000, 3)
            }

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '89px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '174px',
                top: "32px",
                fontSize: '20px',
            });

            Interaction.appendInput({
                width: '60px',
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
                .css("left", "74px")
                .css("top", "72px")
                .css("width", "366px")
                .css("height", "100")
                .css("font-size", 20)
            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])

            $('#questionDiv').append('<p id="questionN" ><p/>');
            $('#questionN').css("width", "60px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("right", "320px")
                .css("top", "38px")
                .css("text-align", "right");


            $('#questionDiv').append('<p id="questionU" >L<p/>');
            $('#questionU').css("width", "32px")
                .css("height", "30px")
                .css("position", "absolute")
                .css("left", "42px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1') .css("position", "absolute")
                .css("left", "70px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="cross1" >x</p>');
            $('#cross1').css("position", "absolute")
                .css("left", "158px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU" >mL<p/>');
            $('#answerU').css("width", "32")
                .css("height", "30")
                .css("position", "absolute")
                .css("left", "236px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("left", "270px")
                .css("top", "38px");

            $('#questionDiv').append('<p id="answerU2" >mL<p/>');
            $('#answerU2').css("width", "32")
                .css("height", "30")
                .css("position", "absolute")
                .css("left", "354px")
                .css("top", "38px")
                .css("text-align", "center");

            $('#questionN').html(Interaction.question);
        }

    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(Interaction.questionUnit == "L"){
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseFloat(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseInt(ans33);

            Interaction.answer1 = parseFloat(Interaction.question.replace(/,/g, "."));
            Interaction.answer2 = 1000;
            Interaction.answer3 = Interaction.answer1 * Interaction.answer2;

            if(ans11 == Interaction.answer1 && ans22 == Interaction.answer2 && ans33 == Interaction.answer3)
                return true;
            else
                return false;
        }
        else{
            var ans11 = value[0].replace(/,/g, ".");
            var ans22 = value[1].replace(/,/g, ".");
            var ans33 = value[2].replace(/,/g, ".");

            ans11 = parseInt(ans11);
            ans22 = parseInt(ans22);
            ans33 = parseFloat(ans33);

            Interaction.answer1 = Interaction.question;
            Interaction.answer2 = 1000;
            Interaction.answer3 = Interaction.answer1 / Interaction.answer2;

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
        if(Interaction.questionUnit == "L"){
            Interaction.answer1 = Interaction.answer1.toString().replace(".", ",");
        }
        else{
            Interaction.answer3 = Interaction.answer3.toString().replace(".", ",");
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
// JavaScript Document

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
	
	$(container).append('<img id="shrub" src="/assets/animations/sivilari_olcme/shrub.png" />');
	$('#shrub').css("width", "100px")
				.css("height", "80px")
				.css("position", "absolute")
				.css("left", "120px")
				.css("top", "100px");
				
	$(container).append('<img id="milk" src="/assets/animations/sivilari_olcme/milk.png" />');
	$('#milk').css("width", "140px")
				.css("height", "140px")
				.css("position", "absolute")
				.css("left", "260px")
				.css("top", "50px");
	
	$(container).append('<img id="water" src="/assets/animations/sivilari_olcme/water.png" />');
	$('#water').css("width", "100px")
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
		shrubOpacity: 0,
		milkOpacity: 0,
		waterOpacity: 0,
		pitcherOpacity: 0
	});
	
	Animation.onFrame = function(event) {
		$('#shrub').css("opacity", AnimateHelper.shrubOpacity);
		$('#milk').css("opacity", AnimateHelper.milkOpacity);
		$('#water').css("opacity", AnimateHelper.waterOpacity);
		$('#pitcher').css("opacity", AnimateHelper.pitcherOpacity);
	}
	
	AnimateHelper.animate({
		style: {
			shrubOpacity: 1,
		},
		duration: 1500,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			milkOpacity: 1,
		},
		duration: 1500,
		delay: 3000,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			waterOpacity: 1,
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
	
	var questionUnit, answerUnit;
	var question, answer, randNum;
	if((Math.floor(Math.random() * 2) + 1) % 2 == 0) {
		questionUnit = "mL";
		answerUnit = "L";
	}
	else{
		questionUnit = "L";
		answerUnit = "mL";
		
	}
	
	randNum = Math.floor(Math.random() * 9999) + 1;
	
	
	
	if(questionUnit == "mL") {
		question = randNum;
		answer = question/1000;
	}
	else{
		answer = randNum;
		if(randNum % 100 == 0){
			question = Util.numberTurkishFloating(answer/1000, 1);
		}
		else if(randNum % 10 == 0) {
			question = Util.numberTurkishFloating(answer/1000, 2);
		}
		else {
			question = Util.numberTurkishFloating(answer/1000, 3);
		}
	}
	
	if(questionUnit == "mL") {
		// adding neccessary html elements
		$(container).append('<div id="questionDiv"></div>');
	$('#questionDiv').css("position", "absolute")
						.css("left", "124px")
						.css("top", "72px")
						.css("width", "266px")
						.css("height", "100")
	
	$('#questionDiv').append('<p id="questionN" ><p/>');
	$('#questionN').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("top", "38px")
					.css("text-align", "center");
	if(question > 999) {
		$('#questionN').css("left", "-8px");
	}
	else if(question > 99) {
		$('#questionN').css("left", "2px");
	}
	else {
		$('#questionN').css("left", "12px");
	}
	
	$('#questionDiv').append('<p id="questionU" >mL<p/>');
	$('#questionU').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "36px")
					.css("top", "38px")
					.css("text-align", "center");
	
	$('#questionDiv').append('<p id="equal1" >=</p>');
	$('#equal1').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "70px")
				.css("top", "38px");
	
	$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="4"/>');
	$('#textInput1').css("width", "54")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "92px")
					.css("top", "14px")
					.css("text-align", "center");					
	$('#textInput1').addClass('input');
	
	$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "89px")
				.css("top", "49px")
				.css("width", "60px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="4"/>');
	$('#textInput2').css("width", "54")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "92px")
					.css("top", "56px")
					.css("text-align", "center");					
	$('#textInput2').addClass('input');
	
	$('#questionDiv').append('<p id="answerU" >L<p/>');
	$('#answerU').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "38px")
					.css("text-align", "center");
	
	$('#questionDiv').append('<p id="equal2" >=</p>');
	$('#equal2').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "174px")
				.css("top", "38px");
	
	$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="5"/>');
	$('#textInput3').css("width", "62")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "192px")
					.css("top", "34px")
					.css("text-align", "center");					
	$('#textInput3').addClass('input');
	
	$('#questionDiv').append('<p id="answerU2" >L<p/>');
	$('#answerU2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "252px")
					.css("top", "38px")
					.css("text-align", "center");
					
	$('#questionN').html(question);
	}
	else {
		// adding neccessary html elements
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "74px")
						.css("top", "72px")
						.css("width", "366px")
						.css("height", "100")
	
	$('#questionDiv').append('<p id="questionN" ><p/>');
	$('#questionN').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "0px")
					.css("top", "38px")
					.css("text-align", "center");
	
	
	$('#questionDiv').append('<p id="questionU" >L<p/>');
	$('#questionU').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "42px")
					.css("top", "38px")
					.css("text-align", "center");
	
	$('#questionDiv').append('<p id="equal1" >=</p>');
	$('#equal1').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "70px")
				.css("top", "38px");
	
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
	
	$('#questionDiv').append('<p id="answerU" >mL<p/>');
	$('#answerU').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "232px")
					.css("top", "38px")
					.css("text-align", "center");
					
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
	
	$('#questionDiv').append('<p id="answerU2" >mL<p/>');
	$('#answerU2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "352px")
					.css("top", "38px")
					.css("text-align", "center");
					
	$('#questionN').html(question);
	if(question.length == 3) {
		$('#questionN').css("left", "18px");
	}
	else if(question.length == 4) {
		$('#questionN').css("left", "12px");
	}
	}
	
	$(container).append('<button id="checkBtn" class="control_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
	
	$(container).append('<button id="nextBtn" class="next_button"></button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
	$('#nextBtn').hide();
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "160px")
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
		if(questionUnit == "L") {
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			
			if(ans1.indexOf(".") != -1 || ans2.indexOf(".") != -1 || ans3.indexOf(".") != -1) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen ondalıklı sayıları virgül kullanarak giriniz.");
			}
			else {
			ans11 = ans1.replace(/,/g, ".");
			ans22 = ans2.replace(/,/g, ".");
			ans33 = ans3.replace(/,/g, ".");
			
			if(ans11 == "" || ans22 == "" || ans33 == "" || !Util.isNumber(ans11) || !Util.isNumber(ans22) || !Util.isNumber(ans33)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");	
			}
			else {
				ans11 = parseFloat(ans11);
				ans22 = parseInt(ans22);
				ans33 = parseInt(ans33);
				answer1 = parseFloat(question.replace(/,/g, "."));
				answer2 = 1000;
				answer3 = answer1 * answer2;
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
			}
			}
			
		}
		else {
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
			
			else {
				ans11 = parseInt(ans11);
				ans22 = parseInt(ans22);
				ans33 = parseFloat(ans33);
				answer1 = question;
				answer2 = 1000;
				answer3 = answer1 / answer2;
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
			}
			}
		}
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
