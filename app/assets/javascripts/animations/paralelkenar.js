
var Interaction = function(){};Interaction();
var Animation = function(){};Animation();

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.images = [{
	id: "fullImage",
	src: '/assets/animations/paralelkenar/paralel01.png'
},
{
	id: "cornerA",
	src: '/assets/animations/paralelkenar/soru_paralel_kose_a.png'
},
{
	id: "cornerB",
	src: '/assets/animations/paralelkenar/soru_paralel_kose_b.png'
},
{
	id: "cornerC",
	src: '/assets/animations/paralelkenar/soru_paralel_kose_c.png'
},
{
	id: "cornerD",
	src: '/assets/animations/paralelkenar/soru_paralel_kose_d.png'
}]

Interaction.init = function(container) {
	paperAddOns();
	
	Main.setObjective('Paralelkenarın iç açıları toplamı 360° dir. Bunu görmek için "Oynat" düğmesine basınız.')
	
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
		var deltaX = 64;
		
		var offSetY = 0.5;
		var offSetX = 20;
		

		cornerA.animate({
			style: {
				position: new Point(206.5 + deltaX + offSetX, 194 - deltaY + offSetY)
			},
			duration: duration,
			delay: delay,
			animationType: 'easeInEaseOut'
		})
	
		cornerB.animate({
			style: {
				position: new Point(293.5 - deltaX + offSetX, 194 - deltaY + offSetY)
			},
			duration: duration - 150*2,
			delay: delay+100,
			animationType: 'easeInEaseOut'
		})
	
		cornerC.animate({
			style: {
				position: new Point(293.5 - deltaX - offSetX, 107 + deltaY + offSetY)
			},
			duration: duration + 100*2,
			delay: delay + 200,
			animationType: 'easeInEaseOut'
		})
	
		cornerD.animate({
			style: {
				position: new Point(206.5 + deltaX - offSetX, 107 + deltaY + offSetY)
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
			arrow = new Path.OneSidedRoundArrow(new Point(250,150), 80, -Math.PI/3 + 0.4, arrowHelper.endAngle, {arrowEnd: true});
			arrow.opacity = arrowHelper.opacity;
			arrow.strokeColor = '#000';
			arrow.strokeWidth = 2.5;
			if (angleText) {
				angleText.remove();
			}
		
			angleText = new PointText(new Point(316, 92));
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
	id: "paralel01",
	src: '/assets/animations/paralelkenar/paralel_ornek_01.png'
},
{
	id: "paralel02",
	src: '/assets/animations/paralelkenar/paralel_ornek_02.png'
},
{
	id: "paralel03",
	src: '/assets/animations/paralelkenar/paralel_ornek_03.png'
},
{
	id: "paralel03",
	src: '/assets/animations/paralelkenar/paralel_ornek_03.png'
},
{
	id: "paralel04",
	src: '/assets/animations/paralelkenar/paralel_ornek_04.png'
},
{
	id: "paralel05",
	src: '/assets/animations/paralelkenar/paralel_ornek_05.png'
},
{
	id: "paralel06",
	src: '/assets/animations/paralelkenar/paralel_ornek_06.png'
},
{
	id: "paralel07",
	src: '/assets/animations/paralelkenar/paralel_ornek_07.png'
},
{
	id: "paralel08",
	src: '/assets/animations/paralelkenar/paralel_ornek_08.png'
},
{
	id: "paralel09",
	src: '/assets/animations/paralelkenar/paralel_ornek_09.png'
},
{
	id: "paralel10",
	src: '/assets/animations/paralelkenar/paralel_ornek_10.png'
}]

Animation.init = function (container) {
	var imageGroup = new Group();
	
	var paralel01 = new Raster("paralel01");
	var paralel02 = new Raster("paralel02");
	var paralel03 = new Raster("paralel03");
	var paralel04 = new Raster("paralel04");
	var paralel05 = new Raster("paralel05");
	var paralel06 = new Raster("paralel06");
	var paralel07 = new Raster("paralel07");
	var paralel08 = new Raster("paralel08");
	var paralel09 = new Raster("paralel09");
	var paralel10 = new Raster("paralel10");
	
	imageGroup.addChild(paralel01);
	imageGroup.addChild(paralel02);
	imageGroup.addChild(paralel03);
	imageGroup.addChild(paralel04);
	imageGroup.addChild(paralel05);
	imageGroup.addChild(paralel06);
	imageGroup.addChild(paralel07);
	imageGroup.addChild(paralel08);
	imageGroup.addChild(paralel09);
	imageGroup.addChild(paralel10);
	
	paralel01.opacity = 0;
	paralel02.opacity = 0;
	paralel03.opacity = 0;
	paralel04.opacity = 0;
	paralel05.opacity = 0;
	paralel06.opacity = 0;
	paralel07.opacity = 0;
	paralel08.opacity = 0;
	paralel09.opacity = 0;
	paralel10.opacity = 0;
	
	imageGroup.position = new Point(200.5, 84);
	
	$(container).append('<div id="textHolder"></div>');
	$('#textHolder').css("line-height", "24px")
					.css("color", "#262626")
					.css("position", "absolute")
					.css("left", "400px")
					.css("top", "38px")
					.css("width", "330")
					.css("height", "100");

	$('#textHolder').append('<div id="text01">Ardışık açıları toplamı 180° dir.</div>');
	$('#textHolder').append('<div id="text02">Karşılıklı açıları eşittir.</div>');
	$('#textHolder').append('<div id="text03">Karşılıklı kenar uzunlukları eşittir.</div>');
	$('#textHolder').append('<div id="text04">Karşılıklı kenarları paraleldir.</div>');
	$('#textHolder').append('<div id="text05">Ve daha bir sürü şey --Candan Erçetin</div>');

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


	paralel01.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 0,
		animationType: 'easeInEaseOut'
	});
	
	///
	
	paralel03.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1500,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel01.remove();
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
	
	paralel04.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel03.remove();
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
	
	paralel05.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel04.opacity = 0;
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
	
	paralel06.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 7000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel05.remove();
		}
	});
	
	paralel07.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 9000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel06.remove();
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
	
	paralel08.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 11000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel07.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text05Opacity: 0
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut'
	});
	
	paralel09.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel08.remove();
		}
	});
	
	
	paralel10.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 15000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel09.remove();
			paralel04.opacity = 1;
		}
	});
	
	
	paralel10.animate({
		style: {
			opacity: 0
		},
		duration: 1000,
		delay: 17000,
		animationType: 'easeInEaseOut',
		callback: function () {
			paralel10.remove();
			Main.animationFinished();
		}
	});
}
