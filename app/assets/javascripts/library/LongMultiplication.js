function LongMultiplication(carpim1, carpim2, div){
    this.carpim1=carpim1;
    this.carpim2=carpim2;
    this.div="#"+div;

this.doldur=function(){
        $(this.div,container).append("<div id='carpim1' class='carpilan'>");
	$(this.div+" #carpim1")
            .css("top","10px").html();
	
        // ustteki divi dolduruyoruz.			
        for (var i=0; i<this.carpim1.toString().length;i++){
            var id=this.carpim1.toString().length-i
            $(this.div+" #carpim1",container).append("<span id='ilkBasamak"+id+"'>");
            $(this.div+" #carpim1 #ilkBasamak"+id).html(this.carpim1.toString().charAt(i));
            $(this.div+" #carpim1 #ilkBasamak"+id).addClass("ilkBasamakTek");
	}
	
        $(this.div,container).append("<div id='carpim2' class='carpilan'>");
            $(this.div+" #carpim2")
                .css("top","40px").html();

        // ustteki divi dolduruyoruz.			
	for(var i=0;i<this.carpim2.toString().length;i++){
            var id=this.carpim2.toString().length-i
            $(this.div+" #carpim2",container).append("<span id='ikinciBasamak"+id+"'>");
            $(this.div+" #carpim2 #ikinciBasamak"+id).html(this.carpim2.toString().charAt(i));
            $(this.div+" #carpim2 #ikinciBasamak"+id).addClass("ikinciBasamakTek");
	}
			
	$(this.div,container).append("<div id='isaretCarpma'>");
	$(this.div+" #isaretCarpma").css("width","80px")
            .css("text-align","left")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size","30px")
            .css("border-bottom","solid 2px black")
            .css("top","40px")
            .html("x");
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size","30px");
	
       /*
       $(this.div,container).append("<div id='sonuc' class='carpilan'>");
            $(this.div+" #sonuc").css("top","100px").html();
		
	$(this.div+" .carpilan").css("width","100%")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","0px")
            .css("font-size","30px")
            .css("z-index","4");
       */
        
        for(var i=0; i<this.carpim2.toString().length;i++){
		var top=(75+25*i);
		var right=(i*16);
		var id=i+1;
		
		$(this.div,container).append("<div id='carpmaSonuc"+id+"'/>");	
		$(this.div+" #carpmaSonuc"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height","30px")
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size","30px")
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #carpmaSonuc"+id,container).append("<span id='carpmaSonuc"+id+"Basamak"+j+"'>");
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).html(i);
                $(this.div+" #carpmaSonuc"+id+" #carpmaSonuc"+id+"Basamak"+j).addClass("basamakTek");
                
                }
                
                $(this.div,container).append("<div id='elde"+id+"'/>");	
		$(this.div+" #elde"+id).css("width","100px")
                    .css("text-align","right")
                    .css("height","30px")
                    .css("margin","auto")
                    .css("position","absolute")
                    .css("right",right)
                    .css("font-size","30px")
                    .css("top",top+"px")
                    .css("z-index","5");
                
                for(var j=4;j>=1;j--){
                
                $(this.div+" #elde"+id,container).append("<span id='elde"+id+"Basamak"+j+"'>");
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).html(0);
                $(this.div+" #elde"+id+" #elde"+id+"Basamak"+j).addClass("eldeBasamakTek");
                
                }	
                
		if(i==(carpim2.toString().length-1)){
                    $(this.div,container).append("<div id='isaretToplama'>");
                    $(this.div+" #isaretToplama").css("width",80+i*20+"px")
                        .css("text-align","left")
                        .css("height","30px")
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size","30px")
                        .css("border-bottom","solid 2px black")
                        .css("top",(top)+"px")
                        .html("+").css("opacity","0");
				
                    $(this.div,container).append("<div id='toplamaSonuc'/>");	
                    $(this.div+" #toplamaSonuc").css("width",120+(i-1)*16+"px")
                        .css("text-align","right")
                        .css("height","30px")
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size","30px")
                        .css("top",top+35+"px")
                        .css("z-index","5")
                        .css("opacity","0");
                    
                    var sonuc=carpim1*carpim2;
                    for(var j=sonuc.toString().length;j>=1;j--){

                    $(this.div+" #toplamaSonuc",container).append("<span id='toplamaSonucBasamak"+j+"'>");
                    $(this.div+" #toplamaSonucBasamak"+j).html(i);
                    $(this.div+" #toplamaSonucBasamak"+j).addClass("basamakTek");

                    }

                    $(this.div,container).append("<div id='toplamaElde'/>");	
                    $(this.div+" #toplamaElde").css("width","100px")
                        .css("text-align","right")
                        .css("height","30px")
                        .css("margin","auto")
                        .css("position","absolute")
                        .css("right","0px")
                        .css("font-size","30px")
                        .css("top",top+35+"px")
                        .css("z-index","5");

                    for(var j=sonuc.toString().length;j>=1;j--){
                        
                        $(this.div+" #toplamaElde",container).append("<span id='toplamaEldeBasamak"+j+"'>");
                        $(this.div+" #toplamaEldeBasamak"+j).html(0);
                        $(this.div+" #toplamaEldeBasamak"+j).addClass("eldeBasamakTek");

                    }	
		}
        }
        $(this.div+" .basamakTek").css("opacity","0");
	$(this.div+" .eldeBasamakTek").css("opacity","0").css("position","absolute");

    }

this.basla=function(hizB,hizA){
    this.hizB=hizB;
    this.hizA=hizA;
    var sayac=0;
    var tamamlanmaSuresi=this.hizA+this.hizB;
    var sayilarFadeInRenk="#FF6600";
    var sayilarFadeOutRenk="#000000";
    var sonuclarRengi="#008000";
    var eldeRengi="#8C1717";
    for(var i=1; i<=this.carpim2.toString().length;i++){
        
         $("#ikinciBasamak"+i).delay(tamamlanmaSuresi*(sayac)).animate({color:sayilarFadeInRenk},this.hizA).delay(tamamlanmaSuresi*3-this.hizB).animate({color:sayilarFadeOutRenk},this.hizA);
        
         for(var k=1; k<=this.carpim1.toString().length;k++){
              
              if(sayac>2){
                 $("#ilkBasamak"+k).delay(tamamlanmaSuresi*2-this.hizB).animate({color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({color:sayilarFadeOutRenk},this.hizA); 
                 console.log("Sure İç: "+tamamlanmaSuresi*2);
              }
              else{
                $("#ilkBasamak"+k).delay(tamamlanmaSuresi*(sayac)).animate({color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({color:sayilarFadeOutRenk},this.hizA);
                console.log("sure: "+tamamlanmaSuresi*(sayac));
              }
         console.log("İç Sayac"+sayac);
         sayac++
         
         var basamakSonuc=$("#ilkBasamak"+k).html()*$("#ikinciBasamak"+i).html();
         console.log(basamakSonuc);
         
       //$("#ilkBasamak"+k).delay(tamamlanmaSuresi*(sayac)).animate({color:sayilarFadeInRenk},this.hizA)
        if(basamakSonuc.toString().length==1){
            $(this.div+" #carpmaSonuc"+(i)+"Basamak"+k).html(basamakSonuc);
            $(this.div+" #carpmaSonuc"+(i)+"Basamak"+k).delay(tamamlanmaSuresi*(sayac)-(this.hizB/2)).animate({opacity:"1", color:sonuclarRengi},this.hizA/5).delay(this.hizB).animate({color:"#000000"},this.hizA);
            
         }
        else if(basamakSonuc.toString().length==2){
            var right=(k)*16+"px"
            $(this.div+" #carpmaSonuc"+(i)+"Basamak"+k).html(basamakSonuc.toString().charAt(1));
            $(this.div+" #elde"+(i)+"Basamak"+(k+1)).html(basamakSonuc.toString().charAt(0)).css("right",right);
            
            $(this.div+" #carpmaSonuc"+(i)+"Basamak"+k).delay(tamamlanmaSuresi*(sayac)-(this.hizB/2)).animate({opacity:"1", color:sonuclarRengi},this.hizA/5).delay(this.hizB).animate({color:"#000000"},this.hizA);
            if(k==3){
                $(this.div+" #elde"+(i)+"Basamak"+(k+1)).delay(tamamlanmaSuresi*(sayac)-(this.hizB/2)).animate({opacity:"1", color:sonuclarRengi},this.hizA/5).delay(this.hizB).animate({color:"#000000"},this.hizA);
            }
            else{
                var yeniRight=-30+(-15*i-1)+"px";
                $(this.div+" #elde"+(i)+"Basamak"+(k+1)).delay(tamamlanmaSuresi*(sayac)-(this.hizB/2)).animate({opacity:"1", color:sonuclarRengi},this.hizA/2).delay(this.hizB/2).animate({right:yeniRight,color:eldeRengi},this.hizA).delay(this.hizB).animate({right:right,color:"#000000"},this.hizA);
            }    
        }
        
        if($(this.div+" #elde"+(i)+"Basamak"+(k)).html()!="0")
             $(this.div+" #carpmaSonuc"+(i)+"Basamak"+k).animate({opacity:"0"},this.hizA);
       
    }
        
        
    }
    
    $(this.div+" #isaretToplama").delay(tamamlanmaSuresi*sayac).animate({opacity:"1"},this.hizA);
    $(this.div+" #toplamaSonuc").delay(tamamlanmaSuresi*sayac+this.hizB).animate({opacity:"1"},this.hizA);
    var self = this;
    
    
    for(var b=1; b<=4;b++){
        console.log("xsx girdi");
        setTimeout(toplama1,18000+2000*b);
        setTimeout(toplama2,20000+2000*b);
        setTimeout(toplama3,22000+2000*b);
    }
    toplama1Sayac=0;
    function toplama1(){
        //var sonuc=self.carpim1*self.carpim2;
       console.log("topalam1 girdi");
        toplama1Sayac++;
            //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+self.hizB,10))
            $(self.div+" #carpmaSonuc1Basamak"+toplama1Sayac).animate({color:sayilarFadeInRenk},self.hizA).delay(self.hizB).animate({color:sayilarFadeOutRenk},self.hizA);
            $(self.div+" #elde1Basamak"+toplama1Sayac).animate({color:sayilarFadeInRenk},self.hizA).delay(self.hizB).animate({color:sayilarFadeOutRenk},self.hizA);
        }
        
    toplama2Sayac=0;
    function toplama2(){
        //var sonuc=self.carpim1*self.carpim2;
       console.log("topalam2 girdi");
        toplama2Sayac++;
            //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+self.hizB,10))
            $(self.div+" #carpmaSonuc2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},self.hizA).delay(self.hizB).animate({color:sayilarFadeOutRenk},self.hizA);
            $(self.div+" #elde2Basamak"+toplama2Sayac).animate({color:sayilarFadeInRenk},self.hizA).delay(self.hizB).animate({color:sayilarFadeOutRenk},self.hizA);
    }
    toplama3Sayac=0;
    function toplama3(){
        //var sonuc=self.carpim1*self.carpim2;
       console.log("topalam3 girdi");
        toplama3Sayac++;
            //console.log("toplamlar: "+parseInt(tamamlanmaSuresi*sayac+self.hizB,10))
            $(self.div+" #carpmaSonuc3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},self.hizA).delay(self.hizB).animate({color:sayilarFadeOutRenk},self.hizA);
            $(self.div+" #elde3Basamak"+toplama3Sayac).animate({color:sayilarFadeInRenk},self.hizA).delay(self.hizB).animate({color:sayilarFadeOutRenk},self.hizA);
    }
    
    var sonuc=this.carpim1*this.carpim2;
    console.log("wwwwwwwwwwwwwww: "+sonuc.toString().length+", weeeeeeee: "+sonuc);
    for(var t=1;t<=sonuc.toString().length;t++){
        var basamak=sonuc.toString().charAt(sonuc.toString().length-t)
        $(this.div+" #toplamaSonucBasamak"+t).html(basamak);
        $(this.div+" #toplamaSonucBasamak"+t).delay(18000+2000*t).animate({opacity:"1"},self.hizA);
        
        
    }
        
    
}
    
}

