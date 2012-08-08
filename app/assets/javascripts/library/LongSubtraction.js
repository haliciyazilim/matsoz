function LongSubtraction(cikan1, cikan2, div){
        this.cikan1=parseInt(cikan1,10);
		this.cikan2=parseInt(cikan2,10);
		this.sonuc=this.cikan1-cikan2;
        if(typeof div == "string" || typeof div == "number")
        	this.div="#"+div;
		else
            this.div = div;
        this.fontSize = $(this.div).css('font-size') || '30px';
        console.log(this.div);
		var sayilarFadeInRenk="#FF6600";
		var sayilarFadeOutRenk="#000000";
		var oduncKontrolSayiRengi="#878787";
		this.doldur=function(){
	
		$(this.div).append("<div id='cikan1' class='sonuc'>");
		$(" #cikan1",this.div)
			.css("top","10px").html();
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.cikan1.toString().length;i++){
			var id=this.cikan1.toString().length-i
			$(" #cikan1",this.div).append("<span id='ilkBasamak"+id+"'>");
			$(" #cikan1 #ilkBasamak"+id,this.div).html(this.cikan1.toString().charAt(i));
			$(" #cikan1 #ilkBasamak"+id,this.div).addClass("ilkBasamakTek");
		}
		$(this.div).append("<div id='cikan2' class='sonuc'>");
			$(" #cikan2",this.div)
			.css("top","50px").html();
        // ustteki divi dolduruyoruz.			
		for(var i=0;i<this.cikan2.toString().length;i++){
			var id=this.cikan2.toString().length-i
			$(" #cikan2",this.div).append("<span id='ikinciBasamak"+id+"'>");
			$(" #cikan2 #ikinciBasamak"+id,this.div).html(this.cikan2.toString().charAt(i));
			$(" #cikan2 #ikinciBasamak"+id,this.div).addClass("ikinciBasamakTek");
		}
		$(this.div).append("<div id='cikarmaIslemi'>");
		$(" #cikarmaIslemi",this.div).css("width","120px")
			.css("text-align","left")
			.css("height","30px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize)
			.css("border-bottom","solid 2px black")
			.css("top","60px")
			.html("-");
		$(" .sonuc",this.div).css("width","100px")
			.css("text-align","right")
			.css("height","30px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize);
			//.css("border","solid 1px black");
			
		$(this.div).append("<div id='sonuc' class='sonuc'>");
			$(" #sonuc",this.div)
			.css("top","100px").html();
		
		//odunc basamakları
		$(this.div).append("<div id='odunc' class='sonuc'>");
		$(" #odunc",this.div)
			.css("top","10px").html();
		
		//OduncAldiktanSonra basamakları
		//odunc basamakları
		$(this.div).append("<div id='odunctenSonra' class='sonuc'>");
		$(" #odunctenSonra",this.div)
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
			$(" #sonuc",this.div).append("<span id='sonucBasamak"+id+"'>");
			$(" #sonuc #sonucBasamak"+id,this.div).html(icerik);
			$(" #sonuc #sonucBasamak"+id,this.div).addClass("sonucBasamakTek");
		}
		for(var i=0; i<this.cikan1.toString().length; i++){
			var id=this.cikan1.toString().length-i;
			$(" #odunc",this.div).append("<span id='oduncBasamak"+id+"'>");
			//$(" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(" #odunc #oduncBasamak"+id,this.div).addClass("oduncBasamakTek");
			var right=(9*id*2-20+i)+"px";
			$(" #odunc #oduncBasamak"+id,this.div).html(this.cikan1.toString().charAt(i)).css("right",right); //icerik cikan1 ile aynı yapılıyor. daha sonra buna göre kontrol edilecek.
			
			$(" #odunctenSonra",this.div).append("<span id='odunctenSonraBasamak"+id+"'>");
			//$(" #sonuc #sonucBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(" #odunctenSonra #odunctenSonraBasamak"+id,this.div).addClass("oduncBasamakTek");
			var right=(9*id*2-20+i)+"px";
			$(" #odunctenSonra #odunctenSonraBasamak"+id,this.div).html(this.cikan1.toString().charAt(i)).css("right",right); //icerik cikan1 ile aynı yapılıyor. daha sonra buna göre kontrol edilecek.
		}
		
		$(" #cikan1 #ilkBasamak4"+","+" #cikan2 #ikinciBasamak4"+","+" #odunctenSonra #odunctenSonraBasamak4"+","+" #sonuc #sonucBasamak4",this.div).css("margin-right","15px");
		$(" #odunc #oduncBasamak4",this.div).css("right","67px");
		$(" #odunc #oduncBasamak5",this.div).css("right","83px");
		
		$(" .sonucBasamakTek",this.div).css("opacity","0");
		$(" .oduncBasamakTek",this.div).css("opacity","0").css("position","absolute");
		
		$(" .sonuc",this.div).css("width","100px")
			.css("text-align","right")
			.css("height","30px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize)
			.css("z-index","4");;
			//.css("border","solid 1px black");
		}
		this.basla=function(hizB,hizA){
			this.hizB=hizB;
			this.hizA=hizA;
        	var sayac=0;
//			console.log("ilk Sayaç: "+sayac);
			var uzunSayi=this.cikan1.toString().length>this.cikan2.toString().length==true?this.cikan1.toString().length:this.cikan2.toString().length;
//			console.log("uzunsayi: "+uzunSayi);
					
			for(var i=1; i<=uzunSayi;i++){
				
				var oduncBasamak=parseInt($(" #oduncBasamak"+i,this.div).html(),10);
				var odunctenSonraBasamak=parseInt($(" #odunctenSonraBasamak"+i,this.div).html(),10);
				var ilkBasamak=parseInt($(" #ilkBasamak"+i,this.div).html(),10);
				var ikinciBasamak=parseInt($(" #ikinciBasamak"+i,this.div).html(),10);
				var basamakToplamlar=oduncBasamak-ikinciBasamak;
				
				if(oduncBasamak==ilkBasamak){ //Ödünç basamağı ile ilk basamak aynı mı? 
//					console.log("*****************************************Eşit");
//					console.log("Sayaç: "+sayac)
					if(oduncBasamak>=ikinciBasamak){
//						console.log("*************************Eşit Odünc Büyük");
//						console.log("ÖdünçBasamak: "+oduncBasamak);
//						console.log("İkinci Basamak: "+ikinciBasamak);
						

						$(" #ilkBasamak"+i,this.div).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
						
						$(" #ikinciBasamak"+i,this.div).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
									
						$(" #sonuc #sonucBasamak"+i,this.div).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
						/*console.log("i: "+i+", sonuç uzunluğu: "+(this.sonuc.toString().length)+", basamak Toplamlar: "+basamakToplamlar);
								if(i==(this.sonuc.toString().length) && basamakToplamlar==0 ){
									console.log("sonn basamak ife  girdi");
									$(" #sonuc #sonucBasamak"+i).html("0").delay(this.hizB).animate({opacity:"0"},hizA);
									
								}*/
						sayac=sayac+this.hizB+this.hizA;
//						console.log("Sayaç hesap 1: "+sayac)
					}
					else if(oduncBasamak<ikinciBasamak){
					//	console.log("*********************eşit Odünc küçük");
                    //	console.log("Sayaç: "+sayac)
					//	console.log("ÖdünçBasamak: "+oduncBasamak);
					//	console.log("İkinci Basamak: "+ikinciBasamak);
						
						var araBasamak=0;
						var oduncAlma=new Array();
						
						var ustBasamak=parseInt($(" #oduncBasamak"+i,this.div).html(),10)||0;
						var altBasamak=parseInt($(" #iksinciBasamak"+i,this.div).html(),10)||0;
						var basamakToplamlar=ustBasamak-altBasamak;
//						console.log("i: "+i);
						
						if(ustBasamak<altBasamak){
							for(var j=0; j<this.cikan1.toString().length; j++){
								if(araBasamak>altBasamak)
									break;
								else{
							
									var alinacakBasamak=$(" #ilkBasamak"+(i+j),this.div).html(); // bir önceki basamağa alıyoruz. 
									
									//$(" #ilkBasamak"+(i+j)).css("color",oduncKontrolSayiRengi);
									$(" #ilkBasamak"+(i+j),this.div).delay(sayac).animate({color:oduncKontrolSayiRengi},this.hizA).delay(this.hizB*2).animate({color:sayilarFadeOutRenk},this.hizA); // grileşme
									
//									console.log("Alinacak Basamak: "+alinacakBasamak);
									
									oduncAlma.unshift(alinacakBasamak.toString()); // diziye atıyoruz.
//									console.log("Ödünç Alma: "+oduncAlma);
									
									araBasamak=oduncAlma.join("");	// sayı haline getiriyoruz.
//									console.log("Ara basamak: "+araBasamak);
								}
								
							}
							sayac=sayac+this.hizA+this.hizB; //Grileşmeden ötürü yapılan değişim.
//							console.log("Sayaç Grileştirme: "+sayac)
							var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
//							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							oduncAldiktanSonrakiSayi=(parseInt(oduncAlinanSayi,10)-1).toString(); // Ödünç alımı gerçekleştikten sonra sayının son hali.
//							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							
							
							
							// Ödünç alımı gerçekleştikten sayı rakamlarının basamakların yerleştirilmesi.
							
							for(var m=1; m<=oduncAldiktanSonrakiSayi.length;m++){

								var ilgiliBasamak=oduncAldiktanSonrakiSayi.charAt(oduncAldiktanSonrakiSayi.length-m);
								$(" #odunc #oduncBasamak"+(i+m),this.div).html(ilgiliBasamak);
								
//								console.log("ilgili basamak"+ilgiliBasamak);
								
								//$(" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
								//$(" #odunc #oduncBasamak"+(i)).delay(sayac).animate({ bottom:"30px"},hizA).delay(hizB).animate({opacity:"0"},hizA);;;
								$(" #odunc #oduncBasamak"+(i+m),this.div).delay(sayac).animate({opacity:"1", bottom:"30px"},this.hizA);
								
								
								
								
								
							}
							$(" #odunctenSonra #odunctenSonraBasamak"+(i),this.div).html("1"+$(" #odunc #oduncBasamak"+(i),this.div).html());
							$(" #odunctenSonra #odunctenSonraBasamak"+(i),this.div).delay(sayac).animate({opacity:"1", bottom:"60px", color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({opacity:"0"},this.hizA);
					
							$(" #ikinciBasamak"+(i),this.div).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
							
							$(" #odunc #oduncBasamak"+(i),this.div).delay(sayac).animate({opacity:"0"},hizA);
								//$(" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
								
								$(" #sonuc #sonucBasamak"+i,this.div).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
							sayac=sayac+this.hizA*2+this.hizB;
//							console.log("Sayaç hesap 3: "+sayac)
						}
				
					}
				}
				
				if(oduncBasamak!=ilkBasamak){ //Ödünç basamağı ile ilk basamak aynı mı? 
//					console.log("*****************************************Eşit değil");
//					console.log("Sayaç: "+sayac)
					
					if(oduncBasamak>=ikinciBasamak){
//						console.log("*****************eşit değil Odünc Büyük");
//						console.log("ÖdünçBasamak: "+oduncBasamak);
						console.log("İkinci Basamak: "+ikinciBasamak);
						
//						console.log("yanan ödünç basamaği: "+i+"iceriği"+$(" #oduncBasamak"+i,this.div).html())

						if (oduncAlinanSayi.lenght>2)
						$(" #oduncBasamak"+i,this.div).delay((sayac-(this.hizB*4))).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA)).delay(this.hizB).animate({opacity:"0"},this.hizA);
						else
							$(" #oduncBasamak"+i,this.div).delay((this.hizB)).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA)).delay(this.hizB).animate({opacity:"0"},this.hizA);
						$(" #ikinciBasamak"+i,this.div).delay(sayac-this.hizB).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
									
						$(" #sonuc #sonucBasamak"+i,this.div).delay((sayac+this.hizB)).animate({opacity:"1"},this.hizA);	
						
						sayac=sayac+this.hizA*2+this.hizB;
//						console.log("Sayaç hesap 4: "+sayac)
						
						
					}
					
					else if(oduncBasamak<ikinciBasamak){
						
//						console.log("***************esşit değil Odünc küçük");
//						console.log("ÖdünçBasamak: "+oduncBasamak);
//						console.log("İkinci Basamak: "+ikinciBasamak);
//						console.log("Sayaç: "+sayac)
						
						var araBasamak=0;
						var oduncAlma=new Array();
						
						var ustBasamak=parseInt($(" #oduncBasamak"+i,this.div).html(),10)||0;
						var altBasamak=parseInt($(" #ikinciBasamak"+i,this.div).html(),10)||0;
						var basamakToplamlar=ustBasamak-altBasamak;
//						console.log("i: "+i);
						
						if(ustBasamak<altBasamak){
							for(var j=0; i<this.cikan1.toString().length; j++){
								if(araBasamak>altBasamak)
									break;
								else{
							
									var alinacakBasamak=$(" #ilkBasamak"+(i+j),this.div).html(); // bir önceki basamağa alıyoruz. 
									
									//$(" #ilkBasamak"+(i+j)).css("color",oduncKontrolSayiRengi);
									$(" #ilkBasamak"+(i+j),this.div).delay(sayac).animate({color:oduncKontrolSayiRengi},this.hizA);
									
//									console.log("Alinacak Basamak: "+alinacakBasamak);
									
									oduncAlma.unshift(alinacakBasamak.toString()); // diziye atıyoruz.
//									console.log("Ödünç Alma: "+oduncAlma);
									
									araBasamak=oduncAlma.join("");	// sayı haline getiriyoruz.
//									console.log("Ara basamak: "+araBasamak);
								}
								
							}
							sayac=sayac+this.hizA+this.hizB; //Grileşmeden ötürü yapılan değişim.
//							console.log("Sayaç hesap 5: "+sayac)
							var oduncAlinanSayi=araBasamak.toString().substring(0,araBasamak.toString().length-1);
//							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							oduncAldiktanSonrakiSayi=(parseInt(oduncAlinanSayi,10)-1).toString(); // Ödünç alımı gerçekleştikten sonra sayının son hali.
//							console.log("Ödünç Alinan Sayi"+oduncAlinanSayi);
							
							
							
							// Ödünç alımı gerçekleştikten sayı rakamlarının basamakların yerleştirilmesi.

							for(var m=1; m<=oduncAldiktanSonrakiSayi.length;m++){
                                var ilgiliBasamak=oduncAldiktanSonrakiSayi.charAt(oduncAldiktanSonrakiSayi.length-m);
								$(" #odunc #oduncBasamak"+(i+m),this.div).html(ilgiliBasamak);
								
//								console.log("ilgili basamak"+ilgiliBasamak);
								
								//$(" #ilkBasamak"+(i+m)).delay(hizB*i*3).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
								//$(" #odunc #oduncBasamak"+(i)).delay(sayac).animate({ bottom:"30px"},hizA).delay(hizB).animate({opacity:"0"},hizA);;;
								$(" #odunc #oduncBasamak"+(i+m),this.div).delay(sayac).animate({opacity:"1", bottom:"30px"},this.hizA);
							}
							$(" #odunctenSonra #odunctenSonraBasamak"+(i),this.div).html("1"+$(" #odunc #oduncBasamak"+(i),this.div).html());
							$(" #odunctenSonra #odunctenSonraBasamak"+(i),this.div).delay(sayac).animate({opacity:"1", bottom:"60px", color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({opacity:"0"},this.hizA);
                            $(" #ikinciBasamak"+(i),this.div).delay(sayac).animate({color:sayilarFadeInRenk},(this.hizA)).delay((this.hizB)).animate({color:sayilarFadeOutRenk},(this.hizA));
							$(" #odunc #oduncBasamak"+(i),this.div).delay(sayac-(this.hizA*2+this.hizB)).animate({opacity:"0"},hizA);
								//$(" #sonuc #sonucBasamak"+i).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
							$(" #sonuc #sonucBasamak"+i,this.div).delay((sayac+this.hizB)).animate({opacity:"1"},hizA);	
							sayac=sayac+this.hizA*2+this.hizB;
//							console.log("Sayaç hesap 6: "+sayac)

						}
					}
				}
			}
//			console.log("selma");
			for(var i=5; i>0;i--){
				if($(" #sonuc #sonucBasamak"+i,this.div).html()=="0" ){
//					console.log("sonn basamak ife  girdi");
					$(" #sonuc #sonucBasamak"+i,this.div).delay(this.hizB).animate({opacity:"0"},this.hizA);
				}
				else
					break;
			}
			
		}
}
