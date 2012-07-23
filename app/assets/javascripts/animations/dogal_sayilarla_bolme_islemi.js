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
		$(container).append("<div id='soru'>");
			$("#soru").css("width","120px")
			.css("height","130px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","0")
			.css("right","0")
			.css("top","0px")
			.css("font-size","20px");
			//.css("border","solid 1px black");
			
			bolmeIslemi= new LongDivision(165,3,"#soru");
			
			asamalarArray=new Array();
			asamaKalanlar= new Array();
			asamaSonuc=new Array();
			i=0;
			while(true){
				
				asama=bolmeIslemi.nextStep();
				if(asama == null)
					break;
					
				asamalarArray[i]=asama;
				//console.log("divisor"+bolmeIslemi.nodes.divisor);
				
				var sonuc=$(".up", asama).html();
				asamaKalanlar[i]=sonuc;
				console.log("icerik"+sonuc);
				//$(".up", asama).html("<input></input>");
				
				
				var kalan=$(".down", asama).html();
				asamaSonuc[i]=kalan;
				console.log("icerik"+kalan);
				//$(".down", asama).html("<input></input>");
				
				
				//$(".up", asama).html("<input>");
				
				i++;
					
			}
			console.log(asamalarArray[2]);
			for(var i=0; i < asamalarArray.length;i++){
				console.log($(".down", asamalarArray[i]).html());
				$(".up", asamalarArray[i]).html("<input></input>");
				$(".down", asamalarArray[i]).html("<input></input>");
			}
			$(".up input, .down input").css("width","40px");
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
	
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