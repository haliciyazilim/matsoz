
function animationInit(){};

var Interaction = function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container) {
	interactionInit(container);
}

interactionInit = function(container) {
	var group = new Group();
	var circle = new Path.Circle(new Point(100, 100), 50);
	
	var circle2 = new Path.Circle(new Point(200, 100), 50);
	
	group.addChild(circle);
	group.addChild(circle2);
	group.strokeColor = 'black';
	group.strokeWidth = 45;
	
	
	
	var text = new PointText(new Point(150, 200));
	text.justification = 'center';
	text.fillColor = 'black';
	text.content = "deneme";
//	text.position = (new Point(50, 200));
	group.addChild(text);
	
//	group.position = new Point(300,300);
	
	var tool = new Tool();
	
	tool.onMouseDown = function (event) {
		if (event.item) {
			event.item.strokeColor = 'red';
			event.item.position = new Point(300,0);
		}
	}
	
	var path = new Path.Line(new Point(10,10), new Point(100,100))
	
	path.strokeColor = 'black';
	
	group.rotate(90);
}