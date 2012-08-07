function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
	init:function(container){
			Animation.container = container;
            Main.animationFinished();
		}
}

var Interaction = {
    images : [
            {
                id:'class',
                src:'/assets/animations/uzay/class.png',
                name:'Sınıf',
                isSpace:true
            }
        ],
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
            Interaction.container = container;
            Main.setObjective('Aşağıdaki verilenlerin uzay olup olmadığını belirtiniz.');
            Interaction.paper = {
                width:$(container).width(),
                height:$(container).height()
            }
            Interaction.appendStatus({
                bottom:'40px',
                width:'100%',
                left:'50%',
                marginLeft:'-50%',
                textAlign:'center'
            });
            Interaction.appendButton({
                top:'-100px'
            });
			Interaction.imageContainer = document.createElement("div");
            $(Interaction.container).append(Interaction.imageContainer);
            $(Interaction.imageContainer)
                .css({
                    position:'absolute',
                    top:'50%',
                    height:'200px',
                    width:'200px',
                    lineHeight:'200px',
                    left:'10px',
                    marginTop:'-100px'
                });
            Interaction.questionDiv = document.createElement("div");
            $(Interaction.container).append(Interaction.questionDiv);
            $(Interaction.questionDiv)
                .css({
                    position:'absolute',
                    top:'50%',
                    height:'50px',
                    width:'180px',
                    lineHeight:'50px',
                    left:'250px',
                    marginTop:'-25px'
                });
            Interaction.yesButton = document.createElement("input");
            Interaction.yesButton.setAttribute('type','button');
            $(Interaction.container).append(Interaction.yesButton);
            $(Interaction.yesButton)
                .attr({
                    value:'Evet'
                })
                .click(function(){
                    Interaction.answer = true;
                    Interaction.button.click();
                })
                .css({
                    position:'absolute',
                    top:'50%',
                    height:'30px',
                    width:'75px',
                    left:'420px',
                    marginTop:'-15px'
                });
            
            Interaction.noButton = document.createElement("input");
            Interaction.noButton.setAttribute('type','button');
            $(Interaction.container).append(Interaction.noButton);
            $(Interaction.noButton)
                .attr({
                    value:'Hayır'
                })
                .click(function(){
                    Interaction.answer = false;
                    Interaction.button.click();
                })
                .css({
                    position:'absolute',
                    top:'50%',
                    height:'30px',
                    width:'75px',
                    left:'500px',
                    marginTop:'-15px'
                });
            Interaction.prepareNextQuestion();
		},
	nextQuestion: function(shape){
            Interaction.trial = 1;
            $("head").append($("img",Interaction.imageDiv));
            /*<[[TEST*/
                shape = 0;
            /*TEST]]>*/
            
            Interaction.shape = shape;
            var image = Interaction.images[shape];
            console.log(image);
            $(Interaction.imageContainer).append($("#"+image.id).get(0));
            $('img',Interaction.imageContianer)
                .css({
                    maxWidth:'200px',
                    width:'auto',
                    maxHeight:'200px',
                    height:'auto'
                });
            $(Interaction.questionDiv).html(image.name + " bir uzay mıdır?");
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(){
            var image = Interaction.images[Interaction.shape];
            if(Interaction.answer == image.isSpace)
                return true;
            return false;
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
            Interaction.setStatus("You have failed ! ", false);
		}
}