/*
 Yüzdeleri Karşılaştırma
 Kılavuz: mat-5-yüzdeleri karşılaştırma.pdf
   
 Halıcı Yazılım
 Abdullah Karacabey
 04.07.2012 - 05.07.2012
 */
function kareYap(){var a=new Group,b=this.kareSayisi,c=Math.floor(b/10)==0?1:Math.floor(b/10+1),d=Math.floor(b%10),e=10;for(j=0;j<c&&j<10;j++){if(j==c-1)e=d;else var e=10;for(i=0;i<e&&i<10;i++){boyaliKare=new Rectangle(this.x+i*12+.5,this.y+j*12+.5,12,12);var f=new Path.Rectangle(boyaliKare);f.fillColor=this.dolguRengi,f.strokeColor=this.hatRengi,a.addChild(f)}}return a}function SadeceRakam(a,b){var c=a.charCode==undefined?a.keyCode:a.charCode;return/^[0-9]+$/.test(String.fromCharCode(c))||c==0||c==13||isPassKey(c,b)?!0:!1}function isPassKey(a,b){if(b!=null)for(var c=0;c<b.length;c++)if(b[c]==String.fromCharCode(a))return!0;return!1}function SadeceRakamBlur(a,b){var c=a.target?a.target:a.srcElement,d=c.value;d=d.replace(/^\s+|\s+$/g,""),b&&(d=d.replace(/\s{2,}/g," ")),c.value=d}var dogruCevapGosterimRengi="green",kareIlkStrokeColor="black",kareIlkFillColor="white",ornekKareBoyaliStrokeColor="black",ornekKareBoyaliFillColor="#d42b19",etkilesimKareBoyaliStrokeColor="#255b63",etkilesimKareBoyaliFillColor="#bfe8ef",divSonrakiYaziRenk="white",divSonrakiFillRenk="#4682b4",Animation=function(){};Animation();var Interaction=function(){};Interaction(),Interaction.getFramework=function(){return"paper"},Animation.init=function(a){var b=new OrnekKare(100,kareIlkFillColor,kareIlkStrokeColor,40.5,20.5);b.opacity=0,b.animate({style:{opacity:1},duration:1e3,delay:1e3});var c=new OrnekKare(25,ornekKareBoyaliFillColor,ornekKareBoyaliStrokeColor,40.5,20.5);c.opacity=0,c.animate({style:{opacity:1},duration:1e3,delay:2e3,callback:function(){}}),$(a).append("<div id='yaziSol'>"),$("#yaziSol").css("position","absolute").css("left","55px").css("top","160px").css("width","120px").css("font-size","12px").css("text-align","center").css("height","12px").html("yüzde yirmi beş"),$(a).append("<div id='yaziSag'>"),$("#yaziSag").css("position","absolute").css("right","50px").css("top","160px").css("width","120px").css("font-size","12px").css("text-align","center").css("height","12px").html("yüzde otuz iki"),$(a).append("<div id='yaziOrta'>"),$("#yaziOrta").css("position","absolute").css("margin","auto").css("right","0").css("top","0").css("bottom","0").css("left","0").css("width","210px").css("height","40px").css("font-size","18px"),$("#yaziOrta",a).append("<div class='karsilastirma' id='yuzdeSol'>"),$("#yaziOrta",a).append("<div class='karsilastirma' id='isaret'>"),$("#yaziOrta",a).append("<div class='karsilastirma' id='yuzdeSag'>"),$(".karsilastirma").css("float","left").css("margin-left","2px").css("width","32%").css("height","40px").css("font-size","20px").css("text-align","center"),$("#yuzdeSol").html("%25"),$("#isaret").html("<"),$("#yuzdeSag").html("%32"),exampleHelper={yaziSol:0,yaziSag:0,yuzdeSol:0,yuzdeSag:0,isaret:0};var d=new OrnekKare(100,kareIlkFillColor,kareIlkStrokeColor,600.5,20.5);d.opacity=0,d.animate({style:{opacity:1},duration:1e3,delay:1e3});var e=new OrnekKare(32,ornekKareBoyaliFillColor,ornekKareBoyaliStrokeColor,600.5,20.5);e.opacity=0,e.animate({style:{opacity:1},duration:1e3,delay:2e3,callback:function(){}}),Animation.onFrame=function(a){$("#yaziSol").css("opacity",exampleHelper.yaziSol),$("#yaziSag").css("opacity",exampleHelper.yaziSag),$("#yuzdeSol").css("opacity",exampleHelper.yuzdeSol),$("#isaret").css("opacity",exampleHelper.isaret),$("#yuzdeSag").css("opacity",exampleHelper.yuzdeSag)},exampleHelper.animate=Item.prototype.animate,exampleHelper.animate({style:{isaret:1},duration:1e3,delay:5e3}),exampleHelper.animate({style:{yaziSol:1,yaziSag:1},duration:1e3,delay:3e3}),exampleHelper.animate({style:{yuzdeSol:1,yuzdeSag:1},duration:1e3,delay:4e3}),Main.animationFinished(6e3)},Interaction.init=function(a){function c(){$("#girdiCevap2").val(""),$("#girdiCevap2").val(">"),$("#geriBildirim").hide()}function d(){$("#girdiCevap2").val(""),$("#girdiCevap2").val("<"),$("#geriBildirim").hide()}function e(){var a=$("#girdiCevap1").val(),b=$("#girdiCevap3").val(),c=$("#girdiCevap2").val();if(a==""||a==undefined||b==""||b==undefined||c==""||c==undefined)$("#geriBildirimText").attr("class","status_alert"),$("#geriBildirimText").html("Lütfen kutucukları doldurun!"),$("#geriBildirim").show();else{var d=parseInt(this.value);d<0||d>100?($("#geriBildirimText").attr("class","status_alert"),$("#geriBildirimText").html("0 ile 100 arasında bir sayı giriniz."),$("#geriBildirim").show(),bosKareSag.yap()):(c=="<"&&(a<b?($("#btnKontrol").hide(),$("#sonraki").show(),$("#geriBildirimText").attr("class","status_true").html("Tebrikler"),$("#geriBildirim").show(),$("#kucuk").unbind("click"),$("#buyuk").unbind("click")):a>b&&($("#geriBildirimText").attr("class","status_false").html("Yanlış. Cevap:"),$("#gCevaplar").html("%"+a+" <stroke class='cevapİsaret'>></stroke> %"+b),$("#gCevaplar").show(),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),$("#kucuk").unbind("click"),$("#buyuk").unbind("click"))),c==">"&&(a>b?($("#btnKontrol").hide(),$("#sonraki").show(),$("#geriBildirimText").attr("class","status_true").html("Tebrikler"),$("#geriBildirim").show(),$("#kucuk").unbind("click"),$("#buyuk").unbind("click")):a<b&&($("#geriBildirimText").attr("class","status_false").html("Yanlış. Cevap:"),$("#gCevaplar").html("%"+a+" <stroke class='cevapİsaret'><</stroke> %"+b),$("#gGirdiCevap1").val($("#girdiCevap1").val()),$("#gGirdiCevap2").val("<"),$("#gGirdiCevap3").val($("#girdiCevap3").val()),$("#gCevaplar").show(),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),$("#kucuk").unbind("click"),$("#buyuk").unbind("click"))))}}Main.setObjective("Yandaki yüzlük tabloların altındaki kutulara 0 ile 100 arasında sayılar yazınız. Sonra ortadaki bölümde oluşan yüzdeler  arasına gelecek <br /> “<” (küçük) ya da <br/>“>” (büyük) işaretlerinden uygun olanına basarak yüzdeleri karşılaştırınız. Daha sonra doğruluğunu kontrol ediniz."),$(Main.objective).css("font-size","14px"),$(a).append("<div id='sol'>"),$(a).append("<style>#sol{position:absolute; top:165px; left:40px; width:100px; height:100px}</style>"),$("#sol",a).append("<input id='girisSol' type='text'  width: 30px; height:30px; maxlength=3 onkeypress='return SadeceRakam(event)'/>"),$("#sol",a).append("<div id='kesir1'>"),$("#kesir1").css("position","absolute").css("left","30px").css("top","40px").css("width","40px").css("height","1px").css("padding",0).css("border-top","2px solid").css("box-sizing","border-box"),$("#sol",a).append("<div class='payda'>"),$("#sol .payda",a).append("100"),$(a).append("<style>#girisSol{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; font-size:18px}</style>"),$(a).append("<div id='orta'>"),$(a).append("<style>#orta{position:absolute; top:30px; left:0; right:0; margin: auto;width:220px; height:100px; border:solid 1px black}</style>"),$("#orta",a).append("<div id='buyukKucuk'>"),$("#orta",a).append("<style> #buyukKucuk{margin:auto;position:absolute; top:5px; left:0; right:0; height:30px; width:70px;}</style>"),$("#orta #buyukKucuk",a).append("<img id='kucuk' src='/assets/animations/yuzdeleri_karsilastirma/sol_ok.png' />"),$("#orta",a).append("<style> #kucuk{position: absolute; left:0px; top:0px;}</style>"),$("#orta #buyukKucuk",a).append("<img id='buyuk' src='/assets/animations/yuzdeleri_karsilastirma/sag_ok.png' />"),$("#orta",a).append("<style> #buyuk{position: absolute; left:40px; top:0px;}</style>"),$("#orta #buyukKucuk #kucuk",a).append("<div class='isaret'><</div>"),$("#orta #buyukKucuk #buyuk",a).append("<div class='isaret'>></div>"),$("#orta #buyukKucuk",a).append("<style>.isaret{width:10px; height:13px;margin:auto;position:absolute; left:0; right:0; top:0; bottom:0;}"),$("#orta",a).append("<div id='girdiler'>"),$("#orta",a).append("<style> #girdiler{margin:auto;position:absolute; left:0; right:0; top:50px; width:200px ;font-weight:bold;float:left; text-align:center}</style>"),$("#orta",a).append("<style> #yuzde1{font-weight:bold;}</style>"),$("#orta #girdiler",a).append("% "),$("#orta",a).append("<style> #cevap1{font-weight:bold;}</style>"),$("#orta #girdiler",a).append("<input id='girdiCevap1' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/> "),$(a).append("<style>#girdiCevap1{width:30px; height:30px;}</style>"),$("#orta",a).append("<style> #cevap2{font-weight:bold;}</style>"),$("#orta #girdiler",a).append("<input id='girdiCevap2' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/>"),$(a).append("<style>#girdiCevap2{width:30px; height:30px;}</style>"),$("#orta",a).append("<style> #yuzde1{font-weight:bold;}</style>"),$("#orta #girdiler",a).append(" % "),$("#orta",a).append("<style> #cevap3{font-weight:bold;}</style>"),$("#orta #girdiler",a).append("<input id='girdiCevap3' type='text' readonly='readonly' maxlength=3 onkeypress='return SadeceRakam(event)'/>"),$(a).append("<style>#girdiCevap3{width:30px; height:30px;}</style>"),$(a).append("<style>input {text-align:center;font-weight:bold; font-size:large;}</style>"),$(a).append("<div id='sag'>"),$(a).append("<style>#sag{position:absolute; top:165px; right:40px; width:100px; height:100px}</style>"),$("#sag",a).append("<input id='girisSag' type='text' maxlength=3 onkeypress='return SadeceRakam(event)'/>"),$("#sag",a).append("<div id='kesir2'>"),$("#kesir2").css("position","absolute").css("left","30px").css("top","40px").css("width","40px").css("height","1px").css("padding",0).css("border-top","2px solid"),$("#sag",a).append("<div class='payda'>"),$("#sag .payda",a).append("100"),$(a).append("<style>#girisSag{width:30px; height:30px; margin:auto;position:absolute;  left:0; right:0; }</style>"),$(".payda").css("margin","auto").css("position","absolute").css("top","50px").css("left","0").css("right","0").css("width","35px").css("height","10px").css("text-align","center").css("font-size","18px"),$(a).append("<button class='control_button' id='btnKontrol'>"),$(a).append("<style>.control_button{position:absolute; top:250px; margin:auto;right:0px; left:0px; }</style>"),$(a).append("<button id='sonraki' class='next_button'>"),$("#sonraki").css("position","absolute").css("right","0").css("left","0").css("margin","auto").css("top","250px").css("text-align","center").hide(),$("#orta",a).append("<div id='gCevaplar'>"),$("#orta",a).append("<style> #gCevaplar{margin:auto;position:absolute; left:0; right:0; top:150px; width:200px ;font-weight:bold;float:left; text-align:center; font-size:18px}</style>"),$("#orta",a).append("<style>.cevapİsaret{color:"+dogruCevapGosterimRengi+"}"),$("input").addClass("input"),$("input").addClass("number_input_field"),$("input").css("font-size","18px"),bosKareSol=new Kare(100,kareIlkFillColor,etkilesimKareBoyaliStrokeColor,30,30),bosKareSol.yap(),bosKareSag=new Kare(100,kareIlkFillColor,etkilesimKareBoyaliStrokeColor,440,30),bosKareSag.yap();var b;$("#girisSol").keyup(function(){Interaction.boyaliKareSolGroup&&Interaction.boyaliKareSolGroup.remove(),b=$("#girisSol").val(),$("#girdiCevap1").val(b),boyaliKareSol=new Kare(b,etkilesimKareBoyaliFillColor,etkilesimKareBoyaliStrokeColor,30,30),Interaction.boyaliKareSolGroup=boyaliKareSol.yap()}),$("#girisSag").keyup(function(){Interaction.boyaliKareSagGroup&&Interaction.boyaliKareSagGroup.remove(),b=$("#girisSag").val(),$("#girdiCevap3").val(b),boyaliKareSag=new Kare(b,etkilesimKareBoyaliFillColor,etkilesimKareBoyaliStrokeColor,440,30),Interaction.boyaliKareSagGroup=boyaliKareSag.yap()}),$("#girisSol").keyup(function(){$("#geriBildirim").hide();var a=parseInt(this.value);if(a<0||a>100)Interaction.boyaliKareSolGroup&&Interaction.boyaliKareSolGroup.remove(),$("#geriBildirimText").attr("class","status_alert"),$("#geriBildirimText").html("0 ile 100 arasında bir sayı giriniz."),$("#geriBildirim").show();$("#girisSol").val()!=""&&$("#girisSag").val()!=""&&$("#girisSol").val()==$("#girisSag").val()&&(console.log("sol: "+$("#girisSol").val()+" sag: "+$("#girisSag").val()),$("#geriBildirimText").attr("class","status_alert"),$("#geriBildirimText").html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz."),$("#geriBildirim").show());return}),$("#girisSag").keyup(function(){$("#geriBildirim").hide();var a=parseInt(this.value);if(a<0||a>100)$("#geriBildirimText").attr("class","status_alert"),$("#geriBildirimText").html("0 ile 100 arasında bir sayı giriniz."),$("#geriBildirim").show(),bosKareSag.yap();$("#girisSol").val()==$("#girisSag").val()&&($("#geriBildirimText").attr("class","status_alert"),$("#geriBildirimText").html("Sayılar birbirine eşit olmamalıdır. Lütfen yeniden sayı giriniz."),$("#geriBildirim").show());return}),$("#buyuk").click(function(){c()}),$("#kucuk").click(function(){d()}),$("#btnKontrol").click(function(){console.log("kontrole basıldı"),e()}),$("#girisSol").keyup(function(a){a.keyCode==13&&(console.log("Key"+a.keyCode),e())}),$("#girisSag").keyup(function(a){a.keyCode==13&&e()}),$(a).append("<div class='status_field' id='geriBildirim'>"),$("#geriBildirim",a).append("<div id='geriBildirimText'></div>"),$("#geriBildirim").css("margin","auto").css("position","absolute").css("top","0").css("left","0").css("right","0").css("bottom","0").css("width","200px").css("height","20px").css("text-align","center"),$("#sonraki").click(function(){$("#geriBildirim").hide(),$("#btnKontrol").show(),$("#sonraki").hide(),$("#gCevaplar").hide(),$("#girisSol").val(""),$("#girisSag").val(""),$("#girdiCevap1").val(""),$("#girdiCevap2").val(""),$("#girdiCevap3").val(""),$("#kucuk").bind("click",d),$("#buyuk").bind("click",c),bosKareSol.yap(),bosKareSag.yap()})};var OrnekKare=function(a,b,c,d,e){this.animate=Item.prototype.animate,this.kareSayisi=a,this.dolguRengi=b,this.hatRengi=c,this.x=d,this.y=e;var f=new Group,g=this.kareSayisi,h=Math.floor(g/10)==0?1:Math.floor(g/10+1),k=Math.floor(g%10),l=10;for(j=0;j<h&&j<10;j++){if(j==h-1)l=k;else var l=10;for(i=0;i<l&&i<10;i++){boyaliKare=new Rectangle(this.x+i*12,this.y+j*12,12,12);var m=new Path.Rectangle(boyaliKare);m.fillColor=this.dolguRengi,m.strokeColor=this.hatRengi,b!="white"&&(m.opacity=0,m.animate({style:{opacity:1},duration:250,delay:20*(j*10+i)})),f.addChild(m)}}return f},Kare=function(a,b,c,d,e){this.animate=Item.prototype.animate,this.kareSayisi=a,this.dolguRengi=b,this.hatRengi=c,this.x=d,this.y=e,this.yap=kareYap};