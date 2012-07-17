/**
 * Doğal sayılarla toplama işlemi
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 17.07.2012
 * 
 * 
 */

var semaRengi=["green","yellow","blue","black"];

var dropableShapeHoverStyle = {fillColor:'#afa'};
var dropableShapeDefaultStyle = {fillColor:'#fff'}

var Animation = function(){};Animation();

var Interaction = function(){};Interaction();

Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){


};


Interaction.init = function(container){
	Main.setObjective("Yandaki toplama işlemini yapınız ve kontrol ediniz.");
	
	var soruSirasi=0;
	
	// eldesiz toplama için
	var nihaiToplanan1="";
	var nihaiToplanan2="";
	
	// eldeli toplama için
	var eldeliToplanan1="";
	var eldeliToplanan2="";		
	
	//Eldesiz
	function eldesizToplama(){
		nihaiToplanan1="";
		nihaiToplanan2="";	
		
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?10000:1000;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		var toplanan1=Math.floor(Math.random()*10000+sayiSiniri);
		console.log(toplanan1);
		var toplanan2=Math.floor(Math.random()*10000+sayiSiniri);
		console.log(toplanan2);
		var basamakSayisi=rastgeleSayi%2?5:4;
		console.log("basamak saysı: "+basamakSayisi);
		
		var strToplanan1=new String(toplanan1);
		var strToplanan2=new String(toplanan2);
		
		var basamakDegeri1=Array();
		var basamakDegeri2=Array();
		
		
		for (var i=4; i>=0;i--){
			var yeniBasamak1, yeniBasamak2;
			if((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i)))>=10){

				console.log("eldesiz değil");
				console.log((strToplanan1.charAt(i)+", "+strToplanan2.charAt(i)));
				console.log((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i))));
				var cikarilacak=((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i))))-9;
				console.log("cıakrilaca: "+cikarilacak);
				if((parseInt(strToplanan1.charAt(i))<(parseInt(strToplanan2.charAt(i))))){
					yeniBasamak1=((parseInt(strToplanan2.charAt(i))-cikarilacak));
					yeniBasamak2=parseInt(strToplanan1.charAt(i));
				}
				else{
					yeniBasamak1=((parseInt(strToplanan1.charAt(i))-cikarilacak));
					yeniBasamak2=parseInt(strToplanan2.charAt(i));
				}
			}
			else{
				yeniBasamak1=parseInt(strToplanan1.charAt(i));
				yeniBasamak2=parseInt(strToplanan2.charAt(i));	
			}
			
			basamakDegeri1[i]=yeniBasamak1;
			basamakDegeri2[i]=yeniBasamak2;
			
		}
		console.log(basamakDegeri1);
		console.log(basamakDegeri2);
				
		/*for(var i=4; i>=0;i--){
			console.log((strToplanan1.charAt(i)+", "+strToplanan2.charAt(i)));
			console.log((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i))));
		}*/
		for(var i=0; i<basamakSayisi;i++){
			nihaiToplanan1+=basamakDegeri1[i];
			nihaiToplanan2+=basamakDegeri2[i];
		}

		console.log(nihaiToplanan1);
		console.log(nihaiToplanan2);
			
	$("#soru",container).append("<div id='toplanan1' class='toplanan'>");
		$("#toplanan1")
		.css("top","10px").html(format(nihaiToplanan1, {point:'.'}));
		
	$("#soru",container).append("<div id='toplanan2' class='toplanan'>");
		$("#toplanan2")
		.css("top","50px").html(format(nihaiToplanan2, {point:'.'}));
		
	$("#soru",container).append("<div id='toplamaIsareti'>");
	$("#toplamaIsareti").css("width","120px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("+");
	$(".toplanan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
		
	$("#soru",container).append("<input id='girdi' type='text' maxlength=6  onkeypress='return SadeceRakam(event)'/>");	
	$("#girdi").css("width","120px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px")
		//.css("border-bottom","solid 2px black")
		.css("top","100px")
		.html("+");
	$("input").addClass("input").addClass("number_input_field");
	
	$("#girdi").keyup(
		function(){
			var icerik=$(this).val();
			var index = icerik.indexOf(" ", 0);
			while (index != -1) {
    			icerik = icerik.replace(" ", "");
    			index = icerik.indexOf(" ", 0);
			}
			$(this).val(format(icerik, {point:'.'}));
			console.log($(this).val());
		}
	);
	
	}
	
	
	// Eldeli
	function eldeliToplama(){
		eldeliToplanan1="";
		eldeliToplanan2="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?10000:1000;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		var toplanan1=Math.floor(Math.random()*10000+sayiSiniri);
		console.log(toplanan1);
		var toplanan2=Math.floor(Math.random()*10000+sayiSiniri);
		
		eldeliToplanan1=toplanan1;
		eldeliToplanan2=toplanan2;
			
	$("#soru",container).append("<div id='toplanan1' class='toplanan'>");
		$("#toplanan1")
		.css("top","10px").html(format(eldeliToplanan1, {point:'.'}));
		
	$("#soru",container).append("<div id='toplanan2' class='toplanan'>");
		$("#toplanan2")
		.css("top","50px").html(format(eldeliToplanan2, {point:'.'}));
		
	$("#soru",container).append("<div id='toplamaIsareti'>");
	$("#toplamaIsareti").css("width","120px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("+");
	$(".toplanan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
		
	$("#soru",container).append("<input id='girdi' type='text' maxlength=6  onkeypress='return SadeceRakam(event)'/>");	
	$("#girdi").css("width","120px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px")
		//.css("border-bottom","solid 2px black")
		.css("top","100px")
		.html("+");
	$("input").addClass("input").addClass("number_input_field");
	
	$("#girdi").keyup(
		function(){
			var icerik=$(this).val();
			var index = icerik.indexOf(" ", 0);
			while (index != -1) {
    			icerik = icerik.replace(" ", "");
    			index = icerik.indexOf(" ", 0);
			}
			$(this).val(format(icerik, {point:'.'}));
			console.log($(this).val());
		}
	);
	
	}
	
	// Soru toplananlar
	function soruToplananlar(){
		eldeliToplanan1="";
		eldeliToplanan2="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?10000:1000;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		var toplanan1=Math.floor(Math.random()*10000+sayiSiniri);
		console.log(toplanan1);
		var toplanan2=Math.floor(Math.random()*10000+sayiSiniri);
		
		eldeliToplanan1=toplanan1;
		eldeliToplanan2=toplanan2;
			
	$("#soru",container).append("<div id='toplanan1' class='toplanan'>");
		$("#toplanan1")
		.css("top","10px").html(format(eldeliToplanan1, {point:'.'}));
		
	$("#soru",container).append("<div id='toplanan2' class='toplanan'>");
		$("#toplanan2")
		.css("top","50px").html(format(eldeliToplanan2, {point:'.'}));
		
	$("#soru",container).append("<div id='toplamaIsareti'>");
	$("#toplamaIsareti").css("width","120px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("+");
	$(".toplanan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
		
	$("#soru",container).append("<input id='girdi' type='text' maxlength=6  onkeypress='return SadeceRakam(event)'/>");	
	$("#girdi").css("width","120px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","120px")
		.css("font-size","30px")
		//.css("border-bottom","solid 2px black")
		.css("top","100px")
		.html("+");
	$("input").addClass("input").addClass("number_input_field");
	
	$("#girdi").keyup(
		function(){
			var icerik=$(this).val();
			var index = icerik.indexOf(" ", 0);
			while (index != -1) {
    			icerik = icerik.replace(" ", "");
    			index = icerik.indexOf(" ", 0);
			}
			$(this).val(format(icerik, {point:'.'}));
			console.log($(this).val());
		}
	);
	
	}
	
	
	$(container).append("<div id='soru'>");
		$("#soru").css("width","360px")
		.css("height","200px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		.css("left","0")
		.css("right","0")
		.css("top","10px")
		.css("font-size","20px")
		.css("border","solid 1px black");
	
	// Geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'></div>");
	$("#geriBildirim").css("position","absolute")
		.css("top","170px")
		.css("right","0")
		.css("left","0")
		.css("margin","auto");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button' id='btnKontrol'>Kontrol</button>");
	$(container).append("<style>.control_button{position:absolute; top:250px; right:50px; }</style>");
	
	//sonraki divi
	$(container).append("<div id='sonraki' class='next_button'>");
	$("#sonraki").html("Sonraki")
		.css("position","absolute")
		.css("height","15px")
		.css("width","80px")
		.css("right","50px")
		//.css("left","0")
		.css("margin","auto")
		.css("top","250px")
		.css("text-align","center")
		.hide();
	$("#btnKontrol").click(
		function(){
			kontrol();
				
		}
	);
	$("#sonraki").click(
		function(){
			soruSirasi++;
			$("#soru").html("");
			$("#geriBildirimText").html("");
			$("#sonraki").hide();
			$("#btnKontrol").show();
			soruGetir();
			
				
		}
	);
	
	function soruGetir(){
		switch(soruSirasi){
			case 0:
			case 1:
				eldesizToplama();
				break;
			case 2:
			case 3:
			case 4:
				eldeliToplama();
				break;
		}
	}
	
	soruGetir();
	function kontrol(){
		switch (soruSirasi){
			case 0:
			case 1:
				var icerik=$("#girdi").val();
				var index = icerik.indexOf(" ", 0);
				while (index != -1) {
					icerik = icerik.replace(" ", "");
					index = icerik.indexOf(" ", 0);
				}
				console.log("girdim eldesiz");
				var toplam=parseInt(nihaiToplanan1)+parseInt(nihaiToplanan2);
				console.log(toplam);
				console.log(icerik);
				if(icerik==toplam){
					$("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
					$("#btnKontrol").hide();
					$("#sonraki").show();
				}
				else{
					$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
					$("#geriBildirim").show();
				}
				break;
			case 2:
			case 3:
			case 4:	
				var icerik=$("#girdi").val();
				var index = icerik.indexOf(" ", 0);
				while (index != -1) {
					icerik = icerik.replace(" ", "");
					index = icerik.indexOf(" ", 0);
				}
				console.log("girdim eldeli");
				var toplam=eldeliToplanan1+eldeliToplanan2;
				console.log(toplam);
				console.log(icerik);
				if(icerik==toplam){
					$("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
					$("#btnKontrol").hide();
					$("#sonraki").show();
				}
				else{
					$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
					$("#geriBildirim").show();
				}
				break;
		}
		
		
	}
		
		
};

	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

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