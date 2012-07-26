

var sayilarStrokeRenk="#9bd1d9";
var sayilarFillRenk="#f2fafc";
var tabloStrokeRenk="#255b63";
var tabloBirlerFillRenk="#ecf8fa";
var tabloBinlerFillRenk="#d9f1f5";
var tabloMilyonlarFillRenk="#bfe8ef";
var inputStrokeRenk="#9bd1d9";

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
			
			pay=0,payda=0;
			sayiUret=function (deger){
				var rastgeleSayi=Math.floor(Math.random()*999998+1); 
				switch(deger){
					
					case 1:
						// sadece 1000'e bölünebilir.
						pay=rastgeleSayi;
						payda=1000;
						
						break;
					case 2:
						// 1000, 100 ve 10'a bölünebilir.
						pay=Math.floor(rastgeleSayi/10); 
						payda=Math.pow(10,Math.floor(Math.random()*2+2));
						
						break;
					case 3:
						// Sadece 10'a bölübebilir.
						pay=Math.floor(rastgeleSayi/100);
						payda=10;
						break;
				}
				return true;
					
			}
			sayiUret(2);
				console.log(pay+"/"+payda);
				sonuc=pay/payda;
				console.log(format(sonuc, {point:'.'}));
			
			/*sayiUret(2);
				console.log(pay+"/"+payda);
			sayiUret(3);
				console.log(pay+"/"+payda);*/
			
			girdiler=new Array();
			
			
			
				// Ana Div
		$(Interaction.container).append("<div id='soruTekliInput'>");
			$("#soruTekliInput").css("width","180px")
			.css("height","50px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("left","30px")
			.css("top","80px")
			.css("font-size","20px")
			.css("float","left");
			//.css("border","solid 1px black");
			
		$("#soruTekliInput",Interaction.container).append("<div id='kesir'>");
		$("#kesir")
			.css("width", "90px")
			.css("height", "45px")
			.css("float","left")
			.css("position","relative")
			/*.css("position","absolute")
			.css("left", "0px")
			.css("top", "0px")
			.css("padding", 0)
			.css("border", "2px solid");*/
		
		$("#kesir",container).append("<div id='kesirPay'>");
		$("#kesirPay").css("text-align","center");
		$("#kesirPay").html(format(pay, {places:3})).css("line-height","24px");
		
		$("#kesir",container).append("<div id='kesirIsareti'>");
		$('#kesirIsareti').css("position","absolute")
				.css("left", "px")
				.css("top", "22px")
				.css("width", "90px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
			
		$("#kesir",container).append("<div id='kesirPayda'>");
		$("#kesir #kesirPayda",container).append(payda);
		$("#kesirPayda").css("text-align","center");
		
		$("#soruTekliInput",Interaction.container).append("<div id='esittir'>");

		$("#esittir")
			.css("height", "45px")
			.css("width","20px")
			.css("float","left")
			.css("line-height","45px")
			.css("text-align","center")
			.html("=");
		
		
		$("#soruTekliInput",Interaction.container).append("<div id='input'>");

		$("#input")
			.css("height", "45px")
			.css("width","60px")
			.css("float","left")
			.css("line-height","45px")
			.css("text-align","center");
			
			var girdi=Interaction.appendInput({
				width:"80px",
				fontSize:"20px",
				});
			$(Interaction.inputs[0]).attr('maxlength', '7')
		$("#soruTekliInput #input",Interaction.container).append(girdi);
		
			
			// cok inputlu
		$(Interaction.container).append("<div id='SoruCokluInput'>");
			$("#SoruCokluInput").css("width","261px")
			.css("height","180px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			.css("right","30px")
//			.css("right","0")
			.css("top","10px")
			.css("font-size","20px")
			.css("border","solid 1px "+tabloStrokeRenk);
			
			
			
			// Tam Kısım
	$("#SoruCokluInput",container).append("<div id=tamKisim>");
		$("#tamKisim").css("width","120px");
		$("#tamKisim").css("height","30px");
		$("#tamKisim").css("position","absolute");
		$("#tamKisim").css("top","0px");
		$("#tamKisim").css("left","0px");
		$("#tamKisim").css("margin","auto")
			.css("border-right","solid 1px "+tabloStrokeRenk)
			.css("background-color",tabloMilyonlarFillRenk)
		$("#tamKisim").css("font-size","small");
		$("#tamKisim").css("font-weight","bold");
		
	$("#tamKisim", container).append("<div class='yaziBolukler'>");
	$("#tamKisim .yaziBolukler").html("Tam Kısmı");
		
		// Kesir kısım
		$("#SoruCokluInput",container).append("<div id=kesirKisim>");
		$("#kesirKisim").css("width","120px");
		$("#kesirKisim").css("height","30px");
		$("#kesirKisim").css("position","absolute");
		$("#kesirKisim").css("top","0px");
		$("#kesirKisim").css("left","140px");
		//$("#milyonlarYuz").css("right","0");
		$("#kesirKisim").css("margin","auto")
			.css("border-left","solid 1px "+tabloStrokeRenk)
			.css("background-color",tabloBinlerFillRenk)
		$("#kesirKisim").css("font-size","small");
		$("#kesirKisim").css("font-weight","bold");
		
	$("#kesirKisim", container).append("<div class='yaziBolukler'>");
		$("#kesirKisim .yaziBolukler").html("Kesir Kısmı");	
		
		// basamaklar baslık
	$("#tamKisim",container).append("<div id='basamaklarBaslik' >");
	
		$("#basamaklarBaslik").css("width","31px")
			.css("height","108px")
			.css("position","absolute")
			.css("top","30px")
			.css("left","-32px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("background-color", tabloMilyonlarFillRenk)
			.css("border-right","none").css("border-left","none")
			.css("font-size","small").css("font-weight","bold");
		
		$("#basamaklarBaslik",container).append("<div class='yatayBaslik'>");
		$("#basamaklarBaslik .yatayBaslik").html("Basamaklar")
			.css("-webkit-transform","rotate(-90deg)")
			.css("transform","rotate(-90deg)")
			.css("-ms-transform","rotate(-90deg)")
			.css("-moz-transform","rotate(-90deg)")
			.css("-o-transform","rotate(-90deg)")
			.css("text-align","left")
			.css("position","absolute")
			.css("height","30px")
			.css("width","150px")
			.css("bottom","70px")
			.css("left","-53px")
			.css("font-size","small");
		
			// 
	$("#SoruCokluInput",container).append("<div id='yuzler' >");
	
		$("#yuzler").css("width","40px");
		$("#yuzler").css("height","150px");
		$("#yuzler").css("position","absolute");
		$("#yuzler").css("top","30px");
		$("#yuzler").css("left","0px");
		//$("#milyonlarYuz").css("right","0");
		$("#yuzler").css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", tabloMilyonlarFillRenk)
		$("#yuzler").css("border-left","none").css("border-bottom","none");
		$("#yuzler").css("font-size","medium");
		
		$("#yuzler",container).append("<div class='yatay'>");
		$("#yuzler .yatay").html("Yüzler");
		
		$("#SoruCokluInput #yuzler",container).append("<div id='girdiYuzler' >");
		$("#girdiYuzler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
			
		$("#girdiYuzler",container).append("<input id='inputYuzler' type='text' maxlength=1  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
		$("#inputYuzler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		// onlar
	$("#SoruCokluInput",container).append("<div id='onlar' >");
		$("#onlar").css("width","40px");
		$("#onlar").css("height","150px");
		$("#onlar").css("position","absolute");
		$("#onlar").css("top","30px");
		$("#onlar").css("left","40px");
		//$("#milyonlarYuz").css("right","0");
		$("#onlar").css("margin","auto")
		.css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloMilyonlarFillRenk);
		$("#onlar").css("border-bottom","none");
		$("#onlar").css("font-size","medium");
		
		$("#onlar",container).append("<div class='yatay'>");
		$("#onlar .yatay").html("Onlar");
		
		
	$("#SoruCokluInput #onlar",container).append("<div id='girdiOnlar' >");
		$("#girdiOnlar").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	
	$("#girdiOnlar",container).append("<input id='inputOnlar' type='text' maxlength=1  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
		$("#inputOnlar")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
	
	
		// birler
	$("#SoruCokluInput",container).append("<div id='birler' >");
		$("#birler").css("width","40px");
		$("#birler").css("height","150px");
		$("#birler").css("position","absolute");
		$("#birler").css("top","30px");
		$("#birler").css("left","80px");
		//$("#milyonlarYuz").css("right","0");
		$("#birler").css("margin","auto");
		$("#birler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloMilyonlarFillRenk);
		$("#birler").css("border-bottom","none");
		$("#birler").css("font-size","medium");
		
		$("#birler",container).append("<div class='yatay'>");
		$("#birler .yatay").html("Birler");
		
		$("#SoruCokluInput #birler",container).append("<div id='girdiBirler' >");
		$("#girdiBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	
	$("#girdiBirler",container).append("<input id='inputBirler' type='text' maxlength=1  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
		$("#inputBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		// Virgül
		
		$("#SoruCokluInput",container).append("<div id='virgul' >");
		$("#virgul").css("width","20px")
			.css("height","150px")
			.css("position","absolute")
			.css("top","30px")
			.css("left","120px")
			.css("margin","auto")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("background-color", "white")
			.css("border-top","none")
			.css("font-size","medium")
			.css("text-align","center")
			.css("font-size","40px")
			.css("line-height","245px")
			.html(",");

		
		// Kesir kısmı yatayşarı
		
		// Onda birler
	$("#SoruCokluInput",container).append("<div id='ondaBirler' >");
		$("#ondaBirler").css("width","40px");
		$("#ondaBirler").css("height","150px");
		$("#ondaBirler").css("position","absolute");
		$("#ondaBirler").css("top","30px");
		$("#ondaBirler").css("left","140px");
		//$("#milyonlarYuz").css("right","0");
		$("#ondaBirler").css("margin","auto");
		$("#ondaBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#ondaBirler").css("border-bottom","none");
		$("#ondaBirler").css("font-size","medium");

		$("#ondaBirler",container).append("<div class='yatay'>");
		$("#ondaBirler .yatay").html("Onda Birler");
		
		$("#SoruCokluInput #ondaBirler",container).append("<div id='girdiOndaBirler' >");
		$("#girdiOndaBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			//.css("border-bottom", "none")
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	
	$("#girdiOndaBirler",container).append("<input id='inputOndaBirler' type='text' maxlength=1  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
		$("#inputOndaBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
		
	
		
		// Yüzde birler
	$("#SoruCokluInput",container).append("<div id='yuzdeBirler' >");
		$("#yuzdeBirler").css("width","40px");
		$("#yuzdeBirler").css("height","150px");
		$("#yuzdeBirler").css("position","absolute");
		$("#yuzdeBirler").css("top","30px");
		$("#yuzdeBirler").css("left","180px");
		//$("#milyonlarYuz").css("right","0");
		$("#yuzdeBirler").css("margin","auto");
		$("#yuzdeBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#yuzdeBirler").css("border-bottom","none");
		$("#yuzdeBirler").css("font-size","medium");
		
		$("#yuzdeBirler",container).append("<div class='yatay'>");
		$("#yuzdeBirler .yatay").html("Yüzde Birler");
		
		$("#SoruCokluInput #yuzdeBirler",container).append("<div id='girdiYuzdeBirler' >");
		$("#girdiYuzdeBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	
	$("#girdiYuzdeBirler",container).append("<input id='inputYuzdeBirler' type='text' maxlength=1  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
		$("#inputYuzdeBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
		
		
		// Binde Birler
	$("#SoruCokluInput",container).append("<div id='bindeBirler' >");
		$("#bindeBirler").css("width","40px");
		$("#bindeBirler").css("height","150px");
		$("#bindeBirler").css("position","absolute");
		$("#bindeBirler").css("top","30px");
		$("#bindeBirler").css("left","220px");
		//$("#milyonlarYuz").css("right","0");
		$("#bindeBirler").css("margin","auto");
		$("#bindeBirler").css("border","solid 1px "+tabloStrokeRenk)
		.css("background-color", tabloBinlerFillRenk);
		$("#bindeBirler").css("border-bottom","none");
		$("#bindeBirler").css("font-size","medium");
		
		$("#bindeBirler",container).append("<div class='yatay'>");
		$("#bindeBirler .yatay").html("Binde Birler");
		
		
		$("#SoruCokluInput #bindeBirler",container).append("<div id='girdiBindeBirler' >");
		$("#girdiBindeBirler").css("width","40px")
			.css("height","40px")
			.css("border","solid 1px "+tabloStrokeRenk)
			
			.css("position","absolute")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto")
			.css("border-left","none");
			//.css("font-size","medium").html("ok");
	
	$("#girdiBindeBirler",container).append("<input id='inputBindeBirler' type='text' maxlength=1  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
		$("#inputBindeBirler")
			.css("position","absolute")
			.css("bottom","0")
			.css("left","0")
			.css("right","0")
			.css("top","0")
			.css("margin","auto")
			.css("height","30px")
			.css("width","30px");
			
		
		$(".yaziBolukler").css("text-align","center");
		$(".yaziBolukler").css("position","absolute");
		$(".yaziBolukler").css("width","120px");
		$(".yaziBolukler").css("height","14px");
		//$(".yazi").css("height","210px");
		$(".yaziBolukler").css("top","0");
		$(".yaziBolukler").css("bottom","0");
		$(".yaziBolukler").css("left","0");
		$(".yaziBolukler").css("right","0");
		$(".yaziBolukler").css("margin","auto");	
		
		$("input")
		.css("text-align","center")
		.css("border-color",inputStrokeRenk)
		.addClass("input");
			
		$(".yatay").css("-webkit-transform","rotate(-90deg)");
		$(".yatay").css("transform","rotate(-90deg)");
		$(".yatay").css("-ms-transform","rotate(-90deg)");
		$(".yatay").css("-moz-transform","rotate(-90deg)");
		$(".yatay").css("-o-transform","rotate(-90deg)");
		
		
		//$("#yuzler .yazi").css("-writing-mode","tb-rl");
		//-webkit-transform:rotate(-90deg);
		$(".yatay").css("text-align","left");
		$(".yatay").css("position","absolute");
		$(".yatay").css("height","30px");
		$(".yatay").css("width","150px");
		$(".yatay").css("bottom","110px");
		$(".yatay").css("left","-50px");
		//$("#yatay").css("right","200px");
		//$("#yatay").css("margin","auto");
		$(".yatay").css("font-size","small");
			
			Interaction.appendButton({bottom:"40px", right:"40px"});
			Interaction.appendStatus({bottom:"50px", right:"200px"});
			
			
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
		
		sayiUret(2);
		$("#kesirPay").html(format(pay, {point:","}));
		$("#kesirPayda").html(payda);
		
		
	
		},
	isAnswerCorrect : function(values){
		Interaction.sonuc=pay/payda;
		console.log("sonuc "+sonuc);
		console.log("format "+format(Interaction.sonuc, {group:"", places:3}));
		console.log("girdi "+values);
		if(parseInt(format(Interaction.sonuc, {group:"", places:3}))==parseInt(values))
			return true
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		
		},
	onFail : function(){
		var sonucStr=Interaction.sonuc.toString().replace(".",",");
		Interaction.setStatus('Yanlış cevap, doğrusu '+sonucStr+' şeklinde olacaktı.');
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