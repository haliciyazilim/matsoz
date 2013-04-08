function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
    kucultButtonStyle = {
        fillColor: "#456"
    };
    animationTextStyle = {
        fontSize:13
    }
    animationSurfacesTextStyle = {
        fillColor: '#5ba559',
        fontSize:13
    }
    animationEdgesTextStyle = {
        fillColor: '#c14444'
    }
    animationVertexesTextStyle = {
        fillColor: '#4451d0'
    }
    animationSurfacesHighlightStyle = {
        fillColor: '#5ba559'
    }
    animationEdgesHighlightStyle = {
        strokeColor:'#c14444',
        strokeWidth:2
    }
    animationVertexesHighlightStyle = {
        fillColor:'#4451d0'
    }
}
var Animation = {
    init: function(container) {

        var cubeMatrix = Util.createProjectionMatrixForObjectAt(200, 85);
        var cube = new Prism(50, 70, 30, cubeMatrix);
        cube.project();
        cube.expand();
        cube.showSurfaces(500,5000);
        cube.delay = 9000;
        cube.contract();
        cube.showEdges(500,14000);
        cube.showVertexes(500,22000);
        var textReferencePoint = new Point(370,60);
        var surfacesText    = new PointText(textReferencePoint.add(0, 0))
            .set_style(animationTextStyle)
            .set_style(animationSurfacesTextStyle);
        var edgesText       = new PointText(textReferencePoint.add(0,40))
            .set_style(animationTextStyle)
            .set_style(animationEdgesTextStyle);
        var vertexesText    = new PointText(textReferencePoint.add(0,80))
            .set_style(animationTextStyle)
            .set_style(animationVertexesTextStyle);
        surfacesText.count = 1;
        surfacesText.rectCount = 0;
        surfacesText.squareCount = 0;
        surfacesText.animate({
            style:{count:5},
            duration:2000,
            delay:5000,
            update:function(){
                switch(Math.floor(this.count)){
                    case 1:
                        surfacesText.squareCount = 1;
                        break;
                    case 2:
                        surfacesText.squareCount = 2;
                        break;
                    default:
                        surfacesText.rectCount = Math.floor(this.count)-2;
                }
                this.content = surfacesText.squareCount + " üçgensel "+surfacesText.rectCount +" dikdörtgensel bölge şeklinde yüz"
            }
        });
        edgesText.count = 1;
        edgesText.animate({
            style:{count:9},
            duration:4000,
            delay:14000,
            update:function(){
                this.content = Math.floor(this.count) + " ayrıt"
            }
        });
        vertexesText.count = 1;
        vertexesText.animate({
            style:{count:6},
            duration:2500,
            delay:22000,
            update:function(){
                this.content = Math.floor(this.count) + " köşe"
            },
            callback:Main.animationFinished
        });
    }
};
var Interaction = {};
Interaction.init = function(container){
    Interaction.container = container;
    Main.setObjective("Yandaki cismin yüzlerini, ayrıtlarını veya köşelerini görmek için ilgili butonlara basınız.");
    var cubeMatrix = Util.createProjectionMatrixForObjectAt(170, 167);
    var cube = new Prism(50*2, 70*2, 30*2, cubeMatrix);
    cube.project();
    Interaction.cube = cube;
//    cube.expand();
//    cube.showSurfaces(500,5000);
//    cube.delay = 9000;

//    cube.contract();

    var expandButton = document.createElement('input');
    expandButton.type = 'button';
    expandButton.onclick = Interaction.expand;
    $(expandButton).css({
        position:'absolute',
        top:'85px',
        right:'20px',
        width:'122px',
        height:'29px',
        background:"url(/assets/animations/kup/btn_gray_yuzler.png) no-repeat 0px 0px transparent",
        border:0
    })
    Interaction.expandButton = expandButton;
    Interaction.container.appendChild(expandButton);

    var edgeButton = document.createElement('input');
    edgeButton.type = 'button';
    edgeButton.onclick = Interaction.showEdges;
    $(edgeButton).css({
        position:'absolute',
        top:'135px',
        right:'20px',
        width:'122px',
        height:'29px',
        background:"url(/assets/animations/kup/btn_gray_ayritlar.png) no-repeat 0px 0px transparent",
        border:0
    });
    Interaction.edgeButton = edgeButton;
    Interaction.container.appendChild(edgeButton);


    var vertexButton = document.createElement('input');
    vertexButton.type = 'button';
    vertexButton.onclick = Interaction.showVertexes;
    $(vertexButton).css({
        position:'absolute',
        top:'185px',
        right:'20px',
        width:'122px',
        height:'29px',
        background:"url(/assets/animations/kup/btn_gray_koseler.png) no-repeat 0px 0px transparent",
        border:0
    });
    Interaction.edgeButton = vertexButton;
    Interaction.container.appendChild(vertexButton);

//    var lines = cube.showEdges(300,1000);

//    cube.showVertexes(500,22000);
}
Interaction.expand = function(){
    if(Interaction.isPaused())
        return;
    Interaction.pause();
    Interaction.cube.delay = 0;
    Interaction.cube.expand();
    Interaction.cube.showSurfaces(500,5000);
    Interaction.cube.delay = 9000;
    Interaction.cube.contract();
    setTimeout(function(){
        Interaction.resume();
    },14500);

}

Interaction.showEdges = function(){
    if(Interaction.isPaused())
        return;
    Interaction.pause();
    Interaction.cube.showEdges(400,0);
    setTimeout(function(){
        Interaction.resume();
    },6500);
}

Interaction.showVertexes = function(){
    if(Interaction.isPaused())
        return;
    Interaction.pause();
    Interaction.cube.showVertexes(500,0);

    setTimeout(function(){
        Interaction.resume();
    },4000);
}

var Prism = ExpandableShape.extend({
    init: function(width, height, length, matrix) {
        this._super(matrix);

        width /= 2;
        height /= 2;
        length /= 2;
        var R = Math.sqrt(length*length+width*width/4);
        this.angle = Math.asin(width*0.5 / R)+Math.PI/2;
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
                new Point3(     0, height, -length)
            ]),
            leftSurface: new Surface([
                new Point3(    -0, -height, -length),
                new Point3(-width, -height,  length),
                new Point3(-width,  height,  length),
                new Point3(    -0,  height, -length)
            ]),
            rightSurface: new Surface([
                new Point3(    0,  height, -length),
                new Point3(width,  height,  length),
                new Point3(width, -height,  length),
                new Point3(    0, -height, -length)
            ]),
            topSurface: new Surface([
                new Point3(    0, -height, -length),
                new Point3( width, -height,  length),
                new Point3(-width, -height,  length)
            ])
        });
    },
    showVertexes : function(delay,startingDelay) {
        if(startingDelay == undefined)
            startingDelay = 0;
        var circle = function(p1,i){
            var anim = new AnimationHelper({});
            anim.animate({
                style:{},
                duration:0,
                delay:startingDelay,
                init: function() {
                    var path = new Path.Circle(p1,4);
                    path.set_style(animationVertexesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:delay,
                        delay:delay*i
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }
            })
        }
        new circle(this.surfaces["rightSurface"].get2DPoints(this.matrix)[0],0);
        new circle(this.surfaces["rightSurface"].get2DPoints(this.matrix)[3],1);
        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
        var i = 2;
        for (var j=0;j < backPoints.length ; j++,i++){
            new circle(backPoints[j],i);
        }

    },
    showSurfaces : function(delay,startingDelay) {
        var surface = function(s,m,index){
            AnimationManager.delay(function(){
                var path = new Path();
                var p = s.get2DPoints(m);
                for(var i=0;i<p.length;i++)
                    path.add(p[i]);
                path.closed = true;
                path.set_style(animationSurfacesHighlightStyle);
                path.set_style({
                    opacity:0
                });
                path.animate({
                    style:{opacity:1},
                    duration:0,//delay,
                    delay:delay*index
                });

                path.animate({
                    style:{opacity:0},
                    delay:delay*8,
                    duration:delay,
                    callback:path.remove
                })
            }, startingDelay);
        }
        var i=0;
        surface(this.surfaces["bottomSurface"],this.matrix,i++);
        surface(this.surfaces["topSurface"],this.matrix,i++);
        surface(this.surfaces["leftSurface"],this.matrix,i++);
        surface(this.surfaces["backSurface"],this.matrix,i++);
        surface(this.surfaces["rightSurface"],this.matrix,i++);
    },
    showEdges: function(delay,startingDelay){
        if(startingDelay == undefined)
            startingDelay = 0;
        var line = function(p1,p2,i) {
            var anim = new AnimationHelper({});
            anim.animate({
                style:{},
                duration:0,
                delay:startingDelay,
                init: function() {
                    var path = new Path.Line(p1,p2);
                    path.set_style(animationEdgesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,
                        delay:delay*i
                    });
                    path.animate({
                        style:{opacity:0},
                        duration:delay,
                        delay:delay*14,
                        callback:path.remove
                    });
                }
            })
        }
        var topPoints = this.surfaces.topSurface.get2DPoints(this.matrix);
        var bottomPoints = this.surfaces.bottomSurface.get2DPoints(this.matrix);
        var i = 0,j = 0,k = 0;
        for (;i < bottomPoints.length ; i++)
            new line(bottomPoints[i],topPoints[2-i],i);

        for (;j < topPoints.length ; j++,i++)
            new line(topPoints[j],topPoints[(j+1)%topPoints.length],i);

        for (;k < bottomPoints.length ; k++,i++)
            new line(bottomPoints[k],bottomPoints[(k+1)%bottomPoints.length],i);



    },
    expand: function(style) {
        this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
        this.rotateSurfaceY(this.surfaces.rightSurface, -this.angle, this.surfaces.rightSurface.points[2]);
        this.rotateSurfaceY(this.surfaces.leftSurface, this.angle, this.surfaces.leftSurface.points[1]);
        this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);
    },
    contract: function (style){
        this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
        this.rotateSurfaceY(this.surfaces.leftSurface, -this.angle, this.surfaces.leftSurface.points[1]);
        this.rotateSurfaceY(this.surfaces.rightSurface, this.angle, this.surfaces.rightSurface.points[2]);
        this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
    }
});// var Prisim
