// yuzde interaction

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

// interaction init
Interaction.init = function(paper){
	
	// set interaction title
	Main.setObjective('Aşağıda verilen renkli bölgeyi kesir, ondalık kesir ve yüzde olarak yazınız.');
	
	// neccessary shape variables
	var rect, rect2, rect3;
	var frag1, frag2;
	var circ;

	// neccessary nom and denom variables
	var firstNominator;
	var firstDenominator;
 	var secondNominator;
	var secondDenominator = 100;
	
	// generate firstDenominator -> must be 2 or 4 or 5 or 10 or 20 (100/firstDenominator must be integer)
	do
	{
		firstDenominator = Math.floor(Math.random()*50);
	}
	while(firstDenominator != 2 && firstDenominator != 4 && firstDenominator != 5 && firstDenominator != 10 && firstDenominator != 20 )
	
	// generate firstNominator -> must be less than firstDenominator and can not be 0
	do
	{
		firstNominator = Math.floor(Math.random()*50) ;
	}
	while(firstNominator >= firstDenominator || firstNominator == 0)
	
	// generate two fraction
//	frag1 = new Path.Fraction(60, 222, null, null, 18, 1.8);
//	frag2 = new Path.Fraction(120, 222, null, null, 18, 1.8);

	// shape selection
	var randomize = Math.round(Math.random()*10);
	if (randomize % 3 == 0) // get circle
	{
		circ = new Path.SegmentedCircle(new Point(116, 86), 56, firstNominator, firstDenominator);
	}
	else if(randomize % 3 == 1) // get square
	{
		if(firstDenominator == 20)
		{
			rect2 = new Path.SegmentedRectangle(60, 30, 120, 120, 4, 5, firstNominator);
		}
		else if(firstDenominator == 10)
		{
			rect2 = new Path.SegmentedRectangle(60, 30, 120, 120, 2, 5, firstNominator);
		}
		else if(firstDenominator == 5)
		{
			rect2 = new Path.SegmentedRectangle(60, 30, 120, 120, 1, 5, firstNominator);
		}
		else
		{
			rect2 = new Path.SegmentedRectangle(60,30, 120, 120, firstDenominator/2, 2, firstNominator);
		}
	}
	else // get rectangle
	{
		if(firstDenominator == 20)
		{
			rect3 = new Path.SegmentedRectangle(60, 30, 80, 120, 4, 5, firstNominator);
		}
		else if(firstDenominator == 10)
		{
			rect3 = new Path.SegmentedRectangle(60, 30, 80, 120, 2, 5, firstNominator);
		}
		else if(firstDenominator == 5)
		{
			rect3 = new Path.SegmentedRectangle(60, 30, 80, 120, 1, 5, firstNominator);
		}
		else
		{
			rect3 = new Path.SegmentedRectangle(60, 30, 80, 120, firstDenominator/2, 2, firstNominator);
		}
	}
	
	rect = new Path.SegmentedRectangle(360, 30, 120, 120, 10, 10, 0);
	
	// creating neccessary html element
	$('#interaction_container').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput1').css("width", "32")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "60px")
					.css("top", "262px")
					.css("text-align", "center")
					.css("color", "green");
					
	$('#textInput1').addClass('input');
	$('#textInput1').focusin(function(e) {
            $('#textInput1').addClass('active');
        });
		$('#textInput1').focusout(function(e) {
            $('#textInput1').removeClass('active');
        });
		
	$('#interaction_container').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "58px")
				.css("top", "304px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#interaction_container').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "60px")
					.css("top", "314px")
					.css("text-align", "center")
					.css("color", "green");
					
	$('#textInput2').addClass('input');
	$('#textInput2').focusin(function(e) {
            $('#textInput2').addClass('active');
        });
		$('#textInput2').focusout(function(e) {
            $('#textInput2').removeClass('active');
        });
	
	$('#interaction_container').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "120px")
					.css("top", "262px")
					.css("text-align", "center")
					.css("color", "green");
	
	$('#textInput3').addClass('input');
	$('#textInput3').focusin(function(e) {
            $('#textInput3').addClass('active');
        });
		$('#textInput3').focusout(function(e) {
            $('#textInput3').removeClass('active');
        });
		
	$('#interaction_container').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "118px")
				.css("top", "304px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#interaction_container').append('<input id="textInput5" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput5').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "200px")
					.css("top", "288px")
					.css("text-align", "center")
					.css("color", "green");
	
	$('#textInput5').addClass('input');
	$('#textInput5').focusin(function(e) {
            $('#textInput5').addClass('active');
        });
		$('#textInput5').focusout(function(e) {
            $('#textInput5').removeClass('active');
        });
					
	$('#interaction_container').append('<p id="textInput4" >100<p/>');
	$('#textInput4').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "120px")
					.css("top", "294px")
					.css("text-align", "center")
					.css("border", "none");
					
	$('#interaction_container').append('<input id="textInput6" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput6').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "280px")
					.css("top", "288px")
					.css("text-align", "center")
					.css("color", "green");
	
	$('#textInput6').addClass('input');
	$('#textInput6').focusin(function(e) {
            $('#textInput6').addClass('active');
        });
		$('#textInput6').focusout(function(e) {
            $('#textInput6').removeClass('active');
        });

	
	$('#interaction_container').append('<p id="equal1" >=</p>');
	$('#equal1').css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("position", "absolute")
				.css("left", "100px")
				.css("top", "270px");
				
	$('#interaction_container').append('<p id="equal2" >=</p>');
	$('#equal2').css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("position", "absolute")
				.css("left", "162px")
				.css("top", "270px");
	
	$('#interaction_container').append('<p id="equal3" >=</p>');
	$('#equal3').css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("position", "absolute")
				.css("left", "238px")
				.css("top", "270px");
	
	$('#interaction_container').append('<p id="zero" >0,</p>');
	$('#zero').css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("position", "absolute")
				.css("left", "178px")
				.css("top", "270px");
				
	$('#interaction_container').append('<p id="percent_sign" >%</p>');
	$('#percent_sign').css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "254px")
					.css("top", "272px");
				
	$('#interaction_container').append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "400px")
					.css("top", "340px");
	
	$('#interaction_container').append('<button id="nextBtn" class="control_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "400px")
					.css("top", "340px");
	$('#nextBtn').hide();
					
	$('#interaction_container').append('<div id="statuss_field" class="status_field"></div>');
	$('#statuss_field').css("position", "absolute")
					.css("left", "120px")
					.css("top", "340px");
					
	$('#interaction_container').append('<div id="statuss" class="status_false"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "170px")
					.css("top", "360px");
			
							
	$('#interaction_container').append('<div id="percentage"></div>');
	$('#percentage').css("position", "absolute")
					.css("width", "150px")
					.css("left", "342px")
					.css("top", "220px")
					.css("text-align", "center");
	
	// convertPercentage func. -> 25 = "yüzde yirmi beş"
	function ConvertPercentage(firstNum, secondNum)
	{
		var percent;
		
		switch(firstNum)
		{
			case "0":
				percent = "";
				break;
			case "1":
				percent = "on";
				break;
			case "2":
				percent = "yirmi";
				break;
			case "3":
				percent = "otuz";
				break;
			case "4":
				percent = "kırk";
				break;
			case "5":
				percent = "elli";
				break;
			case "6":
				percent = "atmış";
				break;
			case "7":
				percent = "yetmiş";
				break;
			case "8":
				percent = "seksen";
				break;
			case "9":
				percent = "doksan";
				break;
		}
		
		switch(secondNum)
		{
			case "0":
				percent = percent+"";
				break;
			case "1":
				percent = percent+" bir";
				break;
			case "2":
				percent = percent+" iki";
				break;
			case "3":
				percent = percent+" üç";
				break;
			case "4":
				percent = percent+" dört";
				break;
			case "5":
				percent = percent+" beş";
				break;
			case "6":
				percent = percent+" altı";
				break;
			case "7":
				percent = percent+" yedi";
				break;
			case "8":
				percent = percent+" sekiz";
				break;
			case "9":
				percent = percent+" dokuz";
				break;
		}
		return percent;
	}
	
	// submit func. -> check whether input field is filled and give neccessary feedbacks
	var trial = 0;				
	submit = function()
		{
			// if this is the 3rd trial or more do nothing
			if(trial == 2)
				return;
			
			var ans1, ans2, ans3, ans5, ans6;
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			ans5 = $('#textInput5').val();
			ans6 = $('#textInput6').val();
			
			// check whether input field is empty or not (also given input is integer or not)
			if(ans1 == "" || ans2 == "" || ans3 == "" || ans5 == "" || ans6 == ""
					|| !Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3)
					|| !Util.isInteger(ans5) || !Util.isInteger(ans6))
				{
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
				}
			
			else
			{
				// generate answers wrt. given numbers
				var firstNominatorAns = firstNominator;
				var firstDenominatorAns = firstDenominator;
				var secondNominatorAns = firstNominator * 100 / firstDenominator;
				var fractionAns;
				var percentageAns = secondNominatorAns;
				if (secondNominatorAns < 10)
				{
					fractionAns = "0"+secondNominatorAns;
				}
				else
				{
					fractionAns = secondNominatorAns;
				}
				var fractionn = $('#textInput5').val();
			
				if(secondNominatorAns % 10 == 0)
				{
					fractionAns /= 10;
				}
				
				// correct answer state
				if(ans1 == firstNominatorAns && ans2 == firstDenominatorAns && ans3 == secondNominatorAns && 
						(fractionn == fractionAns || fractionn == fractionAns*10) && ans6 == percentageAns)
				{
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
					for(i = 0; i < secondNominatorAns; i++)
					{
						rect.children[i].fillColor = "#00AF33";
					}
				
					var firstStr = secondNominatorAns.toString();
					var secondNum = firstStr.charAt(1);
					var firstNum = firstStr.charAt(0);
					if(ans3 == 5)
					{
						var percent = ConvertPercentage("0", "5");
					}
					else
					{
						var percent = ConvertPercentage(firstNum, secondNum);
					}
					$('#percentage').html("yüzde "+percent);
				}
				
				// second wrong answer state
				else if(trial == 1)
				{
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı!");
					$('#textInput1').val(firstNominatorAns);
					$('#textInput2').val(firstDenominatorAns);
					$('#textInput3').val(secondNominatorAns);
					$('#textInput5').val(fractionAns);
					$('#textInput6').val(percentageAns);
					for(i = 0; i < secondNominatorAns; i++)
					{
						rect.children[i].fillColor = "#00AF33";
					}
					var firstStr = secondNominatorAns.toString();
					var secondNum = firstStr.charAt(1);
					var firstNum = firstStr.charAt(0);
					var percent = ConvertPercentage(firstNum, secondNum);
					$('#percentage').html("yüzde "+percent);
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
		};
	
	// checkBtn click func. -> call submit
	$('#checkBtn').click(submit);
	
	// nextBtn click func. -> remove whole html elements and call interaction init func. again
	$('#nextBtn').click(function() {
		$('#textInput1').remove();
		$('#textInput2').remove();
		$('#textInput3').remove();
		$('#textInput4').remove();
		$('#textInput5').remove();
		$('#textInput6').remove();
		$('#equal1').remove();
		$('#equal2').remove();
		$('#equal3').remove();
		$('#zero').remove();
		$('#percent_sign').remove();
		$('#checkBtn').remove();
		$('#nextBtn').remove();
		$('#statuss').remove();
		$('#statuss_field').remove();
		$('#percentage').remove();
		$('#line1').remove();
		$('#line2').remove();
		if(randomize % 3 == 0)
		{
			circ.remove();
		}
		else if(randomize % 3 == 1)
		{
			rect2.remove();
		}
		else
		{
			rect3.remove();
		}
		rect.remove();
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
}