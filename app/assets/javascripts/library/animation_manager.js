// JavaScript Document

var AnimationManager = function(){
	AnimationManager.animationAnimations = [];
	AnimationManager.interactionAnimations = [];	
}

AnimationManager.Animation = function (item, animationHash) {
	this.item = item;
	
	this.style = animationHash.style;
	this.duration = animationHash.duration;
	
	if (animationHash.delay) {
		this.startTime = new Date().getTime() + animationHash.delay;
	} else {
		this.startTime = new Date().getTime();
	}
	
	if (animationHash.animationType) {
		this.animationType = animationHash.animationType;
		if (this.animationType == 'custom') {
			this.mappingFunction = animationHash.mappingFunction;
		}
	} else {
		this.animationType = 'linear';	
	}
	
	if (typeof(animationHash.init) == "function") {
		this.init = animationHash.init;
	}
	
	if (typeof(animationHash.callback) == "function") {
		this.callback = animationHash.callback;
	}
	
	if (typeof(animationHash.update) == "function") {
		this.update = animationHash.update;
	}
	
	this.idle = true;
	
	this.map = function(ratio) {
		if (this.animationType == 'linear') {
			return ratio;
		} else if (this.animationType == 'easeIn') {
			return ratio * ratio;
		} else if (this.animationType == 'easeOut') {
			return ratio * (-ratio+2);
		} else if (this.animationType == 'easeInEaseOut') {
			return (ratio*ratio) * (3-2*ratio);
		} else if (this.animationType == 'easeInOutQuad') { // From jQuery
			if (ratio < 0.5) return 2*ratio*ratio;
			return ratio * (4 - 2*ratio) - 1;
		} else if (this.animationType == 'custom') {
			return this.mappingFunction(ratio);
		} else {
			return ratio;
		}
	}
}


AnimationManager.animate = function(animation) {
	if (paper.project == Main.animationProject) {
		AnimationManager.animationAnimations.push(animation);
	} else if (paper.project == Main.interactionProject) {
		AnimationManager.interactionAnimations.push(animation);
	}
}

AnimationManager.clearAnimations = function () {
	if (paper.project == Main.animationProject) {
		AnimationManager.animationAnimations = [];
	} else if (paper.project == Main.interactionProject) {
		AnimationManager.interactionAnimations = [];
	}
}

AnimationManager.update = function(event) {
	var animations;
	
	if (paper.project == Main.animationProject) {
		animations = AnimationManager.animationAnimations;
	} else if (paper.project == Main.interactionProject) {
		animations = AnimationManager.interactionAnimations;
	}
	
	for(var i=0; i<animations.length; i++){		
		var animation = animations[i];
		
		currentTime = new Date().getTime();
		
		if (animation.startTime < currentTime) {
			if (animation.idle) {
				if (animation.init) {
					animation.item.init = animation.init;
					animation.item.init();
				}
				
				animation.startHash = {};
				animation.endHash = {};
				for (var key in animation.style) {
					if (animation.style.hasOwnProperty(key)) {
						animation.startHash[key] = (animation.item[key]);
							
					}
				}
				
				animation.idle = false;
			} else if (animation.startTime + animation.duration < currentTime) {
				animations.splice(i,1);
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
						animation.item[key] = animation.style[key];
					}
				}
				if (animation.update) {
					animation.item.update = animation.update;
					animation.item.update();
				}
				if (animation.callback) {
						animation.item.callback = animation.callback;
						animation.item.callback();
				}
				
			} else {
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
				    	var startValue = animation.startHash[key];
						var endValue = animation.style[key];
				
						var ratio = animation.map((currentTime - animation.startTime) / animation.duration);
						if (Util.isNumber(startValue)) {
							animation.item[key] = startValue + (endValue - startValue) * ratio;
						} else if (startValue instanceof Point) {
							var x = startValue.x + (endValue.x - startValue.x) * ratio;
							var y = startValue.y + (endValue.y - startValue.y) * ratio;
							animation.item[key] = new Point(x, y);
						} else if (startValue instanceof RgbColor) {
							var red = startValue.red + (endValue.red - startValue.red) * ratio;
							var green = startValue.green + (endValue.green - startValue.green) * ratio;
							var blue = startValue.blue + (endValue.blue - startValue.blue) * ratio;
							var alpha = startValue.alpha + (endValue.alpha - startValue.alpha) * ratio;
							animation.item[key] = new RgbColor(red, green, blue, alpha);
						}
					}
				}
				
				if (animation.update) {
					animation.item.update = animation.update;
					animation.item.update();
				}
			}
		}	
	}
};

function AnimationHelper(values){
	this.animate = Item.prototype.animate;
	for (var key in values) {
		this[key] = values[key];
	}
}