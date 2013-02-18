/**
 * Doğal sayılarla toplama işlemi
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 17.07.2012
 * 
 * 
 */

var dropableShapeHoverStyle = {fillColor:'#afa'};
var dropableShapeDefaultStyle = {fillColor:'#fff'};
var yanlisRengi="red";
var dogruRengi="green";




var Animation = {
    init:function(container){

        $(container).append("<div id='ornek'>");
        $("#ornek").css("width","120px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("left","0")
            .css("right","0")
            .css("top","40px");

        var toplamaIslemi=new LongAddition(93507,78235,"ornek");

        toplamaIslemi.doldur();
        toplamaIslemi.basla(1000,800);
        Main.animationFinished(12000);


    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }



        Main.setObjective("Yandaki toplama işlemini yapınız ve kontrol ediniz. (Cevabı birler basamağından başlayarak yazınız.)");

        soruSirasi=0;

        // eldesiz toplama için
        nihaiToplanan1="";
        nihaiToplanan2="";

        // eldeli toplama için
        eldeliToplanan1="";
        eldeliToplanan2="";

        // soruToplananlar için
        toplanan1="";
        toplanan2="";
        toplam="";
        //var soruToplananlarSıra=0;

        // sorBirerBilinmeyen için
        cevap1="";
        cevap2="";
        cevap3="";
        soruSekil=0;
        soruSekilSira= Array();
        soruSekilSira=Util.getShuffledArray(4,1);
        console.log(soruSekilSira);
        soruNo=0;
        soruSekil=soruSekilSira[soruNo];
        console.log(soruSekil);




        $(container).append("<div id='soru'>");
        $("#soru").css("width","120px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("left","0")
            .css("right","0")
            .css("top","0px")
            .css("bottom","0px")
            .css("font-size","20px");
        //.css("border","solid 1px black");

        $(container).append("<div id='cevap'>");
        $("#cevap").css("width","120px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            //.css("left","0")
            .css("right","120px")
            .css("top","0px")
            .css("bottom","0px")
            .css("font-size","20px")
            .css("opacity","0");








        Interaction.appendButton({top:"250px", right:"50px"});
        Interaction.appendStatus({top:"250px", right:"0px", left:"0px", margin:"auto",width:"210px",textAlign:"center"});



        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(){

        yeniSoru();
        $("input").attr("onkeypress",'return SadeceRakam(event)');


    },
    preCheck: function(){


    },
    isAnswerCorrect : function(values){
        $("#cevap").html("");
        switch (soruSirasi){
            case 10:
            case 0:
            case 1:
                var icerik=$("#girdi").val();
                var index = icerik.indexOf(" ", 0);
                while (index != -1) {
                    icerik = icerik.replace(" ", "");
                    index = icerik.indexOf(" ", 0);
                }
                console.log("girdim eldesiz");
                var toplam=parseInt(nihaiToplanan1)+parseInt(nihaiToplanan2);
                console.log(toplam);
                console.log(icerik);
                if(icerik==toplam){

                    icerik="";
                    return true;

                }
                else{



                    return false;

                }

                break;
            case 2:
            case 3:
            case 4:
                var icerik=$("#girdi").val();
                var index = icerik.indexOf(" ", 0);
                while (index != -1) {
                    icerik = icerik.replace(" ", "");
                    index = icerik.indexOf(" ", 0);
                }
                console.log("girdim eldeli");
                var toplam=eldeliToplanan1+eldeliToplanan2;
                console.log(toplam);
                console.log(icerik);

                    if(icerik==toplam){
                        return true;

                    }
                    else{

                            return false;



                }
                break;
            case 5:
            case 6:
            case 7:
                if(soruSirasi==5 || soruSirasi==7){
                    var icerik=$("#girdi").val();
                    var index = icerik.indexOf(" ", 0);
                    while (index != -1) {
                        icerik = icerik.replace(" ", "");
                        index = icerik.indexOf(" ", 0);
                    }
                    console.log("girdim soruToplanan");
                    //toplanan1=toplam-toplanan2;
                    console.log("toplanan1: "+toplanan1);
                    console.log("toplanan2: "+toplanan2);
                    toplam=toplanan1+toplanan2;
                    console.log("toplam: "+toplam);
                    console.log(icerik);


                        if(icerik==toplanan1){
                            return true;

                        }
                        else{
                            return false;

                    }
                }
                else{
                    var icerik=$("#girdi").val();
                    var index = icerik.indexOf(" ", 0);
                    while (index != -1) {
                        icerik = icerik.replace(" ", "");
                        index = icerik.indexOf(" ", 0);
                    }
                    console.log("girdim soruToplanan");
                    //toplanan1=toplam-toplanan2;
                    console.log("toplanan1: "+toplanan1);
                    console.log("toplanan2: "+toplanan2);
                    toplam=toplanan1+toplanan2;
                    console.log("toplam: "+toplam);
                    console.log(icerik);


                        if(icerik==toplanan2){
                            return true;

                        }
                        else{
                            return false;


                        }

                }
                break;
            case 8:
            case 9:
                if(soruSekil==1){

                    console.log("girdim soruBirerBilinmeyen1");
                    toplanan1Basamak=toplanan1.toString().charAt(toplanan1.toString().length-2)
                    toplanan2Basamak=toplanan2.toString().charAt(toplanan2.toString().length-3)
                    console.log("toplam1Basamak: "+toplanan1Basamak);
                    console.log("toplam1: "+toplanan1);
                    console.log("toplam2Basamak: "+toplanan2Basamak);
                    console.log("toplam2: "+toplanan2);
                    toplam=toplanan1+toplanan2;
                    console.log("toplam: "+toplam);
                    console.log("verilen cevaplar: 1: "+girdi1.value()+" 2: "+girdi2.value());



                        if(toplanan1Basamak==girdi1 && toplanan2Basamak==girdi2){
                            girdi1="";
                            girdi2="";
                            girdi3="";
                            return true;
                        }
                        else{
                          return false;
                        }

                }
                else if(soruSekil==2){
                    console.log("girdim soruBirerBilinmeyen2");
                    toplam=toplanan1+toplanan2;

                    toplanan1Basamak=toplanan1.toString().charAt(toplanan1.toString().length-4);
                    toplanan2Basamak=toplanan2.toString().charAt(toplanan2.toString().length-1);
                    toplamBasamak=toplam.toString().charAt(toplam.toString().length-3);
                    console.log("toplam1Basamak: "+toplanan1Basamak);
                    console.log("toplam1: "+toplanan1);
                    console.log("toplam2Basamak: "+toplanan2Basamak);
                    console.log("toplam2: "+toplanan2);
                    console.log("toplam3Basamak: "+toplamBasamak);
                    console.log("toplam3: "+toplam);

                    console.log("toplam: "+toplam);

                    console.log("verilen cevaplar: 1: "+girdi1+" 2: "+girdi2+" 3: "+girdi3);

                        if(toplanan1Basamak==girdi1 && toplanan2Basamak==girdi2 &&toplamBasamak==girdi3){
                            $("#geriBildirimText").attr("class","status_true").html("Tebrikler.");
                            $("#geriBildirim").show();
                            $("#btnKontrol").hide();
                            $("#sonraki").show();
                            girdi1="";
                            girdi2="";
                            girdi3="";

                            return true;
                        }
                        else{

                            return false;
                        }

                }
                else if(soruSekil==3){
                    console.log("girdim soruBirerBilinmeyen3");
                    toplam=toplanan1+toplanan2;

                    toplanan1Basamak=toplanan1.toString().charAt(toplanan1.toString().length-3);
                    toplanan2Basamak=toplanan2.toString().charAt(toplanan2.toString().length-4);
                    toplanan3Basamak=toplanan2.toString().charAt(toplanan2.toString().length-1);
                    console.log("toplam1Basamak: "+toplanan1Basamak);
                    console.log("toplam1: "+toplanan1);
                    console.log("toplam2Basamak: "+toplanan2Basamak);
                    console.log("toplanan2: "+toplanan2);
                    console.log("toplam3Basamak: "+toplanan3Basamak);
                    console.log("toplanan2: "+toplanan2);

                    console.log("toplam: "+toplam);

                    console.log("verilen cevaplar: 1: "+girdi1+" 2: "+girdi2+" 3: "+girdi3);

                        if(toplanan1Basamak==girdi1 && toplanan2Basamak==girdi2 &&toplanan3Basamak==girdi3){

                            girdi1="";
                            girdi2="";
                            girdi3="";

                            return true;

                        }
                        else{
                           return false;
                        }

                }
                break;


        }
    },
    onCorrectAnswer : function(){
        Interaction.setStatus('Tebrikler',true);
    },
    onWrongAnswer : function(){
        Interaction.setStatus('Tekrar deneyiniz.',false);



    },
    onFail : function(){

        switch (soruSirasi){
            case 10:
            case 0:
            case 1:
                var icerik=$("#girdi").val();
                var index = icerik.indexOf(" ", 0);
                while (index != -1) {
                    icerik = icerik.replace(" ", "");
                    index = icerik.indexOf(" ", 0);
                }
                console.log("girdim eldesiz");
                var toplam=parseInt(nihaiToplanan1)+parseInt(nihaiToplanan2);
                console.log(toplam);
                console.log(icerik);

                    $("#girdi").css("color",yanlisRengi);


                    var toplamaIslemi=new LongAddition(nihaiToplanan1,nihaiToplanan2,"cevap");
                    toplamaIslemi.doldur();

                    toplamaIslemi.basla(1000,800);


                    $("#soru").animate({right:"240px"},1000);
                    $("#cevap").delay(800).animate({opacity:"1"},1000);

                    $("#cevap #toplam").css("color",dogruRengi);


                    icerik="";




                break;
            case 2:
            case 3:
            case 4:
                $("#girdi").css("color",yanlisRengi);

                //$("#cevap").html($("#soru").html());
                //$("#cevap input").remove();

                var toplamaIslemi=new LongAddition(eldeliToplanan1,eldeliToplanan2,"cevap");
                toplamaIslemi.doldur();
                toplamaIslemi.basla(1000,800);

                $("#soru").animate({right:"240px"},1000);
                $("#cevap").delay(800).animate({opacity:"1"},1000);
                $("#cevap #toplam").css("color",dogruRengi);

                icerik="";




                break;
            case 5:
            case 6:
            case 7:
                if(soruSirasi==5 || soruSirasi==7){
                    $("#girdi").css("color",yanlisRengi);

                    //$("#cevap").html($("#soru").html());
                    //$("#cevap input").remove();

                    var toplamaIslemi=new LongAddition(toplanan1,toplanan2,"cevap");
                    toplamaIslemi.doldur();
                    toplamaIslemi.basla(1000,800);

                    $("#soru").animate({right:"240px"},1000);
                    $("#cevap").delay(800).animate({opacity:"1"},1000);
                    $("#cevap #toplanan1").css("color",dogruRengi);
                    icerik="";
                }
                else{

                    $("#girdi").css("color",yanlisRengi);

                    //$("#cevap").html($("#soru").html());
                    //$("#cevap input").remove();

                    var toplamaIslemi=new LongAddition(toplanan1,toplanan2,"cevap");
                    toplamaIslemi.doldur();
                    toplamaIslemi.basla(1000,800);

                    $("#soru").animate({right:"240px"},1000);
                    $("#cevap").delay(800).animate({opacity:"1"},1000);
                    $("#cevap #toplanan2").css("color",dogruRengi);

                    icerik="";

                }
                break;
            case 8:
            case 9:
                if(soruSekil==1){


                    if(toplanan1Basamak!=girdi1)
                        $("#girdi1").css("color",yanlisRengi);
                    else
                        $("#girdi1").css("color",dogruRengi);

                    if(toplanan2Basamak!=girdi2)
                        $("#girdi2").css("color",yanlisRengi);
                    else
                        $("#girdi2").css("color",dogruRengi);

                    //$("#cevap").html($("#soru").html());
                    //$("#cevap input").remove();

                    var toplamaIslemi=new LongAddition(toplanan1,toplanan2,"cevap");
                    toplamaIslemi.doldur();
                    toplamaIslemi.basla(1000,800);


                    $("#soru").animate({right:"240px"},1000);
                    $("#cevap").delay(800).animate({opacity:"1"},1000);
                    $("#cevap #cevap1").html(toplanan1Basamak);
                    $("#cevap #cevap2").html(toplanan2Basamak);

                    $("#cevap #ilkBasamak2, #cevap #ikinciBasamak3").css("color",dogruRengi);


                    girdi1="";
                    girdi2="";

                }
                else if(soruSekil==2){

                    if(toplanan1Basamak!=girdi1)
                        $("#girdi1").css("color",yanlisRengi);
                    else
                        $("#girdi1").css("color",dogruRengi);

                    if(toplanan2Basamak!=girdi2)
                        $("#girdi2").css("color",yanlisRengi);
                    else
                        $("#girdi2").css("color",dogruRengi);

                    if(toplamBasamak!=girdi3)
                        $("#girdi3").css("color",yanlisRengi);
                    else
                        $("#girdi3").css("color",dogruRengi);

                    //$("#cevap").html($("#soru").html());
                    //$("#cevap input").remove();

                    var toplamaIslemi=new LongAddition(toplanan1,toplanan2,"cevap");
                    toplamaIslemi.doldur();
                    toplamaIslemi.basla(1000,800);


                    $("#soru").animate({right:"240px"},1000);
                    $("#cevap").delay(800).animate({opacity:"1"},1000);
                    $("#cevap #cevap1").html(toplanan1Basamak);
                    $("#cevap #cevap2").html(toplanan2Basamak);
                    $("#cevap #cevap3").html(toplamBasamak);

                    $("#cevap #ilkBasamak4, #cevap #ikinciBasamak1, #cevap #toplamBasamak3").css("color",dogruRengi);
                    girdi1="";
                    girdi2="";
                    girdi3="";

                }
                else if(soruSekil==3){

                    if(toplanan1Basamak!=girdi1)
                        $("#girdi1").css("color",yanlisRengi);
                    else
                        $("#girdi1").css("color",dogruRengi);

                    if(toplanan2Basamak!=girdi2)
                        $("#girdi2").css("color",yanlisRengi);
                    else
                        $("#girdi2").css("color",dogruRengi);

                    if(toplanan3Basamak!=girdi3)
                        $("#girdi3").css("color",yanlisRengi);
                    else
                        $("#girdi3").css("color",dogruRengi);

                    //$("#cevap").html($("#soru").html());
                    //$("#cevap input").remove();

                    var toplamaIslemi=new LongAddition(toplanan1,toplanan2,"cevap");
                    toplamaIslemi.doldur();
                    toplamaIslemi.basla(1000,800);

                    $("#soru").animate({right:"240px"},1000);
                    $("#cevap").delay(800).animate({opacity:"1"},1000);

                    $("#cevap #cevap1").html(toplanan1Basamak);
                    $("#cevap #cevap2").html(toplanan2Basamak);
                    $("#cevap #cevap3").html(toplanan3Basamak);

                    $("#cevap #ilkBasamak3, #cevap #ikinciBasmak1, #cevap #ikinciBasamak4").css("color",dogruRengi);
                    girdi1="";
                    girdi2="";
                    girdi3="";

                }
                break;


        }

        Interaction.setStatus("Yanlış.<br /> Doğru cevap yukarıdadır.",false);
    }
}


//Eldesiz
function eldesizToplama(){

    console.log("soruSirasi: "+soruSirasi+" eldessiz");
    nihaiToplanan1="";
    nihaiToplanan2="";

    var rastgeleSayi=(Math.floor(Math.random()*10)+1);
    var sayiSiniri=rastgeleSayi%2?10000:1000;
    console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
    var toplanan1=Math.floor(Math.random()*10000+sayiSiniri);
    console.log(toplanan1);
    var toplanan2=Math.floor(Math.random()*10000+sayiSiniri);
    console.log(toplanan2);
    var basamakSayisi=rastgeleSayi%2?5:4;
    console.log("basamak saysı: "+basamakSayisi);

    var strToplanan1=new String(toplanan1);
    var strToplanan2=new String(toplanan2);

    var basamakDegeri1=Array();
    var basamakDegeri2=Array();


    for (var i=4; i>=0;i--){
        var yeniBasamak1, yeniBasamak2;
        if((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i)))>=10){

            console.log("eldesiz değil");
            console.log((strToplanan1.charAt(i)+", "+strToplanan2.charAt(i)));
            console.log((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i))));
            var cikarilacak=((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i))))-9;
            console.log("cıakrilaca: "+cikarilacak);
            if((parseInt(strToplanan1.charAt(i))<(parseInt(strToplanan2.charAt(i))))){
                yeniBasamak1=((parseInt(strToplanan2.charAt(i))-cikarilacak));
                yeniBasamak2=parseInt(strToplanan1.charAt(i));
            }
            else{
                yeniBasamak1=((parseInt(strToplanan1.charAt(i))-cikarilacak));
                yeniBasamak2=parseInt(strToplanan2.charAt(i));
            }
        }
        else{
            yeniBasamak1=parseInt(strToplanan1.charAt(i));
            yeniBasamak2=parseInt(strToplanan2.charAt(i));
        }

        basamakDegeri1[i]=yeniBasamak1;
        basamakDegeri2[i]=yeniBasamak2;

    }

    /*for(var i=4; i>=0;i--){
     console.log((strToplanan1.charAt(i)+", "+strToplanan2.charAt(i)));
     console.log((parseInt(strToplanan1.charAt(i))+parseInt(strToplanan2.charAt(i))));
     }*/
    for(var i=0; i<basamakSayisi;i++){
        nihaiToplanan1+=basamakDegeri1[i];
        nihaiToplanan2+=basamakDegeri2[i];
    }

    console.log(nihaiToplanan1);
    console.log(nihaiToplanan2);

    var toplam=parseInt(nihaiToplanan1)+parseInt(nihaiToplanan2);
    $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
    $("#soru #toplanan1")
        .css("top","10px").html(format(nihaiToplanan1, {point:'.'}));

    $("#soru",container).append("<div id='toplanan2' class='toplanan'>");
    $("#soru #toplanan2")
        .css("top","50px").html(format(nihaiToplanan2, {point:'.'}));

    $("#soru",container).append("<div id='toplamaIsareti'>");
    $("#soru #toplamaIsareti").css("width","120px")
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
    $("#soru .toplanan").css("width","100%")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px");
    //.css("border","solid 1px black");

    var girdi=Interaction.appendInput({
        width: "120px",
        textAlign: "right",
        height: "30px",
        margin: "auto",
        position: "absolute",
        right: "0px",
        fontSize: "30px"

    },false,false);
    girdi.id="girdi";
    $("#soru",container).append(girdi);


    $("#soru",container).append("<div id='toplam' class='toplanan'>");
    $("#soru #toplam")
        .css("top","100px").html(format(toplam, {point:'.'}));

    $("#soru .toplanan").css("width","100%")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px")
        .css("z-index","4");
    //.css("border","solid 1px black");

    $("#soru #girdi").css("width","120px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        .css("right","0px")
        .css("font-size","30px")
        .css("top","100px")
        .css("z-index","5").attr("maxlength","6");


    $("#soru #girdi").keydown(InputReverseWriteable);

    $("#soru #girdi").keyup(
        function(){
            var icerik=$(this).val();

            $(this).val(icerik)
            console.log($(this).val());
        }
    );

    $("#soru #girdi").change(
        function(){
            var icerik=$(this).val();
            var index = icerik.indexOf(" ", 0);
            while (index != -1) {
                icerik = icerik.replace(" ", "");
                index = icerik.indexOf(" ", 0);
            }
            $(this).val(format(icerik, {point:'.'}));
            console.log($(this).val());
        }
    );

}


// Eldeli
function eldeliToplama(){
    console.log("soruSirasi: "+soruSirasi+" eldeli");
    eldeliToplanan1="";
    eldeliToplanan2="";
    var rastgeleSayi=(Math.floor(Math.random()*10)+1);
    var sayiSiniri=rastgeleSayi%2?10000:1000;
    console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
    var toplanan1=Math.floor(Math.random()*10000+sayiSiniri);
    console.log(toplanan1);
    var toplanan2=Math.floor(Math.random()*10000+sayiSiniri);


    if(toplanan1<toplanan2){
        eldeliToplanan1=toplanan2;
        eldeliToplanan2=toplanan1;
    }
    else{
        eldeliToplanan1=toplanan1;
        eldeliToplanan2=toplanan2;
    }

    toplam=parseInt(eldeliToplanan1,10)+parseInt(eldeliToplanan2,10);

    $(" #soru",container).append("<div id='toplanan1' class='toplanan'>");
    $("#soru #toplanan1")
        .css("top","10px").html(format(eldeliToplanan1, {point:'.'}));

    $(" #soru",container).append("<div id='toplanan2' class='toplanan'>");
    $("#soru #toplanan2")
        .css("top","50px").html(format(eldeliToplanan2, {point:'.'}));

    $("#soru",container).append("<div id='toplamaIsareti'>");
    $("#soru #toplamaIsareti").css("width","120px")
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
    $("#soru .toplanan").css("width","100px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px");
    //.css("border","solid 1px black");

    $("#soru",container).append("<div id='toplam' class='toplanan'>");
    $("#soru #toplam")
        .css("top","100px").html(format(toplam, {point:'.'}));

    $("#soru .toplanan").css("width","100px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px")
        .css("z-index","4");
    //.css("border","solid 1px black");
    var girdi=Interaction.appendInput({
        width: "120px",
        textAlign: "right",
        height: "30px",
        margin: "auto",
        position: "absolute",
        right: "0px",
        fontSize: "30px"

    },false,false);
    girdi.id="girdi";
    $("#soru",container).append(girdi);
    $("#soru #girdi").css("width","120px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px")
        //.css("border-bottom","solid 2px black")
        .css("top","100px")
        .css("z-index","5").attr("maxlength","6")
        .html("+");

    $("#girdi").keydown(InputReverseWriteable);

    $("#girdi").keyup(
        function(){
            var icerik=$(this).val();

            $(this).val(icerik);
            console.log($(this).val());
        }
    );

    $("#girdi").change(
        function(){
            var icerik=$(this).val();
            var index = icerik.indexOf(" ", 0);
            while (index != -1) {
                icerik = icerik.replace(" ", "");
                index = icerik.indexOf(" ", 0);
            }
            $(this).val(format(icerik, {point:'.'}));
            console.log($(this).val());
        }
    );

}

// Soru toplananlar
function soruToplananlar(){
    console.log("soruSirasi: "+soruSirasi+" soruToplananlar");
    toplanan1="";
    toplanan2="";
    toplam="";
    var rastgeleSayi=(Math.floor(Math.random()*10)+1);
    var sayiSiniri=rastgeleSayi%2?10000:1000;
    console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
    sayi1=Math.floor(Math.random()*10000+sayiSiniri);
    console.log(toplanan1);
    sayi2=Math.floor(Math.random()*10000+sayiSiniri);
    if(sayi1<sayi2){
        toplanan1=sayi2;
        toplanan2=sayi1;
    }
    else{
        toplanan1=sayi1;
        toplanan2=sayi2;
    }


    toplam=toplanan1+toplanan2;
    console.log("toplam: "+toplam);

    /*
     $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
     $("#soru #toplanan1")
     .css("top","10px").html(format(toplanan1, {point:'.'}))
     .css("z-index","4");*/
    var girdi=Interaction.appendInput({
        width: "120px",
        textAlign: "right",
        height: "30px",
        margin: "auto",
        position: "absolute",
        right: "0px",
        fontSize: "30px"

    },false,false);
    girdi.id="girdi";
    console.log("soruSirasi: "+soruSirasi);
    if(soruSirasi==5 || soruSirasi==7){
        $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
        $("#soru #toplanan1")
            .css("top","10px").html(format(toplanan1, {point:'.'}))
            .css("z-index","4")
            .css("top","10px").css("z-index","4");



        $("#soru",container).append(girdi);
        $("#soru #girdi").css("top","10px").css("z-index","5");


        $("#soru",container).append("<div id='toplanan2' class='toplanan'>");
        $("#soru #toplanan2")
            .css("top","50px").html(format(toplanan2, {point:'.'}));

        $("#soru",container).append("<div id='toplam' class='toplanan'>");
        $("#soru #toplam")
            .css("top","100px").html(format(toplam, {point:'.'}));
    }
    else if(soruSirasi==6){
        $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
        $("#soru #toplanan1")
            .css("top","10px").html(format(toplanan1, {point:'.'}));

        $("#soru",container).append(girdi);
        $("#girdi").attr("style","width:100px !important").css("top","50px").css("z-index","5");
        $("input").addClass("input").addClass("number_input_field");

        $("#soru",container).append("<div id='toplanan2' class='toplanan'>");
        $("#soru #toplanan2")
            .css("top","50px").css("z-index","4").html(format(toplanan2, {point:'.'}));;

        /*$("#soru",container).append("<div id='toplanan2' class='toplanan'>");
         $("#toplanan2")
         .css("top","50px").html(format(toplanan2, {point:'.'}));*/

        $("#soru",container).append("<div id='toplam' class='toplanan'>");
        $("#soru #toplam")
            .css("top","100px").html(format(toplam, {point:'.'}));
    }



    $("#girdi").css("width","120px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        .css("right","0px")
        .css("font-size","30px").attr("maxlength","7");



    $("#soru",container).append("<div id='toplamaIsareti'>");
    $("#soru #toplamaIsareti").css("width","120px")
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

    $("#soru .toplanan").css("width","100px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px");
    //.css("border","solid 1px black");

    $("#girdi").keydown(InputReverseWriteable);

    $("#girdi").keyup(
        function(){
            var icerik=$(this).val();

            $(this).val(icerik);
            console.log($(this).val());
        }
    );

    $("#girdi").change(
        function(){
            var icerik=$(this).val();
            var index = icerik.indexOf(" ", 0);
            while (index != -1) {
                icerik = icerik.replace(" ", "");
                index = icerik.indexOf(" ", 0);
            }
            $(this).val(format(icerik, {point:'.'}));
            console.log($(this).val());
        }
    );

}

// Soru birerBilinmeyen
function soruBirerBilinmeyen(){
    console.log("soruSirasi: "+soruSirasi+"Birer Bilinmeyen");

    toplanan1="";
    toplanan2="";
    toplanan3="";
    toplam="";
    var rastgeleSayi=(Math.floor(Math.random()*10)+1);
    var sayiSiniri=rastgeleSayi%2?10000:1000;
    console.log("basamak: "+rastgeleSayi+" sayi: "+sayiSiniri);
    sayi1=Math.floor(Math.random()*10000+sayiSiniri);
    console.log(toplanan1);

    sayi2=Math.floor(Math.random()*10000+sayiSiniri);
    console.log(toplanan2);

    if(sayi1<sayi2){
        toplanan1=sayi2;
        toplanan2=sayi1;
    }
    else{
        toplanan1=sayi1;
        toplanan2=sayi2;
    }
    toplam=toplanan1+toplanan2;
    console.log("toplam: "+toplam);


    /*$("#soru",container).append("<div id='toplanan1' class='toplanan'>");
     $("#toplanan1")
     .css("top","10px").html(format(eldeliToplanan1, {point:'.'}));*/
    console.log("soruSirasi: "+soruSirasi);



    if(soruSekil==1){

        var input1=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input1.id="girdi1";

        var input2=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input2.id="girdi2";

        $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
        $("#soru #toplanan1")
            .css("top","10px").html(format(toplanan1, {point:'.'})).css("z-index","4").css("right","0px");

        $("#soru",container).append("<div id='cevap1' class='toplanan'>");
        $("#soru #cevap1")
            .css("top","10px").css("right","17px").css("z-index","4");

        $("#soru",container).append("<div id='cevap2' class='toplanan'>");
        $("#soru #cevap2")
            .css("top","50px").css("right","34px").css("z-index","4");



        $("#soru",container).append(input1);
        $("#girdi1").attr("style","width:16px !important; right:16px !important; ").css("top","7px").css("z-index","5");
        $("#soru",container).append(input2);
        $("#girdi2").attr("style","width:16px !important; right:35px !important; ").css("top","47px").css("z-index","5");

        $("#soru",container).append("<div id='toplanan2' class='toplanan'>");
        $("#soru #toplanan2")
            .css("top","50px").html(format(toplanan2, {point:'.'})).css("right","0px");

        $("#soru",container).append("<div id='toplam' class='toplanan'>");
        $("#soru #toplam")
            .css("top","100px").html(format(toplam, {point:'.'})).css("right","0px");
    }
    else if(soruSekil==2){

        var input1=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input1.id="girdi1";

        var input2=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input2.id="girdi2";

        var input3=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input3.id="girdi3";


        $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
        $("#soru #toplanan1")
            .css("top","10px").html(format(toplanan1, {point:'.'})).css("right","0px");

        $("#soru",container).append("<div id='cevap1' class='toplanan'>");
        $("#soru #cevap1")
            .css("top","10px").css("right","59px").css("z-index","4");

        $("#soru",container).append("<div id='cevap2' class='toplanan'>");
        $("#soru #cevap2")
            .css("top","50px").css("right","0px").css("z-index","4");;

        $("#soru",container).append("<div id='cevap3' class='toplanan'>");
        $("#soru #cevap3")
            .css("top","100px").css("right","34px").css("z-index","4");

        $("#soru",container).append(input1);
        $("#girdi1").attr("style","width:16px !important; right:60px !important; ").css("top","7px").css("z-index","5");
        $("#soru",container).append(input2);
        $("#girdi2").attr("style","width:16px !important; right:0px !important; ").css("top","47px").css("z-index","5");
        $("#soru",container).append(input3);
        $("#girdi3").attr("style","width:16px !important; right:35px !important; ").css("top","97px").css("z-index","5");
        $("input").addClass("input").addClass("number_input_field");

        $("#soru",container).append("<div id='toplanan2' class='toplanan'>");
        $("#soru #toplanan2")
            .css("top","50px").html(format(toplanan2, {point:'.'})).css("right","0px");

        $("#soru",container).append("<div id='toplam' class='toplanan'>");
        $("#soru #toplam")
            .css("top","100px").html(format(toplam, {point:'.'})).css("right","0px");
    }
    else if(soruSekil==3){

        var input1=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input1.id="girdi1";

        var input2=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input2.id="girdi2";

        var input3=Interaction.appendInput({
            width: "120px",
            textAlign: "right",
            height: "30px",
            margin: "auto",
            position: "absolute",
            right: "0px",
            fontSize: "30px"

        },false,false);
        input3.id="girdi3";


        $("#soru",container).append("<div id='toplanan1' class='toplanan'>");
        $("#soru #toplanan1")
            .css("top","10px").html(format(toplanan1, {point:'.'})).css("right","0px");

        $("#soru",container).append("<div id='cevap1' class='toplanan'>");
        $("#soru #cevap1")
            .css("top","10px").css("right","34px").css("z-index","4");

        $("#soru",container).append("<div id='cevap2' class='toplanan'>");
        $("#soru #cevap2")
            .css("top","50px").css("right","59px").css("z-index","4");

        $("#soru",container).append("<div id='cevap3' class='toplanan'>");
        $("#soru #cevap3")
            .css("top","50px").css("right","0").css("z-index","4");

        $("#soru",container).append(input1);
        $("#girdi1").attr("style","width:16px !important; right:35px !important; ").css("top","7px").css("z-index","5");
        $("#soru",container).append(input2);
        $("#girdi2").attr("style","width:16px !important; right:60px !important; ").css("top","47px").css("z-index","5");
        $("#soru",container).append(input3);
        $("#girdi3").attr("style","width:16px !important; right:0px !important; ").css("top","47px").css("z-index","5");
        $("input").addClass("input").addClass("number_input_field");

        $("#soru",container).append("<div id='toplanan2' class='toplanan'>");
        $("#soru #toplanan2")
            .css("top","50px").html(format(toplanan2, {point:'.'})).css("right","0px");

        $("#soru",container).append("<div id='toplam' class='toplanan'>");
        $("#soru #toplam")
            .css("top","100px").html(format(toplam, {point:'.'})).css("right","0px");
    }

    $("#girdi1, #girdi2, #girdi3").css("width","120px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        .css("right","0px")
        .css("font-size","30px").attr("maxlength","1");



    $("#soru",container).append("<div id='toplamaIsareti'>");
    $("#soru #toplamaIsareti").css("width","120px")
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

    $("#soru .toplanan").css("width","100px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        //.css("right","0px")
        .css("font-size","30px");
    //.css("border","solid 1px black");


    $("#girdi1").keyup(

        function(){
            alert($(this).val());

            girdi1=$(this).val();
            $("#geriBildirim").hide();
        }
    );



    $("#girdi2").keyup(
        function(){
            girdi2=$(this).val();
            $("#geriBildirim").hide();
        }
    );


    $("#girdi3").keyup(
        function(){
            girdi3=$(this).val();
            $("#geriBildirim").hide();
        }
    );
}

function yeniSoru(){

    soruSirasi++;
    $("#soru").html("");
    $("#geriBildirimText").html("");
    $("#sonraki").hide();
    $("#btnKontrol").show();
    soruGetir();
    $("#girdi, #girdi1, #girdi2, #girdi3").trigger("yeniSoru");

    $("#soru").delay(500).animate({right:"0px"},1000);
    $("#cevap").animate({opacity:"0"},1000);

}

function soruGetir(){
    Interaction.flushInputs();
    switch(soruSirasi){

        case 0:
        case 1:
            eldesizToplama();

            break;
        case 2:
        case 3:
        case 4:
            eldeliToplama();

            break;
        case 5:
        case 6:
        case 7:
            soruToplananlar();
            break;
        case 8:
        case 9:
            console.log("Sou birer bilinmeyen");
            soruSekil=soruSekilSira[soruNo];
            console.log("dsd"+soruNo);
            soruNo++;
            soruBirerBilinmeyen();

            console.log("xxxxxxxxxxxxxxxxxxxSoru Şekil: "+soruSekil);
            if(soruNo==3)
                soruNo=0;
            break;
        case 10:
            eldesizToplama();
            soruSirasi=1;
            break;


    }
}


// Sadece rakam girilmesini sağlanıyor.
	function SadeceRakam(e,allowedchars){var key=e.charCode==undefined?e.keyCode:e.charCode;if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13||isPassKey(key,allowedchars)){return true;}else{return false;}}
	function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
	function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}


 var format = function(num, options) {
	options.point=options.point ||',';
	options.group=options.group ||' ';
	options.places=options.places||0;
	options.suffix=options.suffix||'';
	options.prefix=options.prefix||'';

	regex = /(\d+)(\d{3})/;
	result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';

	for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
	return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};