// kesirleri birbirine çevirme interaction

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var answerColor = "#069";
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation =function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
	Animation.container = container;
	
	/******************/
	/* example shapes */
	/******************/
	
	// arrow
	var arr = new Group(); 
	var arrow = new Path.OneSidedArrow(new Point(10, 90), new Point(500, 90), 10, 30);
	var arrow2 = new Path.OneSidedArrow(new Point(500, 90), new Point(501, 90), 10, 30);
	arrow.rotate(180);
	arr.addChild(arrow);
	arr.addChild(arrow2);
	
	// big dots
	var dotGroup = new Group();
	var firstDot = new Path.Circle(new Point(61, 90), 5)
	firstDot.fillColor = "black";
	var secondDot = new Path.Circle(new Point(196, 90), 5)
	secondDot.fillColor = "black";
	var thirdDot = new Path.Circle(new Point(331, 90), 5)
	thirdDot.fillColor = "black";
	var fourthDot = new Path.Circle(new Point(466, 90), 5)
	fourthDot.fillColor = "black";
	dotGroup.addChild(firstDot);
	dotGroup.addChild(secondDot);
	dotGroup.addChild(thirdDot);
	dotGroup.addChild(fourthDot);
	
	// small dots
	var dotGroup2 = new Group();
	
	for(i = 0; i < 27; i++) {
		
		var dott = new Path.Circle(new Point(76+(i*15), 90), 3);
		dott.fillColor = "black";
		dotGroup2.addChild(dott);
	}
	
	var redDot = new Path.Circle(new Point(391,90), 4);
	redDot.fillColor = "red";
	
	// rects
	var firstRect = new Group();
	var secondRect = new Group();
	
	var one = new Path.Rectangle(new Point(60.5, 15.5), new Size(135, 15));
	one.fillColor = "#88ACE0";
	one.strokeColor = "black";
	
	var two = new Path.Rectangle(new Point(195.5, 15.5), new Size(135, 15));
	two.fillColor = "#88ACE0";
	two.strokeColor = "black";
	
	var firstPiece = new Path.Rectangle(new Point(330.5, 15.5), new Size(15,15));
	firstPiece.fillColor = "#88ACE0";
	firstPiece.strokeColor = "black";
	
	var secondPiece = new Path.Rectangle(new Point(345.5, 15.5), new Size(15,15));
	secondPiece.fillColor = "#88ACE0";
	secondPiece.strokeColor = "black";
	
	var thirdPiece = new Path.Rectangle(new Point(360.5, 15.5), new Size(15,15));
	thirdPiece.fillColor = "#88ACE0";
	thirdPiece.strokeColor = "black";
	
	var fourthPiece = new Path.Rectangle(new Point(375.5, 15.5), new Size(15,15));
	fourthPiece.fillColor = "#88ACE0";
	fourthPiece.strokeColor = "black";
	
	firstRect.addChild(one);
	firstRect.addChild(two);
	firstRect.addChild(firstPiece);
	firstRect.addChild(secondPiece);
	firstRect.addChild(thirdPiece);
	firstRect.addChild(fourthPiece);
	
	for(i = 0; i < 22; i++) {
		var exRect = new Path.Rectangle(new Point(60.5 + (15 * i), 150.5), new Size(15, 15));
		exRect.fillColor = "#88ACE0";
		exRect.strokeColor = "black";
		secondRect.addChild(exRect);
	}
	
	// division
	
	var linesGroup = new Group();
	var vertLine = new Path.Line(new Point(680.5, 120.5), new Point(680.5, 160.5));
	vertLine.strokeColor = "black";
	var horiLine = new Path.Line(new Point(680.5, 140.5), new Point(702.5, 140.5));
	horiLine.strokeColor = "black";
	var horiLine2 = new Path.Line(new Point(648.5, 160.5), new Point(680.5, 160.5));
	horiLine2.strokeColor = "black";
	var minusLine = new Path.Line(new Point(648.5, 154.5), new Point(654.5, 154.5));
	minusLine.strokeColor = "black";
	linesGroup.addChild(vertLine);
	linesGroup.addChild(horiLine);
	linesGroup.addChild(horiLine2);
	linesGroup.addChild(minusLine);
	linesGroup.position = new Point(674.5, 136.5);
	
	// html elements
	
	// firstF
	$(container).append('<div id="firstF"></div>');
	$('#firstF').css("position", "absolute")
				.css("top", "16px")
				.css("left", "26px")
			//	.css("border", "solid")
				.css("width", "40px")
				.css("height", "40px");
				
	$('#firstF').append('<p id="whh">2</p>');
	$('#whh').css("position", "absolute")
				.css("top", "12px")
				.css("left", "0px")
				.css("font-size", 18);
	
	$('#firstF').append('<div id="exLine"></div>');
	$('#exLine').css("position","absolute")
				.css("left", "14px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#firstF').append('<p id="nomm">4</p>');
	$('#nomm').css("position", "absolute")
				.css("top", "0px")
				.css("left", "20px")
				.css("font-size", 18);
	
	$('#firstF').append('<p id="denomm">9</p>');
	$('#denomm').css("position", "absolute")
				.css("top", "22px")
				.css("left", "20px")
				.css("font-size", 18);
	
	// secondF
	$(container).append('<div id="secondF"></div>');
	$('#secondF').css("position", "absolute")
				.css("top", "154px")
				.css("left", "30px")
				.css("width", "40px")
				.css("height", "40px");
	
	$('#secondF').append('<div id="exLine2"></div>');
	$('#exLine2').css("position","absolute")
				.css("left", "8px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#secondF').append('<p id="nomm2">22</p>');
	$('#nomm2').css("position", "absolute")
				.css("top", "0px")
				.css("left", "8px")
				.css("font-size", 18);
	
	$('#secondF').append('<p id="denomm2">9</p>');
	$('#denomm2').css("position", "absolute")
				.css("top", "22px")
				.css("left", "14px")
				.css("font-size", 18);
				
	// 0, 1, 2, 3
	
	$(container).append('<div id="whs"></div>');
	$('#whs').css("position", "absolute")
				.css("top", "66px")
				.css("left", "60px")
				.css("width", "440px")
				.css("height", "26px");
	
	$('#whs').append('<p id="zzero">0</p>');
	$('#zzero').css("position", "absolute")
				.css("top", "0px")
				.css("left", "10px")
				.css("font-size", 18)
				.css("color", "grey");
				
	$('#whs').append('<p id="oone">1</p>');
	$('#oone').css("position", "absolute")
				.css("top", "0px")
				.css("left", "144px")
				.css("font-size", 18)
				.css("color", "grey");
				
	$('#whs').append('<p id="ttwo">2</p>');
	$('#ttwo').css("position", "absolute")
				.css("top", "0px")
				.css("left", "280px")
				.css("font-size", 18)
				.css("color", "grey");
	
	$('#whs').append('<p id="tthree">3</p>');
	$('#tthree').css("position", "absolute")
				.css("top", "0px")
				.css("left", "415px")
				.css("font-size", 18)
				.css("color", "grey");
	
	// 0/9, 9/9, 18/9, 22/9s
	$(container).append('<div id="fracss"></div>');
	$('#fracss').css("position", "absolute")
				.css("top", "112px")
				.css("left", "50px")
				.css("width", "440px")
				.css("height", "30px");
	
	// 0/9
	$('#fracss').append('<div id="zeroo"></div>');
	$('#zeroo').css("position", "absolute")
				.css("top", "2px")
				.css("left", "8px")
				.css("width", "40px")
				.css("height", "30px")
				.css("color", "grey");
	
	$('#zeroo').append('<div id="zLine"></div>');
	$('#zLine').css("position","absolute")
				.css("left", "8px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#zeroo').append('<p id="zNom">0</p>');
	$('#zNom').css("position", "absolute")
				.css("top", "0px")
				.css("left", "14px")
				.css("font-size", 18);
	
	$('#zeroo').append('<p id="zDenom">9</p>');
	$('#zDenom').css("position", "absolute")
				.css("top", "22px")
				.css("left", "14px")
				.css("font-size", 18);
				
	// 9/9
	$('#fracss').append('<div id="onee"></div>');
	$('#onee').css("position", "absolute")
				.css("top", "2px")
				.css("left", "143px")
				.css("width", "40px")
				.css("height", "30px")
				.css("color", "grey");
	
	$('#onee').append('<div id="oLine"></div>');
	$('#oLine').css("position","absolute")
				.css("left", "8px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#onee').append('<p id="oNom">9</p>');
	$('#oNom').css("position", "absolute")
				.css("top", "0px")
				.css("left", "14px")
				.css("font-size", 18);
	
	$('#onee').append('<p id="oDenom">9</p>');
	$('#oDenom').css("position", "absolute")
				.css("top", "22px")
				.css("left", "14px")
				.css("font-size", 18);
				
	// 18/9
	$('#fracss').append('<div id="twoo"></div>');
	$('#twoo').css("position", "absolute")
				.css("top", "2px")
				.css("left", "278px")
				.css("width", "40px")
				.css("height", "30px")
				.css("color", "grey");
	
	$('#twoo').append('<div id="tLine"></div>');
	$('#tLine').css("position","absolute")
				.css("left", "8px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#twoo').append('<p id="tNom">18</p>');
	$('#tNom').css("position", "absolute")
				.css("top", "0px")
				.css("left", "8px")
				.css("font-size", 18);
	
	$('#twoo').append('<p id="tDenom">9</p>');
	$('#tDenom').css("position", "absolute")
				.css("top", "22px")
				.css("left", "14px")
				.css("font-size", 18);
	
	// 22/9
	$('#fracss').append('<div id="lastt"></div>');
	$('#lastt').css("position", "absolute")
				.css("top", "2px")
				.css("left", "338px")
				.css("width", "40px")
				.css("height", "30px")
				.css("color", "grey");
	
	$('#lastt').append('<div id="lLine"></div>');
	$('#lLine').css("position","absolute")
				.css("left", "8px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#lastt').append('<p id="lNom">22</p>');
	$('#lNom').css("position", "absolute")
				.css("top", "0px")
				.css("left", "8px")
				.css("font-size", 18);
	
	$('#lastt').append('<p id="lDenom">9</p>');
	$('#lDenom').css("position", "absolute")
				.css("top", "22px")
				.css("left", "14px")
				.css("font-size", 18);
	
	// firstF2
			
	$(container).append('<div id="first2F"></div>');
	$('#first2F').css("position", "absolute")
				.css("top", "60px")
				.css("left", "592px")
				.css("width", "40px")
				.css("height", "40px");
				
	$('#first2F').append('<p id="whh2">2</p>');
	$('#whh2').css("position", "absolute")
				.css("top", "12px")
				.css("left", "0px")
				.css("font-size", 18);
	
	$('#first2F').append('<div id="exLine3"></div>');
	$('#exLine3').css("position","absolute")
				.css("left", "14px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#first2F').append('<p id="nomm3">4</p>');
	$('#nomm3').css("position", "absolute")
				.css("top", "0px")
				.css("left", "20px")
				.css("font-size", 18);
	
	$('#first2F').append('<p id="denomm3">9</p>');
	$('#denomm3').css("position", "absolute")
				.css("top", "22px")
				.css("left", "20px")
				.css("font-size", 18);
				
	$(container).append('<p id="eqqq" >=</p>');
	$('#eqqq').css("position", "absolute")
				.css("left", "650px")
				.css("top", "70px")
				.css("font-size", 18);
				
	// second2F
	$(container).append('<div id="second2F"></div>');
	$('#second2F').css("position", "absolute")
				.css("top", "60px")
				.css("left", "680px")
				.css("width", "40px")
				.css("height", "40px");
	
	$('#second2F').append('<div id="exLine4"></div>');
	$('#exLine4').css("position","absolute")
				.css("left", "8px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#second2F').append('<p id="nomm4">22</p>');
	$('#nomm4').css("position", "absolute")
				.css("top", "0px")
				.css("left", "10px")
				.css("font-size", 18);
	
	$('#second2F').append('<p id="denomm4">9</p>');
	$('#denomm4').css("position", "absolute")
				.css("top", "22px")
				.css("left", "14px")
				.css("font-size", 18);
				
	// firstEq
			
	$(container).append('<div id="firstEq"></div>');
	$('#firstEq').css("position", "absolute")
				.css("top", "130px")
				.css("left", "524px")
				.css("width", "140px")
				.css("height", "40px")
				.css("font-size", 18);
	
	$('#firstEq').append('<p id="nomm5">2 x 9</p>');
	$('#nomm5').css("position", "absolute")
				.css("top", "0px")
				.css("left", "0px")
				.css("font-size", 18);
				
	$('#firstEq').append('<p id="nomm55">+ 4</p>');
	$('#nomm55').css("position", "absolute")
				.css("top", "0px")
				.css("left", "44px")
				.css("font-size", 18);
				
	$('#firstEq').append('<p id="nomm555">= 22</p>');
	$('#nomm555').css("position", "absolute")
				.css("top", "0px")
				.css("left", "78px")
				.css("font-size", 18);
	
	$('#firstEq').append('<div id="exLine5"></div>');
	$('#exLine5').css("position","absolute")
				.css("left", "92px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#firstEq').append('<p id="denomm5">9</p>');
	$('#denomm5').css("position", "absolute")
				.css("top", "22px")
				.css("left", "98px")
				.css("font-size", 18);
				
	// secondEq		
	$(container).append('<div id="secondEq"></div>');
	$('#secondEq').css("position", "absolute")
				.css("top", "127px")
				.css("left", "654px")
				.css("width", "72px")
				.css("height", "62px")
				.css("font-size", 18);
	
	$('#secondEq').append('<p id="num1">22</p>');
	$('#num1').css("position", "absolute")
				.css("top", "3px")
				.css("left", "15px")
				.css("font-size", 18);
				
	$('#secondEq').append('<p id="num2">9</p>');
	$('#num2').css("position", "absolute")
				.css("top", "2px")
				.css("left", "46px")
				.css("font-size", 18);
	
	$('#secondEq').append('<p id="num3">2</p>');
	$('#num3').css("position", "absolute")
				.css("top", "24px")
				.css("left", "46px")
				.css("font-size", 18);
	
	$('#secondEq').append('<p id="num4">18</p>');
	$('#num4').css("position", "absolute")
				.css("top", "23px")
				.css("left", "15px")
				.css("font-size", 18),
	
	$('#secondEq').append('<p id="num5">4</p>');
	$('#num5').css("position", "absolute")
				.css("top", "44px")
				.css("left", "20px")
				.css("font-size", 18);
	
	// first3F
	$(container).append('<div id="first3F"></div>');
	$('#first3F').css("position", "absolute")
				.css("top", "128px")
				.css("left", "736px")
			//	.css("border", "solid")
				.css("width", "40px")
				.css("height", "40px");
				
	$('#first3F').append('<p id="whh33">2</p>');
	$('#whh33').css("position", "absolute")
				.css("top", "12px")
				.css("left", "0px")
				.css("font-size", 18);
	
	$('#first3F').append('<div id="exLine33"></div>');
	$('#exLine33').css("position","absolute")
				.css("left", "14px")
				.css("top", "20px")
				.css("width", "22px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#first3F').append('<p id="nomm33">4</p>');
	$('#nomm33').css("position", "absolute")
				.css("top", "0px")
				.css("left", "20px")
				.css("font-size", 18);
	
	$('#first3F').append('<p id="denomm33">9</p>');
	$('#denomm33').css("position", "absolute")
				.css("top", "22px")
				.css("left", "20px")
				.css("font-size", 18);
	
	
	arr.opacity = 0;
	firstRect.opacity = 0;
	secondRect.opacity = 0;
	dotGroup.children[0].opacity = 0;
	dotGroup.children[1].opacity = 0;
	dotGroup.children[2].opacity = 0;
	dotGroup.children[3].opacity = 0;
	for(i = 0; i < 27; i++) {
		dotGroup2.children[i].opacity = 0;
	}
	redDot.opacity = 0;
	vertLine.opacity = 0;
	horiLine.opacity = 0;
	horiLine2.opacity = 0;
	minusLine.opacity = 0;
	
	exampleHelper = {
		firstFOpacity: 0,
		secondFOpacity: 0,
		first2FOpacity: 0,
		first3FOpacity: 0,
		second2FOpacity: 0,
		second2FColor: 0,
		first2FColor: 0,
		zzeroOpacity: 0,
		ooneOpacity: 0,
		ttwoOpacity: 0,
		tthreeOpacity: 0,
		zerooOpacity: 0,
		oneeOpacity: 0,
		twooOpacity: 0,
		lasttOpacity: 0,
		lasttColor: 0,
		eqqqOpacity: 0,
		nomm5Opacity: 0,
		nomm55Opacity: 0,
		nomm555Opacity: 0,
		denomm5Opacity: 0,
		num1Opacity: 0,
		num2Opacity: 0,
		num3Opacity: 0,
		num4Opacity: 0,
		num5Opacity: 0
	};
	
	exampleHelper.animate = Item.prototype.animate;
	
	Animation.onFrame = function(event){
		$('#firstF').css("opacity", exampleHelper.firstFOpacity);
		$('#secondF').css("opacity", exampleHelper.secondFOpacity);
		$('#zzero').css("opacity", exampleHelper.zzeroOpacity);
		$('#oone').css("opacity", exampleHelper.ooneOpacity);
		$('#ttwo').css("opacity", exampleHelper.ttwoOpacity);
		$('#tthree').css("opacity", exampleHelper.tthreeOpacity);
		$('#zeroo').css("opacity", exampleHelper.zerooOpacity);
		$('#onee').css("opacity", exampleHelper.oneeOpacity);
		$('#twoo').css("opacity", exampleHelper.twooOpacity);
		$('#lastt').css("opacity", exampleHelper.lasttOpacity);
		$('#lastt').css("color", exampleHelper.lasttColor);
		$('#first2F').css("opacity", exampleHelper.first2FOpacity);
		$('#first3F').css("opacity", exampleHelper.first3FOpacity);
		$('#second2F').css("opacity", exampleHelper.second2FOpacity);
		$('#second2F').css("color", exampleHelper.second2FColor);
		$('#eqqq').css("opacity", exampleHelper.eqqqOpacity);
		$('#nomm5').css("opacity", exampleHelper.nomm5Opacity);
		$('#nomm55').css("opacity", exampleHelper.nomm55Opacity);
		$('#nomm555').css("opacity", exampleHelper.nomm555Opacity);
		$('#denomm5').css("opacity", exampleHelper.denomm5Opacity);
		$('#exLine5').css("opacity", exampleHelper.denomm5Opacity);
		$('#num1').css("opacity", exampleHelper.num1Opacity);
		$('#num2').css("opacity", exampleHelper.num2Opacity);
		$('#num3').css("opacity", exampleHelper.num3Opacity);
		$('#num4').css("opacity", exampleHelper.num4Opacity);
		$('#num5').css("opacity", exampleHelper.num5Opacity);
		$('#first2F').css("color", exampleHelper.first2FColor);
	}
	
	
	
	arr.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	dotGroup.children[0].animate({
		style: {
			opacity: 1
		},
		duration: 500,
		delay: 2000,
		animationType: 'easeInEaseOut'
	});
	
	dotGroup.children[1].animate({
		style: {
			opacity: 1
		},
		duration: 500,
		delay: 2500,
		animationType: 'easeInEaseOut'
	});
	
	dotGroup.children[2].animate({
		style: {
			opacity: 1
		},
		duration: 500,
		delay: 3000,
		animationType: 'easeInEaseOut'
	});
	
	dotGroup.children[3].animate({
		style: {
			opacity: 1
		},
		duration: 500,
		delay: 3500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			zzeroOpacity: 1
		},
		duration: 500,
		delay: 2000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			ooneOpacity: 1
		},
		duration: 500,
		delay: 2500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			ttwoOpacity: 1
		},
		duration: 500,
		delay: 3000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			tthreeOpacity: 1
		},
		duration: 500,
		delay: 3500,
		animationType: 'easeInEaseOut'
	});
	
	for(i = 0; i < 27; i++) {
		dotGroup2.children[i].animate({ 
			style: {
				opacity: 1
			},
			duration: 200,
			delay: 4000+(200*i),
			animationType: 'easeInEaseOut'
		});
	}
	
	exampleHelper.animate({
		style: {
			zerooOpacity: 1
		},
		duration: 200,
		delay: 3800,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			oneeOpacity: 1
		},
		duration: 200,
		delay: 5600,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			twooOpacity: 1
		},
		duration: 200,
		delay: 7400,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			lasttOpacity: 1
		},
		duration: 200,
		delay: 8200,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			firstFOpacity: 1
		},
		duration: 1000,
		delay: 9000,
		animationType: 'easeInEaseOut'
	});
	
	firstRect.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 10000,
		animationType: 'easeInEaseOut'
	});
	
	redDot.animate({
		style: {
			opacity: 1
		},
		duration: 250,
		delay: 11000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			secondFOpacity: 1
		},
		duration: 1000,
		delay: 11500,
		animationType: 'easeInEaseOut'
	});
	
	secondRect.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 12500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			lasttColor: "red"
		},
		duration: 250,
		delay: 13500,
		animationType: 'easeInEaseOut'
	});

	exampleHelper.animate({
		style: {
			first2FOpacity : 1
		},
		duration: 500,
		delay: 14000,
		animationType: 'easeInEaseOut'
	});

	exampleHelper.animate({
		style: {
			eqqqOpacity : 1
		},
		duration: 500,
		delay: 14750,
		animationType: 'easeInEaseOut'
	});

	exampleHelper.animate({
		style: {
			second2FOpacity : 1
		},
		duration: 500,
		delay: 15500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			nomm5Opacity : 1
		},
		duration: 500,
		delay: 16500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			nomm55Opacity : 1
		},
		duration: 500,
		delay: 17500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			nomm555Opacity : 1
		},
		duration: 500,
		delay: 18500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			denomm5Opacity : 1
		},
		duration: 500,
		delay: 19500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			second2FColor: "red"
		},
		duration: 500,
		delay: 20000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			num1Opacity : 1
		},
		duration: 500,
		delay: 21000,
		animationType: 'easeInEaseOut'
	});
	
	vertLine.animate({
		style: {
			opacity : 1
		},
		duration: 500,
		delay: 21500,
		animationType: 'easeInEaseOut'
	});
	horiLine.animate({
		style: {
			opacity : 1
		},
		duration: 500,
		delay: 21750,
		animationType: 'easeInEaseOut'
	});
	
	
	
	exampleHelper.animate({
		style: {
			num2Opacity : 1
		},
		duration: 500,
		delay: 22500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			num3Opacity : 1
		},
		duration: 500,
		delay: 23000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			num4Opacity : 1
		},
		duration: 500,
		delay: 23500,
		animationType: 'easeInEaseOut'
	});
	
	horiLine2.animate({
		style: {
			opacity : 1
		},
		duration: 500,
		delay: 24000,
		animationType: 'easeInEaseOut'
	});
	
	minusLine.animate({
		style: {
			opacity : 1
		},
		duration: 500,
		delay: 24250,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			num5Opacity : 1
		},
		duration: 500,
		delay: 25000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			first3FOpacity: 1,
		},
		duration: 1000,
		delay: 25500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			first2FColor: "#88ACE0"
		},
		duration: 500,
		delay: 26500,
		animationType: 'easeInEaseOut'
	});
}

// interaction init func.
Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Yanda gelecek olan bileşik kesri tam sayılı kesre, tam sayılı kesri bileşik kesre çeviriniz ve kontrol ediniz.');
	
	// neccessary variables
	var randomize = Math.floor(Math.random() * 10);
	var frac, frac2;

	var nominator;
	var denominator;
		
	do
	{
		nominator = Math.floor(Math.random() * 50) + 1;
	}
	while(nominator < 3)
		
	do
	{
		denominator = Math.floor(Math.random() * 50) + 1;
	}
	while(denominator >= nominator || denominator < 2 || (nominator % denominator) == 0)
	
	// make (bileşik kesir -> tam sayılı kesir) convertion
	if(randomize % 2 == 0)
	{	
		// creating neccessary html elements

		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "180px")
						.css("top", "34px")
						.css("width", "150")
						.css("height", "76")
		
		$('#questionDiv').append('<p id="nom" ></p>');
		$('#nom').css("position", "absolute")
				.css("font-size", 18)
				.css("top", "14px");
		$('#nom').html(nominator);
		
		if(nominator < 10)
		{
			$('#nom').css("left", "16px")
		}
		else
		{
			$('#nom').css("left", "10px")
		}
				
		$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "4px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
				
		$('#questionDiv').append('<p id="denom" ></p>');
		$('#denom').css("position", "absolute")
				.css("font-size", 18)
				.css("top", "40px");
		$('#denom').html(denominator);
		if(denominator < 10)
		{
			$('#denom').css("left", "16px")
		}
		else
		{
			$('#denom').css("left", "10px")
		}

		
		$('#questionDiv').append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "46px")
				.css("top", "31px");
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
					.css("height", "30")
					.css("font-size", 18)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("position", "absolute")
					.css("left", "60px")
					.css("top", "22px")
					.css("text-align", "center");
					
		$('#textInput1').addClass('input');
	
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("font-size", 18)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("position", "absolute")
					.css("left", "102px")
					.css("top", "2px")
					.css("text-align", "center");
					
		$('#textInput2').addClass('input');
	
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("font-size", 18)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("position", "absolute")
					.css("left", "102px")
					.css("top", "44px")
					.css("text-align", "center");
	
		$('#textInput3').addClass('input');
	
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "100px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
		
	}
	// make (tam sayılı kesir -> bileşik kesir convertion
	else
	{
		var wh = Math.floor(nominator/denominator);
		var nom = nominator % denominator;
		var denom = denominator;
		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "170px")
						.css("top", "34px")
						.css("width", "128")
						.css("height", "76");
		
		$('#questionDiv').append('<p id="wh" ></p>');
		$('#wh').css("position", "absolute")
				.css("font-size", 18)
				.css("top", "27px");
		$('#wh').html(wh);
		
		if(wh < 10)
		{
			$('#wh').css("left", "8px")
		}
		else
		{
			$('#wh').css("left", "-2px")
		}
		
		$('#questionDiv').append('<p id="nom" ></p>');
		$('#nom').css("position", "absolute")
				.css("font-size", 18)
				.css("top", "14px");
		$('#nom').html(nom);
		
		if(nom < 10)
		{
			$('#nom').css("left", "36px")
		}
		else
		{
			$('#nom').css("left", "30px")
		}
		
		$('#questionDiv').append('<p id="denom" ></p>');
		$('#denom').css("position", "absolute")
					.css("font-size", 18)
					.css("top", "40px");
		$('#denom').html(denom);
		
		if(denom < 10)
		{
			$('#denom').css("left", "36px")
		}
		else
		{
			$('#denom').css("left", "30px")
		}
		
	$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
				.css("left", "24px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
		
		$('#questionDiv').append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "68px")
				.css("top", "28px")
				.css("font-size", 18);
		
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("font-size", 18)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("position", "absolute")
					.css("left", "90px")
					.css("top", "2px")
					.css("text-align", "center");
					
		$('#textInput2').addClass('input');
	
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("font-size", 18)
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("position", "absolute")
					.css("left", "90px")
					.css("top", "44px")
					.css("text-align", "center");
	
		$('#textInput3').addClass('input');
		
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
				.css("left", "88px")
				.css("top", "37px")
				.css("width", "36px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid")
	}
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "154px")
					.css("top", "240px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center")

										
	$(container).append('<div id="answer"></div>');
	$('#answer').css("position", "absolute")
					.css("left", "134px")
					.css("top", "144px")
					.css("width", "260px")
					.css("height", "96px")
					.css("font-size", 18)
					.css("color", answerColor)
				//	.css("border", "solid")
	
	$('#answer').append('<div id="divison123"></div>')
	$('#divison123').css("position", "absolute")
					.css("top", "0px")
					.css("left", "100px")
					.css("width", "60px")
					.css("height", "76px")
					.css("font-size", 20)
			//		.css("border", "solid")
					
	$(container).append('<button id="checkBtn" class="control_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "460px")
					.css("top", "240px");
	
	$(container).append('<button id="nextBtn" class="next_button"></button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "460px")
					.css("top", "240px");
	$('#nextBtn').hide();
	
	// submit func. -> check whether input field is filled and give neccessary feedbacks
	var trial = 0;				
	submit = function()
		{
			// if this is the 3rd trial or more do nothing
			if(trial == 2)
				return;
			
			var ans1, ans2, ans3;
			// (bileşik kesir -> tam sayılı kesir) convertion  submission
			if(randomize % 2 == 0)
			{
				ans1 = $('#textInput1').val();
				ans2 = $('#textInput2').val();
				ans3 = $('#textInput3').val();
				
				// check whether input field is empty or not (also given input is integer or not)
				if(ans1 == "" || ans2 == "" || ans3 == "" || !Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3))		
				{
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
				}
				else
				{
					// generate answers wrt. given numbers
					ans11 = Math.floor(nominator/denominator);
					ans22 = nominator % denominator;
					ans33 = denominator;
					
					// correct answer state
					if(ans1 == ans11 && ans2 == ans22 && ans3 == ans33)
					{
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
					//	$('#answer').html("Cevap: "+nominator+" = ("+ans11+" x "+ans33+") + "+ans22);
						Interaction.pause = true;
						Animation.division = new LongDivision(nominator,denominator,$('#divison123'));
						setTimeout(
							'Animation.division.nextStep(1000);'
							,1000);
						setTimeout(
							'Animation.division.nextStep(1000);'
							,2000);

						setTimeout(
							'Interaction.pause = false;'
							,3000);
						
						$('#checkBtn').hide();
						$('#nextBtn').show();
					}

					
					// second wrong answer state
					else if(trial == 1)
					{
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
						$('#textInput1').val(ans11);
						$('#textInput2').val(ans22);
						$('#textInput3').val(ans33);
						$('#textInput1').css("color", inputBoxAnswerColor);
						$('#textInput2').css("color", inputBoxAnswerColor);
						$('#textInput3').css("color", inputBoxAnswerColor);
				//		$('#answer').html("Cevap: "+nominator+" = ("+ans11+" x "+ans33+") + "+ans22);
						Interaction.pause = true;
						Animation.division = new LongDivision(nominator,denominator,$('#divison123'));
						setTimeout(
							'Animation.division.nextStep(1000);'
							,1000);
						setTimeout(
							'Animation.division.nextStep(1000);'
							,2000);
						setTimeout(
							'Interaction.pause = false;'
							,3000);
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
			}
			
			// (tam sayılı kesir -> bileşik kesir convertion)
			else
			{
				ans2 = $('#textInput2').val();
				ans3 = $('#textInput3').val();
				
				// check whether input field is empty or not (also given input is integer or not)
				if(ans2 == "" || ans3 == "" || !Util.isInteger(ans2) || !Util.isInteger(ans3))		
				{
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
				}
				else
				{
					// generate answers wrt. given numbers
					ans22 = nominator;
					ans33 = denominator;
					
					// correct answer state
					if(ans2 == ans22 && ans3 == ans33)
					{
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						var answerStr = "Cevap: ("+wh+" x "+denom+") + "+nom+" = ";
						$('#answer').html('<p id="ans">'+answerStr+'</p>');
						$('#ans').css("position", "absolute")
									.css("top", "2px")
									.css("right", "70px")
									.css("text-align", "right")
						$('#answer').append('<div id="ansLine"></div>')
						$('#ansLine').css("position", "absolute")
									.css("top", "20px")
									.css("right", "38px")
									.css("width", "23px")
									.css("height", "1px")
									.css("padding", 0)
									.css("border-top", "2px solid");
						$('#answer').append('<p id="ansNom"></div>')
						$('#ansNom').css("position", "absolute")
										.css("top", "0px")
										.css("left", "200px")
										.css("text-align", "center")
										.css("width", "20px")
						$('#ansNom').html(ans22);
						$('#answer').append('<p id="ansDenom"></div>')
						$('#ansDenom').css("position", "absolute")
										.css("top", "24px")
										.css("left", "200px")
										.css("text-align", "center")
										.css("width", "20px")
						$('#ansDenom').html(denom);
						$('#checkBtn').hide();
						$('#nextBtn').show();
					}
					
					// second wrong answer state
					else if(trial == 1)
					{
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
						$('#textInput2').val(ans22);
						$('#textInput3').val(ans33);
						$('#textInput2').css("color", inputBoxAnswerColor);
						$('#textInput3').css("color", inputBoxAnswerColor);
						var answerStr = "Cevap: ("+wh+" x "+denom+") + "+nom+" = ";
						$('#answer').html('<p id="ans">'+answerStr+'</p>');
						$('#ans').css("position", "absolute")
									.css("top", "2px")
									.css("right", "70px")							
									.css("text-align", "right")
						$('#answer').append('<div id="ansLine"></div>')
						$('#ansLine').css("position", "absolute")
									.css("top", "20px")
									.css("right", "38px")
									.css("width", "23px")
									.css("height", "1px")
									.css("padding", 0)
									.css("border-top", "2px solid");
						$('#answer').append('<p id="ansNom"></div>')
						$('#ansNom').css("position", "absolute")
										.css("top", "0px")
										.css("left", "200px")
										.css("text-align", "center")
										.css("width", "20px")
						$('#ansNom').html(ans22);
						$('#answer').append('<p id="ansDenom"></div>')
						$('#ansDenom').css("position", "absolute")
										.css("top", "24px")
										.css("left", "200px")
										.css("text-align", "center")
										.css("width", "20px")
						$('#ansDenom').html(denom);
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
			}
		}
		
		// checkBtn click func. -> call submit	
		$('#checkBtn').click(submit);
		
		// nextBtn click func. -> remove whole html elements and call interaction init again
		$('#nextBtn').click(function() {
			if(Interaction.pause)
				return;
			$('#textInput3').remove();
			$('#textInput2').remove();
		
			if(randomize % 2 == 0)
			{
				$('#textInput1').remove();
			}
			
			if(randomize % 2 == 1) {
				$('#wh').remove();
			}

			$('#equal1').remove();

			$('#checkBtn').remove();
			$('#nextBtn').remove();
			$('#answer').remove();
			$('#statuss').remove();
			$('#line1').remove();
			$('#line2').remove();
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
}
