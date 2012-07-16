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
}

Interaction.init = function(container){
	Interaction.container = container;
	
	// set interaction title
	Main.setObjective('Yandaki şekillerin simetrilerini oluşturmak için, çizeceğiniz doğru parçasının başlangıç ve bitiş noktalarını fare ile belirleyiniz. Daha sonra kontrol ediniz.');
	
	//var dotGroup = new Group();
	var dotGroup = [];
	// creating main rectangle
	var mainRect = new Path.Rectangle(new Point(50.5, 10.5), new Size(400, 250));
	mainRect.strokeColor = "black";
	var symLine = new Path.Line(new Point(250,10), new Point(250, 260));
	symLine.strokeColor = "grey";
	symLine.strokeWidth = 2;
	symLine.dashArray = [3,2];
	// creating dots
	for(i = 0; i < 13; i++){
		for(j = 0; j < 8; j++){
			var circc = new Path.Circle(new Point(70+(i*30), 30+(j*30)), 3);
			circc.strokeColor = "black";
			circc.fillColor = "black";
			circc.class = "circle";
			circc.id2 = i*8 + j;
			if(circc.id2 < 48){
				circc.class = "non-click";
				circc.fillColor = "grey";
				circc.strokeColor = "grey";
			}
			dotGroup.push(circc);
		}
	}
	
//	var myArr = new Array();
//	for(i = 0; i < 7; i++){
//		myArr[i] = Math.floor(Math.random() * 8)+(i*8);
//	}
	
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
		aLine.strokeColor = "red";
		aLine.strokeWidth = 3;
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
	drag.setHitTestOptions({ fill: true, stroke: true, segments: true, tolerance: 7 , class: "circle"});
	drag.onMouseDown = function(event){
		if(event.item){
			if(clickk == 0){
				path = new Path();
				path.strokeColor = 'orange';
				path.strokeWidth = 4;
				path.add(event.item.position);
				ansArr.push(event.item.id2);
				clickk = 1;
			}
			else{
				path.add(event.item.position);
				ansArr.push(event.item.id2);
			}
		}
	};
	drag.activate();
	
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "20px");
	
	$(container).append('<button id="nextBtn" class="next_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "20px");
	$('#nextBtn').hide();
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "160px")
					.css("top", "264px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center");
	submit = function() {
		var correct = 0;
		var correct2 = 0;
		ansArr = RemoveSamePoints(ansArr);
		ansArr = RemoveLinearPoints(ansArr);
		answerArr = RemoveLinearPoints(answerArr);
		
		for(i = 0; i < 6; i++){
			if(ansArr[i] == answerArr[i]){
				correct += 1;
			}
		}
		for(i = 0; i < 6; i++){
			if(ansArr[i] == answerArr[5-i]){
				correct2 += 1;
			}
		}
		if(correct == 6|| correct2 == 6){
			$('#statuss').get(0).className = "status_true";
			$('#statuss').html("Tebrikler!");
			$('#checkBtn').hide();
			$('#nextBtn').show();
		}
		else{
			$('#statuss').get(0).className = "status_false";
			$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
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
			$('#nextBtn').show();
		}
		
	}
	
	// checkBtn click func. -> call submit
	$('#checkBtn').click(submit);
	
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