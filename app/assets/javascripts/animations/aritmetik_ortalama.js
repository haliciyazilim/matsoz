// Aritmetik ortalama interaction

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation =function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

// interaction init func.
Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Yandaki dizide yer alan sayıları ilgili kutucuklara giriniz ve aritmetik ortalamayı bulunuz. “Kontrol” düğmesine fare ile tıklayarak ya da “Enter” tuşuna basarak kontrol ediniz.');
	
	var total;
	var fraction1, fraction2;
	var datas = new Array();
	
	for(i = 0; i < 4; i++) {
		datas[i] = Math.floor(Math.random() * 19) + 2;
	}
	do {
		datas[i] = Math.floor(Math.random() * 19) + 2;
		total = datas[0] + datas[1] + datas[2] + datas[3] + datas[4];
	}
	while(total % 5 != 0)

	$(container).append('<div id="datasDiv"></div>');
	$('#datasDiv').css("position", "absolute")
						.css("left", "180px")
						.css("top", "6px")
						.css("width", "200px")
						.css("height", "20px")
						.css("text-align", "center");
	
	$(container).append('<div id="questionDiv"></div>');
	$('#questionDiv').css("position", "absolute")
						.css("left", "40px")
						.css("top", "35px")
						.css("width", "400px")
						.css("height", "210px");
	
	$('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
	$('#avgText').css("position", "absolute")
					.css("left", "0px")
					.css("top", "30px")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
					.css("width", "100px");
					
	$('#questionDiv').append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "120px")
				.css("top", "46px")
				.css("font-size", 22)
				.css("font-family", "Helvetica Neue");
				
	//fraction1 = new Path.Fraction(154, 89, null, null, 18, 14.2);
	$('#questionDiv').append('<div id="line1"></div>');
	$('#line1').css("position","absolute")
				.css("left", "144px")
				.css("top", "56px")
				.css("width", "252px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput1').css("width", "32")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "20px")
					.css("text-align", "center");
					
	$('#textInput1').addClass('input');
			
	$('#questionDiv').append('<p id="plus1" >+</p>');
		$('#plus1').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("left", "182px")
					.css("top", "28px");
	
	$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "200px")
					.css("top", "20px")
					.css("text-align", "center");
					
	$('#textInput2').addClass('input');
		
	$('#questionDiv').append('<p id="plus2" >+</p>');
		$('#plus2').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("left", "236px")
					.css("top", "28px");
	
	$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "254px")
					.css("top", "20px")
					.css("text-align", "center");
	
	$('#textInput3').addClass('input');
		
	$('#questionDiv').append('<p id="plus3" >+</p>');
		$('#plus3').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("left", "290px")
					.css("top", "28px");
		
	$('#questionDiv').append('<input id="textInput4" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput4').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "308px")
					.css("top", "20px")
					.css("text-align", "center");
	
	$('#textInput4').addClass('input');
		
	$('#questionDiv').append('<p id="plus4" >+</p>');
		$('#plus4').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("left", "344px")
					.css("top", "28px");
	
	$('#questionDiv').append('<input id="textInput5" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput5').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "362px")
					.css("top", "20px")
					.css("text-align", "center");
	
	$('#textInput5').addClass('input');
		
	$('#questionDiv').append('<input id="textInput6" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput6').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "254px")
					.css("top", "62px")
					.css("text-align", "center");
	
	$('#textInput6').addClass('input');
		
	$('#questionDiv').append('<p id="equal2" >=</p>');
		$('#equal2').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("left", "120px")
					.css("top", "158px");

	
	$('#questionDiv').append('<div id="line2"></div>');
	$('#line2').css("position","absolute")
				.css("left", "144px")
				.css("top", "168px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#questionDiv').append('<input id="textInput7" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput7').css("width", "32")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "132px")
					.css("text-align", "center");
					
	$('#textInput7').addClass('input');
					
	$('#questionDiv').append('<input id="textInput8" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput8').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "174px")
					.css("text-align", "center");
	
	$('#textInput8').addClass('input');
		
	$('#questionDiv').append('<p id="equal3" >=</p>');
		$('#equal3').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("left", "190px")
					.css("top", "158px");
		
	$('#questionDiv').append('<input id="textInput9" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput9').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "210px")
					.css("top", "150px")
					.css("text-align", "center");
	$('#textInput9').addClass('input');
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "204px")
					.css("top", "260px")
					.css("width", "200px")
					.css("height", "30px");
					
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "460px")
					.css("top", "250px");
					
	$('#checkBtn').show();
	
	$(container).append('<button id="nextBtn" class="control_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "460px")
					.css("top", "250px");
	$('#nextBtn').hide();
	
	
						
	for(i = 0; i < 5; i++) {
		if(datas[i-1] >= 10) {
			var leftStr = ""+(8+40*i)+"px";
		}
		else {
			var leftStr = ""+(8+38*i)+"px";
		}
		$('#datasDiv').append('<p id="data'+i+'"></p>');
		$('#data'+i).css("position", "absolute")
						.css("left", leftStr)
						.css("top", "0px")
						.css("text-align", "center")
						.css("font-size", 18)
		if(i != 4) {
			$('#data'+i).html(""+datas[i]+",");
		}
		else {
			$('#data'+i).html(""+datas[i]);
		}
	}
	
	var trial = 0;				
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if(trial == 2)
			return;
			
		var ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9;
		ans1 = $('#textInput1').val();
		ans2 = $('#textInput2').val();
		ans3 = $('#textInput3').val();
		ans4 = $('#textInput4').val();
		ans5 = $('#textInput5').val();
		ans6 = $('#textInput6').val();
		ans7 = $('#textInput7').val();
		ans8 = $('#textInput8').val();
		ans9 = $('#textInput9').val();
		// check whether input field is empty or not (also given input is integer or not)
		if(ans1 == "" || ans2 == "" || ans3 == "" || ans4 == "" || ans5 == "" || ans6 == "" || ans7 == "" || ans8 == "" || ans9 == "" || 
			!Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3) || !Util.isInteger(ans4) || !Util.isInteger(ans5) || !Util.isInteger(ans6) || !Util.isInteger(ans7) ||
			!Util.isInteger(ans8) || !Util.isInteger(ans9)) {
			$('#statuss').get(0).className = "status_alert";
			$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
		}
		else {
			// generate answers wrt. given numbers
			answer1 = datas[0];
			answer2 = datas[1];
			answer3 = datas[2];
			answer4 = datas[3];
			answer5 = datas[4];
			answer6 = 5;
			answer7 = total;
			answer8 = 5;
			answer9 = total/5;
			
			// correct answer state
			if(ans1 == answer1 && ans2 == answer2 && ans3 == answer3 && ans4 == answer4 && ans5 == answer5 && ans6 == answer6 &&
			ans7 == answer7 && ans8 == answer8 && ans9 == answer9) {
				$('#statuss').get(0).className = "status_true";
				$('#statuss').html("Tebrikler!");
				$('#checkBtn').hide();
				$('#nextBtn').show();
			}
			// second wrong answer state
			else if(trial == 1) {
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Olmadı!");
				$('#textInput1').css("color", inputBoxAnswerColor);
				$('#textInput2').css("color", inputBoxAnswerColor);
				$('#textInput3').css("color", inputBoxAnswerColor);
				$('#textInput4').css("color", inputBoxAnswerColor);
				$('#textInput5').css("color", inputBoxAnswerColor);
				$('#textInput6').css("color", inputBoxAnswerColor);
				$('#textInput7').css("color", inputBoxAnswerColor);
				$('#textInput8').css("color", inputBoxAnswerColor);
				$('#textInput9').css("color", inputBoxAnswerColor);
				$('#textInput1').val(answer1);
				$('#textInput2').val(answer2);
				$('#textInput3').val(answer3);
				$('#textInput4').val(answer4);
				$('#textInput5').val(answer5);
				$('#textInput6').val(answer6);
				$('#textInput7').val(answer7);
				$('#textInput8').val(answer8);
				$('#textInput9').val(answer9);
				$('#checkBtn').hide();
				$('#nextBtn').show();
				trial += 1;
			}
			// first wrong answer state
			else if(trial == 0) {	
				trial += 1;
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Tekrar deneyiniz.");
			}
		}
	}
	
	// checkBtn click func. -> call submit	
		$('#checkBtn').click(submit);
		
	// nextBtn click func. -> remove whole html elements and call interaction init again
	$('#nextBtn').click(function() {
			$('#questionDiv').remove();
			$('#datasDiv').remove();
			$('#checkBtn').remove();
			$('#nextBtn').remove();
			$('#answer').remove();
			$('#statuss').remove();
			$('#line1').remove();
			$('#line2').remove();
			Interaction.init(container);
		});
	
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
	
	$("#textInput4").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput5").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput6").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput7").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput8").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput9").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
}
