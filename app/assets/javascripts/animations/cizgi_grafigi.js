
/*Styles*/
// Your styles go here

/*Styles*/

var Animation = function(){};Animation();
var Interaction = function(){};Interaction();

Animation.init = function(container) {
	paperAddOns();
	
	xLabels = ["0", "1", "2", "3", "4"];
	// Create the chart
	var chart = {
		xAxisName: "Zaman\n(Saat)",
		yAxisName: "Yol\n(km)",
		xLabels: xLabels,
		yAxisLimits: [0, 40],
		yAxisStep: 10,
		xGridLabelStyle: {
			
		},
		data: []
	};
	
//	var graph = new Path.LineGraph(new Point(80, 35), 180, 120, chart);
}

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container) {
	interactionInit(container);
}

interactionInit = function(container) {
	// Variables
	var correctCircle;

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
		yAxisLimits: [90, 94],
		xGridLabelStyle: {
			justification: 'right',
			fillColor: 'black',
			fontSize: 8,
			rotation: -90
		},
		data: data
	};
	
	var graph = new Path.LineGraph(new Point(80, 70), 180, 160, chart);
	//graph.scale(Main.scale, new Point(0,0));
	
	
	$(container).append('<div id="graph_title"></div>');
	$('#graph_title').css("line-height", "24px")
					.css("color", "#262626")
					.css("position", "absolute")
					.css("left", "76px")
					.css("top", "12px")
					.css("width", "330")
					.css("height", "100")
					.css("font-size", "16px");

	$('#graph_title').append('<div><b>Grafik: </b>Altın satış fiyatı</div>');

	
	
	// Select random question
	randomDay = Math.floor(Math.random() * 6);
	correctAnswer = data[randomDay];
	
	Main.setObjective("Aşağıdaki grafiğe göre altın satış fiyatı "+xLabels[randomDay]+" günü kaç lira olmuştur?");
	
	
	// Status
	$(container).append('<div id="status" class="status_field"></div>');
	$('#status').css("position", "absolute")
	        	.css("top", "180px")
	        	.css("left", "340px")
	        	.css("text-align", "center");
	       
	// Restart
	restart = function() {
		if (correctCircle) {
			correctCircle.remove();
		}
		$('#graph_title').remove();
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
			if (correctCircle) {
				correctCircle.remove();
			}
			correctCircle = new Path.Circle(graph.getXYCoordinate(randomDay, data[randomDay] - 90), 6);
			correctCircle.fillColor = 'red';
			
			$('#status').html('<span class="status_true">Tebrikler!</span>');
			$('#submitButton').val("Sonraki");
			$('#submitButton').unbind("click");
			$('#submitButton').click(restart);
			submit = restart;
		} else {
			if (noOfWrongAnswers == 0) {
				$('#status').html('<span class="status_false">Tekrar Deneyiniz!</span>');
				$('#textInput').val('');
				noOfWrongAnswers = 1;
			} else {
				console.log('2');
				if (correctCircle) {
					correctCircle.remove();
				}
				correctCircle = new Path.Circle(graph.getXYCoordinate(randomDay, data[randomDay] - 90), 6);
				correctCircle.fillColor = 'red';
				$('#status').html('<span class="status_false">Olmadı!</span>');
				$('#textInput').val(correctAnswer);
				$('#submitButton').val("Sonraki");
				$('#submitButton').unbind("click");
				$('#submitButton').click(restart);
				submit = restart;
			}
		}
	};
	
	// Create the control button
	$(container).append('<input id="submitButton" type="button" value="Kontrol" />');
	$('#submitButton').css("position", "absolute")
					  .css("top", "130px")
					  .css("left", "406px");
	$('#submitButton').addClass('control_button');
	$('#submitButton').click(submit);
	
	// Create the input field
	$(container).append('<input id="textInput" type="textbox" />');
	$('#textInput').css("position", "absolute")
				   .css("top", "80px")
				   .css("left", "416px");
	$('#textInput').addClass('number_input_field');
	$("#textInput").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
}

paperAddOns = function () {
	
	
	Path.LineGraph = function(point, width, height, chart) {
		var group = new Group();
		
		var gridStartOffset = 0;
	
		var numOfXPoints = chart.xLabels.length;
		var xStep = (width - 20) / (numOfXPoints - 1)
		var xStart = point.x + gridStartOffset;

		var yMax, yMin, yStep, yStart, numOfYPoints;
		
		if (chart.yAxisLimits == null) {
			yMax = Math.max.apply(null, chart.data);
			yMin = Math.min.apply(null, chart.data);
		} else {
			yMax = chart.yAxisLimits[1];
			yMin = chart.yAxisLimits[0];
		}

		var yAxisStep = chart.yAxisStep ? chart.yAxisStep : 1;
		var numOfYPoints = Math.floor((yMax - yMin)/yAxisStep) + 1;
		var yStep = -(height - 20) / ((yMax - yMin)/yAxisStep);
		var yStart = point.y + height - gridStartOffset;

		var defaultGridLabelStyle = {
			justification: 'right',
			fillColor: 'black'
		}
		
		var xGridLabelStyle = chart.xGridLabelStyle ? chart.xGridLabelStyle : defaultGridLabelStyle;
		var yGridLabelStyle = chart.yGridLabelStyle ? chart.yGridLabelStyle : defaultGridLabelStyle;
		
		// Grid Lines
		for (index = 0; index < numOfXPoints; index++) {
			gridLine = new Path.Line(new Point(xStep * index + xStart, yStart + gridStartOffset), new Point(xStep * index + xStart, yStep * (numOfYPoints - 1) + yStart - 10));
			gridLine.strokeWidth = 1;
			gridLine.strokeColor = 'gray';
			group.addChild(gridLine);
		}
		
		for (index = 0; index < numOfYPoints; index++) {
			gridLine = new Path.Line(new Point(xStart - gridStartOffset, index * yStep + yStart), new Point(xStep * (numOfXPoints-1) + xStart + 10, index * yStep + yStart));
			gridLine.strokeWidth = 1;
			gridLine.strokeColor = 'gray';
			group.addChild(gridLine);
		}
		
		// Grid Labels
		for (index = 0; index < numOfXPoints; index++) {
			var text = new PointText(new Point(xStart + index*xStep + 2.5, yStart + 5.5 + gridStartOffset));
//			text.setStyle(xGridLabelStyle);
			text.justification = 'right';
			text.fillColor = 'black';
			text.fontSize = 8;
			text.content = chart.xLabels[index];
			if (xGridLabelStyle.rotation) {
				text.rotate(xGridLabelStyle.rotation);
			}
			group.addChild(text);
		}
		
		for (index = 0; index < numOfYPoints; index++) {
			var text = new PointText(new Point(xStart - 10 - gridStartOffset, yStart + index*yStep + 1));
			text.justification = yGridLabelStyle.justification;
			text.fillColor = yGridLabelStyle.fillColor;
//			text.fontSize = yGridLabelStyle.fontSize;
			text.content = (yMax - yMin) / (numOfYPoints-1) * index + yMin;
			group.addChild(text);
		}
		
		// Axes
		origin = new Point(point.add([0, height]));
		
		xAxis = new Path.OneSidedArrow(origin, origin.add([width + 10 + gridStartOffset, 0]),15, 30);
		xAxis.strokeWidth = 4;
		
		yAxis = new Path.OneSidedArrow(origin, origin.add([0, -height - 10 - gridStartOffset]),15, 30);
		yAxis.strokeWidth = 4;
		
		group.addChild(xAxis);
		group.addChild(yAxis);
		
		// Axis Labels
		var text = new PointText(new Point(xStart + xStep * numOfXPoints + 10, yStart+gridStartOffset+4));
		text.justification = 'left';
		text.fillColor = 'black';
		text.content = chart.xAxisName;
		group.addChild(text);
		
		var text = new PointText(new Point(xStart - gridStartOffset, yStart + yStep * (numOfYPoints-1) - 40));
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
		
		group.getXYCoordinate = function(x, y) {
			return new Point((xStep * x + xStart), yStep * y + yStart);
		}
		
		return group;
	};
};
