function __Styles(){placeHolderColor="#bfe8ef",fractionsColor="#e6c181",sortableCursorType="pointer"}var Animation={init:function(a){Animation.container=a;var b=1e3,c=2500,d=4500,e=8500,f=9500,g=12e3,h=14e3,i=16e3,j=1e3,k=2e3,l=1500,m=100,n="#FFDEAD",o=new Group,p=new Path.SegmentedRectangle(182.5,10.5,20,80,1,8,5,n);p.rotate(180);var q=new Path.SegmentedRectangle(282.5,10.5,20,80,1,4,1,n);q.rotate(180);var r=new Path.SegmentedRectangle(382.5,10.5,20,80,1,8,6,n);r.rotate(180);var s=new Path.SegmentedRectangle(482.5,10.5,20,80,1,8,3,n);s.rotate(180);var t=new Path.SegmentedRectangle(582.5,10.5,20,80,1,2,1,n);t.rotate(180),o.addChild(p),o.addChild(q),o.addChild(r),o.addChild(s),o.addChild(t),o.opacity=0,Math.round();var u=p.position,v=q.position,w=r.position,x=s.position,y=t.position;Animation.numericalAxis=new Group;var z=new Group,A=new Path.OneSidedArrow(new Point(111,134),new Point(671,134),10,30),B=new Path.OneSidedArrow(new Point(671,134),new Point(672,134),10,30);A.rotate(180),z.addChild(A),z.addChild(B);var C=new Group,D=new Path.Circle(new Point(151,134),5);D.fillColor="black";var E=new Path.Circle(new Point(631,134),5);E.fillColor="black",C.addChild(D),C.addChild(E);var F=60;Interaction.smallDots=new Group;for(var G=0;G<7;G++){var H=new Path.Circle(new Point(151+F*(G+1),134),3);H.fillColor="black",Interaction.smallDots.addChild(H)}var I=new Group;for(var G=0;G<4;G++){var J=new Path.Line(new Point(263.5,24.5+G*20),new Point(283.5,24.5+G*20));J.strokeColor="red",J.dashArray=[3,2],I.addChild(J)}I.opacity=0;var K=new Group;for(var G=0;G<7;G++){if(G==3)continue;var L=new Path.Line(new Point(383.5,24.5+G*10),new Point(403.5,24.5+G*10));L.strokeColor="red",L.dashArray=[3,2],K.addChild(L)}K.opacity=0,Animation.numericalAxis.addChild(z),Animation.numericalAxis.addChild(C),Animation.numericalAxis.addChild(Interaction.smallDots),Animation.numericalAxis.opacity=0,Animation.pointDiv=document.createElement("div"),Animation.pointDiv.id="AnimPointDiv",$(Animation.container).append(Animation.pointDiv),$(Animation.pointDiv).html('<div id="fpp"></div> <div id="spp"></div>'),$(Animation.pointDiv).css("position","absolute").css("top","120px").css("left","146px").css("width","480px").css("height","20px").css("font-size",22).css("opacity",0),$("#fpp").css("position","absolute").css("top","0px").css("left","14px").css("width","20px").css("height","20px").html(0),$("#spp").css("position","absolute").css("top","0px").css("left","492px").css("width","20px").css("height","20px").html(1),$("#AnimPointDiv").delay(e).animate({opacity:1},j,"easeInOutQuad"),$(a).append('<div id="frac22"><div id="nom22">5</div><div id="line22"></div><div id="denom22">8</div></div>'),$("#frac22").css("position","absolute").css("top","108px").css("left","198px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line22").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom22").css("text-align","center").css("height","16px"),$("#denom22").css("text-align","center").css("height","16px"),$("#frac22").delay(b).animate({opacity:1},j,"easeInOutQuad").delay(2600).animate({left:"498px"},k,"easeInOutQuad").delay(2900).animate({left:"458px",top:"111px"},l,"easeInOutQuad"),$(a).append('<div id="frac33"><div id="nom33">1</div><div id="line33"></div><div id="denom33">4</div></div>'),$("#frac33").css("position","absolute").css("top","108px").css("left","298px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line33").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom33").css("text-align","center").css("height","16px"),$("#denom33").css("text-align","center").css("height","16px"),$("#frac33").delay(b).animate({opacity:1},j,"easeInOutQuad").delay(2500).animate({left:"198px"},k,"easeInOutQuad").delay(3e3).animate({left:"278px",top:"111px"},l,"easeInOutQuad"),$(a).append('<div id="frac44"><div id="nom44">6</div><div id="line44"></div><div id="denom44">8</div></div>'),$("#frac44").css("position","absolute").css("top","108px").css("left","398px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line44").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom44").css("text-align","center").css("height","16px"),$("#denom44").css("text-align","center").css("height","16px"),$("#frac44").delay(b).animate({opacity:1},j,"easeInOutQuad").delay(2900).animate({left:"598px"},k,"easeInOutQuad").delay(2600).animate({left:"518px",top:"111px"},l,"easeInOutQuad"),$(a).append('<div id="frac55"><div id="nom55">3</div><div id="line55"></div><div id="denom55">8</div></div>'),$("#frac55").css("position","absolute").css("top","108px").css("left","498px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line55").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom55").css("text-align","center").css("height","16px"),$("#denom55").css("text-align","center").css("height","16px"),$("#frac55").delay(b).animate({opacity:1},j,"easeInOutQuad").delay(2700).animate({left:"298px"},k,"easeInOutQuad").delay(2800).animate({left:"338px",top:"111px"},l,"easeInOutQuad"),$(a).append('<div id="frac66"><div id="nom66">1</div><div id="line66"></div><div id="denom66">2</div></div>'),$("#frac66").css("position","absolute").css("top","108px").css("left","598px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line66").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom66").css("text-align","center").css("height","16px"),$("#denom66").css("text-align","center").css("height","16px"),$("#frac66").delay(b).animate({opacity:1},j,"easeInOutQuad").delay(2800).animate({left:"398px"},k,"easeInOutQuad").delay(2700).animate({left:"398px",top:"111px"},l,"easeInOutQuad"),$(a).append('<div id="frac77"><div id="nom77">1</div><div id="line77"></div><div id="denom77">2</div></div>'),$("#frac77").css("position","absolute").css("top","154px").css("left","397px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line77").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom77").css("text-align","center").css("height","16px"),$("#denom77").css("text-align","center").css("height","16px"),$("#frac77").delay(g).animate({opacity:1},j,"easeInOutQuad").delay(500).animate({opacity:0},j,"easeInOutQuad"),$(a).append('<div id="frac777"><div id="nom777">1 x 4</div><div id="line777"></div><div id="denom777">2 x 4</div></div>'),$("#frac777").css("position","absolute").css("top","154px").css("left","387px").css("width","36px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px").css("opacity",0),$("#line777").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom777").css("text-align","center").css("height","16px"),$("#denom777").css("text-align","center").css("height","16px"),$("#frac777").delay(h).animate({opacity:1},j,"easeInOutQuad").delay(1e3).animate({opacity:0},j,"easeInOutQuad"),$(a).append('<div id="frac7777"><div id="nom7777">4</div><div id="line7777"></div><div id="denom7777">8</div></div>'),$("#frac7777").css("position","absolute").css("top","154px").css("left","397px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line7777").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom7777").css("text-align","center").css("height","16px"),$("#denom7777").css("text-align","center").css("height","16px"),$("#frac7777").delay(i).animate({opacity:1},j,"easeInOutQuad"),$(a).append('<div id="frac88"><div id="nom88">1</div><div id="line88"></div><div id="denom88">4</div></div>'),$("#frac88").css("position","absolute").css("top","154px").css("left","277px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line88").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom88").css("text-align","center").css("height","16px"),$("#denom88").css("text-align","center").css("height","16px"),$("#frac88").delay(g).animate({opacity:1},j,"easeInOutQuad").delay(1e3).animate({opacity:0},j,"easeInOutQuad"),$(a).append('<div id="frac888"><div id="nom888">1 x 2</div><div id="line888"></div><div id="denom888">4 x 2</div></div>'),$("#frac888").css("position","absolute").css("top","154px").css("left","267px").css("width","36px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px").css("opacity",0),$("#line888").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom888").css("text-align","center").css("height","16px"),$("#denom888").css("text-align","center").css("height","16px"),$("#frac888").delay(h).animate({opacity:1},j,"easeInOutQuad").delay(1e3).animate({opacity:0},j,"easeInOutQuad"),$(a).append('<div id="frac8888"><div id="nom8888">2</div><div id="line8888"></div><div id="denom8888">8</div></div>'),$("#frac8888").css("position","absolute").css("top","154px").css("left","277px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("opacity",0),$("#line8888").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom8888").css("text-align","center").css("height","16px"),$("#denom8888").css("text-align","center").css("height","16px"),$("#frac8888").delay(i).animate({opacity:1},j,"easeInOutQuad",function(){I.strokeColor="black",K.strokeColor="black"}),$(a).append('<img id="lessThan11" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>'),$("#lessThan11").css("position","absolute").css("top","54px").css("left","244px").css("opacity",0),$("#lessThan11").delay(d+2500).animate({opacity:1},m,"easeInOutQuad").delay(2400).animate({top:"112px",left:"300px"},l,"easeInOutQuad"),$(a).append('<img id="lessThan22" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>'),$("#lessThan22").css("position","absolute").css("top","54px").css("left","344px").css("opacity",0),$("#lessThan22").delay(d+2500).animate({opacity:1},m,"easeInOutQuad").delay(2400).animate({top:"112px",left:"360px"},l,"easeInOutQuad"),$(a).append('<img id="lessThan33" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>'),$("#lessThan33").css("position","absolute").css("top","54px").css("left","444px").css("opacity",0),$("#lessThan33").delay(d+2500).animate({opacity:1},m,"easeInOutQuad").delay(2400).animate({top:"112px",left:"420px"},l,"easeInOutQuad"),$(a).append('<img id="lessThan44" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>'),$("#lessThan44").css("position","absolute").css("top","54px").css("left","544px").css("opacity",0),$("#lessThan44").delay(d+2500).animate({opacity:1},m,"easeInOutQuad").delay(2400).animate({top:"112px",left:"480px"},l,"easeInOutQuad"),o.animate({style:{opacity:1},duration:j,delay:c,animationType:"easeInOutQuad"}),q.animate({style:{position:new Point(u.x,u.y)},duration:k,delay:d,animationType:"easeInOutQuad"}),p.animate({style:{position:new Point(x.x,x.y)},duration:k,delay:d+100,animationType:"easeInOutQuad"}),s.animate({style:{position:new Point(v.x,v.y)},duration:k,delay:d+200,animationType:"easeInOutQuad"}),t.animate({style:{position:new Point(w.x,w.y)},duration:k,delay:d+300,animationType:"easeInOutQuad"}),r.animate({style:{position:new Point(y.x,y.y)},duration:k,delay:d+400,animationType:"easeInOutQuad"}),Animation.numericalAxis.animate({style:{opacity:1},duration:j,delay:e,animationType:"easeInOutQuad"}),p.animate({style:{position:new Point(w.x+60,w.y+3)},duration:l,delay:f,animationType:"easeInOutQuad"}),q.animate({style:{position:new Point(w.x-120,w.y+3)},duration:l,delay:f,animationType:"easeInOutQuad"}),r.animate({style:{position:new Point(w.x+120,w.y+3)},duration:l,delay:f,animationType:"easeInOutQuad"}),s.animate({style:{position:new Point(w.x-60,w.y+3)},duration:l,delay:f,animationType:"easeInOutQuad"}),t.animate({style:{position:new Point(w.x,w.y+3)},duration:l,delay:f,animationType:"easeInOutQuad"}),I.animate({style:{opacity:1},duration:j,delay:h,animationType:"easeInOutQuad"}),K.animate({style:{opacity:1},duration:j,delay:h,animationType:"easeInOutQuad"}),Main.animationFinished(17e3)}},Interaction={getFramework:function(){return"paper"},init:function(a){Interaction.container=a,Main.setObjective(""),Interaction.paper={width:$(a).width(),height:$(a).height()},Interaction.sortingDiv=document.createElement("div"),Interaction.sortingDiv.id="sortingDiv",$(Interaction.container).append(Interaction.sortingDiv),$(Interaction.sortingDiv).css({width:"80px",height:"40px",position:"absolute",left:"240px",top:"10px",padding:0,margin:0}),$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_hover.png" /></div>'),$("#lessThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#lessThan").css("position","absolute").css("top","0px").css("left","0px"),$("#lessThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_hover.png" /></div>'),$("#greaterThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#greaterThan").css("position","absolute").css("top","0px").css("left","0px"),$("#greaterThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$("#sortingDiv .drg").draggable({revert:"invalid",helper:"clone",cursor:"pointer",stack:"#sortingDiv .drg",start:function(a,b){Interaction.setStatus(""),$($(b.helper.get(0)).siblings(this)[1]).css("opacity",0),$(b.helper.get(0)).css("opacity",1)},stop:function(a,b){$(b.helper.get(0)).css("opacity",0),this.id!=Interaction.oldStr+"Hover"&&$($(b.helper.get(0)).siblings(this)[1]).css("opacity",1)}}),Interaction.appendStatus({bottom:"26px",right:"160px",height:"40px",width:"300px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"40px"}),Interaction.setRandomGenerator(3),Interaction.prepareNextQuestion()},nextQuestion:function(a){Interaction.dropped&&$(Interaction.dropped).remove(),Interaction.activeStr&&(Interaction.activeStr=null);if($(Interaction.clone2)){$(Interaction.clone2).remove(),Interaction.clone2=null,$("#sortingDiv img").draggable("enable"),Interaction.oldActiveStr&&$("."+Interaction.oldActiveStr).css("opacity",0),Interaction.oldStr&&$("#"+Interaction.oldStr).css("opacity",1),Interaction.answerId&&$("#"+Interaction.answerId.replace("Hover","")).css("opacity",1),Interaction.sortingUl&&$(Interaction.sortingUl).sortable({disabled:!1}),Interaction.pointDiv&&$(Interaction.pointDiv).remove();if(Interaction.ansF)for(i=0;i<Interaction.ansF.length;i++)$(Interaction.ansF[i]).remove();Interaction.lline&&Interaction.lline.remove(),Interaction.numericalAxis&&Interaction.numericalAxis.remove(),Interaction.questionDiv&&$(Interaction.questionDiv).remove(),Interaction.rand=a,Interaction.qType=Math.floor(Math.random()*2),Interaction.rand==0?(Interaction.numOfFracs=3,Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"65px",left:"84px",width:"400px",height:"100px",listStyleType:"none"}),Interaction.sortingUl=document.createElement("ul"),Interaction.sortingUl.id="sortingUl",$(Interaction.questionDiv).append(Interaction.sortingUl),$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1"  class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li>'),$(Interaction.sortingUl).css({width:"400px",height:"100px"}),$(Interaction.sortingUl).sortable({items:"li:not(div)",placeholder:"placeHolder",tolerance:"pointer",cursor:sortableCursorType,axis:"x"}),$("#dropDiv1").css({width:"54px",height:"54px",position:"absolute",left:"114px",top:"0px",padding:0,margin:0}),$("#dropDiv2").css({width:"54px",height:"54px",position:"absolute",left:"220px",top:"0px",padding:0,margin:0}),$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>"),$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>"),$("#firstFracDiv").html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>'),$("#firstFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line1").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom1").css("text-align","center").css("width","30px").css("height","25px"),$("#denom1").css("text-align","center").css("width","30px").css("height","25px"),$("#secondFracDiv").html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>'),$("#secondFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line2").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom2").css("text-align","center").css("width","30px").css("height","25px"),$("#denom2").css("text-align","center").css("width","30px").css("height","25px"),$("#thirdFracDiv").html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>'),$("#thirdFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line3").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom3").css("text-align","center").css("width","30px").css("height","25px"),$("#denom3").css("text-align","center").css("width","30px").css("height","25px")):Interaction.rand==1?(Interaction.numOfFracs=4,Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"65px",left:"50px",width:"500px",height:"100px",listStyleType:"none"}),Interaction.sortingUl=document.createElement("ul"),Interaction.sortingUl.id="sortingUl",$(Interaction.questionDiv).append(Interaction.sortingUl),$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1" class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li><div id="dropDiv3" class="dropDivs" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li>'),$(Interaction.sortingUl).css({width:"500px",height:"100px"}),$(Interaction.sortingUl).sortable({items:"li:not(div)",placeholder:"placeHolder",tolerance:"pointer",cursor:sortableCursorType,axis:"x"}),$("#dropDiv1").css({width:"54px",height:"54px",position:"absolute",left:"114px",top:"0px",padding:0,margin:0}),$("#dropDiv2").css({width:"54px",height:"54px",position:"absolute",left:"220px",top:"0px",padding:0,margin:0}),$("#dropDiv3").css({width:"54px",height:"54px",position:"absolute",left:"326px",top:"0px",padding:0,margin:0}),$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>"),$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>"),$("#firstFracDiv").html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>'),$("#firstFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line1").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom1").css("text-align","center").css("width","30px").css("height","25px"),$("#denom1").css("text-align","center").css("width","30px").css("height","25px"),$("#secondFracDiv").html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>'),$("#secondFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line2").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom2").css("text-align","center").css("width","30px").css("height","25px"),$("#denom2").css("text-align","center").css("width","30px").css("height","25px"),$("#thirdFracDiv").html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>'),$("#thirdFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line3").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom3").css("text-align","center").css("width","30px").css("height","25px"),$("#denom3").css("text-align","center").css("width","30px").css("height","25px"),$("#fourthFracDiv").html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>'),$("#fourthFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line4").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom4").css("text-align","center").css("width","30px").css("height","25px"),$("#denom4").css("text-align","center").css("width","30px").css("height","25px"),Interaction.qType==0?($("#lessThan1").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png"),$("#lessThan2").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png"),$("#lessThan3").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png")):($("#lessThan1").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"),$("#lessThan2").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"),$("#lessThan3").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"))):(Interaction.numOfFracs=5,Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"65px",left:"5px",width:"600px",height:"100px",listStyleType:"none"}),Interaction.sortingUl=document.createElement("ul"),Interaction.sortingUl.id="sortingUl",$(Interaction.questionDiv).append(Interaction.sortingUl),$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1" class="dropDivs" /><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><div id="dropDiv3" class="dropDivs" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li><div id="dropDiv4" class="dropDivs" /><li id="fifthFrac"><div id="fifthFracDiv"></div></li>'),$(Interaction.sortingUl).css({width:"600px",height:"100px"}),$(Interaction.sortingUl).sortable({items:"li:not(div)",placeholder:"placeHolder",tolerance:"pointer",cursor:sortableCursorType,axis:"x"}),$("#dropDiv1").css({width:"54px",height:"54px",position:"absolute",left:"114px",top:"0px",padding:0,margin:0}),$("#dropDiv2").css({width:"54px",height:"54px",position:"absolute",left:"220px",top:"0px",padding:0,margin:0}),$("#dropDiv3").css({width:"54px",height:"54px",position:"absolute",left:"326px",top:"0px",padding:0,margin:0}),$("#dropDiv4").css({width:"54px",height:"54px",position:"absolute",left:"432px",top:"0px",padding:0,margin:0}),$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>"),$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>"),$("#firstFracDiv").html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>'),$("#firstFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line1").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom1").css("text-align","center").css("width","30px").css("height","25px"),$("#denom1").css("text-align","center").css("width","30px").css("height","25px"),$("#secondFracDiv").html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>'),$("#secondFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line2").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom2").css("text-align","center").css("width","30px").css("height","25px"),$("#denom2").css("text-align","center").css("width","30px").css("height","25px"),$("#thirdFracDiv").html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>'),$("#thirdFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line3").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom3").css("text-align","center").css("width","30px").css("height","25px"),$("#denom3").css("text-align","center").css("width","30px").css("height","25px"),$("#fourthFracDiv").html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>'),$("#fourthFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line4").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom4").css("text-align","center").css("width","30px").css("height","25px"),$("#denom4").css("text-align","center").css("width","30px").css("height","25px"),$("#fifthFracDiv").html('<div id="nom5">9</div><div id="line5"></div><div id="denom5">10</div>'),$("#fifthFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line5").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom5").css("text-align","center").css("width","30px").css("height","25px"),$("#denom5").css("text-align","center").css("width","30px").css("height","25px"),Interaction.qType==0?($("#lessThan1").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png"),$("#lessThan2").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png"),$("#lessThan3").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png"),$("#lessThan4").attr("src","/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png")):($("#lessThan1").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"),$("#lessThan2").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"),$("#lessThan3").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"),$("#lessThan4").attr("src","/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"))),Interaction.getFractionsToBeSorted(Interaction.numOfFracs),Interaction.nomD=$("#nom1").get(0),Interaction.denomD=$("#denom1").get(0),Interaction.nom2D=$("#nom2").get(0),Interaction.denom2D=$("#denom2").get(0),Interaction.nom3D=$("#nom3").get(0),Interaction.denom3D=$("#denom3").get(0),$(Interaction.nomD).html(Interaction.nom[0]),$(Interaction.denomD).html(Interaction.denom[0]),$(Interaction.nom2D).html(Interaction.nom[1]),$(Interaction.denom2D).html(Interaction.denom[1]),$(Interaction.nom3D).html(Interaction.nom[2]),$(Interaction.denom3D).html(Interaction.denom[2]),Interaction.numOfFracs==4?(Interaction.nom4D=$("#nom4").get(0),Interaction.denom4D=$("#denom4").get(0),$(Interaction.nom4D).html(Interaction.nom[3]),$(Interaction.denom4D).html(Interaction.denom[3])):Interaction.numOfFracs==5&&(Interaction.nom4D=$("#nom4").get(0),Interaction.denom4D=$("#denom4").get(0),Interaction.nom5D=$("#nom5").get(0),Interaction.denom5D=$("#denom5").get(0),$(Interaction.nom4D).html(Interaction.nom[3]),$(Interaction.denom4D).html(Interaction.denom[3]),$(Interaction.nom5D).html(Interaction.nom[4]),$(Interaction.denom5D).html(Interaction.denom[4])),Interaction.fracIds=[],Interaction.fracIds[0]="firstFrac",Interaction.fracIds[1]="secondFrac",Interaction.fracIds[2]="thirdFrac",Interaction.numOfFracs==4?Interaction.fracIds[3]="fourthFrac":Interaction.numOfFracs==5&&(Interaction.fracIds[3]="fourthFrac",Interaction.fracIds[4]="fifthFrac"),$(".dropDivs").droppable({accept:".drg",tolerance:"pointer",drop:function(a,b){Interaction.oldActiveStr&&($("."+Interaction.oldActiveStr).css("opacity",0),$("#"+Interaction.oldActiveStr.replace("Active","Hover")).draggable({disabled:!1}),$("#"+Interaction.oldStr).css("opacity",1)),Interaction.activeStr=$(b.draggable).get(0).id,$("#"+Interaction.activeStr).draggable({disabled:!0});var c=Interaction.activeStr.replace("Hover","");Interaction.activeStr=Interaction.activeStr.replace("Hover","Active"),$("."+Interaction.activeStr).css("opacity",1),Interaction.oldActiveStr=Interaction.activeStr,Interaction.oldStr=c}}),$(".dropDivs").append('<div class="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" class="target" /></div>'),$(".targetContainer").css("position","relative").css("height","54px").css("width","54px").css("float","left"),$(".target").css("position","absolute").css("top","0px").css("left","0px"),$(".dropDivs").append('<img class="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img class="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />'),$(".lessThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),$(".greaterThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),Interaction.qType==0?Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">büyükten küçüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.'):Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">küçükten büyüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.')}},preCheck:function(){Interaction.dropped=Interaction.activeStr;if(Interaction.dropped==null||Interaction.dropped==undefined)return Interaction.setStatus("Lütfen işaretlerden birini kutucuğa sürükleyiniz.","alert"),!1},isAnswerCorrect:function(a){Interaction.userAnswerArr=[];if(Interaction.qType==1){Interaction.frac=[],Interaction.sortedFrac=[],Interaction.answerIdStr="lessThanActive",Interaction.answerIdsArray=[];for(var b=0;b<Interaction.numOfFracs;b++)Interaction.frac[b]=Interaction.nom[b]/Interaction.denom[b];for(var b=0;b<Interaction.numOfFracs;b++)Interaction.sortedFrac[b]=Interaction.frac[b];Interaction.sortedFrac.sort(function(a,b){return a-b});for(var b=0;b<Interaction.numOfFracs;b++)Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[b])]=Interaction.fracIds[b]}else{Interaction.frac=[],Interaction.sortedFrac=[],Interaction.answerIdStr="greaterThanActive",Interaction.answerIdsArray=[];for(var b=0;b<Interaction.numOfFracs;b++)Interaction.frac[b]=Interaction.nom[b]/Interaction.denom[b];for(var b=0;b<Interaction.numOfFracs;b++)Interaction.sortedFrac[b]=Interaction.frac[b];Interaction.sortedFrac.sort(function(a,b){return b-a});for(var b=0;b<Interaction.numOfFracs;b++)Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[b])]=Interaction.fracIds[b]}for(b=0;b<Interaction.numOfFracs;b++)Interaction.userAnswerArr[b]=$(Interaction.sortingUl).find("li")[b].id;var c
;for(b=0,c=0;b<Interaction.numOfFracs;b++)Interaction.userAnswerArr[b]==Interaction.answerIdsArray[b]&&(c+=1);return c==Interaction.numOfFracs&&Interaction.dropped==Interaction.answerIdStr?($("#sortingDiv img").draggable("disable"),!0):!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1);if(Interaction.dropped!=Interaction.answerIdStr){Interaction.pause(),Interaction.clone2=[],$("."+Interaction.oldActiveStr).css("opacity",0),Interaction.answerId=Interaction.answerIdStr.replace("Active","Hover"),$("#"+Interaction.oldActiveStr.replace("Active","")).css("opacity",1),$("#"+Interaction.answerId.replace("Hover","")).css("opacity",0);for(var a=0;a<Interaction.numOfFracs-1;a++){Interaction.clone2[a]=$("#"+Interaction.answerId).clone(),Interaction.clone2[a].attr("class","flying"),Interaction.clone2[a].attr("id",a);var b=$(Interaction.sortingDiv).position().top,c=$(Interaction.sortingDiv).position().left;Interaction.qType==0&&(c+=40);var d=$(Interaction.questionDiv).position().top,e=$(Interaction.questionDiv).position().left,f=parseInt($(".dropDivs")[a].style.top)+11+d,g=parseInt($(".dropDivs")[a].style.left)+11+e;$(Interaction.clone2[a]).css("position","absolute").css("top",b).css("left",c).css("opacity",0),$(Interaction.container).append(Interaction.clone2[a]),$(Interaction.clone2[a]).delay(0).animate({opacity:200,top:f,left:g},1500,"easeInOutQuad",function(){$(this).remove(),$("."+Interaction.answerIdStr).css("opacity",1),Interaction.resume(500)})}$("#sortingDiv img").draggable("disable"),Interaction.oldActiveStr=Interaction.answerIdStr}for(var a=0;a<Interaction.numOfFracs;a++)Interaction.userAnswerArr[a]==Interaction.answerIdsArray[a]?$("#"+Interaction.userAnswerArr[a]).css("color","green"):$("#"+Interaction.userAnswerArr[a]).css("color","red");Interaction.nom2=[],Interaction.denom2=[],$(Interaction.sortingUl).sortable({disabled:!0}),Interaction.numOfFracs==5?Interaction.lcm=Util.lcm(Interaction.denom[0],Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4])):Interaction.lcm=Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]);for(var a=0;a<Interaction.numOfFracs;a++)Interaction.nom2[a]=Interaction.nom[a]*(Interaction.lcm/Interaction.denom[a]),Interaction.denom2[a]=Interaction.lcm;Interaction.GetNumericalAxis(Interaction.lcm)},GetNumericalAxis:function(a){Interaction.numericalAxis=new Group;var b=new Group,c=new Path.OneSidedArrow(new Point(20,170),new Point(560,170),10,30),d=new Path.OneSidedArrow(new Point(560,170),new Point(561,170),10,30);c.rotate(180),b.addChild(c),b.addChild(d);var e=new Group,f=new Path.Circle(new Point(50,170),5);f.fillColor="black";var g=new Path.Circle(new Point(530,170),5);g.fillColor="black",e.addChild(f),e.addChild(g);var h=480/a;Interaction.smallDots=new Group;for(var i=0;i<a-1;i++){var j=new Path.Circle(new Point(50+h*(i+1),170),3);j.fillColor="black",Interaction.smallDots.addChild(j)}Interaction.numericalAxis.addChild(b),Interaction.numericalAxis.addChild(e),Interaction.numericalAxis.addChild(Interaction.smallDots);var k,l;Interaction.index=[],Interaction.index2=[],Interaction.lline=new Group,Interaction.nom22=[],Interaction.posX2=[],Interaction.posY2=[];for(var i=0;i<Interaction.numOfFracs;i++)Interaction.nom22[i]=Interaction.nom2[i];Interaction.nom22.sort(function(a,b){return a-b}),Interaction.ansF=[];for(var i=0;i<Interaction.numOfFracs;i++){Interaction.index[i]=Interaction.nom22[i]-1,Interaction.index2[i]=Interaction.nom2[i]-1,k=Interaction.smallDots.children[Interaction.index[i]].position.x,l=Interaction.smallDots.children[Interaction.index[i]].position.y,Interaction.posX2[i]=Interaction.smallDots.children[Interaction.index2[i]].position.x-8,Interaction.posY2[i]=Interaction.smallDots.children[Interaction.index2[i]].position.y+8,Interaction.smallDots.children[Interaction.index[i]].opacity=0;var m=new Path.Line(new Point(k,l-6),new Point(k,l+6));m.strokeColor="#0066FF",m.strokeWidth=2,Interaction.lline.addChild(m),Interaction.ansF[i]=document.createElement("div"),Interaction.ansF[i].id="ansF"+i,$(Interaction.container).append(Interaction.ansF[i]),$(Interaction.ansF[i]).html('<div id="nomm'+i+'"></div><div id="linee'+i+'"></div><div id="denomm'+i+'"></div>'),$(Interaction.ansF[i]).css("position","absolute").css("top",Interaction.posY2[i]).css("left",Interaction.posX2[i]).css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("color","#0066FF").css("font-size","12px").css("font-weight","bold").css("line-height","16px"),$("#linee"+i).css("height","1px").css("border-top","1px solid").css("padding",0),$("#nomm"+i).css("text-align","center").css("height","16px").html(Interaction.nom[i]),$("#denomm"+i).css("text-align","center").css("height","16px").html(Interaction.denom[i])}Interaction.ansF.sort(function(a,b){return $(a).offset().left<$(b).offset().left?-1:$(a).offset().left>$(b).offset().left?1:0});for(var i=0;i<Interaction.ansF.length;i++)if(i%2==1){var n=$(Interaction.ansF[i]).position().top-50;$(Interaction.ansF[i]).css("top",n)}Interaction.pointDiv=document.createElement("div"),Interaction.pointDiv.id="pointDiv",$(Interaction.container).append(Interaction.pointDiv),$(Interaction.pointDiv).html('<div id="fp"></div> <div id="sp"></div>'),$(Interaction.pointDiv).css("position","absolute").css("top","130px").css("left","30px").css("width","480px").css("height","20px").css("font-size",22),$("#fp").css("position","absolute").css("top","0px").css("left","14px").css("width","20px").css("height","20px").html(0),$("#sp").css("position","absolute").css("top","0px").css("left","492px").css("width","20px").css("height","20px").html(1)},getFractionsToBeSorted:function(a){Interaction.nom=[],Interaction.denom=[],Interaction.baseDenom=Util.randomInteger(4,8);var b=0;for(var c=0;c<a;c++){var d;b==a-Interaction.baseDenom?d=Util.randomInteger(2,Math.ceil(16/Interaction.baseDenom)):d=Util.randomInteger(1,Math.ceil(16/Interaction.baseDenom)),d==1&&b++,Interaction.denom[c]=Interaction.baseDenom*d;var e=[];for(var f=0;f<c;f++)e[f]=Interaction.nom[f]*(Interaction.denom[c]/Interaction.denom[f]);Interaction.nom[c]=Util.randomInteger(1,Interaction.denom[c],e);var g=[];g=Util.reduceFractions(Interaction.nom[c],Interaction.denom[c]),Interaction.nom[c]=g[0],Interaction.denom[c]=g[1]}}};