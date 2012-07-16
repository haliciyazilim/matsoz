/**
 * Şemanın ilk hali (Array ile yapıldı)
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 12.07.2012
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
	Main.setObjective("Yandaki sözcükleri şemada uygun yerlere fare ile sürükleyerek yerleştirip kontrol ediniz.");
	var sayi=0;
	var soruSirasi=0;
	var sozcuk;
		
	function Node(name) {
		this.name = name;
		this.parent = null;
		this.children = [];
		this.getTreeSize = function(){
			var result = 1;
			for(var i=0; i < this.children.length; i++)
				result += this.children[i].getTreeSize();
				return result;
			}
			
		this.yazdir=function(){
			var sonuc=Array();
			console.log("this.children.name"+this.name);
			console.log("this.children.length"+this.children.length);
			console.log("this.children[j].children[i].length"+this.children[1].children.length)
			for (var j=0; j<this.children.length; j++){
				console.log("ilk for içindeyim");
				sonuc.push(this.children[j].name);
				for(var i=0; i<this.children[j].children.length;i++){
					console.log("yazdır(): "+this.children[j].children[i].name);
					sonuc.push(this.children[j].children[i].name);
				}
			}
			return sonuc;
		}
			
		this.addChild = function(child) {
			this.children.push(child);
			child.parent = this;
				
			return this;
		}
	}
		
	var kitaplar = new Node("Kitaplar")
		.addChild(
			new Node("Edebiyat")
				.addChild(new Node("Roman"))
				.addChild(new Node("Hikâye"))
				.addChild(new Node("Şiir"))
		)
		.addChild(
			new Node("Diğer")
				.addChild(new Node("Ansiklopedi"))
				.addChild(new Node("Sözlük"))
		);
	var icecekler = new Node("İçecekler")
		.addChild(
			new Node("Sıcak")
				.addChild(new Node("Çay"))
				.addChild(new Node("Kahve"))
				.addChild(new Node("Ihlamur"))
		)
		.addChild(
			new Node("Soğuk")
					.addChild(new Node("Ayran"))
					.addChild(new Node("Meyve Suyu"))
					.addChild(new Node("Kola"))
			);
			
	var spor= new Node("Spor")
		.addChild(
			new Node("Bireysel")
				.addChild(new Node("Güreş"))
				.addChild(new Node("Halter"))
				.addChild(new Node("Yüzme"))
		)
		.addChild(
			new Node("Takım")
				.addChild(new Node("Futbol"))
				.addChild(new Node("Voleybol"))
				.addChild(new Node("Basketbol"))
		);
			
	var kaplar= new Node("Kaplar")
		.addChild(
			new Node("Porselen")
			.addChild(new Node("Tabak"))
			.addChild(new Node("Çaydanlık"))
		)
		.addChild(
			new Node("Cam")
			.addChild(new Node("Bardak"))
			.addChild(new Node("Kâse"))
		)
		.addChild(
			new Node("Metal")
			.addChild(new Node("Tencere"))
			.addChild(new Node("Tava"))
		);
		
	for (var i = 0; i < kitaplar.children.length; i++) {
		var child = kitaplar.children[i];
	}
	
	for(var i=0; i<kitaplar.children[0].children.length;i++)
		console.log("Edebiyatın bebeleri: "+kitaplar.children[0].children[i].name);
	
	var dropableShapes = new Group();
	
	
	
	//var sozcuk=sozcukler[dizi[soruSirasi]];
	console.log("145"+sozcuk);
	
	function semaOlustur(renk,sozcuk){
		console.log("148"+sozcuk);
		console.log("149"+sozcuk.name);
		console.log("uzunluk "+sozcuk.getTreeSize());
		var tane=sozcuk.getTreeSize()-1;
		//console.log("x: "+x);
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
		
		// baslik yazılıyor.
		var ortaNokta=(590/2-50+0.5);
		var semaBaslikSekil=new Path.Rectangle(ortaNokta,60.5,100,40);
			semaBaslikSekil.strokeColor="black";
			var semaBaslikYazi= new PointText(ortaNokta+50, 85);
			semaBaslikYazi.content=sozcuk.name;
			semaBaslikYazi.paragraphStyle.justification = 'center';
			
		// alt semalar çizdirliyor.
		var altSemaSayisi=sozcuk.children.length;
		console.log("Alt Şema Sayısı: "+altSemaSayisi);
		var altOrtaNokta=(490/altSemaSayisi)/2;
		var sonrakiKoordinatlar=2*altOrtaNokta;
		
		var altSemaToplamIcerik= new Array();
		for(var i=0; i<altSemaSayisi;i++)
			altSemaToplamIcerik[i]=sozcuk[sozcuk[1]+2+i];
				
		for(var i=0;i<altSemaSayisi;i++){
			var altSemaGroup=new Group();
			var altSemaKoordinat=altOrtaNokta+i*sonrakiKoordinatlar;
			console.log("koor"+altSemaKoordinat);
			var altSemaSekil=new Path.Rectangle(altSemaKoordinat,140.5,100,40);
				//sozcuk.children[i].shape = altSemaSekil;
				
			altSemaSekil.strokeColor="black";
			altSemaSekil.class = "dropable";
				
			var icerik=sozcuk[1]+2;
			altSemaSekil.icerik=sozcuk.children[i].name;
				
			altSemaSekil.ebeveyn=sozcuk;
				
			altSemaSekil.name=null;
			altSemaSekil.bebeSayisi=sozcuk.children[i].children.length;
	
			dropableShapes.addChild(altSemaSekil);
			var altSemaBaslikYazi= new PointText(altSemaKoordinat+50, 160);
			altSemaBaslikYazi.content="";
			altSemaBaslikYazi.paragraphStyle.justification = 'center';
			altSemaGroup.addChild(altSemaSekil);
			altSemaGroup.addChild(altSemaBaslikYazi);
			
		// başlıktan alt şemalara doğrular çiziliyor.
			var basliktanDogru=new Path.Line(new Point(ortaNokta+50,100),new Point(altSemaKoordinat+50,140.5));
			basliktanDogru.strokeColor="black";
			
			// alt semaların elemanları çiziliyor.
			var altSemalarElemanSayisi=sozcuk.children[i].children.length;
			console.log("alt eleman sayisi "+i+": "+altSemalarElemanSayisi);
			console.log("alt şema koordinat: "+altSemaSekil.position);
			
			for(var j=0; j<altSemalarElemanSayisi; j++){
				var altSemaElemanKoordinat=j*(ebat+10)+altSemaSekil.position.x-((ebat*altSemalarElemanSayisi+10*(altSemalarElemanSayisi-1))/2);
				console.log("alt eleman koordinat değişkeni: "+altSemaElemanKoordinat);
				var altSemalarElemanSekil=new Path.Rectangle(altSemaElemanKoordinat, (altSemaSekil.position.y+50), ebat, 30);
				
				var altSemalarGroup=new Group();
				altSemalarElemanSekil.bebeSayisi=0;
				altSemalarElemanSekil.ebeveyn  = altSemaSekil;
				altSemalarElemanSekil.class = "dropable";
				dropableShapes.addChild(altSemalarElemanSekil);
				console.log("elemanlar çiziliyhor");
				//altSemalarElemanSekil.fillColor="black";
				altSemalarElemanSekil.strokeColor="black";
				//alert("elemanlar çiziliyhor");
				console.log("Alt eleman şekil koordinat: "+altSemalarElemanSekil.position);
			
				// başlıktan alt şemalara doğrular çiziliyor.
				var semadanDogru=new Path.Line(new Point(altSemaSekil.position.x,altSemaSekil.position.y+20),new Point(altSemalarElemanSekil.position.x,altSemalarElemanSekil.position.y-15));
				semadanDogru.strokeColor="black";
				altSemalarGroup.addChild(altSemalarElemanSekil);
				altSemalarGroup.addChild(semadanDogru);
			}
		}
		
		var sonuc="";
		for(var i=0; i<sozcuk.children[i].length; i++){
			sonuc+=sozcuk.children[i].name;
			for(var j=0; i<sozcuk.children[i].children[j].length; i++){
				sonuc+=sozcuk.children[i].children[j].name;		
			}			
		}
		
		console.log("satir 228: "+sonuc);
		
		var move = function(event){
			this.translate(event.delta.x,event.delta.y);
			dropableShapes.setStyle(dropableShapeDefaultStyle)
			var hitResult = project.activeLayer.hitTest([event.point.x,event.point.y],{ fill: true, stroke: true, segments: true, tolerance: 2, class: "dropable" });
			if(hitResult){
				this.inDropableShape = true;
				this.hitShape = hitResult.item;
				this.hitShape.setStyle(dropableShapeHoverStyle);
					//console.log("up> alttaki: "+this.hitShape.icerik);
			}else{
				this.inDropableShape = false;
				this.hitShape = null;
			}
		},
		start = function(event){
			console.log("Starta girdim")
			this.ox = this.position.x;
			this.oy = this.position.y;
		},
		up = function(event){
			var konulan;
					
			//console.log("konulan: "+konulan);		
			//console.log("tutulan"+tutulan);
			//console.log("posizyon"+this.hitShape.position);
			//var semaIsim=this.children[1].content;
			var tetkik=false;
			//console.log("up'tayım: "+this.hitShape.evebeyn);
					
					
			if(this.inDropableShape==true){
						
				var tutulan=this.children[1].content;
				var alttakiEbeveyn=this.hitShape.ebeveyn.name;
				var alttakiBebeSayisi=this.hitShape.bebeSayisi;
				var tutulanEbeveyn=this.ebeveyn.name;
				var tutulanBebeSayisi=this.bebeSayisi;
				console.log("tutulan evebeyn "+tutulanEbeveyn);
				console.log("tutulan bebesayisi "+tutulanBebeSayisi);
				console.log("alttaki ebeveyn (content): "+this.hitShape.ebeveyn.content);
				console.log("alttaki ebeveyn (name): "+this.hitShape.ebeveyn.name);
				console.log("alttaki bebesayisi "+alttakiBebeSayisi);
				console.log("tutalan name "+this.name);
				console.log("alttaki name "+this.hitShape.name);
				if((tutulanEbeveyn==alttakiEbeveyn && alttakiBebeSayisi==tutulanBebeSayisi) )
				tetkik=true;
						
						
				  
			  }
			
			  if(tetkik==true){
				  sayi++;
				  console.log("tetkik  true if"+tetkik);
				  this.class=null;
				  //this.position=this.hitShape.position;
				  this.opacity=0;
				  //this.hitShape.ebeveyn.name=this.hitShape.name;
				  //console.log("this.hitShape.evebeyn.name: "+this.hitShape.ebeveyn.name);
				  this.hitShape.name = this.name;
				  console.log("asdads"+this.hitShape.name);
				  this.hitShape.content=this.name;
				  console.log("asdadasd: "+this.hitShape.content);
				  
				  var yazi= new PointText(this.hitShape.position);
				  yazi.content=this.children[1].content;
				  yazi.paragraphStyle.justification = 'center';
				  yazi.fontSize=8;
				  this.hitShape.class=null;
				  this.hitShape.setStyle(dropableShapeDefaultStyle);
				 
				  
				  tetkik=false;
				  
				  if(sayi==tane)
				  	$("#kontrolBtn").show();
			  }
			  else{
				  console.log("tetkik false if"+tetkik);
				  this.animate({
				  
					  style:{
						  position:new Point(this.ox,this.oy)
						  },
					  duration: 500,
					  
				  });
			  }
		  
	  };
	  
		// Elemanlar tek tek yazdırılıyor.
		
		console.log("elemanlar: "+sozcuk.yazdir());
		//var elemanlar=sozcuk.yazdir();
		var konum=0;
		var konumSirasi=0;
		var konumListe=Util.getShuffledArray(tane);
		console.log(konumListe);
		for (var j=0; j<sozcuk.children.length; j++){
				konum=konumListe[konumSirasi];
			
				console.log("semalar 1:");
				console.log(sozcuk.children[j].name);
				
				var semaGroup = new Group();
				var sema = new Path.Rectangle(((konum*(ebat+10))+10),10,ebat,30); //x,y,width,height
				sema.fillColor=renk;
				var semaIsim= new PointText(((konum*(ebat+10))+10+ebat/2),30);
				
				
				
				semaIsim.content=sozcuk.children[j].name;
				semaIsim.paragraphStyle.justification = 'center';
				semaIsim.fontSize=8;
				semaGroup.ebeveyn=sozcuk;
				semaGroup.bebeSayisi=sozcuk.children[j].children.length;
				semaGroup.name=sozcuk.children[j].name;
				//semaIsim.name = sozcuk.children[j];
				semaGroup.class = "sema";
				semaGroup.addChild(sema);
				semaGroup.addChild(semaIsim);
				semaGroup.move = move;
				semaGroup.up = up;
				semaGroup.start = start;
				
					for(var i=0; i<sozcuk.children[j].children.length;i++){
						
						konumSirasi++;
						konum=konumListe[konumSirasi];
						console.log("337: "+sozcuk.children[j].children[i].name);
						//sonuc.push(sozcuk.children[j].children[i].name);
						
						var semaGroup = new Group();
						var sema = new Path.Rectangle(((konum*(ebat+10))+10),10,ebat,30); //x,y,width,height
						sema.fillColor=renk;
						var semaIsim= new PointText(((konum*(ebat+10))+10+ebat/2),30);
						
						
						semaIsim.content=sozcuk.children[j].children[i].name;
						semaIsim.paragraphStyle.justification = 'center';
						semaIsim.fontSize=8;
						semaGroup.ebeveyn=sozcuk.children[j];
						//semaGroup.parent=sozcuk.children[j];
						semaGroup.name = sozcuk.children[j].children[i].name;
						semaGroup.bebeSayisi=sozcuk.children[j].children[i].children.length ||0;
						semaGroup.class = "sema";
						semaGroup.addChild(sema);
						semaGroup.addChild(semaIsim);
						semaGroup.move = move;
						semaGroup.up = up;
						semaGroup.start = start;
					}
					konumSirasi++;
					
				}
				
		var tool  = new Tool();
		
		tool.onMouseMove = function(event){
			
			//console.log("event.item"+event.item);
			if(this.item)
				this.item.move(event);
				
		};
		tool.onMouseUp = function(event){
			if(this.item){
				this.item.up(event);
				this.item = null;
				
			}
			else{
				}
			
		};
		tool.onMouseDown = function(event){
			if(event.item && event.item.class && event.item.class == "sema"){
				this.item = event.item;
				this.item.start(event);
			}
		};
		tool.activate();
	}

	function soruGetir(){
	var dizi=Array();
	dizi= Util.getShuffledArray(4);
	console.log("139"+dizi);
	
	switch (dizi[soruSirasi]){
			case 0:
				sozcuk=kitaplar;
				break;
			case 1:
				sozcuk=icecekler;
				break;		
			case 2:
				sozcuk=kaplar;
				break;		
			case 3:
				sozcuk=spor;
				break;		
		}
	
	semaOlustur(semaRengi[1],sozcuk);
	}
	
	soruGetir();
	
	

	$(container).append("<div id='kontrolBtn' class='next_button'>");
	$("#kontrolBtn").html("Sonraki")
		.css("position","absolute")
		.css("height","15px")
		.css("right","10px")
		.css("bottom","10px")
		.click(function(){
			project.activeLayer.remove();
			var layer = new Layer();
			console.log("sayi: "+sayi);
			//semaGroup.remove();
			soruSirasi++;
			console.log("xxxxxxxxxxxxxxxxxxxxxxxsoruSirais: "+soruSirasi);
			console.log("xxxxxxxxxxxxxxxxxxxxxxxsozcuk: "+sozcuk.name);
			semaOlustur(semaRengi[1],soruGetir());
			//window.location.reload()
			}).hide();
	
	
};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

 