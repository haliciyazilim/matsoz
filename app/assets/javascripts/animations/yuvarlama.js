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
	Main.setObjective("Yandaki saylar için istenilen yuvarlamayı yaparak klavyeden sayıyı yazınız ve kontrol ediniz.");
	
	
	
	$(container).append("<div id='cerceve'>");
		$("#cerceve").css("width","490px")
		.css("height","60px")
		.css("position","absolute")
		.css("top","0")
		.css("bottom","0")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","medium");
		//.css("font-weight","bold");
		
	

	function rastgeleSayi(){
		var sayi=Math.floor((Math.random()*9000)+1000);
		return sayi;
	}
	
	var sayi=rastgeleSayi();
	
	$("#cerceve").html(sayi+" en yakın onluğa yuvarlanırsa <input type='text' id='girdi' maxlength=4  onkeypress='return SadeceRakam(event)'> olur.");
	console.log("Sayi: "+sayi);
	
	
	$("#girdi").css("width","60px")
			.css("height","40px")
			.css("border","solid 1px black")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto").addClass("input").addClass("number_input_field");
	
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'>");
	$(container).append("<style>#geriBildirim{  position:absolute; top:150px; right:10px; width:100px !important;}</style>");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button'id='btnKontrol'>Kontrol</button>");
	$(container).append("<style>.control_button{position:absolute; top:230px; right:25px;  }</style>");
	
	// sonraki divi
	$(container).append("<div id='sonraki'>");
	$("#sonraki", container).append("<div id='dikdortgen'>");
	$("#dikdortgen", container).append("<div id='yazi'>Sonraki</div>");
	$("#sonraki", container).append("<div id='ucgen'>");
	$(container).append("<style>#sonraki{position:absolute; top:230px; right:110px; height: 30px;cursor:pointer;color:"+divSonrakiYaziRenk+";</style>");
	$(container).append("<style> #dikdortgen{position:absolute; margin:auto; bottom: 0px; right:0px; top:0px; left:0px; width:70px; height:30px; background:"+divSonrakiFillRenk + "}</style>");
	$(container).append("<style>#ucgen{position:absolute; top:0px; left:70px; width:0, height:0; border-left: 30px solid "+divSonrakiFillRenk+";border-top: 15px solid transparent;border-bottom: 15px solid transparent;}</style>");
	$("#yazi").css("width","50px")
	.css("position","absolute")
	.css("height","13px")
	.css("top","0")
	.css("bottom","0")
	.css("left","0")
	.css("right","0")
	.css("margin","auto");

	
	$("#sonraki").hide();
	
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
	
	

