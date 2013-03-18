
/*
 Yüzdeyi Ondalık Kesre Çevirme
 Kılavuz: mat-5-yüzdeyi ondalık kesre çevirme.pdf
   
 Halıcı Yazılım
 Abdullah Karacabey
 03.07.2012 - 06.07.2012
 */


var dogruCevapGosterimRengi="green";
var kareIlkStrokeColor="black";
var kareIlkFillColor="white";
var ornekKareBoyaliStrokeColor="black";
var ornekKareBoyaliFillColor="#d42b19";
var etkilesimKareBoyaliStrokeColor="#255b63";
var etkilesimKareBoyaliFillColor="#bfe8ef";
var divSonrakiYaziRenk="white";
var divSonrakiFillRenk="#4682b4";


//




var Animation = {
    init:function(container){

        // Sağdaki ve soldaki boş kareler çiziliyor.
        var ornekBosKareSol= new OrnekKare(100, kareIlkFillColor, kareIlkStrokeColor,130.5,20.5);
        ornekBosKareSol.opacity=0;

        ornekBosKareSol.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1000
        });

        var ornekBoyaliKareSol=new OrnekKare(29, ornekKareBoyaliFillColor, ornekKareBoyaliStrokeColor,130.5,20.5);
        ornekBoyaliKareSol.opacity=0;

        ornekBoyaliKareSol.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 2000,
            callback: function () {
                //bosKareSol.remove();
            }
        });

        $(container).append("<div id='yaziSol'>");
        $("#yaziSol").css("position","absolute")
            .css("left", "145px")
            .css("top", "165px")
            .css("width", "120px")
            .css("text-align","center")
            .css("height", "12px").html("yüzde yirmi dokuz");

        $(container).append("<div id='yaziOrta'>");
        $("#yaziOrta").css("position","absolute")
            .css("margin", "auto")
            .css("right", "200px")
            .css("top", "0")
            .css("bottom", "0")
            //.css("left", "0")
            .css("width", "210px")
            .css("height", "60px")
            .css("font-size","18px");
        $("#yaziOrta", container).append("<div class='karsilastirma' id='ornekYuzde'>");
        $("#yaziOrta", container).append("<div class='karsilastirma' id='ornekKesir'>");
        $("#yaziOrta", container).append("<div class='karsilastirma' id='ornekOndalik'>");

        $(".karsilastirma").css("float","left")
            .css("margin-left", "2px")
            .css("width", "30%")
            .css("height", "58px")
            //.css("border","solid 1px black")
            .css("font-size","large");
        $("#ornekYuzde").css("text-align","center")
            .css("line-height","58px");
        //.css("display","table-cell");



        $("#ornekYuzde").html("%29&nbsp;&nbsp;&nbsp;=");
        //$("#ornekKesir").html("29<br /> 100");
        $("#ornekOndalik").html("=&nbsp;&nbsp;&nbsp;0,29");
        $("#ornekOndalik").css("text-align","center").css("line-height","58px");
        $(container).append("<div id='ondalikYaziyla'>");
        $("#ondalikYaziyla")
            .html("(sıfır tam yüzde yirmi dokuz)")
            .css("position","absolute")
            .css("margin", "auto")
            .css("right", "-5px")
            .css("top", "92px")
            //.css("bottom", "0")
            //.css("left", "0")
            .css("width", "210px")
            .css("height", "60px")
            .css("font-size","14px");

        $("#yaziOrta #ornekKesir",container).append("<div id='ornekKesirPay'>");
        $("#yaziOrta #ornekKesir #ornekKesirPay",container).append("29");
        $("#ornekKesirPay").css("text-align","center").css("line-height","35px");
        //$("#Corta2",container).append("<div id='kesir'>");
        $("#ornekKesir #ornekKesirPay",container).append("<div id='ornekKesir1'>");
        $('#ornekKesir1').css("position","absolute")
            .css("left", "79px")
            .css("top", "30px")
            .css("width", "40px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");
        $("#yaziOrta #ornekKesir",container).append("<div id='ornekKesirPayda'>");
        $("#yaziOrta #ornekKesir #ornekKesirPayda",container).append("100");
        $("#ornekKesirPayda").css("text-align","center");

        exampleHelper={

            yaziSol:0,
            yuzde:0,
            kesir:0,
            ondalik:0,
            ondalikYaziyla:0
        };

        Animation.onFrame = function(event){
            $('#yaziSol').css("opacity", exampleHelper.yaziSol);
            $('#ornekYuzde').css("opacity", exampleHelper.yuzde);
            $('#ornekKesir').css("opacity", exampleHelper.kesir);
            $('#ornekKesir1').css("opacity", exampleHelper.kesir);
            $('#ornekOndalik').css("opacity", exampleHelper.ondalik);
            $('#ondalikYaziyla').css("opacity", exampleHelper.ondalikYaziyla);

        }

        exampleHelper.animate = Item.prototype.animate;

        exampleHelper.animate({
            style:{
                ondalikYaziyla:1
            },
            duration:1000,
            delay:7000
        });

        exampleHelper.animate({
            style:{
                ondalik:1
            },
            duration:1000,
            delay:6000
        });

        exampleHelper.animate({
            style:{
                kesir:1
            },
            duration:1000,
            delay:5000
        });

        exampleHelper.animate({
            style:{

                yuzde:1
            },
            duration:1000,
            delay:4000
        });

        exampleHelper.animate({
            style:{
                yaziSol:1
            },
            duration:1000,
            delay:3000
        });

        Main.animationFinished(8000);
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


        Main.setObjective("Yandaki yüzlük tablonun yanındaki kutuya istediğiniz sayıyı yazınız. Oluşan yüzdeyi ondalık kesir olarak kutuya yazınız ve “Kontrol” düğmesine basınız.");

        // orta divlerin bilgileri

        $(container).append("<div id='orta2'>");
        $(container).append("<style>#orta2{position:absolute; top:50px; left:265px; width:100px; height:100px}</style>");

        $(container).append("<div id='orta1'>");
        $(container).append("<style>#orta1{position:absolute; top:70px; left:350px; width:100px; height:40px}</style>");

        $(container).append("<div id='orta3'>");
        $(container).append("<style>#orta3{position:absolute; top:70px; left:420px; width:100px; height:40px}</style>");

        // orta1'in içindeki nesnelerin bilgieri
        girdiCevap1=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"3"

        },true,false);

        $("#orta1",container).append(girdiCevap1);
        $("#orta1 input").attr("id","girdiCevap1");
        $("#orta1",container).append("<div id='yuzde1'>");
        $("#orta1",container).append("<div id='esit1'>");
        $("#orta1 #yuzde1",container).append("%");
        $("#orta1 #esit1",container).append("=");
        $(container).append("<style>#yuzde1{position:absolute; top: 10px; left:15px;  width:20px; height:20px;}</style>");
        $(container).append("<style>#esit1{position:absolute; top: 10px; left:75px;  width:20px; height:20px;}</style>");

        // orta2'in içindeki nesnelerin bilgieri

        giris=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px",
            maxLength:"3",
            zIndex:2

        },true,false);

        $("#orta2",container).append(giris);
        $("#orta2 input").attr("id","giris");
        //$("#orta2",container).append("<div id='kesir'>");
        $("#orta2",container).append("<div id='kesir2'>");
        $('#kesir2').css("position","absolute")
            .css("left", "30px")
            .css("top", "40px")
            .css("width", "40px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");

        $("#orta2",container).append("<div class='payda'>");
        $("#orta2",container).append("<div id='esit2'>");
        $("#orta2 .payda",container).append("100");
        $("#orta2 #esit2",container).append("=");
        $(container).append("<style>#esit2{position:absolute; top: 30px; left:80px;  width:20px; height:20px;}</style>");
        $(container).append("<style>.payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px; text-align:center}</style>");


        // orta3'in içindeki nesnelerin bilgieri

        girdiCevap3=Interaction.appendInput({
            width:"30px",
            height:"30px",
            position:"absolute",
            bottom:"0px",
            top:"0px",
            left:"0px",
            right:"0px",
            margin:"auto",
            fontSize:"20px"
        },true,false);

        $("#orta3",container).append(girdiCevap3);
        $("#orta3",container).append("<div id='yuzde2'>");
        $("#orta3",container).append("<div id='esit1'>");
        $("#orta3 #yuzde2",container).append("0,");
        $("#orta3 #esit1",container).append("= 0");

        $("#orta3 input").attr("maxLength",2);
        $("#orta3 input").attr("id","girdiCevap3");
        $(container).append("<style>#yuzde2{position:absolute; top: 10px; left:20px;  width:20px; height:20px;}</style>");
        $("#orta3 #esit1").css("opacity","0").css("width","30px");


        // Cevap divleri 3 ana div var.
        $(container).append("<div id='Corta1'>");
        $(container).append("<style>#Corta1{position:absolute; top:180px; left:360px; width:80px; height:40px; display:none}</style>");
        $(container).append("<div id='Corta2'>");
        $(container).append("<style>#Corta2{position:absolute; top:160px; left:275px; width:80px; height:100px;display:none}</style>");
        $(container).append("<div id='Corta3'>");
        $(container).append("<style>#Corta3{position:absolute; top:180px; left:430px; width:80px; height:40px;display:none}</style>");

        // cevap div 1
        $("#Corta1",container).append("<div id='Cevap1'>");
        $("#Corta1 #Cevap1",container).append("100");
        $("#Corta1",container).append("<div id='yuzde'>");
        $("#Corta1",container).append("<div id='esit1'>");
        $("#Corta1 #yuzde",container).append("%");
        $("#Corta1 #esit1",container).append("=");
        $(container).append("<style>#Cevap1{width:30px; height:30px; margin:auto;position:absolute;  top:10px; left:0; right:0;}</style>");
        $(container).append("<style>#yuzde{position:absolute; top: 10px; left:10px;  width:20px; height:20px;}</style>");
        $(container).append("<style>#Corta1 #esit1{position:absolute; top: 10px; left:65px;  width:20px; height:20px;}</style>");

        // cevap div 2
        $("#Corta2",container).append("<div id='Cevap2'>");
        $("#Corta2 #Cevap2",container).append("100");
        $("#Corta2",container).append("<div id='kesir3'>");
        $('#kesir3').css("position","absolute")
            .css("left", "20px")
            .css("top", "40px")
            .css("width", "40px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");
        $("#Corta2",container).append("<div id='payda'>");
        $("#Corta2",container).append("<div id='esit2'>");
        $("#Corta2 #payda",container).append("100");
        $("#Corta2 #esit2",container).append("=");
        $(container).append("<style>#Corta2 #esit2{position:absolute; top: 30px; left:70px;  width:20px; height:20px;}</style>");
        $(container).append("<style>#Cevap2{width:40px; height:30px; margin:auto; position:absolute;  left:0; right:0; top:15px} #payda{margin:auto;position:absolute; top: 50px; left:0; right:0; width:35px; height:10px; text-align:center}</style>");

        // cevap div 3
        $("#Corta3",container).append("<div id='Cevap3'>");
        $(container).append("<style> #Cevap3{width: 60px; height: 30px; position:absolute; top:10px; left:10px; } </style>");

        // 3 cevap divin yazı ayarı
        $(container).append("<style> #Cevap1, #Cevap2, #Cevap3{text-align:center} </style>");

        $(".payda").css("font-size","18px");
        $("input").css("text-align","center").css("font-size","18px");
        $("input").addClass("input");
        $("input").addClass("number_input_field");
        $("#sol, #orta1, #orta2, #orta3, #Corta1, #Corta2, #Corta3").css("font-size","18px");



        bosKare= new Kare(100, kareIlkFillColor, etkilesimKareBoyaliStrokeColor,100,30);
        bosKare.yap();
        // Kareler boyanıyor.
         girdi="";

        $("#giris").keyup(
            function(){
                bosKare.yap();
                //girdi=parseInt($("#giris").val());
                girdi=parseInt($("#giris").val(),10);


                boyaliKareSol=new Kare(girdi,etkilesimKareBoyaliFillColor, etkilesimKareBoyaliStrokeColor,100,30);
                boyaliKareSol.yap();


                if(girdi=="100" || girdi==100)
                    $("#yuzde2").html("");
                else
                    $("#yuzde2").html("0,");
            }


        );




        // girdiler ilgili olaylar
        cevap1="",cevap2="",cevap3="";

        $("#girdiCevap1").change(function(){
            cevap1=parseInt($("#girdiCevap1").val(),10);
            Interaction.setStatus('',false);
        });
//	$("#girdiCevap2").change(function(){
//		cevap2=parseInt($("#girdiCevap2").val(),10);
//		$("#geriBildirim").hide();
//	});
        $("#girdiCevap3").change(function(){
            cevap3=$("#girdiCevap3").val();
            Interaction.setStatus('',false);
        });

        // girdi kontrolleri
        document.getElementById("giris").onkeyup=function(){
            var input=parseInt(this.value);
            if(input<0 || input>100){

                Interaction.setStatus('0 ile 100 arasında bir sayı giriniz.',false);

                $("#giris").keydown(function(){
                    Interaction.setStatus('',false);
                });
                bosKare.yap();
                $("#giris").val("");
            }
            return;
        }

        // kontrol butonu ile ilgii olaylar
        var tiklamaSayisi=0;
        $("#btnKontrol").click(
            function(){
                kontrol();
            }

        );

        $("#sonraki").click(
            function(){
                yeniSoru();
            }

        );






        enter=0;




        $("#girdiCevap1").keyup(function(event) {
            if(event.keyCode == 13) {
                //console.log("Key"+event.keyCode);
                kontrol();
            }
        });

//		$("#girdiCevap2").keyup(function(event) {
//			if(event.keyCode == 13) {
//				kontrol();
//			}
//		});
        var tik=0;
        $("#girdiCevap3").keyup(function(event) {

            if(event.keyCode == 13) {
                tik++;
                if (tik==3){
                    tik=0;
                    yeniSoru();
                }
                else
                    kontrol()
            }


        });




        Interaction.appendButton({top:"250px", right:"50px"});
        Interaction.appendStatus({top:"150px", right:"100px", textAlign:"center",width:"200"});

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(){

        yeniSoru();

    },
    preCheck: function(){


    },
    isAnswerCorrect : function(values){
// ondalikliGirdi inputa girilen değer kırpılmış olduğu için sorun çıkartıyordu. Alttaki satırla halledildi.


            ondalikliGirdi=parseInt(girdi);
            if(girdi<10 && girdi>0)
                ondalikliGirdi="0"+girdi;
            else if(girdi==100)
                ondalikliGirdi=1;
            else
                ondalikliGirdi=girdi;

            cevap3=$("#girdiCevap3").val();

            console.log("c1: "+cevap1+" c2: "+cevap2+" c3: "+cevap3);
            console.log("Ondalıklı Girdi: "+ondalikliGirdi);
            console.log("Girdi: "+girdi);
            // Cevap Doğruysa

            if(girdi<100){
                cevap3=parseFloat("0."+cevap3);
                ondalikliGirdi=parseFloat("0."+ondalikliGirdi);
                console.log("cevpları Değişti: "+cevap3+", "+ondalikliGirdi);
            }

            if(parseInt(cevap1,10)==parseInt(girdi,10) && cevap3==ondalikliGirdi){
                enter++;
                $("#btnKontrol").hide();
                $("#sonraki").show();
                //$("#geriBildirim").hide();
                //$("#geriBildirim").removeClass("status_false").addClass("status_true");
                return true;
                $("#geriBildirim").show();
                tik=0;

                if(cevap1==0)
                    $("#orta3 #esit1").css("opacity","1");

                console.log("enter"+enter);
                if (enter==2){
                    enter=0;
                    yeniSoru();
                }
                else{
                    $("#girdiCevap3").get(0).setAttribute('onkeydown','return tusEngelle(event);');
                    //$("#girdiCevap2").get(0).setAttribute('onkeydown','return tusEngelle(event);');
                    $("#girdiCevap1").get(0).setAttribute('onkeydown','return tusEngelle(event);');
                    $("#giris").get(0).setAttribute('onkeydown','return tusEngelle(event);');
                }





            }

            // cevap Yanlışsa
            else{
                tiklamaSayisi++;
                //console.log("tik"+tiklamaSayisi);
                return false;


            }

            // iki denemede de doğru cevap bulunamamışsa
            if(tiklamaSayisi>=2){
                //$(".status_alert").html("Yanlış. Doğru cevap: ");
                //console.log(tiklamaSayisi);





                $("#geriBildirimText").attr("class","status_false").html("Yanlış. Doğru cevap:");


            }


    },
    onCorrectAnswer : function(){
        Interaction.setStatus('Tebrikler',true);
    },
    onWrongAnswer : function(){

        Interaction.setStatus('Tekrar deneyiniz.',false);


    },
    onFail : function(){
        Interaction.setStatus('Yanlış; doğru cevap: ',false);

        var cevap=parseInt($("#giris").val(),10);

        console.log("cevap: "+cevap);


        $("#girdiCevap3").get(0).setAttribute('onkeydown','return tusEngelle(event);');
        //$("#girdiCevap2").get(0).setAttribute('onkeydown','return tusEngelle(event);');
        $("#girdiCevap1").get(0).setAttribute('onkeydown','return tusEngelle(event);');
        $("#giris").get(0).setAttribute('onkeydown','return tusEngelle(event);');


        if(cevap=="100" || cevap==100){

            $("#Cevap3").html(1);
            $("#girdiCevap3").val(1);

        }
        else{

            var noktaliCevap=cevap/100;
            var virgulluCevap="0,"+noktaliCevap.toString().substr(2);

            console.log("noktali Cevap: "+noktaliCevap);
            console.log("virgüllü Cevap: "+virgulluCevap);


            if(cevap==0){
                $("#orta3 #esit1").css("opacity","1");
                //$("#girdiCevap3").val("0");
                $("#Cevap3").html("0,0  = 0");
            }
            else if(cevap<10){
                //$("#girdiCevap3").val("0"+cevap);
                $("#Cevap3").html(virgulluCevap);
            }

            else{
                console.log("girdi");
                //$("#girdiCevap3").val(ondalikliGirdi);
                $("#Cevap3").html(virgulluCevap);
            }
        }


        $("#Cevap1, #Cevap2").html(cevap);
        //$("#girdiCevap1, #girdiCevap2").val(cevap);
        //$("#Cevap3").html(cevap/100);


        //$(container).append("<style>#Cevap1, #Cevap2, #Cevap3, #girdiCevap1,  #girdiCevap3{color:"+dogruCevapGosterimRengi+";}</style>");

        //$("#btnKontrol").hide();
        if (cevap1!=girdi)
            $("#girdiCevap1").css("color","red");
        else
            $("#girdiCevap1").css("color","green");
//				if (cevap2!=girdi)
//					$("#girdiCevap2").css("color","red");
//				else
//					$("#girdiCevap2").css("color","green");
        if (cevap3!=ondalikliGirdi)
            $("#girdiCevap3").css("color","red");
        else
            $("#girdiCevap3").css("color","green");
        $("#Cevap1, #Cevap3").css("color","green");
        $("#geriBildirim, #Corta1, #Corta2, #Corta3, #sonraki").show();
    }
}

// kare sınıfı

var OrnekKare = function(kareSayisi, dolguRengi, hatRengi, x,y) {
	this.animate = Item.prototype.animate;
	this.kareSayisi=kareSayisi;
	this.dolguRengi=dolguRengi;
	this.hatRengi=hatRengi;
	this.x=x;
	this.y=y;
	
	var group = new Group();	

	var girdi=parseInt(this.kareSayisi);
			
	var onluk=Math.floor(girdi/10)==0?1:Math.floor(girdi/10+1);
	var birlik=Math.floor(girdi%10);
		
	var girilenKareSayisi=10;
	
	for(j=0;j<onluk && j<10;j++){
				
		if(j==(onluk-1))
			girilenKareSayisi=birlik;
		else
			var girilenKareSayisi=10;
					
		for(i=0; i<girilenKareSayisi && i<10;i++){
					
			boyaliKare = new Rectangle((this.x+i*12),(this.y+j*12),12,12); //x,y,width,height
			var path = new Path.Rectangle(boyaliKare);
			path.fillColor = this.dolguRengi;
			path.strokeColor=this.hatRengi;
			
			if(dolguRengi!="white"){
				path.opacity = 0;
				path.animate({
					style: {
						opacity: 1	
					},
					duration: 250,
					delay: 20 * (j*10 + i)
				})
			}
			
			group.addChild(path);
		}	
	}
	
	return group;
}


var Kare= function(kareSayisi, dolguRengi, hatRengi, x,y){
		this.animate = Item.prototype.animate;
		this.kareSayisi=parseInt(kareSayisi);
		this.dolguRengi=dolguRengi;
		this.hatRengi=hatRengi;
		this.x=x;
		this.y=y;
		this.yap=kareYap;
		
	}
	
	function kareYap(){
		
		var group = new Group();	

		var girdi=parseInt(this.kareSayisi);
				
		var onluk=Math.floor(girdi/10)==0?1:Math.floor(girdi/10+1);
		var birlik=Math.floor(girdi%10);
			
		var girilenKareSayisi=10;
		
		for(j=0;j<onluk && j<10;j++){
					
			if(j==(onluk-1))
				girilenKareSayisi=birlik;
			else
				var girilenKareSayisi=10;
						
			for(i=0; i<girilenKareSayisi && i<10;i++){
						
				boyaliKare = new Rectangle((this.x+i*12)+0.5,(this.y+j*12)+0.5,12,12); //x,y,width,height
				var path = new Path.Rectangle(boyaliKare);
				path.fillColor = this.dolguRengi;
				path.strokeColor=this.hatRengi;
				
				// Tek Tek boyama
					/*if(this.dolguRengi!="white"){
						path.opacity = 0;
						path.animate({
							style: {
								opacity: 1
							},
							duration: 250,
							delay: 20 * (j*10 + i)
						})
					}*/
				
				group.addChild(path);
			}	
			
		}
		
		return group;
		
	}

function yeniSoru(){

    $("#giris, #girdiCevap1, #girdiCevap2, #girdiCevap3").val("");
    $("#geriBildirim, #Corta1, #Corta2, #Corta3, #sonraki").hide();
    $("#btnKontrol").show();
    $("#giris").focus();
    tiklamaSayisi=0;
    enter=0;
    bosKare.yap();
    $(container).append("<style>#Cevap1, #Cevap2, #Cevap3, #girdiCevap1, #girdiCevap2, #girdiCevap3{color:'black';}</style>");
    cevap1=""; cevap2=""; cevap3="";
    $("#orta3 #esit1").css("opacity","0");

    $("#girdiCevap3").removeAttr('onkeydown');
    $("#girdiCevap2").removeAttr('onkeydown');
    $("#girdiCevap1").removeAttr('onkeydown');
    $("#giris").removeAttr('onkeydown');
    $("input").css("color","black");
}
;
