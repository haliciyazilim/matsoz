/*
 Yüzdeleri Karşılaştırma
 Kılavuz: mat-5-yüzdeleri karşılaştırma.pdf
   
 Halıcı Yazılım
 Abdullah Karacabey
 04.07.2012 - 05.07.2012
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
	Main.setObjective("Aşağıdaki yüzlük tabloların altındaki kutulara istediğiniz sayıları yazınız. “<” (küçük)  ya da “>” (büyük) işaretlerinden uygun olanına fare ile tıklayarak yüzdeleri karşılaştırınız. Daha sonra doğruluğunu kontrol ediniz");
	
	//sol div bilgileri	
	$(container).append("<div id='sol'>");
	$(container).append("<style>#sol{position:absolute; top:150px; left:30px; width:100px; height:100px}</style>");
	
	
	$("#sol",container).append("<input id='girisSol' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	//$("#sol",container).append("<div id='kesir'>");
	//$("#sol #kesir",container).append("_____");
	Path.Fraction(57,170,0,0,25);
	$("#sol",container).append("<div id='payda'>");
	$("#sol #payda",container).append("100");
	$(container).append("<style>#girisSol{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; } #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px</style>");
	
	//orta div bilgileri
	$(container).append("<div id='orta'>");
	$(container).append("<style>#orta{position:absolute; top:30px; left:145px; width:220px; height:100px; border:solid 1px black}</style>");
	$("#orta", container).append("<div id='buyukKucuk'>");
	$("#orta", container).append("<style> #buyukKucuk{margin:auto;position:absolute;  left:0; right:0; height:30px; width:70px;}</style>");
	$("#orta #buyukKucuk", container).append("<div id='kucuk'>");
	$("#orta", container).append("<style> #kucuk{position: absolute; left:0px; top:0px;height:30px; width:30px ;font-weight:bold;border-radius:20px;border:1px solid #000;cursor:pointer;background-color:red;color:white;}</style>");
	
	
	$("#orta #buyukKucuk", container).append("<div id='buyuk'>");
	$("#orta", container).append("<style> #buyuk{position: absolute; left:40px; top:0px;height:30px; width:30px ;font-weight:bold;border-radius:20px;border:1px solid #000;cursor:pointer;background-color:red;color:white;}</style>");
	
	$("#orta #buyukKucuk #kucuk", container).append("<div class='isaret'><</div>");
	$("#orta #buyukKucuk #buyuk", container).append("<div class='isaret'>></div>");
	$("#orta #buyukKucuk", container).append("<style>.isaret{width:15px; height:20px;margin:auto;position:absolute; left:0; right:0; top:0; bottom:0;}");
	
	$("#orta", container).append("<div id='girdiler'>");
	$("#orta", container).append("<style> #girdiler{margin:auto;position:absolute; left:0; right:0; top:50px; width:200px ;font-weight:bold;float:left; text-align:center}</style>");
	
	//$("#orta #girdiler", container).append("<div id='yuzde1'>");
	$("#orta", container).append("<style> #yuzde1{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("% ");
	
	//$("#orta #girdiler", container).append("<div id='cevap1'>");
	$("#orta", container).append("<style> #cevap1{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("<input id='girdiCevap1' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/> ");
	$(container).append("<style>#girdiCevap1{width:30px; height:30px;}</style>");
	
	//$("#orta #girdiler", container).append("<div id='cevap2'>");
	$("#orta", container).append("<style> #cevap2{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("<input id='girdiCevap2' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$(container).append("<style>#girdiCevap2{width:30px; height:30px;}</style>");
	
	//$("#orta #girdiler", container).append("<div id='yuzde2'>");
	$("#orta", container).append("<style> #yuzde1{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append(" % ");
	
	//$("#orta #girdiler", container).append("<div id='cevap3'>");
	$("#orta", container).append("<style> #cevap3{font-weight:bold;}</style>");
	$("#orta #girdiler", container).append("<input id='girdiCevap3' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	$(container).append("<style>#girdiCevap3{width:30px; height:30px;}</style>");
	
	$(container).append("<style>input {text-align:center;font-weight:bold; font-size:large;}</style>");
	
	//sağ div bilgileri	
	$(container).append("<div id='sag'>");
	$(container).append("<style>#sag{position:absolute; top:150px; right:30px; width:100px; height:100px}</style>");
	
	
	$("#sag",container).append("<input id='girisSag' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>");
	//$("#sag",container).append("<div id='kesir'>");
	Path.Fraction(409,170,0,0,25);
	//$("#sag #kesir",container).append("_____");
	$("#sag",container).append("<div id='payda'>");
	$("#sag #payda",container).append("100");
	$(container).append("<style>#girisSag{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; } #kesir{margin:auto;position:absolute; top: 20px; left:0; right:0; width:60px; height:10px;} #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px</style>");
	
	
	// kontrol butonu
	
	$(container).append("<button class='control_button' id='btnKontrol'>Kontrol</button>");
	$(container).append("<style>.control_button{position:absolute; top:250px; margin:auto;right:220px; }</style>");
	
	//sonraki divi
	$(container).append("<div id='sonraki'>");
	$("#sonraki", container).append("<div id='dikdortgen'>");
	$("#dikdortgen", container).append("<div id='yazi'>Sonraki</div>");
	$("#sonraki", container).append("<div id='ucgen'>");
	$(container).append("<style>#sonraki{position:absolute; top:250px; right:290px; height: 30px;cursor:pointer;color:"+divSonrakiYaziRenk+"; display:none </style>");
	$(container).append("<style>#yazi{ position:absolute; vertical-align:middle; height:30px; top:3px;} #dikdortgen{position:absolute; margin:auto; bottom: 0px; right:0px; top:0px; left:0px; width:70px; height:30px; background:"+divSonrakiFillRenk+" }</style>");
	$(container).append("<style>#ucgen{position:absolute; top:0px; left:70px; width:0, height:0; border-left: 30px solid "+divSonrakiFillRenk+";border-top: 15px solid transparent;border-bottom: 15px solid transparent;}</style>");
	
	
	
	// Gösterilecek gCevaplar
	$("#orta", container).append("<div id='gCevaplar'>");
	$("#orta", container).append("<style> #gCevaplar{margin:auto;position:absolute; left:55px; right:0; top:150px; width:170px ;font-weight:bold;float:left;}</style>");
	$("#orta", container).append("<style>.cevapİsaret{color:"+dogruCevapGosterimRengi+"}");

	$("input").addClass("input");
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
	
	
	// Sağdaki ve soldaki boş kareler çiziliyor.
	bosKareSol= new kare(100, kareIlkFillColor, kareIlkStrokeColor,30,30);
	bosKareSol.yap();
	
	bosKareSag= new kare(100, kareIlkFillColor, kareIlkStrokeColor,380,30);
	bosKareSag.yap();
	
	/*
	girdi=$("#giris").val();
	boyaliKareSol=new kare(,kareBoyaliFillColor, kareBoyaliStrokeColor,30,30);
	boyaliKareSol.yap();
	*/
	
	// Sol kareler boyanıyor.
	var girdi;
	
	$("#girisSol").keyup(
		function(){
			bosKareSol.yap();
			girdi=$("#girisSol").val();
			$("#girdiCevap1").val(girdi);
			boyaliKareSol=new kare(girdi,kareBoyaliFillColor, kareBoyaliStrokeColor,30,30);
			boyaliKareSol.yap();
	});
	
	//Sağ kareler boyanıyor.
	$("#girisSag").keyup(
		function(){
			bosKareSag.yap();
			girdi=$("#girisSag").val();
			$("#girdiCevap3").val(girdi);
			boyaliKareSag=new kare(girdi,kareBoyaliFillColor, kareBoyaliStrokeColor,380,30);
			boyaliKareSag.yap();
	});
	
	// girdi kontrolleri
	$("#girisSol").keyup(
		function(){
			$("#geriBildirim").hide();
	    	var input=parseInt(this.value);
	    	if(input<0 || input>100){
    			//alert("0 ile 100 arasında bir sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("0 ile 100 arasında bir sayı giriniz.");
				$("#geriBildirim").show();
    			bosKareSol.yap();
    			//$("#girisSol").val("");
    		}
    		if(   $("#girisSol").val()==$("#girisSag").val()){
    			//alert("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
    			console.log("sol: "+$("#girisSol").val()+ " sag: "+$("#girisSag").val());
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
				$("#geriBildirim").show();
    			$(this).val("");
    			$("#girdiCevap1").val("");
    		}
	    	return;
		});  
	
	$("#girisSag").keyup(
		function(){
			$("#geriBildirim").hide();
	    	var input=parseInt(this.value);
	    	if(input<0 || input>100){
    			//alert("0 ile 100 arasında bir sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("0 ile 100 arasında bir sayı giriniz.");
				$("#geriBildirim").show();
    			bosKareSag.yap();
    			//$("#girisSag").val("");
    		}
    		if( $("#girisSol").val()==$("#girisSag").val()){
    			//alert("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
				$("#geriBildirim").show();
    			$(this).val("");
    			//$("#girdiCevap3").val("");
    		}
	    	return;
		});  
	
	$("#buyuk").click(
		function(){
			$("#girdiCevap2").val("");
			$("#girdiCevap2").val(">");
			$("#geriBildirim").hide();
		}
	);
	
	$("#kucuk").click(
		function(){
			$("#girdiCevap2").val("");
			$("#girdiCevap2").val("<");
			$("#geriBildirim").hide();
		}
	);
	
	
	
	$("#btnKontrol").click(
		function(){
			
			console.log("kontrole basıldı");
			
			kontrol();
		}
	);
	
	function kontrol(){
		
		var girdi1=$("#girdiCevap1").val();
			var girdi2=$("#girdiCevap3").val();
			var isaret=$("#girdiCevap2").val();
			
			
			
			if(girdi1 == "" || girdi1 == undefined || girdi2 == "" || girdi2 == undefined || isaret == ""|| isaret == undefined)
			{
				$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Lütfen kutucukları doldurun!");
				$("#geriBildirim").show();
			}
			else{
				
				var input=parseInt(this.value);
	    	if(input<0 || input>100){
    			//alert("0 ile 100 arasında bir sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("0 ile 100 arasında bir sayı giriniz.");
				$("#geriBildirim").show();
    			bosKareSag.yap();
    			}
    			/*
    		else if(($("#girisSol").val()==" "  || $("#girisSol").val()==" ") && $("#girisSol").val()==$("#girisSag").val()){
    			alert("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
    			$('#geriBildirimText').attr("class","status_alert");
				$('#geriBildirimText').html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz.");
				$("#geriBildirim").show();
    			$(this).val("");
    			$("#girdiCevap3").val("");
    		}
    		*/
    		else{	
				if(isaret=="<"){
					if(girdi1<girdi2){
						$("#btnKontrol").hide();
						$("#sonraki").show();
						//$("#geriBildirim").hide();
						//$("#geriBildirim").removeClass("status_false").addClass("status_true").html("Tebrikler");
						$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
						$("#geriBildirim").show();
						
					}
					
				else if(girdi1>girdi2)
				{
					$("#geriBildirimText").attr("class","status_false").html("Yanlış. Cevap:");
					
					$(container).append("<style>#girdiCevap2{color:"+dogruCevapGosterimRengi+"}");
					$("#gCevaplar").html("%"+girdi1+" <stroke class='cevapİsaret'>></stroke> %"+girdi2);
					$("#gCevaplar").show();
					
					$("#geriBildirim").show();
					$("#btnKontrol").hide();
					$("#sonraki").show();
				}
			
			}
			if(isaret==">"){
				if(girdi1>girdi2){
					$("#btnKontrol").hide();
					$("#sonraki").show();
					//$("#geriBildirim").hide();
					//$("#geriBildirim").removeClass("status_false").addClass("status_true");
					$("#geriBildirimText").attr("class","status_true").html("Tebrikler");
					$("#geriBildirim").show();
					
				}
				else if(girdi1<girdi2)
				{
					$("#geriBildirimText").attr("class","status_false").html("Yanlış. Cevap:");
					
					$(container).append("<style>#girdiCevap2{color:"+dogruCevapGosterimRengi+"}");
					$("#gCevaplar").html("%"+girdi1+" <stroke class='cevapİsaret'><</stroke> %"+girdi2);
					
					$("#gGirdiCevap1").val($("#girdiCevap1").val());
					$("#gGirdiCevap2").val("<");
					$("#gGirdiCevap3").val($("#girdiCevap3").val());
					$("#gCevaplar").show();
					
					$("#geriBildirim").show();
					$("#btnKontrol").hide();
					$("#sonraki").show();
				}
			}
			
			
			
				
				
		}	}
		
	}
	
	
	$("#girisSol").keyup(function(event) {
		if(event.keyCode == 13) {
			console.log("Key"+event.keyCode);
			kontrol();
		}
	});
	
	$("#girisSag").keyup(function(event) {
		if(event.keyCode == 13) {
			kontrol();
		}
	});
	
	
	
	// Geri bildirim
	$(container).append("<div class='status_field' id='geriBildirim'>");
	$("#geriBildirim", container).append("<div id='geriBildirimText'></div>");
	$(container).append("<style>#geriBildirim{position:absolute; top:150px; right:150px; display:none}</style>");
	
	//$("#geriBildirimText", container).append("Naber?");
	
	
	$("#sonraki").click(
		function(){
			$("#geriBildirim").hide();
			$("#btnKontrol").show();
			$("#sonraki").hide();
			$("#gCevaplar").hide();
			$("#girisSol").val("");
			$("#girisSag").val("");
			$("#girdiCevap1").val("");
			$("#girdiCevap2").val("");
			$("#girdiCevap3").val("");
			bosKareSol.yap();
			bosKareSag.yap();
			
		}
	);
	
	
};

// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
