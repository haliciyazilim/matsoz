// JavaScript Document

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";


var Animation = {
	init:function(container){
//		<img src="/assets/animations/minus_sign.png" />
		var animDiv = document.createElement('animDiv');
		var marblesDiv = document.createElement('marbleDiv');
		$(container).append(animDiv);
		$(animDiv)
			.html('<div id="ques12"><p id="nom2">1</p><div id="line2"></div><p id="denom2">4</p></div><p id="a2">\'ü</p><p id="ques22">3</p><p id="b2">tane olan bilyelerin tamamı kaç bilyedir?</p>')
			.css({
				width: '400px',
				height: '120px',
				position:'absolute',
				left: '30px',
				top: '6px',
				fontSize: '16px',
				textAlign: 'left',
				opacity: 0
			})
			.delay(1000)
			.animate({opacity:1}, 1000)
		$('#ques12')
				.css({
				//	border: "solid",
					width: "40px",
					height: "60px",
					position: "absolute",
					left: "10px",
					top: "10px"
				});
			$('#ques22')
				.css({
				//	border: "solid",
				//	width: "30px",
					height: "60px",
					position: "absolute",
					left: "60px",
					top: "18px",
					textAlign: "left"
				});
			$('#nom2')
				.css({
					position: "absolute",
					left: "10px",
					top:"6px",
				});
			$('#denom2')
				.css({
					position: "absolute",
					left: "10px",
					top:"28px",
				});
			$('#a2')
				.css({
					position: "absolute",
					left: "44px",
					top:"18px",
				});
			$('#b2')
				.css({
					position: "absolute",
					left: "74px",
					top:"18px",
				});
			$('#line2')
				.css({
					height: "1px",
					padding: 0,
					borderTop: "2px solid",
					width: "20px",
					height: "1px",
					position: "absolute",
					left: "4px",
					top: "24px",
				});
			
			$(container).append(marblesDiv);
			$(marblesDiv)
				.html('<div id="aD"><img id="marble" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble2" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble3" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble4" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /></div>')
				.css({
					width: "400px",
					height: "60px",
					position: "absolute",
					left: "80px",
					top: "52px",
				})
			$('#marble').css({
					position: "absolute",
					top: "0px",
					left:"0px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(2000).animate({opacity:1}, 1000)
			$('#marble2').css({
					position: "absolute",
					top: "0px",
					left:"110px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(6000).animate({opacity:1}, 1000)
			$('#marble3').css({
					position: "absolute",
					top: "0px",
					left:"220px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(6000).animate({opacity:1}, 1000)
			$('#marble4').css({
					position: "absolute",
					top: "0px",
					left:"330px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(6000).animate({opacity:1}, 1000)
			
			var rectGroup = new Group();
			var rect1 = new Path.Rectangle(new Point(60.5, 36.5), new Size(110,110));
			rect1.strokeColor = "#a9a9a9";
			rect1.opacity = 0;
			var rect2 = new Path.Rectangle(new Point(170.5, 36.5), new Size(110,110));
			rect2.strokeColor = "#a9a9a9";
			rect2.opacity = 0;
			var rect3 = new Path.Rectangle(new Point(280.5, 36.5), new Size(110,110));
			rect3.strokeColor = "#a9a9a9";
			rect3.opacity = 0;
			var rect4 = new Path.Rectangle(new Point(390.5, 36.5), new Size(110,110));
			rect4.strokeColor = "#a9a9a9";
			rect4.opacity = 0;
			
			var text1 = new PointText(new Point(110, 170));
			text1.content = "3";
			text1.fillColor = "black";
			text1.fontSize = 14;
			text1.opacity = 0;
			var text2 = new PointText(new Point(220, 170));
			text2.content = "3";
			text2.fillColor = "black";
			text2.fontSize = 14;
			var text3 = new PointText(new Point(330, 170));
			text3.content = "3";
			text3.fillColor = "black";
			text3.fontSize = 14;
			var text4 = new PointText(new Point(440, 170));
			text4.content = "3";
			text4.fillColor = "black";
			text4.fontSize = 14;
			var textGroup = new Group();
		//	textGroup.addChild(text1);
			textGroup.addChild(text2);
			textGroup.addChild(text3);
			textGroup.addChild(text4);
			for(i = 0; i < 3; i++)
				textGroup.children[i].opacity = 0;
			
			var solnText1 = new PointText(new Point(560, 120));
			solnText1.content = "3 + 3 + 3 + 3 = 12";
			solnText1.fillColor = "black";
			solnText1.fontSize = 14;
			solnText1.opacity = 0;
			var solnText2 = new PointText(new Point(626, 150));
			solnText2.content = "3 x 4 = 12";
			solnText2.fillColor = "black";
			solnText2.fontSize = 14;
			solnText2.opacity = 0;
			
			text1.animate({
				style:{
					opacity:1
				},
				duration: 500,
				delay: 4000,
				animationType: 'easeInEaseOut'
			});
			
			rect1.animate({
				style:{
					opacity:1
				},
				duration:1000,
				delay: 3000,
				animationType: 'easeInEaseOut'
			});
			rect2.animate({
				style:{
					opacity:1
				},
				duration:500,
				delay: 5000,
				animationType: 'easeInEaseOut'
			});
			rect3.animate({
				style:{
					opacity:1
				},
				duration:500,
				delay: 5000,
				animationType: 'easeInEaseOut'
			});
			rect4.animate({
				style:{
					opacity:1
				},
				duration:500,
				delay: 5000,
				animationType: 'easeInEaseOut'
			});
			for(i = 0; i < 3; i++){
				textGroup.children[i].animate({
					style:{
						opacity:1
					},
					duration:1000,
					delay: 6000,
					animationType: 'easeInEaseOut'
				});
			}
			
			solnText1.animate({
				style:{
					opacity:1
				},
				duration: 1000,
				delay: 7500,
				animationType: 'easeInEaseOut'
			});
			
			solnText2.animate({
				style:{
					opacity:1
				},
				duration: 1000,
				delay: 9000,
				animationType: 'easeInEaseOut'
			});

		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda kesri verilen bütünü bulunuz ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}

			
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '320px',
				top: "14px",
				fontSize: '24px', 
			});
			
			$(Interaction.input).attr('maxlength', '2')
			var questionDiv = document.createElement('questionDiv')
			$(container).append(questionDiv);
			$(questionDiv)
				.html('<div id="ques1"><p id="nom"></p><div id="line"></div><p id="denom"></p></div><p id="a">\'i</p><p id="ques2"></p><p id="b">olan kesrin tamamı</p><p id="c">olur</p>')
				.append(Interaction.input)
				.css({
					width: '400px',
					height: '120px',
					position:'absolute',
					left: '60px',
					top: '30px',
				//	border: 'solid',
					fontSize: '24px',
					textAlign: 'left'
				});
			$('#ques1')
				.css({
				//	border: "solid",
					width: "40px",
					height: "60px",
					position: "absolute",
					left: "10px",
					top: "10px"
				});
			$('#ques2')
				.css({
				//	border: "solid",
					width: "30px",
					height: "60px",
					position: "absolute",
					left: "66px",
					top: "18px",
					textAlign: "center"
				});
			$('#nom')
				.css({
					position: "absolute",
					left: "10px",
					top:"6px",
				});
			$('#denom')
				.css({
					position: "absolute",
					left: "10px",
					top:"36px",
				});
			$('#a')
				.css({
					position: "absolute",
					left: "54px",
					top:"18px",
				});
			$('#b')
				.css({
					position: "absolute",
					left: "102px",
					top:"18px",
				});
			$('#c')
				.css({
					position: "absolute",
					left: "368px",
					top:"18px",
				});
			$('#line')
				.css({
					height: "1px",
					padding: 0,
					borderTop: "2px solid",
					width: "30px",
					height: "1px",
					position: "absolute",
					left: "4px",
					top: "30px",
				});

			
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			})
			Interaction.questionDiv = questionDiv;
			Interaction.nomD = $('#nom').get(0);
			Interaction.denomD = $('#denom').get(0);
			Interaction.ques2Div = $('#ques2').get(0);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){	
			if(Interaction.solutionDiv)
				$(Interaction.solutionDiv).remove();				
			Interaction.denom = Math.floor(Math.random() * 4) + 2;
			Interaction.num = Math.floor(Math.random() * 9) + 2;
			do
				Interaction.nom = Math.floor(Math.random() * 3) + 1;
				while((Interaction.denom * Interaction.num) % Interaction.nom != 0 || Interaction.nom >= Interaction.denom)
			
			$(Interaction.nomD).html(Interaction.nom);
			$(Interaction.denomD).html(Interaction.denom);
			$(Interaction.ques2Div).html(Interaction.num);
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.denom*Interaction.num/Interaction.nom)
				return true;
			else 
				return false;
		},
	onCorrectAnswer : function(){
			
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.');
			Interaction.solutionDiv = $(Interaction.questionDiv).clone().insertAfter(Interaction.questionDiv);
			var answerStr;
			var anss = this.denom*this.num/this.nom
			if(this.nom == 1)
				answerStr = "Cevap: "+this.denom+" x "+this.num+" = "+this.denom*this.num;
			else
				answerStr = "Cevap: ("+this.denom+" x "+this.num+") / "+this.nom+" = "+anss;
			
			$(Interaction.solutionDiv)
				.html(answerStr)
				.css({
					position:"absolute",
					left: "80px",
					top: "140px",
					color: "#069",
					textAlign: "center"
				});
		},
}