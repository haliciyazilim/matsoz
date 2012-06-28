
function animationInit(){};

/*Styles*/
// Your styles go here

/*Styles*/

var Interaction = function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container) {
	interactionInit(container);
}

interactionInit = function(container) {
	paperAddOns();
		
	// Create the random data
	var data = [];
	
	for (i = 0; i < 6; i++) {
		data.push(Math.floor(Math.random() * 4) + 91);
	}
	
	xLabels = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
	// Create the chart
	var chart = {
		xAxisName: "Zaman\n(Gün)",
		yAxisName: "Satış Fiyatı\n(TL)",
		xLabels: xLabels,
		yAxisLimits: [91, 94],
		data: data
	};
	
	var graph = new Path.LineGraph(new Point(50, 90), 180, 160, chart);
	graph.scale(Main.scale, new Point(0,0));
	
	// Select random question
	randomDay = Math.floor(Math.random() * 6);
	correctAnswer = data[randomDay];
	
	Main.setObjective("Aşağıdaki grafiğe göre altın satış fiyatı "+xLabels[randomDay]+" günü kaç lira olmuştur?");
	
	
	// Status
	$(container).append('<div id="status" class="status_field"></div>');
	$('#status').css("position", "absolute")
					  .css("top", "250px")
					  .css("left", "300px")
					  .css("text-align", "center");
	
	// Restart
	restart = function() {
		$('#textInput').remove();
		$('#submitButton').remove();
		$('#status').remove();
		graph.remove();
		interactionInit(container);		
	}
	
	
	// Submit
	noOfWrongAnswers = 0;
	
	submit = function () {
		val = $('#textInput').val();
		
		if (!Util.isInteger(val)) {
			$('#status').html('<span class="status_alert">Lütfen kutucuğa bir tamsayı giriniz</span>');
			return;
		}
		
		if (val == correctAnswer) {
			$('#status').html('<span class="status_true">Tebrikler!</span>');
			$('#submitButton').val("Sonraki");
			$('#submitButton').click(restart);
			submit = restart;
		} else {
			if (noOfWrongAnswers == 0) {
				$('#status').html('<span class="status_false">Tekrar Deneyiniz!</span>');
				$('#textInput').val('');
				noOfWrongAnswers = 1;
			} else {
				$('#status').html('<span class="status_false">Olmadı!</span>');
				$('#textInput').val(correctAnswer);
				$('#submitButton').val("Sonraki");
				$('#submitButton').click(restart);
				submit = restart;
			}
		}
	};
	
	// Create the control button
	$('#interaction_container').append('<input id="submitButton" type="button" value="Kontrol" />');
	$('#submitButton').css("position", "absolute")
					  .css("top", "200px")
					  .css("left", "366px");
	$('#submitButton').addClass('control_button');
	$('#submitButton').click(submit);
	
	// Create the input field
	$('#interaction_container').append('<input id="textInput" type="textbox" />');
	$('#textInput').css("position", "absolute")
				   .css("top", "150px")
				   .css("left", "376px");
	$('#textInput').addClass('number_input_field');
	$("#textInput").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	view.draw();
}

paperAddOns = function () {
	Path.OneSidedArrow = function(point1, point2, arrowHeadSize, angle) {
		if (arrowHeadSize == null) {
			arrowHeadSize = 3;
		}
		if(angle == null && angle == 'undefined')
			angle = 30;
		var group = new Group();
		var path = new Path.Line(point1, point2);
		
		var _a = Util.radianToDegree(
							Math.asin( 
								(point1.y-point2.y) / 
								point1.getDistance(point2) 
								) 
							);
		var a1 = Util.degreeToRadians(180 + _a + angle);
		var a2 = Util.degreeToRadians(180 + _a - angle);
		var path2 = new Path.Line(
							point2,
							new Point( 
									point2.x + arrowHeadSize*Math.cos(a1),
									point2.y - arrowHeadSize*Math.sin(a1)
								) 
							);
		var path3 = new Path.Line(
							point2,
							new Point( 
									point2.x + arrowHeadSize*Math.cos(a2) , 
									point2.y - arrowHeadSize*Math.sin(a2) 
								) 
							);
		var pt = new Path();
		pt.add(point2);
		pt.add(new Point( 
						point2.x + arrowHeadSize*Math.cos(a1),
						point2.y - arrowHeadSize*Math.sin(a1)
					));
		pt.add(new Point( 
						point2.x + arrowHeadSize*Math.cos(a2) , 
						point2.y - arrowHeadSize*Math.sin(a2) 
					) );
		pt.closed = true;
		path.strokeColor = 'black';
		pt.style = {
			strokeColor: 'black',
			fillColor : 'black'
		};
		//path2.strokeColor = 'black';
		//path3.strokeColor = 'black';
		
		group.addChild(path);
		group.addChild(pt);
		//group.addChild(path2);
		//group.addChild(path3);
		return group;
	}
	
	Path.LineGraph = function(point, width, height, chart) {
		var group = new Group();
	
		numOfXPoints = chart.data.length;
		xStep = (width - 20) / (numOfXPoints - 1)
		xStart = point.x + 10;


		var yMax, yMin, yStep, yStart, numOfYPoints;
		
		if (chart.yAxisLimits == null) {
			yMax = Math.max.apply(null, chart.data);
			yMin = Math.min.apply(null, chart.data);
		} else {
			yMax = chart.yAxisLimits[1];
			yMin = chart.yAxisLimits[0];
		}
		
		numOfYPoints = Math.floor(yMax - yMin) + 1;
		yStep = -(height - 20) / (yMax - yMin);
		yStart = point.y + height - 10;
		
		// Grid Lines
		for (index = 0; index < numOfXPoints; index++) {
			gridLine = new Path.Line(new Point(xStep * index + xStart, yStart + 10), new Point(xStep * index + xStart, yStep * (yMax-yMin) + yStart - 10));
			gridLine.strokeWidth = 1;
			gridLine.strokeColor = 'gray';
			group.addChild(gridLine);
		}
		
		for (index = 0; index < numOfYPoints; index++) {
			gridLine = new Path.Line(new Point(xStart - 10, index * yStep + yStart), new Point(xStep * (numOfXPoints-1) + xStart + 10, index * yStep + yStart));
			gridLine.strokeWidth = 1;
			gridLine.strokeColor = 'gray';
			group.addChild(gridLine);
		}
		
		// Grid Labels
		for (index = 0; index < numOfXPoints; index++) {
			var text = new PointText(new Point(xStart + index*xStep, yStart + 50));
			text.justification = 'center';
			text.fillColor = 'black';
			text.content = chart.xLabels[index];
			text.rotate(90);
			group.addChild(text);
		}
		
		for (index = 0; index < numOfYPoints; index++) {
			var text = new PointText(new Point(xStart - 20, yStart + index*yStep));
			text.justification = 'right';
			text.fillColor = 'black';
			text.content = (yMax - yMin) / (numOfYPoints-1) * index + yMin;
			group.addChild(text);
		}
		
		// Axes
		origin = new Point(point.add([0, height]));
		
		xAxis = new Path.OneSidedArrow(origin, origin.add([width + 20, 0]),15, 30);
		xAxis.strokeWidth = 4;
		
		yAxis = new Path.OneSidedArrow(origin, origin.add([0, -height - 20]),15, 30);
		yAxis.strokeWidth = 4;
		
		group.addChild(xAxis);
		group.addChild(yAxis);
		
		// Axis Labels
		var text = new PointText(new Point(xStart + xStep * numOfXPoints + 10, yStart+10));
		text.justification = 'left';
		text.fillColor = 'black';
		text.content = chart.xAxisName;
		group.addChild(text);
		
		var text = new PointText(new Point(xStart - 10, yStart + yStep * numOfYPoints - 10));
		text.justification = 'center';
		text.fillColor = 'black';
		text.content = chart.yAxisName;
		group.addChild(text);
		
		// Data Lines
		index = 0;
		
		var path = new Path();
		path.moveTo(new Point((xStep * index + xStart), ((chart.data[index] - yMin) * yStep + yStart)));
		for (index = 1; index < chart.data.length; index++) {
			path.lineTo(new Point((xStep * index + xStart), ((chart.data[index] - yMin) * yStep + yStart)));
		}
		path.strokeWidth = 2;
		path.strokeColor = 'black';
		
		group.addChild(path);
		
		return group;
	};
};
