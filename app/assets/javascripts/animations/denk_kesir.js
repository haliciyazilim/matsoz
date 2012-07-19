
var Animation = function(){};Animation();
var Interaction =function(){};Interaction();

Interaction.getFramework = function () {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective("Yanda verilen kesre denk kesir oluşturmak\niçin boşluğa uygun sayıyı yazınız. Daha sonra\n“Kontrol” düğmesine basınız.");
	//animationInit(Raphael("animation_container"));
	interactionInit(container);
};

// function animationInit(paper) {
	// var imgArray = [];
	// 
	// imgArray.push(paper.image("/assets/animations/denk_kesir/1.png",0,0,512,185).attr({opacity: 0}));
	// imgArray.push(paper.image("/assets/animations/denk_kesir/2.png",0,0,512,185).attr({opacity: 0}));
	// imgArray.push(paper.image("/assets/animations/denk_kesir/3.png",0,0,512,185).attr({opacity: 0}));
	// imgArray.push(paper.image("/assets/animations/denk_kesir/4.png",0,0,512,185).attr({opacity: 0}));
	// 
	// var appearAnim = Raphael.animation({opacity: 1}, 1000, ">");
	// var disappearAnim = Raphael.animation({opacity: 0}, 1000, "linear");
	// 
	// for (i = 0; i < imgArray.length; i++) {
	// 		imgArray[i].animate(appearAnim.delay(i*2000));
	// }
	// 	
	// for (i = 0; i < imgArray.length - 1; i++) {
	// 	imgArray[i].attr({opacity: 1});
	// 	imgArray[i].animate(disappearAnim.delay((i+1)*2000));
	// 	imgArray[i].attr({opacity: 0});
	// }
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
				.css("top", "165px")
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
//		paper.fraction(364, 165, null, secondFractionDenominator, 24);
		$(container).append('<div id="secondF"></div>');
		$('#secondF').css("position", "absolute")
					.css("top", "165px")
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
//		paper.fraction(364, 165, secondFractionNominator, null, 24);
		$(container).append('<div id="secondF"></div>');
		$('#secondF').css("position", "absolute")
					.css("top", "165px")
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
//			pie1 = paper.segmentedRectangle(95,40,70, 70, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
//				pie1[i].attr({fill: "#f55"});
			}
	
//			pie2 = paper.segmentedRectangle(345,40,70, 70, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
//				pie2[i].attr({fill: "#f55"});
			}
			break;
			
		case 1:
//			pie1 = paper.segmentedCircle(130,70,50,firstFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
//				pie1[i].attr({fill: "#f55"});
			}
			
//			pie2 = paper.segmentedCircle(380,70,50,secondFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
//				pie2[i].attr({fill: "#f55"});
			}
		break;
		
		case 2:
//			pie1 = paper.segmentedRectangle(80,55,100, 50, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
//				pie1[i].attr({fill: "#f55"});
			}
	
//			pie2 = paper.segmentedRectangle(330,55,100, 50, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
//				pie2[i].attr({fill: "#f55"});
			}
			break;
	}
	
//	var correctText = paper.text(160,260, "Tebrikler!").attr({fill: "#5a5", opacity: 0, "font-size": 24});
//	var retryText = paper.text(160,260, "Tekrar Deneyiniz!").attr({fill: "#f55", opacity: 0, "font-size": 24});
//	var failText = paper.text(160,260, "Olmadı!").attr({fill: "#f55", opacity: 0, "font-size": 24});
//	var errorText = paper.text(160,260, "Lütfen kutucuğa bir sayı giriniz").attr({fill: "#f55", opacity: 0, "font-size": 16});
	
//	pie2.attr({"opacity": 0});
	
	$(container).append('<input id="textInput" type="textbox" />');
	$('#textInput').css("width", "27")
					.css("height", "25")
					.css("font-size", 24)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "374px");
					
	if (missing == 0) {
		$('#textInput').css("top", "145px");
	} else {
		$('#textInput').css("top", "205px");
	}
	
	$('#textInput').addClass('input');
	$('#textInput').addClass('active');

							
	$(container).append('<input id="submitButton" type="button" value="Kontrol" />');
	$('#submitButton').css("position", "absolute")
						.css("width", "140px")
						.css("left", "312px")
						.css("top", "220px");
	$('#submitButton').addClass('input');
	
	var tryCount = 0;
	
	submit = function(){
		

		    var val = $('#textInput').val();
			var intRegex = /^\d+$/;
		    if(!intRegex.test(val)) {
//				retryText.animate({opacity: 0}, 500);
//				failText.animate({opacity: 0}, 500);
//				correctText.animate({opacity: 0}, 500);
//				errorText.animate({opacity: 1}, 500);
				return;
			}
		
		var correct;
		
		if (missing == 0) {
			correct = firstFractionDenominator/firstFractionNominator == secondFractionDenominator/parseInt($('#textInput').val());
		} else {
			correct = firstFractionDenominator/firstFractionNominator == parseInt($('#textInput').val())/secondFractionNominator;
		}
		
		if (correct) {
//			errorText.animate({opacity: 0}, 500);
//			retryText.animate({opacity: 0}, 500);
//			correctText.animate({opacity: 1}, 500);
//			pie2.animate({opacity: 1}, 500);
			
			$('#submitButton').val("Sonraki");
			$('#submitButton').click(function() {
//				paper.clear();
				$('#textInput').remove();
				$('#submitButton').remove();
				interactionInit(paper);
			});
		} else {
			tryCount++;
			
			if (tryCount < 2) {
				$('#textInput').val("");
//				errorText.animate({opacity: 0}, 500);
//				retryText.animate({opacity: 1}, 500);
			} else {
				if (missing == 0) {
					$('#textInput').val(secondFractionNominator);
				} else {
					$('#textInput').val(secondFractionDenominator);
				}
				
//				pie2.animate({opacity: 1}, 500);
//				errorText.animate({opacity: 0}, 500);
//				retryText.animate({opacity: 0}, 500);
//				failText.animate({opacity: 1}, 500);
				$('#submitButton').val("Sonraki");
				$('#submitButton').click(function() {
					paper.clear();
					$('#textInput').remove();
					$('#submitButton').remove();
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
