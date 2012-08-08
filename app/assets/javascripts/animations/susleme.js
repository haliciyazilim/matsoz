function __Styles(){
    animationTriangleColor = "#FABF8F"
    animationTriangleColor2 = "#92D050";

    interactionTriangleColor = "#00B0F0";
    interactionTriangleColor2 = "#92D050";
    interactionSquareColor = "#FFFF00";
    interactionSquareColor2 = "#FF0000";
    interactionHexagonColor = "#E5B8B7";
    interactionHexagonColor2 = "#FFC000";
}

var Animation = {
    init:function(container){
        Animation.container = container;

        Animation.triangleGroup = new Group();
        for(var i = 0; i < 4; i++){
            for(var j = i, k = 0; j < 4; j++, k++){
                var triangle = new Path.Triangle(new Point(300.5+(i*20)+(k*40), 168.5-(i*35)), new Point(340.5+(i*20)+(k*40), 168.5-(i*35)), new Point(320.5+(i*20)+(k*40), 133.5-(i*35)));
                triangle.strokeColor = "black";
                triangle.fillColor = animationTriangleColor;
                Animation.triangleGroup.addChild(triangle);
            }
        }

        Animation.triangleGroup2 = new Group();
        for(var i = 0; i < 3; i++){
            for(var j = i, k = 0; j < 3; j++, k++){
                var triangle2 = new Path.Triangle(new Point(320.5+(i*20)+(k*40), 133.5-(i*35)), new Point(360.5+(i*20)+(k*40), 133.5-(i*35)), new Point(340.5+(i*20)+(k*40), 168.5-(i*35)));
                triangle2.strokeColor = "black";
                triangle2.fillColor = animationTriangleColor2;
                Animation.triangleGroup2.addChild(triangle2);
            }
        }
        for(var i = 0; i < 4; i++)
            Animation.triangleGroup.children[i].position.y -= 170;
        for(var j = 0; j < 3; j++)
            Animation.triangleGroup2.children[j].position.y -= 170;
        for(var i = 0; i < 3; i++)
            Animation.triangleGroup.children[i+4].position.y -= 135;
        for(var j = 0; j < 2; j++)
            Animation.triangleGroup2.children[j+3].position.y -= 135;
        for(var i = 0; i < 2; i++)
            Animation.triangleGroup.children[i+7].position.y -= 100;
        for(var j = 0; j < 1; j++)
            Animation.triangleGroup2.children[j+5].position.y -= 100;

        Animation.triangleGroup.children[9].position.y -= 65;


        // animate
        for(var i = 0; i < 4; i++){
            var posX = Animation.triangleGroup.children[i].position.x;
            var posY = Animation.triangleGroup.children[i].position.y + 170;
            Animation.triangleGroup.children[i].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 500,
                delay: 2000+(500*i),
                animationType: 'easeInOutQuad'
            });
        }
        for(var j = 0; j < 3; j++){
            var posX = Animation.triangleGroup2.children[j].position.x;
            var posY = Animation.triangleGroup2.children[j].position.y + 170;
            Animation.triangleGroup2.children[j].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 500,
                delay: 4500+(500*j),
                animationType: 'easeInOutQuad'
            });
        }

        for(var i = 0; i < 3; i++){
            var posX = Animation.triangleGroup.children[4+i].position.x;
            var posY = Animation.triangleGroup.children[4+i].position.y + 135;
            Animation.triangleGroup.children[4+i].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 500,
                delay: 7000+(500*i),
                animationType: 'easeInOutQuad'
            });
        }
        for(var j = 0; j < 2; j++){
            var posX = Animation.triangleGroup2.children[3+j].position.x;
            var posY = Animation.triangleGroup2.children[3+j].position.y + 135;
            Animation.triangleGroup2.children[3+j].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 500,
                delay: 9000+(500*j),
                animationType: 'easeInOutQuad'
            });
        }

        for(var i = 0; i < 2; i++){
            var posX = Animation.triangleGroup.children[7+i].position.x;
            var posY = Animation.triangleGroup.children[7+i].position.y + 100;
            Animation.triangleGroup.children[7+i].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 500,
                delay: 11000+(500*i),
                animationType: 'easeInOutQuad'
            });
        }
        for(var j = 0; j < 1; j++){
            var posX = Animation.triangleGroup2.children[5+j].position.x;
            var posY = Animation.triangleGroup2.children[5+j].position.y + 100;
            Animation.triangleGroup2.children[5+j].animate({
                style:{
                    position: new Point(posX, posY)
                },
                duration: 500,
                delay: 12500+(500*j),
                animationType: 'easeInOutQuad'
            });
        }

        var posX = Animation.triangleGroup.children[9].position.x;
        var posY = Animation.triangleGroup.children[9].position.y + 65;
        Animation.triangleGroup.children[9].animate({
            style:{
                position: new Point(posX, posY)
            },
            duration: 500,
            delay: 14000,
            animationType: 'easeInOutQuad',
            callback: function(){
                Main.animationFinished(1000);

            }
        });
    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki düzgün çokgensel bölgelerden bir veya ikisini fare ile seçerek süsleme yapınız. Çokgensel bölgelerden farklı renkte seçebilir ve döndürerek de yerleştirebilirsiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        // dropable area
        Interaction.dropArea = new Path();
        Interaction.dropArea.moveTo(220.5, 260.5);
        Interaction.dropArea.lineTo(580.5, 260.5);
        Interaction.dropArea.lineTo(580.5, 20.5);
        Interaction.dropArea.lineTo(220.5, 20.5);
        Interaction.dropArea.lineTo(220.5, 260.5);
        Interaction.dropArea.strokeColor = "grey";
        Interaction.dropArea.class = "dropArea";

        // Hexagons
        Interaction.hexagon = new Path();
        Interaction.hexagon.moveTo(50.5, 60);
        Interaction.hexagon.lineTo(70.5, 60-(Math.sqrt(3)*20));
        Interaction.hexagon.lineTo(110.5, 60-(Math.sqrt(3)*20));
        Interaction.hexagon.lineTo(130.5, 60);
        Interaction.hexagon.lineTo(110.5, 60+(Math.sqrt(3)*20));
        Interaction.hexagon.lineTo(70.5, 60+(Math.sqrt(3)*20));
        Interaction.hexagon.lineTo(50.5, 60);
        Interaction.hexagon.closed = true;
        Interaction.hexagon.strokeColor = "black";
        Interaction.hexagon.fillColor = interactionHexagonColor;
        Interaction.hexagon.class = "draggable";

        Interaction.hexagon2 = new Path();
        Interaction.hexagon2.moveTo(50.5, 60);
        Interaction.hexagon2.lineTo(70.5, 60-(Math.sqrt(3)*20));
        Interaction.hexagon2.lineTo(110.5, 60-(Math.sqrt(3)*20));
        Interaction.hexagon2.lineTo(130.5, 60);
        Interaction.hexagon2.lineTo(110.5, 60+(Math.sqrt(3)*20));
        Interaction.hexagon2.lineTo(70.5, 60+(Math.sqrt(3)*20));
        Interaction.hexagon2.lineTo(50.5, 60);
        Interaction.hexagon2.closed = true;
        Interaction.hexagon2.strokeColor = "black";
        Interaction.hexagon2.fillColor = interactionHexagonColor2;
        Interaction.hexagon2.class = "draggable";

        Interaction.hexagon.position = new Point(60,200);
        Interaction.hexagon2.position = new Point(160,200);

        // Squares
        Interaction.square = new Path();
        Interaction.square.moveTo(50.5, 50.5);
        Interaction.square.lineTo(50.5, 90.5);
        Interaction.square.lineTo(90.5, 90.5);
        Interaction.square.lineTo(90.5, 50.5);
        Interaction.square.lineTo(50.5, 50.5);
        Interaction.square.closed = true;
        Interaction.square.strokeColor = "black";
        Interaction.square.fillColor = interactionSquareColor;
        Interaction.square.class = "draggable";

        Interaction.square2 = new Path();
        Interaction.square2.moveTo(50.5, 50.5);
        Interaction.square2.lineTo(50.5, 90.5);
        Interaction.square2.lineTo(90.5, 90.5);
        Interaction.square2.lineTo(90.5, 50.5);
        Interaction.square2.lineTo(50.5, 50.5);
        Interaction.square2.closed = true;
        Interaction.square2.strokeColor = "black";
        Interaction.square2.fillColor = interactionSquareColor2;
        Interaction.square2.class = "draggable";

        Interaction.square.position = new Point(60.5, 120.5);
        Interaction.square2.position = new Point(160.5, 120.5);

        // Triangles
        Interaction.triangle = new Path();
        Interaction.triangle.moveTo(50.5, 50.5);
        Interaction.triangle.lineTo(90.5, 50.5);
        Interaction.triangle.lineTo(70.5, 50.5-(Math.sqrt(3)*20));
        Interaction.triangle.lineTo(50.5, 50.5);
        Interaction.triangle.closed = true;
        Interaction.triangle.strokeColor = "black";
        Interaction.triangle.fillColor = interactionTriangleColor;
        Interaction.triangle.class = "draggable";

        Interaction.triangle2 = new Path();
        Interaction.triangle2.moveTo(50.5, 50.5);
        Interaction.triangle2.lineTo(90.5, 50.5);
        Interaction.triangle2.lineTo(70.5, 50.5-(Math.sqrt(3)*20));
        Interaction.triangle2.lineTo(50.5, 50.5);
        Interaction.triangle2.closed = true;
        Interaction.triangle2.strokeColor = "black";
        Interaction.triangle2.fillColor = interactionTriangleColor2;
        Interaction.triangle2.class = "draggable";

        Interaction.triangle.position = new Point(60.5, 60.5);
        Interaction.triangle2.position = new Point(160.5, 60.5);
   //     Interaction.triangle.rotate(180);
   //     Interaction.triangle2.rotate(180);

        Interaction.droppedArr = [];
        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(event.item){

                if(event.item.class == "draggable"){
                    this.item = event.item.clone();
                    this.item.class = "clone";
                    this.drag = true;
                    this.totalDelta = new Point(0,0);
                    this.firstPosition = this.item.position;
                }

                if(event.item.class == "clone"){
                    this.item = event.item.clone();
                    this.item.class = "clone";
                    this.drag = true;
                    this.totalDelta = new Point(0,0);
                    this.firstPosition = this.item.position;
                 //   this.item.remove();
                    event.item.remove();
                }
            }
        }

        tool.onMouseDrag = function(event){
            if(this.drag === true){
                var newPosition = this.firstPosition.add(this.totalDelta).add(event.delta);

                if(1){

                }
                else{
                    this.item.position = newPosition;
                }


                this.totalDelta = this.totalDelta.add(event.delta);

            }
        }

        tool.onMouseUp = function(event){
            if(event.item){
                if(Interaction.dropArea.bounds.contains(event.item.position)){
                }
                else{
                    this.item.remove();
                }
                this.drag = false;
//                this.lastDraggedItem = this.item;
                this.item = null;
            }

        }

        tool.activate();

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){

    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){

    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){

    }
}