/*Styles*/
function __Styles(){textStyle={fillColor:"#fff"},edgeStyle={strokeColor:"#255b63",fillColor:"#bfe8ef"},twoDimensionalShapeStyle={strokeColor:"#255b63",fillColor:new RgbColor(.75,.91,.94,1),strokeWidth:2},oneDimensionalShapeStyle={strokeColor:"#255b63",fillColor:new RgbColor(1,1,1,0),strokeWidth:2},threeDimensionalShapeStyle={strokeColor:"#255b63",fillColor:new RgbColor(.75,.91,.94,.8),strokeWidth:2},dashedLineStyle={strokeColor:"#000"},bowlHoverStyle={strokeColor:"#000",fillColor:"#ff9",strokeWidth:2},bowlDroppedTrueStyle={strokeColor:"#0f0",fillColor:"#afa"},bowlDroppedFalseStyle={strokeColor:"#f00",fillColor:"#faa"},bowlDefaultStyle={fillColor:"#fff",strokeColor:"#000",strokeWidth:2}}var Animation={};Animation.images=[{id:"animation_0",src:"/assets/animations/boyut/animation_0.jpg"},{id:"animation_1",src:"/assets/animations/boyut/animation_1.jpg"},{id:"animation_2",src:"/assets/animations/boyut/animation_2.jpg"},{id:"animation_3",src:"/assets/animations/boyut/animation_3.jpg"},{id:"animation_4",src:"/assets/animations/boyut/animation_4.jpg"},{id:"animation_5",src:"/assets/animations/boyut/animation_5.jpg"},{id:"animation_6",src:"/assets/animations/boyut/animation_6.jpg"}],Animation.init=function(a){Animation.container=a;for(var b=0;b<7;b++){var c=document.createElement("img");c.src=Animation.images[b].src,$(Animation.container).append(c),$(c).css({position:"absolute",top:"20px",left:"200px",opacity:0}).delay(1e3*b),b==6?$(c).animate({opacity:1},1e3,Main.animationFinished):$(c).animate({opacity:1},1e3)}};var Interaction={};Interaction.images=[{id:"bowl_default",src:"/assets/animations/boyut/bowl_default.png"},{id:"bowl_hover",src:"/assets/animations/boyut/bowl_hover.png"},{id:"bowl_true",src:"/assets/animations/boyut/bowl_true.png"},{id:"bowl_false",src:"/assets/animations/boyut/bowl_false.png"}],Interaction.getFramework=function(){return"paper"},Interaction.init=function(a){Main.setObjective("Yandaki nesneleri kaç boyutlu olduğuna göre sınıflandırmak için sürükleyerek ilgili sepete atınız."),bowlHoverStyle.fillColor=new RgbColor(1,1,.6),bowlDroppedTrueStyle.fillColor=new RgbColor(.7,1,.7),bowlDroppedFalseStyle.fillColor=new RgbColor(1,.7,.7),bowlDefaultStyle.fillColor=new RgbColor(1,1,1),Interaction.container=a,Interaction.container.top=$(a).offset().top,Interaction.container.left=$(a).offset().left,Interaction.paper={width:$(a).width(),height:$(a).height()};var b=Interaction.paper.width,c=Interaction.paper.height;Interaction.shapeCount=1,Interaction.generateBowls(b,c),Interaction.nextQuestion();var d=new Tool;d.setHitTestOptions({fill:!0,stroke:!0,segments:!0,tolerance:25}),d.onMouseDown=function(a){a.item&&(d.shape=a.item,a.item.start())},d.onMouseDrag=function(a){d.shape&&d.shape.move(a.delta.x,a.delta.y,a.point.x,a.point.y)},d.onMouseUp=function(a){d.shape&&d.shape.up(),d.shape=null},d.activate()},Interaction.setStatus=function(a){Interaction.status.innerHTML=a},Interaction.nextQuestion=function(){Interaction.shape&&Interaction.shape.remove(),Interaction.shapeCount++,Interaction.preventDrag=!1;var a=Interaction.paper.width,b=Interaction.paper.height;Interaction.generateRandomShape(.4*a,.19*b,.2*a,.22*b);var c=function(){if(Interaction.preventDrag)return;this.ox=this.position.x,this.oy=this.position.y,this.odx=0,this.ody=0;var a=$(Interaction.container).offset();this.s_left=a.left,this.s_top=a.top,this.inDropableShape=!1;if(this.preventDrag==null||this.preventDrag==undefined)this.preventDrag=!1;return Interaction.droppedBowl=undefined,!0},d=function(a,b,c,d){if(Interaction.preventDrag)return;this.odx+=a,this.ody+=b,this.position=[this.position.x+a,this.position.y+b];for(var e in Interaction.dim)Interaction.dim[e].set=bowlDefaultStyle;var f=null;Interaction.droppedBowl=null,$(Interaction.dim).each(function(a,b){this.setImage($("#bowl_default").get(0)),this.bounds.contains(new Point(c,d))&&(this.setImage($("#bowl_hover").get(0)),Interaction.droppedBowl=this)})},e=function(){if(Interaction.preventDrag)return;if(Interaction.droppedBowl!=null&&Interaction.droppedBowl!=undefined&&Interaction.shape.dimension==Interaction.droppedBowl.dimension)Interaction.preventDrag=!0,Interaction.shape.scaleRatio=.9,Interaction.shape.opacityX=1,Interaction.shape.animate({style:{opacityX:-0.3,scaleRatio:1},duration:500,update:function(){this.opacityX<.7&&(this.opacity=this.opacityX+.3),this.scale(this.scaleRatio)}}),Interaction.droppedBowl.setImage($("#bowl_true").get(0)),setTimeout(function(){Interaction.droppedBowl.setImage($("#bowl_default").get(0)),Interaction.nextQuestion()},400);else{Interaction.preventDrag=!0;var a=function(){Interaction.preventDrag=!1};Interaction.droppedBowl!=null&&Interaction.droppedBowl!=undefined&&Interaction.droppedBowl.setImage($("#bowl_false").get(0));var b=Math.sqrt(this.odx*this.odx+this.ody*this.ody),c=1,d=b/c;this.animate({style:{position:new Point(this.ox,this.oy)},duration:d,callback:a})}};Interaction.shape.move=d,Interaction.shape.up=e,Interaction.shape.start=c},Interaction.generateRandomShape=function(a,b,c,d){var e=35;Interaction.shapeCount=Interaction.shapeCount%e;if(Interaction.shuffledArray==null||Interaction.shuffledArray==undefined)Interaction.shuffledArray=Util.getShuffledArray(e);shapeType=Interaction.shuffledArray[Interaction.shapeCount];switch(shapeType){case 0:Interaction.shape=new Path.Circle(new Point(a+c*.5,b+d*.5),5),Interaction.shape.style={fillColor:twoDimensionalShapeStyle.strokeColor,strokeColor:twoDimensionalShapeStyle.strokeColor},Interaction.shape.dimension=0;break;case 1:Interaction.shape=new Path.Rectangle(new Point(a+c*.2,b+d*.2),new Size(c*.6,d*.6)),Interaction.shape.dimension=1;break;case 2:var f=Math.min(c,d)*.5;Interaction.shape=new Path.Circle(new Point(a+c*.5,b+d*.5),f),Interaction.shape.dimension=1;break;case 3:var g=Math.min(c,d);Interaction.shape=new Path.Line(new Point(a+c*.2,b+d*.2),new Point(a+c*.8,b+d*.8)),Interaction.shape.dimension=1;break;case 4:Interaction.shape=new Path.OneSidedArrow(new Point(a+c*.1,b+d*.5),new Point(a+c*.8,b+d*.5),10,30),Interaction.shape.dimension=1,Interaction.shape.arrow=!0;break;case 5:Interaction.shape=new Path.Rectangle(new Point(a+c*.2,b+d*.2),new Size(c*.6,d*.6)),Interaction.shape.dimension=2;break;case 6:var f=Math.min(c,d)*.5;Interaction.shape=new Path.Circle(new Point(a+c*.5,b+d*.5),f),Interaction.shape.dimension=2;break;case 7:Interaction.shape=new Path.Rhomboid(new Point(a+c*.2,b+d*.2),new Size(c*.6,b*.6),c*.2),Interaction.shape.dimension=2;break;case 8:Interaction.shape=new Path.Triangle(new Point(a+c*.2,b+d*.8),new Point(a+c*.8,b+d*.8),new Point(a+c*.5,b+d*.2)),Interaction.shape.dimension=2;break;case 9:var f=Math.min(c,d)*.6;Interaction.shape=new Path.RectanglePrisim(new Point(a,b),new Size(f,f),new Size(f*.4,f*.4)),Interaction.shape.dimension=3;break;case 10:var f=Math.min(c,d);Interaction.shape=new Path.Sphere(new Point(a+c*.5,b+d*.5),f*.5),Interaction.shape.dimension=3;break;case 11:Interaction.shape=new Path.Cylinder(new Point(a+c*.2,b+d*.2),new Size(c*.6,d*.6)),Interaction.shape.dimension=3;break;case 12:Interaction.shape=new Path.RegularPolygon(new Point(a,b),new Size(c,d),5,30),Interaction.shape.dimension=2;break;case 13:Interaction.shape=new Path.RegularPolygon(new Point(a,b),new Size(c,d),5,60),Interaction.shape.dimension=1;break;case 14:Interaction.shape=new Path.RegularPolygon(new Point(a,b),new Size(c,d),6,90),Interaction.shape.dimension=2;break;case 15:Interaction.shape=new Path.RegularPolygon(new Point(a,b),new Size(c,d),6,120),Interaction.shape.dimension=1;break;case 16:Interaction.shape=new Path.Trapezoid(new Point(a,b),new Size(c,d),c*.2),Interaction.shape.dimension=1;break;case 17:Interaction.shape=new Path.Trapezoid(new Point(a,b),new Size(c,d),c*.3),Interaction.shape.dimension=2;break;case 18:Interaction.shape=new Path.Pyramid(new Point(a,b),new Size(c,d)),Interaction.shape.dimension=3;break;case 19:Interaction.shape=new Path.Cone(new Point(a+c*.1,b),new Size(c*.8,d)),Interaction.shape.dimension=3;break;case 20:Interaction.shape=new Path.Rhombus(new Point(a+c*.2,b+d*.2),new Size(c*.6,b*.6)),Interaction.shape.dimension=1;break;case 21:Interaction.shape=new Path.Rhombus(new Point(a+c*.2,b+d*.2),new Size(c*.6,b*.6)),Interaction.shape.dimension=2;break;case 22:Interaction.shape=new Path.Rhomboid(new Point(a+c*.2,b+d*.2),new Size(c*.6,b*.6),c*.2),Interaction.shape.dimension=1;break;case 23:var f=Math.min(a,b);Interaction.shape=new Path.SquarePrisim(new Point(a,b),f*.7,f*.4),Interaction.shape.dimension=3;break;case 24:Interaction.shape=new Path.RectanglePrisim(new Point(a,b),new Size(c*.7,d*.7),new Size(c*.3,d*.3)),Interaction.shape.dimension=3;break;case 25:Interaction.shape=new Path.TrianglePrisim(new Point(a,b),new Size(c,d)),Interaction.shape.dimension=3;break;case 26:Interaction.shape=new Path.Triangle(new Point(a+c*.3,b+d*.7),new Point(a+c*.9,b+d*.6),new Point(a+c*.5,b+d*.1)),Interaction.shape.dimension=2;break;case 27:Interaction.shape=new Path.Triangle(new Point(a+c*.3,b+d*.7),new Point(a+c*.9,b+d*.6),new Point(a+c*.5,b+d*.1)),Interaction.shape.dimension=1;break;case 28:Interaction.shape=new Path.Triangle(new Point(a+c*.2,b+d),new Point(a+c,b+d),new Point(a+c,b)),Interaction.shape.dimension=1;break;case 29:Interaction.shape=new Path.Triangle(new Point(a+c*.2,b+d),new Point(a+c,b+d),new Point(a+c*.2,b)),Interaction.shape.dimension=2;break;case 30:Interaction.shape=new Path.Triangle(new Point(a+c*.2,b+d),new Point(a+c*.8,b+d),new Point(a+c,b)),Interaction.shape.dimension=2;break;case 31:var g=Math.min(c,d);Interaction.shape=new Path.Line(new Point(a+c,b),new Point(a,b+d)),Interaction.shape.dimension=1;break;case 32:Interaction.shape=new Path.OneSidedArrow(new Point(a,b),new Point(a+c,b+d*.5),10,30),Interaction.shape.dimension=1,Interaction.shape.arrow=!0;break;case 33:Interaction.shape=new Path.OneSidedArrow(new Point(a+c*.5,b+d),new Point(a+c*.5,b),10,30),Interaction.shape.dimension=1,Interaction.shape.arrow=!0;break;case 34:Interaction.shape=new Path.OneSidedArrow(new Point(a+c*.5,b),new Point(a+c*.5,b+d),10,30),Interaction.shape.dimension=1,Interaction.shape.arrow=!0}if(Interaction.shape.dimension==1)Interaction.shape.set_style(oneDimensionalShapeStyle);else if(Interaction.shape.dimension==2)Interaction.shape.set_style(twoDimensionalShapeStyle);else if(Interaction.shape.dimension==3){Interaction.shape.set_style(threeDimensionalShapeStyle);if(Interaction.shape.children)for(var h=0;h<Interaction.shape.children.length;h++)Interaction.shape.children[h].class=="dashed"&&Interaction.shape.children[h].set_style(dashedLineStyle)}Interaction.shape.arrow==1&&Interaction.shape.set_style({fillColor:twoDimensionalShapeStyle.strokeColor})},Interaction.generateBowls=function(a,b){var c=.2*a,d=.22*b,e=[];for(var f=0;f<4;f++){e[f]=new Raster("bowl_default"),e[f].position=new Point((f+.5)*.25*a,.7*b),e[f].dimension=f,e[f].class="bowl";if(f==0){var g=new PointText((new Point(e[f].position.x-c*.3,e[f].position.y)).add(1,1));g.content="Boyutu\nyok",g.set_style(textStyle),g.set_style({fillColor:"#2f4f54"});var h=new PointText(new Point(e[f].position.x-c*.3,e[f].position.y));h.content="Boyutu\nyok",h.set_style(textStyle)}else{var g=new PointText((new Point(e[f].position.x-c*.25,e[f].position.y)).add(1,1));g.content=""+f+" Boyutlu",g.set_style(textStyle),g.set_style({fillColor:"#2f4f54"});var h=new PointText(new Point(e[f].position.x-c*.25,e[f].position.y));h.content=""+f+" Boyutlu",h.set_style(textStyle)}}Interaction.dim=e};