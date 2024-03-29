/**
 * Doğal Sayı
 *
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 05.07.2012
 * 
 * 
 */


var dogruCevapGosterimRengi = "green";
var kareIlkStrokeColor = "black";
var kareIlkFillColor="white";
var kareBoyaliStrokeColor="black";
var kareBoyaliFillColor="red";
var divSonrakiYaziRenk="white";
var divSonrakiFillRenk="#4682b4";

var sayilarStrokeRenk="#9bd1d9";
var sayilarFillRenk="#f2fafc";
var tabloStrokeRenk="#255b63";
var tabloBirlerFillRenk="#ecf8fa";
var tabloBinlerFillRenk="#d9f1f5";
var tabloMilyonlarFillRenk="#bfe8ef";
var inputStrokeRenk="#9bd1d9";





var Animation = {
    init:function(container){
        console.log("xxxx");
        $(container).append("<div class='sayilar' id='sayi'>");

        $(".sayilar").css("position","absolute")
            .css("margin", "auto")
            .css("right", "0")
            .css("top", "0")
            .css("bottom", "0")
            .css("left", "0")
            .css("width", "500px")
            .css("height", "60px")
            .css("text-align","center")
            .css("line-height","60px")
            .css("font-size","60px")
            .css("font-weight","bold")
            .css("color",tabloStrokeRenk)
            .css("text-shadow","3px 2px 8px rgba(37,91,99,.50)");

        
        var deger=format(999999999, {point:'.'});

        exampleHelper={
            sayi:1,
            sayi1:1,
            sayi2:1
        };
        var deger=format(exampleHelper.sayi, {point:'.'});
        Animation.onFrame = function(event){
            $('#sayi').html(format(exampleHelper.sayi, {point:'.'}));
            //$('#sayi').html(Math.floor(exampleHelper.sayi2)+" "+Math.floor(exampleHelper.sayi1)+" "+Math.floor(exampleHelper.sayi));
            //$('#sayi2').html(Math.floor(exampleHelper.sayi2));
            //$('#sayi').html(Math.floor(exampleHelper.sayi));
        }

        exampleHelper.animate = Item.prototype.animate;



        //1-3 saniye arasında 1-10 arasında sayı gelir.
        exampleHelper.animate({
            style:{
                sayi:10
            },
            duration:3000,
            delay:1000,
            animationType: 'easeIn',
            callback: function () {

            }
        });



        //4. saniyede 50'ye çıkıyor
        exampleHelper.animate({
            style:{
                sayi:100
            },
            duration:3000,
            delay:4000,
            //animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi3").show();
                //$("#sayi2").hide();
            }
        });

        //7. saniyede 500'e çıkıyor
        exampleHelper.animate({
            style:{
                sayi:1000000
            },
            duration:3000,
            delay:7000,
            //animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi2").hide();
                //$("#sayi3").show();
            }
        });

        //7. saniyede 500'e çıkıyor
        exampleHelper.animate({
            style:{
                sayi:10000000
            },
            duration:3000,
            delay:10000,
            animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi2").hide();
                //$("#sayi3").show();
            }
        });

        //4. saniyede 50'ye çıkıyor
        exampleHelper.animate({
            style:{
                sayi:10000010
            },
            duration:3000,
            delay:13000,
            animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi3").show();
                //$("#sayi2").hide();
            }
        });

        //7. saniyede 500'e çıkıyor
        exampleHelper.animate({
            style:{
                sayi:100000000
            },
            duration:3000,
            delay:16000,
            animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi2").hide();
                //$("#sayi3").show();
            }
        });

        //4. saniyede 50'ye çıkıyor
        exampleHelper.animate({
            style:{
                sayi:100000010
            },
            duration:3000,
            delay:19000,
            animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi3").show();
                //$("#sayi2").hide();
            }
        });

        //4. saniyede 50'ye çıkıyor
        exampleHelper.animate({
            style:{
                sayi:999999999
            },
            duration:3000,
            delay:22000,
            animationType: 'easeInEaseOut',
            callback: function () {
                //$("#sayi3").show();
                //$("#sayi2").hide();
            }
        });




        Main.animationFinished(26000);




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

        Main.setObjective("Yandaki doğal sayıları tabloya yerleştiriniz.");

        $(container).append("<div id='sayilar'>");
        $("#sayilar").css("width","570px")
            .css("height","30px")
            .css("position","absolute")
            .css("top","5px")
            .css("left","0")
            .css("right","0")
            .css("margin","auto")
            .css("border","solid 1px "+sayilarStrokeRenk)
            .css("font-size","small")
            .css("font-weight","bold")
            .css("background-color",sayilarFillRenk);


        $("#sayilar", container).append("<div class='yazi'>");
        $(".yazi").css("text-align","center");
        $(".yazi").css("position","absolute");
        $(".yazi").css("width","570px");
        $(".yazi").css("height","10px");
        //$(".yazi").css("height","210px");
        $(".yazi").css("top","0");
        $(".yazi").css("bottom","0");
        $(".yazi").css("left","0");
        $(".yazi").css("right","0");
        $(".yazi").css("margin","auto");

        $(container).append("<div id=aksiyon>");
        $("#aksiyon").css("width","360px")
            .css("height","180px")
            .css("position","absolute")
            .css("top","50px")
            .css("left","0")
            .css("right","0")
            .css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("font-size","medium");


        // Milyonlar bölümü
        $("#aksiyon",container).append("<div id=milyonlarBol>");
        $("#milyonlarBol").css("width","120px");
        $("#milyonlarBol").css("height","30px");
        $("#milyonlarBol").css("position","absolute");
        $("#milyonlarBol").css("top","0px");
        $("#milyonlarBol").css("left","0px");
        //$("#milyonlarYuz").css("right","0");
        $("#milyonlarBol").css("margin","auto")
            .css("border-right","solid 1px "+tabloStrokeRenk)
            .css("background-color",tabloMilyonlarFillRenk)
        $("#milyonlarBol").css("font-size","small");
        $("#milyonlarBol").css("font-weight","bold");

        $("#milyonlarBol", container).append("<div class='yaziBolukler'>");


        $("#milyonlarBol .yaziBolukler").html("Milyonlar bölüğü");


        $("#aksiyon",container).append("<div id=binlerBol>");
        $("#binlerBol").css("width","120px");
        $("#binlerBol").css("height","30px");
        $("#binlerBol").css("position","absolute");
        $("#binlerBol").css("top","0px");
        $("#binlerBol").css("left","120px");
        //$("#milyonlarYuz").css("right","0");
        $("#binlerBol").css("margin","auto")
            .css("border-left","solid 1px "+tabloStrokeRenk)
            .css("background-color",tabloBinlerFillRenk)
        $("#binlerBol").css("font-size","small");
        $("#binlerBol").css("font-weight","bold");

        $("#binlerBol", container).append("<div class='yaziBolukler'>");
        $("#binlerBol .yaziBolukler").html("Binler bölüğü");


        $("#aksiyon",container).append("<div id=birlerBol>");
        $("#birlerBol").css("width","119px");
        $("#birlerBol").css("height","30px");
        $("#birlerBol").css("position","absolute");
        $("#birlerBol").css("top","0");

        $("#birlerBol").css("left","240px");
        //$("#milyonlarYuz").css("right","0");
        $("#birlerBol").css("margin","auto")
            .css("border-left","solid 1px "+tabloStrokeRenk)

            .css("background-color",tabloBirlerFillRenk)

        $("#birlerBol").css("font-size","small");
        $("#birlerBol").css("font-weight","bold");

        $("#birlerBol", container).append("<div class='yaziBolukler'>");
        $("#birlerBol .yaziBolukler").html("Birler bölüğü");

        $(".yaziBolukler").css("text-align","center");
        $(".yaziBolukler").css("position","absolute");
        $(".yaziBolukler").css("width","120px");
        $(".yaziBolukler").css("height","14px");
        //$(".yazi").css("height","210px");
        $(".yaziBolukler").css("top","0");
        $(".yaziBolukler").css("bottom","0");
        $(".yaziBolukler").css("left","0");
        $(".yaziBolukler").css("right","0");
        $(".yaziBolukler").css("margin","auto");




        // Yüz milyonlar
        $("#aksiyon",container).append("<div id='milyonlarBolYuzMilyonlar' >");

        $("#milyonlarBolYuzMilyonlar").css("width","40px");
        $("#milyonlarBolYuzMilyonlar").css("height","150px");
        $("#milyonlarBolYuzMilyonlar").css("position","absolute");
        $("#milyonlarBolYuzMilyonlar").css("top","30px");
        $("#milyonlarBolYuzMilyonlar").css("left","0px");
        //$("#milyonlarYuz").css("right","0");
        $("#milyonlarBolYuzMilyonlar").css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloMilyonlarFillRenk)
        $("#milyonlarBolYuzMilyonlar").css("border-left","none").css("border-bottom","none");
        $("#milyonlarBolYuzMilyonlar").css("font-size","medium");

        $("#milyonlarBolYuzMilyonlar",container).append("<div class='yatay'>");
        $("#milyonlarBolYuzMilyonlar .yatay").html("Yüz milyonlar <br /> Basamağı ");

        $("#aksiyon #milyonlarBolYuzMilyonlar",container).append("<div id='girdiYuzMilyonlar' >");
        $("#girdiYuzMilyonlar").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiYuzMilyonlar=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiYuzMilyonlar",container).append(girdiYuzMilyonlar);

        // on milyonlar
        $("#aksiyon",container).append("<div id='milyonlarBolOnMilyonlar' >");
        $("#milyonlarBolOnMilyonlar").css("width","40px");
        $("#milyonlarBolOnMilyonlar").css("height","150px");
        $("#milyonlarBolOnMilyonlar").css("position","absolute");
        $("#milyonlarBolOnMilyonlar").css("top","30px");
        $("#milyonlarBolOnMilyonlar").css("left","40px");
        //$("#milyonlarYuz").css("right","0");
        $("#milyonlarBolOnMilyonlar").css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloMilyonlarFillRenk);
        $("#milyonlarBolOnMilyonlar").css("border-bottom","none");
        $("#milyonlarBolOnMilyonlar").css("font-size","medium");

        $("#milyonlarBolOnMilyonlar",container).append("<div class='yatay'>");
        $("#milyonlarBolOnMilyonlar .yatay").html("On milyonlar <br /> Basamağı  ");


        $("#aksiyon #milyonlarBolOnMilyonlar",container).append("<div id='girdiOnMilyonlar' >");
        $("#girdiOnMilyonlar").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiOnMilyonlar=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);


        $("#girdiOnMilyonlar",container).append(girdiOnMilyonlar);



        // milyonlar
        $("#aksiyon",container).append("<div id='milyonlarBolMilyonlar' >");
        $("#milyonlarBolMilyonlar").css("width","40px");
        $("#milyonlarBolMilyonlar").css("height","150px");
        $("#milyonlarBolMilyonlar").css("position","absolute");
        $("#milyonlarBolMilyonlar").css("top","30px");
        $("#milyonlarBolMilyonlar").css("left","80px");
        //$("#milyonlarYuz").css("right","0");
        $("#milyonlarBolMilyonlar").css("margin","auto");
        $("#milyonlarBolMilyonlar").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloMilyonlarFillRenk);
        $("#milyonlarBolMilyonlar").css("border-bottom","none");
        $("#milyonlarBolMilyonlar").css("font-size","medium");

        $("#milyonlarBolMilyonlar",container).append("<div class='yatay'>");
        $("#milyonlarBolMilyonlar .yatay").html("Milyonlar<br />Basamağı  ");

        $("#aksiyon #milyonlarBolMilyonlar",container).append("<div id='girdiMilyonlar' >");
        $("#girdiMilyonlar").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");
        girdiMilyonlar=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);
        $("#girdiMilyonlar",container).append(girdiMilyonlar);
        $("#inputMilyonlar")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        // Binler bölüğü Yatayları

        // Yüz binler
        $("#aksiyon",container).append("<div id='binlerBolYuzBinler' >");
        $("#binlerBolYuzBinler").css("width","40px");
        $("#binlerBolYuzBinler").css("height","150px");
        $("#binlerBolYuzBinler").css("position","absolute");
        $("#binlerBolYuzBinler").css("top","30px");
        $("#binlerBolYuzBinler").css("left","120px");
        //$("#milyonlarYuz").css("right","0");
        $("#binlerBolYuzBinler").css("margin","auto");
        $("#binlerBolYuzBinler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBinlerFillRenk);
        $("#binlerBolYuzBinler").css("border-bottom","none");
        $("#binlerBolYuzBinler").css("font-size","medium");

        $("#binlerBolYuzBinler",container).append("<div class='yatay'>");
        $("#binlerBolYuzBinler .yatay").html("Yüz binler <br /> Basamağı");

        $("#aksiyon #binlerBolYuzBinler",container).append("<div id='girdiYuzBinler' >");
        $("#girdiYuzBinler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiYuzBinler=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiYuzBinler",container).append(girdiYuzBinler);
        $("#inputYuzBinler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");



        // on binler
        $("#aksiyon",container).append("<div id='binlerBolOnBinler' >");
        $("#binlerBolOnBinler").css("width","40px");
        $("#binlerBolOnBinler").css("height","150px");
        $("#binlerBolOnBinler").css("position","absolute");
        $("#binlerBolOnBinler").css("top","30px");
        $("#binlerBolOnBinler").css("left","160px");
        //$("#milyonlarYuz").css("right","0");
        $("#binlerBolOnBinler").css("margin","auto");
        $("#binlerBolOnBinler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBinlerFillRenk);
        $("#binlerBolOnBinler").css("border-bottom","none");
        $("#binlerBolOnBinler").css("font-size","medium");

        $("#binlerBolOnBinler",container).append("<div class='yatay'>");
        $("#binlerBolOnBinler .yatay").html("On binler <br /> Basamağı  ");

        $("#aksiyon #binlerBolOnBinler",container).append("<div id='girdiOnBinler' >");
        $("#girdiOnBinler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiOnBinler=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiOnBinler",container).append(girdiOnBinler);
        $("#inputOnBinler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        // binler
        $("#aksiyon",container).append("<div id='binlerBolBinler' >");
        $("#binlerBolBinler").css("width","40px");
        $("#binlerBolBinler").css("height","150px");
        $("#binlerBolBinler").css("position","absolute");
        $("#binlerBolBinler").css("top","30px");
        $("#binlerBolBinler").css("left","200px");
        //$("#milyonlarYuz").css("right","0");
        $("#binlerBolBinler").css("margin","auto");
        $("#binlerBolBinler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBinlerFillRenk);
        $("#binlerBolBinler").css("border-bottom","none");
        $("#binlerBolBinler").css("font-size","medium");

        $("#binlerBolBinler",container).append("<div class='yatay'>");
        $("#binlerBolBinler .yatay").html("Binler<br /> Basamağı ");


        $("#aksiyon #binlerBolBinler",container).append("<div id='girdiBinler' >");
        $("#girdiBinler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)

            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiBinler=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiBinler",container).append(girdiBinler);
        $("#inputBinler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        // Birler bölüğü Yatayları

        // Yüzler
        $("#aksiyon",container).append("<div id='birlerBolYuzler' >")
        $("#birlerBolYuzler").css("width","40px")
            .css("height","150px")
            .css("position","absolute")
            .css("top","30px")
            .css("left","240px")
            .css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBirlerFillRenk)

            .css("border-bottom","none")
            .css("font-size","medium");

        $("#birlerBolYuzler",container).append("<div class='yatay'>");
        $("#birlerBolYuzler .yatay").html("Yüzler<br /> Basamağı ");

        $("#aksiyon #birlerBolYuzler",container).append("<div id='girdiYuzler' >");
        $("#girdiYuzler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)

            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiYuzler=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiYuzler",container).append(girdiYuzler);
        $("#inputYuzler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        // onlar
        $("#aksiyon",container).append("<div id='birlerBolOnlar' >");
        $("#birlerBolOnlar").css("width","40px")
            .css("height","150px")
            .css("position","absolute")
            .css("top","30px")
            .css("left","280px")
            .css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBirlerFillRenk)
            .css("border-bottom","none")
            .css("font-size","medium");

        $("#birlerBolOnlar",container).append("<div class='yatay'>");
        $("#birlerBolOnlar .yatay").html("Onlar<br /> Basamağı ");

        $("#aksiyon #birlerBolOnlar",container).append("<div id='girdiOnlar' >");
        $("#girdiOnlar").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiOnlar=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiOnlar",container).append(girdiOnlar);
        $("#inputOnlar")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");

        // birler
        $("#aksiyon",container).append("<div id='birlerBolBirler' >");
        $("#birlerBolBirler").css("width","39px")
            .css("height","150px")
            .css("position","absolute")
            .css("top","30px")
            .css("left","320px")
            .css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBirlerFillRenk)
            .css("border-bottom","none")
            .css("font-size","medium");

        $("#birlerBolBirler",container).append("<div class='yatay'>");
        $("#birlerBolBirler .yatay").html("Birler<br /> Basamağı ");

        $("#aksiyon #birlerBolBirler",container).append("<div id='girdiBirler' >");
        $("#girdiBirler").css("width","39px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        girdiBirler=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"1"

        },true,true);

        $("#girdiBirler",container).append(girdiBirler);
        $("#inputBirler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");
        $("input")
            .css("text-align","center")
            .css("border-color",inputStrokeRenk)
            .addClass("input");


        $(container).append("<div id='cevaplar'>");
        $("#cevaplar").css("width","360px")
            .css("height","40px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("left","113px")
            //.css("right","0")
            .css("top","245px")
            .css("font-size","22px")
            .css("font-weight", "bold");

        //.css("border","solid 1px black");

        for(i=0;i<9;i++){
            var left=(i*40)+"px";
            var id="#c_"+i;
            //console.log("left: "+left);
            $("#cevaplar",container).append("<div id='c_"+i+"' class='cevapTek'>");
            $(id).css("width","40px")
                .css("height","40px")
                .css("margin","auto")
                .css('position','absolute')
                //.css("bottom","20px")
                .css("left",left)
                //.css("right","0")
                .css("top","0px")
                .css("text-align","center")
                .css("color",dogruCevapGosterimRengi);
            //.css("border","solid 1px black");
            /*
             if(i==0)
             continue;
             else
             $(id).css("border-left","none");
             */
        }
        // yatay sınıfının classları
        $(".yatay").css("-webkit-transform","rotate(-90deg)");
        $(".yatay").css("transform","rotate(-90deg)");
        $(".yatay").css("-ms-transform","rotate(-90deg)");
        $(".yatay").css("-moz-transform","rotate(-90deg)");
        $(".yatay").css("-o-transform","rotate(-90deg)");


        //$("#milyonlarBolYuzMilyonlar .yazi").css("-writing-mode","tb-rl");
        //-webkit-transform:rotate(-90deg);
        $(".yatay").css("text-align","left");
        $(".yatay").css("position","absolute");
        $(".yatay").css("height","30px");
        $(".yatay").css("width","150px");
        $(".yatay").css("bottom","105px");
        $(".yatay").css("left","-52px");
        //$("#yatay").css("right","200px");
        //$("#yatay").css("margin","auto");
        $(".yatay").css("font-size","small");








         rastgeleSayi=0;
         birlerBasamagi=["sifir","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];
         onlarBasamagi=["sifir","on","yirmi","otuz","kırk","elli","atmış","yetmiş","seksen","doksan"];

        //console.log("basamak: "+rastgeleBasamak+" sayi9: "+rastgele9+" sayi8: "+rastgele8+" sayi7: "+rastgele7+" basamakSayisi: "+rastgele9.length);
        //console.log("basamak: "+rastgeleBasamak+" sayi: "+rastgeleSayi+"sayını : "+rastgeleSayi.length);


        sayiUret();

        $("#btnKontrol").click(
            function(){kontrol();}
        );

        var tiklamaSayisi=0;
        var enter=0;
        girdiler=Interaction.inputs;



        Interaction.appendButton({bottom:"20px", right:"10px"});
        Interaction.appendStatus({top:"150px", right:"10px", width:"100px"});



        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(){
        sayiUret();
        enter=0;
        tiklamaSayisi=0;
        $("#inputYuzMilyonlar").val("");
        $("#inputOnMilyonlar").val("");
        $("#inputMilyonlar").val("");
        $("#inputYuzBinler").val("");
        $("#inputOnBinler").val("");
        $("#inputBinler").val("");
        $("#inputYuzler").val("");
        $("#inputOnlar").val("");
        $("#inputBirler").val("");
        $("#cevaplar").hide();
        $("#sonraki").hide();
        $("input").css("color","black");
        $("#btnKontrol").show();
        $("#geriBildirimText").html("");
        $("#inputYuzMilyonlar").focus();

        for(var i=0; i<girdiler.length; i++)
            $(girdiler[i]).removeAttr('onkeydown');




    },
    preCheck: function(){
        console.log("Girdi 0: "+girdiler[0].value);
        var boslukDenetimi=0;
        for(var i=0; i<girdiler.length; i++){
            if(girdiler[i].value==""){
                boslukDenetimi++;
            }
        }

        araBoslukDenetimi=0;
        for(var i=boslukDenetimi; i<girdiler.length; i++){
            var bilgi=girdiler[boslukDenetimi];
            //console.log(bilgi);
            if($(bilgi).val()=="")
                araBoslukDenetimi++;
        }
        console.log("boşluk denemetimi: "+boslukDenetimi);
        if(boslukDenetimi==girdiler.length){
            doldur();
            return false;
        }
        else if(araBoslukDenetimi>0){
            doldur();
            return false;
        }

    },
    isAnswerCorrect : function(values){
        var yuzMilyon=girdiler[0].value;
        var onMilyon=girdiler[1].value;
        var milyon=girdiler[2].value;
        var yuzBin=girdiler[3].value;
        var onBin=girdiler[4].value;
        var bin=girdiler[5].value;
        var yuz=girdiler[6].value;
        var on=girdiler[7].value;
        var bir=girdiler[8].value;

            console.log("Yuzbin: "+yuzBin+" bin: "+bin);



            if (yuzMilyon=="" || yuzMilyon=="0" || yuzMilyon==0)
                yuzMilyon=" ";
            if ((yuzMilyon=="" || yuzMilyon=="0" || yuzMilyon==0) &(onMilyon=="" || onMilyon=="0" | onMilyon==0))
                onMilyon=" ";



            var cevapSayisi=yuzMilyon+onMilyon+milyon+yuzBin+onBin+bin+yuz+on+bir;
            console.log("Girdi:'"+cevapSayisi+"'");
            console.log("cevap:'"+rastgeleSayi+"'");
            if(rastgeleSayi==cevapSayisi){
                return true;
                $("#geriBildirimText").attr("class","status_true").html("Tebrikler");
                $("#btnKontrol").hide();
                $("#sonraki").show();
                $("input").css("color",dogruCevapGosterimRengi);

                enter++;
                console.log("enter"+enter);
                if (enter==2){
                    enter=0;
                    yeniSoru();
                }
                else{
                    for(var i=0; i<girdiler.length; i++)
                        $(girdiler[i]).get(0).setAttribute('onkeydown','return tusEngelle(event);');
                }
            }
            else{
                tiklamaSayisi++;
                //console.log("tik: "+tiklamaSayisi);
                if(tiklamaSayisi<2)
                    $("#geriBildirimText").attr("class","status_alert").html("Tekrar deneyiniz.");
                else{

                    $("#geriBildirimText").attr("class","status_false").html("Yanlış");
                    $("#cevaplar").show();
                    $("#btnKontrol").hide();
                    $("#sonraki").show();




                    for(i=0;i<9;i++){

                        var id="#c_"+i;

                        //$("#cevaplar", id,container).append("<div class='cYazi'>");

                        $(id).html(rastgeleSayi.charAt(i));

                        if($(girdiler[i]).val()!=$(id).html()){
                            $(girdiler[i]).css("color","red");
                        }
                        else
                            $(girdiler[i]).css("color","green");

                        $(girdiler[i]).get(0).setAttribute('onkeydown','return tusEngelle(event);');

                    }

                    if(tiklamaSayisi==3){
                        console.log("tikalam 3'e grdim");
                        yeniSoru();
                    }



                }

            }



    },
    onCorrectAnswer : function(){
        Interaction.setStatus('Tebrikler.',true);
    },
    onWrongAnswer : function(){

        Interaction.setStatus('Tekrar deneyiniz.',false);


    },
    onFail : function(){
        Interaction.setStatus('Yanlış.',false);
    }
}



function sayiUret(){
    var rastgeleBasamak=Math.floor((Math.random()*3)+1);
    //var basamakDegeri=Math.pow(10,rastgeleBasamak)
    //var rastgele=Math.floor((Math.random()*basamakDegeri-1)+1);
    var rastgele9=String(Math.floor((Math.random()*900000000)+100000000));
    var rastgele8=String(Math.floor((Math.random()*90000000)+10000000));
    var rastgele7=String(Math.floor((Math.random()*9000000)+1000000));



    if(rastgeleBasamak==1)
        rastgeleSayi="xw"+rastgele7;
    if(rastgeleBasamak==2)
        rastgeleSayi="x"+rastgele8;
    if(rastgeleBasamak==3)
        rastgeleSayi=rastgele9;
    //rastgeleSayi=String(Math.floor((Math.random()*900000000)+100000000));
    //rastgeleSayi="999999999";
    //rastgeleSayi="xw"+rastgele7;
    var yaziyla= new Array();
    //console.log("denemeSayısı: "+rastgeleSayi+" basamak: "+rastgeleSayi.length);
    var degisken;
    for(var i=8; i>=0; i--){
        var rakam=rastgeleSayi.charAt(i);
        //console.log("rakam_"+i+": "+rakam);
        if(birlerBasamagi[rakam]!=""){
            switch(i){
                case 8:
                    if(birlerBasamagi[rakam]=="sifir" ||birlerBasamagi[rakam]==undefined)
                        degisken="";
                    else
                        degisken=birlerBasamagi[rakam];
                    yaziyla.push(degisken); //console.log("8: "+birlerBasamagi[rakam]);

                    break;
                case 7:
                    if(onlarBasamagi[rakam]=="sifir")
                        degisken="";
                    else
                        degisken=onlarBasamagi[rakam];
                    yaziyla.push(degisken); //console.log("7: "+onlarBasamagi[rakam]);
                    break;
                case 6:

                    if(birlerBasamagi[rakam]=="bir"){
                        degisken="yüz";

                        yaziyla.push(degisken); //console.log("6: "+birlerBasamagi[rakam]);
                    }
                    else if(birlerBasamagi[rakam]=="sifir"){
                        degisken="";
                    }
                    else {
                        degisken=birlerBasamagi[rakam]+" yüz";

                        yaziyla.push(degisken); //console.log("6: "+birlerBasamagi[rakam]);
                    }

                    break;
                case 5:
                    if(birlerBasamagi[rakam]=="sifir" ||birlerBasamagi[rakam]==undefined)
                        degisken="bin";
                    else
                        degisken=birlerBasamagi[rakam]+" bin";

                    yaziyla.push(degisken); //console.log("5: "+birlerBasamagi[rakam]);
                    break;
                case 4:
                    if(onlarBasamagi[rakam]=="sifir")
                        degisken="";
                    else
                        degisken=onlarBasamagi[rakam];
                    yaziyla.push(degisken); //console.log("4: "+onlarBasamagi[rakam]);
                    break;
                case 3:
                    if(birlerBasamagi[rakam]=="sifir")
                        degisken="";
                    else if(birlerBasamagi[rakam]=="bir" ||birlerBasamagi[rakam]=="sifir")
                        degisken="yüz";
                    else
                        degisken=birlerBasamagi[rakam]+" yüz";
                    yaziyla.push(degisken); //console.log("3: "+birlerBasamagi[rakam]);

                    break;
                case 2:
                    if(birlerBasamagi[rakam]=="sifir" ||birlerBasamagi[rakam]==undefined)
                        degisken="milyon";
                    else
                        degisken=birlerBasamagi[rakam]+" milyon";
                    yaziyla.push(degisken); //console.log("2: "+birlerBasamagi[rakam]);
                    break;
                case 1:
                    if(rakam=="w"){
                        rakam=" ";
                        rastgeleSayi=rastgeleSayi.replace("w",rakam);

                        //console.log( "sonraki rakam"+rastgeleSayi);
                    }
                    else{
                        if(onlarBasamagi[rakam]=="sifir")
                            degisken="";
                        else
                            degisken=onlarBasamagi[rakam];
                        yaziyla.push(degisken); //console.log("1: "+onlarBasamagi[rakam]);
                    }
                    break;
                case 0:

                    if(rakam=="x"){
                        rakam=" ";
                        rastgeleSayi=rastgeleSayi.replace("x",rakam);

                        //console.log( "sonraki rakam"+rastgeleSayi);
                    }
                    else{
                        if(birlerBasamagi[rakam]=="bir" ||birlerBasamagi[rakam]=="sifir")
                            degisken="yüz";
                        else
                            degisken=birlerBasamagi[rakam]+" yüz";
                        yaziyla.push(degisken); //console.log("0: "+birlerBasamagi[rakam]);
                    }
                    break;
            }
        }
    }


    var strYazi="";
    for(var k=yaziyla.length-1;k>=0;k--)
        strYazi+=" "+yaziyla[k];
    //console.log(strYazi);
    $("#sayilar .yazi").html(strYazi);
}


function doldur(){
    Interaction.setStatus('Lütfen İlgili kutuları doldurunuz.',false);

    $("input").keydown(
        function(){
            Interaction.setStatus('',false);
        }
    );
}







///




/*
Interaction.init = function(container){

	function kontrol(){
		

	}
	
	
	$("#sonraki").click(
		function(){
			yeniSoru()
		}
	);
	
	function yeniSoru(){

		
		
	}
	
	
	$("input").keyup(function(event) {
		if(event.keyCode == 13) {
			//console.log("Key"+event.keyCode);
			kontrol();
		}
		
	});
	
	
	
	};
 */
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
	
function tusEngelle(event) {
	console.log("keyup ife girdim");
	console.log("event.keyCode: "+event.keyCode);
	if(event.keyCode == 13) {
		
		console.log("!=");

		return true;
	}
	else
		return false;
}
