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
				var sonuc="";
				for(var i=0; i<this.children[i].length; i++){
					sonuc+=this.children[i].name;
					for(var j=0; i<this.children[i].children[j].length; i++){
						sonuc+=this.children[i].children[j].name;		
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
		
		//console.log("Kitaplar size: "+kitaplar.children[0].getTreeSize())
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
					.addChild(new Node("çaydanlık"))
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
			
			//console.log(kitaplar.children[i]);
		}
		for(var i=0; i<kitaplar.children[0].children.length;i++)
			console.log("Edebiyatın bebeleri: "+kitaplar.children[0].children[i].name);
		
		
		

	var dropableShapes = new Group();
	var sozcuk=spor;
	function semaOlustur(renk,sozcukler){
		console.log("uzunluk "+sozcuk.getTreeSize());
		var tane=sozcuk.getTreeSize();
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
				altSemaSekil.strokeColor="black";
				altSemaSekil.class = "dropable";
				
				var icerik=sozcuk[1]+2;
				altSemaSekil.icerik=altSemaToplamIcerik;
				dropableShapes.addChild(altSemaSekil);
			var altSemaBaslikYazi= new PointText(altSemaKoordinat+50, 160);
			
				altSemaBaslikYazi.content=sozcuk.children[i].name;
				altSemaBaslikYazi.paragraphStyle.justification = 'center';
				//console.log("şema sayısı n: "+altSemaSayisi);
				//console.log("baslangic n: "+altOrtaNokta);
			
			altSemaGroup.addChild(altSemaSekil);
			altSemaGroup.addChild(altSemaBaslikYazi);
			//altSemaGroup.ozellik="bir özellik";
			
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
					altSemalarElemanSekil.class = "dropable";
					dropableShapes.addChild(altSemalarElemanSekil);
					altSemalarElemanSekil.strokeColor="black";
					console.log("Alt eleman şekil koordinat: "+altSemalarElemanSekil.position);
					
					// başlıktan alt şemalara doğrular çiziliyor.
				var semadanDogru=new Path.Line(new Point(altSemaSekil.position.x,altSemaSekil.position.y+20),new Point(altSemalarElemanSekil.position.x,altSemalarElemanSekil.position.y-15));
				semadanDogru.strokeColor="black";
				}
		}
		
		var sozcuk="";
		for(var i=0; i<sozcuk.children[i].length; i++){
					sonuc+=sozcuk.children[i].name;
					for(var j=0; i<sozcuk.children[i].children[j].length; i++){
						sonuc+=sozcuk.children[i].children[j].name;		
					}			
				}
		
		console.log(sozcuk);
		
		
		
		// Elemanlar tek tek yazdırılıyor.
		var altSemaSayisi=sozcukler[1];
		var baslangicIndisi=2+sozcukler[1];
		console.log("elemanlar: "+sozcuk.yazdir());
		var move = function(event){
				
				this.translate(event.delta.x,event.delta.y);
				dropableShapes.setStyle(dropableShapeDefaultStyle)
				var hitResult = project.activeLayer.hitTest([event.point.x,event.point.y],{ fill: true, stroke: true, segments: true, tolerance: 2, class: "dropable" });
				if(hitResult){
					this.inDropableShape = true;
					this.hitShape = hitResult.item
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
					var tutulan=this.children[1].content
					//console.log("konulan: "+konulan);		
					//console.log("tutulan"+tutulan);
					//console.log("posizyon"+this.hitShape.position);
					//var semaIsim=this.children[1].content;
					var tetkik=false;
					console.log("up'tayım");
					
					if(this.inDropableShape==true && this.hitShape.icerik!=undefined){
						konulan=this.hitShape.icerik;
						console.log("up'tayım ve if'e girdim.");
						for(var i=0; i<this.hitShape.length;i++){
							if(tutulan==konulan[i]){
								tetkik=true;
							}
						}
					}
								
					if(tetkik==true){
						console.log("tetkik  true if"+tetkik);
						this.class=null;
						this.position=this.hitShape.position;
						console.log("alt semanın iceriği: "+this.hitShape.icerik);
						console.log("üstteki şema iceriği: "+tutulan);
						
						
						tetkik=false;
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
		for(var i=0;i<(tane+baslangicIndisi);i++){
			var semaGroup = new Group();
			var sema = new Path.Rectangle(((i*(ebat+10))+10),10,ebat,30); //x,y,width,height
			sema.fillColor=renk;
			var semaIsim= new PointText(((i*(ebat+10))+10+ebat/2),30);
			var soz=i+baslangicIndisi;
			console.log("S: "+soz);
			semaIsim.content=sozcukler[soz];
			semaIsim.paragraphStyle.justification = 'center';
			semaIsim.fontSize=8;
			semaGroup.class = "sema";
			semaGroup.addChild(sema);
			semaGroup.addChild(semaIsim);
			semaGroup.move = move;
			semaGroup.up = up;
			semaGroup.start = start;
		}
		
		var tool  = new Tool();
		/*tool.setHitTestOptions({ 
			fill: true, 
			stroke: true, 
			segments: true, 
			tolerance: 2,
			class:"sema"
		})*/
		tool.onMouseMove = function(event){
			
			console.log(event.item);
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

	
	semaOlustur(semaRengi[1],sozcuk);
	

	
	
};
	
// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
	

 