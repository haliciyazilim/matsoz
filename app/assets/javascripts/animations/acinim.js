
function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
}

var Surface = function (points) {
    this.points = points;
    
    this.rotationsX = [];
    this.pivotsX = [];
    
    this.rotationsY = [];
    this.pivotsY = [];
    
    this.project = function(matrix) {
        if (this.projectedSurface) {
            this.projectedSurface.remove();
        }
        
        var path = new Path();
        
        for (var i = 0; i < 4; i++) {
            var p = this.points[i];
            
            for (var j = 0; j < this.rotationsX.length; j++) {
               p = Util.rotateX(this.rotationsX[j], p, this.pivotsX[j]);
            }
            
            for (j = 0; j < this.rotationsY.length; j++) {
               p = Util.rotateY(this.rotationsY[j], p, this.pivotsY[j]);
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
        
        return path;
    }
} 

var Prism = function (width, height, length, matrix) {
    this.matrix = matrix;
    
    width /= 2;
    height /= 2;
    length /= 2;
    
    this.surfaces = {
        topSurface: new Surface([
            new Point3(-width, -height, -length),
            new Point3( width, -height, -length),
            new Point3( width, -height,  length),
            new Point3(-width, -height,  length)
            ]),
        bottomSurface: new Surface([
            new Point3(-width, height,  length),
            new Point3( width, height,  length),
            new Point3( width, height, -length),           
            new Point3(-width, height, -length)
            ]),
        frontSurface: new Surface([
            new Point3(-width, -height, -length),
            new Point3( width, -height, -length),
            new Point3( width,  height, -length),
            new Point3(-width,  height, -length)
            ]),
        backSurface: new Surface([
            new Point3(-width,  height, length),
            new Point3( width,  height, length),
            new Point3( width, -height, length),
            new Point3(-width, -height, length)
            ]),
        leftSurface: new Surface([
            new Point3(-width, -height, -length),
            new Point3(-width, -height,  length),
            new Point3(-width,  height,  length),
            new Point3(-width,  height, -length)
            ]),
        rightSurface: new Surface([
            new Point3(width,  height, -length),
            new Point3(width,  height,  length),
            new Point3(width, -height,  length),
            new Point3(width, -height, -length)
            ])
    }
    
	this.animate = Item.prototype.animate;
    
    this.project = function () {
        this.surfaces.backSurface.project(this.matrix);
        this.surfaces.bottomSurface.project(this.matrix);
        this.surfaces.leftSurface.project(this.matrix);
        this.surfaces.rightSurface.project(this.matrix);
        this.surfaces.topSurface.project(this.matrix);
        this.surfaces.frontSurface.project(this.matrix);
    }

	this.delay = 2000;

	this.rotateSurfaceX = function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 1000,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
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
	}
	
	this.rotateSurfaceY = function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 1000,
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
	}

	this.expand = function() {
		this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
		this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
		this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);

//        this.surfaces.frontSurface.pivotsY.push(this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
		this.surfaces.leftSurface.pivotsY.push(this.surfaces.leftSurface.points[1]);
        this.surfaces.bottomSurface.pivotsX.push(this.surfaces.bottomSurface.points[0]);

		var self = this;

        var animationHelper = new AnimationHelper({
            topAngle: 0,
            leftAngle: 0,
            rightAngle: 0,
            frontAngle: 0,
            bottomAngle: 0
        })

       animationHelper.animate({
           style: {
               leftAngle: Math.PI/2
           },
           duration: 1000,
           delay: 5000,
           animationType: 'easeInEaseOut',
           update: function() {
               self.surfaces.leftSurface.rotationsY[0] = this.leftAngle;
               self.project();
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
               self.surfaces.bottomSurface.rotationsX[0] = this.bottomAngle;
               self.project();
            }
        })
	}
}

var Animation = {
    init: function(container) {
        var cubeMatrix = Util.createProjectionMatrixForObjectAt(140, 100);
        var cube = new Prism(50, 50, 50, cubeMatrix);
        cube.project();
		cube.expand();
		
		
		var prismMatrix = Util.createProjectionMatrixForObjectAt(500, 90);
        var prism = new Prism(50, 90, 30, prismMatrix);
        prism.project();
		prism.animate({
			style: {},
			duration: 6000,
			callback: function (){
				this.expand();
			}
		})
    }
}


var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init: function(container){
        Main.setObjective('Yandaki geometrik cisimlerden aç\u0131n\u0131mını elde etmek istediğinize basınız.');
    }
}