function __Styles(){inputBoxAnswerColor="green",inputBoxColor="black",animationTableStrokeColor="#a9a9a9",animationTableFillColor="#E6E6E6",interactionTableStrokeColor="#a9a9a9",interactionTableFillColor="#d9f1f5"}var Animation={init:function(a){Animation.container=a,$(Animation.container).append('<img id="bookstore" src="/assets/animations/tablo/bookstore.png" />'),$("#bookstore").css("width","180px").css("height","100px").css("position","absolute").css("opacity",0).css("left","60px").css("top","30px"),$(Animation.container).append('<div id="infoText">Bir kitabevinde hafta boyunca satılan kitapların tablosu yapılmıştır.</div>'),$("#infoText").css("position","absolute").css("top","134px").css("left","60px").css("width","180px").css("height","60px").css("text-align","center").css("opacity",0).css("font-size",14);var b=new Group,c=new Path.Rectangle(new Point(300.5,10.5),new Size(100,30));c.strokeColor=animationTableStrokeColor,c.fillColor=animationTableFillColor,b.addChild(c);var d=new Path.Line(new Point(300.5,10.5),new Point(400.5,40.5));d.strokeColor=animationTableStrokeColor,b.addChild(d);for(i=0;i<6;i++){var e=new Path.Rectangle(new Point(300.5,40.5+20*i),new Size(100,20));e.strokeColor=animationTableStrokeColor,i%2==1&&(e.fillColor=animationTableFillColor),b.addChild(e)}for(i=0;i<4;i++){var f=new Path.Rectangle(new Point(400.5+60*i,10.5),new Size(60,30));f.strokeColor=animationTableStrokeColor,f.fillColor=animationTableFillColor,b.addChild(f)}for(i=0;i<4;i++)for(j=0;j<6;j++){var g=new Path.Rectangle(new Point(400.5+60*i,40.5+20*j),new Size(60,20));g.strokeColor=animationTableStrokeColor,j%2==1&&(g.fillColor=animationTableFillColor),b.addChild(g)}$(Animation.container).append('<div id="table2Div"></div>'),$("#table2Div").css("position","absolute").css("left","310px").css("top","26px").css("width","344px").css("height","152px"),$("#table2Div").append('<p id="daysText" >Günler</p>'),$("#daysText").css("position","absolute").css("left","22px").css("top","14px").css("font-size",12).css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="categoriesText" >Kitaplar</p>'),$("#categoriesText").css("position","absolute").css("left","58px").css("top","0px").css("font-size",12).css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="mondayText" >Pazartesi</p>'),$("#mondayText").css("position","absolute").css("left","20px").css("top","32px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="tuesdayText" >Salı</p>'),$("#tuesdayText").css("position","absolute").css("left","20px").css("top","53px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="wednesdayText" >Çarşamba</p>'),$("#wednesdayText").css("position","absolute").css("left","20px").css("top","72px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="thursdayText" >Perşembe</p>'),$("#thursdayText").css("position","absolute").css("left","20px").css("top","92px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="fridayText" >Cuma</p>'),$("#fridayText").css("position","absolute").css("left","20px").css("top","112px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="saturdayText" >Cumartesi</p>'),$("#saturdayText").css("position","absolute").css("left","20px").css("top","132px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="novelText" >Roman</p>'),$("#novelText").css("position","absolute").css("left","112px").css("top","10px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="storyText" >Hikaye</p>'),$("#storyText").css("position","absolute").css("left","172px").css("top","10px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="poemText" >Şiir</p>'),$("#poemText").css("position","absolute").css("left","242px").css("top","10px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center"),$("#table2Div").append('<p id="otherText" >Diğer</p>'),$("#otherText").css("position","absolute").css("left","298px").css("top","10px").css("font-size",14).css("font-weight","bold").css("opacity",0).css("text-align","center");var h=new Array(6,9,2,5,4,5,0,7,7,2,1,4,3,2,3,6,7,5,2,2,5,8,4,9);for(i=0;i<6;i++){var k=""+(32+20*i)+"px";for(j=0;j<4;j++){var l=""+(136+60*j)+"px",m="ddata"+(i*4+j);$("#table2Div").append('<p id="'+m+'"></p>'),$("#"+m).html(h[i*4+j]),$("#"+m).css("position","absolute").css("left",l).css("top",k).css("font-size",14).css("opacity",0),$("#"+m).delay(7500+500*i+250*(i*4+j)).animate({opacity:1},250)}}b.opacity=0,$("#bookstore").delay(1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#infoText").delay(2e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#categoriesText").delay(4e3).animate({opacity:1},500,"easeInOutQuad"),$("#daysText").delay(4500).animate({opacity:1},500,"easeInOutQuad"),$("#novelText").delay(5e3).animate({opacity:1},500,"easeInOutQuad"),$("#storyText").delay(5500).animate({opacity:1},500,"easeInOutQuad"),$("#poemText").delay(6e3).animate({opacity:1},500,"easeInOutQuad"),$("#otherText").delay(6500).animate({opacity:1},500,"easeInOutQuad"),$("#mondayText").delay(7e3).animate({opacity:1},500,"easeInOutQuad"),$("#tuesdayText").delay(8500).animate({opacity:1},500,"easeInOutQuad"),$("#wednesdayText").delay(1e4).animate({opacity:1},500,"easeInOutQuad"),$("#thursdayText").delay(11500).animate({opacity:1},500,"easeInOutQuad"),$("#fridayText").delay(13e3).animate({opacity:1},500,"easeInOutQuad"),$("#saturdayText").delay(14500).animate({opacity:1},500,"easeInOutQuad"),b.animate({style:{opacity:1},duration:1e3,delay:3e3,animationType:"easeInEaseOut"}),Main.animationFinished(17e3)}},Interaction={getFramework:function(){return"paper"},init:function(a){Interaction.container=a,Main.setObjective("Yanda bir okulda bazı spor dallarını seçen öğrenci sayıları tabloda verilmiştir. Tabloya göre soruları cevaplayınız."),Interaction.paper={width:$(a).width(),height:$(a).height()},Interaction.index=0,Interaction.questions=[],Interaction.questions[0]="5. sınıftan Yüzmeyi seçen kaç öğrenci var?",Interaction.questions[1]="5. sınıftan Voleybolu seçen kaç öğrenci var?",Interaction.questions[2]="5. sınıftan Atletizmi seçen kaç öğrenci var?",Interaction.questions[3]="5. sınıfta kaç öğrenci var?",Interaction.questions[4]="6. sınıftan Yüzmeyi seçen kaç öğrenci var?",Interaction.questions[5]="6. sınıftan Voleybolu seçen kaç öğrenci var?",Interaction.questions[6]="6. sınıftan Atletizmi seçen kaç öğrenci var?",Interaction.questions[7]="6. sınıfta kaç öğrenci var?",Interaction.questions[8]="7. sınıftan Yüzmeyi seçen kaç öğrenci var?",Interaction.questions[9]="7. sınıftan Voleybolu seçen kaç öğrenci var?",Interaction.questions[10]="7. sınıftan Atletizmi seçen kaç öğrenci var?",Interaction.questions[11]="7. sınıfta kaç öğrenci var?",Interaction.questions[12]="8. sınıftan Yüzmeyi seçen kaç öğrenci var?",Interaction.questions[13]="8. sınıftan Voleybolu seçen kaç öğrenci var?",Interaction.questions[14]="8. sınıftan Atletizmi seçen kaç öğrenci var?",Interaction.questions[15]="8. sınıfta kaç öğrenci var?",Interaction.questions[16]="Yüzmeyi seçen toplam kaç öğrenci var?",Interaction.questions[17]="Voleybolu seçen toplam kaç öğrenci var?",Interaction.questions[18]="Atletizmi seçen toplam kaç öğrenci var?",Interaction.datas=[];for(i=0;i<12;i++)Interaction.datas[i]=Math.floor(Math.random()*11)+5;var b=new Group,c=new Path.Rectangle(new Point(20.5,40.5),new Size(110,60));c.strokeColor=interactionTableStrokeColor,c.fillColor=interactionTableFillColor,b.addChild(c);for(i=0;i<4;i++){var d=new Path.Rectangle(new Point(20.5,100.5+30*i),new Size(110,30));d.strokeColor=interactionTableStrokeColor,i%2==1&&(d.fillColor=interactionTableFillColor),b.addChild(d)}for(i=0;i<3;i++){var e=new Path.Rectangle(new Point(130.5+70*i,40.5),new Size(70,60));e.strokeColor=interactionTableStrokeColor,e.fillColor=interactionTableFillColor,b.addChild(d)}for(i=0;i<3;i++)for(j=0;j<4;j++){var f=new Path.Rectangle(new Point(130.5+70*i,100.5+30*j),new Size(70,30));f.strokeColor=interactionTableStrokeColor,j%2==1&&(f.fillColor=interactionTableFillColor),b.addChild(f)}var g=new Path.Line(new Point(20.5,40.5),new Point(130.5,100.5));g.strokeColor="black",b.addChild(g),$(a).append('<div id="tableDiv"></div>'),$("#tableDiv").css("position","absolute").css("left","16px").css("top","36px").css("width","324px").css("height","184px"),$("#tableDiv").append('<p id="classesText" >Sınıflar</p>'),$("#classesText").css("position","absolute").css("left","18px").css("top","38px").css("font-size",12).css("text-align","center"),$("#tableDiv").append('<p id="sportsText" >Spor Dalları</p>'),$("#sportsText").css("position","absolute").css("left","38px").css("top","8px").css("font-size",12).css("text-align","center"),$("#tableDiv").append('<p id="fifthClassText" >5. Sınıf</p>'),$("#fifthClassText").css("position","absolute").css("left","18px").css("top","72px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$("#tableDiv").append('<p id="sixthClassText" >6. Sınıf</p>'),$("#sixthClassText").css("position","absolute").css("left","18px").css("top","102px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$("#tableDiv").append('<p id="seventhClassText" >7. Sınıf</p>'),$("#seventhClassText").css("position","absolute").css("left","18px").css("top","132px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$("#tableDiv").append('<p id="eighthClassText" >8. Sınıf</p>'),$("#eighthClassText").css("position","absolute").css("left","18px").css("top","162px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$("#tableDiv").append('<p id="swimmingText" >Yüzme</p>'),$("#swimmingText").css("position","absolute").css("left","122px").css("top","28px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$("#tableDiv").append('<p id="volleyballText" >Voleybol</p>'),$("#volleyballText").css("position","absolute").css("left","186px").css("top","28px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$("#tableDiv").append('<p id="athletismText" >Atletizm</p>'),$("#athletismText").css("position","absolute").css("left","260px").css("top","28px").css("font-size",16).css("font-weight","bold").css("text-align","center"),$(a).append('<p id="question" ></p>'),$("#question").css("position","absolute").css("left","360px").css("top","60px").css("width","190px").css("font-size",16).css("text-align","center");for(i=0;i<4;i++){var h=""+(74+29*i)+"px";for(j=0;j<3;j++){if(Interaction.datas[i*3+j]>=10)var k=""+(142+66*j)+"px";else var k=""+(146+67*j)+"px";$("#tableDiv").append('<p id="data'+i*6+j+'"></p>'),$("#data"+i*6+j).html(Interaction.datas[i*3+j]),$("#data"+i*6+j).css("position","absolute").css("left",k).css("top",h).css("font-size",16)}}Interaction.appendInput({width:"36px",height:"32px",textAlign:"center",position:"absolute",left:"430px",top:"130px",fontSize:"20px"}),Interaction.appendStatus({bottom:"40px",right:"170px"}),Interaction.appendButton({bottom:"30px",right:"40px"}),$(Interaction.input).attr("maxlength","3"),Interaction.setRandomGenerator(19),Interaction.prepareNextQuestion()},nextQuestion:function(a){Interaction.randomNumber=a,Interaction.inputs[0].style.color="black",$("#question").html(Interaction.questions[a])},preCheck:function(){},isAnswerCorrect:function(a){Interaction.answer=0;switch(Interaction.randomNumber){case 0:Interaction.answer=Interaction.datas[0];break;case 1:Interaction.answer=Interaction.datas[1];break;case 2:Interaction.answer=Interaction.datas[2];break;case 3:Interaction.answer=Interaction.datas[0]+Interaction.datas[1]+Interaction.datas[2];break;case 4:Interaction.answer=Interaction.datas[3];break;case 5:Interaction.answer=Interaction.datas[4];break;case 6:Interaction.answer=Interaction.datas[5];break;case 7:Interaction.answer=Interaction.datas[3]+Interaction.datas[4]+Interaction.datas[5];break;case 8:Interaction.answer=Interaction.datas[6];break;case 9:Interaction.answer=Interaction.datas[7];break;case 10:Interaction.answer=Interaction.datas[8];break;case 11:Interaction.answer=Interaction.datas[6]+Interaction.datas[7]+Interaction.datas[8];break;case 12:Interaction.answer=Interaction.datas[9];break;case 13:Interaction.answer=Interaction.datas[10];break;case 14:Interaction.answer=Interaction.datas[11];break;case 15:Interaction.answer=Interaction.datas[9]+Interaction.datas[10]+Interaction.datas[11];break;case 16:Interaction.answer=Interaction.datas[0]+Interaction.datas[3]+Interaction.datas[6]+Interaction.datas[9];break;case 17:Interaction.answer=Interaction.datas[1]+Interaction.datas[4]+Interaction.datas[7]+Interaction.datas[10];break;case 18:Interaction.answer=Interaction.datas[2]+Interaction.datas[5]+Interaction.datas[8]+Interaction.datas[11]}return a==Interaction.answer?!0:!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),Interaction.inputs[0].value=Interaction.answer,Interaction.inputs[0].style.color="green"}};