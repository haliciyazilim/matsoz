
Animation = {}
Interaction = {}

Interaction.getFramework = function () {
	return 'paper';
}

Interaction.init = function () {
	circ1 = new Path.Circle(new Point(50, 60), 20);
	circ1.strokeWidth = 2;
	circ1.strokeColor = 'black';
	circ1.fillColor = '#f55';
	
	circ1.animate({
		style: {
			position: new Point(400, 60)
		},
		duration: 4000,
		delay: 1000,
		animationType: 'linear'
	})
	
	circ2 = new Path.Circle(new Point(50, 120), 20);
	circ2.strokeWidth = 2;
	circ2.strokeColor = 'black';
	circ2.fillColor = '#f55';
	
	circ2.animate({
		style: {
			position: new Point(400, 120)
		},
		duration: 4000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	})
	
	circ3 = new Path.Circle(new Point(50, 180), 20);
	circ3.strokeWidth = 2;
	circ3.strokeColor = 'black';
	circ3.fillColor = '#f55';
	
	circ3.animate({
		style: {
			position: new Point(400, 180)
		},
		duration: 4000,
		delay: 1000,
		animationType: 'easeIn'
	})
	
	circ4 = new Path.Circle(new Point(50, 240), 20);
	circ4.strokeWidth = 2;
	circ4.strokeColor = 'black';
	circ4.fillColor = '#f55';
	
	circ4.animate({
		style: {
			position: new Point(400, 240)
		},
		duration: 4000,
		delay: 1000,
		animationType: 'easeOut'
	})
}