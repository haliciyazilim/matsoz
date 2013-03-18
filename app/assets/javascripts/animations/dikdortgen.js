
var Interaction = function(){};Interaction();
var Animation = function(){};Animation();

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.images = [{
	id: "fullImage",
	src: '/assets/animations/dikdortgen/dikdortgen01.png'
},
{
	id: "cornerA",
	src: '/assets/animations/dikdortgen/soru_dikdortgen_kose_a.png'
},
{
	id: "cornerB",
	src: '/assets/animations/dikdortgen/soru_dikdortgen_kose_b.png'
},
{
	id: "cornerC",
	src: '/assets/animations/dikdortgen/soru_dikdortgen_kose_c.png'
},
{
	id: "cornerD",
	src: '/assets/animations/dikdortgen/soru_dikdortgen_kose_d.png'
}]

Interaction.init = function(container) {
	paperAddOns();
	
	Main.setObjective('Dikdörtgenin iç açıları toplamı 360° dir. Bunu görmek için "Oynat" düğmesine basınız.')
	
	// Images
	var fullImage = new Raster('fullImage');

	var cornerA = new Raster('cornerA');
	var cornerB = new Raster('cornerB');
	var cornerC = new Raster('cornerC');
	var cornerD = new Raster('cornerD');

	var cornerGroup = new Group();	
	cornerGroup.addChild(cornerA);
	cornerGroup.addChild(cornerB);
	cornerGroup.addChild(cornerC);
	cornerGroup.addChild(cornerD);
	
	var arrow;
	var angleText;
		
	var initializeAnimation = function () {
		AnimationManager.clearAnimations();
		fullImage.position = new Point(250.5,150);
		fullImage.opacity = 1;
	
		cornerA.position = new Point(188.5,192.5);
		cornerB.position = new Point(312.5,192.5);
		cornerC.position = new Point(312.5,107.5);
		cornerD.position = new Point(188.5,107.5);

		cornerGroup.opacity = 0;	
		
		if (arrow) {
			arrow.remove();
		}
		
		if (angleText) {
			angleText.remove();
		}
		
		angleText = new PointText(new Point(322, 86));
	};

	var runAnimation = function() {
		fullImage.animate({
			style: {
				opacity: 0
			},
			duration: 1000,
			delay: 3000
		})	
	
		cornerGroup.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 1000
		})
	
		var duration = 1000;
		var delay = 5000;
		var deltaY = 64;
		var deltaX = 84;
		
		var offSetY = 0.5;
		

		cornerA.animate({
			style: {
				position: new Point(206.5 + deltaX, 194 - deltaY + offSetY)
			},
			duration: duration,
			delay: delay,
			animationType: 'easeInEaseOut'
		})
	
		cornerB.animate({
			style: {
				position: new Point(293.5 - deltaX, 194 - deltaY + offSetY)
			},
			duration: duration - 150*2,
			delay: delay+100,
			animationType: 'easeInEaseOut'
		})
	
		cornerC.animate({
			style: {
				position: new Point(293.5 - deltaX, 107 + deltaY + offSetY)
			},
			duration: duration + 100*2,
			delay: delay + 200,
			animationType: 'easeInEaseOut'
		})
	
		cornerD.animate({
			style: {
				position: new Point(206.5 + deltaX, 107 + deltaY + offSetY)
			},
			duration: duration,
			delay: delay + 250,
			animationType: 'easeInEaseOut'
		})
	
		arrowHelper = {endAngle: -Math.PI/3 + 0.4,
			 			opacity: 0,
						angle: 0};
		arrowHelper.animate = Item.prototype.animate;
		
		Interaction.onFrame = function(event) {
			if (arrow) {
				arrow.remove();
			}
			arrow = new Path.OneSidedRoundArrow(new Point(250,150), 90, -Math.PI/3 + 0.4, arrowHelper.endAngle, {arrowEnd: true});
			arrow.opacity = arrowHelper.opacity;
			arrow.strokeColor = '#000';
			arrow.strokeWidth = 2.5;

			angleText.justification = 'left';
			angleText.fillColor = '#000';
			angleText.content = Math.floor(arrowHelper.angle) + "°";
			angleText.characterStyle = {
				fontSize: 16,
			}
			angleText.opacity = arrowHelper.opacity;

		}
	
		arrowHelper.animate({
			style: {
				endAngle: Math.PI*2 -Math.PI/3 + 0.33,
				angle: 360
			},
			duration: 2000,
			delay: 7000,
			animationType: 'easeInEaseOut',
			callback: function() {
				$('#replayButton').css('visibility', 'visible');
				$('#replayButton').fadeTo('fast', 1, function() {
					  
				});
			}
		});
	
		arrowHelper.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 7000,
			animationType: 'easeInEaseOut'
		});
	};

	initializeAnimation();
//	runAnimation();
		
	// Create the control button
	$(container).append('<input id="replayButton" type="button" class="play_button" />');
	$('#replayButton').css("position", "absolute")
					  .css("bottom", "10px")
					  .css("right", "10px");
	$('#replayButton').click(function () {
		initializeAnimation();
		runAnimation();
		$('#replayButton').fadeTo('fast', 0, function() {
			$('#replayButton').css('visibility', 'hidden');
		});
	});
}

paperAddOns = function () {
	Path.OneSidedRoundArrow = function(center, radius, startAngle, endAngle, options) {
		if (!options) {
			options = {};
		}
		
		if (!options.arrowHeadSize) {
			options.arrowHeadSize = 10;
		}
		if(!options.angle) {
			options.angle = 30;
		}
		
		var group = new Group();


		var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
							
		var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
							   center.y + Math.sin((startAngle+endAngle)/2) * radius);
							
		var point3 = new Point(center.x + Math.cos(endAngle) * radius,
							   center.y + Math.sin(endAngle) * radius);
							
							
		var path = new Path.Arc(point1, point2, point3);
		
		if (options.arrowEnd) {
			if (!options.arrowEndSize) {
				options.arrowEndSize = 3;
			}
			var circle = new Path.Circle(point1, options.arrowEndSize);
			group.addChild(circle);
			circle.fillColor = '#000';
		}
		
		var arrowHeadSize = options.arrowHeadSize;
		
		var _a = -90+Util.radianToDegree(Util.findAngle(center.x, center.y, point3.x, point3.y));
		
		var a1 = Util.degreeToRadians(180 + _a + options.angle);
		var a2 = Util.degreeToRadians(180 + _a - options.angle);
		var path2 = new Path.Line(
							point3,
							new Point( 
									point3.x + arrowHeadSize*Math.cos(a1),
									point3.y - arrowHeadSize*Math.sin(a1)
								) 
							);
		var path3 = new Path.Line(
							point3,
							new Point( 
									point3.x + arrowHeadSize*Math.cos(a2) , 
									point3.y - arrowHeadSize*Math.sin(a2) 
								) 
							);
		var pt = new Path();
		pt.add(point3);
		pt.add(new Point( 
						point3.x + arrowHeadSize*Math.cos(a1),
						point3.y - arrowHeadSize*Math.sin(a1)
					));
		pt.add(new Point( 
						point3.x + arrowHeadSize*Math.cos(a2) , 
						point3.y - arrowHeadSize*Math.sin(a2) 
					) );
		pt.closed = true;
		path.strokeColor = '#000';
		pt.style = {
			strokeColor: '#000',
			fillColor : '#000'
		};
		path2.strokeColor = '#000';
		path3.strokeColor = '#000';
		
		group.addChild(path);
		group.addChild(pt);
		group.addChild(path2);
				group.addChild(path3);
		return group;
	}
}

Animation.images = [{
	id: "dikdortgen01",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_01.png'
},
{
	id: "dikdortgen02",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_02.png'
},
{
	id: "dikdortgen03",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_03.png'
},
{
	id: "dikdortgen03",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_03.png'
},
{
	id: "dikdortgen04",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_04.png'
},
{
	id: "dikdortgen05",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_05.png'
},
{
	id: "dikdortgen06",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_06.png'
},
{
	id: "dikdortgen07",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_07.png'
},
{
	id: "dikdortgen08",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_08.png'
},
{
	id: "dikdortgen09",
	src: '/assets/animations/dikdortgen/dikdortgen_ornek_09.png'
}]

Animation.init = function (container) {
	var imageGroup = new Group();
	
	var dikdortgen01 = new Raster("dikdortgen01");
	var dikdortgen02 = new Raster("dikdortgen02");
	var dikdortgen03 = new Raster("dikdortgen03");
	var dikdortgen04 = new Raster("dikdortgen04");
	var dikdortgen05 = new Raster("dikdortgen05");
	var dikdortgen06 = new Raster("dikdortgen06");
	var dikdortgen07 = new Raster("dikdortgen07");
	var dikdortgen08 = new Raster("dikdortgen08");
	var dikdortgen09 = new Raster("dikdortgen09");
	
	imageGroup.addChild(dikdortgen01);
	imageGroup.addChild(dikdortgen02);
	imageGroup.addChild(dikdortgen03);
	imageGroup.addChild(dikdortgen04);
	imageGroup.addChild(dikdortgen05);
	imageGroup.addChild(dikdortgen06);
	imageGroup.addChild(dikdortgen07);
	imageGroup.addChild(dikdortgen08);
	imageGroup.addChild(dikdortgen09);
	
	dikdortgen01.opacity = 0;
	dikdortgen02.opacity = 0;
	dikdortgen03.opacity = 0;
	dikdortgen04.opacity = 0;
	dikdortgen05.opacity = 0;
	dikdortgen06.opacity = 0;
	dikdortgen07.opacity = 0;
	dikdortgen08.opacity = 0;
	dikdortgen09.opacity = 0;
	
	imageGroup.position = new Point(200.5, 84);
	
	$(container).append('<div id="textHolder"></div>');
	$('#textHolder').css("line-height", "24px")
					.css("color", "#262626")
					.css("position", "absolute")
					.css("left", "400px")
					.css("top", "38px")
					.css("width", "330")
					.css("height", "100");

	$('#textHolder').append('<div id="text01">Bütün açıları diktir.</div>');
	$('#textHolder').append('<div id="text02">Karşılıklı kenar uzunlukları eşittir.</div>');
	$('#textHolder').append('<div id="text03">Karşılıklı kenarları paraleldir.</div>');
	$('#textHolder').append('<div id="text04">Köşegen uzunlukları eşittir.</div>');
	$('#textHolder').append('<div id="text05">Köşegenleri birbirini ortalar.</div>');

	$('#text01').css('opacity', 0);
	$('#text02').css('opacity', 0);
	$('#text03').css('opacity', 0);
	$('#text04').css('opacity', 0);
	$('#text05').css('opacity', 0);

	textHelper = {
		text01Opacity: 0,
		text02Opacity: 0,
		text03Opacity: 0,
		text04Opacity: 0,
		text05Opacity: 0
	};
	
	Animation.onFrame = function(event){
		$('#text01').css('opacity', textHelper.text01Opacity);
		$('#text02').css('opacity', textHelper.text02Opacity);
		$('#text03').css('opacity', textHelper.text03Opacity);
		$('#text04').css('opacity', textHelper.text04Opacity);
		$('#text05').css('opacity', textHelper.text05Opacity);
	}

	
	textHelper.animate = Item.prototype.animate;


	dikdortgen01.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 0,
		animationType: 'easeInEaseOut'
	});
	
	///
	
	dikdortgen03.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1500,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen01.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text01Opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
	});
	
	dikdortgen04.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen03.remove();
		}
	});

	///
	
	textHelper.animate({
		style: {
			text02Opacity: 1
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
	});
	
	dikdortgen05.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen04.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text03Opacity: 1
		},
		duration: 1000,
		delay: 9000,
		animationType: 'easeInEaseOut',
	});
	
	dikdortgen06.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 7000,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen05.remove();
		}
	});
	
	dikdortgen07.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 9000,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen06.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text04Opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut',
	});
	
	dikdortgen08.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 11000,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen07.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text05Opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut',
		callback: Main.animationFinished
	});
	
	dikdortgen09.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut',
		callback: function () {
			dikdortgen08.remove();
		}
	});
}
