var Animation = {
	init:function(container){
		
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
				// Ana Div
		$(Interaction.container).append("<div id='soruTekliInput'>");
			$("#soruTekliInput").css("width","180px")
			.css("height","130px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","0px")
			.css("top","10px")
			.css("font-size","20px")
			.css("border","solid 1px black");
			
		$("#soruTekliInput",Interaction.container).append("<div id='kesir'>");
		$("#kesir")
			.css("position","absolute")
			.css("left", "0px")
			.css("top", "30px")
			.css("width", "100px")
			.css("height", "45px")
			.css("padding", 0)
			.css("border", "2px solid");
		var pay=format(93507, {point:'.'});
		$("#kesir",container).append("<div id='kesirPay'>");
		$("#kesirPay").css("text-align","center");
		$("#kesirPay").html(pay).css("line-height","24px");
		
		$("#kesir",container).append("<div id='kesirIsareti'>");
		$('#kesirIsareti').css("position","absolute")
				.css("left", "px")
				.css("top", "22px")
				.css("width", "100px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
			
		$("#kesir",container).append("<div id='kesirPayda'>");
		$("#kesir #kesirPayda",container).append("100");
		$("#kesirPayda").css("text-align","center");
		
		$("#soruTekliInput",Interaction.container).append("<div id='esittir'>");
		$('#kesirIsareti').css("position","absolute")
				.css("left", "px")
				.css("top", "22px")
				.css("width", "100px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
			
			// Cevap Divi
		$(Interaction.container).append("<div id='SoruCokluInput'>");
			$("#SoruCokluInput").css("width","120px")
			.css("height","130px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","370px")
//			.css("right","0")
			.css("top","10px")
			.css("font-size","20px")
			.css("border","solid 1px black");
			
			
			Interaction.appendButton({bottom:"40px", right:"40px"});
			Interaction.appendStatus({bottom:"50px", right:"200px"});
			
			
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
		
		//$("#soruTekliInput").
		
		
	
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		},
}

var format = function(num, options) {
	options.point=options.point ||',';
	options.group=options.group ||' ';
	options.places=options.places||0;
	options.suffix=options.suffix||'';
	options.prefix=options.prefix||'';
	
	regex = /(\d+)(\d{3})/;
	result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';
				
	for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
	return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};