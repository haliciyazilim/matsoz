// JavaScript Document

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
	
	$(container).append('<div id="animDiv"></div>')
	$('#animDiv').css("position", "absolute")
				.css("top", "10px")
				.css("left", "240px")
				.css("width", "280px")
				.css("height", "140px")
				.css("font-size", 24)
	// five square			
	$('#animDiv').append('<p id="five">5</p>')
	$('#five').css("position", "absolute")
				.css("top", "10px")
				.css("left", "150px")
				.css("opacity", 0)
				.delay(1000)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<p id="fiveT">5\'in karesi:</p>')
	$('#fiveT').css("position", "absolute")
				.css("top", "42px")
				.css("left", "20px")
				.css("opacity", 0)
				.delay(2000)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<p id="fiveE">5 x 5</p>')
	$('#fiveE').css("position", "absolute")
				.css("top", "42px")
				.css("left", "146px")
				.css("opacity", 0)
				.delay(3000)
				.animate({opacity:1}, 1000)
	$('#animDiv').append('<p id ="eq2">=</p>');
	$('#eq2').css("position", "absolute")
				.css("left", "210px")
				.css("top", "42px")
				.css("opacity", 0)
				.delay(5000)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<div id ="fs"><p id="f">5</p><p id="s">2</p></div>');
	$('#fs').css("position", "absolute")
				.css("left", "240px")
				.css("top", "42px")
			//	.css("opacity", 0)
	$('#f').css("position", "absolute")
				.css("left", "0px")
				.css("top", "0px")
				.css("opacity", 0)
				.delay(5000)
				.animate({opacity:1}, 1000)
	$('#s').css("position", "absolute")
				.css("left", "14px")
				.css("top", "-6px")
				.css("font-size", 16)
				.css("opacity", 0)
				.delay(7000)
				.animate({opacity:1}, 500)
	
	$('#animDiv').append('<img id="curv1" src="/assets/animations/curve.png" />')	
	$('#curv1').css("position", "absolute")
				.css("top", "60px")
				.css("left", "142px")
				.css("width", "58px")
				.css("height", "14px")
				.css("opacity", 0)
				.delay(4000)
				.animate({opacity:1}, 1000)
	$('#animDiv').append('<p id="tw">2 tane</p>')
	$('#tw').css("position", "absolute")
				.css("top", "74px")
				.css("left", "154px")
				.css("font-size", 12)
				.css("opacity", 0)
				.delay(4000)
				.animate({opacity:1}, 1000)
	
	// five cube
	
	$('#animDiv').append('<p id="fiveT2">5\'in küpü:</p>')
	$('#fiveT2').css("position", "absolute")
				.css("top", "106px")
				.css("left", "14px")
				.css("opacity", 0)
				.delay(8500)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<p id="fiveE2">5 x 5 x 5</p>')
	$('#fiveE2').css("position", "absolute")
				.css("top", "106px")
				.css("left", "134px")
				.css("opacity", 0)
				.delay(9500)
				.animate({opacity:1}, 1000)
	$('#animDiv').append('<p id ="eq3">=</p>');
	$('#eq3').css("position", "absolute")
				.css("left", "234px")
				.css("top", "106px")
				.css("opacity", 0)
				.delay(11500)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<div id ="fs2"><p id="f2">5</p><p id="s2">3</p></div>');
	$('#fs2').css("position", "absolute")
				.css("left", "264px")
				.css("top", "106px")
	$('#f2').css("position", "absolute")
				.css("left", "0px")
				.css("top", "0px")
				.css("opacity", 0)
				.delay(11500)
				.animate({opacity:1}, 1000)
	$('#s2').css("position", "absolute")
				.css("left", "14px")
				.css("top", "-6px")
				.css("font-size", 16)
				.css("opacity", 0)
				.delay(13500)
				.animate({opacity:1}, 500)
	$('#animDiv').append('<img id="curv2" src="/assets/animations/curve.png" />')	
	$('#curv2').css("position", "absolute")
				.css("top", "124px")
				.css("left", "130px")
				.css("width", "96px")
				.css("height", "14px")
				.css("opacity", 0)
				.delay(10500)
				.animate({opacity:1}, 1000)
	$('#animDiv').append('<p id="th">3 tane</p>')
	$('#th').css("position", "absolute")
				.css("top", "140px")
				.css("left", "158px")
				.css("font-size", 12)
				.css("opacity", 0)
				.delay(10500)
				.animate({opacity:1}, 1000)
	
	var arcGroup = new Group();
	var arc = new Path.Arc(new Point(420.5, 80.5), new Point(480.5, 78.5), new Point(490.5, 56.5))
	arc.strokeColor = "black";
	var line1 = new Path.Line(new Point(490.5, 56.5), new Point(482.5, 62.5));
	line1.strokeColor = "black";
	var line2 = new Path.Line(new Point(490.5, 56.5), new Point(496.5, 64.5));
	line2.strokeColor = "black";
	arcGroup.addChild(arc);
	arcGroup.addChild(line1);
	arcGroup.addChild(line2);
	arcGroup.opacity = 0;
	
	var arcGroup2 = arcGroup.clone();
	arcGroup2.strokeColor = "black";
	arcGroup2.position = new Point(470.5, 140.5);
	arcGroup2.scale(1.2);
	arcGroup2.opacity = 0;
	
	arcGroup.animate({
		style:{
			opacity: 1,
		},
		duration: 1000,
		delay: 6000,
		animationType: 'easeInEaseOut'
	});
	
	arcGroup2.animate({
		style:{
			opacity: 1,
		},
		duration: 1000,
		delay: 12500,
		animationType: 'easeInEaseOut'
	});
	
	
	
}

// interaction init
Interaction.init = function(container){
	Interaction.container = container;
	
	var randomize = Math.floor(Math.random() * 2) + 1;
	
	if(randomize == 1){
		Main.setObjective('Yandaki ifadenin açılımını yazınız.');
		
		var num = Math.floor(Math.random() * 9) + 2;
		var power = Math.floor(Math.random() * 2) + 2;
		
		// creating neccessary html element
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "52px")
						.css("width", "266")
						.css("height", "100")
		$('#questionDiv').append('<p id ="num"></p>');
		$('#num').css("position", "absolute")
				.css("right", "232px")
				.css("top", "40px")
				.css("font-size", 24)
				.css("text-align", "right")
		$('#questionDiv').append('<p id ="power"></p>');
		$('#power').css("position", "absolute")
				.css("left", "34px")
				.css("top", "30px")
				.css("font-size", 16)
		$('#questionDiv').append('<p id ="eq">=</p>');
		$('#eq').css("position", "absolute")
				.css("left", "50px")
				.css("top", "40px")
				.css("font-size", 24)
				.css("text-align", "right")
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="8"/>');
		$('#textInput1').css("width", "100")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "72px")
						.css("top", "36px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		
		$('#num').html(num);
		$('#power').html(power);
		
	}
	else{
		Main.setObjective('Yandaki ifadeyi üslü biçimde yazınız.');
		
		var num = Math.floor(Math.random() * 9) + 2;
		var power = Math.floor(Math.random() * 2) + 2;
		
		// creating neccessary html element
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "52px")
						.css("width", "266")
						.css("height", "100")
		$('#questionDiv').append('<p id="ques"></p>');
		$('#ques').css("position", "absolute")
						.css("top", "40px")
						.css("right", "200px")
						.css("text-align", "right")
						.css("font-size", 24)
		$('#questionDiv').append('<p id ="eq">=</p>');
		$('#eq').css("position", "absolute")
				.css("left", "70px")
				.css("top", "40px")
				.css("font-size", 24)
				.css("text-align", "right")
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "90px")
						.css("top", "36px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="1"/>');
		$('#textInput2').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "122px")
						.css("top", "6px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		
		var quesStr;
		if(power == 2)
			quesStr = ""+num+"x"+num;
		else
			quesStr = ""+num+"x"+num+"x"+num;
		$('#ques').html(quesStr);
			
	}
	
	$(container).append('<button id="checkBtn" class="control_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "30px");
//	$('#checkBtn').hide();
	
	$(container).append('<button id="nextBtn" class="next_button"></button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "30px");
	$('#nextBtn').hide();
	
	$(container).append('<div id="statuss" class="status_true"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "144px")
					.css("top", "258px")
					.css("width", "240px")
					.css("text-align", "center")
					.css("height", "30px");
	
	var trial = 0;				
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if(trial == 2)
			return;
		
		var ans1, ans2;
		var answer1, answer2;
		if(randomize == 1){
			ans1 = $('#textInput1').val();
			ans1 = ans1.replace(/ /g, "");
			if(power == 2)
				answer1 = ""+num+"x"+num;
			else
				answer1 = ""+num+"x"+num+"x"+num;

			if(ans1 == ""){
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucukları doldurunuz.");
			}
			else {
				if(ans1.search("x") == -1){
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen çarpma işlemini \'x\' işareti ile gösteriniz.");	
				}
				else{
					if(ans1 == answer1){
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						$('#checkBtn').hide();
						$('#nextBtn').show();
					}
					else if(trial == 1){	
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
						$('#textInput1').val(answer1);
						$('#textInput1').css("color", inputBoxAnswerColor);
						$('#checkBtn').hide();
						$('#nextBtn').show();
						trial += 1;
					}
					else if(trial == 0){		
						trial += 1;
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Tekrar deneyiniz.");
					}
				}
			}
		}
		else{
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			answer1 = num;
			answer2 = power;
			if(ans1 == "" || ans2 == "" || !Util.isNumber(ans1) || !Util.isNumber(ans2)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");	
			}
			else{
				if(ans1 == answer1 && ans2 == answer2){
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
				}
				else if(trial == 1){	
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').val(answer1);
					$('#textInput2').val(answer2);
					$('#textInput1').css("color", inputBoxAnswerColor);
					$('#textInput2').css("color", inputBoxAnswerColor);
					$('#checkBtn').hide();
					$('#nextBtn').show();
					trial += 1;
				}
				else if(trial == 0){		
					trial += 1;
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Tekrar deneyiniz.");
				}
			}
		}
	}
	
	// checkBtn click func. -> call submit	
	$('#checkBtn').click(submit);
	
	$('#nextBtn').click(function() {
		var a = $('#interaction_canvas')
		$(Interaction.container).html("");
		$(Interaction.container).html(a);
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
}