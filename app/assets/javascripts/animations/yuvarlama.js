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


Animation.init=function(container){
	$(container).append("<div id='ornekSayilar'>");
		$('#ornekSayilar').css("position","absolute")
					.css("left", "150px")
					.css("top", "0")
					.css("bottom", "0")
					.css("width", "40px")
					.css("height", "180px")
					.css("margin", "auto")
					//.css("border", "1px solid")
					//.css("box-sizing","border-box")
					.css("font-size","15px");
	
	$(container).append("<div id='aciklamaYukari'>");
		$('#aciklamaYukari').css("position","absolute")
					.css("left", "10px")
					.css("top", "10px")
					//.css("bottom", "0")
					.css("width", "100px")
					.css("height", "90px")
					.css("margin", "auto")
					//.css("border", "1px solid black")
					//.css("box-sizing","border-box")
					.css("font-size","15px").html("Basamaktaki sayı 5 ya da 5'ten büyük ise yukarıya yuvarlanır");
	
	$(container).append("<div id='aciklamaAsagi'>");
		$('#aciklamaAsagi').css("position","absolute")
					.css("left", "200px")
					//.css("top", "10px")
					.css("bottom", "10px")
					.css("width", "100px")
					.css("height", "80px")
					.css("margin", "auto")
					//.css("border", "1px solid black")
					//.css("box-sizing","border-box")
					.css("font-size","15px").html("Basamaktaki sayı  5'ten küçük ise aşağıya yuvarlanır.");
	
	
	for(var i=9;i>=0;i--){
		id="sayi_"+i;
		$("#ornekSayilar",container).append("<div class='ornekSayi' id='"+id+"'>");
		$("#"+id).html(i).hide().css("padding-bottom","3px");
	}
	
	for(i=10;i>=0;i--){
		deger="#sayi_"+(i-1);
		$(deger).delay(4500-(i*500)).fadeIn(400);
	}
	
	
};


Interaction.init = function(container){
	Main.setObjective("Yandaki saylar için istenilen yuvarlamayı yaparak klavyeden sayıyı yazınız ve kontrol ediniz.");
	
	
	
	$(container).append("<div id='cerceve'>");
		$("#cerceve").css("width","370px")
		.css("height","45px")
		.css("position","absolute")
		.css("top","50px")
		//.css("bottom","0")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px");
		//.css("font-weight","bold");
		
	$(container).append("<div id='cerceveCevap'>");
		$("#cerceveCevap").css("width","340px")
		.css("height","45px")
		.css("position","absolute")
		.css("top","180px")
		//.css("bottom","0")
		.css("left","0")
		.css("right","0")
		.css("margin","auto")
		//.css("border","solid 1px black")
		.css("font-size","16px").hide();
		//.css("font-weight","bold");
	
	var yuvarlak, yuvarlakOn, yuvarlakYuz, yazi,sayi;
	var sira=0;
	function rastgeleSayi(){
		sira++;
		var sayi=Math.floor((Math.random()*9000)+1000);
		
		
		yuvarlakOn=Math.round(sayi/10)*10;
		yuvarlakYuz=Math.round(sayi/100)*100;
	
		yuvarlak=sira%2==0?yuvarlakOn:yuvarlakYuz;
		yazi=sira%2==0?"onluğa":"yüzlüğe";
		console.log("sira"+sira+"yuvarlak: "+yuvarlak);
		console.log("en yakın onluk: "+yuvarlakOn);
		console.log("en yakın yüzlük: "+yuvarlakYuz);
		
		
		return sayi;
	}
	
	sayi=rastgeleSayi();
	
	
	$("#cerceve").html(sayi+" en yakın "+yazi +" yuvarlanırsa <input type='text' id='girdi' maxlength=4  onkeypress='return SadeceRakam(event)'> olur.");
	$("#cerceveCevap").html(sayi+" en yakın "+yazi +" yuvarlanırsa <strong id='dogruCevap'>"+yuvarlak+"</strong> olur.");
	$("#dogruCevap").css("color",dogruCevapGosterimRengi);

	
	$("input").live("yeniSoru",function(){
		$(this).css("width","60px")
			.css("height","40px")
			.css("border","solid 1px black")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto").addClass("input").addClass("number_input_field");
		$(this).keyup(
			function(event){
				
				girdi=$("#girdi").val();
				if(event.keyCode == 13) {
					console.log("Key"+event.keyCode);
					kontrol();
				}
				
				
				console.log("girdi: "+girdi);
			}
	);
	
	});

	console.log("Sayi: "+sayi);
	
	
	
	
	$("#girdi").css("width","60px")
			.css("height","40px")
			.css("border","solid 1px black")
			.css("bottom","0px")
			.css("left","0px")
			.css("margin","auto").addClass("input").addClass("number_input_field");
			
	
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'>");
	$(container).append("<style>#geriBildirim{  position:absolute; right:0; left:0; bottom:120px;height:50px; width:200px !important; margin:auto}</style>");
	
	
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
	
	$("#btnKontrol").click(
		function(){
			
			kontrol();
			
		}
	);
	
	$("#sonraki").click(
		function(){
			sayi=rastgeleSayi();
			$("#cerceve").html(sayi+" en yakın "+yazi +" yuvarlanırsa <input type='text' id='girdi' maxlength=4  onkeypress='return SadeceRakam(event)'> olur.");
			$("input").trigger("yeniSoru");
			$("#dogruCevap").html(yuvarlak);
			$("#cerceveCevap").hide();
			$("#sonraki").hide();
			$("#geriBildirimText").html("");
			$("#btnKontrol").show();
			tiklama=0;
		}
	);
	
	var girdi;
	$("#girdi").keyup(
		function(event){
			$("#geriBildirimText").html("");
			girdi=$("#girdi").val();
			if(event.keyCode == 13) {
				console.log("Key"+event.keyCode);
				kontrol();
			}
			
			
			console.log("girdi: "+girdi);
		}
	);
	var tiklama=0;
	function kontrol(){
		tiklama++;
		console.log("kontrole girdim."+girdi+" "+yuvarlak);
		if ($("#girdi").val()==""){
			console.log("if girdi boşsa girdim."+girdi+" "+yuvarlak);
			//alert();
			$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurunuz.");
			//alert();
			$("input").keydown(
				function(){
					$("#geriBildirimText").html("");
				}
			);
		
		}
		else if(girdi==yuvarlak){
		console.log("if doğruysa girdim."+girdi+" "+yuvarlak);
			$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
			$("#btnKontrol").hide();
			$("#sonraki").show();
		}
		else if(tiklama<2 && girdi!=yuvarlak){
			$("#geriBildirimText").attr("class","status_false").html("Tekrar deneyin");
		}
		
		else if(tiklama>2 ||girdi!=yuvarlak){
		console.log("if doğruysa girdim."+girdi+" "+yuvarlak);
			$("#geriBildirimText").attr("class","status_false").html("Yanlış. Doğru Cevap:");
			$("#cerceveCevap").show();
			$("#btnKontrol").hide();
			$("#sonraki").show();
		}
	}


	
	
};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	
