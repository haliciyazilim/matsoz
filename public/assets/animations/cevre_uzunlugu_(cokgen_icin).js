/*Styles*/
function rectangle(a,b,c,d){var e,f,g,h,i;i=Math.min(d.width,d.height)*(Math.max(a,b)/17),a>b?(g=i,h=i*(b/a)):(g=i*(a/b),h=i),e=d.width*.5-g*.5,f=(d.height-h)*.5;var j=new Path.Rectangle(new Point(e,f),new Size(g,h));j.style=edgeStyle;var k=new PointText(new Point(e+g*.5-10,f+h+15));k.content=""+a+" "+c;var l=new PointText(new Point(e+g+5,f+h*.5));l.content=""+b+" "+c,Interaction.printVertexLetters([new Point(e-10,f+h+10),new Point(e+g+10,f+h+10),new Point(e+g+10,f-10),new Point(e-10,f-10)])}function rhomboid(a,b,c,d,e){var f,g,h,i,j,k;k=Math.min(e.width,e.height)*(Math.max(a+b,c)/20),2*a+b>c?(h=k*((a+b)/(2*a+b)),i=k*a/(2*a+b),j=k*(c/(2*a+b))):(h=k*((a+b)/c),i=k*a/c,j=k),f=(e.width-(h+i))*.5,g=(e.height-j)*.5;var l=new Path.Rhomboid(new Point(f,g),new Size(h,j),i);l.style=edgeStyle;var m=new PointText(new Point(f+h*.5-10,g+j+15));m.content=""+(a+b)+" "+d;var n=new PointText(new Point(f+h+i-20,g+j*.5+10));n.content=""+c+" "+d,Interaction.printVertexLetters([new Point(f-10,g+j+10),new Point(f+h+10,g+j+10),new Point(f+i+h+10,g-10),new Point(f+i-10,g-10)])}function rhombus(a,b,c,d){var e,f,g,h;H=Math.sqrt(a*a-Math.pow(b*.5,2));var i=Math.min(d.width,d.height)*(Math.max(b,H)/15);b>H?(g=i,h=i*H/b):(g=i*b/H,h=i),e=(d.width-g)*.5,f=(d.height-h)*.5;var j=new Path.Rhombus(new Point(e,f),new Size(g,h));j.style=edgeStyle;var k=new PointText(new Point(e-20,f+h*.3));k.content=""+a+" "+c;var l=new PointText(new Point(e-20,f+h*.8));l.content=""+a+" "+c;var m=new PointText(new Point(e+g*.9,f+h*.3));m.content=""+a+" "+c;var n=new PointText(new Point(e+g*.9,f+h*.8));n.content=""+a+" "+c,k.characterStyle.justification="center",l.characterStyle.justification="center",m.characterStyle.justification="center",Interaction.printVertexLetters([new Point(e-10,f+h*.5),new Point(e+g*.5,f-10),new Point(e+g+10,f+h*.5),new Point(e+g*.5-5,f+h+15)])}function trapezoid(a,b,c,d,e,f){var g,h,i,j,k,l,m;l=Math.sqrt(c*c-Math.pow((a-b)*.5,2)),m=Math.min(f.width,f.height)*(Math.max(a,c)/15),a>l?(i=m,j=m*b/a,k=m*l/a):(i=m*a/l,j=m*b/l,k=m),j*=.3,g=(f.width-i)*.5,h=(f.height-k)*.5;var n=new Path.Trapezoid(new Point(g,h),new Size(i,k),j*c/(d+c),j*d/(d+c));n.style=edgeStyle;var o=new PointText(new Point(g+i*.5-10,h+15+k));o.content=""+a+" "+e;var p=new PointText(new Point(g+i,h+k*.5));p.content=""+d+" "+e;var q=new PointText(new Point(g-25,h+k*.5));q.content=""+c+" "+e;var q=new PointText(new Point(g+i*.5-10,h-5));q.content=""+b+" "+e,Interaction.printVertexLetters([new Point(g-10,h+k+10),new Point(g+i+10,h+k+10),new Point(g+10,h-10),new Point(g+i-10,h-10)])}function Triangle(a,b,c,d,e){var f=0,g=20;this.i=a,this.j=b,this.k=c,this.p1={x:10,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0},this.a1=null,this.a2=null,this.a3=null;var h=Math.min(e.width,e.height)*.8,i=(h-40)/Math.max(a,b,c);this.p1.x=60,this.p1.y=h-20,this.p2.x=this.p1.x+this.i*i,this.p2.y=this.p1.y;var h=Math.acos((this.i*this.i+this.k*this.k-this.j*this.j)/(2*this.i*this.k));this.p3.x=this.p1.x+Math.cos(h)*c*i,this.p3.y=this.p1.y-Math.sin(h)*c*i,this.p1.x+=f,this.p2.x+=f,this.p3.x+=f,this.p1.y+=g,this.p2.y+=g,this.p3.y+=g;var j=new Path.Triangle(this.p1,this.p2,this.p3);j.style=edgeStyle,Interaction.printVertexLetters([new Point(this.p1.x-10,this.p1.y+10),new Point(this.p2.x+10,this.p2.y+10),new Point(this.p3.x+10,this.p3.y-10)]),this.drawEdgeText=function(a,b,c,d){var e,f;e=a.x+c*Math.sin(b),f=a.y+c*Math.cos(b);var g=new PointText(new Point(e,f));g.content=d},this.calculateAngles=function(){this.a1=Math.acos((this.i*this.i+this.k*this.k-this.j*this.j)/(2*this.i*this.k)),this.a2=Math.acos((this.i*this.i+this.j*this.j-this.k*this.k)/(2*this.i*this.j)),this.a3=Math.acos((this.k*this.k+this.j*this.j-this.i*this.i)/(2*this.k*this.j)),this._a1=Math.floor(Util.radianToDegree(this.a1)),this._a2=Math.round(Util.radianToDegree(this.a2)),this._a3=Math.floor(Util.radianToDegree(this.a3))},this.drawAngle=function(a,b,c,d,e){function f(a,b,c){var d,e,f;return f=Util.findAngle(a.x,a.y,b.x,b.y),d=a.x+Math.cos(f)*c,e=a.y-Math.sin(f)*c,{x:d,y:e}}var g,h,i,j,k,l;l=20;var m,n;m=f(a,b,l),g=m.x,h=m.y,n=f(a,c,l),i=n.x,j=n.y;var o=d>Math.PI?1:0,p=d>0?0:1,q=Util.findAngle(a.x,a.y,b.x,b.y),r=Util.findAngle(a.x,a.y,c.x,c.y),s=Math.abs(q-r)*.5+(Math.abs(q)>Math.abs(r)?r:q);if(e==90){var t,u;m=f(a,b,l/2),g=m.x,h=m.y,n=f(a,c,l/2),i=n.x,j=n.y,t=a.x+Math.sqrt(2)*l/2*Math.cos(s),u=a.y-Math.sqrt(2)*l/2*Math.sin(s);var v=new Path.Line(new Point(g,h),new Point(t,u));v.set_style(edgeStyle);var w=new Path.Line(new Point(i,j),new Point(t,u));w.set_style(edgeStyle);var x=new Path.Circle(new Point((a.x+t)*.5,(a.y+u)*.5),1);x.set_style({fillColor:"#000"}),l/=1.5}else{t=a.x+Math.sqrt(2)*l*.7*Math.cos(s),u=a.y-Math.sqrt(2)*l*.7*Math.sin(s),k=Util.findDistance(a.x,a.y,g,h);var y=new Path;y.add(m),y.arcTo([t,u],n),y.set_style(edgeStyle)}var z,A;z=a.x+Math.sqrt(2)*l*Math.cos(s),A=a.y-Math.sqrt(2)*l*Math.sin(s),z<a.x&&(z-=15),A>a.y&&(A+=10);var B=new PointText(z,A);B.content=""+e+"°",B.set_style(textStyle)},this.showAngle=function(a){switch(a){case"A":this.drawAngle(this.p1,this.p2,this.p3,this.a1,this._a1);break;case"B":this.drawAngle(this.p2,this.p3,this.p1,this.a2,this._a2);break;case"C":this.drawAngle(this.p3,this.p1,this.p2,this.a3,this._a3);break;default:throw"invalid argument. valid arguments: [ A , B , C ]"}return this},this.showEdge=function(a){var b=10;switch(a){case"a":var c=Util.findAngle(this.p1.x,this.p1.y,this.p2.x,this.p2.y);this.drawEdgeText({x:(this.p1.x+this.p2.x)*.5,y:(this.p1.y+this.p2.y)*.5+5},c,b,this.i+" "+d);break;case"b":var c=Util.findAngle(this.p2.x,this.p2.y,this.p3.x,this.p3.y);this.drawEdgeText({x:(this.p2.x+this.p3.x)*.5-5,y:(this.p2.y+this.p3.y)*.5},c,b,this.j+" "+d);break;case"c":var c=Util.findAngle(this.p3.x,this.p3.y,this.p1.x,this.p1.y);this.drawEdgeText({x:(this.p3.x+this.p1.x)*.5-15,y:(this.p3.y+this.p1.y)*.5},c,b,this.k+" "+d);break;default:throw"invalid argument. valid arguments: [ a , b , c ]"}return this},this.calculateAngles(),this.paper=e}var solutionCSS={position:"absolute",bottom:"100px",right:"60px",color:"green",fontSize:"16px",fontWeight:"bold"},textStyle={"font-size":"16px"},edgeStyle={strokeColor:"#255b63",strokeWidth:2,fillColor:"#fff",cursor:"move"},rectangularShapeStyle={"shape-rendering":"crispEdges"},angleStyle={fill:"#DDD"},animationEdgeStyle={strokeColor:"#000",strokeWidth:2},Animation={init:function(a){Animation.container=a;var b=$(a).width(),c=$(a).height(),d=new Size(100,100),e=30,f=new Point(20,25+e),g=new Path.EquiradialPolygon(f,d,[120,210,330],0);g.set_style(animationEdgeStyle),g.angle=0,g.lastTransformation=g.matrix,g.texts=[],g.texts[0]=new PointText(new Point(g.vertexArray[0].x,g.vertexArray[0].y-10)),g.texts[0].content="C",g.texts[0].firstPosition=g.texts[0].position,g.texts[1]=new PointText(new Point(g.vertexArray[1].x-10,g.vertexArray[1].y+10)),g.texts[1].content="A",g.texts[1].firstPosition=g.texts[1].position,g.texts[2]=new PointText(new Point(g.vertexArray[2].x,g.vertexArray[2].y+10)),g.texts[2].content="B",g.texts[2].firstPosition=g.texts[2].position,g.texts[3]=new PointText(new Point((g.vertexArray[0].x+g.vertexArray[1].x)*.5-10,(g.vertexArray[0].y+g.vertexArray[1].y)*.5)),g.texts[3].content="b",g.texts[3].firstPosition=g.texts[3].position,g.texts[4]=new PointText(new Point((g.vertexArray[1].x+g.vertexArray[2].x)*.5,(g.vertexArray[2].y+g.vertexArray[2].y)*.5+10)),g.texts[4].content="c",g.texts[4].firstPosition=g.texts[4].position,g.texts[5]=new PointText(new Point((g.vertexArray[0].x+g.vertexArray[2].x)*.5+10,(g.vertexArray[0].y+g.vertexArray[2].y)*.5)),g.texts[5].content="a",g.texts[5].firstPosition=g.texts[5].position,g.animate({style:{angle:135},duration:1e3,delay:500,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[2]),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,this.vertexArray[2])},callback:function(){(new Path.Circle(this.vertexArray[2],2)).set_style({fillColor:"#000"});for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[2]);var b=new PointText(new Point((g.vertexArray[0].x+g.vertexArray[2].x)*.5,(g.vertexArray[0].y+g.vertexArray[2].y)*.5+10));b.content="a",this.lastTransformation=this.matrix,(new Path.Line(this.vertexArray[0],this.vertexArray[2])).set_style({strokeColor:"#f00",strokeWidth:2});for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;g.angle=0}}),g.animate({style:{angle:120},duration:1e3,delay:1600,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[0]),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,this.vertexArray[0])},callback:function(){(new Path.Circle(this.vertexArray[0],2)).set_style({fillColor:"#000"});for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[0]);var b=new PointText(new Point((g.vertexArray[0].x+g.vertexArray[1].x)*.5,(g.vertexArray[0].y+g.vertexArray[1].y)*.5+10));b.content="b",this.lastTransformation=this.matrix,(new Path.Line(this.vertexArray[1],this.vertexArray[0])).set_style({strokeColor:"#f00",strokeWidth:2});for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;g.angle=0}}),g.animate({style:{angle:105},duration:1e3,delay:2700,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[1]),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,this.vertexArray[1])},callback:function(){(new Path.Circle(this.vertexArray[1],2)).set_style({fillColor:"#000"});for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[1]);var b=new PointText(new Point((g.vertexArray[1].x+g.vertexArray[2].x)*.5,(g.vertexArray[1].y+g.vertexArray[2].y)*.5+10));b.content="c",this.lastTransformation=this.matrix,(new Path.Line(this.vertexArray[1],this.vertexArray[2])).set_style({strokeColor:"#f00",strokeWidth:2});for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;this.angle=0}}),g.animate({style:{angle:135},duration:1e3,delay:3800,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[2].x+20,this.vertexArray[2].y+10),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,new Point(this.vertexArray[2].x+20,this.vertexArray[2].y+10))},callback:function(){(new Path.Circle(this.vertexArray[2],2)).set_style({fillColor:"#000"});for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[2]);this.lastTransformation=this.matrix;for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;this.angle=0;var b=new PointText(new Point((g.vertexArray[0].x+g.vertexArray[2].x)*.5,(g.vertexArray[0].y+g.vertexArray[2].y)*.5+30));b.content="Ç = a + b + c"}}),g.animate({style:{angle:-135},duration:1e3,delay:5800,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[2].x+20,this.vertexArray[2].y+10),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,new Point(this.vertexArray[2].x+20,this.vertexArray[2].y+10))},callback:function(){for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[2]);this.lastTransformation=this.matrix;for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;this.angle=0}}),g.animate({style:{angle:-105},duration:1e3,delay:7e3,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[1]),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,this.vertexArray[1])},callback:function(){for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[1]);this.lastTransformation=this.matrix;for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;this.angle=0}}),g.animate({style:{angle:-120},duration:1e3,delay:8100,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[0]),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,this.vertexArray[0])},callback:function(){for(var a=0;a<this.vertexArray.length;a++)this.vertexArray[a]=this.vertexArray[a].getRotatedPoint(this.angle,this.vertexArray[0]);this.lastTransformation=this.matrix;for(var a=0;a<this.texts.length;a++)this.texts[a].firstPosition=this.texts[a].position;g.angle=0}}),g.animate({style:{angle:-135},duration:1e3,delay:9200,update:function(){var a=new Matrix;a.rotate(this.angle,this.vertexArray[2]),a.concatenate(this.lastTransformation),this.setMatrix(a);for(var b=0;b<this.texts.length;b++)this.texts[b].position=this.texts[b].firstPosition.getRotatedPoint(this.angle,this.vertexArray[2])},callback:function(){g.angle=0;for(var a=0;a<Main.animationProject.activeLayer.children.length;a++)Main.animationProject.activeLayer.children[a].animate({style:{opacity:0},duration:1e3});$(Animation.container).append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_01.png" />').append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_02.png" />').append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_03.png" />').append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_04.png" />').append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_05.png" />').append('<img class="sekiller_cevre" src="/assets/animations/cevre_uzunlugu_(cokgen_icin)/cevre_ornek_06.png" />'),$(".sekiller_cevre",Animation.container).each(function(a,b){$(this).css({position:"absolute",top:"10px",left:"10px",opacity:0}).delay(1e3*(a+1)).animate({opacity:1},2e3)}),Main.animationFinished(7e3)}})}},Interaction={};Interaction.getFramework=function(){return"paper"},Interaction.init=function(a){Main.setObjective("Yandaki çokgenin çevre uzunluğunu bulunuz."),Interaction.container=a,$(Interaction.container).append('<div id="B"></div>'),$(Interaction.container).append("<style>div#L,div#R{float:left;}</style>"),$(Interaction.container).append("<style>div#B{position:absolute;top:30%;left:50%;height:30%;width:40%;text-align:center;padding-top:20px;}</style>"),$(Interaction.container).append("<style>div#L{width:60%;height:100%;text-align:center;}</style>"),$(Interaction.container).append("<style>div#R{width:40%;height:100%;}</style>"),Interaction.T=$("div#T",Interaction.container).get(0),Interaction.appendInput({position:"static"}),Interaction.appendButton({position:"static"}),$("div#B",Interaction.container).html('<div id="L"></div><div id="R"></div>'),$("div#B > div#L",Interaction.container).append("Ç =&nbsp;"),$("div#B > div#L",Interaction.container).append(Interaction.input),$("div#B > div#L",Interaction.container).append('&nbsp;<span id="input_measure"></span>'),$("div#B > div#R",Interaction.container).append(Interaction.button),$("div#B > div#R",Interaction.container).append('<div id="status"></div>'),$(Interaction.status).css({position:"relative",width:"220px",left:"-94px",fontSize:"16px",fontWeight:"bold",paddingTop:"10px",textAlign:"center"}),Interaction.appendStatus({bottom:"100px",right:"51px"}),Interaction.preventNextQuestion=!1;var b=7;Interaction.shuffledArray=Util.getShuffledArray(b),Interaction.count=0,Interaction.prepareNextQuestion()},Interaction.nextQuestion=function(){if(Interaction.isPaused())return;Main.interactionProject.activeLayer.removeChildren(),$(Interaction.solution).remove(),Interaction.shape=null,Interaction.values=null,Interaction.shape=Math.floor(Math.random()*4),Interaction.paper={width:$(Interaction.container).width()*.4,height:$(Interaction.container).height()};var a=Math.floor(Math.random()*2);Interaction.setMeasure(a),Interaction.letters=Math.random()>.5?["A","B","C","D","E"]:["K","L","M","N","P"];var b=Interaction.count++%Interaction.shuffledArray.length;Interaction.shape=Interaction.shuffledArray[b];switch(Interaction.shape){case 0:var c=Math.floor(Math.random()*10)+5,d=4*c;Interaction.values={a:c,cevre:d},rectangle(c,c,Interaction.getMeasure(),Interaction.paper);break;case 1:var c,e;c=Math.floor(Math.random()*10)+5,e=c;while(c==e)e=Math.floor(Math.random()*10)+5;Interaction.values={a:c,b:e,cevre:2*(c+e)},rectangle(c,e,Interaction.getMeasure(),Interaction.paper);break;case 2:var c,e,f;c=Math.floor(Math.random()*5)+5,f=c;while(c==f)f=Math.floor(Math.random()*5)+5;e=Math.floor(Math.random()*5)+5,Interaction.values={a:c,b:e,_a:f,cevre:2*(c+f+e)},rhomboid(c,f,e,Interaction.getMeasure(),Interaction.paper);break;case 3:var c,e,g;c=Math.floor(Math.random()*3)+5,e=Math.floor(Math.random()*4)+4,g=c+e;while(c+e<=g||Math.abs(c-e)>=g)g=Math.floor(Math.random()*5)+5;Util.rand01()==1&&(c*=2,e*=2,g*=2),Interaction.values={a:c,b:e,c:g,cevre:c+e+g},(new Triangle(c,e,g,Interaction.getMeasure(),Interaction.paper)).showEdge("a").showEdge("b").showEdge("c");break;case 4:var c,e,g;c=6,e=8,g=6;var h=Util.randomInteger(1,5);c*=h,e*=h,g*=h,Interaction.values={a:c,b:e,c:g,cevre:c+e+g},(new Triangle(c,e,g,Interaction.getMeasure(),Interaction.paper)).showEdge("a").showEdge("b").showAngle("A").showAngle("B");break;case 5:var c,e,f,g;c=Math.floor(Math.random()*5)+5,f=c;while(f>=c)f=Math.floor(Math.random()*5)+4;e=Math.floor(Math.random()*5)+5,g=Math.floor(Math.random()*3+e-1),Interaction.values={a:c,b:e,_a:f,c:g,cevre:c+f+e+g},trapezoid(c,f,e,g,Interaction.getMeasure(),Interaction.paper);break;case 6:var c,i;c=Math.floor(Math.random()*6)+6,i=2*c;while(i>=2*c)i=Math.floor(Math.random()*2)+6;Interaction.values={a:c,cevre:4*c},rhombus(c,i,Interaction.getMeasure(),Interaction.paper)}},Interaction.setMeasure=function(a){Interaction.measure=a,$("#input_measure").html(Interaction.getMeasure())},Interaction.getMeasure=function(){if(Interaction.measure==null||Interaction.measure=="undefined")throw"Interaction.values.m is not defined";return Interaction.measure==0?"cm":"m"},Interaction.isAnswerCorrect=function(){var a=Interaction.input.value;return a==Interaction.values.cevre},Interaction.onWrongAnswer=function(){},Interaction.onCorrectAnswer=function(){},Interaction.onFail=function(){Interaction.setStatus("Yanlış. Doğru cevap: "+Interaction.values.cevre+" "+Interaction.getMeasure(),!1)},Interaction.showSolution=function(){Interaction.pause();var a=Util.dom({tag:"div",parent:Interaction.container,css:solutionCSS,html:'Ç = <span id="0"></span><span id="1"></span><span id="2"></span><span id="3">&nbsp;=&nbsp;</span><span id="4"></span>'});Interaction.solution=a,$(a).html();switch(Interaction.shape){case 0:$("#0",a).html(4),$("#1",a).html("&nbsp;x&nbsp;"),$("#2",a).html(Interaction.values.a),$("#4",a).html(Interaction.values.cevre);break;case 1:$("#0",a).html(2),$("#1",a).html("&nbsp;x&nbsp;"),$("#2",a).html("("+Interaction.values.a+" + "+Interaction.values.b+")"),$("#4",a).html(Interaction.values.cevre);break;case 2:$("#0",a).html(2),$("#1",a).html("&nbsp;x&nbsp;"),$("#2",a).html("("+(Interaction.values.a+Interaction.values._a)+" + "+Interaction.values.b+")"),$("#4",a).html(Interaction.values.cevre);break;case 3:$("#0",a).html(Interaction.values.a),$("#1",a).html(" + "),$("#2",a).html(Interaction.values.b+" + "+Interaction.values.c),$("#4",a).html(Interaction.values.cevre);break;case 4:$("#0",a).html(Interaction.values.a),$("#1",a).html(" + "),$("#2",a).html(Interaction.values.b+" + "+Interaction.values.c),$("#4",a).html(Interaction.values.cevre);break;case 5:$("#0",a).html(Interaction.values.a+" + "+Interaction.values._a),$("#1",a).html(" + "),$("#2",a).html(Interaction.values.b+" + "+Interaction.values.c),$("#4",a).html(Interaction.values.cevre);break;case 6:$("#0",a).html(4),$("#1",a).html("&nbsp;x&nbsp;"),$("#2",a).html(Interaction.values.a),$("#4",a).html(Interaction.values.cevre)}for(var b=0;b<5;b++)$("#"+b,a).css({opacity:0}).delay(1e3*b).animate({opacity:1},1e3,b==4?Interaction.resume:undefined)},Interaction.printVertexLetters=function(a){for(var b=0;b<a.length;b++){var c=new PointText(a[b]);c.content=""+Interaction.letters.shift(),c.style=textStyle,c=null}};