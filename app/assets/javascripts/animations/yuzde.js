// yuzde interaction

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
	Animation.container = container;
	var emptyRect, segmentedRect, rectt, rectt2;
	var fillColor = "#DD7500";
	
	// empty 4
	emptyRect = new Path.Rectangle(new Point(88.5, 50.5), new Size(80, 80));
	emptyRect.strokeColor = '#000';
	emptyRectstrokeWidth = 1;
	// empty-segmented 4
	segmentedRect = new Path.SegmentedRectangle(88.5, 50.5, 80, 80, 2, 2, 0, fillColor);
	// filled-segmented 4
	rectt = new Path.SegmentedRectangle(88.5, 50.5, 80, 80, 2, 2, 1, fillColor);
	// empty-segmented 100
	rectt2 = new Path.SegmentedRectangle(548.5, 24.5, 120, 120, 10, 10, 0, fillColor);
	// filled-segmented 100
	rectt3 = new Path.SegmentedRectangle(548.5, 24.5, 120, 120, 10, 10, 25, fillColor);
	
	
	$(container).append('<div id="exampleHolderDiv"></div>');
	$('#exampleHolderDiv').css("position", "absolute")
						.css("left", "208px")
						.css("top", "58px")
						.css("width", "330")
						.css("height", "100")
	
	// firstFractionDiv
	$('#exampleHolderDiv').append('<div id="firstFracDiv"></div>');
	$('#firstFracDiv').css("position", "absolute")
						.css("left", "4px")
						.css("top", "8px")
						.css("width", "44")
						.css("height", "80")
	
	$('#firstFracDiv').append('<p id="firstFracNom" >1</p>');
	$('#firstFracNom').css("position", "absolute")
						.css("font-size", 18)
						.css("top", "16px")
						.css("left", "16px");
	
	$('#firstFracDiv').append('<div id="firstFracLine"></div>')
	$('#firstFracLine').css("position","absolute")
						.css("left", "4px")
						.css("top", "40px")
						.css("width", "36px")
						.css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
	
	$('#firstFracDiv').append('<p id="firstFracDenom" >4</p>');
	$('#firstFracDenom').css("position", "absolute")
						.css("font-size", 18)
						.css("top", "46px")
						.css("left", "16px");
	
	// secondFractionDiv
	
	$('#exampleHolderDiv').append('<div id="secondFracDiv"></div>');
	$('#secondFracDiv').css("position", "absolute")
						.css("left", "52px")
						.css("top", "8px")
						.css("width", "82")
						.css("height", "80")
	
	$('#secondFracDiv').append('<p id="firstEq" >=</p>');
	$('#firstEq').css("position", "absolute")
				.css("left", "0px")
				.css("top", "32px")
				.css("font-size", 18);
	
	$('#secondFracDiv').append('<p id="secondFracNom" >1 x 25</p>');
	$('#secondFracNom').css("position", "absolute")
						.css("font-size", 18)
						.css("top", "16px")
						.css("left", "20px");
	
	$('#secondFracDiv').append('<div id="secondFracLine"></div>')
	$('#secondFracLine').css("position","absolute")
						.css("left", "18px")
						.css("top", "40px")
						.css("width", "60px")
						.css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
	
	$('#secondFracDiv').append('<p id="secondFracDenom" >4 x 25</p>');
	$('#secondFracDenom').css("position", "absolute")
						.css("font-size", 18)
						.css("top", "46px")
						.css("left", "20px");
						
	// thirdFractionDiv
	
	$('#exampleHolderDiv').append('<div id="thirdFracDiv"></div>');
	$('#thirdFracDiv').css("position", "absolute")
						.css("left", "138px")
						.css("top", "8px")
						.css("width", "58")
						.css("height", "80")
						
	$('#thirdFracDiv').append('<p id="secondEq" >=</p>');
	$('#secondEq').css("position", "absolute")
				.css("left", "0px")
				.css("top", "32px")
				.css("font-size", 18);
	
	$('#thirdFracDiv').append('<p id="thirdFracNom" >25</p>');
	$('#thirdFracNom').css("position", "absolute")
						.css("font-size", 18)
						.css("top", "16px")
						.css("left", "26px");
	
	$('#thirdFracDiv').append('<div id="thirdFracLine"></div>')
	$('#thirdFracLine').css("position","absolute")
						.css("left", "18px")
						.css("top", "40px")
						.css("width", "36px")
						.css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
	
	$('#thirdFracDiv').append('<p id="thirdFracDenom">100</p>');
	$('#thirdFracDenom').css("position", "absolute")
						.css("font-size", 18)
						.css("top", "46px")
						.css("left", "20px");
	
	// fracDiv
	
	$('#exampleHolderDiv').append('<div id="fracDiv"></div>');
	$('#fracDiv').css("position", "absolute")
						.css("left", "200px")
						.css("top", "8px")
						.css("width", "58")
						.css("height", "80")
						
	$('#fracDiv').append('<p id="thirdEq" >=</p>');
	$('#thirdEq').css("position", "absolute")
				.css("left", "0px")
				.css("top", "32px")
				.css("font-size", 18);
	
	$('#fracDiv').append('<p id="fracc" >0,25</p>');
	$('#fracc').css("position", "absolute")
				.css("left", "18px")
				.css("top", "28px")
				.css("font-size", 18);
				
	// percentDiv
	
	$('#exampleHolderDiv').append('<div id="percentDiv"></div>');
	$('#percentDiv').css("position", "absolute")
						.css("left", "262px")
						.css("top", "8px")
						.css("width", "58")
						.css("height", "80")
						
	$('#percentDiv').append('<p id="fourthEq" >=</p>');
	$('#fourthEq').css("position", "absolute")
				.css("left", "0px")
				.css("top", "30px")
				.css("font-size", 18);
	
	$('#percentDiv').append('<p id="percc" >%25</p>');
	$('#percc').css("position", "absolute")
				.css("left", "18px")
				.css("top", "28px")
				.css("font-size", 18);
	
	
	// percentageTextDiv
	
	$('#exampleHolderDiv').append('<div id="percentageTextDiv">yüzde yirmi beş</div>');
	$('#percentageTextDiv').css("position", "absolute")
					.css("width", "180px")
					.css("height", "20px")
					.css("font-size", 12)
					.css("left", "325px")
					.css("top", "112px")
					.css("text-align", "center");
					
	
	
	exampleHelper = {
		emptyRectOpacity: 0,
		segmentedRectOpacity: 0,
		firstRectOpacity: 0,
		firstFracOpacity: 0,
		secondFracOpacity: 0,
		thirdFracOpacity: 0,
		fracOpacity: 0,
		percentOpacity: 0,
		secondRectOpacity: 0,
		percentTextOpacity:0
	};
	
	exampleHelper.animate = Item.prototype.animate;
	
	Animation.onFrame = function(event){
	//	emptyRect.opacity = exampleHelper.emptyRectOpacity;
	//	segmentedRect.opacity = exampleHelper.segmentedRectOpacity;
	//	rectt.opacity = exampleHelper.firstRectOpacity;
		$('#firstFracDiv').css("opacity", exampleHelper.firstFracOpacity);
		$('#secondFracDiv').css("opacity", exampleHelper.secondFracOpacity);
		$('#thirdFracDiv').css("opacity", exampleHelper.thirdFracOpacity);
		$('#fracDiv').css("opacity", exampleHelper.fracOpacity);
		$('#percentDiv').css("opacity", exampleHelper.percentOpacity);
	//	rectt2.opacity = exampleHelper.secondRectOpacity;
		$('#percentageTextDiv').css("opacity", exampleHelper.percentTextOpacity);
	}
	
	emptyRect.opacity = 0;
	segmentedRect.opacity = 0;
	rectt.opacity = 0;
	rectt2.opacity = 0;
	rectt3.opacity = 0;
	
	emptyRect.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 500,
		animationType: 'easeInEaseOut'
	});	
	
	segmentedRect.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1500,
		animationType: 'easeInEaseOut',
		callback: function () {
			emptyRect.remove();
		}
	});
	
	rectt.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 2500,
		animationType: 'easeInEaseOut',
		callback: function () {
			segmentedRect.remove();
		}
	});
	
	exampleHelper.animate({
		style: {
			firstFracOpacity: 1
		},
		duration: 1500,
		delay: 4000,
		animationType: 'easeIn'
	//	animationType: 'easeOut'
	});
	
	exampleHelper.animate({
		style: {
			secondFracOpacity: 1
		},
		duration: 1500,
		delay: 5500,
		animationType: 'easeIn'
	//	animationType: 'easeOut'
	});
	
	exampleHelper.animate({
		style: {
			thirdFracOpacity: 1
		},
		duration: 1500,
		delay: 7000,
		animationType: 'easeIn'
	//	animationType: 'easeOut'
	});
	
	exampleHelper.animate({
		style: {
			fracOpacity: 1
		},
		duration: 1500,
		delay: 8500,
		animationType: 'easeIn'
	//	animationType: 'easeOut'
	});
	
	exampleHelper.animate({
		style: {
			percentOpacity: 1
		},
		duration: 1500,
		delay: 10000,
		animationType: 'easeIn'
	//	animationType: 'easeOut'
	});
	
	rectt2.animate({
		style: {
			opacity: 1
		},
		duration: 1500,
		delay: 11500,
		animationType: 'easeIn',
	});
	
	rectt3.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeIn',
		callback: function () {
			rectt2.remove();
		}
	});
	
	exampleHelper.animate({
		style: {
			percentTextOpacity: 1
		},
		duration: 1000,
		delay: 14000,
		animationType: 'easeIn'
	//	animationType: 'easeOut'
	});
	
}

// interaction init
Interaction.init = function(container){
	Interaction.container = container;
	
	// set interaction title
	Main.setObjective('Yanda verilen renkli bölgeyi kesir, ondalık kesir ve yüzde olarak yazınız.');
	
	// neccessary shape variables
	var rect, rect2, rect3;
	var frag1, frag2;
	var circ;
	var fillColor = "#00AF33";

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
		circ = new Path.SegmentedCircle(new Point(118.5, 76.5), 66, firstNominator, firstDenominator, fillColor);
	}
	else if(randomize % 3 == 1) // get square
	{
		if(firstDenominator == 20)
		{
			rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, 4, 5, firstNominator, fillColor);
		}
		else if(firstDenominator == 10)
		{
			rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, 2, 5, firstNominator, fillColor);
		}
		else if(firstDenominator == 5)
		{
			rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, 1, 5, firstNominator, fillColor);
		}
		else
		{
			rect2 = new Path.SegmentedRectangle(60.5, 15.5, 120, 120, firstDenominator/2, 2, firstNominator, fillColor);
		}
	}
	else // get rectangle
	{
		if(firstDenominator == 20)
		{
			rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80, 120, 4, 5, firstNominator, fillColor);
		}
		else if(firstDenominator == 10)
		{
			rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80, 120, 2, 5, firstNominator, fillColor);
		}
		else if(firstDenominator == 5)
		{
			rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80.5, 120, 1, 5, firstNominator, fillColor);
		}
		else
		{
			rect3 = new Path.SegmentedRectangle(60.5, 15.5, 80, 120, firstDenominator/2, 2, firstNominator, fillColor);
		}
	}
	
	rect = new Path.SegmentedRectangle(400.5, 15.5, 120, 120, 10, 10, 0);
	
	// creating neccessary html element
	$(container).append('<div id="questionDiv"></div>');
	$('#questionDiv').css("position", "absolute")
						.css("left", "54px")
						.css("top", "152px")
						.css("width", "266")
						.css("height", "100")
	
	$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput1').css("width", "32")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("height", "30")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "6px")
					.css("top", "16px")
					.css("text-align", "center");					
	$('#textInput1').addClass('input');
		
	$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "4px")
				.css("top", "52px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "6px")
					.css("top", "59px")
					.css("text-align", "center");
					
	$('#textInput2').addClass('input');
	
	$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "66px")
					.css("top", "16px")
					.css("text-align", "center");
	
	$('#textInput3').addClass('input');
		
	$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "64px")
				.css("top", "52px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	
	$('#questionDiv').append('<input id="textInput5" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput5').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "38px")
					.css("text-align", "center");
	
	$('#textInput5').addClass('input');
					
	$('#questionDiv').append('<p id="textInput4" >100<p/>');
	$('#textInput4').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "66px")
					.css("top", "64px")
					.css("text-align", "center")
					.css("border", "none");
					
	$('#questionDiv').append('<input id="textInput6" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput6').css("width", "32px")
					.css("height", "30px")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("position", "absolute")
					.css("left", "224px")
					.css("top", "38px")
					.css("text-align", "center");
	
	$('#textInput6').addClass('input');

	
	$('#questionDiv').append('<p id="equal1" >=</p>');
	$('#equal1').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "46px")
				.css("top", "44px");
				
	$('#questionDiv').append('<p id="equal2" >=</p>');
	$('#equal2').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "106px")
				.css("top", "44px");
	
	$('#questionDiv').append('<p id="equal3" >=</p>');
	$('#equal3').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "184px")
				.css("top", "44px");
	
	$('#questionDiv').append('<p id="zero" >0,</p>');
	$('#zero').css("font-size", 18)
				.css("position", "absolute")
				.css("left", "122px")
				.css("top", "42px");
				
	$('#questionDiv').append('<p id="percent_sign" >%</p>');
	$('#percent_sign').css("font-size", 18)
					.css("position", "absolute")
					.css("left", "202px")
					.css("top", "42px");
				
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
					.css("top", "260px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center")
			
							
	$(container).append('<div id="percentage"></div>');
	$('#percentage').css("position", "absolute")
					.css("width", "150px")
					.css("height", "20px")
					.css("font-size", 12)
					.css("left", "386px")
					.css("top", "142px")
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
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').css("color", inputBoxAnswerColor);
					$('#textInput2').css("color", inputBoxAnswerColor);
					$('#textInput3').css("color", inputBoxAnswerColor);
					$('#textInput5').css("color", inputBoxAnswerColor);
					$('#textInput6').css("color", inputBoxAnswerColor);
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
