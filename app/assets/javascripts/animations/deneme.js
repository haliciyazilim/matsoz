
Animation = {}
Interaction = {}

Interaction.getFramework = function () {
	return 'paper';
}

Interaction.init = function (container) {
	
	var fillColor = "#bfe8ef";
	var fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
	var strokeColor = "#255b63";
	var strokeWidth = 2;
	
	var width = $(container).width();
	var height = $(container).height();	
	
	var matrix = Util.createProjectionMatrix(width, height, 40*width/height, 40, 50);
	
	var boxSize = 10;
	
	var boxCenterX = -80;
	var boxCenterY = -30;
	var boxCenterZ = -170;
	
	function createSurface(p1, p2, p3, p4, matrix) {
		var pp1 = Util.project(p1, matrix);
		var pp2 = Util.project(p2, matrix);
		var pp3 = Util.project(p3, matrix);
		var pp4 = Util.project(p4, matrix);

		var path = new Path();

		path.add(pp1);
		path.add(pp2);
		path.add(pp3);
		path.add(pp4);
		path.closed = true;
		
		return path;
	}
	
	var backSurface = {
		changed: true
	};
	
	var topSurface = {
		changed: true
	};
	
	var leftSurface = {
		changed: true
	};
	
	var frontSurface = {
		changed: true
	};
	
	var rightSurface = {
		changed: true
	};
	
	var bottomSurface = {
		changed: true
	};
	
	var animationHelper = new AnimationHelper({
		topAngle: 0,
		leftAngle: 0,
		rightAngle: 0,
		backAngle: 0,
		bottomAngle: 0
	})
	
	animationHelper.animate({
		style: {
			topAngle: Math.PI/2
		},
		duration: 1000,
		delay: 2000,
		animationType: 'easeInEaseOut',
		update: function() {
			topSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			rightAngle: Math.PI/2
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
		update: function() {
			topSurface.changed = true;
			frontSurface.changed = true;
			rightSurface.changed = true;
			backSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			backAngle: Math.PI/2
		},
		duration: 1000,
		delay: 4000,
		animationType: 'easeInEaseOut',
		update: function() {
			backSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			leftAngle: Math.PI/2
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
		update: function() {
			leftSurface.changed = true;
			frontSurface.changed = true;
			topSurface.changed = true;
//			bottomSurface.changed = true;
		}
	})
	
	animationHelper.animate({
		style: {
			bottomAngle: Math.PI/2
		},
		duration: 1000,
		delay: 6000,
		animationType: 'easeInEaseOut',
		update: function() {
			bottomSurface.changed = true;
			frontSurface.changed = true;
			rightSurface.changed = true;
		}
	})
	
	
	Interaction.onFrame = function() {
		// bottom surface

		if (bottomSurface.changed) {
			if (bottomSurface.remove) {
				bottomSurface.remove();
			}
			
			bottomSurface = createSurface(
				[-boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ],
				[ boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ],
				[ boxSize + boxCenterX, -boxSize-2*boxSize*Math.sin(animationHelper.bottomAngle) + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.bottomAngle) + boxCenterZ],
				[-boxSize + boxCenterX, -boxSize-2*boxSize*Math.sin(animationHelper.bottomAngle) + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.bottomAngle) + boxCenterZ],
				matrix
			)
			
			bottomSurface.fillColor = fillColor;
			bottomSurface.strokeColor = strokeColor;
			bottomSurface.strokeWidth = strokeWidth;
		}

		// back surface
		
		if (backSurface.changed) {
			if (backSurface.remove) {
				backSurface.remove();
			}

			localX = boxSize+2*boxSize*Math.sin(animationHelper.rightAngle);
			localZ = boxSize - 2*boxSize*Math.cos(animationHelper.rightAngle);

			backSurface = createSurface(
				[localX + boxCenterX, -boxSize + boxCenterY, localZ + boxCenterZ],
				[localX + boxCenterX,  boxSize + boxCenterY, localZ + boxCenterZ],
				[(-boxSize - localX) * Math.cos(animationHelper.rightAngle) + localX + boxCenterX + 2*boxSize*Math.sin(animationHelper.backAngle),  boxSize + boxCenterY, localZ - Math.sin(animationHelper.rightAngle) * boxSize + boxSize * Math.sin(animationHelper.backAngle) + boxCenterZ],
				[(-boxSize - localX) * Math.cos(animationHelper.rightAngle) + localX + boxCenterX + 2*boxSize*Math.sin(animationHelper.backAngle), -boxSize + boxCenterY, localZ - Math.sin(animationHelper.rightAngle) * boxSize + boxSize * Math.sin(animationHelper.backAngle) + boxCenterZ],
				matrix
			)

			backSurface.fillColor = fillColor;
			backSurface.strokeColor = strokeColor;
			backSurface.strokeWidth = strokeWidth;
		}
		
		// left surface
		
		if (leftSurface.changed) {
			if (leftSurface.remove) {
				leftSurface.remove();
			}

			leftSurface = createSurface(
				// [-boxSize + boxCenterX,  boxSize + boxCenterY,  boxSize + boxCenterZ],
				// [-boxSize + boxCenterX, -boxSize + boxCenterY,  boxSize + boxCenterZ],
				// [-boxSize - 2 * boxSize * Math.sin(animationHelper.leftAngle) + boxCenterX, -boxSize + boxCenterY, -boxSize + 2 * boxSize * Math.sin(animationHelper.leftAngle) + boxCenterZ],
				// [-boxSize - 2 * boxSize * Math.sin(animationHelper.leftAngle) + boxCenterX,  boxSize + boxCenterY, -boxSize + 2 * boxSize * Math.sin(animationHelper.leftAngle) + boxCenterZ],
				
				[-boxSize + boxCenterX,  boxSize + boxCenterY, boxSize + boxCenterZ],
				[-boxSize + boxCenterX, -boxSize + boxCenterY, boxSize + boxCenterZ],
				[-boxSize-2*boxSize*Math.sin(animationHelper.leftAngle) + boxCenterX, -boxSize + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.leftAngle) + boxCenterZ],
				[-boxSize-2*boxSize*Math.sin(animationHelper.leftAngle) + boxCenterX,  boxSize + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.leftAngle) + boxCenterZ],
				matrix
			)

			leftSurface.fillColor = fillColor;
			leftSurface.strokeColor = strokeColor;
			leftSurface.strokeWidth = strokeWidth;
		}
		
		// front surface
		
		if (frontSurface.changed) {
			if (frontSurface.remove) {
				frontSurface.remove();
			}
			
			frontSurface = createSurface(
				[ boxSize + boxCenterX,  boxSize + boxCenterY, boxSize + boxCenterZ],
				[ boxSize + boxCenterX, -boxSize + boxCenterY, boxSize + boxCenterZ],
				[-boxSize + boxCenterX, -boxSize + boxCenterY, boxSize + boxCenterZ],
				[-boxSize + boxCenterX,  boxSize + boxCenterY, boxSize + boxCenterZ],
				matrix
			);

			frontSurface.fillColor = fillColor;
			frontSurface.strokeColor = strokeColor;
			frontSurface.strokeWidth = strokeWidth;
		}

		// top surface

		if (topSurface.changed) {
			if (topSurface.remove) {
				topSurface.remove();
			}
			
			topSurface = createSurface(
				[-boxSize + boxCenterX, boxSize + boxCenterY,  boxSize + boxCenterZ],
				[ boxSize + boxCenterX, boxSize + boxCenterY,  boxSize + boxCenterZ],
				[ boxSize + boxCenterX, boxSize+2*boxSize*Math.sin(animationHelper.topAngle) + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.topAngle) + boxCenterZ],
				[-boxSize + boxCenterX, boxSize+2*boxSize*Math.sin(animationHelper.topAngle) + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.topAngle) + boxCenterZ],
				matrix
			)

			topSurface.fillColor = fillColor;
			topSurface.strokeColor = strokeColor;
			topSurface.strokeWidth = strokeWidth;
		}
		
		// right surface
		
		if (rightSurface.changed) {
			if (rightSurface.remove) {
				rightSurface.remove();
			}
		
			rightSurface = createSurface(
				[boxSize + boxCenterX,  boxSize + boxCenterY, boxSize + boxCenterZ],
				[boxSize + boxCenterX, -boxSize + boxCenterY, boxSize + boxCenterZ],
				[boxSize+2*boxSize*Math.sin(animationHelper.rightAngle) + boxCenterX, -boxSize + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.rightAngle) + boxCenterZ],
				[boxSize+2*boxSize*Math.sin(animationHelper.rightAngle) + boxCenterX,  boxSize + boxCenterY, boxSize - 2*boxSize*Math.cos(animationHelper.rightAngle) + boxCenterZ],
				matrix
			)

			rightSurface.fillColor = fillColor;
			rightSurface.strokeColor = strokeColor;
			rightSurface.strokeWidth = strokeWidth;
		}
	}
	
	console.log('ebik!');
	Main.setObjective("So far, so good!");
	
	
}