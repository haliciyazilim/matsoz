var Interaction=function(){};Interaction();var Animation=function(){};Animation(),Interaction.getFramework=function(){return"paper"},Interaction.images=[{id:"fullImage",src:"/assets/animations/yamuk/yamuk01.png"},{id:"cornerA",src:"/assets/animations/yamuk/soru_yamuk_kose_a.png"},{id:"cornerB",src:"/assets/animations/yamuk/soru_yamuk_kose_b.png"},{id:"cornerC",src:"/assets/animations/yamuk/soru_yamuk_kose_c.png"},{id:"cornerD",src:"/assets/animations/yamuk/soru_yamuk_kose_d.png"}],Interaction.init=function(a){paperAddOns(),Main.setObjective('Yamuğun iç açıları toplamı 360° dir. Bunu görmek için "Oynat" düğmesine basınız.');var b=new Raster("fullImage"),c=new Raster("cornerA"),d=new Raster("cornerB"),e=new Raster("cornerC"),f=new Raster("cornerD");d.lastTransformation=d.matrix,f.lastTransformation=f.matrix;var g=new Group;g.addChild(c),g.addChild(d),g.addChild(e),g.addChild(f);var h,i,j=function(){AnimationManager.clearAnimations(),b.position=new Point(250.5,150),b.opacity=1,c.position=new Point(188.5,192.5),d.position=new Point(312.5,192.5),e.position=new Point(312.5,107.5),f.position=new Point(188.5,107.5),d.matrix=d.lastTransformation,f.matrix=f.lastTransformation,g.opacity=0,h&&h.remove(),i&&i.remove(),i=new PointText(new Point(322,86))},k=function(){b.animate({style:{opacity:0},duration:1e3,delay:3e3}),g.animate({style:{opacity:1},duration:1e3,delay:1e3}),cornerHelper=new AnimationHelper({angle:0}),cornerHelper.animate({style:{angle:180},duration:1e3,delay:5e3,animationType:"easeInEaseOut",update:function(){var a=new Matrix;a.rotate(this.angle,250,150.5),a.concatenate(d.lastTransformation),d.setMatrix(a),a=new Matrix,a.rotate(this.angle,250,150.5),a.concatenate(f.lastTransformation),f.setMatrix(a)}});var a=1e3,j=6100,k=64,l=64,m=.5,n=20;c.animate({style:{position:new Point(206.5+l+n,194-k+m)},duration:a,delay:j,animationType:"easeInEaseOut"}),f.animate({style:{position:new Point(293.5-l+n,194-k+m)},duration:a-300,delay:j+100,animationType:"easeInEaseOut"}),e.animate({style:{position:new Point(293.5-l+n,107+k+m)},duration:a+200,delay:j+200,animationType:"easeInEaseOut"}),d.animate({style:{position:new Point(206.5+l+n,107+k+m)},duration:a,delay:j+250,animationType:"easeInEaseOut"}),arrowHelper={endAngle:-Math.PI/3+.4,opacity:0,angle:0},arrowHelper.animate=Item.prototype.animate,Interaction.onFrame=function(a){h&&h.remove(),h=new Path.OneSidedRoundArrow(new Point(250,150),80,-Math.PI/3+.4,arrowHelper.endAngle,{arrowEnd:!0}),h.opacity=arrowHelper.opacity,h.strokeColor="#000",h.strokeWidth=2.5,i.justification="left",i.fillColor="#000",i.content=Math.floor(arrowHelper.angle)+"°",i.characterStyle={fontSize:16},i.opacity=arrowHelper.opacity},arrowHelper.animate({style:{endAngle:Math.PI*2-Math.PI/3+.33,angle:360},duration:2e3,delay:7e3,animationType:"easeInEaseOut",callback:function(){$("#replayButton").css("visibility","visible"),$("#replayButton").fadeTo("fast",1,function(){})}}),arrowHelper.animate({style:{opacity:1},duration:1e3,delay:7e3,animationType:"easeInEaseOut"})};j(),$(a).append('<input id="replayButton" type="button" class="play_button" />'),$("#replayButton").css("position","absolute").css("bottom","10px").css("right","10px"),$("#replayButton").click(function(){j(),k(),$("#replayButton").fadeTo("fast",0,function(){$("#replayButton").css("visibility","hidden")})})},paperAddOns=function(){Path.OneSidedRoundArrow=function(a,b,c,d,e){e||(e={}),e.arrowHeadSize||(e.arrowHeadSize=10),e.angle||(e.angle=30);var f=new Group,g=new Point(a.x+Math.cos(c)*b,a.y+Math.sin(c)*b),h=new Point(a.x+Math.cos((c+d)/2)*b,a.y+Math.sin((c+d)/2)*b),i=new Point(a.x+Math.cos(d)*b,a.y+Math.sin(d)*b),j=new Path.Arc(g,h,i);if(e.arrowEnd){e.arrowEndSize||(e.arrowEndSize=3);var k=new Path.Circle(g,e.arrowEndSize);f.addChild(k),k.fillColor="#000"}var l=e.arrowHeadSize,m=-90+Util.radianToDegree(Util.findAngle(a.x,a.y,i.x,i.y)),n=Util.degreeToRadians(180+m+e.angle),o=Util.degreeToRadians(180+m-e.angle),p=new Path.Line(i,new Point(i.x+l*Math.cos(n),i.y-l*Math.sin(n))),q=new Path.Line(i,new Point(i.x+l*Math.cos(o),i.y-l*Math.sin(o))),r=new Path;return r.add(i),r.add(new Point(i.x+l*Math.cos(n),i.y-l*Math.sin(n))),r.add(new Point(i.x+l*Math.cos(o),i.y-l*Math.sin(o))),r.closed=!0,j.strokeColor="#000",r.style={strokeColor:"#000",fillColor:"#000"},p.strokeColor="#000",q.strokeColor="#000",f.addChild(j),f.addChild(r),f.addChild(p),f.addChild(q),f}},Animation.images=[{id:"yamuk01",src:"/assets/animations/yamuk/yamuk_ornek_01.png"},{id:"yamuk02",src:"/assets/animations/yamuk/yamuk_ornek_02.png"},{id:"yamuk03",src:"/assets/animations/yamuk/yamuk_ornek_03.png"},{id:"yamuk03",src:"/assets/animations/yamuk/yamuk_ornek_03.png"},{id:"yamuk04",src:"/assets/animations/yamuk/yamuk_ornek_04.png"},{id:"yamuk05",src:"/assets/animations/yamuk/yamuk_ornek_05.png"},{id:"yamuk06",src:"/assets/animations/yamuk/yamuk_ornek_06.png"},{id:"yamuk07",src:"/assets/animations/yamuk/yamuk_ornek_07.png"},{id:"yamuk08",src:"/assets/animations/yamuk/yamuk_ornek_08.png"}],Animation.init=function(a){var b=new Group,c=new Raster("yamuk01"),d=new Raster("yamuk02"),e=new Raster("yamuk03"),f=new Raster("yamuk04"),g=new Raster("yamuk05"),h=new Raster("yamuk06"),i=new Raster("yamuk07"),j=new Raster("yamuk08");b.addChild(c),b.addChild(d),b.addChild(e),b.addChild(f),b.addChild(g),b.addChild(h),b.addChild(i),b.addChild(j),c.opacity=0,d.opacity=0,e.opacity=0,f.opacity=0,g.opacity=0,h.opacity=0,i.opacity=0,j.opacity=0,b.position=new Point(200.5,84),$(a).append('<div id="textHolder"></div>'),$("#textHolder").css("line-height","24px").css("color","#262626").css("position","absolute").css("left","400px").css("top","38px").css("width","330").css("height","100"),$("#textHolder").append('<div id="text01">A ve D açılarının ölçüleri toplamı 180° dir.</div>'),$("#textHolder").append('<div id="text02">B ve C açılarının ölçüleri toplamı 180° dir.</div>'),$("#textHolder").append('<div id="text03">Karşılıklı kenar çiftlerinden en az biri paraleldir.</div>'),$("#text01").css("opacity",0),$("#text02").css("opacity",0),$("#text03").css("opacity",0),$("#text04").css("opacity",0),$("#text05").css("opacity",0),textHelper={text01Opacity:0,text02Opacity:0,text03Opacity:0,text04Opacity:0,text05Opacity:0},Animation.onFrame=function(a){$("#text01").css("opacity",textHelper.text01Opacity),$("#text02").css("opacity",textHelper.text02Opacity),$("#text03").css("opacity",textHelper.text03Opacity),$("#text04").css("opacity",textHelper.text04Opacity),$("#text05").css("opacity",textHelper.text05Opacity)},textHelper.animate=Item.prototype.animate,c.animate({style:{opacity:1},duration:1e3,delay:0,animationType:"easeInEaseOut"}),e.animate({style:{opacity:1},duration:1e3,delay:1500,animationType:"easeInEaseOut",callback:function(){c.remove()}}),textHelper.animate({style:{text01Opacity:1},duration:1e3,delay:5e3,animationType:"easeInEaseOut"}),f.animate({style:{opacity:1},duration:1e3,delay:3e3,animationType:"easeInEaseOut",callback:function(){e.remove()}}),textHelper.animate({style:{text02Opacity:1},duration:1e3,delay:7e3,animationType:"easeInEaseOut"}),g.animate({style:{opacity:1},duration:1e3,delay:5e3,animationType:"easeInEaseOut",callback:function(){f.remove()}}),textHelper.animate({style:{text03Opacity:1},duration:1e3,delay:9e3,animationType:"easeInEaseOut"}),h.animate({style:{opacity:1},duration:1e3,delay:7e3,animationType:"easeInEaseOut",callback:function(){g.remove()}}),i.animate({style:{opacity:1},duration:1e3,delay:9e3,animationType:"easeInEaseOut",callback:function(){h.remove()}}),textHelper.animate({style:{text04Opacity:1},duration:1e3,delay:13e3,animationType:"easeInEaseOut"}),j.animate({style:{opacity:1},duration:1e3,delay:11e3,animationType:"easeInEaseOut",callback:function(){i.remove(),Main.animationFinished()}}),textHelper.animate({style:{text05Opacity:1},duration:1e3,delay:13e3,animationType:"easeInEaseOut"})};