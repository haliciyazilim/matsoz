var ExpandableShapeTetrahedron = ExpandableShape.extend({
	init: function(size, matrix) {
		this._super(matrix);
		
		size /= 2;
		this.size = size;
		
		
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

				//var angle = Math.atan(Math.sqrt(2)) + Math.PI/2;
				var angle = Math.PI - Math.atan(4*Math.sqrt(2));
				var angle2 = Math.PI*5/6 - Math.acos(Math.sqrt(3)/6);
					// angle = Math.PI/4;
				//var center = new Point3(0,this.size*Math.sqrt(2)/3,0);
				var center = new Point3(this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
				
				var animationHelper = new AnimationHelper({
					rotation: 0,
					rotation2: 0,
					rotation3: 0
				})
				
				this.rightSurfacePoint = this.surfaces.rightSurface.points[1];
				this.backSurfacePoint = this.surfaces.backSurface.points[2];
				this.leftSurfacePoint = this.surfaces.leftSurface.points[2];
				
				var self = this;
				
				animationHelper.animate({
					style: {
						rotation: angle
					},
					duration: 900,
					delay: this.delay,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.rightSurface.points[1] = self.rightSurfacePoint.getRotatedPointByX(this.rotation, center);
						self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2/*this.rotation/angle*/, center);
						self.project();
					}
				})
				
				
				var center2 = new Point3(0, this.size*Math.sqrt(2)/3, this.size/2);
				var angle3 = Math.asin(1/3) + Math.PI/2;
				
				animationHelper.animate({
					style: {
						rotation2: angle3
					},
					duration: 900,
					delay: this.delay+1000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.backSurface.points[2] = self.backSurfacePoint.getRotatedPointByX(-this.rotation2, center2);
						self.project();
					}
				})
				
				var center3 = new Point3(-this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
				
				animationHelper.animate({
					style: {
						rotation3: angle
					},
					duration: 900,
					delay: this.delay + 2000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.leftSurface.points[2] = self.leftSurfacePoint.getRotatedPointByX(this.rotation3, center3);
						self.surfaces.leftSurface.points[2] = self.surfaces.leftSurface.points[2].getRotatedPointByY(angle2/*this.rotation3/angle*/, center3);
						self.project();
					}
				})
				
				this.delay += 3000;
				
				var center4 = new Point3(0,0,0);
				
				this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center4, true);
				this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center4, true);				
				this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center4, true);
				this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center4, true);
		}
	},
	
	contract: function() {
		var center4 = new Point3(0,0,0);
		this.rotateSurfaceX(this.surfaces.rightSurface, -Math.PI/2, center4, true);
		this.rotateSurfaceX(this.surfaces.backSurface, -Math.PI/2, center4, true);				
		this.rotateSurfaceX(this.surfaces.leftSurface, -Math.PI/2, center4, true);
		this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, center4, true);
		
		
		var angle = Math.PI - Math.atan(4*Math.sqrt(2));
		var angle2 = Math.PI*5/6 - Math.acos(Math.sqrt(3)/6);
		
		var angle3 = Math.asin(1/3) + Math.PI/2;
		var center = new Point3(this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
		
		var animationHelper = new AnimationHelper({
			rotation: angle,
			rotation2: angle3,
			rotation3: angle
		})
		
		var self = this;
		
		
		
		
		var center3 = new Point3(-this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
		
		animationHelper.animate({
			style: {
				rotation3: 0
			},
			duration: 900,
			delay: this.delay + 1000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.leftSurface.points[2] = self.leftSurfacePoint.getRotatedPointByX(this.rotation3, center3);
				self.surfaces.leftSurface.points[2] = self.surfaces.leftSurface.points[2].getRotatedPointByY(angle2/*this.rotation3/angle*/, center3);
				self.project();
			},
			callback: function() {
				self.surfaces.leftSurface.points[2] = self.leftSurfacePoint;
				self.project();
			}
		})
		
		
		var center2 = new Point3(0, this.size*Math.sqrt(2)/3, this.size/2);
		
		animationHelper.animate({
			style: {
				rotation2: 0
			},
			duration: 900,
			delay: this.delay+2000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.backSurface.points[2] = self.backSurfacePoint.getRotatedPointByX(-this.rotation2, center2);
				self.project();
			}
		})
		
		animationHelper.animate({
			style: {
				rotation: 0
			},
			duration: 900,
			delay: this.delay + 3000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.rightSurface.points[1] = self.rightSurfacePoint.getRotatedPointByX(this.rotation, center);
				self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2/*this.rotation/angle*/, center);
				self.project();
			},
			callback: function() {
				self.surfaces.rightSurface.points[1] = self.rightSurfacePoint;
				self.project();
			}
		})  

		

		
		
		
		
		
		
		
	}
});