
var Interaction = function(){};Interaction();
var Animation = function(){};Animation();

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.images = [{
	id: "fullImage",
	src: '/assets/animations/yamuk/yamuk01.png'
},
{
	id: "cornerA",
	src: '/assets/animations/yamuk/soru_yamuk_kose_a.png'
},
{
	id: "cornerB",
	src: '/assets/animations/yamuk/soru_yamuk_kose_b.png'
},
{
	id: "cornerC",
	src: '/assets/animations/yamuk/soru_yamuk_kose_c.png'
},
{
	id: "cornerD",
	src: '/assets/animations/yamuk/soru_yamuk_kose_d.png'
}]

Interaction.init = function(container) {
	paperAddOns();
	
	Main.setObjective('Yamuğun iç açıları toplamı 360° dir. Bunu görmek için "Oynat" düğmesine basınız.')
	
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
		
		
		cornerHelper = new AnimationHelper({angle: 0});
		
		cornerB.lastTransformation = cornerB.matrix;
		cornerD.lastTransformation = cornerD.matrix;
		
		cornerHelper.animate({
			style: {
				angle: 180
			},
			duration: 1000,
			delay: 5000,
			animationType: 'easeInEaseOut',
			update: function() {
				var matrix = new Matrix();
				matrix.rotate(this.angle, 250, 150.5);
				matrix.concatenate(cornerB.lastTransformation);

				cornerB.setMatrix(matrix);

				matrix = new Matrix();
				matrix.rotate(this.angle, 250, 150.5);
				matrix.concatenate(cornerD.lastTransformation);

				cornerD.setMatrix(matrix);
			}
		})
		
		
		var duration = 1000;
		var delay = 6100;
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
	
		cornerD.animate({
			style: {
				position: new Point(293.5 - deltaX + offSetX, 194 - deltaY + offSetY)
			},
			duration: duration - 150*2,
			delay: delay+100,
			animationType: 'easeInEaseOut'
		})
	
		cornerC.animate({
			style: {
				position: new Point(293.5 - deltaX + offSetX, 107 + deltaY + offSetY)
			},
			duration: duration + 100*2,
			delay: delay + 200,
			animationType: 'easeInEaseOut'
		})
	
		cornerB.animate({
			style: {
				position: new Point(206.5 + deltaX + offSetX, 107 + deltaY + offSetY)
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
			arrow.strokeColor = 'black';
			arrow.strokeWidth = 2.5;
			if (angleText) {
				angleText.remove();
			}
		
			angleText = new PointText(new Point(322, 86));
			angleText.justification = 'left';
			angleText.fillColor = 'black';
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
			circle.fillColor = 'black';
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
		path.strokeColor = 'black';
		pt.style = {
			strokeColor: 'black',
			fillColor : 'black'
		};
		path2.strokeColor = 'black';
		path3.strokeColor = 'black';
		
		group.addChild(path);
		group.addChild(pt);
		group.addChild(path2);
				group.addChild(path3);
		return group;
	}
}

Animation.images = [{
	id: "yamuk01",
	src: '/assets/animations/yamuk/yamuk_ornek_01.png'
},
{
	id: "yamuk02",
	src: '/assets/animations/yamuk/yamuk_ornek_02.png'
},
{
	id: "yamuk03",
	src: '/assets/animations/yamuk/yamuk_ornek_03.png'
},
{
	id: "yamuk03",
	src: '/assets/animations/yamuk/yamuk_ornek_03.png'
},
{
	id: "yamuk04",
	src: '/assets/animations/yamuk/yamuk_ornek_04.png'
},
{
	id: "yamuk05",
	src: '/assets/animations/yamuk/yamuk_ornek_05.png'
},
{
	id: "yamuk06",
	src: '/assets/animations/yamuk/yamuk_ornek_06.png'
},
{
	id: "yamuk07",
	src: '/assets/animations/yamuk/yamuk_ornek_07.png'
},
{
	id: "yamuk08",
	src: '/assets/animations/yamuk/yamuk_ornek_08.png'
}]

Animation.init = function (container) {
	var imageGroup = new Group();
	
	var yamuk01 = new Raster("yamuk01");
	var yamuk02 = new Raster("yamuk02");
	var yamuk03 = new Raster("yamuk03");
	var yamuk04 = new Raster("yamuk04");
	var yamuk05 = new Raster("yamuk05");
	var yamuk06 = new Raster("yamuk06");
	var yamuk07 = new Raster("yamuk07");
	var yamuk08 = new Raster("yamuk08");
	
	imageGroup.addChild(yamuk01);
	imageGroup.addChild(yamuk02);
	imageGroup.addChild(yamuk03);
	imageGroup.addChild(yamuk04);
	imageGroup.addChild(yamuk05);
	imageGroup.addChild(yamuk06);
	imageGroup.addChild(yamuk07);
	imageGroup.addChild(yamuk08);
	
	yamuk01.opacity = 0;
	yamuk02.opacity = 0;
	yamuk03.opacity = 0;
	yamuk04.opacity = 0;
	yamuk05.opacity = 0;
	yamuk06.opacity = 0;
	yamuk07.opacity = 0;
	yamuk08.opacity = 0;
	
	imageGroup.position = new Point(200.5, 84);
	
	$(container).append('<div id="textHolder"></div>');
	$('#textHolder').css("line-height", "24px")
					.css("color", "#262626")
					.css("position", "absolute")
					.css("left", "400px")
					.css("top", "38px")
					.css("width", "330")
					.css("height", "100");

	$('#textHolder').append('<div id="text01">A ve D açılarının ölçüleri toplamı 180° dir.</div>');
	$('#textHolder').append('<div id="text02">B ve C açılarının ölçüleri toplamı 180° dir.</div>');
	$('#textHolder').append('<div id="text03">Karşılıklı kenar çiftlerinden en az biri paraleldir.</div>');

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


	yamuk01.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 0,
		animationType: 'easeInEaseOut'
	});
	
	///
	
	yamuk03.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1500,
		animationType: 'easeInEaseOut',
		callback: function () {
			yamuk01.remove();
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
	
	yamuk04.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
		callback: function () {
			yamuk03.remove();
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
	
	yamuk05.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
		callback: function () {
			yamuk04.remove();
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
	
	yamuk06.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 7000,
		animationType: 'easeInEaseOut',
		callback: function () {
			yamuk05.remove();
		}
	});
	
	yamuk07.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 9000,
		animationType: 'easeInEaseOut',
		callback: function () {
			yamuk06.remove();
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
	
	yamuk08.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 11000,
		animationType: 'easeInEaseOut',
		callback: function () {
			yamuk07.remove();
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
}
