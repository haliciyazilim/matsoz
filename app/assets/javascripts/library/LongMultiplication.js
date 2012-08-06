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
                
                for(var j=1;j<=4;j++){
                
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
                
                for(var j=1;j<=4;j++){
                
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
                        .html("+");
				
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
                        .html(this.carpim1*this.carpim2);
			
		}
        }
        $(this.div+" .basamakTek").css("opacity","0");
	$(this.div+" .eldeBasamakTek").css("opacity","0");

    }

this.basla=function(hizB,hizA){
    this.hizB=hizB;
    this.hizA=hizA;
    var sayac=1;
    var tamamlanmaSuresi=this.hizA+this.hizB;
    var sayilarFadeInRenk="#FF6600";
    var sayilarFadeOutRenk="#000000";
    for(var i=1; i<=this.carpim2.toString().length;i++){
        
        
        
         for(var k=1; k<=this.carpim1.toString().length;k++){
              
              if(sayac>3){
                 $("#ilkBasamak"+k).delay(tamamlanmaSuresi*3).animate({color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({color:sayilarFadeOutRenk},this.hizA); 
                 console.log("Sure İç: "+tamamlanmaSuresi*3);
              }
              else{
                $("#ilkBasamak"+k).delay(tamamlanmaSuresi*(sayac)).animate({color:sayilarFadeInRenk},this.hizA).delay(this.hizB).animate({color:sayilarFadeOutRenk},this.hizA);
                console.log("sure: "+tamamlanmaSuresi*(sayac));
              }
         console.log("İç Sayac"+sayac);
         sayac++
              
              
         }
         //$("#ikinciBasamak"+i).delay(tamamlanmaSuresi*(sayac)).animate({color:sayilarFadeInRenk},this.hizA).delay((this.hizB+this.hizA)*3-this.hizB).animate({color:sayilarFadeOutRenk},this.hizA);
        //$("#ilkBasamak"+i).delay(sayac+this.hizB).animate({color:sayilarFadeInRenk},hizA);
        
        //sayac+=this.hizB;
        //$("#ikinciBasamak"+i).delay(sayac).animate({color:sayilarFadeOutRenk},this.hizA);
    }
    
}
    
}


