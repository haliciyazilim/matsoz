
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
    
    
    this.project = function () {
        this.surfaces.backSurface.project(this.matrix);
        this.surfaces.bottomSurface.project(this.matrix);
        this.surfaces.leftSurface.project(this.matrix);
        this.surfaces.rightSurface.project(this.matrix);
        this.surfaces.topSurface.project(this.matrix);
        this.surfaces.frontSurface.project(this.matrix);
    }
}

var Animation = {
	
    init: function(container) {
        var matrix = Util.createProjectionMatrixForObjectAt(100, 100);
	
        var prism = new Prism(60, 60, 60, matrix);
        prism.project();
        
        
        prism.surfaces.topSurface.pivotsX.push(prism.surfaces.topSurface.points[2]);
        prism.surfaces.rightSurface.pivotsY.push(prism.surfaces.rightSurface.points[2]);
        prism.surfaces.frontSurface.pivotsY.push(prism.surfaces.rightSurface.points[2]);
        prism.surfaces.frontSurface.pivotsY.push(prism.surfaces.rightSurface.points[2]);
        
        var animationHelper = new AnimationHelper({
            topAngle: 0,
            leftAngle: 0,
            rightAngle: 0,
            frontAngle: 0,
            bottomAngle: 0
        })
        
        animationHelper.animate({
            style: {
                topAngle: -Math.PI/2
            },
            duration: 1000,
            delay: 2000,
            animationType: 'easeInEaseOut',
            update: function() {
                prism.surfaces.topSurface.rotationsX[0] = this.topAngle;
                prism.project();
            }
        })

        animationHelper.animate({
            style: {
                rightAngle: -Math.PI/2
            },
            duration: 1000,
            delay: 3000,
            animationType: 'easeInEaseOut',
            update: function() {
                prism.surfaces.rightSurface.rotationsY[0] = this.rightAngle;
                prism.surfaces.frontSurface.rotationsY[0] = this.rightAngle;
                prism.project();
            }
        })

        animationHelper.animate({
            style: {
                frontAngle: Math.PI/2
            },
            duration: 1000,
            delay: 4000,
            animationType: 'easeInEaseOut',
            update: function() {
                prism.surfaces.frontSurface.rotationsY[1] = this.frontAngle;
                prism.project();
            }
        })
//
//        animationHelper.animate({
//            style: {
//                leftAngle: -Math.PI/2
//            },
//            duration: 1000,
//            delay: 5000,
//            animationType: 'easeInEaseOut',
//            update: function() {
//                leftSurface.changed = true;
//            }
//        })
//
//        animationHelper.animate({
//            style: {
//                bottomAngle: Math.PI/2
//            },
//            duration: 1000,
//            delay: 6000,
//            animationType: 'easeInEaseOut',
//            update: function() {
//                bottomSurface.changed = true;
//            }
//        })
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