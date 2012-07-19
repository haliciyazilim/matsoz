// JavaScript Document

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
	Animation.container = container;
}

// interaction init
Interaction.init = function(container){
	Interaction.container = container;
	
	var randomize = Math.floor(Math.random() * 2) + 1;
	
//	if(randomize == 1){
	if(1) {
		Main.setObjective('Yandaki ifadenin açılımını yazınız.');
		
		var num = Math.floor(Math.random() * 9) + 2;
		var power = Math.floor(Math.random() * 2) + 2;
		
		// creating neccessary html element
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "52px")
						.css("width", "266")
						.css("height", "100")
				//		.css("border", "solid")
		$('#questionDiv').append('<p id ="num">10</p>');
		$('#num').css("position", "absolute")
				.css("right", "232px")
				.css("top", "40px")
				.css("font-size", 24)
				.css("text-align", "right")
		$('#questionDiv').append('<p id ="power">3</p>');
		$('#power').css("position", "absolute")
				.css("left", "34px")
				.css("top", "30px")
				.css("font-size", 16)
		$('#questionDiv').append('<p id ="eq">=</p>');
		$('#eq').css("position", "absolute")
				.css("left", "50px")
				.css("top", "40px")
				.css("font-size", 24)
				.css("text-align", "right")
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="8"/>');
		$('#textInput1').css("width", "100")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "72px")
						.css("top", "36px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
	}
	else{
		Main.setObjective('Yandaki ifadeyi üslü biçimde yazınız.');
		
		var num = Math.floor(Math.random() * 9) + 2;
		var power = Math.floor(Math.random() * 2) + 2;
		
		// creating neccessary html element
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "52px")
						.css("width", "266")
						.css("height", "100")
						.css("border", "solid")
	}
}