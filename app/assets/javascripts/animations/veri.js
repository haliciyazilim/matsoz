function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
	init:function(container){
			Animation.container = container;
			
			$(container).append('<img id="mainIm" src="/assets/animations/veri/FUTBOL.jpg" />');
			$('#mainIm').css("width", "757px")
						.css("height", "170px")
						.css("position", "absolute")
						.css("left", "0px")
						.css("bottom", "0px")
						.css("opacity", 0);
		
			var animStart = 3500;
		
			$(container).append('<img id="player7" src="/assets/animations/veri/futbolcu_07.png" />');
			$('#player7')
						.css("width", "58px")
						.css("height", "76px")
						.css("position", "absolute")
						.css("left", "52px")
						.css("top", "52px")
						.css("opacity", 0)
						.delay(13000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player8" src="/assets/animations/veri/futbolcu_08.png" />');
			$('#player8')
						.css("width", "62px")
						.css("height", "76px")
						.css("position", "absolute")
						.css("left", "126px")
						.css("top", "46px")
						.css("opacity", 0)
						.delay(14500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player9" src="/assets/animations/veri/futbolcu_09.png" />');
			$('#player9')
						.css("width", "50px")
						.css("height", "84px")
						.css("position", "absolute")
						.css("left", "188px")
						.css("top", "42px")
						.css("opacity", 0)
						.delay(16000).animate({opacity: 1}, 1000)
			
			$(container).append('<img id="player10" src="/assets/animations/veri/futbolcu_10.png" />');
			$('#player10')
						.css("width", "47px")
						.css("height", "79px")
						.css("position", "absolute")
						.css("left", "250px")
						.css("top", "53px")
						.css("opacity", 0)
						.delay(17500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player11" src="/assets/animations/veri/futbolcu_11.png" />');
			$('#player11')
						.css("width", "56px")
						.css("height", "76px")
						.css("position", "absolute")
						.css("left", "304px")
						.css("top", "57px")
						.css("opacity", 0)
						.delay(19000).animate({opacity: 1}, 1000)	
		
			$(container).append('<img id="player1" src="/assets/animations/veri/futbolcu_01.png" />');
			$('#player1')
						.css("width", "58px")
						.css("height", "80px")
						.css("position", "absolute")
						.css("left", "35px")
						.css("top", "105px")
						.css("opacity", 0)
						.delay(3000).animate({opacity: 1}, 1000)
			
			$(container).append('<img id="player2" src="/assets/animations/veri/futbolcu_02.png" />');
			$('#player2')
						.css("width", "58px")
						.css("height", "80px")
						.css("position", "absolute")
						.css("left", "82px")
						.css("top", "90px")
						.css("opacity", 0)
						.delay(5500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player3" src="/assets/animations/veri/futbolcu_03.png" />');
			$('#player3')
						.css("width", "58px")
						.css("height", "80px")
						.css("position", "absolute")
						.css("left", "147px")
						.css("top", "100px")
						.css("opacity", 0)
						.delay(7000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player4" src="/assets/animations/veri/futbolcu_04.png" />');
			$('#player4')
						.css("width", "57px")
						.css("height", "84px")
						.css("position", "absolute")
						.css("left", "208px")
						.css("top", "100px")
						.css("opacity", 0)
						.delay(8500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player5" src="/assets/animations/veri/futbolcu_05.png" />');
			$('#player5')
						.css("width", "51px")
						.css("height", "84px")
						.css("position", "absolute")
						.css("left", "280px")
						.css("top", "99px")
						.css("opacity", 0)
						.delay(10000).animate({opacity: 1}, 1000)
			
			$(container).append('<img id="player6" src="/assets/animations/veri/futbolcu_06.png" />');
			$('#player6')
						.css("width", "58px")
						.css("height", "76px")
						.css("position", "absolute")
						.css("left", "344px")
						.css("top", "105px")
						.css("opacity", 0)
						.delay(11500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="infoo" src="/assets/animations/veri/veri_f_yazi.png" />');
			$('#infoo')
						.css("width", "110px")
						.css("height", "70px")
						.css("position", "absolute")
						.css("left", "372px")
						.css("top", "34px")
						.css("opacity", 0)
						.delay(1000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="ball" src="/assets/animations/veri/veri_futbol_topu.png" />');
			$('#ball')
						.css("width", "34px")
						.css("height", "30px")
						.css("position", "absolute")
						.css("left", "438px")
						.css("top", "146px")
						.css("opacity", 0)
						.delay(2000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="datasPad" src="/assets/animations/veri/veri_tabla.png" />');
			$('#datasPad')
						.css("width", "256px")
						.css("height", "150px")
						.css("position", "absolute")
						.css("left", "475px")
						.css("top", "40px")
						.css("opacity", 0)
						.delay(2000).animate({opacity: 1}, 1000)
			
			$(container).append('<p id="data1">1.41</p>');
			$('#data1').css("position", "absolute")
						.css("width", "0px")
						.css("top", "60px")
						.css("left", "540px")
						.css("opacity", 0)
						.delay(animStart+1100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data2">1.40</p>');
			$('#data2').css("position", "absolute")
						.css("top", "60px")
						.css("left", "580px")
						.css("width", '0px')
						.css("opacity", 0)
						.delay(animStart+2600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data3">1.39</p>');
			$('#data3').css("position", "absolute")
						.css("width", "0px")
						.css("top", "60px")
						.css("left", "620px")
						.css("opacity", 0)
						.delay(animStart+4100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data4">1.40</p>');
			$('#data4').css("position", "absolute")
						.css("width", "0px")
						.css("top", "60px")
						.css("left", "660px")
						.css("opacity", 0)
						.delay(animStart+5600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data5">1.40</p>');
			$('#data5').css("position", "absolute")
						.css("width", "0px")
						.css("top", "94px")
						.css("left", "540px")
						.css("opacity", 0)
						.delay(animStart+7100).animate({opacity: 1, width: '30px'}, 1000)
			
			$(container).append('<p id="data6">1.41</p>');
			$('#data6').css("position", "absolute")
						.css("width", "0px")
						.css("top", "94px")
						.css("left", "580px")
						.css("opacity", 0)
						.delay(animStart+8600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data7">1.38</p>');
			$('#data7').css("position", "absolute")
						.css("width", "0px")
						.css("top", "94px")
						.css("left", "620px")
						.css("opacity", 0)
						.delay(animStart+10100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data8">1.40</p>');
			$('#data8').css("position", "absolute")
						.css("width", "0px")
						.css("top", "94px")
						.css("left", "660px")
						.css("opacity", 0)
						.delay(animStart+11600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data9">1.42</p>');
			$('#data9').css("position", "absolute")
						.css("width", "0px")
						.css("top", "128px")
						.css("left", "540px")
						.css("opacity", 0)
						.delay(animStart+13100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data10">1.39</p>');
			$('#data10').css("position", "absolute")
						.css("width", "0px")
						.css("top", "128px")
						.css("left", "580px")
						.css("opacity", 0)
						.delay(animStart+14600).animate({opacity: 1, width: '30px'}, 1000)
			
			$(container).append('<p id="data11">1.41</p>');
			$('#data11').css("position", "absolute")
						.css("width", "0px")
						.css("top", "128px")
						.css("left", "620px")
						.css("opacity", 0)
						.delay(animStart+16100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<img id="pencil" src="/assets/animations/veri/kursun_kalem_.png" />');
			$('#pencil')
						.css("width", "70px")
						.css("height", "110px")
						.css("position", "absolute")
						.css("left", "535px")
						.css("top", "-34px")
						.css("opacity", 0)
		
			$('#pencil').delay(animStart).animate({opacity: 1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
		
			$('#pencil')//.delay(950).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
		
			$('#pencil')//.delay(950).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
		
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '535px', top: '0px'}, 0)
		
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
			
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)

			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
		
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '535px', top: '34px'}, 0)
		
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
			
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
				//		.delay(0).animate({opacity: 0}, 500)
						.delay(0).animate({left: '+=10'}, 0)
		
			$('#pencil')//.delay(970).animate({opacity:1}, 500)
						.delay(500).animate({left: '+=30'}, 1000)
						.delay(0).animate({opacity: 0}, 500)
		
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Bir apartmanda yaşayan ailelerin çocuk sayıları araştırma sonuçları verilmiştir. Bu sonuçlara göre soruları cevaplayınız.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			// crate questions array -> holds 15 question
			Interaction.questions = [];
			Interaction.questions[0] = "Apartmanda 1 çocuğu olan kaç aile var?";
			Interaction.questions[1] = "Apartmanda 2 çocuğu olan kaç aile var?";
			Interaction.questions[2] = "Apartmanda 3 çocuğu olan kaç aile var?";
			Interaction.questions[3] = "Apartmanda 4 çocuğu olan kaç aile var?";
			Interaction.questions[4] = "Apartmanda 5 çocuğu olan kaç aile var?";
			Interaction.questions[5] = "Apartmanda çocuğu olmayan kaç aile var?";
			Interaction.questions[6] = "Apartmanda çocuğu olan kaç aile var?";
			Interaction.questions[7] = "Apartmanda kaç aile var?";
			Interaction.questions[8] = "Apartmanda çocuk sayısı 1 den fazla olan kaç aile var?";
			Interaction.questions[9] = "Apartmanda çocuk sayısı 2 den fazla olan kaç aile var?";
			Interaction.questions[10] = "Apartmanda çocuk sayısı 3 den fazla olan kaç aile var?";
			Interaction.questions[11] = "Apartmanda çocuk sayısı 2 den az olan kaç aile var?";
			Interaction.questions[12] = "Apartmanda çocuk sayısı 3 den az olan kaç aile var?";
			Interaction.questions[13] = "Apartmanda çocuk sayısı 4 den az olan kaç aile var?";
			Interaction.questions[14] = "Apartmanda çocuk sayısı 5 den az olan kaç aile var?";
			Interaction.questions[15] = "Apartmanda kaç çocuk var?";
		
			// crate data array randomly -> holds 30 data
			Interaction.datas = [];
			for(i = 0; i < 30; i++)
			{
				Interaction.datas[i] = Math.floor(Math.random() * 6);
			}
			
			// adding neccesary html element -> images, datas, question, input box and buttons
			$(container).append('<img id="paper" src="/assets/animations/veri/veri_02.jpg" />');
			$('#paper').css("width", "413px")
						.css("height", "284px")
						.css("position", "absolute")
						.css("left", "0px")
						.css("top", "0px");
		
			for(i = 0; i < 5; i++){
				var topStr = ""+(114+24*i)+"px";
				for(j = 0; j < 6; j++)
				{
					var leftStr = ""+(210+26*j)+"px";
					$(container).append('<p id="data'+i*6+j+'"></p>');
					$('#data'+i*6+j).html(Interaction.datas[i*6+j]);
					$('#data'+i*6+j).css("position", "absolute")
								.css("left", leftStr)
								.css("top", topStr)
								.css("font-size", 18)
				}
			}
			
			$(container).append('<p id="question" ></p>');
			$('#question').css("position", "absolute")
						.css("left", "300px")
						.css("top", "30px")
						.css("width", "230px")
						.css("font-size", 18)
						.css("text-align", "center");
			
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '474px',
				top: "98px",
				fontSize: '20px', 
			});
			
			Interaction.appendStatus({
				top:'160px',
				left:'414px',
				width: '160px',
				height: '50px',
				textAlign: 'center'
			});
			Interaction.appendButton({
				bottom:'30px',
				right:'40px'
			})
			
			Interaction.setRandomGenerator(16);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			Interaction.randomNumber = randomNumber;
			Interaction.inputs[0].style.color = "black";
			$('#question').html(Interaction.questions[randomNumber])
			
			for(i = 0; i < 5; i++){
				for(j = 0; j < 6; j++){
					$('#data'+i*6+j).css("color", "black");
				}
			}
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
			Interaction.answer = 0;
			
			switch(Interaction.randomNumber) {
					case 0:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] == 1)
								Interaction.answer += 1;
						}
						break;
					case 1:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] == 2)
								Interaction.answer += 1;
						}
						break;
					case 2:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] == 3)
								Interaction.answer += 1;
						}
						break;
					case 3:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] == 4)
								Interaction.answer += 1;
						}
						break;
					case 4:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] == 5)
								Interaction.answer += 1;
						}
						break;
					case 5:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] == 0)
								Interaction.answer += 1;
						}
						break;
					case 6:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] != 0)
								Interaction.answer += 1;
						}
						break;
					case 7:
						Interaction.answer = Interaction.datas.length;
						break;
					case 8:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] > 1)
								Interaction.answer += 1;
						}
						break;
					case 9:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] > 2)
								Interaction.answer += 1;
						}
						break;
					case 10:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] > 3)
								Interaction.answer += 1;
						}
						break;
					case 11:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] < 2)
								Interaction.answer += 1;
						}
						break;
					case 12:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] < 3)
								Interaction.answer += 1;
						}
						break;
					case 13:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] < 4)
								Interaction.answer += 1;
						}
						break;
					case 14:
						for(var i = 0; i < Interaction.datas.length; i++){
							if(Interaction.datas[i] < 5)
								Interaction.answer += 1;
						}
						break;
					case 15:
						for(var i = 0; i < Interaction.datas.length; i++)
								Interaction.answer += Interaction.datas[i];
						break;
				}
				if(value == Interaction.answer)
					return true;
				else
					return false;
				
		
		},
	onCorrectAnswer : function(){
			Interaction.fillAnswer(Interaction.randomNumber, "green");
				
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
			Interaction.inputs[0].value = Interaction.answer;
			Interaction.inputs[0].style.color = "green";
			Interaction.fillAnswer(Interaction.randomNumber, "green");
		
		},
	fillAnswer : function(rand, fillColor){
		switch(rand) {
			case 0:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] == 1)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 1:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] == 2)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 2:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] == 3)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 3:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] == 4)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 4:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] == 5)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 5:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] == 0)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 6:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] != 0)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 7:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 8:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] > 1)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 9:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] > 2)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 10:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] > 3)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 11:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] < 2)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 12:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] < 3)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 13:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] < 4)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 14:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						if(Interaction.datas[i*6+j] < 5)
							$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
			case 15:
				for(var i = 0; i < 5; i++){
					for(var j = 0; j < 6; j++){
						$('#data'+i*6+j).css("color", fillColor)
					}
				}
				break;
		}
	},
}