
var Surface = function (points) {
    this.points = points;
    
    this.rotationsX = [];
    this.pivotsX = [];
    
    this.rotationsY = [];
    this.pivotsY = [];
    
	this.rotationsZ = [];
	this.pivotsZ = [];

    this.project = function(matrix) {
        if (this.projectedSurface) {
            this.projectedSurface.remove();
        }
        
        var path = new Path();
        
        for (var i = 0; i < this.points.length; i++) {
            var p = this.points[i];
            

            for (j = 0; j < this.rotationsY.length; j++) {
				p = Util.rotateY(this.rotationsY[j], p, this.pivotsY[j]);
            }

            for (j = 0; j < this.rotationsZ.length; j++) {
				p = Util.rotateZ(this.rotationsZ[j], p, this.pivotsZ[j]);
            }

    		for (var j = 0; j < this.rotationsX.length; j++) {
				p = Util.rotateX(this.rotationsX[j], p, this.pivotsX[j]);
			}
	        
            
            var pp = Util.project(p, matrix);
            pp.x = Math.floor(pp.x) + 0.5;
            pp.y = Math.floor(pp.y) + 0.5;
            
            path.add(pp);
        }
             
        path.closed = true;
	
        path.strokeColor = strokeColor;
        path.fillColor = fillColor;
        path.strokeWidth = strokeWidth;
        
        this.projectedSurface = path;
        
		path.surface = this;

        return path;
    }

	this.clearRotations = function() {
		this.pivotsX = [];
		this.rotationsX = [];
		this.pivotsY = [];
		this.rotationsY = [];
		this.pivotsZ = [];
		this.rotationsZ = [];
	}
};

var ExpandableShape = Class.extend({
	delay: 0,
	
	init: function(matrix) {
		this.matrix = matrix;
		this.animate = Item.prototype.animate;
	},
	
	setSurfaces: function (surfaces) {
		this.surfaces = surfaces;
		
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].shape = this;
				}	
			}
		}
	},
	
	clearRotations: function() {
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].clearRotations();
				}	
			}
		}
	},
	
	project: function() {
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].project(this.matrix);
				}	
			}
		}
	},
	
	rotateSurfaceX: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 900,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == null) {
					surface.pivotsX.push(new Point3(0,0,0));
				} else {
					surface.pivotsX.push(center);
				}
			},
			update: function() {
				surface.rotationsX[surface.pivotsX.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	},
	
	rotateSurfaceY: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 900,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
					surface.pivotsY.push(new Point3(0,0,0));
				} else {
					surface.pivotsY.push(center);
				}
			},
			update: function() {
				surface.rotationsY[surface.pivotsY.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	},
	
	rotateSurfaceZ: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 900,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
					surface.pivotsZ.push(new Point3(0,0,0));
				} else {
					surface.pivotsZ.push(center);
				}
			},
			update: function() {
				surface.rotationsZ[surface.pivotsZ.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	}
});
