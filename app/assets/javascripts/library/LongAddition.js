			
function LongAddition(ilkDeger, ikinciDeger, div){
				
	this.ilkDeger=parseInt(ilkDeger,10);
	this.ikinciDeger=parseInt(ikinciDeger,10);

	this.div="#"+div;
	this.sonuc=this.ilkDeger+this.ikinciDeger;
	
	
	this.doldur=function(){
	
		$(this.div,container).append("<div id='toplanan1' class='toplanan'>");
			$(this.div+" #toplanan1")
			.css("top","10px").html();
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.ilkDeger.toString().length;i++){
			var id=this.ilkDeger.toString().length-i
			$(this.div+" #toplanan1",container).append("<span id='ilkBasamak"+id+"'>");
			$(this.div+" #toplanan1 #ilkBasamak"+id).html(this.ilkDeger.toString().charAt(i));
			$(this.div+" #toplanan1 #ilkBasamak"+id).addClass("ilkBasamakTek");
			
		}
		
				
		$(this.div,container).append("<div id='toplanan2' class='toplanan'>");
			$(this.div+" #toplanan2")
			.css("top","50px").html();

		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.ikinciDeger.toString().length;i++){
			var id=this.ikinciDeger.toString().length-i
			$(this.div+" #toplanan2",container).append("<span id='ikinciBasamak"+id+"'>");
			$(this.div+" #toplanan2 #ikinciBasamak"+id).html(this.ikinciDeger.toString().charAt(i));
			$(this.div+" #toplanan2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
			
		}
		
		//$(this.div+" #toplanan1 #ikinciBasamak4").css("margin-right","15px");
		//$(this.div+" #toplanan2 #ikinciBasamak4").css("margin-right","15px");
			
		$(this.div,container).append("<div id='toplamaIsareti'>");
		$(this.div+" #toplamaIsareti").css("width","100%")
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
			.html("+");
		$(this.div+" .toplanan").css("width","100%")
			.css("text-align","right")
			.css("height","30px")
			.css("margin","auto")
			.css("position","absolute")
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size","30px");
			//.css("border","solid 1px black");
			
		$(this.div,container).append("<div id='toplam' class='toplanan'>");
			$(this.div+" #toplam")
			.css("top","100px").html();
		
		//elde basamakları
		$(this.div,container).append("<div id='elde' class='toplanan'>");
		$(this.div+" #elde")
			.css("top","100px").html();
		
		// toplam divini dolduruyoruz.			
		for(var i=0;i<this.sonuc.toString().length;i++){
			var id=this.sonuc.toString().length-i
			$(this.div+" #toplam",container).append("<span id='toplamBasamak"+id+"'>");
			//$(this.div+" #toplam #toplamBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #toplam #toplamBasamak"+id).addClass("toplamBasamakTek");
			
			$(this.div+" #elde",container).append("<span id='eldeBasamak"+id+"'>");
			//$(this.div+" #toplam #toplamBasamak"+id).html(this.sonuc.toString().charAt(i));
			$(this.div+" #elde #eldeBasamak"+id).addClass("eldeBasamakTek");
			
			
			
			if(id>3){
				var right=(9*id*2-20+i)+12+"px";
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);//.css("width","30px").css("display","inline-block");;
			}
			else{
				var right=(9*id*2-20+i)+"px";
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);
				}
			
			
		}
		
		
			
			
		
		$(this.div+" #toplam .toplamBasamakTek").css("opacity","0");
		$(this.div+" #elde .eldeBasamakTek").css("opacity","0").css("position","absolute");
		
		
		$(this.div+" .toplanan").css("width","100%")
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
		
			$("#ilkBasamak3, #ikinciBasamak3, #toplamBasamak3, #eldeBasamak3").css("width","30px").css("display","inline-block");
		
		}
			
		this.basla=function(hizB,hizA){
			this.hizB=hizB;
			this.hizA=hizA;
			var elde=0;
			var uzunSayi=this.ilkDeger.toString().length>this.ikinciDeger.toString().length==true?this.ilkDeger.toString().length:this.ikinciDeger.toString().length;
			console.log("uzunsayi: "+uzunSayi);
			console.log("sonuc: "+this.sonuc);
			for(var i=1; i<=uzunSayi;i++){
				
				
				
				$(this.div+" #ilkBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
				$(this.div+" #ikinciBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
				
				var ustBasamak=parseInt($(this.div+" #ilkBasamak"+i).html())||0;
				var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html())||0;
				var basamakToplamlar=parseInt(ustBasamak)+parseInt(altBasamak)+elde;
				console.log("i: "+i);
				
				if(basamakToplamlar>9 &&i!=uzunSayi){
					
					console.log("if");
					$(this.div+" #elde #eldeBasamak"+(i+1)).html(basamakToplamlar.toString().charAt(0));
					$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString().charAt(1));
					
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
					$(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA).animate({bottom:"120px", color:"#8C1717"},hizA).delay(hizB).animate({opacity:"0"},hizA);
					var elde=parseInt(basamakToplamlar.toString().charAt(0));
					console.log("sonuc_"+i+": "+this.sonuc.toString().charAt(i));
					
	
					
				
				}
				
				else if(i==uzunSayi){
					
					console.log("else if");
					
					$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString());
					
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
					//$(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA)
					//var elde=parseInt(basamakToplamlar.toString().charAt(0));
					console.log("sonuc_"+i+": "+this.sonuc.toString().charAt(i));
					

					
				
				}
				
				
				else{
					var id=this.sonuc.toString().length-i
					console.log("elseye giriyor");
					console.log("ilkbasamak: "+basamakToplamlar.toString().charAt(0));
					console.log("sonuc basamak: "+this.sonuc.toString().charAt(id));
					//$(this.div+" #elde #eldeBasamak"+(i+1)).html(basamakToplamlar.toString().charAt(0));
					
					$(this.div+" #toplam #toplamBasamak"+i).html(this.sonuc.toString().charAt(id));
					//$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString().charAt(1));
					
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
					elde=0;
				}
			}
			
		
	}
					
};