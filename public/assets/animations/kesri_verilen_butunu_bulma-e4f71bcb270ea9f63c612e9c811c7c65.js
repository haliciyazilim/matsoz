// JavaScript Document
// styles
var textStyle={fontSize:16,strokeColor:"#fff",strokeWidth:0,fillColor:"#fff"},edgeStyle={"stroke-width":"2px"},angleStyle={fill:"#DDD"},inputBoxAnswerColor="green",inputBoxColor="black",Animation={init:function(a){var b=document.createElement("animDiv"),c=document.createElement("marbleDiv");$(a).append(b),$(b).html('<div id="ques12"><div id="nom2">1</div><div id="line2"></div><div id="denom2">4</div></div><p id="a2">\'i</p><p id="ques22">3</p><p id="b2">tane olan bilyelerin tamamı kaç bilyedir?</p>').css({width:"400px",height:"120px",position:"absolute",left:"30px",top:"6px",fontSize:"16px",textAlign:"left",opacity:0}).delay(1e3).animate({opacity:1},1e3),$("#ques12").css("position","absolute").css("top","16px").css("left","16px").css("width","20px").css("height","41px").css("padding",0).css("margin",0).css("line-height","18px"),$("#ques22").css({height:"60px",position:"absolute",left:"60px",top:"18px",textAlign:"left"}),$("#nom2").css("text-align","center").css("height","20px"),$("#denom2").css("text-align","center").css("height","20px"),$("#a2").css({position:"absolute",left:"44px",top:"18px"}),$("#b2").css({position:"absolute",left:"74px",top:"18px"}),$("#line2").css("height","1px").css("border-top","1px solid").css("padding",0),$(a).append(c),$(c).html('<div id="aD"><img id="marble" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble2" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble3" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble4" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /></div>').css({width:"400px",height:"60px",position:"absolute",left:"80px",top:"52px"}),$("#marble").css({position:"absolute",top:"0px",left:"0px",width:"100px",height:"100px",opacity:0}).delay(2e3).animate({opacity:1},1e3),$("#marble2").css({position:"absolute",top:"0px",left:"110px",width:"100px",height:"100px",opacity:0}).delay(6e3).animate({opacity:1},1e3),$("#marble3").css({position:"absolute",top:"0px",left:"220px",width:"100px",height:"100px",opacity:0}).delay(6e3).animate({opacity:1},1e3),$("#marble4").css({position:"absolute",top:"0px",left:"330px",width:"100px",height:"100px",opacity:0}).delay(6e3).animate({opacity:1},1e3);var d=new Group,e=new Path.Rectangle(new Point(60.5,36.5),new Size(110,110));e.strokeColor="#a9a9a9",e.opacity=0;var f=new Path.Rectangle(new Point(170.5,36.5),new Size(110,110));f.strokeColor="#a9a9a9",f.opacity=0;var g=new Path.Rectangle(new Point(280.5,36.5),new Size(110,110));g.strokeColor="#a9a9a9",g.opacity=0;var h=new Path.Rectangle(new Point(390.5,36.5),new Size(110,110));h.strokeColor="#a9a9a9",h.opacity=0;var j=new PointText(new Point(110,170));j.content="3",j.fillColor="black",j.fontSize=14,j.opacity=0;var k=new PointText(new Point(220,170));k.content="3",k.fillColor="black",k.fontSize=14;var l=new PointText(new Point(330,170));l.content="3",l.fillColor="black",l.fontSize=14;var m=new PointText(new Point(440,170));m.content="3",m.fillColor="black",m.fontSize=14;var n=new Group;n.addChild(k),n.addChild(l),n.addChild(m);for(i=0;i<3;i++)n.children[i].opacity=0;var o=new PointText(new Point(560,120));o.content="3 + 3 + 3 + 3 = 12",o.fillColor="black",o.fontSize=14,o.opacity=0;var p=new PointText(new Point(626,150));p.content="3 x 4 = 12",p.fillColor="black",p.fontSize=14,p.opacity=0,j.animate({style:{opacity:1},duration:500,delay:4e3,animationType:"easeInEaseOut"}),e.animate({style:{opacity:1},duration:1e3,delay:3e3,animationType:"easeInEaseOut"}),f.animate({style:{opacity:1},duration:500,delay:5e3,animationType:"easeInEaseOut"}),g.animate({style:{opacity:1},duration:500,delay:5e3,animationType:"easeInEaseOut"}),h.animate({style:{opacity:1},duration:500,delay:5e3,animationType:"easeInEaseOut"});for(i=0;i<3;i++)n.children[i].animate({style:{opacity:1},duration:1e3,delay:6e3,animationType:"easeInEaseOut"});o.animate({style:{opacity:1},duration:1e3,delay:7500,animationType:"easeInEaseOut"}),p.animate({style:{opacity:1},duration:1e3,delay:9e3,animationType:"easeInEaseOut"}),Main.animationFinished(11e3)}},Interaction={getFramework:function(){return"paper"},init:function(a){Interaction.container=a,Main.setObjective("Yanda kesri verilen bütünü bulunuz ve kontrol ediniz."),Interaction.paper={width:$(a).width(),height:$(a).height()},Interaction.appendInput({width:"30px",height:"32px",textAlign:"center",position:"absolute",left:"320px",top:"14px",fontSize:"22px"}),$(Interaction.inputs[0]).attr("maxlength","2"),Interaction.inputs[0].style.color="black";var b=document.createElement("questionDiv");$(a).append(b),$(b).html('<div id="ques1"><div id="nom"></div><div id="line"></div><div id="denom"></div></div><p id="a"></p><p id="ques2"></p><p id="b">olan kesrin tamamı</p><p id="c">olur</p>').append(Interaction.inputs[0]).css({width:"400px",height:"120px",position:"absolute",left:"60px",top:"30px",fontSize:"24px",textAlign:"left"}),$("#ques1").css("position","absolute").css("top","16px").css("left","16px").css("width","25px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#ques2").css({width:"30px",height:"30px",position:"absolute",left:"74px",top:"18px",textAlign:"center"}),$("#nom").css("text-align","center").css("height","25px"),$("#denom").css("text-align","center").css("height","25px"),$("#a").css({position:"absolute",left:"50px",top:"18px",textAlign:"center",width:"20px"}),$("#b").css({position:"absolute",left:"106px",top:"18px"}),$("#c").css({position:"absolute",left:"368px",top:"18px"}),$("#line").css("height","1px").css("border-top","2px solid").css("padding",0),Interaction.appendStatus({bottom:"50px",right:"160px"}),Interaction.appendButton({bottom:"40px",right:"40px"}),Interaction.questionDiv=b,Interaction.nomD=$("#nom").get(0),Interaction.denomD=$("#denom").get(0),Interaction.ques2Div=$("#ques2").get(0),Interaction.aDiv=$("#a").get(0),Interaction.prepareNextQuestion()},nextQuestion:function(){Interaction.solutionDiv&&$(Interaction.solutionDiv).remove(),Interaction.inputs[0].style.color="black",Interaction.denom=Math.floor(Math.random()*4)+2,Interaction.num=Math.floor(Math.random()*9)+2;do Interaction.nom=Math.floor(Math.random()*3)+1;while(Interaction.denom*Interaction.num%Interaction.nom!=0||Interaction.nom>=Interaction.denom);Interaction.nom==1?$(Interaction.aDiv).html("'i"):Interaction.nom==2?$(Interaction.aDiv).html("'si"):Interaction.nom==3&&$(Interaction.aDiv).html("'ü"),$(Interaction.nomD).html(Interaction.nom),$(Interaction.denomD).html(Interaction.denom),$(Interaction.ques2Div).html(Interaction.num)},isAnswerCorrect:function(a){return console.log(Interaction.denom),console.log(Interaction.nom),console.log(Interaction.num),a==Interaction.denom*Interaction.num/Interaction.nom?!0:!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),Interaction.solutionDiv=$(Interaction.questionDiv).clone().insertAfter(Interaction.questionDiv),Interaction.inputs[0].style.color="red";var a,b,c,d,e=this.denom*this.num/this.nom;this.nom==1?(a="Cevap: "+this.denom+" x "+this.num+" = "+this.denom*this.num,$(Interaction.solutionDiv).html(a).css({position:"absolute",left:"80px",top:"140px",color:"#069",textAlign:"center"})):(b="Cevap: ",c=this.denom+" x "+this.num,d=this.nom,answerStr4=" = "+e,$(Interaction.solutionDiv).css({position:"absolute",left:"180px",top:"130px",color:"#069"}),$(Interaction.solutionDiv).html(""),$(Interaction.solutionDiv).append('<div id="answerStr1">'+b+"</div>"),$(Interaction.solutionDiv).append('<div id="answerStr2">'+c+"</div>"),$(Interaction.solutionDiv).append("<div id=anssLinee></div>"),$(Interaction.solutionDiv).append('<div id="answerStr3">'+d+"</div>"),$(Interaction.solutionDiv).append('<div id="answerStr4">'+answerStr4+"</div>"),$("#answerStr1").css({position:"absolute",top:"10px",left:"2px"}),$("#answerStr2").css({position:"absolute",top:"2px",left:"78px",width:"80px",textAlign:"center"}),$("#anssLinee").css({position:"absolute",top:"24px",left:"86px",width:"64px",height:"1px",borderTop:"2px solid",padding:0}),$("#answerStr3").css({position:"absolute",top:"28px",left:"108px",textAlign:"center",width:"20px"}),$("#answerStr4").css({position:"absolute",top:"14px",left:"160px"}))}};