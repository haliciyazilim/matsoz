/*
 Yüzdeyi Ondalık Kesre Çevirme
 Kılavuz: mat-5-yüzdeyi ondalık kesre çevirme.pdf
   
 Halıcı Yazılım
 Abdullah Karacabey
 03.07.2012 - 06.07.2012
 */
function kareYap(){var a=new Group,b=parseInt(this.kareSayisi),c=Math.floor(b/10)==0?1:Math.floor(b/10+1),d=Math.floor(b%10),e=10;for(j=0;j<c&&j<10;j++){if(j==c-1)e=d;else var e=10;for(i=0;i<e&&i<10;i++){boyaliKare=new Rectangle(this.x+i*12+.5,this.y+j*12+.5,12,12);var f=new Path.Rectangle(boyaliKare);f.fillColor=this.dolguRengi,f.strokeColor=this.hatRengi,a.addChild(f)}}return a}function yeniSoru(){$("#giris, #girdiCevap1, #girdiCevap2, #girdiCevap3").val(""),$("#geriBildirim, #Corta1, #Corta2, #Corta3, #sonraki").hide(),$("#btnKontrol").show(),$("#giris").focus(),tiklamaSayisi=0,enter=0,bosKare.yap(),$(container).append("<style>#Cevap1, #Cevap2, #Cevap3, #girdiCevap1, #girdiCevap2, #girdiCevap3{color:'black';}</style>"),cevap1="",cevap2="",cevap3="",$("#orta3 #esit1").css("opacity","0"),$("#girdiCevap3").removeAttr("onkeydown"),$("#girdiCevap2").removeAttr("onkeydown"),$("#girdiCevap1").removeAttr("onkeydown"),$("#giris").removeAttr("onkeydown"),$("input").css("color","black")}var dogruCevapGosterimRengi="green",kareIlkStrokeColor="black",kareIlkFillColor="white",ornekKareBoyaliStrokeColor="black",ornekKareBoyaliFillColor="#d42b19",etkilesimKareBoyaliStrokeColor="#255b63",etkilesimKareBoyaliFillColor="#bfe8ef",divSonrakiYaziRenk="white",divSonrakiFillRenk="#4682b4",Animation={init:function(a){var b=new OrnekKare(100,kareIlkFillColor,kareIlkStrokeColor,130.5,20.5);b.opacity=0,b.animate({style:{opacity:1},duration:1e3,delay:1e3});var c=new OrnekKare(29,ornekKareBoyaliFillColor,ornekKareBoyaliStrokeColor,130.5,20.5);c.opacity=0,c.animate({style:{opacity:1},duration:1e3,delay:2e3,callback:function(){}}),$(a).append("<div id='yaziSol'>"),$("#yaziSol").css("position","absolute").css("left","145px").css("top","165px").css("width","120px").css("text-align","center").css("height","12px").html("yüzde yirmi dokuz"),$(a).append("<div id='yaziOrta'>"),$("#yaziOrta").css("position","absolute").css("margin","auto").css("right","200px").css("top","0").css("bottom","0").css("width","210px").css("height","60px").css("font-size","18px"),$("#yaziOrta",a).append("<div class='karsilastirma' id='ornekYuzde'>"),$("#yaziOrta",a).append("<div class='karsilastirma' id='ornekKesir'>"),$("#yaziOrta",a).append("<div class='karsilastirma' id='ornekOndalik'>"),$(".karsilastirma").css("float","left").css("margin-left","2px").css("width","30%").css("height","58px").css("font-size","large"),$("#ornekYuzde").css("text-align","center").css("line-height","58px"),$("#ornekYuzde").html("%29&nbsp;&nbsp;&nbsp;="),$("#ornekOndalik").html("=&nbsp;&nbsp;&nbsp;0,29"),$("#ornekOndalik").css("text-align","center").css("line-height","58px"),$(a).append("<div id='ondalikYaziyla'>"),$("#ondalikYaziyla").html("(sıfır tam yüzde yirmi dokuz)").css("position","absolute").css("margin","auto").css("right","-5px").css("top","92px").css("width","210px").css("height","60px").css("font-size","14px"),$("#yaziOrta #ornekKesir",a).append("<div id='ornekKesirPay'>"),$("#yaziOrta #ornekKesir #ornekKesirPay",a).append("29"),$("#ornekKesirPay").css("text-align","center").css("line-height","35px"),$("#ornekKesir #ornekKesirPay",a).append("<div id='ornekKesir1'>"),$("#ornekKesir1").css("position","absolute").css("left","79px").css("top","30px").css("width","40px").css("height","1px").css("padding",0).css("border-top","2px solid"),$("#yaziOrta #ornekKesir",a).append("<div id='ornekKesirPayda'>"),$("#yaziOrta #ornekKesir #ornekKesirPayda",a).append("100"),$("#ornekKesirPayda").css("text-align","center"),exampleHelper={yaziSol:0,yuzde:0,kesir:0,ondalik:0,ondalikYaziyla:0},Animation.onFrame=function(a){$("#yaziSol").css("opacity",exampleHelper.yaziSol),$("#ornekYuzde").css("opacity",exampleHelper.yuzde),$("#ornekKesir").css("opacity",exampleHelper.kesir),$("#ornekKesir1").css("opacity",exampleHelper.kesir),$("#ornekOndalik").css("opacity",exampleHelper.ondalik),$("#ondalikYaziyla").css("opacity",exampleHelper.ondalikYaziyla)},exampleHelper.animate=Item.prototype.animate,exampleHelper.animate({style:{ondalikYaziyla:1},duration:1e3,delay:7e3}),exampleHelper.animate({style:{ondalik:1},duration:1e3,delay:6e3}),exampleHelper.animate({style:{kesir:1},duration:1e3,delay:5e3}),exampleHelper.animate({style:{yuzde:1},duration:1e3,delay:4e3}),exampleHelper.animate({style:{yaziSol:1},duration:1e3,delay:3e3}),Main.animationFinished(8e3)}},Interaction={getFramework:function(){return"paper"},init:function(a){Interaction.container=a,Interaction.paper={width:$(a).width(),height:$(a).height()},Main.setObjective("Yandaki yüzlük tablonun yanındaki kutuya istediğiniz sayıyı yazınız. Oluşan yüzdeyi ondalık kesir olarak kutuya yazınız ve “Kontrol” düğmesine basınız."),$(a).append("<div id='orta2'>"),$(a).append("<style>#orta2{position:absolute; top:50px; left:265px; width:100px; height:100px}</style>"),$(a).append("<div id='orta1'>"),$(a).append("<style>#orta1{position:absolute; top:70px; left:350px; width:100px; height:40px}</style>"),$(a).append("<div id='orta3'>"),$(a).append("<style>#orta3{position:absolute; top:70px; left:420px; width:100px; height:40px}</style>"),girdiCevap1=Interaction.appendInput({width:"30px",height:"30px",position:"absolute",bottom:"0px",top:"0px",left:"0px",right:"0px",margin:"auto",fontSize:"20px",maxLength:"3"},!0,!1),$("#orta1",a).append(girdiCevap1),$("#orta1 input").attr("id","girdiCevap1"),$("#orta1",a).append("<div id='yuzde1'>"),$("#orta1",a).append("<div id='esit1'>"),$("#orta1 #yuzde1",a).append("%"),$("#orta1 #esit1",a).append("="),$(a).append("<style>#yuzde1{position:absolute; top: 10px; left:15px;  width:20px; height:20px;}</style>"),$(a).append("<style>#esit1{position:absolute; top: 10px; left:75px;  width:20px; height:20px;}</style>"),giris=Interaction.appendInput({width:"30px",height:"30px",position:"absolute",left:"0px",right:"0px",margin:"auto",fontSize:"20px",maxLength:"3",zIndex:2},!0,!1),$("#orta2",a).append(giris),$("#orta2 input").attr("id","giris"),$("#orta2",a).append("<div id='kesir2'>"),$("#kesir2").css("position","absolute").css("left","30px").css("top","40px").css("width","40px").css("height","1px").css("padding",0).css("border-top","2px solid"),$("#orta2",a).append("<div class='payda'>"),$("#orta2",a).append("<div id='esit2'>"),$("#orta2 .payda",a).append("100"),$("#orta2 #esit2",a).append("="),$(a).append("<style>#esit2{position:absolute; top: 30px; left:80px;  width:20px; height:20px;}</style>"),$(a).append("<style>.payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px; text-align:center}</style>"),girdiCevap3=Interaction.appendInput({width:"30px",height:"30px",position:"absolute",bottom:"0px",top:"0px",left:"0px",right:"0px",margin:"auto",fontSize:"20px"},!0,!1),$("#orta3",a).append(girdiCevap3),$("#orta3",a).append("<div id='yuzde2'>"),$("#orta3",a).append("<div id='esit1'>"),$("#orta3 #yuzde2",a).append("0,"),$("#orta3 #esit1",a).append("= 0"),$("#orta3 input").attr("maxLength",2),$("#orta3 input").attr("id","girdiCevap3"),$(a).append("<style>#yuzde2{position:absolute; top: 10px; left:20px;  width:20px; height:20px;}</style>"),$("#orta3 #esit1").css("opacity","0").css("width","30px"),$(a).append("<div id='Corta1'>"),$(a).append("<style>#Corta1{position:absolute; top:180px; left:360px; width:80px; height:40px; display:none}</style>"),$(a).append("<div id='Corta2'>"),$(a).append("<style>#Corta2{position:absolute; top:160px; left:275px; width:80px; height:100px;display:none}</style>"),$(a).append("<div id='Corta3'>"),$(a).append("<style>#Corta3{position:absolute; top:180px; left:430px; width:80px; height:40px;display:none}</style>"),$("#Corta1",a).append("<div id='Cevap1'>"),$("#Corta1 #Cevap1",a).append("100"),$("#Corta1",a).append("<div id='yuzde'>"),$("#Corta1",a).append("<div id='esit1'>"),$("#Corta1 #yuzde",a).append("%"),$("#Corta1 #esit1",a).append("="),$(a).append("<style>#Cevap1{width:30px; height:30px; margin:auto;position:absolute;  top:10px; left:0; right:0;}</style>"),$(a).append("<style>#yuzde{position:absolute; top: 10px; left:10px;  width:20px; height:20px;}</style>"),$(a).append("<style>#Corta1 #esit1{position:absolute; top: 10px; left:65px;  width:20px; height:20px;}</style>"),$("#Corta2",a).append("<div id='Cevap2'>"),$("#Corta2 #Cevap2",a).append("100"),$("#Corta2",a).append("<div id='kesir3'>"),$("#kesir3").css("position","absolute").css("left","20px").css("top","40px").css("width","40px").css("height","1px").css("padding",0).css("border-top","2px solid"),$("#Corta2",a).append("<div id='payda'>"),$("#Corta2",a).append("<div id='esit2'>"),$("#Corta2 #payda",a).append("100"),$("#Corta2 #esit2",a).append("="),$(a).append("<style>#Corta2 #esit2{position:absolute; top: 30px; left:70px;  width:20px; height:20px;}</style>"),$(a).append("<style>#Cevap2{width:40px; height:30px; margin:auto; position:absolute;  left:0; right:0; top:15px} #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px; text-align:center}</style>"),$("#Corta3",a).append("<div id='Cevap3'>"),$(a).append("<style> #Cevap3{width: 60px; height: 30px; position:absolute; top:10px; left:10px; } </style>"),$(a).append("<style> #Cevap1, #Cevap2, #Cevap3{text-align:center} </style>"),$(".payda").css("font-size","18px"),$("input").css("text-align","center").css("font-size","18px"),$("input").addClass("input"),$("input").addClass("number_input_field"),$("#sol, #orta1, #orta2, #orta3, #Corta1, #Corta2, #Corta3").css("font-size","18px"),bosKare=new Kare(100,kareIlkFillColor,etkilesimKareBoyaliStrokeColor,100,30),bosKare.yap(),girdi="",$("#giris").keyup(function(){bosKare.yap(),girdi=parseInt($("#giris").val(),10),boyaliKareSol=new Kare(girdi,etkilesimKareBoyaliFillColor,etkilesimKareBoyaliStrokeColor,100,30),boyaliKareSol.yap(),girdi=="100"||girdi==100?$("#yuzde2").html(""):$("#yuzde2").html("0,")}),cevap1="",cevap2="",cevap3="",$("#girdiCevap1").change(function(){cevap1=parseInt($("#girdiCevap1").val(),10),Interaction.setStatus("",!1)}),$("#girdiCevap3").change(function(){cevap3=$("#girdiCevap3").val(),Interaction.setStatus("",!1)}),document.getElementById("giris").onkeyup=function(){var a=parseInt(this.value);if(a<0||a>100)Interaction.setStatus("0 ile 100 arasında bir sayı giriniz.",!1),$("#giris").keydown(function(){Interaction.setStatus("",!1)}),bosKare.yap(),$("#giris").val("");return};var b=0;$("#btnKontrol").click(function(){kontrol()}),$("#sonraki").click(function(){yeniSoru()}),enter=0,$("#girdiCevap1").keyup(function(a){a.keyCode==13&&kontrol()});var c=0;$("#girdiCevap3").keyup(function(a){a.keyCode==13&&(c++,c==3?(c=0,yeniSoru()):kontrol())}),Interaction.appendButton({top:"250px",right:"50px"}),Interaction.appendStatus({top:"150px",right:"100px",textAlign:"center",width:"200"}),Interaction.prepareNextQuestion()},nextQuestion:function(){yeniSoru()},preCheck:function(){},isAnswerCorrect:function(a){return ondalikliGirdi=parseInt(girdi),girdi<10&&girdi>0?ondalikliGirdi="0"+girdi:girdi==100?ondalikliGirdi=1:ondalikliGirdi=girdi,cevap3=$("#girdiCevap3").val(),console.log("c1: "+cevap1+" c2: "+cevap2+" c3: "+cevap3),console.log("Ondalıklı Girdi: "+ondalikliGirdi),console.log("Girdi: "+girdi),girdi<100&&(cevap3=parseFloat("0."+cevap3),ondalikliGirdi=parseFloat("0."+ondalikliGirdi),console.log("cevpları Değişti: "+cevap3+", "+ondalikliGirdi)),parseInt(cevap1,10)==parseInt(girdi,10)&&cevap3==ondalikliGirdi?(enter++,$("#btnKontrol").hide(),$("#sonraki").show(),!0):(tiklamaSayisi++,!1)},onCorrectAnswer:function(){Interaction.setStatus("Tebrikler",!0)},onWrongAnswer:function(){Interaction.setStatus("Tekrar deneyiniz.",!1)},onFail:function(){Interaction.setStatus("Yanlış; doğru cevap: ",!1);var a=parseInt($("#giris").val(),10);console.log("cevap: "+a),$("#girdiCevap3").get(0).setAttribute("onkeydown","return tusEngelle(event);"),$("#girdiCevap1").get(0).setAttribute("onkeydown","return tusEngelle(event);"),$("#giris").get(0).setAttribute("onkeydown","return tusEngelle(event);");if(a=="100"||a==100)$("#Cevap3").html(1),$("#girdiCevap3").val(1);else{var b=a/100,c="0,"+b.toString().substr(2);console.log("noktali Cevap: "+b),console.log("virgüllü Cevap: "+c),a==0?($("#orta3 #esit1").css("opacity","1"),$("#Cevap3").html("0,0  = 0")):a<10?$("#Cevap3").html(c):(console.log("girdi"),$("#Cevap3").html(c))}$("#Cevap1, #Cevap2").html(a),cevap1!=girdi?$("#girdiCevap1").css("color","red"):$("#girdiCevap1").css("color","green"),cevap3!=ondalikliGirdi?$("#girdiCevap3").css("color","red"):$("#girdiCevap3").css("color","green"),$("#Cevap1, #Cevap3").css("color","green"),$("#geriBildirim, #Corta1, #Corta2, #Corta3, #sonraki").show()}},OrnekKare=function(a,b,c,d,e){this.animate=Item.prototype.animate,this.kareSayisi=a,this.dolguRengi=b,this.hatRengi=c,this.x=d,this.y=e;var f=new Group,g=parseInt(this.kareSayisi),h=Math.floor(g/10)==0?1:Math.floor(g/10+1),k=Math.floor(g%10),l=10;for(j=0;j<h&&j<10;j++){if(j==h-1)l=k;else var l=10;for(i=0;i<l&&i<10;i++){boyaliKare=new Rectangle(this.x+i*12,this.y+j*12,12,12);var m=new Path.Rectangle(boyaliKare);m.fillColor=this.dolguRengi,m.strokeColor=this.hatRengi,b!="white"&&(m.opacity=0,m.animate({style:{opacity:1},duration:250,delay:20*(j*10+i)})),f.addChild(m)}}return f},Kare=function(a,b,c,d,e){this.animate=Item.prototype.animate,this.kareSayisi=parseInt(a),this.dolguRengi=b,this.hatRengi=c,this.x=d,this.y=e,this.yap=kareYap};