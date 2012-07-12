/**
 * Şema
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 12.07.2012
 * 
 * 
 */

var semaRengi=["green","yellow","blue","black"];

var Animation = function(){};Animation();

var Interaction = function(){};Interaction();

Interaction.getFramework = function() {
	return 'paper';
}


Animation.init=function(container){


};


Interaction.init = function(container){
	Main.setObjective("Yandaki sözcükleri şemada uygun yerlere fare ile sürükleyerek yerleştirip kontrol ediniz.");
	var sozcuk9=new Array();
		sozcuk9[0]=["Kaplar",3,2,2,2,"Porselen","Metal","Cam","Tava","Bardak","Çaydanlık", "Tabak", "Kâse","Tencere"];
	var sozcuk8=new Array();
		sozcuk8[0]=["Spor",2,3,3,"Takım","Bireysel","Futbol","Voleybol","Basketbol","Güreş","Halter","Yüzme"];
		sozcuk8[1]=["İçecekler",2,3,3,"Sıcak","Soğuk","Çay","Ihlamur","Kahve","Meyve suyu","Ayran","Kola"];
	var sozcuk7=new Array();
		sozcuk7[0]=["Kitaplar",2,3,2,"Edebiyat","Diğer","Roman","Hikâye","Şiir","Ansiklopedi", "Sözlük"];
	// Şema başlığı,alt şema sayısı,her alt elemanın eleman sayisi,alt şema kadar eleman, her alt elemanın elemanları (sırayla)
	
	var sozcuk=sozcuk9[0];
	function semaOlustur(renk,sozcukler,tane){
		var ebat;
		switch (tane){
			case 7:
				ebat=73;
				break;
			case 8:
				ebat=62.5;
				break;		
			case 9:
				ebat=54.44;
				break;		
		}
		
		var altSemaSayisi=sozcukler[1];
		var baslangicIndisi=2+sozcukler[1];
		console.log("s: "+sozcukler[1]+" A: "+ altSemaSayisi+" B: "+baslangicIndisi);
		for(var i=0;i<(tane+baslangicIndisi);i++){
			var sema = new Path.Rectangle(((i*(ebat+10))+10),10,ebat,30); //x,y,width,height
			sema.fillColor=renk;
			var semaIsim= new PointText(((i*(ebat+10))+10+ebat/2),30);
			var soz=i+baslangicIndisi;
			console.log("S: "+soz);
			semaIsim.content=sozcukler[soz];
			semaIsim.paragraphStyle.justification = 'center';
			semaIsim.fontSize=8;
		}
		
		var ortaNokta=(590/2-50+0.5);
	
		var semaBaslikSekil=new Path.Rectangle(ortaNokta,60.5,100,40);
			semaBaslikSekil.strokeColor="black";
			var semaBaslikYazi= new PointText(ortaNokta+50, 85);
			semaBaslikYazi.content=[sozcuk[0]];
			semaBaslikYazi.paragraphStyle.justification = 'center';
		
		var altSemaSayisi=sozcuk[1];
		var altOrtaNokta=(490/altSemaSayisi)/2;
		var sonrakiKoordinatlar=2*altOrtaNokta;
		
		
		for(var i=0;i<altSemaSayisi;i++){
			var altSemaKoordinat=altOrtaNokta+i*sonrakiKoordinatlar;
			console.log("koor"+altSemaKoordinat);
			var altSemaSekil=new Path.Rectangle(altSemaKoordinat,120.5,100,40);
				altSemaSekil.strokeColor="black";
			var semaBaslikYazi= new PointText(altSemaKoordinat+50, 145);
			var icerik=sozcuk[1]+2;
				semaBaslikYazi.content=sozcuk[icerik+i];
				semaBaslikYazi.paragraphStyle.justification = 'center';
				console.log("şema sayısı n: "+altSemaSayisi);
				console.log("baslangic n: "+altOrtaNokta);
			
		
		}
	}

	
	semaOlustur(semaRengi[1],sozcuk,7);
	

	
	
};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

 