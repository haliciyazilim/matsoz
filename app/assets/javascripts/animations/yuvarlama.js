/**
 * Yuvarlama
 * kaynak: mat-5-yuvarlama.pdf
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 09.07.2012
 * 
 * 
 */

var dogruCevapGosterimRengi="green";
var kareIlkStrokeColor="black";
var kareIlkFillColor="white";
var kareBoyaliStrokeColor="black";
var kareBoyaliFillColor="red";
var divSonrakiYaziRenk="white";
var divSonrakiFillRenk="#4682b4";

var Animation = function(){};Animation();

var Interaction = function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}




Interaction.init = function(container){
	Main.setObjective("Aşağıdaki saylar için istenilen yuvarlamayı yaparak klavyeden sayıyı yazınız ve kontrol ediniz.");
	
	
	
	$(container).append("<div id='cerceve'>");
		$("#cerceve").css("width","490px");
		$("#cerceve").css("height","60px");
		$("#cerceve").css("position","absolute");
		$("#cerceve").css("top","0");
		$("#cerceve").css("bottom","0");
		$("#cerceve").css("left","0");
		$("#cerceve").css("right","0");
		$("#cerceve").css("margin","auto");
		$("#cerceve").css("border","solid 1px black");
		$("#cerceve").css("font-size","medium");
		$("#cerceve").css("font-weight","bold");
	

	function rastgeleSayi(){
		var sayi=Math.floor((Math.random()*9000)+1000);
		return sayi;
	}
	
	var sayi=rastgeleSayi();
	console.log("Sayi: "+sayi);
	
	
	
	
/*
$("#inputYuzMilyonlar, #inputOnMilyonlar, #inputMilyonlar, #inputYuzBinler, #inputOnBinler, #inputBinler, #inputYuzler, #inputOnlar, #inputBirler").keyup(function(event) {
		if(event.keyCode == 13) {
			console.log("Key"+event.keyCode);
			kontrol();
		}
	});
	
	*/
	
	};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	
	

