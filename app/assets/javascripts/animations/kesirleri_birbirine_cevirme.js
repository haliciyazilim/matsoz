// kesirleri birbirine çevirme interaction

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

// interaction init func.
Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Aşağıda gelecek olan bileşik kesri tam sayılı kesre, tam sayılı kesri bileşik kesre çeviriniz ve kontrol ediniz.');
	
	// neccessary variables
	var randomize = Math.floor(Math.random() * 10);
	var frac, frac2;

	var nominator;
	var denominator;
		
	do
	{
		nominator = Math.floor(Math.random() * 50) + 1;
	}
	while(nominator < 3)
		
	do
	{
		denominator = Math.floor(Math.random() * 50) + 1;
	}
	while(denominator >= nominator || denominator < 2 || (nominator % denominator) == 0)
	
	// make (bileşik kesir -> tam sayılı kesir) convertion
	if(randomize % 2 == 0)
	{	
		// creating neccessary html elements

		
		$('#interaction_container').append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "134px")
						.css("width", "150")
						.css("height", "90")
						.css("border", "solid");
		
		$('#questionDiv').append('<p id="nom" ></p>');

		
		
		$('#nom').css("position", "absolute")
				.css("top", "-2px");
		$('#nom').html(nominator);
		
		if(nominator < 10)
		{
			$('#nom').css("left", "14px")
		}
		else
		{
			$('#nom').css("left", "8px")
		}
		
		$('#questionDiv').append('<p id="denom" ></p>');

		$('#denom').css("position", "absolute")
				.css("top", "24px");
		$('#denom').html(denominator);
		if(denominator < 10)
		{
			$('#denom').css("left", "14px")
		}
		else
		{
			$('#denom').css("left", "8px")
		}
		
	
		$('#questionDiv').append('<div id="line1"></div>');

		$('#line1').css("position","absolute")
				.css("left", "14px")
				.css("top", "14px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
		
		$(container).append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "200px")
				.css("top", "148px");
		
		$(container).append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "220px")
					.css("top", "166px")
					.css("text-align", "center");
					
		$('#textInput1').addClass('input');
	
		$(container).append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "264px")
					.css("top", "144px")
					.css("text-align", "center");
					
		$('#textInput2').addClass('input');
	
		$(container).append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "264px")
					.css("top", "190px")
					.css("text-align", "center");
	
		$('#textInput3').addClass('input');
	
		$(container).append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "262px")
				.css("top", "180px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
		
	}
	// make (tam sayılı kesir -> bileşik kesir convertion
	else
	{
		var wh = Math.floor(nominator/denominator);
		var nom = nominator % denominator;
		var denom = denominator;
		$(container).append('<p id="wh" ></p>');
		$('#wh').css("position", "absolute")
				.css("top", "146px");
		$('#wh').html(wh);
		
		if(wh < 10)
		{
			$('#wh').css("left", "160px")
		}
		else
		{
			$('#wh').css("left", "154px")
		}
		
		$(container).append('<p id="nom" ></p>');
		$('#nom').css("position", "absolute")
				.css("top", "134px");
		$('#nom').html(nom);
		
		if(nom < 10)
		{
			$('#nom').css("left", "190px")
		}
		else
		{
			$('#nom').css("left", "184px")
		}
		
		$(container).append('<p id="denom" ></p>');
		$('#denom').css("position", "absolute")
				.css("top", "160px");
		$('#denom').html(denom);
		
		if(denom < 10)
		{
			$('#denom').css("left", "190px")
		}
		else
		{
			$('#denom').css("left", "184px")
		}
		
	//	frac2 = new Path.Fraction(180, 72, null, null, 18, 1.8);
	$(container).append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "180px")
				.css("top", "180px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
		
		$(container).append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "220px")
				.css("top", "148px");
		
		$(container).append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "244px")
					.css("top", "144px")
					.css("text-align", "center");
					
		$('#textInput2').addClass('input');
	
		$(container).append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "244px")
					.css("top", "190px")
					.css("text-align", "center");
	
		$('#textInput3').addClass('input');
		
		$(container).append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "242px")
				.css("top", "180px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	}
	
	$(container).append('<div id="statuss_field" class="status_field"></div>');
	$('#statuss_field').css("position", "absolute")
					.css("left", "120px")
					.css("top", "340px");
					
	$(container).append('<div id="statuss" class="status_false"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "180px")
					.css("top", "340px");
					
	$(container).append('<div id="answer"></div>');
	$('#answer').css("position", "absolute")
					.css("left", "130px")
					.css("top", "266px")
					.css("text-align", "right")
					.css("color", answerColor);
					
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "400px")
					.css("top", "340px");
	
	$(container).append('<button id="nextBtn" class="control_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "400px")
					.css("top", "340px");
	$('#nextBtn').hide();
	
	// submit func. -> check whether input field is filled and give neccessary feedbacks
	var trial = 0;				
	submit = function()
		{
			// if this is the 3rd trial or more do nothing
			if(trial == 2)
				return;
			
			var ans1, ans2, ans3;
			// (bileşik kesir -> tam sayılı kesir) convertion  submission
			if(randomize % 2 == 0)
			{
				ans1 = $('#textInput1').val();
				ans2 = $('#textInput2').val();
				ans3 = $('#textInput3').val();
				
				// check whether input field is empty or not (also given input is integer or not)
				if(ans1 == "" || ans2 == "" || ans3 == "" || !Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3))		
				{
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
				}
				else
				{
					// generate answers wrt. given numbers
					ans11 = Math.floor(nominator/denominator);
					ans22 = nominator % denominator;
					ans33 = denominator;
					
					// correct answer state
					if(ans1 == ans11 && ans2 == ans22 && ans3 == ans33)
					{
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						$('#answer').html("Cevap: "+nominator+" = ("+ans11+" x "+ans33+") + "+ans22);
						$('#checkBtn').hide();
						$('#nextBtn').show();
					}
					
					// second wrong answer state
					else if(trial == 1)
					{
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı!");
						$('#textInput1').val(ans11);
						$('#textInput2').val(ans22);
						$('#textInput3').val(ans33);
						$('#textInput1').css("color", inputBoxAnswerColor);
						$('#textInput2').css("color", inputBoxAnswerColor);
						$('#textInput3').css("color", inputBoxAnswerColor);
						$('#answer').html("Cevap: "+nominator+" = ("+ans11+" x "+ans33+") + "+ans22);
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
			
			// (tam sayılı kesir -> bileşik kesir convertion)
			else
			{
				ans2 = $('#textInput2').val();
				ans3 = $('#textInput3').val();
				
				// check whether input field is empty or not (also given input is integer or not)
				if(ans2 == "" || ans3 == "" || !Util.isInteger(ans2) || !Util.isInteger(ans3))		
				{
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
				}
				else
				{
					// generate answers wrt. given numbers
					ans22 = nominator;
					ans33 = denominator;
					
					// correct answer state
					if(ans2 == ans22 && ans3 == ans33)
					{
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						$('#answer').html("Cevap: ("+wh+" x "+denom+") + "+nom+" = "+ans2);
						$('#checkBtn').hide();
						$('#nextBtn').show();
					}
					
					// second wrong answer state
					else if(trial == 1)
					{
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı!");
						$('#textInput2').val(ans22);
						$('#textInput3').val(ans33);
						$('#answer').html("Cevap: ("+wh+" x "+denom+") + "+nom+" = "+ans2);
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
		
		// checkBtn click func. -> call submit	
		$('#checkBtn').click(submit);
		
		// nextBtn click func. -> remove whole html elements and call interaction init again
		$('#nextBtn').click(function() {
			$('#textInput3').remove();
			$('#textInput2').remove();
		
			if(randomize % 2 == 0)
			{
				$('#textInput1').remove();
			}
			
			if(randomize % 2 == 1) {
				$('#wh').remove();
			}

			$('#equal1').remove();

			$('#checkBtn').remove();
			$('#nextBtn').remove();
			$('#answer').remove();
			$('#statuss').remove();
			$('#statuss_field').remove();
			$('#line1').remove();
			$('#line2').remove();
			Interaction.init(paper);
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
}