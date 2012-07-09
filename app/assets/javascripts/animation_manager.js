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
	
	if (typeof(animationHash.callback) == "function") {
		this.item.callback = animationHash.callback;
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
				animation.startHash = {};
				animation.endHash = {};
				for (var key in animation.style) {
					if (animation.style.hasOwnProperty(key)) {
						animation.startHash[key] = (animation.item[key]);
					}
				}
				
				animation.idle = false;
			} else if (animation.startTime + animation.duration < currentTime) {
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
						animation.item[key] = animation.style[key];
						animations.splice(i,1);
						if (animation.item.callback) {
							animation.item.callback();
						}
					}
				}
			} else {
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
				    	startValue = animation.startHash[key];
						endValue = animation.style[key];
				
						ratio = animation.map((currentTime - animation.startTime) / animation.duration);
						if (Util.isNumber(startValue)) {
							animation.item[key] = startValue + (endValue - startValue) * ratio;
						} else if (startValue instanceof Point) {
							x = startValue.x + (endValue.x - startValue.x) * ratio;
							y = startValue.y + (endValue.y - startValue.y) * ratio;
							animation.item[key] = new Point(x, y);
						}
					}
				}
			}
		}	
	}
};