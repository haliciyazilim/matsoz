function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {
    init:function(container){
        Animation.container = container;

        $(container).append('<img id="shrub" src="/assets/animations/sivilari_olcme/sivilari_olcme_01.jpg" />');
        $('#shrub')
            .css("position", "absolute")
            .css("left", "30px")
            .css("bottom", "10px");

        $(container).append('<img id="milk" src="/assets/animations/sivilari_olcme/sivilari_olcme_02.jpg" />');
        $('#milk')
            .css("position", "absolute")
            .css("left", "240px")
            .css("bottom", "10px");

        $(container).append('<img id="water" src="/assets/animations/sivilari_olcme/sivilari_olcme_03.jpg" />');
        $('#water')
            .css("position", "absolute")
            .css("left", "390px")
            .css("bottom", "10px");

        $(container).append('<img id="pitcher" src="/assets/animations/sivilari_olcme/pitcher.gif" />');
        $('#pitcher')
            .css("position", "absolute")
            .css("left", "570px")
            .css("bottom", "10px")

        setTimeout('$("#pitcher").attr("src", "/assets/animations/sivilari_olcme/pitcher_animation.gif")', 8500);

        AnimateHelper = new AnimationHelper({
            shrubOpacity: 0,
            milkOpacity: 0,
            waterOpacity: 0,
            pitcherOpacity: 0
        });

        Animation.onFrame = function(event) {
            $('#shrub').css("opacity", AnimateHelper.shrubOpacity);
            $('#milk').css("opacity", AnimateHelper.milkOpacity);
            $('#water').css("opacity", AnimateHelper.waterOpacity);
            $('#pitcher').css("opacity", AnimateHelper.pitcherOpacity);
        }

        AnimateHelper.animate({
            style: {
                shrubOpacity: 1,
            },
            duration: 1500,
            delay: 1000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                milkOpacity: 1,
            },
            duration: 1500,
            delay: 3000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                waterOpacity: 1,
            },
            duration: 1500,
            delay: 5000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                pitcherOpacity: 1,
            },
            duration: 1000,
            delay: 7000,
            animationType: 'easeInEaseOut',
            callback: function(){
                Main.animationFinished();
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
        Main.setObjective('Yandaki birimleri birbirine dönüştürünüz.');
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