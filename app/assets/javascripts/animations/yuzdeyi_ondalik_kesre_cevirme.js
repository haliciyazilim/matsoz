
/*
 Yüzdeyi Ondalık Kesre Çevirme
 Kılavuz: mat-5-yüzdeyi ondalık kesre çevirme.pdf
   
 Halıcı Yazılım
 Abdullah Karacabey
 04.07.2012
 */

var dogruCevapGosterimRengi="green";
var kareIlkStrokeColor="black";
var kareIlkFillColor="white";
var kareBoyaliStrokeColor="black";
var kareBoyaliFillColor="red";
var divSonrakiYaziRenk="white";
var divSonrakiFillRenk="#4682b4";

var Interaction = function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}




Interaction.init = function(container){
	Main.setObjective("Aşağıdaki yüzlük tablonun altındaki kutuya istediğiniz sayıyı yazınız. Oluşan yüzdeyi ondalık kesir olarak kutuya yazınız ve “Kontrol” düğmesine fare ile tıklayınız.");
	//Interaction.container = container;
	
	/*
	var myCircle = new Path.Circle(new Point(100, 70), 50);
	myCircle.fillColor = 'black';
	*/
	
	// 4 ana div var; sol ve orta1 orta2 orta3.
	
	//sol div bilgileri	
	$(container).append("<div id='sol'>");
	$(container).append("<style>#sol{position:absolute; top:150px; left:30px; width:100px; height:100px}</style>");
	
	
	$("#sol",container).append("<input id='giris' type='text' maxlength=3  onkeypress='return SadeceRakam(event)' min='0' max='100'/>");
	$("#sol",container).append("<div id='kesir'>");
	$("#sol #kesir",container).append("_____");
	$("#sol",container).append("<div id='payda'>");
	$("#sol #payda",container).append("100");
	$(container).append("<style>#giris{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; } #kesir{margin:auto;position:absolute; top: 20px; left:0; right:0; width:60px; height:10px;} #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px</style>");
	
	
	// orta divlerin bilgileri
	
	$(container).append("<div id='orta1'>");
	$(container).append("<style>#orta1{position:absolute; top:70px; left:150px; width:100px; height:40px}</style>");
	$(container).append("<div id='orta2'>");
	$(container).append("<style>#orta2{position:absolute; top:50px; left:230px; width:100px; height:100px}</style>");
	$(container).append("<div id='orta3'>");
	$(container).append("<style>#orta3{position:absolute; top:70px; left:330px; width:100px; height:40px}</style>");
	
	// orta1'in içindeki nesnelerin bilgieri
	$("#orta1",container).append("<input id='girdiCevap1' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$("#orta1",container).append("<div id='yuzde'>");
	$("#orta1",container).append("<div id='esit1'>");
	$("#orta1 #yuzde",container).append("%");
	$("#orta1 #esit1",container).append("=");
	$(container).append("<style>#girdiCevap1{width:30px; height:30px; margin:auto;position:absolute; left:0; right:0;}</style>");
	$(container).append("<style>#yuzde{position:absolute; top: 10px; left:10px;  width:20px; height:20px;}</style>"); 
	$(container).append("<style>#esit1{position:absolute; top: 10px; left:75px;  width:20px; height:20px;}</style>");
	
	// orta2'in içindeki nesnelerin bilgieri
	$("#orta2",container).append("<input id='girdiCevap2' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$("#orta2",container).append("<div id='kesir'>");
	$("#orta2 #kesir",container).append("_____");
	$("#orta2",container).append("<div id='payda'>");
	$("#orta2",container).append("<div id='esit2'>");
	$("#orta2 #payda",container).append("100");
	$("#orta2 #esit2",container).append("=");
	$(container).append("<style>#esit2{position:absolute; top: 30px; left:90px;  width:20px; height:20px;}</style>");
	$(container).append("<style>#girdiCevap2{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; } #kesir{margin:auto;position:absolute; top: 20px; left:0; right:0; width:60px; height:10px;} #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px</style>");
	
	// orta3'in içindeki nesnelerin bilgieri
	$("#orta3",container).append("<input id='girdiCevap3' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$("#orta3",container).append("<div id='yuzde'>");
	$("#orta3",container).append("<div id='esit1'>");
	$("#orta3 #yuzde",container).append("0,");
	$(container).append("<style>#girdiCevap3{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0;}</style>");
	$(container).append("<style>#yuzde{position:absolute; top: 10px; left:10px;  width:20px; height:20px;}</style>");
	
	// Geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'></div>");
	$(container).append("<style>#geriBildirim{position:absolute; top:200px; right:150px; display:none}</style>");
	
	
	// kontrol butonu
	$(container).append("<button class='control_button'id='btnKontrol'>Kontrol</button>");
	$(container).append("<style>.control_button{position:absolute; top:250px; right:50px; }</style>");
	
	// sonraki divi
	$(container).append("<div id='sonraki'>");
	$("#sonraki", container).append("<div id='dikdortgen'>");
	$("#dikdortgen", container).append("<div id='yazi'>Sonraki</div>");
	$("#sonraki", container).append("<div id='ucgen'>");
	$(container).append("<style>#sonraki{position:absolute; top:250px; right:120px; height: 30px;cursor:pointer;color:"+divSonrakiYaziRenk+"; display:none</style>");
	$(container).append("<style>#yazi{ position:absolute; vertical-align:middle; height:30px; top:3px;} #dikdortgen{position:absolute; margin:auto; bottom: 0px; right:0px; top:0px; left:0px; width:70px; height:30px; background:"+divSonrakiFillRenk+" }</style>");
	$(container).append("<style>#ucgen{position:absolute; top:0px; left:70px; width:0, height:0; border-left: 30px solid "+divSonrakiFillRenk+";border-top: 15px solid transparent;border-bottom: 15px solid transparent;}</style>");
	
	
	// Cevap divleri 3 ana div var.
	$(container).append("<div id='Corta1'>");
	$(container).append("<style>#Corta1{position:absolute; top:240px; left:150px; width:80px; height:40px; display:none}</style>");
	$(container).append("<div id='Corta2'>");
	$(container).append("<style>#Corta2{position:absolute; top:220px; left:230px; width:80px; height:100px;display:none}</style>");
	$(container).append("<div id='Corta3'>");
	$(container).append("<style>#Corta3{position:absolute; top:240px; left:320px; width:80px; height:40px;display:none}</style>");
	
	// cevap div 1
	$("#Corta1",container).append("<div id='Cevap1'>");
	$("#Corta1 #Cevap1",container).append("100");
	$("#Corta1",container).append("<div id='yuzde'>");
	$("#Corta1",container).append("<div id='esit1'>");
	$("#Corta1 #yuzde",container).append("%");
	$("#Corta1 #esit1",container).append("=");
	$(container).append("<style>#Cevap1{width:30px; height:30px; margin:auto;position:absolute;  top:10px; left:0; right:0;}</style>");
	$(container).append("<style>#yuzde{position:absolute; top: 10px; left:10px;  width:20px; height:20px;}</style>"); 
	$(container).append("<style>#Corta1 #esit1{position:absolute; top: 10px; left:65px;  width:20px; height:20px;}</style>");
	
	// cevap div 2
	$("#Corta2",container).append("<div id='Cevap2'>");
	$("#Corta2 #Cevap2",container).append("100");
	$("#Corta2",container).append("<div id='kesir'>");
	$("#Corta2 #kesir",container).append("_____");
	$("#Corta2",container).append("<div id='payda'>");
	$("#Corta2",container).append("<div id='esit2'>");
	$("#Corta2 #payda",container).append("100");
	$("#Corta2 #esit2",container).append("=");
	$(container).append("<style>#Corta2 #esit2{position:absolute; top: 30px; left:80px;  width:20px; height:20px;}</style>");
	$(container).append("<style>#Cevap2{width:40px; height:30px; margin:auto; position:absolute;  left:0; right:0; top:15px} #kesir{margin:auto;position:absolute; top: 20px; left:0; right:0; width:60px; height:10px;} #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px</style>");
	
	// cevap div 3 
	$("#Corta3",container).append("<div id='Cevap3'>");
	$(container).append("<style> #Cevap3{width: 40px; height: 30px; position:absolute; top:10px; left:10px; } </style>");
	
	// 3 cevap divin yazı ayarı
	$(container).append("<style> #Cevap1, #Cevap2, #Cevap3{text-align:center} </style>");

	
	/*
	// 10*10'luk büyük kare çiziliyor.
	function bosKareCiz(){
		
		for(j=0;j<10;j++){
			
			for(i=0; i<10;i++){
				var rectangle = new Rectangle((30+i*10),(30+j*10),10,10); //x,y,width,height
				var path = new Path.Rectangle(rectangle);
				path.fillColor = kareIlkFillColor;
				path.strokeColor=kareIlkStrokeColor;
				//console.log("fillColor: "+kareIlkFillColor+" stroke: "+kareIlkStrokeColor);
				//path.selected = true;
			}	
		}
	}
	
	
	bosKareCiz();
	*/
	
	var kare= function(kareSayisi, dolguRengi, hatRengi, x,y){
		this.kareSayisi=kareSayisi;
		this.dolguRengi=dolguRengi;
		this.hatRengi=hatRengi;
		this.x=x;
		this.y=y;
		this.yap=kareYap;
		
	}
	
	function kareYap(){
		
		var girdi=this.kareSayisi;
			
			var onluk=Math.floor(girdi/10)==0?1:Math.floor(girdi/10+1);
			var birlik=Math.floor(girdi%10);
			
			var girilenKareSayisi=10;
			
			for(j=0;j<onluk && j<10;j++){
				
				if(j==(onluk-1))
					girilenKareSayisi=birlik;
				else
					var girilenKareSayisi=10;
					
				for(i=0; i<girilenKareSayisi && i<10;i++){
					
					boyaliKare = new Rectangle((this.x+i*10),(this.y+j*10),10,10); //x,y,width,height
					var path = new Path.Rectangle(boyaliKare);
					path.fillColor = this.dolguRengi;
					path.strokeColor=this.hatRengi;
					
					
				}	
			}
		
	}
	bosKare= new kare(100, kareIlkFillColor, kareIlkStrokeColor,30,30);
	bosKare.yap();
	// Kareler boyanıyor.
	var girdi;
	
	$("#giris").keyup(
		function(){
			bosKare.yap();
			girdi=$("#giris").val();
			
			boyaliKareSol=new kare(girdi,kareBoyaliFillColor, kareBoyaliStrokeColor,30,30);
	boyaliKareSol.yap();
			
			
			/*
			var onluk=Math.floor(girdi/10)==0?1:Math.floor(girdi/10+1);
			var birlik=Math.floor(girdi%10);
			
			var girilenKareSayisi=10;
			
			for(j=0;j<onluk;j++){
				
				if(j==(onluk-1))
					girilenKareSayisi=birlik;
				else
					var girilenKareSayisi=10;
					
				for(i=0; i<girilenKareSayisi;i++){
					
					boyaliKare = new Rectangle((30+i*10),(30+j*10),10,10); //x,y,width,height
					var path = new Path.Rectangle(boyaliKare);
					path.fillColor = kareBoyaliFillColor;
					path.strokeColor=kareBoyaliStrokeColor;
					
					
				}	
			}
			*/
			//console.log("değişti");
			//alert("onluk:"+onluk+"birlik: "+birlik);
		}
		
		
	);
	

	// girdiler ilgili olaylar
	var cevap1,cevap2,cevap3;

	$("#girdiCevap1").change(function(){
		cevap1=$("#girdiCevap1").val();
		$("#geriBildirim").hide();
	});	
	$("#girdiCevap2").change(function(){
		cevap2=$("#girdiCevap2").val();
		$("#geriBildirim").hide();
	});	
	$("#girdiCevap3").change(function(){
		cevap3=$("#girdiCevap3").val();
		$("#geriBildirim").hide();
	});	
	
	// girdi kontrolleri
	document.getElementById("giris").onkeyup=function(){
    	var input=parseInt(this.value);
    	if(input<0 || input>100){
    		alert("0 ile 100 arasında bir sayı giriniz.");
    		bosKare.yap();
    		$("#giris").val("");
    	}
    	return;
	}   
	
	// kontrol butonu ile ilgii olaylar
	var tiklamaSayisi=0;
	$("#btnKontrol").click(
		function(){
			//console.log("c1: "+cevap1+" c2: "+cevap2+" c3: "+cevap3);
			
			// ondalikliGirdi inputa girilen değer kırpılmış olduğu için sorun çıkartıyordu. Alttaki satırla halledildi.
			var ondalikliGirdi=girdi
			if(girdi<10)
				ondalikliGirdi="0"+girdi;
				
			// Cevap Doğruysa
			if(cevap1==girdi && cevap2==girdi && cevap3==ondalikliGirdi){
				$("#sonraki").show();
				//$("#geriBildirim").hide();
				//$("#geriBildirim").removeClass("status_false").addClass("status_true");
				$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
				$("#geriBildirim").show();
				
				
				}
			// cevap Yanlışsa
			else{
				tiklamaSayisi++;
				//console.log(tiklamaSayisi);
				$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
				$("#geriBildirim").show();
			}
			
			// iki denemede de doğru cevap bulunamamışsa
			if(tiklamaSayisi==2){
				//$(".status_alert").html("Yanlış. Doğru cevap: ");
				console.log(tiklamaSayisi);
				$("#geriBildirimText").attr("class","status_false").html("Yanlış. Doğru cevap:");
				var cevap=$("#giris").val();
				$("#Cevap1, #Cevap2").html(cevap);
				$("#girdiCevap1, #girdiCevap2").val(cevap);
				$("#Cevap3").html(cevap/100);
				$(container).append("<style>#Cevap1, #Cevap2, #Cevap3, #girdiCevap1, #girdiCevap2, #girdiCevap3{color:"+dogruCevapGosterimRengi+";}</style>");
				if(cevap<10){
					$("#girdiCevap3").val("0"+cevap);
					console.log("0"+cevap);}
				else
					$("#girdiCevap3").val(cevap);
					
				$("#geriBildirim, #Corta1, #Corta2, #Corta3, #sonraki").show();
					
				}
					
					
		}
		
	);
	
	$("#sonraki").click(
		function(){
			$("#giris, #girdiCevap1, #girdiCevap2, #girdiCevap3").val("");
			$("#geriBildirim, #Corta1, #Corta2, #Corta3, #sonraki").hide();
			tiklamaSayisi=0;
			bosKareCiz();
		}
		
	);
	
};

	// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

