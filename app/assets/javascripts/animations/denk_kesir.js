
$(document).ready(function() {
	animationInit();
	interactionInit();
});

function animationInit() {
	var paper = Raphael("animation_container");
	
	var imgArray = [];
	
	imgArray.push(paper.image("/assets/animations/denk_kesir/1.png",0,0,512,185).attr({opacity: 0}));
	imgArray.push(paper.image("/assets/animations/denk_kesir/2.png",0,0,512,185).attr({opacity: 0}));
	imgArray.push(paper.image("/assets/animations/denk_kesir/3.png",0,0,512,185).attr({opacity: 0}));
	imgArray.push(paper.image("/assets/animations/denk_kesir/4.png",0,0,512,185).attr({opacity: 0}));
	
	var appearAnim = Raphael.animation({opacity: 1}, 1000);
	var waitAnim = Raphael.animation({}, 1000);
	var disappearAnim = Raphael.animation({opacity: 0}, 1000);

	// imgArray[0].animate({opacity: 1}, 1000, function(){
	// 	imgArray[0].animate(
	// 	{opacity: 1}, 1000, function() {
	// 		imgArray[0].animate(
	// 		{opacity: 0}, 1000)
	// 	})
	// });
	
	for (i = 0; i < imgArray.length; i++) {
		imgArray[i].animate(appearAnim.delay(i*2000));
	}
	
	// for (i = 0; i < imgArray.length - 1; i++) {
	// 	imgArray[i].animate(disappearAnim.delay((i+1)*2000));
	// }
}

function interactionInit() {
	Raphael.fn.fraction = function(top_x, top_y, nom, denom,scale) {
		var st = this.set();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		
		if (nom) {
			pay=this.text(top_x+scale*5/7, top_y, nom);
			pay.attr({"font-size" :scale});
			st.push(pay);	
		}
		
		if (denom) {
			payda=this.text(top_x+scale*5/7, c2+scale, denom);
			payda.attr({"font-size" :scale});
			st.push(payda);			
		}

		var kesirCizgi="M"+top_x+" "+c2+"L"+c3+" "+c2;
		st.push(this.path(kesirCizgi));
		return st;
	};
	
	Raphael.fn.segmentedUmbrella = function (cx, cy, r, numberOfSegments) {
		var st = this.set();

		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(-i)/numberOfSegments - 90, 360*(-i-1)/numberOfSegments - 90]
				})
			);
		}
		
		return st;
	}
	
	Raphael.fn.segmentedCircle = function (cx, cy, r, numberOfSegments) {
		var st = this.set();

		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(i)/numberOfSegments - 90, 360*(i+1)/numberOfSegments - 90]
				})
			);
		}
		
		return st;
	}
	
	Raphael.fn.segmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments) {
		var st = this.set();
				
		for (i = 0; i < horizontalSegments; i++) {
			for (j = 0; j < verticalSegments; j++) {
				st.push(
					this.rect(x + i * width/horizontalSegments, y + j * height/verticalSegments, width/horizontalSegments, height/verticalSegments)
				);
			}
		}
		
		return st;
	}
	
	//var paper = Raphael(490, 251, 512, 384);
	var paper = Raphael("interaction_container");
	
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
	
	paper.text(256,50,"Aşağıdaki verilen kesre denk kesir oluşturmak\niçin boşluğa uygun sayıyı yazınız. Daha sonra\n“Kontrol” düğmesine basınız.").attr({"font-size": 16});
	paper.fraction(114, 250, firstFractionNominator, firstFractionDenominator, 24);
	
	
	missing = Math.floor(Math.random()*2);
	
	if (missing == 0) {
		paper.fraction(364, 250, null, secondFractionDenominator, 24);
	} else {
		paper.fraction(364, 250, secondFractionNominator, null, 24);
	}
	
	var shapeType = Math.floor(Math.random() * 3);	

	var pie1, pie2;
	
	switch (shapeType) {
		case 0:
			pie1 = paper.segmentedRectangle(95,125,70, 70, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
				pie1[i].attr({fill: "#f55"});
			}
	
			pie2 = paper.segmentedRectangle(345,125,70, 70, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
				pie2[i].attr({fill: "#f55"});
			}
			break;
			
		case 1:
			pie1 = paper.segmentedCircle(130,160,50,firstFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
				pie1[i].attr({fill: "#f55"});
			}
			
			pie2 = paper.segmentedCircle(380,160,50,secondFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
				pie2[i].attr({fill: "#f55"});
			}
		break;
		
		case 2:
			pie1 = paper.segmentedRectangle(80,135,100, 50, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < firstFractionNominator; i++) {
				pie1[i].attr({fill: "#f55"});
			}
	
			pie2 = paper.segmentedRectangle(330,135,100, 50, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator).attr({fill: "#fef8ec"});
			for (i = 0; i < secondFractionNominator; i++) {
				pie2[i].attr({fill: "#f55"});
			}
			break;
	}
	
	var correctText = paper.text(200,350, "Tebrikler!").attr({fill: "#5a5", opacity: 0, "font-size": 24});
	var retryText = paper.text(200,350, "Tekrar Deneyiniz!").attr({fill: "#f55", opacity: 0, "font-size": 24});
	var failText = paper.text(200,350, "Olmadı!").attr({fill: "#f55", opacity: 0, "font-size": 24});
	var errorText = paper.text(200,350, "Lütfen kutucuğa bir sayı giriniz").attr({fill: "#f55", opacity: 0, "font-size": 24});
	
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
	
	$('#textInput').keyup(function(){
	    var val = $(this).val();
		var intRegex = /^\d+$/;
	    if(intRegex.test(val)) {
			$('#submitButton').removeAttr("disabled");
		} else {
			$('#submitButton').attr("disabled", "disabled");
		}
	});
						
	$('#interaction_container').append('<input id="submitButton" type="button" value="Kontrol" />');
	$('#submitButton').css("position", "absolute")
						.css("width", "140px")
						.css("left", "312px")
						.css("top", "330px");
	$('#submitButton').addClass('input');
	$('#submitButton').attr("disabled", "disabled");
	
	var tryCount = 0;
	
	submit = function(){
		var correct;
		
		if (missing == 0) {
			correct = firstFractionDenominator/firstFractionNominator == secondFractionDenominator/parseInt($('#textInput').val());
		} else {
			correct = firstFractionDenominator/firstFractionNominator == parseInt($('#textInput').val())/secondFractionNominator;
		}
		
		if (correct) {
			retryText.animate({opacity: 0}, 500);
			correctText.animate({opacity: 1}, 500);
			pie2.animate({opacity: 1}, 500);
			
			$('#submitButton').val("Sonraki");
			$('#textInput').attr("disabled", "disabled");
			$('#submitButton').click(function() {
				paper.clear();
				$('#textInput').remove();
				$('#submitButton').remove();
				interactionInit();
			});
		} else {
			tryCount++;
			
			if (tryCount < 2) {
				$('#textInput').val("");
				$('#submitButton').attr("disabled", "disabled");
				retryText.animate({opacity: 1}, 500);
			} else {
				if (missing == 0) {
					$('#textInput').val(secondFractionNominator);
				} else {
					$('#textInput').val(secondFractionDenominator);
				}
				
				pie2.animate({opacity: 1}, 500);
				retryText.animate({opacity: 0}, 500);
				failText.animate({opacity: 1}, 500);
				$('#submitButton').removeAttr("disabled");
				$('#submitButton').val("Sonraki");
				$('#textInput').attr("disabled", "disabled");
				$('#submitButton').click(function() {
					paper.clear();
					$('#textInput').remove();
					$('#submitButton').remove();
					interactionInit();
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