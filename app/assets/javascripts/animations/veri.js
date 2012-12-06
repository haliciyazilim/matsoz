<<<<<<< HEAD
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

            $(container).append('<img id="fut" src="/assets/animations/veri/FUTBOL.jpg" />');
            $('#fut')

                .css("position", "absolute")
                .css("left", "15px")
                .css("top", "17px")
                .css("opacity", 0)
		
			$(container).append('<img id="player7" src="/assets/animations/veri/futbolcu_07.png" />');
			$('#player7')

						.css("position", "absolute")
						.css("left", "40px")
						.css("top", "30px")
						.css("opacity", 0)
						.delay(13000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player8" src="/assets/animations/veri/futbolcu_08.png" />');
			$('#player8')

						.css("position", "absolute")
						.css("left", "110px")
						.css("top", "26px")
					    .css("opacity", 0)
						.delay(14500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player9" src="/assets/animations/veri/futbolcu_09.png" />');
			$('#player9')

						.css("position", "absolute")
						.css("left", "173px")
						.css("top", "27px")
						.css("opacity", 0)
						.delay(16000).animate({opacity: 1}, 1000)
			
			$(container).append('<img id="player10" src="/assets/animations/veri/futbolcu_10.png" />');
			$('#player10')

						.css("position", "absolute")
						.css("left", "240px")
						.css("top", "25px")
						.css("opacity", 0)
						.delay(17500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player11" src="/assets/animations/veri/futbolcu_11.png" />');
			$('#player11')

						.css("position", "absolute")
						.css("left", "325px")
						.css("top", "30px")
						.css("opacity", 0)
						.delay(19000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player1" src="/assets/animations/veri/futbolcu_01.png" />');
			$('#player1')

						.css("position", "absolute")
						.css("left", "20px")
						.css("top", "86px")
						.css("opacity", 0)
						.delay(3000).animate({opacity: 1}, 1000)
			
			$(container).append('<img id="player2" src="/assets/animations/veri/futbolcu_02.png" />');
			$('#player2')

						.css("position", "absolute")
						.css("left", "84px")
						.css("top", "88px")
						.css("opacity", 0)
						.delay(5500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player3" src="/assets/animations/veri/futbolcu_03.png" />');
			$('#player3')

						.css("position", "absolute")
						.css("left", "144px")
						.css("top", "90px")
						.css("opacity", 0)
						.delay(7000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player4" src="/assets/animations/veri/futbolcu_04.png" />');
			$('#player4')

						.css("position", "absolute")
						.css("left", "211px")
						.css("top", "95px")
						.css("opacity", 0)
						.delay(8500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="player5" src="/assets/animations/veri/futbolcu_05.png" />');
			$('#player5')

						.css("position", "absolute")
						.css("left", "290px")
						.css("top", "84px")
						.css("opacity", 0)
						.delay(10000).animate({opacity: 1}, 1000)
			
			$(container).append('<img id="player6" src="/assets/animations/veri/futbolcu_06.png" />');
			$('#player6')

						.css("position", "absolute")
						.css("left", "350px")
						.css("top", "90px")
						.css("opacity", 0)
						.delay(11500).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="infoo" src="/assets/animations/veri/veri_f_yazi.png" />');
			$('#infoo')
						.css("width", "110px")
						.css("height", "70px")
						.css("position", "absolute")
						.css("left", "402px")
						.css("top", "34px")
						.css("opacity", 0)
						.delay(1000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="ball" src="/assets/animations/veri/veri_futbol_topu.png" />');
			$('#ball')
						.css("width", "34px")
						.css("height", "30px")
						.css("position", "absolute")
						.css("left", "468px")
						.css("top", "146px")
						.css("opacity", 0)
						.delay(2000).animate({opacity: 1}, 1000)
		
			$(container).append('<img id="datasPad" src="/assets/animations/veri/veri_tabla.png" />');
			$('#datasPad')
						.css("width", "256px")
						.css("height", "150px")
						.css("position", "absolute")
						.css("left", "505px")
						.css("top", "30px")
						.css("opacity", 0)
						.delay(2000).animate({opacity: 1}, 1000)
			
			$(container).append('<p id="data1">1.41</p>');
			$('#data1').css("position", "absolute")
						.css("width", "0px")
						.css("top", "55px")
						.css("left", "570px")
						.css("opacity", 0)
						.delay(animStart+1100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data2">1.40</p>');
			$('#data2').css("position", "absolute")
						.css("top", "55px")
						.css("left", "610px")
						.css("width", '0px')
						.css("opacity", 0)
						.delay(animStart+2600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data3">1.39</p>');
			$('#data3').css("position", "absolute")
						.css("width", "0px")
						.css("top", "55px")
						.css("left", "650px")
						.css("opacity", 0)
						.delay(animStart+4100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data4">1.40</p>');
			$('#data4').css("position", "absolute")
						.css("width", "0px")
						.css("top", "55px")
						.css("left", "690px")
						.css("opacity", 0)
						.delay(animStart+5600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data5">1.40</p>');
			$('#data5').css("position", "absolute")
						.css("width", "0px")
						.css("top", "89px")
						.css("left", "570px")
						.css("opacity", 0)
						.delay(animStart+7100).animate({opacity: 1, width: '30px'}, 1000)
			
			$(container).append('<p id="data6">1.41</p>');
			$('#data6').css("position", "absolute")
						.css("width", "0px")
						.css("top", "89px")
						.css("left", "610px")
						.css("opacity", 0)
						.delay(animStart+8600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data7">1.38</p>');
			$('#data7').css("position", "absolute")
						.css("width", "0px")
						.css("top", "89px")
						.css("left", "650px")
						.css("opacity", 0)
						.delay(animStart+10100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data8">1.40</p>');
			$('#data8').css("position", "absolute")
						.css("width", "0px")
						.css("top", "89px")
						.css("left", "690px")
						.css("opacity", 0)
						.delay(animStart+11600).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data9">1.42</p>');
			$('#data9').css("position", "absolute")
						.css("width", "0px")
						.css("top", "123px")
						.css("left", "570px")
						.css("opacity", 0)
						.delay(animStart+13100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<p id="data10">1.39</p>');
			$('#data10').css("position", "absolute")
						.css("width", "0px")
						.css("top", "123px")
						.css("left", "610px")
						.css("opacity", 0)
						.delay(animStart+14600).animate({opacity: 1, width: '30px'}, 1000)
			
			$(container).append('<p id="data11">1.41</p>');
			$('#data11').css("position", "absolute")
						.css("width", "0px")
						.css("top", "123px")
						.css("left", "650px")
						.css("opacity", 0)
						.delay(animStart+16100).animate({opacity: 1, width: '30px'}, 1000)
		
			$(container).append('<img id="pencil" src="/assets/animations/veri/kursun_kalem_.png" />');
			$('#pencil')
						.css("width", "70px")
						.css("height", "110px")
						.css("position", "absolute")
						.css("left", "565px")
						.css("top", "-39px")
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
						.delay(0).animate({left: '565px', top: '-5px'}, 0)
		
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
						.delay(0).animate({left: '565px', top: '29px'}, 0)
		
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
						.delay(0).animate({opacity: 0}, 500, function(){
                            Main.animationFinished(300);

                })
		
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
			
=======
// Veri interaction

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation =function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
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

var index = 0;
var shuffledQuesArr = Util.getShuffledArray(16);
// interaction init
Interaction.init = function(container){
	
	// set interaction title
	Main.setObjective('Bir apartmanda yaşayan ailelerin çocuk sayıları araştırma sonuçları verilmiştir. Bu sonuçlara göre soruları cevaplayınız.');
	
	var i;
	
	// crate questions array -> holds 15 question
	var questions = new Array();
	questions[0] = "Apartmanda 1 çocuğu olan kaç aile var?";
	questions[1] = "Apartmanda 2 çocuğu olan kaç aile var?";
	questions[2] = "Apartmanda 3 çocuğu olan kaç aile var?";
	questions[3] = "Apartmanda 4 çocuğu olan kaç aile var?";
	questions[4] = "Apartmanda 5 çocuğu olan kaç aile var?";
	questions[5] = "Apartmanda çocuğu olmayan kaç aile var?";
	questions[6] = "Apartmanda çocuğu olan kaç aile var?";
	questions[7] = "Apartmanda kaç aile var?";
	questions[8] = "Apartmanda çocuk sayısı 1 den fazla olan kaç aile var?";
	questions[9] = "Apartmanda çocuk sayısı 2 den fazla olan kaç aile var?";
	questions[10] = "Apartmanda çocuk sayısı 3 den fazla olan kaç aile var?";
	questions[11] = "Apartmanda çocuk sayısı 2 den az olan kaç aile var?";
	questions[12] = "Apartmanda çocuk sayısı 3 den az olan kaç aile var?";
	questions[13] = "Apartmanda çocuk sayısı 4 den az olan kaç aile var?";
	questions[14] = "Apartmanda çocuk sayısı 5 den az olan kaç aile var?";
	questions[15] = "Apartmanda kaç çocuk var?";
	
	// crate data array randomly -> holds 30 data
	var datas = new Array();
	for(i = 0; i < 30; i++)
	{
		datas[i] = Math.floor(Math.random() * 6);
	}
	
	// adding neccesary html element -> images, datas, question, input box and buttons
	$(container).append('<img id="paper" src="/assets/animations/veri/veri_02.jpg" />');
	$('#paper').css("width", "413px")
				.css("height", "284px")
				.css("position", "absolute")
				.css("left", "0px")
				.css("top", "0px");
	
	for(i = 0; i < 5; i++)
	{
		var topStr = ""+(114+24*i)+"px";
		for(j = 0; j < 6; j++)
		{
			var leftStr = ""+(210+26*j)+"px";
			$(container).append('<p id="data'+i*6+j+'"></p>');
			$('#data'+i*6+j).html(datas[i*6+j]);
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
				
	$(container).append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "42")
					.css("height", "40")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("position", "absolute")
					.css("left", "474px")
					.css("top", "98px")
					.css("text-align", "center");
					
	$('#textInput1').addClass('input');

	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "414px")
					.css("top", "160px")
					.css("width", "160px")
					.css("height", "50px")
					.css("text-align", "center")
				//	.css("border", "solid")
					
	$(container).append('<button id="checkBtn" class="next_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("right", "40px")
					.css("bottom", "20px");
	

	PrepareAndCheckQuestions();
	
	// submit function -> check whether input field is filled and give neccessary feedbacks
	var trial;
	var deactivate = 0;
	function PrepareAndCheckQuestions(){
		if($('#checkBtn').get(0).className == "next_button"){
>>>>>>> origin/abdullah-dev
			for(i = 0; i < 5; i++){
				for(j = 0; j < 6; j++){
					$('#data'+i*6+j).css("color", "black");
				}
			}
<<<<<<< HEAD
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
=======
			$('#statuss').html("");
			$('#textInput1').val("");
			$('#textInput1').css("color", inputBoxColor);
			$('#question').html("");
			$('#question').html(questions[shuffledQuesArr[index]]);
			if(index == 15)
				index = 0;
			else
				index += 1;
			trial = 0;
			deactivate = 0;
			$('#checkBtn').get(0).className = "control_button";
			$('.inp').get(0).onkeydown = null; 
		}
		else{
			// if this is the 3rd trial or more do nothing
			if (trial == 2)
				return;
			
			ans1 = $('#textInput1').val();
			// check whether input field is empty or not (also given input is integer or not)
			if(ans1 == "" || !Util.isInteger(ans1))
			{
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
			}
			else
			{
				// generate answer wrt. given question
				var answer = 0;
				switch(shuffledQuesArr[index-1])
				{
					case 0:
						for(i = 0; i < 30; i++)
						{
							if(datas[i] == 1)
							{
								answer += 1;
							}
						}
						break;
					case 1:
						for(i = 0; i < 30; i++)
						{
							if(datas[i] == 2)
							{
								answer += 1;
							}
						}
					  break;
				  case 2:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] == 3)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 3:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] == 4)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 4:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] == 5)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 5:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] == 0)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 6:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] != 0)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 7:
					  answer = 30;
					  break;
				  case 8:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] > 1)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 9:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] > 2)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 10:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] > 3)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 11:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] < 2)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 12:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] < 3)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 13:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] < 4)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 14:
					  for(i = 0; i < 30; i++)
					  {
						  if(datas[i] < 5)
						  {
							  answer += 1;
						  }
					  }
					  break;
				  case 15:
				  	for(i = 0, answer = 0; i < 30; i++){
						answer += datas[i];
					}
				  		
				}
				
				// correct answer state
				if(ans1 == answer)
				{
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').get(0).className = "next_button";
					deactivate = 1;
					$('.inp').each(function(index, element) {
						$(this).get(0).onkeydown = function(event){
												if(event.keyCode != 13)
													return false;
											}   
					});
					switch(shuffledQuesArr[index-1])
					{
						// if answer is true, make the answer datas green
						case 0:
							for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 1)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
						case 1:
							for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 2)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
						break;
				  		case 2:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 3)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 3:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 4)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 4:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 5)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 5:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 0)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 6:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] != 0)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 7:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									$('#data'+i*6+j).css("color", "green");
								}
							}
							break;
				 	 	case 8:
				 			for(i = 0; i < 5; i++)
						 	{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] > 1)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 9:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] > 2)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 10:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] > 3)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 11:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 2)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 12:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 3)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 13:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 4)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 14:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 5)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
						case 15:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									$('#data'+i*6+j).css("color", "green");
								}
							}
							break;
						}
				}
				// second wrong answer state
				else if(trial == 1)
				{
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').val(answer);
					$('#textInput1').css("color", inputBoxAnswerColor);

					switch(shuffledQuesArr[index-1])
					{
						// if answer is wrong, give the answer and make the answer datas green
						case 0:
							for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 1)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
						case 1:
							for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 2)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
						break;
				  		case 2:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 3)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 3:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 4)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 4:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 5)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 5:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 0)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 6:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] != 0)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 7:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									$('#data'+i*6+j).css("color", "green");
								}
							}
							break;
				 	 	case 8:
				 			for(i = 0; i < 5; i++)
						 	{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] > 1)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 9:
				 			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] > 2)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 10:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] > 3)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 11:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 2)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 12:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 3)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 13:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 4)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
				  		case 14:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] < 5)
									{
										$('#data'+i*6+j).css("color", "green");
									}
								}
							}
							break;
						case 15:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									$('#data'+i*6+j).css("color", "green");
								}
							}
							break;
					}
					trial += 1;
					deactivate = 1;
					$('#checkBtn').get(0).className = "next_button";
					$('.inp').each(function(index, element) {
						$(this).get(0).onkeydown = function(event){
												if(event.keyCode != 13)
													return false;
											}   
					});
				}
				// first wrong answer state
				else if(trial == 0)
				{	
					trial += 1;
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Tekrar deneyiniz.");
				}
			}
		}
	}
		
	$('#checkBtn').click(function(){
		PrepareAndCheckQuestions();
	});
	
	$('.inp').keydown(function() {
		if(deactivate == 0)
			$('#statuss').html("");
	});
	
	// enter keypress action
	$(".inp").keyup(function(event) {
		if(event.keyCode == 13) {
			$('#checkBtn').click();
		}
	});
}
>>>>>>> origin/abdullah-dev
