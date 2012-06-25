var Acinim = function(){};
function animationInit(){};

/*Styles*/
// Your styles go here

/*Styles*/

var Interaction = function(){};Interaction();
Interaction.init = function(container){
	// Any custom raphael function goes here
	
	Raphael.fn.oneSidedArrow = function(x1, y1, x2, y2, arrowHeadSize) {
		if (arrowHeadSize == null) {
			arrowHeadSize = 3;
		}
	
		return this.line(x1, y1, x2, y2);
	}
	
	Raphael.fn.lineGraph = function(x, y, width, height, chart) {
		var st = this.set();
		
		
		numOfXPoints = chart.data.length;
		xStep = (width - 20) / (numOfXPoints)
		xStart = x + 10;

		yMax = Math.max.apply(null, chart.data);
		yMin = Math.min.apply(null, chart.data);
		yStep = -(height - 20) / (yMax - yMin);
		yStart = y + height - 10;
		
		
//		yDataRange = Math.max.apply(null, chart.data);
//		numOfYPoints = 1;
//		while ( )
		
		// Axes
		st.push(this.oneSidedArrow(x, y + height, x + width, y + height).attr({"stroke-width": "4px"}));
		st.push(this.oneSidedArrow(x, y + height, x, y).attr({"stroke-width": "4px"}));
		
		// Data Lines
		index = 0;
		dataLineString = "M" + (xStep * index + xStart) + "," + ((chart.data[index] - yMin) * yStep + yStart);
		for (index = 1; index < chart.data.length; index++) {
			dataLineString += "L" + (xStep * index + xStart) + "," + ((chart.data[index] - yMin) * yStep + yStart);			
		}
		
		st.push(this.path(dataLineString).attr({"stroke-width": "2px"}));
		
		return st;
		
		
	};
	
	
	Main.setObjective("The objective goes here");
	
	// The code starts here
	var data = [];
	
	for (i = 0; i < 4; i++) {
		data.push(Math.floor(Math.random() * 4) + 91);
	}
	
	var chart = {
		xAxisName: "Zaman\n(Gün)",
		yAxisName: "Satış Fiyatı\n(TL)",
		xLabels: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
		data: data
	};
	
	paper = Raphael(container);
	
	paper.lineGraph(40,80,200,200,chart);
}
