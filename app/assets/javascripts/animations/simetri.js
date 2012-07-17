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
	
	AnimateHelper = new AnimationHelper({
		firstPoint: new Point(120.5, 150.5),
		secondPoint: new Point(220.5, 150.5),
		middlePoint: new Point(170.5, 150.5),
		topPoint: new Point(170.5, 50.5),
		color: new RgbColor(1, 1, 1),
		rectAPoint: new Point(500.5, 50.5),
		rectBPoint: new Point(400.5, 50.5),
		rectCPoint: new Point(400.5, 150.5),
		rectDPoint: new Point(500.5, 150.5),
		rectEPoint: new Point(400.5, 100.5),
		rectFPoint: new Point(500.5, 100.5),
		rectGPoint: new Point(450.5, 50.5),
		rectHPoint: new Point(450.5, 150.5),
		rectOpacity: 0,
		rectFirstLineOpacity: 0,
		rectAngle:0,
		rectAngle2: 0
	});
	
	var trianglePath = new Path();
	var trianglePath2 = new Path();
	trianglePath.moveTo(AnimateHelper.middlePoint);
	trianglePath.lineTo(AnimateHelper.firstPoint);
	trianglePath.lineTo(AnimateHelper.topPoint);
	trianglePath.strokeColor = "black";
	
	trianglePath2.moveTo(AnimateHelper.middlePoint);
	trianglePath2.lineTo(AnimateHelper.secondPoint);
	trianglePath2.lineTo(AnimateHelper.topPoint);
	trianglePath2.strokeColor = "black";
	trianglePath2.fillColor = AnimateHelper.color;
	
	var rectPath = new Path();
	rectPath.moveTo(AnimateHelper.rectDPoint);
	rectPath.lineTo(AnimateHelper.rectCPoint);
	rectPath.lineTo(AnimateHelper.rectBPoint);
	rectPath.lineTo(AnimateHelper.rectAPoint);
	rectPath.lineTo(AnimateHelper.rectDPoint);
	rectPath.strokeColor = "black";
	var rectFirstLine = new Path.Line(new Point(AnimateHelper.rectAPoint), new Point(AnimateHelper.rectCPoint));
	rectFirstLine.strokeColor = "black";
	rectFirstLine.opacity = 0;
	var rectSecondLine = new Path.Line(new Point(AnimateHelper.rectBPoint), new Point(AnimateHelper.rectDPoint));
	rectSecondLine.strokeColor = "black";
	rectSecondLine.opacity = 0;
	var rectThirdLine = new Path.Line(new Point(AnimateHelper.rectEPoint), new Point(AnimateHelper.rectFPoint));
	rectThirdLine.strokeColor = "black";
	rectThirdLine.opacity = 0;
	var rectFourthLine = new Path.Line(new Point(AnimateHelper.rectGPoint), new Point(AnimateHelper.rectHPoint));
	rectFourthLine.strokeColor = "black";
	rectFourthLine.opacity = 0;
	var rectFirstPath = new Path();
	var rectFillPath = new Path();

	Animation.onFrame = function(event){
		if(trianglePath)
			trianglePath.remove();
		if(trianglePath2)
			trianglePath2.remove();
		
		trianglePath = new Path();
		trianglePath.moveTo(AnimateHelper.middlePoint);
		trianglePath.lineTo(AnimateHelper.firstPoint);
		trianglePath.lineTo(AnimateHelper.topPoint);
		trianglePath.strokeColor = "black";
		
		trianglePath2 = new Path();
		trianglePath2.moveTo(AnimateHelper.middlePoint);
		trianglePath2.lineTo(AnimateHelper.secondPoint);
		trianglePath2.lineTo(AnimateHelper.topPoint);
		trianglePath2.strokeColor = "black";
		trianglePath2.fillColor = AnimateHelper.color;
		
		rectPath.opacity = AnimateHelper.rectOpacity;
	}
	
	AnimateHelper.animate({
		style: {
			firstPoint: new Point(170.5, 160.5),
			secondPoint: new Point(170.5, 160.5),
			
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});

	AnimateHelper.animate({
		style: {
			color: new RgbColor(0.71, 0.71, 0.71)
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeIn'
	});

	AnimateHelper.animate({
		style: {
			firstPoint: new Point(120.5, 150.5),
			secondPoint: new Point(220.5, 150.5),
		},
		duration: 1000,
		delay: 2500,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			color: new RgbColor(1, 1, 1)
		},
		duration: 1000,
		delay: 2500,
		animationType: 'easeOut'
	});
	
	AnimateHelper.animate({
		style: {
			rectOpacity: 1,
		},
		duration: 1000,
		delay: 3500,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			rectBPoint: new Point(500.5, 150.5),
			rectAngle:Math.PI
		},
		duration: 1000,
		delay: 5000,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectDPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(
				AnimateHelper.rectBPoint
					.add(
						10*Math.sin(this.rectAngle),
						-10*Math.sin(this.rectAngle)
					)
			);
			rectPath.lineTo(AnimateHelper.rectAPoint);
			rectPath.lineTo(AnimateHelper.rectDPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
		},
		animationType: 'easeInEaseOut'
	});
	
	rectFirstLine.animate({
		style: {
			opacity: 1,

		},
		duration: 20,
		delay: 5500,
		animationType: 'easeInEaseOut'
	});

	AnimateHelper.animate({
		style: {
			rectBPoint: new Point(400.5, 50.5),
			rectAngle:0
		},
		duration: 1000,
		delay: 6500,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectDPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(
				AnimateHelper.rectBPoint
					.add(
						10*Math.sin(this.rectAngle),
						-10*Math.sin(this.rectAngle)
					)
			);
			rectPath.lineTo(AnimateHelper.rectAPoint);
			rectPath.lineTo(AnimateHelper.rectDPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
		},
		animationType: 'easeInEaseOut'
	});
	
	rectFirstLine.animate({
		style: {
			opacity: 0,

		},
		duration: 20,
		delay: 7000,
		animationType: 'easeInEaseOut'
	});
	// second
	AnimateHelper.animate({
		style: {
			rectAPoint: new Point(400.5, 150.5),
			rectAngle:Math.PI
		},
		duration: 1000,
		delay: 8000,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectDPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(AnimateHelper.rectBPoint);
			rectPath.lineTo(
				AnimateHelper.rectAPoint
					.add(
						-10*Math.sin(this.rectAngle),
						-10*Math.sin(this.rectAngle)
					)	
			);
			rectPath.lineTo(AnimateHelper.rectDPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
		},
		animationType: 'easeInEaseOut'
	});
	
	rectSecondLine.animate({
		style: {
			opacity: 1,

		},
		duration: 20,
		delay: 8500,
		animationType: 'easeInEaseOut'
	});
	
	AnimateHelper.animate({
		style: {
			rectAPoint: new Point(500.5, 50.5),
			rectAngle:0
		},
		duration: 1000,
		delay: 9500,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectDPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(AnimateHelper.rectBPoint);
			rectPath.lineTo(
				AnimateHelper.rectAPoint
					.add(
						-10*Math.sin(this.rectAngle),
						-10*Math.sin(this.rectAngle)
					)
			
			);
			rectPath.lineTo(AnimateHelper.rectDPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
		},
		animationType: 'easeInEaseOut'
	});
	
	rectSecondLine.animate({
		style: {
			opacity: 0,

		},
		duration: 20,
		delay: 10000,
		animationType: 'easeInEaseOut'
	});
	
	// third
	AnimateHelper.animate({
		style: {
			rectAPoint: new Point(500.5, 150.5),
			rectBPoint: new Point(400.5, 150.5),

			rectAngle:Math.PI
		},
		duration: 1000,
		delay: 11000,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectFPoint);
			rectPath.lineTo(AnimateHelper.rectDPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(AnimateHelper.rectEPoint);
			rectPath.lineTo(
				AnimateHelper.rectBPoint
					.add(
						-10*Math.sin(this.rectAngle),
						0
					)
			);
			rectPath.lineTo(
				AnimateHelper.rectAPoint
					.add(
						10*Math.sin(this.rectAngle),
						0
					)
			);
			rectPath.lineTo(AnimateHelper.rectFPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
			if(this.rectAngle > Math.PI*0.5){
				if(rectFillPath)
					rectFillPath.remove();
	
				rectFillPath = new Path();
				rectFillPath.moveTo(AnimateHelper.rectEPoint);
				rectFillPath.lineTo(
					AnimateHelper.rectBPoint
						.add(
							-10*Math.sin(this.rectAngle),
							0
						)
				);
				rectFillPath.lineTo(
					AnimateHelper.rectAPoint
						.add(
							10*Math.sin(this.rectAngle),
							0
						)
				
				);
				rectFillPath.lineTo(AnimateHelper.rectFPoint);
				rectFillPath.strokeColor = "black";
				rectFillPath.fillColor = "white";
			}
		},
		animationType: 'easeInEaseOut'
	});
	
	rectThirdLine.animate({
		style: {
			opacity: 1,

		},
		duration: 20,
		delay: 11500,
		animationType: 'easeInEaseOut'
	});

	AnimateHelper.animate({
		style: {
			rectAPoint: new Point(500.5, 50.5),
			rectBPoint: new Point(400.5, 50.5),

			rectAngle:0
		},
		duration: 1000,
		delay: 12500,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectFPoint);
			rectPath.lineTo(AnimateHelper.rectDPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(AnimateHelper.rectEPoint);
			rectPath.lineTo(
				AnimateHelper.rectBPoint
					.add(
						-10*Math.sin(this.rectAngle),
						0
					)
			);
			rectPath.lineTo(
				AnimateHelper.rectAPoint
					.add(
						10*Math.sin(this.rectAngle),
						0
					)
			);
			rectPath.lineTo(AnimateHelper.rectFPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
			if(this.rectAngle > Math.PI*0.5){
				if(rectFillPath)
					rectFillPath.remove();
	
				rectFillPath = new Path();
				rectFillPath.moveTo(AnimateHelper.rectEPoint);
				rectFillPath.lineTo(
					AnimateHelper.rectBPoint
						.add(
							-10*Math.sin(this.rectAngle),
							0
						)
				);
				rectFillPath.lineTo(
					AnimateHelper.rectAPoint
						.add(
							10*Math.sin(this.rectAngle),
							0
						)
				
				);
				rectFillPath.lineTo(AnimateHelper.rectFPoint);
				rectFillPath.fillColor = "white";
			}
		},
		animationType: 'easeInEaseOut'
	});
	
	
	rectThirdLine.animate({
		style: {
			opacity: 0,

		},
		duration: 20,
		delay: 13000,
		animationType: 'easeInEaseOut'
	});
	
	// fourth
	AnimateHelper.animate({
		style: {
			rectAPoint: new Point(400.5, 50.5),
			rectDPoint: new Point(400.5, 150.5),
			rectAngle:Math.PI
		},
		duration: 1000,
		delay: 14000,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectGPoint);
			rectPath.lineTo(AnimateHelper.rectBPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(AnimateHelper.rectHPoint);

			rectPath.lineTo(
				AnimateHelper.rectDPoint
					.add(
						0,
						10*Math.sin(this.rectAngle)
					)
			);
			rectPath.lineTo(
					AnimateHelper.rectAPoint
						.add(
							0,
							-10*Math.sin(this.rectAngle)
						)
				);			
			rectPath.lineTo(AnimateHelper.rectGPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
			if(this.rectAngle > Math.PI*0.5){
				if(rectFillPath)
					rectFillPath.remove();
	
				rectFillPath = new Path();
				rectFillPath.moveTo(AnimateHelper.rectHPoint);
				rectFillPath.lineTo(
					AnimateHelper.rectDPoint
						.add(
							0,
							10*Math.sin(this.rectAngle)
						)
				);
				rectFillPath.lineTo(
					AnimateHelper.rectAPoint
						.add(
							0,
							-10*Math.sin(this.rectAngle)
						)
				
				);
				rectFillPath.lineTo(AnimateHelper.rectGPoint);
				rectFillPath.strokeColor = "black";
				rectFillPath.fillColor = "white";
			}
		},
		animationType: 'easeInEaseOut'
	});
	
	rectFourthLine.animate({
		style: {
			opacity: 1,

		},
		duration: 20,
		delay: 14500,
		animationType: 'easeInEaseOut'
	});

	AnimateHelper.animate({
		style: {
			rectAPoint: new Point(500.5, 50.5),
			rectDPoint: new Point(500.5, 150.5),

			rectAngle:0
		},
		duration: 1000,
		delay: 15500,
		update:function(){
			if(rectPath)
				rectPath.remove();

			rectPath = new Path();
			rectPath.moveTo(AnimateHelper.rectGPoint);
			rectPath.lineTo(AnimateHelper.rectBPoint);
			rectPath.lineTo(AnimateHelper.rectCPoint);
			rectPath.lineTo(AnimateHelper.rectHPoint);

			rectPath.lineTo(
				AnimateHelper.rectDPoint
					.add(
						0,
						10*Math.sin(this.rectAngle)
					)
			);
			rectPath.lineTo(
					AnimateHelper.rectAPoint
						.add(
							0,
							-10*Math.sin(this.rectAngle)
						)
				);			
			rectPath.lineTo(AnimateHelper.rectGPoint);
			rectPath.strokeColor = "black";
			rectPath.opacity = AnimateHelper.rectOpacity;
			if(this.rectAngle > Math.PI*0.5){
				if(rectFillPath)
					rectFillPath.remove();
	
				rectFillPath = new Path();
				rectFillPath.moveTo(AnimateHelper.rectHPoint);
				rectFillPath.lineTo(
					AnimateHelper.rectDPoint
						.add(
							0,
							10*Math.sin(this.rectAngle)
						)
				);
				rectFillPath.lineTo(
					AnimateHelper.rectAPoint
						.add(
							0,
							-10*Math.sin(this.rectAngle)
						)
				
				);
				rectFillPath.lineTo(AnimateHelper.rectGPoint);
				rectFillPath.fillColor = "white";
			}
		},
		animationType: 'easeInEaseOut'
	});
	
	rectFourthLine.animate({
		style: {
			opacity: 0,
		},
		duration: 20,
		delay: 16000,
		animationType: 'easeInEaseOut'
	});
}

Interaction.init = function(container){
	Interaction.container = container;
	
	// set interaction title
	Main.setObjective('Yandaki şekillerin simetrilerini oluşturmak için, çizeceğiniz doğru parçasının başlangıç ve bitiş noktalarını fare ile belirleyiniz. Daha sonra kontrol ediniz.');
	
	//var dotGroup = new Group();
	var dotGroup = [];
	// creating main rectangle
	var mainRect = new Path.Rectangle(new Point(10.5, 10.5), new Size(400, 250));
	mainRect.strokeColor = "grey";
	var symLine = new Path.Line(new Point(210,10), new Point(210, 260));
	symLine.strokeColor = "grey";
	symLine.strokeWidth = 2;
	symLine.dashArray = [3,2];
	// creating dots
	for(i = 0; i < 13; i++){
		for(j = 0; j < 8; j++){
			var circc = new Path.Circle(new Point(30+(i*30), 30+(j*30)), 3);
			circc.strokeColor = "grey";
			circc.fillColor = "grey";
			circc.class = "circle";
			circc.id2 = i*8 + j;
			if(circc.id2 < 48){
				circc.class = "non-click";
			}
			dotGroup.push(circc);
		}
	}
	
	// randomizing shape
	var myArr = new Array();
	// startPoint
	var startPoint = Math.floor(Math.random() * 4) + 48;
	// endPoint
	var endPoint = Math.floor(Math.random() * 4) + 52;
	// firstPoint
	var firstPt = Math.floor(Math.random() * 4) + 24;
	var firstMlt = Math.floor(Math.random() * 3);
	var firstPoint = firstPt + (firstMlt * 8);
	//secondPoint
	var secondPt = Math.floor(Math.random() * 4);
	var secondMlt = Math.floor(Math.random() * 3);
	var secondPoint = secondPt + (secondMlt * 8);
	// thirdPoint
	var thirdPt = Math.floor(Math.random() * 4) + 4;
	var thirdMlt = Math.floor(Math.random() * 3);
	var thirdPoint = thirdPt + (thirdMlt * 8);
	// fourthPoint
	var fourthPt = Math.floor(Math.random() * 4) + 28;
	var fourthMlt = Math.floor(Math.random() * 3);
	var fourthPoint = fourthPt + (fourthMlt * 8);
	myArr.push(startPoint);
	myArr.push(firstPoint);
	myArr.push(secondPoint);
	myArr.push(thirdPoint);
	myArr.push(fourthPoint);
	myArr.push(endPoint);
	
	
	var quesArr = new Array();
	var answerArr = new Array();
	var qLineGroup = new Group();
	var aLineGroup = new Group();
	for(i = 0; i < 5; i++){
		var qLine = new Path.Line(new Point(dotGroup[myArr[i]].position.x, dotGroup[myArr[i]].position.y),
						new Point(dotGroup[myArr[i+1]].position.x, dotGroup[myArr[i+1]].position.y));
		quesArr.push(dotGroup[myArr[i]].id2);
		if(i == 4){
			quesArr.push(dotGroup[myArr[i+1]].id2);
		}
		var a = myArr[i]; 
		var b = a % 8; 
		var c = Math.floor(a/8); 
		var d = myArr[i+1]; 
		var e = d % 8; 
		var f = Math.floor(d/8); 
		var g = 104-((c+1)*8)+b;
		var h = 104-((f+1)*8)+e;
		var aLine = new Path.Line(new Point(dotGroup[g].position.x, dotGroup[g].position.y), 
						new Point(dotGroup[h].position.x, dotGroup[h].position.y));
		answerArr.push(dotGroup[g].id2);
		if(i == 4){
			answerArr.push(dotGroup[h].id2);
		}
		aLine.strokeColor = "green";
		aLine.strokeWidth = 4;
		aLineGroup.addChild(aLine);
		
		aLine.opacity = 0;
		
		qLine.strokeColor = "green";
		qLine.strokeWidth = 4;
		qLineGroup.addChild(qLine);
	}	
	
	var ansArr = new Array();
	var path;
	var clickk = 0;
	var drag = new Tool();
	drag.setHitTestOptions({ fill: true, stroke: true, segments: true, tolerance: 9 , class: "circle"});
	drag.onMouseDown = function(event){
		if(event.item){
			if(clickk == 0){
				path = new Path();
				path.strokeColor = 'red';
				path.strokeWidth = 4;
				path.add(event.item.position);
				ansArr.push(event.item.id2);
				event.item.strokeColor = "black";
				event.item.fillColor = "black";
				clickk = 1;
			}
			else{
				path.add(event.item.position);
				ansArr.push(event.item.id2);
				event.item.strokeColor = "black";
				event.item.fillColor = "black";
			}
		}
	};
	drag.activate();
	
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "90px");
	
	$(container).append('<button id="againBtn" class="control_button">Baştan</button>');
	$('#againBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "10px");
	
	$(container).append('<button id="nextBtn" class="next_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "60px");
	$('#nextBtn').hide();
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "450px")
					.css("top", "114px")
					.css("width", "120px")
					.css("height", "50px")
				//	.css("border", "solid")
					.css("text-align", "left");

	submit = function() {
		var correct = 0;
		var correct2 = 0;
		console.log("ansArr from submit: "+ansArr);
		ansArr = RemoveSamePoints(ansArr);
		console.log("ansArr from submit after remove same points: "+ansArr);
		ansArr = RemoveLinearPoints(ansArr);
		console.log("ansArr from submit after remove linear points: "+ansArr);
		answerArr = RemoveLinearPoints(answerArr);
		console.log("answerArr from submit: "+answerArr);
		
		var myLen = answerArr.length;
		for(i = 0; i < myLen; i++){
			if(ansArr[i] == answerArr[i]){
				correct += 1;
			}
		}
		for(i = 0; i < myLen; i++){
			if(ansArr[i] == answerArr[myLen-1-i]){
				correct2 += 1;
			}
		}
		if(correct == myLen || correct2 == myLen){
			$('#statuss').get(0).className = "status_true";
			$('#statuss').html("Tebrikler!");
			$('#checkBtn').hide();
			$('#againBtn').hide();
			$('#nextBtn').show();
		}
		else{
			$('#statuss').get(0).className = "status_false";
			$('#statuss').html("Olmadı! Doğru cevap yanda gösterilmiştir.");
			if(ansArr.length < answerArr.length){
				for(i = ansArr.length; i < answerArr.length; i++){
					ansArr[i] = -1;
				}
			}
			var len = answerArr.length;
			for(i = 0; i < 5; i++){
				aLineGroup.children[i].opacity = 1;
			}
			$('#checkBtn').hide();
			$('#againBtn').hide();
			$('#nextBtn').show();
		}
		
	}
	
	// checkBtn click func. -> call submit
	$('#checkBtn').click(submit);
	$('#againBtn').click(function(){
		if(path){
			path.remove();
		}
		clickk = 0;
		ansArr = [];
		for(i = 48; i < 104; i++){
			dotGroup[i].fillColor = "grey";
			dotGroup[i].strokeColor = "grey";
		}
		console.log("ansArr: "+ansArr);
		console.log("quesArr: "+quesArr);
		console.log("answerArr: "+answerArr);
	});
	
	$('#nextBtn').click(function() {
		project.activeLayer.removeChildren();
		var a = $('#interaction_canvas')
		$(Interaction.container).html("");
		$(Interaction.container).html(a);
		Interaction.init(container);
		
	});
	
	function RemoveSamePoints(arr){
		var retArr = new Array();
		var arr2 = new Array();
		for(j = 0; j < arr.length; j++){
			arr2[j] = arr[j];
		}
		for(i = 0; i < arr.length-1; i++){
			if(arr[i] == arr[i+1]){
				arr2[i] = -1;
			}
		}
		for(i = 0, index = 0; i < arr2.length; i++){
			if(arr2[i] != -1){
				retArr[index] = arr2[i];
				index += 1;
			}
		}
		return retArr;
	}
	
	function RemoveLinearPoints(arr){
		var retArr = new Array();
		var arr2 = new Array();
		for(j = 0; j < arr.length; j++){
			arr2[j] = arr[j];
		}
		for(i = 0; i < arr.length - 2; i++){
			var a = new Point();
			var b = new Point();
			var c = new Point();
			a.x = dotGroup[arr[i]].position.x;
			a.y = dotGroup[arr[i]].position.y;
			b.x = dotGroup[arr[i+1]].position.x;
			b.y = dotGroup[arr[i+1]].position.y;
			c.x = dotGroup[arr[i+2]].position.x;
			c.y = dotGroup[arr[i+2]].position.y;
			if(((a.y == b.y) && (a.y == c.y))
				|| ((a.x == b.x) && (a.x == c.x))
				|| (((b.y - a.y) / (b.x - a.x)) == ((c.y - a.y) / (c.x - a.x)))){
				arr2[i+1] = -1;
			}
		}
		for(i = 0, index = 0; i < arr2.length; i++){
			if(arr2[i] != -1){
				retArr[index] = arr2[i];
				index += 1;
			}
		}
		return retArr;
	}
}
