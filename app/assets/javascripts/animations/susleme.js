function __Styles(){
    animationTriangleColor = "#F69162"
    animationTriangleColor2 = "#85A562";
}

var Animation = {
    init:function(container){
        Animation.container = container;

        var triangle = new Path.Triangle(new Point(250.5,150.5), new Point(280.5, 150.5), new Point(265.5, 126.5))
        triangle.strokeColor = "black";
        triangle.fillColor = animationTriangleColor;

        var triangle2 = new Path.Triangle(new Point(265.5, 126.5), new Point(295.5, 126.5), new Point(280.5, 150.5))
        triangle2.strokeColor = "black";
        triangle2.fillColor = animationTriangleColor2;


    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        /*
         *	Initialize your interaction here
         */

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