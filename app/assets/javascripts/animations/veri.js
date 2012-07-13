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
	
	// 1.38
	$(container).append('<img id="firstBoy" src="/assets/animations/veri/1.41-child.png" />');
	$('#firstBoy').css("width", "60px")
				.css("height", "100px")
				.css("position", "absolute")
				.css("left", "110px")
				.css("bottom", "50px");
	 // 1.39
	$(container).append('<img id="secondBoy" src="/assets/animations/veri/1.41-child.png" />');
	$('#secondBoy').css("width", "60px")
				.css("height", "106px")
				.css("position", "absolute")
				.css("left", "110px")
				.css("bottom", "50px");
	// 1.40
	$(container).append('<img id="thirdBoy" src="/assets/animations/veri/1.41-child.png" />');
	$('#thirdBoy').css("width", "60px")
				.css("height", "112px")
				.css("position", "absolute")
				.css("left", "110px")
				.css("bottom", "50px");
	// 1.41
	$(container).append('<img id="fourthBoy" src="/assets/animations/veri/1.41-child.png" />');
	$('#fourthBoy').css("width", "60px")
				.css("height", "118px")
				.css("position", "absolute")
				.css("left", "110px")
				.css("bottom", "50px");
	// 1.42
	$(container).append('<img id="fifthBoy" src="/assets/animations/veri/1.41-child.png" />');
	$('#fifthBoy').css("width", "60px")
				.css("height", "124px")
				.css("position", "absolute")
				.css("left", "110px")
				.css("bottom", "50px");
	
	// paper2
	$(container).append('<img id="paper2" src="/assets/animations/veri/paper2.png" />');
	$('#paper2').css("width", "100px")
				.css("height", "194px")
				.css("position", "absolute")
				.css("left", "584px")
				.css("top", "6px");
				
	$(container).append('<div id="paper2Div"></div>');
	$('#paper2Div').css("position", "absolute")
					.css("top", "10px")
					.css("left", "590px")
					.css("width", "80px")
					.css("height", "160px")
					.css("text-align", "center")
			//		.css("border", "solid")
	
	// player's length text
	$('#paper2Div').append('<p id="firstLength">1.41</p>');
	$('#firstLength').css("position", "absolute")
						.css("top", "2px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="secondLength">1.40</p>');
	$('#secondLength').css("position", "absolute")
						.css("top", "18px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="thirdLength">1.39</p>');
	$('#thirdLength').css("position", "absolute")
						.css("top", "34px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="fourthLength">1.40</p>');
	$('#fourthLength').css("position", "absolute")
						.css("top", "50px")
						.css("left", "2px")
						.css("font-size", 12);
						
	$('#paper2Div').append('<p id="fifthLength">1.40</p>');
	$('#fifthLength').css("position", "absolute")
						.css("top", "66px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="sixthLength">1.41</p>');
	$('#sixthLength').css("position", "absolute")
						.css("top", "82px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="seventhLength">1.38</p>');
	$('#seventhLength').css("position", "absolute")
						.css("top", "98px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="eighthLength">1.40</p>');
	$('#eighthLength').css("position", "absolute")
						.css("top", "114px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="ninthLength">1.42</p>');
	$('#ninthLength').css("position", "absolute")
						.css("top", "130px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="tenthLength">1.39</p>');
	$('#tenthLength').css("position", "absolute")
						.css("top", "146px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$('#paper2Div').append('<p id="eleventhLength">1.41</p>');
	$('#eleventhLength').css("position", "absolute")
						.css("top", "162px")
						.css("left", "2px")
						.css("font-size", 12);
	
	$(container).append('<div id="infoText">Okul futbol takımındaki öğrencilerin boy uzunlukları ölçüm sonuçları.</div>')
	$('#infoText').css("position", "absolute")
					.css("top", "72px")
					.css("left", "194px")
					.css("width", "357px")
					.css("height", "60px")
					.css("text-align", "center")
					.css("color", "#29088A")
					.css("font-size", 22);
					
	exampleHelper = {
		firstBoyOpacity: 0,
		secondBoyOpacity: 0,
		thirdBoyOpacity: 0,
		fourthBoyOpacity: 0,
		fifthBoyOpacity: 0,
		infoTextOpacity: 0,
		paper2Opacity: 0,
		firstLengthOpacity: 0,
		secondLengthOpacity: 0,
		thirdLengthOpacity: 0,
		fourthLengthOpacity: 0,
		fifthLengthOpacity: 0,
		sixthLengthOpacity: 0,
		seventhLengthOpacity: 0,
		eighthLengthOpacity: 0,
		ninthLengthOpacity: 0,
		tenthLengthOpacity: 0,
		eleventhLengthOpacity: 0
	};
	
	exampleHelper.animate = Item.prototype.animate;
	
	Animation.onFrame = function(event){
		$('#firstBoy').css("opacity", exampleHelper.firstBoyOpacity);
		$('#secondBoy').css("opacity", exampleHelper.secondBoyOpacity);
		$('#thirdBoy').css("opacity", exampleHelper.thirdBoyOpacity);
		$('#fourthBoy').css("opacity", exampleHelper.fourthBoyOpacity);
		$('#fifthBoy').css("opacity", exampleHelper.fifthBoyOpacity);
		$('#paper2').css("opacity", exampleHelper.paper2Opacity);
		$('#infoText').css("opacity", exampleHelper.infoTextOpacity);
		$('#firstLength').css("opacity", exampleHelper.firstLengthOpacity);
		$('#secondLength').css("opacity", exampleHelper.secondLengthOpacity);
		$('#thirdLength').css("opacity", exampleHelper.thirdLengthOpacity);
		$('#fourthLength').css("opacity", exampleHelper.fourthLengthOpacity);
		$('#fifthLength').css("opacity", exampleHelper.fifthLengthOpacity);
		$('#sixthLength').css("opacity", exampleHelper.sixthLengthOpacity);
		$('#seventhLength').css("opacity", exampleHelper.seventhLengthOpacity);
		$('#eighthLength').css("opacity", exampleHelper.eighthLengthOpacity);
		$('#ninthLength').css("opacity", exampleHelper.ninthLengthOpacity);
		$('#tenthLength').css("opacity", exampleHelper.tenthLengthOpacity);
		$('#eleventhLength').css("opacity", exampleHelper.eleventhLengthOpacity);
	}
	
	// info text
	exampleHelper.animate({
		style: {
			infoTextOpacity: 1
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	// paper comes
	exampleHelper.animate({
		style: {
			paper2Opacity: 1
		},
		duration: 1000,
		delay: 2000,
		animationType: 'easeInEaseOut'
	});
	
	
	// first player
	exampleHelper.animate({
		style: {
			fourthBoyOpacity: 1
		},
		duration: 1000,
		delay: 4000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			firstLengthOpacity: 1
		},
		duration: 1000,
		delay: 4500,
		animationType: 'easeInEaseOut'
	});
	
	// second player
	exampleHelper.animate({
		style: {
			fourthBoyOpacity: 0
		},
		duration: 1000,
		delay: 6000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 1
		},
		duration: 1000,
		delay: 6000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			secondLengthOpacity: 1
		},
		duration: 1000,
		delay: 6500,
		animationType: 'easeInEaseOut'
	});
	
	// third player
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 0
		},
		duration: 1000,
		delay: 8000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			secondBoyOpacity: 1
		},
		duration: 1000,
		delay: 8000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			thirdLengthOpacity: 1
		},
		duration: 1000,
		delay: 8500,
		animationType: 'easeInEaseOut'
	});
	
	// fourth player
	exampleHelper.animate({
		style: {
			secondBoyOpacity: 0
		},
		duration: 1000,
		delay: 10000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 1
		},
		duration: 1000,
		delay: 10000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fourthLengthOpacity: 1
		},
		duration: 1000,
		delay: 10500,
		animationType: 'easeInEaseOut'
	});
	
	//fifth player
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 0
		},
		duration: 1000,
		delay: 12000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 1
		},
		duration: 1000,
		delay: 12020,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fifthLengthOpacity: 1
		},
		duration: 1000,
		delay: 12500,
		animationType: 'easeInEaseOut'
	});
	
	// sixth player
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 0
		},
		duration: 1000,
		delay: 14000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			fourthBoyOpacity: 1
		},
		duration: 1000,
		delay: 14000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			sixthLengthOpacity: 1
		},
		duration: 1000,
		delay: 14500,
		animationType: 'easeInEaseOut'
	});
	
	// seventh player
	exampleHelper.animate({
		style: {
			fourthBoyOpacity: 0
		},
		duration: 1000,
		delay: 16000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			firstBoyOpacity: 1
		},
		duration: 1000,
		delay: 16000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			seventhLengthOpacity: 1
		},
		duration: 1000,
		delay: 16500,
		animationType: 'easeInEaseOut'
	});
	
	// eighth player
	exampleHelper.animate({
		style: {
			firstBoyOpacity: 0
		},
		duration: 1000,
		delay: 18000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 1
		},
		duration: 1000,
		delay: 18000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			eighthLengthOpacity: 1
		},
		duration: 1000,
		delay: 18500,
		animationType: 'easeInEaseOut'
	});
	
	
	// ninth player
	exampleHelper.animate({
		style: {
			thirdBoyOpacity: 0
		},
		duration: 1000,
		delay: 20000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			fifthBoyOpacity: 1
		},
		duration: 1000,
		delay: 20000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			ninthLengthOpacity: 1
		},
		duration: 1000,
		delay: 20500,
		animationType: 'easeInEaseOut'
	});
	
	// tenth player
	exampleHelper.animate({
		style: {
			fifthBoyOpacity: 0
		},
		duration: 1000,
		delay: 22000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			secondBoyOpacity: 1
		},
		duration: 1000,
		delay: 22000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			tenthLengthOpacity: 1
		},
		duration: 1000,
		delay: 22500,
		animationType: 'easeInEaseOut'
	});
	
	// eleventh player
	exampleHelper.animate({
		style: {
			secondBoyOpacity: 0
		},
		duration: 1000,
		delay: 24000,
		animationType: 'easeInEaseOut'
	})
	
	exampleHelper.animate({
		style: {
			fourthBoyOpacity: 1
		},
		duration: 1000,
		delay: 24000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			eleventhLengthOpacity: 1
		},
		duration: 1000,
		delay: 24500,
		animationType: 'easeInEaseOut'
	});

	
}

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
	
	// crate data array randomly -> holds 30 data
	var datas = new Array();
	for(i = 0; i < 30; i++)
	{
		datas[i] = Math.floor(Math.random() * 6);
	}
	
	// adding neccesary html element -> images, datas, question, input box and buttons
	$(container).append('<img id="paper" src="/assets/animations/veri/paper.png" />');
	$('#paper').css("width", "180px")
				.css("height", "150px")
				.css("position", "absolute")
				.css("left", "160px")
				.css("top", "50px");
	
	for(i = 0; i < 5; i++)
	{
		var topStr = ""+(64+24*i)+"px";
		for(j = 0; j < 6; j++)
		{
			var leftStr = ""+(170+26*j)+"px";
			$(container).append('<p id="data'+i*6+j+'"></p>');
			$('#data'+i*6+j).html(datas[i*6+j]);
			$('#data'+i*6+j).css("position", "absolute")
						.css("left", leftStr)
						.css("top", topStr)
						.css("font-size", 18)
		}
	}
				
	$(container).append('<img id="apartment" src="/assets/animations/veri/apartment.png" />');
	$('#apartment').css("width", "140px")
				.css("height", "150px")
				.css("position", "absolute")
				.css("left", "0px")
				.css("top", "50px");
				
	$(container).append('<p id="question" ></p>');
	$('#question').css("position", "absolute")
				.css("left", "360px")
				.css("top", "60px")
				.css("width", "190px")
				.css("font-size", 18)
				.css("text-align", "center");
				
	$(container).append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					.css("position", "absolute")
					.css("left", "434px")
					.css("top", "140px")
					.css("text-align", "center");
					
	$('#textInput1').addClass('input');

	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "160px")
					.css("top", "240px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center")
					
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "490px")
					.css("top", "240px");
	
	$(container).append('<button id="nextBtn" class="next_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "490px")
					.css("top", "240px");
	$('#nextBtn').hide();
	nextQuestion();
	
	// generate nextQuestion func. -> datas stay same but question changes..
	var questionIndex;
	function nextQuestion()
	{
		$('#nextBtn').hide();
		$('#checkBtn').show();
		$('#statuss').html("");
		$('#textInput1').val("");
		$('#textInput1').css("color", inputBoxColor);
		var randQuestion = Math.floor(Math.random() * 15);
		questionIndex = randQuestion;
		$('#question').html("");
		$('#question').html(questions[randQuestion]);
		var trial2 = 0;
		trial = trial2;	
	}
	
	// submit function -> check whether input field is filled and give neccessary feedbacks
	var trial;
	submit = function()
		{	
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
				switch(questionIndex)
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
				}
				
				// correct answer state
				if(ans1 == answer)
				{
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
					switch(questionIndex)
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
						}
				}
				// second wrong answer state
				else if(trial == 1)
				{
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').val(answer);
					$('#textInput1').css("color", inputBoxAnswerColor);

					switch(questionIndex)
					{
						// if answer is wrong, give the answer and make the answer datas red
						case 0:
							for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									if(datas[i*6+j] == 1)
									{
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
									}
								}
							}
							break;
				  		case 7:
				  			for(i = 0; i < 5; i++)
							{
								for(j = 0; j < 6; j++)
								{
									$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
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
										$('#data'+i*6+j).css("color", "red");
									}
								}
							}
							break;
						}
						
					$('#checkBtn').hide();
					$('#nextBtn').show();
					trial += 1;
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
		
	$('#checkBtn').click(submit);
	
	// nextBtn click func. -> make the red datas black again if exists, than call nextQuestion func.
	$('#nextBtn').click(function() {
		for(i = 0; i < 5; i++)
		{
			for(j = 0; j < 6; j++)
			{
				$('#data'+i*6+j).css("color", "black");
			}
		}
		nextQuestion();
	});
	
	$('.inp').keydown(function() {
		$('#statuss').html("");
	});
	
	// enter keypress action
	$("#textInput1").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
}