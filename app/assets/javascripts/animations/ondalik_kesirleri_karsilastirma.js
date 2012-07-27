/*
	Matematik Sözlüğü - Ondalık Kesirleri Karşılaştırma
	
	Halıcı Yazılım
	Abdullah Karacabey
	27.07.2012

*/

function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
	init:function(container){
			Animation.container = container;
		
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
			
			
			$(function() {
				$( "#siralama" ).sortable({
					items: "li:not(.ui-state-disabled)",
					placeholder: "ui-state-highlight",
					//grid: [80, 30],
					helper: 'clone',
					//forceHelperSize: true,
					//forcePlaceholderSize: true,
					cursor: 'pointer',
					axis: 'x',
					
				});
				
				$( "#siralama" ).sortable({
					cancel: ".ui-state-disabled"
				});
				$( "#siralama" ).disableSelection();
			});
			
			// Ana Div
			$(container).append("<div id='soru'>");
				$("#soru")
					.css("width","414px")
					.css("height","100px")
					.css("position","absolute")
					.css("left","0")
					.css("top","0")
					.css("right","0")
					.css("bottom","0")
					.css("margin","auto")
					.css("border","1px solid red");
			
			$("#soru", container).append("<ul id='siralama'>");
			$("#siralama", container).append("<li id='siralanacakSayi1' class='sayilar'>");
				$("#siralama #siralanacakSayi1")
					.html("333333");
			
			$("#siralama", container).append("<li id='kucuk1' class='isaretler'>");
				$("#kucuk1").css("left","100px");
				
			$("#siralama", container).append("<li id='siralanacakSayi2' class='sayilar'>");
				$("#siralama #siralanacakSayi2")
					.html("222222");
			
			$("#siralama", container).append("<li id='kucuk2' class='isaretler'>");		
				$("#kucuk2").css("left","232px");
			$("#siralama", container).append("<li id='siralanacakSayi3' class='sayilar'>");
				$("#siralama #siralanacakSayi3")
					.html("11111");

			$("#siralama")
				.css("list-style-type","none")
				.css("width","414px")
				.css("padding","0")
				.css("margin-top","34px");
				//.css("border","solid 1px orange");
			$("#siralama li")
				.css("float","left")
				.css("margin","0 40px 0 10px")
				.css("height","30px")
				.css("line-height","30px")
				
				.css("border","solid 1px black");
			$("#siralama .sayilar")
					.addClass("ui-state-default")
					.css("align","center")
					.css("width","80px");
			$("#siralama .isaretler", container).append("<img id='kucuk' src='/assets/animations/yuzdeleri_karsilastirma/sol_ok.png' />");
				$(".isaretler")
					.addClass("ui-state-disabled")
					.css("position","absolute")
					.css("top","0")
					.css("bottom","0")
					.css("margin","auto")
					.css("border","1px solid orange");
			
			$(".ui-state-highlight")
				.css("width","80px")
				.css("line-height","30px")
				.css("height","30px");
			/*
			$("#soru", container).append("<div id='siralanacakSayi1' class='sayilar'>");
				$("#siralanacakSayi1")
					.css("left","10px");
			$("#soru", container).append("<img id='kucuk' src='/assets/animations/yuzdeleri_karsilastirma/sol_ok.png' />");
				$("#kucuk")
					.css("position","absolute")
					.css("left","100px")
					.css("top","0")
					.css("bottom","0")
					.css("margin","auto")
					.css("border","1px solid orange");
					
			$("#soru", container).append("<div id='siralanacakSayi2' class='sayilar'>");
				$("#siralanacakSayi2")
					.css("left","100px");
			$("#soru", container).append("<div id='siralanacakSayi3' class='sayilar'>");
				$("#siralanacakSayi3")
					.css("left","190px");		
								
			$(".sayilar")
				.css("width","80px")
				.css("height","30px")
				.css("position","absolute")
				.css("top","0")
				.css("bottom","0")
				.css("margin","auto")
				.css("border","1px solid orange");
			*/
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
	
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
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