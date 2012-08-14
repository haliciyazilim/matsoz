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
					rotation2: 0
				})
				
				var rigthSurfacePoint = this.surfaces.rightSurface.points[1];
				
				var self = this;
				
				animationHelper.animate({
					style: {
						rotation: angle
					},
					duration: 1000,
					delay: this.delay,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.rightSurface.points[1] = rigthSurfacePoint.getRotatedPointByX(this.rotation, center);
						self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2*this.rotation/angle, center);
						self.project();
					}
				})
				
				animationHelper.animate({
					style {
						rotation: angle
					},
					duration: 1000,
					delay: this.delay+1000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.rightSurface.points[1] = rigthSurfacePoint.getRotatedPointByX(this.rotation, center);
						self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2*this.rotation/angle, center);
						self.project();
					}
				})
				
// 				animationHelper.animate({
// 					style: {
// 						rotation2: angle2
// 					},
// 					duration: 500,
// 					delay: this.delay+500,
// 					animationType: 'easeInEaseOut',
// 					update: function() {
// 						self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-this.rotation2, center);
// 						self.project();
// 					},
// 					callback: function() {
// //						console.log(self.surfaces.bottomSurface.points[1]);
// 						console.log(self.surfaces.rightSurface.points[1]);
// 					}
// 				})
				
				
				
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