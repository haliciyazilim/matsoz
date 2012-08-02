function LongSubtraction(cikan1, cikan2, div){
	
		this.cikan1=parseInt(cikan1,10);
		this.cikan2=parseInt(cikan2,10);
		this.sonuc=this.cikan1-cikan2;
		this.div="#"+div;
		this.doldur=function(){
	
		$(this.div,container).append("<div id='cikan1' class='sonuc'>");
			$(this.div+" #cikan1")
			.css("top","10px").html();
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.cikan1.toString().length;i++){
			var id=this.cikan1.toString().length-i
			$(this.div+" #cikan1",container).append("<span id='ilkBasamak"+id+"'>");
			$(this.div+" #cikan1 #ilkBasamak"+id).html(this.cikan1.toString().charAt(i));
			$(this.div+" #cikan1 #ilkBasamak"+id).addClass("ilkBasamakTek");
		}
				
		$(this.div,container).append("<div id='cikan2' class='sonuc'>");
			$(this.div+" #cikan2")
			.css("top","50px").html();

		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.cikan2.toString().length;i++){
			var id=this.cikan2.toString().length-i
			$(this.div+" #cikan2",container).append("<span id='ikinciBasamak"+id+"'>");
			$(this.div+" #cikan2 #ikinciBasamak"+id).html(this.cikan2.toString().charAt(i));
			$(this.div+" #cikan2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
		}
			
			
			
		
		
		$(this.div,container).append("<div id='cikarmaIslemi'>");
		$(this.div+" #cikarmaIslemi").css("width","120px")
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
			.html("-");
		$(this.div+" .sonuc").css("width","100px")
			.css("text-align","right")
			.css("height","30px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size","30px");
			//.css("border","solid 1px black");
			
		$(this.div,container).append("<div id='sonuc' class='sonuc'>");
			$(this.div+" #sonuc")
			.css("top","100px").html();
		
		//odunc basamakları
		$(this.div,container).append("<div id='odunc' class='sonuc'>");
		$(this.div+" #odunc")
			.css("top","10px").html();
		
		//OduncAldiktanSonra basamakları
		//odunc basamakları
		$(this.div,container).append("<div id='odunctenSonra' class='sonuc'>");
		$(this.div+" #odunctenSonra")
			.css("top","10px").html();
		
		// sonuc divini dolduruyoruz.			
		for(var i=0;i<this.cikan1.toString().length;i++){
			var id=this.cikan1.toString().length-i;
			$(this.div+" #sonuc",container).append("<span id='sonucBasamak"+id+"'>");
			//$(this.div+" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #sonuc #sonucBasamak"+id).addClass("sonucBasamakTek");
		}
		
		
		
		for(var i=0; i<this.cikan1.toString().length; i++){
			var id=this.cikan1.toString().length-i;
			$(this.div+" #odunc",container).append("<span id='oduncBasamak"+id+"'>");
			//$(this.div+" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #odunc #oduncBasamak"+id).addClass("oduncBasamakTek");
			var right=(9*id*2-20+i)+"px";
			$(this.div+" #odunc #oduncBasamak"+id).html(this.cikan1.toString().charAt(i)).css("right",right); //icerik cikan1 ile aynı yapılıyor. daha sonra buna göre kontrol edilecek.
			
			$(this.div+" #odunctenSonra",container).append("<span id='odunctenSonraBasamak"+id+"'>");
			//$(this.div+" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #odunctenSonra #odunctenSonraBasamak"+id).addClass("oduncBasamakTek");
			var right=(9*id*2-20+i)+"px";
			$(this.div+" #odunctenSonra #odunctenSonraBasamak"+id).html(this.cikan1.toString().charAt(i)).css("right",right); //icerik cikan1 ile aynı yapılıyor. daha sonra buna göre kontrol edilecek.
		}
		
		$(this.div+" #cikan1 #ilkBasamak4"+","+this.div+" #cikan2 #ikinciBasamak4"+","+this.div+" #odunctenSonra #odunctenSonraBasamak4"+","+this.div+" #sonuc #sonucBasamak4").css("margin-right","15px");
		$(this.div+" #odunc #oduncBasamak4").css("right","67px");
		$(this.div+" #odunc #oduncBasamak5").css("right","83px");
		
		$(this.div+" .sonucBasamakTek").css("opacity","0");
		$(this.div+" .oduncBasamakTek").css("opacity","0").css("position","absolute");
		
		$(this.div+" .sonuc").css("width","100px")
			.css("text-align","right")
			.css("height","30px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size","30px")
			.css("z-index","4");;
			//.css("border","solid 1px black");
		}
		
		this.basla=function(hizB,hizA){
			this.hizB=hizB;
			this.hizA=hizA;

			var uzunSayi=this.cikan1.toString().length>this.cikan2.toString().length==true?this.cikan1.toString().length:this.cikan2.toString().length;
			console.log("uzunsayi: "+uzunSayi);
			oduncAlindimi=0;
			for(var i=1; i<=uzunSayi;i++){
				
				if(i==1){
					$(this.div+" #ilkBasamak"+i).delay(hizB).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
					$(this.div+" #ikinciBasamak"+i).delay(hizB).animate({color:"#FF6600"},hizA);	
				}
				else{
					var oduncBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10);
					var ilkBasamak=parseInt($(this.div+" #ilkBasamak"+i).html(),10);
					var odunctenSonraBasamak=parseInt($(this.div+" #odunctenSonraBasamak"+i).html(),10);
					console.log("OB: "+oduncBasamak+", İB: "+ilkBasamak)
					if(ilkBasamak==oduncBasamak)
						$(this.div+" #ilkBasamak"+i).delay(hizB*i*3+2000).animate({color:"#FF6600"},hizA);
					$(this.div+" #ikinciBasamak"+i).delay(hizB*i*3+2000).animate({color:"#FF6600"},hizA);
					$(this.div+" #odunc #oduncBasamak"+(i)).delay(hizB).animate({ color:"#FF6600"},hizA);	
					
					
					
				}
				
				
				
				var ustBasamak=parseInt($(this.div+" #odunc #oduncBasamak"+i).html(),10)||0;
				var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10)||0;
				var basamakToplamlar=ustBasamak-altBasamak;
				console.log("i: "+i);
				
				var araBasamak=0;
				var oduncAlma=new Array();
				
				
				if(ustBasamak<altBasamak){
					for(var j=0; i<this.cikan1.toString().length; j++){
						
						if(araBasamak>altBasamak)
						//if(j>3)
							break;
						else{
							
							var alinacakBasamak=$(this.div+" #ilkBasamak"+(i+j)).html();
							console.log("Alınacak Basamak"+alinacakBasamak);
							
							oduncAlma.unshift(alinacakBasamak.toString());
							console.log("Ödünç Alma: "+oduncAlma);
							
							araBasamak=oduncAlma.join("");
							console.log("Ara basamak: "+araBasamak);
						}
					}
						
					var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
					console.log("Ödünç Alınan Sayı"+oduncAlinanSayi);
					oduncAlinanSayi=(parseInt(oduncAlinanSayi,10)-1).toString();
					for(var m=1; m<=oduncAlinanSayi.length;m++){
						var ilgiliBasamak=oduncAlinanSayi.charAt(oduncAlinanSayi.length-m);
						$(this.div+" #odunc #oduncBasamak"+(i+m)).html(ilgiliBasamak);
						
						console.log("ilgili basamak"+ilgiliBasamak);
						
						//$(this.div+" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
						$(this.div+" #odunc #oduncBasamak"+(i)).delay(hizB*i*3.5).animate({ bottom:"30px"},hizA).delay(hizB*m*2);
						$(this.div+" #odunc #oduncBasamak"+(i+m)).delay(hizB*i*3.5).animate({opacity:"1", bottom:"30px"},hizA).delay(hizB*m*2);
					}
					
					$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).html("1"+$(this.div+" #odunc #oduncBasamak"+i).html());
					$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).delay(hizB*i*3.5).animate({opacity:"1", bottom:"60px", color:"#FF6600"},hizA).delay(hizB+1000).animate({opacity:"0"},hizA);
					
					$(this.div+" #ilkBasamak"+i).delay(hizB/10).animate({color:"#000000"},hizA);
					$(this.div+" #ikinciBasamak"+i).delay(hizB+1500).animate({color:"#000000"},hizA);
					
					
					var araSonuc=parseInt(araBasamak,10)-altBasamak;
					console.log("Ara Sonuc: "+araSonuc);
					
					/*if(araSonuc.toString().length==1)
						$(this.div+" #sonuc #sonucBasamak"+i).html(araSonuc.toString());
					else
						$(this.div+" #sonuc #sonucBasamak"+i).html(araSonuc.toString().charAt(1));*/
					
					$(this.div+" #sonuc #sonucBasamak"+i).html(araSonuc.toString().charAt(araSonuc.toString().length-1));
					
					$(this.div+" #sonuc #sonucBasamak"+i).delay(hizB*i*4+1000).animate({opacity:"1"},hizA);					
					oduncAlindimi=1;
				}
				else{
					
					console.log("odunç Alımı: "+oduncAlindimi);
					var id=this.sonuc.toString().length-i;
					console.log("elseye giriyor");
					console.log("sonuc: "+basamakToplamlar.toString().charAt(0));
					//$(this.div+" #odunc #oduncBasamak"+(i+1)).html(basamakToplamlar.toString().charAt(0));
					
					$(this.div+" #sonuc #sonucBasamak"+i).html(this.sonuc.toString().charAt(id));
					//$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString().charAt(1));
					
					//$(this.div+" #odunc #oduncBasamak"+(i)).delay(hizB*i*3.5).animate({ bottom:"30px"},hizA);
					
					if(oduncAlindimi==1){
						console.log("odunç alınımdan dolayı ife giriyor");
						$(this.div+" #sonuc #sonucBasamak"+i).delay(hizB*i*3.5+2500).animate({opacity:"1"},hizA);
						console.log("i: "+i+", lenght: "+this.sonuc.toString().length+", "+"basamakToplamlar:"+basamakToplamlar);
						oduncAlindimi=0;
					}
					else{
					$(this.div+" #sonuc #sonucBasamak"+i).delay(hizB*i*4).animate({opacity:"1"},hizA);
					console.log("i: "+i+", lenght: "+this.sonuc.toString().length+", "+"basamakToplamlar:"+basamakToplamlar);
					}
					
					$(this.div+" #ikinciBasamak"+i).delay(hizB).animate({color:"#000000"},hizA);
					$(this.div+" #ilkBasamak"+i).delay(hizB/2).animate({color:"#000000"},hizA);
					if(i==(this.sonuc.toString().length+1) && basamakToplamlar==0 ){
						console.log("sonn basamak ife  girdi");
						$(this.div+" #sonuc #sonucBasamak"+i).html("0").delay(hizB).animate({opacity:"0"},hizA);
						
					}
					
					
					
				}
				
				$(this.div+" #odunc #oduncBasamak"+(i)).delay(hizB).animate({opacity:"0"},hizA);
			}
		}
}