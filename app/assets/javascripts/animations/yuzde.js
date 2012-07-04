// JavaScript Document

var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};

var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(paper){
	
	Main.setObjective('Aşağıda verilen renkli bölgeyi kesir, ondalık kesir ve yüzde olarak yazınız.');
	var rect;
	var frag;
	var circ;

	
	var firstNominator; 		// firstNominator must be less than firstDenominator
	var firstDenominator; 	// firstDenominator -> 2,4,5,10,20
 	var secondNominator;
	var secondDenominator = 100;
	
	do
	{
		firstDenominator = Math.floor(Math.random()*50);
	}
	while(firstDenominator != 2 && firstDenominator != 4 && firstDenominator != 5 && firstDenominator != 10 && firstDenominator != 20 )
	
	do
	{
		firstNominator = Math.floor(Math.random()*50) ;
	}
	while(firstNominator >= firstDenominator || firstNominator == 0)
	
	
	frag = new Path.Fraction(10, 222, null, null, 18);
	frag = new Path.Fraction(70, 222, null, null, 18);
	circ = new Path.SegmentedCircle(new Point(60, 86), 56, firstNominator, firstDenominator);
	
	rect = new Path.SegmentedRectangle(360, 30, 120, 120, 10, 10);
	
	$('#interaction_container').append('<input id="textInput1" type="textbox" />');
	$('#textInput1').css("width", "27")
					.css("height", "25")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "10px")
					.css("top", "262px")
					.css("text-align", "center")
					.css("color", "green");
					
	$('#textInput1').addClass('input');
	$('#textInput1').addClass('active');
	
	$('#interaction_container').append('<input id="textInput2" type="textbox" />');
	$('#textInput2').css("width", "27")
					.css("height", "25")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "10px")
					.css("top", "314px")
					.css("text-align", "center")
					.css("color", "green");
					
	$('#textInput2').addClass('input');
	$('#textInput2').addClass('active');
	
	$('#interaction_container').append('<input id="textInput3" type="textbox" />');
	$('#textInput3').css("width", "27")
					.css("height", "25")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "70px")
					.css("top", "262px")
					.css("text-align", "center")
					.css("color", "green");
	
	$('#textInput3').addClass('input');
	$('#textInput3').addClass('active');
	
	$('#interaction_container').append('<input id="textInput5" type="textbox" />');
	$('#textInput5').css("width", "27")
					.css("height", "25")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "150px")
					.css("top", "288px")
					.css("text-align", "center")
					.css("color", "green");
	
	$('#textInput5').addClass('input');
	$('#textInput5').addClass('active');
					
	$('#interaction_container').append('<input id="textInput4" type="textbox" value = "100"  readonly="readonly"/>');
	$('#textInput4').css("width", "27")
					.css("height", "25")
					.css("font-size", 16)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "70px")
					.css("top", "314px")
					.css("text-align", "center")
					.css("border", "none");
					
	$('#interaction_container').append('<input id="textInput6" type="textbox" />');
	$('#textInput6').css("width", "27")
					.css("height", "25")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "230px")
					.css("top", "288px")
					.css("text-align", "center")
					.css("color", "green");
	
	$('#textInput6').addClass('input');
	$('#textInput6').addClass('active');

	
	$('#interaction_container').append('<p id="equal1" >=</p>');
	$('#equal1').css("position", "absolute")
				.css("left", "50px")
				.css("top", "272px");
				
	$('#interaction_container').append('<p id="equal2" >=</p>');
	$('#equal2').css("position", "absolute")
				.css("left", "112px")
				.css("top", "272px");
	
	$('#interaction_container').append('<p id="equal3" >=</p>');
	$('#equal3').css("position", "absolute")
				.css("left", "188px")
				.css("top", "272px");
	
	$('#interaction_container').append('<p id="zero" >0,</p>');
	$('#zero').css("position", "absolute")
				.css("left", "128px")
				.css("top", "272px");
				
	$('#interaction_container').append('<p id="percent_sign" >%</p>');
	$('#percent_sign').css("position", "absolute")
				.css("left", "204px")
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
			
							
	$('#interaction_container').append('<p id="percentage"></p>');
	$('#percentage').css("position", "absolute")
					.css("left", "344px")
					.css("top", "200px")
					.css("text-align", "right");
	
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
	
	var trial = 0;				
	submit = function()
		{
			if($('#textInput1').val() == "" || $('#textInput2').val() == "" || $('#textInput3').val() == "" || $('#textInput5').val() == "" || $('#textInput6').val() == "")
			{
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucukları doldurun!");
			}
			else
			{
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
			
			if(fractionn < 10)
			{
				fractionn *= 10;
			}
			
			
			if($('#textInput1').val() == firstNominatorAns && $('#textInput2').val() == firstDenominatorAns && $('#textInput3').val() == secondNominatorAns && 
				fractionn == fractionAns && $('#textInput6').val() == percentageAns)
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
				var percent = ConvertPercentage(firstNum, secondNum);
				$('#percentage').html("yüzde "+percent);
			}
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
			}
			else if(trial == 0)
			{
				trial += 1;
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Tekrar deneyin!");
			}
			}
		};
		
	$('#checkBtn').click(submit);
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
		circ.remove();
		rect.remove();
		Interaction.init(paper);
	});
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
