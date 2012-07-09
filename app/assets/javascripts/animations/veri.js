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
					.css("font-family", "Helvetica Neue")
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
	
	$(container).append('<button id="nextBtn" class="control_button">Sonraki</button>');
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
					$('#statuss').html("Olmadı!");
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