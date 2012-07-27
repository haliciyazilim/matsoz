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
	
	sayi1=0;sayi2=0,sayi3=0;
			// Ana Div
			$(container).append("<div id='soru'>");
				$("#soru")
					.css("width","414px")
					.css("height","45px")
					.css("position","absolute")
					.css("left","0")
					.css("top","0")
					.css("right","0")
					.css("bottom","0")
					.css("margin","auto");
					//.css("border","1px solid red");
					
			$(container).append("<div id='cevap'>");
				$("#cevap")
					.css("width","414px")
					.css("height","45px")
					.css("position","absolute")
					.css("left","0")
					.css("right","0")
					.css("bottom","100px")
					.css("margin","auto")
					.css("opacity","0");
					//.css("border","1px solid red");
					
		
		sayi1=sayiUretim();
		sayi2=sayiUretim();
		sayi3=sayiUretim();
		soru=new liste(sayi1,sayi2,sayi3,"soru");
		soru.doldur();
		
		var siraliListe=[sayi1,sayi2,sayi3];
		siraliListe.sort();
		cevap=new liste(siraliListe[0],siraliListe[1],siraliListe[2],"cevap");
		cevap.doldur();
		
		
		
			Interaction.appendButton({bottom:"40px", right:"48px"});
			Interaction.appendStatus({bottom:"50px", right:"200px"});
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
		$("#cevap").animate({opacity:"0"},1000);
		//$("#cevap").css("opacity","0");
		$("#soru").delay(800).animate({top:"0px"},1000);
		//$("#soru, #cevap").html("");
		sayi1=sayiUretim();
		sayi2=sayiUretim();
		sayi3=sayiUretim();
		
		$("#soru #siralanacakSayi1").html(sayi1);
		$("#soru #siralanacakSayi2").html(sayi2);
		$("#soru #siralanacakSayi3").html(sayi3);
		
		
	
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
		
		/*var sayi1= new Object;
		sayi1.icerik=$("#soru #siralanacakSayi1").html();
		sayi1.sira=$("#soru  #siralanacakSayi1").position().left;

		var sayi2= new Object;
		sayi2.icerik=$("#soru  #siralanacakSayi2").html();
		sayi2.sira=$("#soru #siralanacakSayi2").position().left;

		var sayi3= new Object;
		sayi3.icerik=$("#soru #siralanacakSayi3").html();
		sayi3.sira=$("#soru #siralanacakSayi3").position().left;
		
		
		console.log(sayi1.icerik+" "+sayi1.sira);
		console.log(sayi2.icerik+" "+sayi2.sira);
		console.log(sayi3.icerik+" "+sayi3.sira);
		
		var liste=[sayi1.icerik,sayi2.icerik,sayi3.icerik];
		var siraliListe=liste.sort();

		
		console.log(siraliListe);*/
		
		siraliListe=[sayi1,sayi2,sayi3];
		siraliListe.sort();
		console.log(siraliListe)
		$("#cevap #siralanacakSayi1").html(siraliListe[0]);
		$("#cevap #siralanacakSayi2").html(siraliListe[1]);
		$("#cevap #siralanacakSayi3").html(siraliListe[2]);
		
		var ilk=$("#soru .sayilar:first").html();
		console.log("ilk: "+ilk);
		
		var sonuncu=$("#soru .sayilar:last").html();
		console.log("sonuncu: "+sonuncu);
		
		if(ilk==siraliListe[0] && sonuncu==siraliListe[2])
			return true;
		
		/*
		console.log("1. item position: "+$("#siralanacakSayi1").position().left+" , "+$("#siralanacakSayi1").position().top);
		console.log("1. item val: "+$("#siralanacakSayi1").html());
		console.log("2. item position: "+$("#siralanacakSayi2").position().left+" , "+$("#siralanacakSayi1").position().top);
		console.log("2. item val: "+$("#siralanacakSayi2").html());
		console.log("3. item position: "+$("#siralanacakSayi3").position().left+" , "+$("#siralanacakSayi1").position().top);
		console.log("3. item val: "+$("#siralanacakSayi3").html());
		*/
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		Interaction.setStatus('Yanlış cevap, doğrusu yukarıdadır.',false);
		$("#soru").animate({top:"-100px"},1000);
		$("#cevap").delay(800).animate({opacity:"1"},1000);
		
		},
}

liste=function(eleman1,eleman2, eleman3,div){
	this.div="#"+div;
	this.e1=eleman1;
	this.e2=eleman2;
	this.e3=eleman3;
	this.doldur=
		function(){	
		if(this.div=="#soru"){
			$(function() {
				$("#siralama" ).sortable({
					items: "li:not(.ui-state-disabled)",
					
					placeholder: "ui-state-highlight",
					//grid: [80, 30],
					//helper: 'original',
					//forceHelperSize: true,
					//forcePlaceholderSize: true,
					
					opactiy:0.6,
					cursor: 'move',
					axis: 'x',
					zIndex:5,
					tolerance: 'pointer',
					//revert: true
					
				});
				
				$( "#siralama" ).sortable({
					cancel: ".ui-state-disabled"
				});

				
				$( "#siralama" ).disableSelection();
				$("#siralama").sortable( "refreshPositions" );
			});
		}
			
			
			$(this.div, container).append("<ul id='siralama'>");
			$(this.div+" #siralama", container).append("<li id='siralanacakSayi1' class='sayilar'>");
				$(this.div+" #siralama #siralanacakSayi1")
					.html(this.e1);
			
			$(this.div+" #siralama", container).append("<li id='kucuk1' class='isaretler'>");
				$(this.div+" #kucuk1").css("left","100px");
				
			$(this.div+" #siralama", container).append("<li id='siralanacakSayi2' class='sayilar'>");
				$(this.div+" #siralama #siralanacakSayi2")
					.html(this.e2);
			
			$(this.div+" #siralama", container).append("<li id='kucuk2' class='isaretler'>");		
				$(this.div+" #kucuk2").css("left","232px");
			$(this.div+" #siralama", container).append("<li id='siralanacakSayi3' class='sayilar'>");
				$(this.div+" #siralama #siralanacakSayi3")
					.html(this.e3);

			$(this.div+" #siralama")
				.css("list-style-type","none")
				.css("width","414px")
				.css("padding","0")

				.css("margin-top","10px");
				//.css("border","solid 1px orange");
			$(this.div+" #siralama li")
				.css("float","left")
				.css("margin","0 40px 0 10px")
				.css("height","30px")
				.css("line-height","30px");
				//.css("border","solid 1px black");
			$(this.div+" #siralama .sayilar")
					.addClass("ui-state-default")
					.css("text-align","center")
					.css("font-size","20px")
					.css("width","80px")
					.css("cursor","pointer");
					/*
					.click(
					function (){
						$(this).css("cursor","move");
					});*/
					
					
			$(this.div+" #siralama .isaretler", container).append("<img id='kucuk' src='/assets/animations/yuzdeleri_karsilastirma/sol_ok.png' />");
				$(this.div+" .isaretler")
					.addClass("ui-state-disabled")
					.css("position","absolute")
					.css("top","0")
					.css("bottom","0")
					.css("margin","auto");
					//.css("border","1px solid orange");
			
			$(this.div+ " .ui-state-highlight")
				.css("width","80px")
				.css("line-height","30px")
				.css("height","30px");

		}
}


var sayiUretim=function(){
	
	var deger=Math.floor(Math.random()*3+1);
	console.log("deger: "+deger);
	
	var ondalik=Math.floor(Math.random()*3+1);
	console.log("deger: "+ondalik);
	
	switch(deger){
		case 1:
			var rastgeleSayi=Math.random()*9+1; 
			return format(rastgeleSayi,{places:ondalik});
			break;
		case 2:
			var rastgeleSayi=Math.random()*99+1; 
			return format(rastgeleSayi,{places:ondalik});
			break;
		case 3:
			var rastgeleSayi=Math.random()*999+1; 
			return format(rastgeleSayi,{places:ondalik});
			break;
	}
};

var format = function(num, options) {
	options.point=options.point ||'.';
	options.group=options.group ||' ';
	options.places=options.places||0;
	options.suffix=options.suffix||'';
	options.prefix=options.prefix||'';
	
	regex = /(\d+)(\d{3})/;
	result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';
				
	for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
	return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};