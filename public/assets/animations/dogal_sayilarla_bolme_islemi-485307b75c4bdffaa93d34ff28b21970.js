var Animation={init:function(a){$(a).append("<div id='ornek'>"),$("#ornek").css("width","110px").css("height","130px").css("margin","auto").css("position","absolute").css("left","200px").css("top","30px").css("font-size","18px"),$(a).append("<div id='bolunen'>"),$("#bolunen").css("width","55px").css("position","absolute").css("left","140px").css("top","30px").css("font-size","12px").html("bölünen"),$(a).append("<div id='bolen'>"),$("#bolen").css("width","55px").css("position","absolute").css("left","310px").css("top","30px").css("font-size","12px").html("bölen"),$(a).append("<div id='bolum'>"),$("#bolum").css("width","55px").css("position","absolute").css("left","310px").css("top","56px").css("font-size","12px").html("bölüm"),$(a).append("<div id='kalan'>"),$("#kalan").css("width","55px").css("position","absolute").css("left","260px").css("top","161px").css("font-size","12px").html("kalan").css("opacity","0"),$(a).append("<div id='islemKontrolu'>"),$("#islemKontrolu").css("width","90px").css("position","absolute").css("left","500px").css("top","30px").css("font-size","12px").html("İşlem Kontrolü").css("opacity","0"),$(a).append("<div id='saglama'>"),$("#saglama").css("width","60px").css("height","130px").css("margin","auto").css("position","absolute").css("left","450px").css("top","50px"),$(a).append("<div id='saglama2'>"),$("#saglama2").css("width","80px").css("height","130px").css("margin","auto").css("position","absolute").css("left","550px").css("top","50px").css("opacity","0"),Animation.islem=new LongMultiplication(261,32,"saglama",20),Animation.toplamaIslemi=new LongAddition(8352,5,"saglama2",20),Animation.ornekIslem=new LongDivision(8357,32,"#ornek"),setTimeout("Animation.ornekIslem.nextStep(1000);",1e3),setTimeout("Animation.ornekIslem.nextStep(1000);",2e3),setTimeout("Animation.ornekIslem.nextStep(1000);",3e3),setTimeout("Animation.ornekIslem.nextStep(1000);",4e3),$("#kalan").delay(4e3).animate({opacity:"1"},1e3),setTimeout("Animation.islem.doldur()",5e3),setTimeout("Animation.islem.basla(500,500);",5e3),setTimeout("Animation.toplamaIslemi.doldur();",27e3),setTimeout("Animation.toplamaIslemi.basla(500,500);",27e3),$("#saglama, #saglama2, #islemKontrolu").delay(4500).animate({opacity:"1"},1e3),Main.animationFinished(33e3)}},Interaction={getFramework:function(){return"paper"},init:function(a){Interaction.container=a,Main.setObjective(" Yandaki bölme işlemini yapınız ve kontrol ediniz."),Interaction.paper={width:$(a).width(),height:$(a).height()},Interaction.soruSirasi=0,Interaction.dogruCevapRengi="green",$(Interaction.container).append("<div id='soru'>"),$("#soru").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("left","0").css("right","0").css("top","10px").css("font-size","20px"),$(Interaction.container).append("<div id='cevap'>"),$("#cevap").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("left","370px").css("top","10px").css("font-size","20px").css("opacity","0"),Interaction.appendButton({bottom:"40px",right:"40px"}),Interaction.appendStatus({bottom:"50px",right:"200px"}),NormalBolmeIslemi=function(a,b,c){this.bolen=a,this.bolunen=b,this.sonuc=Math.floor(this.bolunen/this.bolen),this.div="#"+c,this.yap=function(){var a=new LongDivision(this.bolunen,this.bolen,this.div);asamalarArray=new Array,asamaSonuclari=new Array,asamaUp=new Array,asamaDown=new Array,c=0;for(;;){asama=a.nextStep();if(asama==null)break;asama.id="step"+c,asamalarArray[c]=asama,c++}if(this.div=="#soru"){var b=Interaction.appendInput({left:"62px",fontSize:"20px"},!0,!0);$(Interaction.inputs[0]).attr("maxlength","5"),$("#soru #answer",Interaction.container).append(b)}for(var c=0;c<asamalarArray.length;c++){var d=$(".up",asamalarArray[c]).html();asamaUp[c]=d,console.log("up"+d);var e=$(".down",asamalarArray[c]).html();asamaDown[c]=e,console.log("down"+e);if(this.div=="#soru"){console.log($(".down",asamalarArray[c]).html());var f=d.toString().length;$(".up",asamalarArray[c]).html("<input id='up_"+c+"' class='inputUp' onkeypress='return Interaction.__inputFilter__onlyNumbers(event)' isNumber='true' type='text' maxlength="+f+"></input>"),$("#up_"+c).css("width",f+"ex"),Interaction.inputs.push($(".up input",asamalarArray[c]).get(0));var g=e.toString().length;$(".down",asamalarArray[c]).html("<input id='down_"+c+"' class='inputDown' onkeypress='return Interaction.__inputFilter__onlyNumbers(event)' isNumber='true' type='text' maxlength="+g+"></input>"),$("#down_"+c).css("width",g+"ex"),Interaction.inputs.push($(".down input",asamalarArray[c]).get(0))}else $("#cevap .up, #cevap .down").css("color",Interaction.dogruCevapRengi);$("#step"+(c+1)).css("visibility","hidden")}$("#step0 #down_0").change(function(){$("#step1").css("visibility","visible")}),$("#step1 #down_1").change(function(){$("#step2").css("visibility","visible")}),$("#step2 #down_2").change(function(){$("#step3").css("visibility","visible")}),$("#step3 #down_3").change(function(){$("#step4").css("visibility","visible")}),$("#soru input:not(.inputUp, .inputDown)").css("width","50px").css("font-size","20px").css("text-align","left").css("z-index","5"),$("#soru .up").css("margin-bottom","12px"),$("#soru .step").css("height","68px"),$("#soru .step:first").css("width","60px"),$("#soru .inputUp, #soru .inputDown").css("font-size","20px").css("text-align","right").css("z-index","5").keydown(InputReverseWriteable),$("#soru input").css("height","30px"),Interaction.inputs[0].id="islemSonucu"}},BolensizBolmeIslemi=function(a,b,c){this.bolunen=b,this.bolen=a,this.div="#"+c,this.yap=function(){bolmeIslemi=new LongDivision(this.bolunen,this.bolen,this.div),console.log(bolmeIslemi.nodes.dividend),console.log("bolen: "+this.bolen+" bölünen: "+this.bolunen),asamalarArray=new Array,asamaSonuclari=new Array,asamaUp=new Array,asamaDown=new Array,a=0;for(;;){asama=bolmeIslemi.nextStep();if(asama==null)break;asamalarArray[a]=asama,a++}for(var a=0;a<asamalarArray.length;a++){var b=$(".up",asamalarArray[a]).html();asamaUp[a]=b,console.log("icerik"+b);var c=$(".down",asamalarArray[a]).html();asamaDown[a]=c,console.log("icerik"+c),console.log($(".down",asamalarArray[a]).html()),$(".up",asamalarArray[a]).html(" "),asamalarArray.length-1==a?$(".down",asamalarArray[a]).html():$(".down",asamalarArray[a]).html(" ")}if(this.div=="#soru"){var d=Interaction.appendInput({width:"50px",fontSize:"20px"});$(Interaction.inputs[0]).attr("maxlength","3"),$("#soru #divisor").html(d).css("height","35px"),$("#soru #divisor input").css("margin-left","3px")}else $("#cevap #divisor").css("color",Interaction.dogruCevapRengi)}},BolunensizBolmeIslemi=function(a,b,c){this.bolunen=b,this.bolen=a,this.div="#"+c,this.yap=function(){bolmeIslemi=new LongDivision(this.bolunen,this.bolen,this.div),console.log(bolmeIslemi.nodes.dividend),console.log("bolen: "+this.bolen+" bölünen: "+this.bolunen),asamalarArray=new Array,asamaSonuclari=new Array,asamaUp=new Array,asamaDown=new Array,a=0;for(;;){asama=bolmeIslemi.nextStep();if(asama==null)break;asamalarArray[a]=asama,a++}for(var a=0;a<asamalarArray.length;a++){var b=$(".up",asamalarArray[a]).html();asamaUp[a]=b,console.log("icerik"+b);var c=$(".down",asamalarArray[a]).html();asamaDown[a]=c,console.log("icerik"+c),console.log($(".down",asamalarArray[a]).html()),$(".up",asamalarArray[a]).html(" "),asamalarArray.length-1==a?$(".down",asamalarArray[a]).html():$(".down",asamalarArray[a]).html(" ")}if(this.div=="#soru"){var d=Interaction.appendInput({width:"50px",fontSize:"20px"});$(Interaction.inputs[0]).attr("maxlength","4"),$("#soru #dividend").html(d)}else $("#cevap #dividend").css("color",Interaction.dogruCevapRengi);$("#soru .up").css("margin-bottom","12px"),$("#soru .step").css("height","68px")}},soruId=0,Interaction.prepareNextQuestion()},nextQuestion:function(){function a(){Interaction.soruSirasi<=9?(soruId++,console.log("Soru İD: "+soruId),c(soruId)):b()}function b(){console.log("random moddayim");var a=Math.floor(Math.random()*9);soruId=a,console.log("soru id: "+soruId),c(soruId)}function c(a){$("#soru",Interaction.container).html(""),bolunen=Math.floor(Math.random()*9e3+999),bolen=a%2==0?Math.floor(Math.random()*90+9):Math.floor(Math.random()*990+9),Interaction.inputs=new Array,console.log(Interaction.soruSirasi+". soru");switch(a){case 1:case 2:case 3:case 4:case 5:normalIslem=new NormalBolmeIslemi(bolen,bolunen,"soru"),normalIslem.yap();break;case 6:case 7:console.log("7 bolen: "+bolen+" bölünen: "+bolunen),bolunensizIslem=new BolunensizBolmeIslemi(bolen,bolunen,"soru"),bolunensizIslem.yap(),console.log("bolunen"+bolunensizIslem.bolunen);break;case 8:case 9:console.log("9bolen: "+bolen+" bölünen: "+bolunen),bolensizIslem=new BolensizBolmeIslemi(bolen,bolunen,"soru"),bolensizIslem.yap(),console.log("bolunen"+bolensizIslem.bolunen)}}$("#cevap").animate({opacity:"0"},1e3),$("#soru").delay(800).animate({right:"0px"},1e3),Interaction.soruSirasi++,a()},isAnswerCorrect:function(a){var b=!0;switch(soruId){case 1:case 2:case 3:case 4:case 5:for(var c=0;c<asamaUp.length;c++){if(parseInt(a[0],10)!=parseInt(normalIslem.sonuc,10)||parseInt(a[2*c+1],10)!=parseInt(asamaUp[c],10)||parseInt(a[2*c+2],10)!=parseInt(asamaDown[c],10)){console.log("denetim false"),b=!1;break}console.log("denetim true"),b=!0}return b==0?!1:!0;case 6:case 7:if(parseInt(a,10)==parseInt(bolunensizIslem.bolunen,10))return console.log("valu: "+a+" bolunen: "+bolunensizIslem.bolunen),!0;break;case 8:case 9:if(parseInt(a,10)==parseInt(bolensizIslem.bolen,10))return console.log("valu: "+a+" bolunen: "+bolensizIslem.bolen),!0}},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){function a(){var b=Interaction.cevap1.nextStep(1e3);b!=null?setTimeout(a,1500):Interaction.pause=!1}switch(soruId){case 1:case 2:case 3:case 4:case 5:parseInt($("#islemSonucu").val(),10)==parseInt(normalIslem.sonuc,10)?$("#islemSonucu").css("color","green"):$("#islemSonucu").css("color","red");for(var b=0;b<asamaUp.length;b++)parseInt($("#up_"+b).val(),10)==parseInt(asamaUp[b],10)?$("#up_"+[b]).css("color","green"):$("#up_"+[b]).css("color","red"),parseInt($("#down_"+b).val(),10)==parseInt(asamaDown[b],10)?$("#down_"+[b]).css("color","green"):$("#down_"+[b]).css("color","red");var c=normalIslem.bolunen,d=normalIslem.bolen;Interaction.cevap1=new LongDivision(c,d,"#cevap"),setTimeout(function(){a()},500);break;case 6:case 7:var c=bolunensizIslem.bolunen,d=bolunensizIslem.bolen;Interaction.cevap1=new LongDivision(c,d,"#cevap"),setTimeout(function(){a()},500);break;case 8:case 9:var c=bolensizIslem.bolunen,d=bolensizIslem.bolen;Interaction.cevap1=new LongDivision(c,d,"#cevap"),setTimeout(function(){a()},500)}$("#soru").animate({right:"250px"},1e3),$("#cevap").delay(500).animate({opacity:"1"},1e3),Interaction.setStatus("Yanlış cevap, doğrusu sağ tarafta.",!1)}};