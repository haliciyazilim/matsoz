function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
    images:[
        {
            id:'rect_back',
            src:'/assets/animations/uzay/rect_back.png'
        },
        {
            id:'rect_front',
            src:'/assets/animations/uzay/rect_front.png'
        },
        {
            id:'ball',
            src:'/assets/animations/uzay/ball.png'
        },
        {
            id:'earth',
            src:'/assets/animations/uzay/earth.png'
        },
        {
            id:'solar_system',
            src:'/assets/animations/uzay/solar_system.jpg'
        },

    ],
	init:function(container){
			Animation.container = container;
            var center = new Point($(container).width()*0.5,$(container).height()*0.5);
            Animation.centerPoint = center;
            Animation.rect_back = new Raster('rect_back');
            Animation.rect_back.position = center;
            Animation.ball = new Raster('ball');
            Animation.ball.position = center;
            Animation.rect_front = new Raster('rect_front');
            Animation.rect_front.position = center;
            Animation.traverseBall();
		},
   traverseBall : function(){
            Animation.ball.scale(0.4);
            Animation.ball.position = Animation.ball.position.add(120,30)
            Animation.ball.animate({
                style:{position:Animation.ball.position.add(-240,10)},
                duration:1000,
                callback:function(){
                Animation.ball.animate({
                    style:{position:Animation.ball.position.add(120,10)},
                    duration:1000,
                    callback:function(){
                    Animation.ball.animate({
                        style:{position:Animation.ball.position.add(120,-20)},
                        duration:1000,
                        callback:function(){
                        Animation.ball.animate({
                            style:{position:Animation.ball.position.add(20,20)},
                            duration:500,
                            callback:function(){
                            Animation.ball.animate({
                                style:{position:Animation.centerPoint},
                                duration:1000,
                                animationStyle:'easeOut',
                                callback:Animation.zoomToBall
                            });
                            }
                        });
                        }
                    });
                    }
                });
                }
            });
        },
    zoomToBall : function(){
            var animHelper = new AnimationHelper({
                scale:1
            });
            animHelper.animate({
                style:{scale:2},
                duration:1000,
                animationStyle:'easeOut',
                update:function(){
                    var matrix;
                    matrix = Animation.ball.matrix.clone();
                    matrix.setToScale(this.scale*0.5,this.scale*0.5);
                    Animation.ball.setMatrix(matrix);
                    Animation.ball.position = Animation.centerPoint;

                    matrix = Animation.rect_front.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    Animation.rect_front.setMatrix(matrix);
                    Animation.rect_front.position = Animation.centerPoint;

                    matrix = Animation.rect_back.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    Animation.rect_back.setMatrix(matrix);
                    Animation.rect_back.position = Animation.centerPoint;
                },
                callback:Animation.transformBallToEarth
            })
        },
    transformBallToEarth:function(){
            Animation.earth = new Raster('earth');
            Animation.earth.position = Animation.centerPoint;
            Animation.earth.set_style({opacity:0});

            Animation.ball.animate({
                style:{opacity:0},
                duration:1000,
                delay:500,
                update:function(){
                    Animation.rect_front.opacity = this.opacity;
                    Animation.rect_back.opacity = this.opacity;
                }
            });
            Animation.earth.animate({
                style:{opacity:1},
                duration:1000,
                delay:500,
                callback:Animation.placeEarthInTheSolarSystem
            });
        },
    placeEarthInTheSolarSystem : function() {
            Animation.solar_system = new Raster('solar_system');
            Animation.solar_system.position = Animation.centerPoint.add(325,-112);
            Animation.solar_system.set_style({opacity:0});
            Animation.earth.scale = 1;
            Animation.earth.animate({
                style:{scale:0.4450},
                duration:1000,
                update:function(){
                    var matrix = this.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    this.setMatrix(matrix);
                    this.position = Animation.centerPoint;
                },
                callback:function(){
                    Animation.solar_system.animate({
                        style:{opacity:1},
                        duration:1000,
                        callback:Animation.zoomOutSolarSystem
                    });
                    this.animate({
                        style:{opacity:0},
                        duration:1000
                    })
                }
            });

        },
    zoomOutSolarSystem : function(){

            Animation.solar_system._p = this.position;
            Animation.solar_system.scale = 1;
            Animation.solar_system.animate({
                style:{_p:Animation.centerPoint.add(0,0),scale:0.5},
                duration:1000,
                animationStyle:'easeOut',
                update:function(){
                    var matrix = this.matrix.clone();
                    matrix.setToScale(this.scale,this.scale);
                    this.setMatrix(matrix);
                    this.position = this._p;
                },
                callback:Main.animationFinished
            })

        }
}

var Interaction = {
    images : [
            {
                id:'class',
                src:'/assets/animations/uzay/class.png',
                name:'Sınıf',
                isSpace:true
            },
            {
                id:'room',
                src:'/assets/animations/uzay/room.png',
                name:'Evin bir odası',
                isSpace:true
            },
            {
                id:'pencil',
                src:'/assets/animations/uzay/pencil.png',
                name:'kalem',
                isSpace:false
            },
            {
                id:'school',
                src:'/assets/animations/uzay/school.png',
                name:'Okul',
                isSpace:true
            },
            {
                id:'matchbox',
                src:'/assets/animations/uzay/matchbox.png',
                name:'Ağzı açık kibrit kutusu',
                isSpace:true
            },
            {
                id:'stadium',
                src:'/assets/animations/uzay/stadium.png',
                name:'Futbol Stadı',
                isSpace:true
            },
            {
                id:'apple',
                src:'/assets/animations/uzay/apple.png',
                name:'Elma',
                isSpace:false
            },
            {
                id:'bus',
                src:'/assets/animations/uzay/bus.png',
                name:'Otobüsün içi',
                isSpace:true
            },
            {
                id:'pencilbox',
                src:'/assets/animations/uzay/pencilbox.png',
                name:'Ağzı açık kalem kutusu',
                isSpace:true
            },
            {
                id:'staple',
                src:'/assets/animations/uzay/staple.png',
                name:'Raptiye',
                isSpace:false
            },
            {
                id:'refrigerator',
                src:'/assets/animations/uzay/refrigerator.png',
                name:'Kapısı açık buzdolabı',
                isSpace:true
            },
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