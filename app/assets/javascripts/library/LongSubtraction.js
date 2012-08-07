function LongSubtraction(cikan1, cikan2, div){
	
		this.cikan1=parseInt(cikan1,10);
		this.cikan2=parseInt(cikan2,10);
		this.sonuc=this.cikan1-cikan2;

		this.div="#"+div;
		
		var sayilarFadeInRenk="#FF6600";
		var sayilarFadeOutRenk="#000000";
		var oduncKontrolSayiRengi="#878787";
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
		
		
		var fark=this.cikan1.toString().length-this.sonuc.toString().length;
		if(fark!=0){
			var eklenecek="";
			for(var i=0;i<fark;i++)
				eklenecek+="0";
			this.sonuc=eklenecek+this.sonuc.toString();
			
		}
		for(var i=0;i<this.cikan1.toString().length;i++){
			var id=this.cikan1.toString().length-i;
			var icerik=this.sonuc.toString().charAt(i);
			$(this.div+" #sonuc",container).append("<span id='sonucBasamak"+id+"'>");
			$(this.div+" #sonuc #sonucBasamak"+id).html(icerik);
			
			
			
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
			
			var sayac=0;
			console.log("ilk Sayaç: "+sayac);
			var uzunSayi=this.cikan1.toString().length>this.cikan2.toString().length==true?this.cikan1.toString().length:this.cikan2.toString().length;
			console.log("uzunsayi: "+uzunSayi);
					
			for(var i=1; i<=uzunSayi;i++){
				
				var oduncBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10);
				var odunctenSonraBasamak=parseInt($(this.div+" #odunctenSonraBasamak"+i).html(),10);
				var ilkBasamak=parseInt($(this.div+" #ilkBasamak"+i).html(),10);
				var ikinciBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10);
				var basamakToplamlar=oduncBasamak-ikinciBasamak;
				
				if(oduncBasamak==ilkBasamak){ //Ödünç basamağı ile ilk basamak aynı mı? 
					console.log("*****************************************Eşit değil");
					console.log("Sayaç: "+sayac)
					if(oduncBasamak>=ikinciBasamak){
						console.log("*************************Eşit Odünc Büyük");
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						

						$(this.div+" #ilkBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
						
						$(this.div+" #ikinciBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
									
						$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
						/*console.log("i: "+i+", sonuç uzunluğu: "+(this.sonuc.toString().length)+", basamak Toplamlar: "+basamakToplamlar);
								if(i==(this.sonuc.toString().length) && basamakToplamlar==0 ){
									console.log("sonn basamak ife  girdi");
									$(this.div+" #sonuc #sonucBasamak"+i).html("0").delay(this.hizB).animate({opacity:"0"},hizA);
									
								}*/
						sayac=sayac+this.hizB+this.hizA;
						console.log("Sayaç hesap 1: "+sayac)
						
						
					}
					
					else if(oduncBasamak<ikinciBasamak){
						
						console.log("*********************eşit Odünc küçük");
						console.log("Sayaç: "+sayac)
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						
						var araBasamak=0;
						var oduncAlma=new Array();
						
						var ustBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10)||0;
						var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10)||0;
						var basamakToplamlar=ustBasamak-altBasamak;
						console.log("i: "+i);
						
						if(ustBasamak<altBasamak){
							for(var j=0; j<this.cikan1.toString().length; j++){
								if(araBasamak>altBasamak)
									break;
								else{
							
									var alinacakBasamak=$(this.div+" #ilkBasamak"+(i+j)).html(); // bir önceki basamağa alıyoruz. 
									
									//$(this.div+" #ilkBasamak"+(i+j)).css("color",oduncKontrolSayiRengi);
									$(this.div+" #ilkBasamak"+(i+j)).delay(sayac).animate({color:oduncKontrolSayiRengi},hizA).delay(hizB*2).animate({color:sayilarFadeOutRenk},hizA); // grileşme
									
									console.log("Alinacak Basamak: "+alinacakBasamak);
									
									oduncAlma.unshift(alinacakBasamak.toString()); // diziye atıyoruz.
									console.log("Ödünç Alma: "+oduncAlma);
									
									araBasamak=oduncAlma.join("");	// sayı haline getiriyoruz.
									console.log("Ara basamak: "+araBasamak);
								}
								
							}
							sayac=sayac+hizA+hizB; //Grileşmeden ötürü yapılan değişim.
							console.log("Sayaç hesap 2: "+sayac)
							var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							oduncAldiktanSonrakiSayi=(parseInt(oduncAlinanSayi,10)-1).toString(); // Ödünç alımı gerçekleştikten sonra sayının son hali.
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							
							
							
							// Ödünç alımı gerçekleştikten sayı rakamlarının basamakların yerleştirilmesi.
							for(var m=1; m<=oduncAldiktanSonrakiSayi.length;m++){
								var ilgiliBasamak=oduncAldiktanSonrakiSayi.charAt(oduncAldiktanSonrakiSayi.length-m);
								$(this.div+" #odunc #oduncBasamak"+(i+m)).html(ilgiliBasamak);
								
								console.log("ilgili basamak"+ilgiliBasamak);
								
								//$(this.div+" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
								//$(this.div+" #odunc #oduncBasamak"+(i)).delay(sayac).animate({ bottom:"30px"},hizA).delay(hizB).animate({opacity:"0"},hizA);;;
								$(this.div+" #odunc #oduncBasamak"+(i+m)).delay(sayac).animate({opacity:"1", bottom:"30px"},hizA).delay(hizB).animate({color: sayilarFadeInRenk},hizA).delay(hizB).animate({opacity:"0"},hizA);
								
								$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).html("1"+$(this.div+" #odunc #oduncBasamak"+i).html());
								$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).delay(sayac).animate({opacity:"1", bottom:"60px", color:sayilarFadeInRenk},hizA).delay(hizB).animate({opacity:"0"},hizA);
					
								$(this.div+" #ikinciBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
								
								//$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
								$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
								sayac=sayac+this.hizA*2+this.hizB;
								console.log("Sayaç hesap 3: "+sayac)
							}
						}
				
					}
				}
				
				if(oduncBasamak!=ilkBasamak){ //Ödünç basamağı ile ilk basamak aynı mı? 
					console.log("*****************************************Eşit değil");
					console.log("Sayaç: "+sayac)
					if(oduncBasamak>=ikinciBasamak){
						console.log("*****************eşit değil Odünc Büyük");
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						

						$(this.div+" #oduncBasamak"+i).delay((hizA+hizB)).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA)).delay(hizB).animate({opacity:"0"},hizA);

						$(this.div+" #ikinciBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
									
						$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
						
						sayac=sayac+this.hizA*2+this.hizB;
						console.log("Sayaç hesap 4: "+sayac)
						
						
					}
					
					else if(oduncBasamak<ikinciBasamak){
						
						console.log("***************esşit değil Odünc küçük");
						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						console.log("Sayaç: "+sayac)
						
						var araBasamak=0;
						var oduncAlma=new Array();
						
						var ustBasamak=parseInt($(this.div+" #oduncBasamak"+i).html(),10)||0;
						var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html(),10)||0;
						var basamakToplamlar=ustBasamak-altBasamak;
						console.log("i: "+i);
						
						if(ustBasamak<altBasamak){
							for(var j=0; i<this.cikan1.toString().length; j++){
								if(araBasamak>altBasamak)
									break;
								else{
							
									var alinacakBasamak=$(this.div+" #ilkBasamak"+(i+j)).html(); // bir önceki basamağa alıyoruz. 
									
									//$(this.div+" #ilkBasamak"+(i+j)).css("color",oduncKontrolSayiRengi);
									$(this.div+" #ilkBasamak"+(i+j)).delay(sayac).animate({color:oduncKontrolSayiRengi},hizA);
									
									console.log("Alinacak Basamak: "+alinacakBasamak);
									
									oduncAlma.unshift(alinacakBasamak.toString()); // diziye atıyoruz.
									console.log("Ödünç Alma: "+oduncAlma);
									
									araBasamak=oduncAlma.join("");	// sayı haline getiriyoruz.
									console.log("Ara basamak: "+araBasamak);
								}
								
							}
							sayac=sayac+hizA+hizB; //Grileşmeden ötürü yapılan değişim.
							console.log("Sayaç hesap 5: "+sayac)
							var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							oduncAldiktanSonrakiSayi=(parseInt(oduncAlinanSayi,10)-1).toString(); // Ödünç alımı gerçekleştikten sonra sayının son hali.
							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							
							
							
							// Ödünç alımı gerçekleştikten sayı rakamlarının basamakların yerleştirilmesi.
							for(var m=1; m<=oduncAldiktanSonrakiSayi.length;m++){
								var ilgiliBasamak=oduncAldiktanSonrakiSayi.charAt(oduncAldiktanSonrakiSayi.length-m);
								$(this.div+" #odunc #oduncBasamak"+(i+m)).html(ilgiliBasamak);
								
								console.log("ilgili basamak"+ilgiliBasamak);
								
								//$(this.div+" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
								//$(this.div+" #odunc #oduncBasamak"+(i)).delay(sayac).animate({ bottom:"30px"},hizA).delay(hizB).animate({opacity:"0"},hizA);;;
								$(this.div+" #odunc #oduncBasamak"+(i+m)).delay(sayac).animate({opacity:"1", bottom:"30px"},hizA).delay(hizB).animate({color: sayilarFadeInRenk},hizA).delay(hizB).animate({opacity:"0"},hizA);
								
								$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).html("1"+$(this.div+" #odunc #oduncBasamak"+i).html());
								$(this.div+" #odunctenSonra #odunctenSonraBasamak"+(i)).delay(sayac).animate({opacity:"1", bottom:"60px", color:sayilarFadeInRenk},hizA).delay(hizB).animate({opacity:"0"},hizA);
					
								$(this.div+" #ikinciBasamak"+i).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
								
								//$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
								$(this.div+" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
								sayac=sayac+this.hizA*2+this.hizB;
								console.log("Sayaç hesap 6: "+sayac)
							}
						}
				
					}
				}
			}
			console.log("selma");
			for(var i=5; i>0;i--){
				if($(this.div+" #sonuc #sonucBasamak"+i).html()=="0" ){
					console.log("sonn basamak ife  girdi");
					$(this.div+" #sonuc #sonucBasamak"+i).delay(hizB).animate({opacity:"0"},hizA);
				}
				else
					break;
			}
			
		}
}