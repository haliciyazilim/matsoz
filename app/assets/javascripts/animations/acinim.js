
function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
}


var Prism = ExpandableShape.extend({
	init: function(width, height, length, matrix) {
		this._super(matrix);
		
		width /= 2;
	    height /= 2;
	    length /= 2;
	
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3(-width,  height, length),
		        new Point3( width,  height, length),
		        new Point3( width, -height, length),
		        new Point3(-width, -height, length)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-width, height,  length),
	            new Point3( width, height,  length),
	            new Point3( width, height, -length),           
	            new Point3(-width, height, -length)
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
	            ]),
	        topSurface: new Surface([
	            new Point3(-width, -height, -length),
	            new Point3( width, -height, -length),
	            new Point3( width, -height,  length),
	            new Point3(-width, -height,  length)
	            ]),
	        frontSurface: new Surface([
	            new Point3(-width, -height, -length),
	            new Point3( width, -height, -length),
	            new Point3( width,  height, -length),
	            new Point3(-width,  height, -length)
	            ])
	    });
	},
	
	locked: false,
	lastExpand: -1,
	expand: function(style) {
		if (this.locked) {
			return;
		}
		
		if (this.lastExpand != -1) {
			this.contract();
		} else {			
			this.clearRotations();
			
			this.locked = true;
			
			switch (style) {
				case 3:
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
										
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], false);					
					
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));

					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[1]);
				
					break;
				case 2:
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.topSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
					
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
					
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));

					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1], true);
					this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
					
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);
				
					break;
				case 1:
					this.rotateSurfaceY(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[3], true);
					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
					
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
					
					this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.topSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.topSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.topSurface.points[2], false);
					
					this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), false);
					
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[2].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), true);
					
					break;
				case 0:
				default:
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);
			}
		
			var self = this;
			
			AnimationManager.delay(function () {
				self.locked = false;
			}, this.delay);
			
			this.delay = 0;
			
			this.lastExpand = style;
		}
	},
	
	contract: function() {
		if (this.locked) {
			return;
		}
	
		if(this.lastExpand == -1) {
			return;
		}
		
		this.locked = true;
		
		switch(this.lastExpand) {
			case 3:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[1]);
				
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
			
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.rightSurface.points[2], false);					
			
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
						
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);

				break;
				
			case 2:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
			
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1], true);
				this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
			
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
			
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
							
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.topSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
				
				break;
			case 1:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[2].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
			
				this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), false);
			
				this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.topSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.topSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.topSurface.points[2], false);
			
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
			
				this.rotateSurfaceY(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[3], true);
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
				break;

			case 0:
			default:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
		}
		
		var self = this;
		
		AnimationManager.delay(function () {
			self.locked = false;
		}, this.delay);
		
		this.lastExpand = -1;
		this.delay = 0;
	}
	
});

var Pyramid = ExpandableShape.extend({
	init: function(width, height, length, matrix) {
		this._super(matrix);
	
		this.width = width;
		this.height = height;
		this.length = length;
		
		width /= 2;
	    height /= 2;
	    length /= 2;
		
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3(-width,  height, length),
		        new Point3( width,  height, length),
		        new Point3( 0, -height, 0)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-width, height,  length),
	            new Point3( width, height,  length),
	            new Point3( width, height, -length),           
	            new Point3(-width, height, -length)
	            ]),
	        leftSurface: new Surface([
	            new Point3(0, -height, 0),
	            new Point3(-width,  height,  length),
	            new Point3(-width,  height, -length)
	            ]),
	        rightSurface: new Surface([
	            new Point3(width,  height, -length),
	            new Point3(width,  height,  length),
	            new Point3(0, -height,  0)
	            ]),
	        frontSurface: new Surface([
	            new Point3(0, -height, 0),
	            new Point3( width,  height, -length),
	            new Point3(-width,  height, -length)
	            ])
	    });
	},
	
	lastExpand: -1,
	expand: function(style) {
		if (this.lastExpand != -1) {
			this.contract();
		} else {
			switch (style) {
				case 0:
				default:

					var angle1 = Math.atan(this.width/this.height/2) + Math.PI/2;
					var angle2 = Math.atan(this.length/this.height/2) + Math.PI/2;

					var center = new Point3(0,0,0);
					this.rotateSurfaceZ(this.surfaces.rightSurface, angle1, this.surfaces.rightSurface.points[0], false);
					this.rotateSurfaceX(this.surfaces.backSurface, -angle2, this.surfaces.backSurface.points[0], false);
					this.rotateSurfaceZ(this.surfaces.leftSurface, -angle1, this.surfaces.leftSurface.points[1], false);
					this.rotateSurfaceX(this.surfaces.frontSurface, angle2, this.surfaces.frontSurface.points[1], false);
				
					this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.frontSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center, true);				
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center);
			}
		
			this.lastExpand = style;
		}
	},
	
	contract: function() {
		if(this.lastExpand == -1) {
			return;
		}
		
		switch(this.lastExpand) {
			case 0:
			default:
			
				var angle1 = Math.atan(this.width/this.height/2) + Math.PI/2;
				var angle2 = Math.atan(this.length/this.height/2) + Math.PI/2;

				var center = new Point3(0,0,0);
				this.rotateSurfaceZ(this.surfaces.rightSurface, angle1, this.surfaces.rightSurface.points[0], false);
				this.rotateSurfaceX(this.surfaces.backSurface, -angle2, this.surfaces.backSurface.points[0], false);
				this.rotateSurfaceZ(this.surfaces.leftSurface, -angle1, this.surfaces.leftSurface.points[1], false);
				this.rotateSurfaceX(this.surfaces.frontSurface, angle2, this.surfaces.frontSurface.points[1], false);
				//this.delay -= 500;
			
				this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center, true);
				this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center, true);
				this.rotateSurfaceX(this.surfaces.frontSurface, Math.PI/2, center, true);
				this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center, true);				
				this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center);
		}
	}
});

var Tetrahedron = ExpandableShape.extend({
	init: function(size, matrix) {
		this._super(matrix);
		
		size /= 2;
		
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
		        new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
		        new Point3(0, -2*size*Math.sqrt(2)/3, 0)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( 0, size*Math.sqrt(2)/3, -size)
	            ]),
	        leftSurface: new Surface([
				new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( 0, size*Math.sqrt(2)/3, -size),
	            new Point3(0, -2*size*Math.sqrt(2)/3, 0)
	            ]),
	        rightSurface: new Surface([
	            new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3(0, -2*size*Math.sqrt(2)/3, 0),
	            new Point3( 0, size*Math.sqrt(2)/3, -size)
	            ])
	    });
	},
	
	expand: function(style) {
		switch (style) {
			case 0:
			default:

				var angle = Math.asin(1/3) + Math.PI/2;
					// angle = Math.PI/4;
				var center = new Point3(0,0,0);
				
				
				
				// var q0 = Math.cos(angle/2);
				// var q1 = Math.sin(angle/2)*1/2;
				// var q2 = Math.sin(angle/2)*0;
				// var q3 = Math.sin(angle/2)*Math.sqrt(3)/2;
				
				// var ang1 = Math.atan(  2*(q0*q1+q2*q3)/(1-2*(q1*q1+q2*q2))  ) ;
				// var ang2 = Math.asin(2*(q0*q2-q3*q1));
				// var ang3 = Math.atan(  2*(q0*q3+q1*q2)/(1-2*(q2*q2+q3*q3))  );
				// 
				// console.log(angle/Math.PI*180,ang1/Math.PI*180,ang2,ang3)
				// var rotCenter  = this.surfaces.rightSurface.points[0].add(this.surfaces.rightSurface.points[2]).scale(0.5)
				// rotCenter = this.surfaces.backSurface.points[0]
				// this.rotateSurfaceX(this.surfaces.leftSurface, ang1, rotCenter, true);	
				// this.rotateSurfaceY(this.surfaces.leftSurface, ang2, rotCenter, true);
				// this.rotateSurfaceZ(this.surfaces.leftSurface, ang3, rotCenter, false);

				//this.rotateSurfaceX(this.surfaces.backSurface, -angle, this.surfaces.backSurface.points[0], false);
				//this.rotateSurfaceZ(this.surfaces.rightSurface,- angle, this.surfaces.rightSurface.points[0].add(this.surfaces.rightSurface.points[2]).scale(0.5), true);
				// this.rotateSurfaceX(this.surfaces.rightSurface, angle*16, this.surfaces.rightSurface.points[0].add(this.surfaces.rightSurface.points[2]).scale(0.5), false);
				
				// this.delay += 100;
				// 
				// this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center, true);
				// this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center, true);
				// this.rotateSurfaceX(this.surfaces.frontSurface, Math.PI/2, center, true);
				//this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center, true);				
				// this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center);
				// 
		}
	}
});



var Animation = {
    init: function(container) {
        var cubeMatrix = Util.createProjectionMatrixForObjectAt(140, 100);
        var cube = new Prism(50, 50, 50, cubeMatrix);
        cube.project();
		cube.delay = 2000;		
		cube.expand(0);
		
		
		var prismMatrix = Util.createProjectionMatrixForObjectAt(500, 90);
		var prism = new Prism(50, 90, 30, prismMatrix);
        prism.project();
		prism.delay = 8000;
		prism.expand(0);
		
		
				// 
				// var pyramidMatrix = Util.createProjectionMatrixForObjectAt(300, 90);
				// var pyramid = new Pyramid(60, 50, 40, pyramidMatrix);
				// pyramid.project();
				// pyramid.expand();
				// 
		// var tetrMatrix = Util.createProjectionMatrixForObjectAt(300, 90);
		// var tetr = new Tetrahedron(100, tetrMatrix);
		// tetr.delay = 1000;
		// tetr.project();
		// tetr.expand();
		
		Main.animationFinished(14000);
    }
}


var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init: function(container){
		var cubeMatrix = Util.createProjectionMatrixForObjectAt(140, 160);
        var cube = new Prism(80, 80, 80, cubeMatrix);
        cube.project();
//		cube.delay = 2000;		
//		cube.expand(0);
		
		var prismMatrix = Util.createProjectionMatrixForObjectAt(400, 150);
		var prism = new Prism(50, 90, 30, prismMatrix);
        prism.project();
//		prism.delay = 8000;
//		prism.expand(0);
		
		Interaction.createTool();
		
		Main.setObjective('Yandaki geometrik cisimlerden aç\u0131n\u0131mını elde etmek istediğinize basınız.');
    },
	createTool: function() {
		var tool = new Tool();
		tool.onMouseDown = function (event) {
			if (event.item) {
				var shape = event.item.surface.shape;
					shape.expand(2);
			}
		}
	}
}
