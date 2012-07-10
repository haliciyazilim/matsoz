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

Animation.init = function(container){
	Animation.container = container;
	
	var arr = new Group(); 
	var arrow = new Path.OneSidedArrow(new Point(10, 100), new Point(500, 100), 10, 30);
	var arrow2 = new Path.OneSidedArrow(new Point(500,100), new Point(501,100), 10, 30);
	arrow.rotate(180);
	arr.addChild(arrow);
	arr.addChild(arrow2);
	
	var dotGroup = new Group();
	var firstDot = new Path.Circle(new Point(60, 100), 5)
	firstDot.fillColor = "black";
	var secondDot = new Path.Circle(new Point(195, 100), 5)
	secondDot.fillColor = "black";
	var thirdDot = new Path.Circle(new Point(330, 100), 5)
	thirdDot.fillColor = "black";
	var fourthDot = new Path.Circle(new Point(465, 100), 5)
	fourthDot.fillColor = "black";
	dotGroup.addChild(firstDot);
	dotGroup.addChild(secondDot);
	dotGroup.addChild(thirdDot);
	dotGroup.addChild(fourthDot);
	//dotGroup.opacity = 0;
	
	var firstRect = new Group();
	var secondRect = new Group();
	
	var one = new Path.Rectangle(new Point(60.5, 35.5), new Size(135, 15));
	one.fillColor = "#88ACE0";
	one.strokeColor = "black";
	
	var two = new Path.Rectangle(new Point(195.5, 35.5), new Size(135, 15));
	two.fillColor = "#88ACE0";
	two.strokeColor = "black";
	
	var firstPiece = new Path.Rectangle(new Point(330.5, 35.5), new Size(15,15));
	firstPiece.fillColor = "#88ACE0";
	firstPiece.strokeColor = "black";
	
	var secondPiece = new Path.Rectangle(new Point(345.5, 35.5), new Size(15,15));
	secondPiece.fillColor = "#88ACE0";
	secondPiece.strokeColor = "black";
	
	var thirdPiece = new Path.Rectangle(new Point(360.5, 35.5), new Size(15,15));
	thirdPiece.fillColor = "#88ACE0";
	thirdPiece.strokeColor = "black";
	
	var fourthPiece = new Path.Rectangle(new Point(375.5, 35.5), new Size(15,15));
	fourthPiece.fillColor = "#88ACE0";
	fourthPiece.strokeColor = "black";
	
	firstRect.addChild(one);
	firstRect.addChild(two);
	firstRect.addChild(firstPiece);
	firstRect.addChild(secondPiece);
	firstRect.addChild(thirdPiece);
	firstRect.addChild(fourthPiece);
	
	for(i = 0; i < 22; i++) {
		var exRect = new Path.Rectangle(new Point(60.5 + (15 * i), 150.5), new Size(15, 15));
		exRect.fillColor = "#88ACE0";
		exRect.strokeColor = "black";
		secondRect.addChild(exRect);
	}
	
	arr.opacity = 0;
	firstRect.opacity = 0;
	secondRect.opacity = 0;
	dotGroup.opacity = 0;
	
	arr.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 500,
		animationType: 'easeInEaseOut'
	});
	
	dotGroup.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1500,
		animationType: 'easeInEaseOut'
	});
	
	firstRect.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 2500,
		animationType: 'easeInEaseOut'
	});
	
	secondRect.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 3500,
		animationType: 'easeInEaseOut'
	});
}

// interaction init func.
Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Yanda gelecek olan bileşik kesri tam sayılı kesre, tam sayılı kesri bileşik kesre çeviriniz ve kontrol ediniz.');
	
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

		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "180px")
						.css("top", "34px")
						.css("width", "150")
						.css("height", "76")
		
		$('#questionDiv').append('<p id="nom" ></p>');
		$('#nom').css("position", "absolute")
				.css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("top", "14px");
		$('#nom').html(nominator);
		
		if(nominator < 10)
		{
			$('#nom').css("left", "16px")
		}
		else
		{
			$('#nom').css("left", "10px")
		}
				
		$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "4px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
				
		$('#questionDiv').append('<p id="denom" ></p>');
		$('#denom').css("position", "absolute")
				.css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("top", "40px");
		$('#denom').html(denominator);
		if(denominator < 10)
		{
			$('#denom').css("left", "16px")
		}
		else
		{
			$('#denom').css("left", "10px")
		}

		
		$('#questionDiv').append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "46px")
				.css("top", "31px");
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "60px")
					.css("top", "22px")
					.css("text-align", "center");
					
		$('#textInput1').addClass('input');
	
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "102px")
					.css("top", "2px")
					.css("text-align", "center");
					
		$('#textInput2').addClass('input');
	
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "102px")
					.css("top", "44px")
					.css("text-align", "center");
	
		$('#textInput3').addClass('input');
	
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "100px")
				.css("top", "37px")
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
		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "170px")
						.css("top", "34px")
						.css("width", "128")
						.css("height", "76");
		
		$('#questionDiv').append('<p id="wh" ></p>');
		$('#wh').css("position", "absolute")
				.css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("top", "27px");
		$('#wh').html(wh);
		
		if(wh < 10)
		{
			$('#wh').css("left", "8px")
		}
		else
		{
			$('#wh').css("left", "-2px")
		}
		
		$('#questionDiv').append('<p id="nom" ></p>');
		$('#nom').css("position", "absolute")
				.css("font-size", 22)
				.css("font-family", "Helvetica Neue")
				.css("top", "14px");
		$('#nom').html(nom);
		
		if(nom < 10)
		{
			$('#nom').css("left", "36px")
		}
		else
		{
			$('#nom').css("left", "30px")
		}
		
		$('#questionDiv').append('<p id="denom" ></p>');
		$('#denom').css("position", "absolute")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("top", "40px");
		$('#denom').html(denom);
		
		if(denom < 10)
		{
			$('#denom').css("left", "36px")
		}
		else
		{
			$('#denom').css("left", "30px")
		}
		
	//	frac2 = new Path.Fraction(180, 72, null, null, 18, 1.8);
	$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "24px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
		
		$('#questionDiv').append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "68px")
				.css("top", "28px")
				.css("font-size", 22)
				.css("font-family", "Helvetica Neue");
		
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "90px")
					.css("top", "2px")
					.css("text-align", "center");
					
		$('#textInput2').addClass('input');
	
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("font-size", 22)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "90px")
					.css("top", "44px")
					.css("text-align", "center");
	
		$('#textInput3').addClass('input');
		
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "88px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	}
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "154px")
					.css("top", "240px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center")

										
	$(container).append('<div id="answer"></div>');
	$('#answer').css("position", "absolute")
					.css("left", "144px")
					.css("top", "164px")
					.css("width", "240px")
					.css("height", "30px")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
					.css("color", answerColor);
					
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "460px")
					.css("top", "240px");
	
	$(container).append('<button id="nextBtn" class="control_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "460px")
					.css("top", "240px");
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
						$('#textInput2').css("color", inputBoxAnswerColor);
						$('#textInput3').css("color", inputBoxAnswerColor);
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
}