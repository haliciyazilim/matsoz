/**
 * Doğal sayılarla çıkarma işlemi
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 20.07.2012
 * 
 * 
 */
function SadeceRakam(a,b){var c=a.charCode==undefined?a.keyCode:a.charCode;return/^[0-9]+$/.test(String.fromCharCode(c))||c==0||c==13||isPassKey(c,b)?!0:!1}function isPassKey(a,b){if(b!=null)for(var c=0;c<b.length;c++)if(b[c]==String.fromCharCode(a))return!0;return!1}function SadeceRakamBlur(a,b){var c=a.target?a.target:a.srcElement,d=c.value;d=d.replace(/^\s+|\s+$/g,""),b&&(d=d.replace(/\s{2,}/g," ")),c.value=d}var yanlisRengi="#d42b19",dogruRengi="green",kalanRengi="#255b63",Animation=function(){};Animation();var Interaction=function(){};Interaction(),Interaction.getFramework=function(){return"paper"},Animation.init=function(a){$(a).append("<div id='ornek'>"),$("#ornek").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("left","0").css("right","0").css("top","60px").css("font-size","30px");var b=new LongSubtraction(9357,7825,"ornek",30);b.doldur(),b.basla(1e3,1e3),Main.animationFinished(18e3)},Interaction.init=function(a){function p(){console.log("soruSirasi: "+b+" eldessiz"),c="",d="";var e=Math.floor(Math.random()*10)+1,f=e%2?1e4:1e3;console.log("basamak: "+e+" sayi: "+f);var g=Math.floor(Math.random()*1e4+f);console.log(g);var h=Math.floor(Math.random()*1e4+f);console.log(h);var i=e%2?5:4;console.log("basamak saysı: "+i);var j=new String(g),k=new String(h),l=Array(),m=Array();for(var n=4;n>=0;n--){var o,p;parseInt(j.charAt(n))<parseInt(k.charAt(n))?(console.log("bozuluyor"),console.log(j.charAt(n)+", "+k.charAt(n)),o=parseInt(k.charAt(n)),p=parseInt(j.charAt(n))):(o=parseInt(j.charAt(n)),p=parseInt(k.charAt(n))),l[n]=o,m[n]=p}console.log(l),console.log(m);for(var n=0;n<i;n++)c+=l[n],d+=m[n];console.log(c),console.log(d),$("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(c,{point:"."})),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").html(format(d,{point:"."})),$("#soru",a).append("<div id='toplamaIsareti'>"),$("#toplamaIsareti").css("width","120px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top","60px").html("-"),$(".toplanan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),$("#soru",a).append("<input id='girdi' type='text' maxlength=6  onkeypress='return SadeceRakam(event)'/>"),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(c-d,{point:"."})),$(".toplanan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),$("#girdi").css("width","120px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("top","100px").css("z-index","5").addClass("input").addClass("number_input_field"),$("#girdi").keydown(function(a){var b;a.keyCode==8?b=1:b=0;if(this.createTextRange){var c=node.createTextRange();return c.collapse(!0),c.moveEnd(b),c.moveStart(b),c.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(b,b),!0}),$,$("#girdi").keyup(function(){var a=$(this).val();$(this).val(a),console.log($(this).val())}),$("#girdi").change(function(){var a=$(this).val(),b=a.indexOf(" ",0);while(b!=-1)a=a.replace(" ",""),b=a.indexOf(" ",0);$(this).val(format(a,{point:"."})),console.log($(this).val())})}function q(){console.log("soruSirasi: "+b+" eldeli"),e="",f="";var c=Math.floor(Math.random()*10)+1,d=c%2?1e4:1e3;console.log("basamak: "+c+" sayi: "+d);var g=Math.floor(Math.random()*1e4+d);console.log(g);var h=Math.floor(Math.random()*1e4+d);g<h?(e=h,f=g):(e=g,f=h),$("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(e,{point:"."})),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").html(format(f,{point:"."})),$("#soru",a).append("<div id='toplamaIsareti'>"),$("#toplamaIsareti").css("width","120px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top","60px").html("-"),$(".toplanan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(e-f,{point:"."})),$(".toplanan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("z-index","4"),$("#soru",a).append("<input id='girdi' type='text' maxlength=6  onkeypress='return SadeceRakam(event)'/>"),$("#girdi").css("width","120px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("top","100px").css("z-index","5").html("-"),$("input").addClass("input").addClass("number_input_field"),$("#girdi").keydown(function(a){var b;a.keyCode==8?b=1:b=0;if(this.createTextRange){var c=node.createTextRange();return c.collapse(!0),c.moveEnd(b),c.moveStart(b),c.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(b,b),!0}),$("#girdi").keyup(function(){var a=$(this).val();$(this).val(a),console.log($(this).val())}),$("#girdi").change(function(){var a=$(this).val(),b=a.indexOf(" ",0);while(b!=-1)a=a.replace(" ",""),b=a.indexOf(" ",0);$(this).val(format(a,{point:"."})),console.log($(this).val())})}function r(){console.log("soruSirasi: "+b+" soruToplananlar"),g="",h="",i="";var c=Math.floor(Math.random()*10)+1,d=c%2?1e4:1e3;console.log("basamak: "+c+" sayi: "+d),sayi1=Math.floor(Math.random()*1e4+d),console.log(g),sayi2=Math.floor(Math.random()*1e4+d),sayi1<sayi2?(g=sayi2,h=sayi1):(g=sayi1,h=sayi2),i=g-h,console.log("toplam: "+i),$("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(g,{point:"."})).css("z-index","4"),console.log("soruSirasi: "+b),b==5||b==7?($("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").css("z-index","4"),$("#soru",a).append("<input id='girdi' type='text' maxlength=7  onkeypress='return SadeceRakam(event)'/>"),$("#girdi").css("top","10px").css("z-index","5"),$("input").addClass("input").addClass("number_input_field"),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").html(format(h,{point:"."})),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(i,{point:"."}))):b==6&&($("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(g,{point:"."})),$("#soru",a).append("<input id='girdi' type='text' maxlength=6  onkeypress='return SadeceRakam(event)'/>"),$("#girdi").attr("style","width:100px !important").css("top","50px").css("z-index","5"),$("input").addClass("input").addClass("number_input_field"),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").css("z-index","4").html(format(h,{point:"."})),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(i,{point:"."}))),$("#girdi").css("width","120px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),$("#soru",a).append("<div id='toplamaIsareti'>"),$("#toplamaIsareti").css("width","120px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top","60px").html("-"),$(".toplanan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),$("#girdi").keydown(function(a){var b;a.keyCode==8?b=1:b=0;if(this.createTextRange){var c=node.createTextRange();return c.collapse(!0),c.moveEnd(b),c.moveStart(b),c.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(b,b),!0}),$("#girdi").keyup(function(){var a=$(this).val();$(this).val(a),console.log($(this).val())}),$("#girdi").change(function(){var a=$(this).val(),b=a.indexOf(" ",0);while(b!=-1)a=a.replace(" ",""),b=a.indexOf(" ",0);$(this).val(format(a,{point:"."})),console.log($(this).val())})}function s(){console.log("soruSirasi: "+b+"Birer Bilinmeyen"),g="",h="",toplanan3="",i="";var c=Math.floor(Math.random()*10)+1,d=c%2?1e4:1e3;console.log("basamak: "+c+" sayi: "+d),sayi1=Math.floor(Math.random()*1e4+d),console.log(g),sayi2=Math.floor(Math.random()*1e4+d),console.log(h),sayi1<sayi2?(g=sayi2,h=sayi1):(g=sayi1,h=sayi2),i=g-h,console.log("toplam: "+i),console.log("soruSirasi: "+b),m==1?($("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(g,{point:"."})).css("z-index","4").css("right","0px"),$("#soru",a).append("<div id='cevap1' class='toplanan'>"),$("#cevap1").css("top","10px").css("right","17px").css("z-index","4"),$("#soru",a).append("<div id='cevap2' class='toplanan'>"),$("#cevap2").css("top","50px").css("right","34px").css("z-index","4"),$("#soru",a).append("<input id='girdi1' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi1").attr("style","width:16px !important; right:16px !important; ").css("top","7px").css("z-index","5"),$("#soru",a).append("<input id='girdi2' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi2").attr("style","width:16px !important; right:35px !important; ").css("top","47px").css("z-index","5"),$("input").addClass("input").addClass("number_input_field"),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").html(format(h,{point:"."})).css("right","0px"),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(i,{point:"."})).css("right","0px")):m==2?($("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(g,{point:"."})).css("right","0px"),$("#soru",a).append("<div id='cevap1' class='toplanan'>"),$("#cevap1").css("top","10px").css("right","59px").css("z-index","4"),$("#soru",a).append("<div id='cevap2' class='toplanan'>"),$("#cevap2").css("top","50px").css("right","0px").css("z-index","4"),$("#soru",a).append("<div id='cevap3' class='toplanan'>"),$("#cevap3").css("top","100px").css("right","34px").css("z-index","4"),$("#soru",a).append("<input id='girdi1' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi1").attr("style","width:16px !important; right:60px !important; ").css("top","7px").css("z-index","5"),$("#soru",a).append("<input id='girdi2' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi2").attr("style","width:16px !important; right:0px !important; ").css("top","47px").css("z-index","5"),$("#soru",a).append("<input id='girdi3' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi3").attr("style","width:16px !important; right:35px !important; ").css("top","97px").css("z-index","5"),$("input").addClass("input").addClass("number_input_field"),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").html(format(h,{point:"."})).css("right","0px"),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(i,{point:"."})).css("right","0px")):m==3&&($("#soru",a).append("<div id='toplanan1' class='toplanan'>"),$("#toplanan1").css("top","10px").html(format(g,{point:"."})).css("right","0px"),$("#soru",a).append("<div id='cevap1' class='toplanan'>"),$("#cevap1").css("top","10px").css("right","34px").css("z-index","4"),$("#soru",a).append("<div id='cevap2' class='toplanan'>"),$("#cevap2").css("top","50px").css("right","59px").css("z-index","4"),$("#soru",a).append("<div id='cevap3' class='toplanan'>"),$("#cevap3").css("top","50px").css("right","0").css("z-index","4"),$("#soru",a).append("<input id='girdi1' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi1").attr("style","width:16px !important; right:35px !important; ").css("top","7px").css("z-index","5"),$("#soru",a).append("<input id='girdi2' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi2").attr("style","width:16px !important; right:60px !important; ").css("top","47px").css("z-index","5"),$("#soru",a).append("<input id='girdi3' type='text' maxlength=1  onkeypress='return SadeceRakam(event)'/>"),$("#girdi3").attr("style","width:16px !important; right:0px !important; ").css("top","47px").css("z-index","5"),$("input").addClass("input").addClass("number_input_field"),$("#soru",a).append("<div id='toplanan2' class='toplanan'>"),$("#toplanan2").css("top","50px").html(format(h,{point:"."})).css("right","0px"),$("#soru",a).append("<div id='toplam' class='toplanan'>"),$("#toplam").css("top","100px").html(format(i,{point:"."})).css("right","0px")),$("#girdi1, #girdi2, #girdi3").css("width","120px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px"),$("#soru",a).append("<div id='toplamaIsareti'>"),$("#toplamaIsareti").css("width","120px").css("text-align","left").css("height","30px").css("margin","auto").css("position","absolute").css("right","0px").css("font-size","30px").css("border-bottom","solid 2px black").css("top","60px").html("-"),$(".toplanan").css("width","100px").css("text-align","right").css("height","30px").css("margin","auto").css("position","absolute").css("font-size","30px"),$("#girdi1").keyup(function(){j=$(this).val(),$("#geriBildirim").hide()}),$("#girdi2").keyup(function(){k=$(this).val(),$("#geriBildirim").hide()}),$("#girdi3").keyup(function(){l=$(this).val(),$("#geriBildirim").hide()})}function t(){b++,$("#soru").html(""),$("#geriBildirimText").html(""),$("#sonraki").hide(),$("#btnKontrol").show(),v(),$("#girdi, #girdi1, #girdi2, #girdi3").trigger("yeniSoru"),$("#soru").delay(500).animate({right:"0px"},1e3),$("#cevap").animate({opacity:"0"},1e3),x=1}function v(){switch(b){case 0:case 1:p();break;case 2:case 3:case 4:q();break;case 5:case 6:case 7:r();break;case 8:case 9:console.log("Sou birer bilinmeyen"),m=n[o],console.log("dsd"+o),o++,s(),console.log("xxxxxxxxxxxxxxxxxxxSoru Şekil: "+m),o==3&&(o=0);break;case 10:p(),b=1}}function w(){switch(b){case 10:case 0:case 1:var a=$("#girdi").val(),i=a.indexOf(" ",0);while(i!=-1)a=a.replace(" ",""),i=a.indexOf(" ",0);console.log("girdim eldesiz");var n=parseInt(c)-parseInt(d);console.log(n),console.log(a);if(a=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(a==n)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),a="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap sağ taraftadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),$("#girdi").css("color",yanlisRengi),$("#cevap").html("");var o=new LongSubtraction(c,d,"cevap");o.doldur(),o.basla(1e3,500),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #sonuc").css("color",dogruRengi),a=""}}break;case 2:case 3:case 4:var a=$("#girdi").val(),i=a.indexOf(" ",0);while(i!=-1)a=a.replace(" ",""),i=a.indexOf(" ",0);console.log("girdim eldeli");var n=e-f;console.log(n),console.log(a);if(a=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(a==n)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),a="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap sağ taraftadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),$("#girdi").css("color",yanlisRengi),$("#cevap").html("");var o=new LongSubtraction(e,f,"cevap");o.doldur(),o.basla(1e3,1e3),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #sonuc").css("color",dogruRengi),a=""}}break;case 5:case 6:case 7:if(b==5||b==7){var a=$("#girdi").val(),i=a.indexOf(" ",0);while(i!=-1)a=a.replace(" ",""),i=a.indexOf(" ",0);console.log("girdim soruToplanan"),console.log("toplanan1: "+g),console.log("toplanan2: "+h),n=g-h,console.log("toplam: "+n),console.log(a);if(a=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(a==g)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),a="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap sağ taraftadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),$("#girdi").css("color",yanlisRengi),$("#cevap").html("");var o=new LongSubtraction(g,h,"cevap");o.doldur(),o.basla(1e3,1e3),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #cikan1").css("color",dogruRengi),a=""}}}else{var a=$("#girdi").val(),i=a.indexOf(" ",0);while(i!=-1)a=a.replace(" ",""),i=a.indexOf(" ",0);console.log("girdim soruToplanan"),console.log("toplanan1: "+g),console.log("toplanan2: "+h),n=g-h,console.log("toplam: "+n),console.log(a);if(a=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(a==h)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),a="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap yukarıdadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),$("#girdi").css("color",yanlisRengi),$("#cevap").html("");var o=new LongSubtraction(g,h,"cevap");o.doldur(),o.basla(1e3,1e3),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #cikan2").css("color",dogruRengi),a=""}}}break;case 8:case 9:if(m==1){console.log("girdim soruBirerBilinmeyen1"),toplanan1Basamak=g.toString().charAt(g.toString().length-2),toplanan2Basamak=h.toString().charAt(h.toString().length-3),console.log("toplam1Basamak: "+toplanan1Basamak),console.log("toplam1: "+g),console.log("toplam2Basamak: "+toplanan2Basamak),console.log("toplam2: "+h),n=g-h,console.log("toplam: "+n);if(j==""||k=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(toplanan1Basamak==j&&toplanan2Basamak==k)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),j="",k="",l="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap sağ taraftadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),toplanan1Basamak!=j?$("#girdi1").css("color",yanlisRengi):$("#girdi1").css("color",dogruRengi),toplanan2Basamak!=k?$("#girdi2").css("color",yanlisRengi):$("#girdi2").css("color",dogruRengi),$("#cevap").html("");var o=new LongSubtraction(g,h,"cevap");o.doldur(),o.basla(1e3,1e3),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #cevap1").html(toplanan1Basamak),$("#cevap #cevap2").html(toplanan2Basamak),$("#cevap #cikan1 #ilkBasamak2, #cevap #cikan2 #ikinciBasamak3").css("color",dogruRengi),j="",k=""}}}else if(m==2){console.log("girdim soruBirerBilinmeyen2"),n=g-h,toplanan1Basamak=g.toString().charAt(g.toString().length-4),toplanan2Basamak=h.toString().charAt(h.toString().length-1),toplamBasamak=n.toString().charAt(n.toString().length-3),console.log("toplam1Basamak: "+toplanan1Basamak),console.log("toplam1: "+g),console.log("toplam2Basamak: "+toplanan2Basamak),console.log("toplam2: "+h),console.log("toplam3Basamak: "+toplamBasamak),console.log("toplam3: "+n),console.log("toplam: "+n);if(j==""||k==""||l=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(toplanan1Basamak==j&&toplanan2Basamak==k&&toplamBasamak==l)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),j="",k="",l="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap yukarıdadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),toplanan1Basamak!=j?$("#girdi1").css("color",yanlisRengi):$("#girdi1").css("color",dogruRengi),toplanan2Basamak!=k?$("#girdi2").css("color",yanlisRengi):$("#girdi2").css("color",dogruRengi),toplamBasamak!=l?$("#girdi3").css("color",yanlisRengi):$("#girdi3").css("color",dogruRengi),$("#cevap").html("");var o=new LongSubtraction(g,h,"cevap");o.doldur(),o.basla(1e3,1e3),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #cevap1").html(toplanan1Basamak),$("#cevap #cevap2").html(toplanan2Basamak),$("#cevap #cevap3").html(toplamBasamak),$("#cevap #cikan1 #ilkBasamak4, #cevap #cikan2 #ikinciBasamak1, #cevap #sonuc #sonucBasamak3").css("color",dogruRengi),j="",k="",l=""}}}else if(m==3){console.log("girdim soruBirerBilinmeyen3"),n=g-h,toplanan1Basamak=g.toString().charAt(g.toString().length-3),toplanan2Basamak=h.toString().charAt(h.toString().length-4),toplanan3Basamak=h.toString().charAt(h.toString().length-1),console.log("toplam1Basamak: "+toplanan1Basamak),console.log("toplam1: "+g),console.log("toplam2Basamak: "+toplanan2Basamak),console.log("toplanan2: "+h),console.log("toplam3Basamak: "+toplanan3Basamak),console.log("toplanan2: "+h),console.log("toplam: "+n);if(j==""||k==""||l=="")$("#geriBildirimText").attr("class","status_alert").html("Bütün kutucukları doldurun."),$("#geriBildirim").show(),x=0;else if(toplanan1Basamak==j&&toplanan2Basamak==k&&toplanan3Basamak==l)$("#geriBildirimText").attr("class","status_true").html("Tebrikler."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),j="",k="",l="";else{kontrolSayaci++;if(kontrolSayaci<2)$("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz."),$("#geriBildirim").show();else{kontrolSayaci=0,$("#geriBildirimText").attr("class","status_false").html("Yanlış.<br /> Doğru cevap yukarıdadır."),$("#geriBildirim").show(),$("#btnKontrol").hide(),$("#sonraki").show(),toplanan1Basamak!=j?$("#girdi1").css("color",yanlisRengi):$("#girdi1").css("color",dogruRengi),toplanan2Basamak!=k?$("#girdi2").css("color",yanlisRengi):$("#girdi2").css("color",dogruRengi),toplanan3Basamak!=l?$("#girdi3").css("color",yanlisRengi):$("#girdi3").css("color",dogruRengi),$("#cevap").html("");var o=new LongSubtraction(g,h,"cevap");o.doldur(),o.basla(1e3,1e3),$("#soru").animate({right:"240px"},1e3),$("#cevap").delay(800).animate({opacity:"1"},1e3),$("#cevap #cevap1").html(toplanan1Basamak),$("#cevap #cevap2").html(toplanan2Basamak),$("#cevap #cevap3").html(toplanan3Basamak),$("#cevap #cikan1 #ilkBasamak3, #cevap #cikan2 #ikinciBasamak1, #cevap #cikan2 #ikinciBasamak4").css("color",dogruRengi),j="",k="",l=""}}}}}Main.setObjective("Yandaki çıkarma işlemini yapınız ve kontrol ediniz.");var b=0,c="",d="",e="",f="",g="",h="",i="",j="",k="",l="",m=0,n=Array(),n=Util.getShuffledArray(4,1);console.log(n);var o=0;m=n[o],console.log(m),$(a).append("<div id='soru'>"),$("#soru").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("left","0").css("right","0").css("top","0px").css("bottom","0px").css("font-size","20px"),$(a).append("<div id='cevap'>"),$("#cevap").css("width","120px").css("height","130px").css("margin","auto").css("position","absolute").css("right","120px").css("top","0px").css("bottom","0px").css("font-size","20px").css("opacity","0"),$(a).append("<div class='status_field' id='geriBildirim'>"),$("#geriBildirim",a).append("<div id='geriBildirimText'></div>"),$("#geriBildirim").css("position","absolute").css("top","250px").css("right","0").css("left","0").css("margin","auto").css("width","210px"),$(a).append("<button class='control_button' id='btnKontrol'></button>"),$(a).append("<style>.control_button{position:absolute; top:250px; right:50px; }</style>"),$(a).append("<button id='sonraki' class='next_button'>"),$("#sonraki").css("position","absolute").css("right","50px").css("margin","auto").css("top","250px").css("text-align","center").hide(),$("#girdi1, #girdi2, #girdi3").keyup(function(){$("#geriBildirim").hide()}),$("#btnKontrol").click(function(){w()}),$("#sonraki").click(function(){t()});var u=1;v(),kontrolSayaci=0;var x=1;$("#girdi").keydown(function(a){var b;a.keyCode==8?b=1:b=0;if(this.createTextRange){var c=node.createTextRange();return c.collapse(!0),c.moveEnd(b),c.moveStart(b),c.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(b,b),!0}),$("#girdi").live("yeniGirdi",function(){$(this).keydown(function(a){var b;a.keyCode==8?b=1:b=0;if(this.createTextRange){var c=node.createTextRange();return c.collapse(!0),c.moveEnd(b),c.moveStart(b),c.select(),!0}if(this.setSelectionRange)return this.setSelectionRange(b,b),!0})}),$(this).keyup(function(a){a.keyCode==13&&(x<3?w():t(),x++)})};var format=function(a,b){b.point=b.point||",",b.group=b.group||" ",b.places=b.places||0,b.suffix=b.suffix||"",b.prefix=b.prefix||"",regex=/(\d+)(\d{3})/,result=(isNaN(a)?0:Math.abs(a)).toFixed(b.places)+"";for(result=result.replace(".",b.point);regex.test(result)&&b.group;result=result.replace(regex,"$1"+b.group+"$2"));return(a<0?"-":"")+b.prefix+result+b.suffix};