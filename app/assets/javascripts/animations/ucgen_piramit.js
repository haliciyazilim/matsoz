function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
    kucultButtonStyle = {
        fillColor: "#456"
    };
    animationTextStyle = {
        fontSize:16
    }
    animationSurfacesTextStyle = {
        fillColor: '#5ba559',
        fontSize:14
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
    init: function(container){
        var matrix = Util.createProjectionMatrixForObjectAt(140, 110);
        var tetrahedron = new ExpandableShapeTetrahedron(100, matrix);
        tetrahedron.strokeColor = strokeColor;
        tetrahedron.fillColor = fillColor;
        tetrahedron.project();
        tetrahedron.delay = 1000;
        tetrahedron.expand(0);
        tetrahedron.showSurfaces(500,5000);
        tetrahedron.delay = 9000;
        tetrahedron.contract();
        tetrahedron.showEdges(500,14000);
        tetrahedron.showVertexes(500,22000);
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
            style:{count:4},
            duration:1500,
            delay:5000,
            update:function(){
                this.content = Math.floor(this.count)+" üçgensel bölge şeklinde yüz"
            }
        });
        edgesText.count = 1;
        edgesText.animate({
            style:{count:6},
            duration:2500,
            delay:14000,
            update:function(){
                this.content = Math.floor(this.count) + " ayrıt"
            }
        });
        vertexesText.count = 1;
        vertexesText.animate({
            style:{count:4},
            duration:1500,
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
    var cubeMatrix = Util.createProjectionMatrixForObjectAt(200, 187);
    var cube = new ExpandableShapeTetrahedron(160, cubeMatrix);
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