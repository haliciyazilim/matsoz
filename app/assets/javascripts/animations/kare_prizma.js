function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
    kucultButtonStyle = {fillColor: "#456"};

    animationTextStyle = {
        fontSize:16
    }
    animationSurfacesTextStyle = {
        fontSize : 14,
        fillColor: '#5ba559'
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
        var cube = new ExpandablePrism(40, 70, 40, cubeMatrix);
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
            style:{count:6},
            duration:2500,
            delay:5000,
            update:function(){
                switch(Math.floor(this.count)){
                    case 1:
                        surfacesText.squareCount = 1;
                        break;
                    case 2:
                        surfacesText.rectCount = 1;
                        break;
                    case 3:
                        surfacesText.squareCount = 2;
                        break;
                    default:
                        surfacesText.rectCount = Math.floor(this.count)-2;
                }
                this.content = surfacesText.squareCount + " karesel "+surfacesText.rectCount +" dikdörtgensel bölge şeklinde yüz"

            }
        });
        edgesText.count = 1;
        edgesText.animate({
            style:{count:12},
            duration:5500,
            delay:14000,
            update:function(){
                this.content = Math.floor(this.count) + " ayrıt"
            }
        });
        vertexesText.count = 1;
        vertexesText.animate({
            style:{count:8},
            duration:3500,
            delay:22000,
            update:function(){
                this.content = Math.floor(this.count) + " köşe"
            },
            callback:Main.animationFinished
        });
    }
};
var Interaction = {}

Interaction.init = function(container){
    Interaction.container = container;
    Main.setObjective("Yandaki küpü küçültüp büyütünüz veya istediğiniz yönde döndürünüz.");
    var cubeMatrix = Util.createProjectionMatrixForObjectAt(170, 167);
    var cube = new ExpandablePrism(65, 95, 65, cubeMatrix);
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


