
var animationFillColor = "#aaa";
var animationStrokeColor = "#333";
var animationStrokeWidth = 2;

var fillColor = "#bfe8ef";
var strokeColor = "#255b63";
var strokeWidth = 2;

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();

var createFraction = function (container, name, x, y, nominator, denominator, lineWidth) {
	if (lineWidth == null || lineWidth == undefined) {
		lineWidth = 34;
	}
	
	$(container).append('<div id="'+name+'"></div>').css("font-size", 16);
	$('#'+name).css("position", "absolute")
				.css("top", "100px")
				.css("left", "48px")
				.css("width", "40px")
				.css("height", "40px");
	
	$('#'+name).append('<div class="fractionLine"></div>');
	$('#'+name+'.fractionLine').css("position","absolute")
								.css("left", "16px")
								.css("top", "16px")
								.css("width", "20px")
								.css("height", "1px")
								.css("padding", 0)
								.css("border-top", "2px solid");
	
	// $('#'+name).append('<p id="animNom1">1</p>');
	// $('#animNom1').css("position", "absolute")
	// 			.css("text-align", "center")
	// 			.css("top", "0px")
	// 			.css("left", "10px")
	// 			.css("width", "34px");
	// 
	// $('#'+name).append('<p id="animDenom1">2</p>');
	// $('#animDenom1').css("position", "absolute")
	// 			.css("text-align", "center")
	// 			.css("top", "20px")
	// 			.css("left", "10px")
	// 			.css("width", "34px");
	// 			
	return $('#'+name);
}

Animation.init = function(container) {	
	var pie1, pie2, pie3;
	var pieGroup1 = new Group();
	
	var pie4, pie5, pie6;
	var pieGroup2 = new Group();

	pie1 = new Path.SegmentedCircle(new Point(0, 0), 30, 1, 2, animationFillColor, true);
	pie1.strokeColor = animationStrokeColor;
	pie1.strokeWidth = animationStrokeWidth;
	pieGroup1.addChild(pie1);
	
	pie2 = new Path.SegmentedCircle(new Point(100, 0), 30, 1, 2, animationFillColor, true);
	pie2.strokeColor = animationStrokeColor;
	pie2.strokeWidth = strokeWidth;
	pieGroup1.addChild(pie2);
	
	pie3 = new Path.SegmentedCircle(new Point(200, 0), 30, 1, 2, animationFillColor, true);
	pie3.strokeColor = animationStrokeColor;
	pie3.strokeWidth = animationStrokeWidth;
	pieGroup1.addChild(pie3);


	// fraction 1
	$(container).append('<div id="fraction1"></div>').css("font-size", 16);
	$('#fraction1').css("position", "absolute")
				.css("top", "100px")
				.css("left", "48px")
				.css("width", "40px")
				.css("height", "40px");
	
	$('#fraction1').append('<div id="animLine1"></div>');
	$('#animLine1').css("position","absolute")
				.css("left", "16px")
				.css("top", "16px")
				.css("width", "20px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#fraction1').append('<p id="animNom1">1</p>');
	$('#animNom1').css("position", "absolute")
				.css("text-align", "center")
				.css("top", "0px")
				.css("left", "10px")
				.css("width", "34px");
	
	$('#fraction1').append('<p id="animDenom1">2</p>');
	$('#animDenom1').css("position", "absolute")
				.css("text-align", "center")
				.css("top", "20px")
				.css("left", "10px")
				.css("width", "34px");

	
	// // fraction 2
	// $(container).append('<div id="fraction2"></div>').css("font-size", 16);
	// $('#fraction2').css("position", "absolute")
	// 			.css("top", "100px")
	// 			.css("left", "48px")
	// 			.css("width", "40px")
	// 			.css("height", "40px");
	// 
	// $('#fraction2').append('<div id="animLine2"></div>');
	// $('#animLine2').css("position","absolute")
	// 			.css("left", "16px")
	// 			.css("top", "16px")
	// 			.css("width", "20px")
	// 			.css("height", "1px")
	// 			.css("padding", 0)
	// 			.css("border-top", "2px solid");
	// 
	// $('#fraction2').append('<p id="animNom2">1</p>');
	// $('#animNom2').css("position", "absolute")
	// 			.css("text-align", "center")
	// 			.css("top", "0px")
	// 			.css("left", "10px")
	// 			.css("width", "34px");
	// 
	// $('#fraction2').append('<p id="animDenom2">2</p>');
	// $('#animDenom2').css("position", "absolute")
	// 			.css("text-align", "center")
	// 			.css("top", "20px")
	// 			.css("left", "10px")
	// 						.css("width", "34px");	
	// 
	
	
	
	
	pieGroup1.position = new Point(160,40);
	
	
	
	
	pie4 = new Path.SegmentedCircle(new Point(0, 0), 30, 1, 2, animationFillColor, true);
	pie4.strokeColor = animationStrokeColor;
	pie4.strokeWidth = animationStrokeWidth;
	pieGroup2.addChild(pie4);
	
	pie5 = new Path.SegmentedCircle(new Point(100, 0), 30, 1, 2, animationFillColor, true);
	pie5.strokeColor = animationStrokeColor;
	pie5.strokeWidth = strokeWidth;
	pieGroup2.addChild(pie5);
	
	pie6 = new Path.SegmentedCircle(new Point(200, 0), 30, 1, 2, animationFillColor, true);
	pie6.strokeColor = animationStrokeColor;
	pie6.strokeWidth = animationStrokeWidth;
	pieGroup2.addChild(pie6);
	
	pieGroup2.position = new Point(600,40);
	
	
	
	
	
	createFraction(container, "deneme", 200, 200, 2, 2, 34);
	
}




Interaction.getFramework = function () {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective("Yanda verilen kesre denk kesir oluşturmak\niçin boşluğa uygun sayıyı yazınız. Daha sonra\n“Kontrol” düğmesine basınız.");
	//animationInit(Raphael("animation_container"));
	interactionInit(container);
};

// function animationInit(paper) {
// 	var imgArray = [];
// 	
// 	imgArray.push(paper.image("/assets/animations/denk_kesir/1.png",0,0,512,185).attr({opacity: 0}));
// 	imgArray.push(paper.image("/assets/animations/denk_kesir/2.png",0,0,512,185).attr({opacity: 0}));
// 	imgArray.push(paper.image("/assets/animations/denk_kesir/3.png",0,0,512,185).attr({opacity: 0}));
// 	imgArray.push(paper.image("/assets/animations/denk_kesir/4.png",0,0,512,185).attr({opacity: 0}));
// 	
// 	var appearAnim = Raphael.animation({opacity: 1}, 1000, ">");
// 	var disappearAnim = Raphael.animation({opacity: 0}, 1000, "linear");
// 	
// 	for (i = 0; i < imgArray.length; i++) {
// 			imgArray[i].animate(appearAnim.delay(i*2000));
// 	}
// 		
// 	for (i = 0; i < imgArray.length - 1; i++) {
// 		imgArray[i].attr({opacity: 1});
// 		imgArray[i].animate(disappearAnim.delay((i+1)*2000));
// 		imgArray[i].attr({opacity: 0});
// 	}
// }

function interactionInit(container) {
	var smallFractionDenominator = Math.floor(Math.random() * 4) + 2;
	var smallFractionNominator = Math.floor(Math.random() * (smallFractionDenominator-1)) + 1;
	
	var factor = Math.floor(Math.random() * 2) + 2;
	
	var firstFractionNominator, firstFractionDenominator;
	var secondFractionNominator, secondFractionDenominator;
	
	if (Math.floor(Math.random() * 2) == 0) {
		firstFractionNominator = smallFractionNominator;
		firstFractionDenominator = smallFractionDenominator;
		secondFractionNominator = smallFractionNominator * factor;
		secondFractionDenominator = smallFractionDenominator * factor;
	} else {
		secondFractionNominator = smallFractionNominator;
		secondFractionDenominator = smallFractionDenominator;
		firstFractionNominator = smallFractionNominator * factor;
		firstFractionDenominator = smallFractionDenominator * factor;
	}
	
	// firstF
	$(container).append('<div id="firstF"></div>');
	$('#firstF').css("position", "absolute")
				.css("top", "185px")
				.css("left", "114px")
				.css("width", "40px")
				.css("height", "40px");
	
	$('#firstF').append('<div id="exLine"></div>');
	$('#exLine').css("position","absolute")
				.css("left", "12px")
				.css("top", "26px")
				.css("width", "30px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#firstF').append('<p id="nomm">'+firstFractionNominator+'</p>');
	$('#nomm').css("position", "absolute")
				.css("text-align", "center")
				.css("top", "0px")
				.css("left", "10px")
				.css("width", "34px")
				.css("font-size", 24);
	
	$('#firstF').append('<p id="denomm">'+firstFractionDenominator+'</p>');
	$('#denomm').css("position", "absolute")
				.css("text-align", "center")
				.css("top", "30px")
				.css("left", "10px")
				.css("width", "34px")
				.css("font-size", 24);
	
	
	
	missing = Math.floor(Math.random()*2);
	
	if (missing == 0) {
		$(container).append('<div id="secondF"></div>');
		$('#secondF').css("position", "absolute")
					.css("top", "185px")
					.css("left", "364px")
					.css("width", "40px")
					.css("height", "40px");
					
		$('#secondF').append('<div id="exLine2"></div>');
		$('#exLine2').css("position","absolute")
					.css("left", "12px")
					.css("top", "26px")
					.css("width", "30px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid");

		$('#secondF').append('<p id="denomm2">'+secondFractionDenominator+'</p>');
		$('#denomm2').css("position", "absolute")
					.css("text-align", "center")
					.css("top", "30px")
					.css("left", "10px")
					.css("width", "34px")
					.css("font-size", 24);
	} else {
		$(container).append('<div id="secondF"></div>');
		$('#secondF').css("position", "absolute")
					.css("top", "185px")
					.css("left", "364px")
					.css("width", "40px")
					.css("height", "40px");
			
		$('#secondF').append('<div id="exLine2"></div>');
		$('#exLine2').css("position","absolute")
					.css("left", "12px")
					.css("top", "26px")
					.css("width", "30px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid");

		$('#secondF').append('<p id="nomm2">'+secondFractionNominator+'</p>');
		$('#nomm2').css("position", "absolute")
					.css("text-align", "center")
					.css("top", "0px")
					.css("left", "10px")
					.css("width", "34px")
					.css("font-size", 24);
	}
	
	var shapeType = Math.floor(Math.random() * 3);	

	var pie1, pie2;
	
	switch (shapeType) {
		case 0:
			pie1 = new Path.SegmentedRectangle(82, 30, 120, 120, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator, firstFractionNominator, fillColor, true);
			pie1.strokeColor = strokeColor;
			pie1.strokeWidth = 2;
			
			pie2 = new Path.SegmentedRectangle(332, 30, 120, 120, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator, secondFractionNominator, fillColor, true);
			pie2.strokeColor = strokeColor;
			pie2.strokeWidth = 2;
			break;
			
		case 1:
			pie1 = new Path.SegmentedCircle(new Point(142, 90), 70, firstFractionNominator, firstFractionDenominator, fillColor, true);
			pie1.strokeColor = strokeColor;
			pie1.strokeWidth = 2;
			
			pie2 = new Path.SegmentedCircle(new Point(392, 90), 70, secondFractionNominator, secondFractionDenominator, fillColor, true);
			pie2.strokeColor = strokeColor;
			pie2.strokeWidth = 2;
			break;
		
		case 2:
			pie1 = new Path.SegmentedRectangle(52, 60, 180, 60, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator, firstFractionNominator, fillColor, true);
			pie1.strokeColor = strokeColor;
			pie1.strokeWidth = 2;
			
			pie2 = new Path.SegmentedRectangle(302, 60, 180, 60, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator, secondFractionNominator, fillColor, true);
			pie2.strokeColor = strokeColor;
			pie2.strokeWidth = 2;
			break;
	}
	
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "160px")
					.css("top", "260px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center");
	
	
	pie2.opacity = 0;
	
	$(container).append('<input id="textInput" type="text" class="inp" pattern="[0-9]*" maxlength="2" />');
	$('#textInput').css("position", "absolute")
					.css("left", "374px")
					.css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("text-align", "center");
	

	if (missing == 0) {
		$('#textInput').css("top", "175px");
	} else {
		$('#textInput').css("top", "215px");
	}
	
	$('#textInput').addClass('input');

							
	$(container).append('<input id="submitButton" type="button" class="control_button" />');
	$('#submitButton').css("position", "absolute")
						.css("right", "10px")
						.css("bottom", "10px");
	
	var tryCount = 0;
	
	submit = function(){
		

		    var val = $('#textInput').val();
			var intRegex = /^\d+$/;
		    if(!intRegex.test(val)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
				return;
			}
		
		var correct;
		
		if (missing == 0) {
			correct = firstFractionDenominator/firstFractionNominator == secondFractionDenominator/parseInt($('#textInput').val());
		} else {
			correct = firstFractionDenominator/firstFractionNominator == parseInt($('#textInput').val())/secondFractionNominator;
		}
		
		if (correct) {
			$('#statuss').get(0).className = "status_true";
			$('#statuss').html("Tebrikler!");
			pie2.animate({
				style: {
					opacity: 1
				},
				duration: 500,
				animationType: 'easeInEaseOut'
			});
			
			$('#submitButton').get(0).className = "next_button";
			$('#submitButton').click(function() {
				pie1.remove();
				pie2.remove();
				
				$('#statuss').remove();				
				$('#textInput').remove();
				$('#submitButton').remove();
				
				$('#firstF').remove();
				$('#secondF').remove();
				
				interactionInit(container);
			});
		} else {
			tryCount++;
			
			if (tryCount < 2) {
				$('#textInput').val("");
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Tekrar deneyiniz.");
			} else {
				if (missing == 0) {
					$('#textInput').val(secondFractionNominator);
				} else {
					$('#textInput').val(secondFractionDenominator);
				}
				
				pie2.animate({
					style: {
						opacity: 1
					},
					duration: 500,
					animationType: 'easeInEaseOut'
				});
				
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
				
				$('#submitButton').get(0).className = "next_button";
				$('#submitButton').click(function() {
					pie1.remove();
					pie2.remove();

					$('#statuss').remove();				
					$('#textInput').remove();
					$('#submitButton').remove();

					$('#firstF').remove();
					$('#secondF').remove();
					interactionInit(paper);
				});
			}
		}
	};
	
	
	$('#submitButton').click(submit);
	
	$("#textInput").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
		
}
