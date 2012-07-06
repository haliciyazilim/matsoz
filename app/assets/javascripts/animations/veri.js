
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};

var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(paper){
	
	Main.setObjective('Bir apartmanda yaşayan ailelerin çocuk sayıları araştırma sonuçları verilmiştir. Bu sonuçlara göre soruları cevaplayınız.');
	
	var i;
	
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
	
	var datas = new Array();
	for(i = 0; i < 30; i++)
	{
		datas[i] = Math.floor(Math.random() * 6);
	}
	for(i = 0; i < 15; i++)
	{
		console.log("question"+i+": "+questions[i]);
	}
	for(i = 0; i < 30; i++)
	{
		console.log("data"+i+": "+datas[i]);
	}
	
	$('#interaction_container').append('<img id="paper" src="/assets/animations/veri/paper.png" />');
	$('#paper').css("width", "180px")
				.css("height", "150px")
				.css("position", "absolute")
				.css("left", "120px")
				.css("top", "150px");
	
	for(i = 0; i < 5; i++)
	{
		var topStr = ""+(138+24*i)+"px";
		for(j = 0; j < 6; j++)
		{
			var leftStr = ""+(136+26*j)+"px";
			$('#interaction_container').append('<p id="data'+i*6+j+'"></p>');
			$('#data'+i*6+j).html(datas[i*6+j]);
			$('#data'+i*6+j).css("position", "absolute")
						.css("left", leftStr)
						.css("top", topStr)
						.css("font-size", 18);
		}
	}
				
	$('#interaction_container').append('<img id="apartment" src="/assets/animations/veri/apartment.png" />');
	$('#apartment').css("width", "120px")
				.css("height", "150px")
				.css("position", "absolute")
				.css("left", "0px")
				.css("top", "150px");
				
	$('#interaction_container').append('<p id="question" >Apartmanda 1 çocuğu olan kaç aile vardır?</p>');
	$('#question').css("position", "absolute")
				.css("left", "310px")
				.css("top", "140px")
				.css("width", "190px")
				.css("font-size", 18)
				.css("text-align", "center");
				
	$('#interaction_container').append('<input id="textInput1" type="textbox" maxlength="2"/>');
		$('#textInput1').css("width", "27")
					.css("height", "25")
					.css("font-size", 22)
					.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "380px")
					.css("top", "240px")
					.css("text-align", "center")
					.css("color", "green");
					
	$('#textInput1').addClass('input');
	$('#textInput1').addClass('active');
	
	$('#interaction_container').append('<div id="statuss_field" class="status_field"></div>');
	$('#statuss_field').css("position", "absolute")
					.css("left", "120px")
					.css("top", "340px");
					
	$('#interaction_container').append('<div id="statuss" class="status_false">Deneme</div>');
	$('#statuss').css("position", "absolute")
					.css("left", "180px")
					.css("top", "340px");
					
	$('#interaction_container').append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("left", "400px")
					.css("top", "340px");
	
	$('#interaction_container').append('<button id="nextBtn" class="control_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("left", "400px")
					.css("top", "340px");
	$('#nextBtn').hide();
	nextQuestion();
	
	var questionIndex;
	console.log("questionIndex: "+questionIndex);
	
	function nextQuestion()
	{
		$('#nextBtn').hide();
		$('#checkBtn').show();
		$('#statuss').html("");
		$('#textInput1').val("");
		var randQuestion = Math.floor(Math.random() * 15);
		questionIndex = randQuestion;
		$('#question').html("");
		$('#question').html(questions[randQuestion]);
	}
	
	var trial = 0;				
	submit = function()
		{
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
			console.log("answer: "+answer);
		}
	
	$('#checkBtn').click(submit);
	
	$('#nextBtn').click(function() {
		nextQuestion();
	});
}