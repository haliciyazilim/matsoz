
var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.init = function(container){
	Main.setObjective("Aşağıdaki verilen kesre denk kesir oluşturmak\niçin boşluğa uygun sayıyı yazınız. Daha sonra\n“Kontrol” düğmesine basınız.");
	animationInit(Raphael("animation_container"));
	interactionInit(Raphael(container));
};

function animationInit(paper) {
	var imgArray = [];
	
	imgArray.push(paper.image("/assets/animations/denk_kesir/1.png",0,0,512,185).attr({opacity: 0}));
	imgArray.push(paper.image("/assets/animations/denk_kesir/2.png",0,0,512,185).attr({opacity: 0}));
	imgArray.push(paper.image("/assets/animations/denk_kesir/3.png",0,0,512,185).attr({opacity: 0}));
	imgArray.push(paper.image("/assets/animations/denk_kesir/4.png",0,0,512,185).attr({opacity: 0}));
	
	var appearAnim = Raphael.animation({opacity: 1}, 1000, ">");
	var disappearAnim = Raphael.animation({opacity: 0}, 1000, "linear");
	
	for (i = 0; i < imgArray.length; i++) {
			imgArray[i].animate(appearAnim.delay(i*2000));
	}
		
	for (i = 0; i < imgArray.length - 1; i++) {
		imgArray[i].attr({opacity: 1});
		imgArray[i].animate(disappearAnim.delay((i+1)*2000));
		imgArray[i].attr({opacity: 0});
	}
}

function interactionInit(paper) {
	paper.customAttributes.segment = function (x, y, r, a1, a2) {
	                    var flag = (a2 - a1) > 180,
	                        clr = (a2 - a1) / 360;
	                    a1 = (a1 % 360) * Math.PI / 180;
	                    a2 = (a2 % 360) * Math.PI / 180;
	                    return {
	                        path: [["M", x, y], ["l", r * Math.cos(a1), r * Math.sin(a1)], ["A", r, r, 0, +flag, 1, x + r * Math.cos(a2), y + r * Math.sin(a2)], ["z"]],
	                    };
	                };
	
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
	
	//$('#interaction_container').append('<div class="objective"></div>');
	
	paper.fraction(114, 165, firstFractionNominator, firstFractionDenominator, 24);
	
	
	missing = Math.floor(Math.random()*2);
	
	if (missing == 0) {
		paper.fraction(364, 165, null, secondFractionDenominator, 24);
	} else {
		paper.fraction(364, 165, secondFractionNominator, null, 24);
	}
	
	var shapeType = Math.floor(Math.random() * 3);	

	var pie1, pie2;
	
	switch (shapeType) {
		case 0:
			pie1 = paper.segmentedRectangle(95,40,70, 70, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
				pie1[i].attr({fill: "#f55"});
			}
	
			pie2 = paper.segmentedRectangle(345,40,70, 70, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
				pie2[i].attr({fill: "#f55"});
			}
			break;
			
		case 1:
			pie1 = paper.segmentedCircle(130,70,50,firstFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
				pie1[i].attr({fill: "#f55"});
			}
			
			pie2 = paper.segmentedCircle(380,70,50,secondFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
				pie2[i].attr({fill: "#f55"});
			}
		break;
		
		case 2:
			pie1 = paper.segmentedRectangle(80,55,100, 50, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
				pie1[i].attr({fill: "#f55"});
			}
	
			pie2 = paper.segmentedRectangle(330,55,100, 50, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
				pie2[i].attr({fill: "#f55"});
			}
			break;
	}
	
	var correctText = paper.text(160,260, "Tebrikler!").attr({fill: "#5a5", opacity: 0, "font-size": 24});
	var retryText = paper.text(160,260, "Tekrar Deneyiniz!").attr({fill: "#f55", opacity: 0, "font-size": 24});
	var failText = paper.text(160,260, "Olmadı!").attr({fill: "#f55", opacity: 0, "font-size": 24});
	var errorText = paper.text(160,260, "Lütfen kutucuğa bir sayı giriniz").attr({fill: "#f55", opacity: 0, "font-size": 16});
	
	pie2.attr({"opacity": 0});
	
	$('#interaction_container').append('<input id="textInput" type="textbox" />');
	$('#textInput').css("width", "27")
					.css("height", "25")
					.css("font-size", 24)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "366px");
					
	if (missing == 0) {
		$('#textInput').css("top", "230px");
	} else {
		$('#textInput').css("top", "290px");
	}
	
	$('#textInput').addClass('input');
	$('#textInput').addClass('active');

							
	$('#interaction_container').append('<input id="submitButton" type="button" value="Kontrol" />');
	$('#submitButton').css("position", "absolute")
						.css("width", "140px")
						.css("left", "312px")
						.css("top", "330px");
	$('#submitButton').addClass('input');
	
	var tryCount = 0;
	
	submit = function(){
		

		    var val = $('#textInput').val();
			var intRegex = /^\d+$/;
		    if(!intRegex.test(val)) {
				retryText.animate({opacity: 0}, 500);
				failText.animate({opacity: 0}, 500);
				correctText.animate({opacity: 0}, 500);
				errorText.animate({opacity: 1}, 500);
				return;
			}
		
		var correct;
		
		if (missing == 0) {
			correct = firstFractionDenominator/firstFractionNominator == secondFractionDenominator/parseInt($('#textInput').val());
		} else {
			correct = firstFractionDenominator/firstFractionNominator == parseInt($('#textInput').val())/secondFractionNominator;
		}
		
		if (correct) {
			errorText.animate({opacity: 0}, 500);
			retryText.animate({opacity: 0}, 500);
			correctText.animate({opacity: 1}, 500);
			pie2.animate({opacity: 1}, 500);
			
			$('#submitButton').val("Sonraki");
			$('#submitButton').click(function() {
				paper.clear();
				$('#textInput').remove();
				$('#submitButton').remove();
				interactionInit(paper);
			});
		} else {
			tryCount++;
			
			if (tryCount < 2) {
				$('#textInput').val("");
				errorText.animate({opacity: 0}, 500);
				retryText.animate({opacity: 1}, 500);
			} else {
				if (missing == 0) {
					$('#textInput').val(secondFractionNominator);
				} else {
					$('#textInput').val(secondFractionDenominator);
				}
				
				pie2.animate({opacity: 1}, 500);
				errorText.animate({opacity: 0}, 500);
				retryText.animate({opacity: 0}, 500);
				failText.animate({opacity: 1}, 500);
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
