/**
 * Doğal sayılarla çarpma işlemi
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 17.07.2012
 * 
 * 
 */


var yanlisRengi="#d42b19";
var dogruRengi="green";
var kalanRengi="#255b63";
var Animation = function(){};Animation();

var Interaction = function(){};Interaction();

Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){
	


};


Interaction.init = function(container){
	Main.setObjective("Yandaki çarpma işlemini yapınız ve kontrol ediniz.");
	
	// Ana Div
	$(container).append("<div id='soru'>");
		$("#soru").css("width","120px")
		.css("height","130px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		.css("left","0")
		.css("right","0")
		.css("top","10px")
		.css("font-size","20px");
		//.css("border","solid 1px black");
	
	// Geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'></div>");
	$("#geriBildirim").css("position","absolute")
		.css("top","170px")
		.css("right","0")
		.css("left","0")
		.css("margin","auto");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button' id='btnKontrol'></button>");
	$(container).append("<style>.control_button{position:absolute; top:250px; right:50px; }</style>");
	
	//sonraki divi
	$(container).append("<button id='sonraki' class='next_button'>");
	$("#sonraki")
		.css("position","absolute")
		.css("right","50px")
		.css("margin","auto")
		.css("top","250px")
		.css("text-align","center")
		.hide();
	$("#girdi1, #girdi2, #girdi3").keyup(
		function(){
			$("#geriBildirim").hide();
		}
	);
	
	
	
	// Normal Çarpma
	function carpma(){
		
		carpan1="";
		carpan2="";
		var rastgeleSayi=(Math.floor(Math.random()*10)+1);
		var sayiSiniri=rastgeleSayi%2?100:10;
		console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
		var carpan1=Math.floor(Math.random()*100+100);
		console.log(carpan1);
		var carpan2=Math.floor(Math.random()*100+sayiSiniri);
		console.log(carpan2);
		var toplam=carpan1*carpan2;
		
		
		
			
	$("#soru",container).append("<div id='carpan1' class='carpan'>");
		$("#carpan1")
		.css("top","10px").html(format(carpan1, {point:'.'}));
		
	$("#soru",container).append("<div id='carpan2' class='carpan'>");
		$("#carpan2")
		.css("top","50px").html(format(carpan2, {point:'.'}));
		
	$("#soru",container).append("<div id='carpmaIsareti'>");
	$("#carpmaIsareti").css("width","100px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","60px")
		.html("x");
		
		
		
	for(var i=0; i<3;i++){
		var top=(100+35*i)+"px";
		var right=(i*16)+"px";
		var id="girdi"+(i+1);
	$("#soru",container).append("<input id='"+id+"' type='text' maxlength=5  onkeypress='return SadeceRakam(event)'/>");	
	$("#"+id).css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right",right)
		.css("font-size","30px")
		.css("top",top)
		.css("z-index","5");
	}
		
	$("#soru",container).append("<div id='toplamaIsareti'>");
	$("#toplamaIsareti").css("width","120px")
		.css("text-align","left")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","32px")
		.css("font-size","30px")
		.css("border-bottom","solid 2px black")
		.css("top","175px")
		.html("+");
	
	$("#soru",container).append("<div id='toplam' class='carpan'>");
				$("#toplam")
				.attr("style","top:210px; right:32px !important")
				.html(format(toplam, {point:'.'}));
				
	$("input").addClass("input").addClass("number_input_field");
	
	$(".carpan").css("width","100px")
		.css("text-align","right")
		.css("height","30px")
		.css("margin","auto")
		.css("position","absolute")
		//.css("bottom","20px")
		//.css("left","0")
		.css("right","0px")
		.css("font-size","30px");
		//.css("border","solid 1px black");
	$("#girdi1").keydown(function(event){
					var pos;
					if(event.keyCode == 8)
						pos = 1;
					else
						pos = 0; 
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(pos);
						textRange.moveStart(pos);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(pos,pos);
						return true;
					}
				});
	
	$("#girdi1").keyup(
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
	

carpma();

		
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