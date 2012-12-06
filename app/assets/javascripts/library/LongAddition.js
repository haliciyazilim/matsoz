			
<<<<<<< HEAD
function LongAddition(ilkDeger, ikinciDeger, div,fontSize){
        
        
    this.ilk=ilkDeger.toString();
    this.ikinci=ikinciDeger.toString();
    console.log("ikinci değer: "+this.ikinci);
    console.log("İndex Of: "+this.ilk.indexOf("."));
    this.floatKontrolu=this.ilk.indexOf(".");
    if (this.floatKontrolu==-1){
        this.ilkDeger=parseInt(ilkDeger,10);
        this.ikinciDeger=parseInt(ikinciDeger,10);
    }

    else{
        var kesikIlk=this.ilk.split(".");
        var kesikIkinci=this.ikinci.split(".");
        console.log(kesikIlk);
        console.log(kesikIkinci);

        if(kesikIlk[1].length<kesikIkinci[1].length)
            kesikIlk[1]=kesikIlk[1]+"0";
        else if(kesikIlk[1].length>kesikIkinci[1].length)
            kesikIkinci[1]=kesikIkinci[1]+"0";
        console.log(kesikIlk);
        console.log(kesikIkinci);

        this.ilkDeger=(kesikIlk[0]+kesikIlk[1]);
        this.ikinciDeger=(kesikIkinci[0]+kesikIkinci[1]);

    }
        
       
        

    this.div="#"+div;

    this.sonuc=parseInt(this.ilkDeger,10)+parseInt(this.ikinciDeger,10);
    
    if($(this.div).css('color') != undefined)
        this.color = $(this.div).css('color');
    else
        this.color = '#000';
    
    this.fontSize=fontSize;

    if(this.fontSize==undefined)
        this.fontSize=30;
	
	this.doldur=function(){
                
                
		$(this.div,container).append("<div id='toplanan1' class='toplanan'>");
			$(this.div+" #toplanan1")
			.css("top",this.fontSize*10/30).html();
=======
function LongAddition(ilkDeger, ikinciDeger, div){
				
	this.ilkDeger=parseInt(ilkDeger,10);
	this.ikinciDeger=parseInt(ikinciDeger,10);

	this.div="#"+div;
	this.sonuc=this.ilkDeger+this.ikinciDeger;
	
	
	this.doldur=function(){
	
		$(this.div,container).append("<div id='toplanan1' class='toplanan'>");
			$(this.div+" #toplanan1")
			.css("top","10px").html();
>>>>>>> origin/abdullah-dev
		// ustteki divi dolduruyoruz.			
		for(var i=0;i<this.ilkDeger.toString().length;i++){
			var id=this.ilkDeger.toString().length-i
			$(this.div+" #toplanan1",container).append("<span id='ilkBasamak"+id+"'>");
			$(this.div+" #toplanan1 #ilkBasamak"+id).html(this.ilkDeger.toString().charAt(i));
			$(this.div+" #toplanan1 #ilkBasamak"+id).addClass("ilkBasamakTek");
			
		}
		
				
		$(this.div,container).append("<div id='toplanan2' class='toplanan'>");
			$(this.div+" #toplanan2")
<<<<<<< HEAD
			.css("top",this.fontSize*50/30).html();
=======
			.css("top","50px").html();
>>>>>>> origin/abdullah-dev

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
<<<<<<< HEAD
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30)
			.css("border-bottom","solid 2px black")
            .css('borderColor',this.color)
			.css("top",this.fontSize*60/30)
			.html("+");
		$(this.div+" .toplanan").css("width","100%")
			.css("text-align","right")
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30);
=======
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
>>>>>>> origin/abdullah-dev
			//.css("border","solid 1px black");
			
		$(this.div,container).append("<div id='toplam' class='toplanan'>");
			$(this.div+" #toplam")
<<<<<<< HEAD
			.css("top",this.fontSize*100/30).html();
=======
			.css("top","100px").html();
>>>>>>> origin/abdullah-dev
		
		//elde basamakları
		$(this.div,container).append("<div id='elde' class='toplanan'>");
		$(this.div+" #elde")
<<<<<<< HEAD
			.css("top",this.fontSize*100/30).html();
=======
			.css("top","100px").html();
>>>>>>> origin/abdullah-dev
		
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
<<<<<<< HEAD
				var right=this.fontSize*((9*id*2-20+i)+12)/30+"px";
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);//.css("width","30px").css("display","inline-block");;
			}
			else{
				var right=this.fontSize*(9*id*2-20+i)/30+"px";
=======
				var right=(9*id*2-20+i)+12+"px";
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);//.css("width","30px").css("display","inline-block");;
			}
			else{
				var right=(9*id*2-20+i)+"px";
>>>>>>> origin/abdullah-dev
				$(this.div+" #elde #eldeBasamak"+id).html(0).css("right",right);
				}
			
			
		}
		
		
			
			
		
		$(this.div+" #toplam .toplamBasamakTek").css("opacity","0");
		$(this.div+" #elde .eldeBasamakTek").css("opacity","0").css("position","absolute");
		
		
		$(this.div+" .toplanan").css("width","100%")
			.css("text-align","right")
<<<<<<< HEAD
			.css("height",this.fontSize*30/30)
			.css("margin","auto")
			.css("position","absolute")
            .css('color',this.color)
			//.css("bottom","20px")
			//.css("left","0")
			.css("right","0px")
			.css("font-size",this.fontSize*30/30)
			.css("z-index","4");
			//.css("border","solid 1px black");
		if(this.floatKontrolu==-1)
			$("#ilkBasamak3, #ikinciBasamak3, #toplamBasamak3, #eldeBasamak3").css("width",this.fontSize*30/30).css("display","inline-block");
		else{
                    
                        $("#ilkBasamak2, #ikinciBasamak2, #toplamBasamak2, #eldeBasamak2").css("width",this.fontSize*30/30).css("display","inline-block");
                        $(this.div+" #toplanan1",container).append("<div id='virgul1' class='virgul'>");
                        $(this.div+" #toplanan2",container).append("<div id='virgul2' class='virgul'>");
                        $(this.div+" #toplam",container).append("<div id='virgul3' class='virgul'>");
                        
                        $(this.div+ " .virgul").css("position","absolute").css("height",this.fontSize*30/30).css("right",this.fontSize*35/30).html(",");
                        $(this.div+" #virgul1").css("top","1px");
                        $(this.div+" #virgul2").css("top","1px");
                        $(this.div+" #virgul3").css("top","1px").css("opacity","0");
                }
	}
		this.basla=function(hizB,hizA,callback){
=======
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
>>>>>>> origin/abdullah-dev
			this.hizB=hizB;
			this.hizA=hizA;
			var elde=0;
			var uzunSayi=this.ilkDeger.toString().length>this.ikinciDeger.toString().length==true?this.ilkDeger.toString().length:this.ikinciDeger.toString().length;
			console.log("uzunsayi: "+uzunSayi);
			console.log("sonuc: "+this.sonuc);
			for(var i=1; i<=uzunSayi;i++){
<<<<<<< HEAD
				$(this.div+" #ilkBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:this.color},hizA);
				$(this.div+" #ikinciBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:this.color},hizA);
=======
				
				
				
				$(this.div+" #ilkBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
				$(this.div+" #ikinciBasamak"+i).delay(hizB*i*2).animate({color:"#FF6600"},hizA).delay(hizB).animate({color:"#000000"},hizA);
				
>>>>>>> origin/abdullah-dev
				var ustBasamak=parseInt($(this.div+" #ilkBasamak"+i).html())||0;
				var altBasamak=parseInt($(this.div+" #ikinciBasamak"+i).html())||0;
				var basamakToplamlar=parseInt(ustBasamak)+parseInt(altBasamak)+elde;
				console.log("i: "+i);
<<<<<<< HEAD
				if(basamakToplamlar>9 &&i!=uzunSayi){
					console.log("if");
					$(this.div+" #elde #eldeBasamak"+(i+1)).html(basamakToplamlar.toString().charAt(0));
					$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString().charAt(1));
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
                                        if(this.floatKontrolu!=-1 && i==2){
                                            $(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA).animate({bottom:this.fontSize*120/30, right:this.fontSize*48/30,color:"#8C1717"},hizA).delay(hizB).animate({opacity:"0"},hizA);
                                        }
					else{
                                            
                                        $(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA).animate({bottom:this.fontSize*120/30, color:"#8C1717"},hizA).delay(hizB).animate({opacity:"0"},hizA);
                                        }
					var elde=parseInt(basamakToplamlar.toString().charAt(0));
					console.log("sonuc_"+i+": "+this.sonuc.toString().charAt(i));
				}
				else if(i==uzunSayi){
					console.log("else if");
					$(this.div+" #toplam #toplamBasamak"+i).html(basamakToplamlar.toString());
=======
				
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
					
>>>>>>> origin/abdullah-dev
					$(this.div+" #toplam #toplamBasamak"+i).delay(hizB*i*2).animate({opacity:"1"},hizA);
					//$(this.div+" #elde #eldeBasamak"+(i+1)).delay(hizB*i*2).animate({opacity:"1"},hizA)
					//var elde=parseInt(basamakToplamlar.toString().charAt(0));
					console.log("sonuc_"+i+": "+this.sonuc.toString().charAt(i));
<<<<<<< HEAD
                                        $(this.div +" #virgul3").delay(hizB*i*2+1000).animate({opacity:"1"},1000,callback)
					
				}
=======
					

					
				
				}
				
				
>>>>>>> origin/abdullah-dev
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
					
<<<<<<< HEAD
};
=======
};
>>>>>>> origin/abdullah-dev
