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
	
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
	
	$(container).append('<button id="nextBtn" class="next_button">Sonraki</button>');
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
		$('#textInput3').remove();
		$('#textInput2').remove();
		$('#textInput1').remove();
		

		$('#equal1').remove();
		$('#equal2').remove();
		$('#answerU').remove();
		$('#answerU2').remove();
		$('#questionU').remove();
		$('#questionN').remove();
		
		if(questionUnit == "mL") {
			$('#line1').remove();
		}
		else {
			$('#cross1').remove();
		}

		$('#checkBtn').remove();
		$('#nextBtn').remove();
		$('#statuss').remove();
		Interaction.init(container);
		});
	
	
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
		$('#statuss').html("");
	});
		
	// enter keypress action
	$("#textInput1").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput2").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput3").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
}
