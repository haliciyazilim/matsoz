function __Styles(){animationTriangleColor="#FABF8F",animationTriangleColor2="#92D050",interactionTriangleColor="#ffbfc0",interactionTriangleColor2="#ffd495",interactionSquareColor="#aeefaf",interactionSquareColor2="#b9e7fe",interactionHexagonColor="#e6bcfe",interactionHexagonColor2="#a2c4ff"}var Animation={init:function(a){Animation.container=a,Animation.triangleGroup=new Group;for(var b=0;b<4;b++)for(var c=b,d=0;c<4;c++,d++){var e=new Path.Triangle(new Point(300.5+b*20+d*40,168.5-b*35),new Point(340.5+b*20+d*40,168.5-b*35),new Point(320.5+b*20+d*40,133.5-b*35));e.strokeColor="black",e.fillColor=animationTriangleColor,Animation.triangleGroup.addChild(e)}Animation.triangleGroup2=new Group;for(var b=0;b<3;b++)for(var c=b,d=0;c<3;c++,d++){var f=new Path.Triangle(new Point(320.5+b*20+d*40,133.5-b*35),new Point(360.5+b*20+d*40,133.5-b*35),new Point(340.5+b*20+d*40,168.5-b*35));f.strokeColor="black",f.fillColor=animationTriangleColor2,Animation.triangleGroup2.addChild(f)}for(var b=0;b<4;b++)Animation.triangleGroup.children[b].position.y-=170;for(var c=0;c<3;c++)Animation.triangleGroup2.children[c].position.y-=170;for(var b=0;b<3;b++)Animation.triangleGroup.children[b+4].position.y-=135;for(var c=0;c<2;c++)Animation.triangleGroup2.children[c+3].position.y-=135;for(var b=0;b<2;b++)Animation.triangleGroup.children[b+7].position.y-=100;for(var c=0;c<1;c++)Animation.triangleGroup2.children[c+5].position.y-=100;Animation.triangleGroup.children[9].position.y-=65;for(var b=0;b<4;b++){var g=Animation.triangleGroup.children[b].position.x,h=Animation.triangleGroup.children[b].position.y+170;Animation.triangleGroup.children[b].animate({style:{position:new Point(g,h)},duration:1e3,delay:2e3+1e3*b,animationType:"easeOutBounce"})}for(var c=0;c<3;c++){var g=Animation.triangleGroup2.children[c].position.x,h=Animation.triangleGroup2.children[c].position.y+170;Animation.triangleGroup2.children[c].animate({style:{position:new Point(g,h)},duration:1e3,delay:7e3+1e3*c,animationType:"easeOutBounce"})}for(var b=0;b<3;b++){var g=Animation.triangleGroup.children[4+b].position.x,h=Animation.triangleGroup.children[4+b].position.y+135;Animation.triangleGroup.children[4+b].animate({style:{position:new Point(g,h)},duration:1e3,delay:11e3+1e3*b,animationType:"easeOutBounce"})}for(var c=0;c<2;c++){var g=Animation.triangleGroup2.children[3+c].position.x,h=Animation.triangleGroup2.children[3+c].position.y+135;Animation.triangleGroup2.children[3+c].animate({style:{position:new Point(g,h)},duration:1e3,delay:15e3+1e3*c,animationType:"easeOutBounce"})}for(var b=0;b<2;b++){var g=Animation.triangleGroup.children[7+b].position.x,h=Animation.triangleGroup.children[7+b].position.y+100;Animation.triangleGroup.children[7+b].animate({style:{position:new Point(g,h)},duration:1e3,delay:18e3+1e3*b,animationType:"easeOutBounce"})}for(var c=0;c<1;c++){var g=Animation.triangleGroup2.children[5+c].position.x,h=Animation.triangleGroup2.children[5+c].position.y+100;Animation.triangleGroup2.children[5+c].animate({style:{position:new Point(g,h)},duration:1e3,delay:21e3+1e3*c,animationType:"easeOutBounce"})}var g=Animation.triangleGroup.children[9].position.x,h=Animation.triangleGroup.children[9].position.y+65;Animation.triangleGroup.children[9].animate({style:{position:new Point(g,h)},duration:1e3,delay:23e3,animationType:"easeOutBounce",callback:function(){Main.animationFinished()}})}},Interaction={images:[{id:"page",src:"/assets/animations/susleme/susleme_kagit.png"}],getFramework:function(){return"paper"},init:function(a){function c(a,b){this.pointsArr=[];for(var c=0;c<a.length;c++)this.pointsArr[c]=a[c];this.fillColor=b,this.centerPoint=Util.centerOfPoints(this.pointsArr),this.drawShape=function(){var a=new Path;a.moveTo(this.pointsArr[0]);for(var c=1;c<this.pointsArr.length;c++)a.lineTo(this.pointsArr[c]);return a.lineTo(this.pointsArr[0]),a.closed=!0,a.strokeColor="black",a.fillColor=b,this.centerPoint=Util.centerOfPoints(this.pointsArr),a},this.shape=this.drawShape(),this.shape.parentObject=this,this.setPos=function(a){var b=a.subtract(this.shape.position);for(var c=0;c<this.pointsArr.length;c++)this.pointsArr[c]=this.pointsArr[c].add(b);this.shape.position=a,this.centerPoint=Util.centerOfPoints(this.pointsArr),this.computeLinesArray()},this.rot=function(a){for(var b=0;b<this.pointsArr.length;b++)this.pointsArr[b]=this.pointsArr[b].getRotatedPoint(a,this.centerPoint);this.shape.rotate(a,this.centerPoint),this.centerPoint=Util.centerOfPoints(this.pointsArr),this.computeLinesArray()},this.computeLinesArray=function(){this.linesArr=[];for(var a=0;a<this.pointsArr.length;a++){var b=this.pointsArr[a],c=this.pointsArr[(a+1)%this.pointsArr.length],d=Util.findAngle(b.x,b.y,c.x,c.y);while(d>Math.PI)d-=Math.PI;this.linesArr.push({p1:b,p2:c,angle:d})}},this.computeLinesArray(),this.trySnapTo=function(a){console.log(this.centerPoint.getDistance(a.centerPoint,!0));if(this.centerPoint.getDistance(a.centerPoint,!0)>7200)return;for(var b=0;b<this.linesArr.length;b++)for(var c=0;c<a.linesArr.length;c++){var d=this.linesArr[b],e=a.linesArr[c];if(Math.abs(d.angle-e.angle)<.01||Math.abs(d.angle-e.angle)>Math.PI-.01)d.p1.getDistance(e.p1,!0)<100?d.p2.getDistance(e.p2,!0)<100&&!a.shape.hitTest(this.centerPoint.add(e.p1.subtract(d.p1)))&&!this.shape.hitTest(a.centerPoint.add(e.p1.subtract(d.p1)))&&this.setPos(this.shape.position.add(e.p1.subtract(d.p1))):d.p1.getDistance(e.p2,!0)<100&&d.p2.getDistance(e.p1,!0)<100&&!a.shape.hitTest(this.centerPoint.add(e.p2.subtract(d.p1)))&&!this.shape.hitTest(a.centerPoint.add(e.p2.subtract(d.p1)))&&this.setPos(this.shape.position.add(e.p2.subtract(d.p1)))}}}var b=new Raster("page");b.position=new Point(396,140),Interaction.container=a,Main.setObjective("Yandaki yüzeyi verilen düzgün çokgensel bölgeleri kullanarak ve gerektiğinde şekli 30° döndürerek  döşeyiniz."),Interaction.paper={width:$(a).width(),height:$(a).height()},$(Interaction.container).append('<button id ="rotateBtn" class="rotate_button" onclick="Interaction.rotateSelectedItem()"></button>'),$("#rotateBtn").css("position","absolute").css("top","260px").css("left","10px"),$(Interaction.container).append('<button id ="newPageBtn" class="newpage_button" onclick="Interaction.getNewPage()"></button>'),$("#newPageBtn").css("position","absolute").css("top","260px").css("left","100px"),Interaction.clonesObjectArr=[];var d=[];d[0]=new Point(50.5,50.5),d[1]=new Point(90.5,50.5),d[2]=new Point(70.5,50.5-Math.floor(Math.sqrt(3)*20+.5)),Interaction.triangle=new c(d,interactionTriangleColor),Interaction.triangle.shape.class="draggable",Interaction.triangle.setPos(new Point(54,50));var e=[];e[0]=new Point(50.5,50.5),e[1]=new Point(90.5,50.5),e[2]=new Point(70.5,50.5-Math.floor(Math.sqrt(3)*20+.5)),Interaction.triangle2=new c(e,interactionTriangleColor2),Interaction.triangle2.shape.class="draggable",Interaction.triangle2.setPos(new Point(144,50));var f=[];f[0]=new Point(50,60),f[1]=new Point(70,60-Math.floor(Math.sqrt(3)*20+.5)),f[2]=new Point(110,60-Math.floor(Math.sqrt(3)*20+.5)),f[3]=new Point(130,60),f[4]=new Point(110,60+Math.floor(Math.sqrt(3)*20+.5)),f[5]=new Point(70,60+Math.floor(Math.sqrt(3)*20+.5)),Interaction.hexagon=new c(f,interactionHexagonColor),Interaction.hexagon.shape.class="draggable",Interaction.hexagon.setPos(new Point(54,190.5));var g=[];g[0]=new Point(50,60),g[1]=new Point(70,60-Math.floor(Math.sqrt(3)*20+.5)),g[2]=new Point(110,60-Math.floor(Math.sqrt(3)*20+.5)),g[3]=new Point(130,60),g[4]=new Point(110,60+Math.floor(Math.sqrt(3)*20+.5)),g[5]=new Point(70,60+Math.floor(Math.sqrt(3)*20+.5)),Interaction.hexagon2=new c(g,interactionHexagonColor2),Interaction.hexagon2.shape.class="draggable",Interaction.hexagon2.setPos(new Point(144,190.5));var h=[];h[0]=new Point(50.5,50.5),h[1]=new Point(50.5,90.5),h[2]=new Point(90.5,90.5),h[3]=new Point(90.5,50.5),Interaction.square=new c(h,interactionSquareColor),Interaction.square.shape.class="draggable",Interaction.square.setPos(new Point(54.5,110.5));var i=[];i[0]=new Point(50.5,50.5),i[1]=new Point(50.5,90.5),i[2]=new Point(90.5,90.5),i[3]=new Point(90.5,50.5),Interaction.square2=new c(i,interactionSquareColor2),Interaction.square2.shape.class="draggable",Interaction.square2.setPos(new Point(144.5,110.5)),Interaction.dropArea=new Path,Interaction.dropArea.moveTo(214.5,256.5),Interaction.dropArea.lineTo(570.5,256.5),Interaction.dropArea.lineTo(570.5,4.5),Interaction.dropArea.lineTo(214.5,4.5),Interaction.dropArea.lineTo(214.5,256.5),Interaction.dropArea.closed=!0,Interaction.dropArea.strokeColor="grey",Interaction.dropArea.fillColor="white",Interaction.dropArea.class="dropArea",Interaction.dropArea.opacity=0,Interaction.droppedArr=[];var j=new Tool;j.onMouseDown=function(a){a.item?(Interaction.setStatus(""),a.item.class=="draggable"?(this.item=(new c(a.item.parentObject.pointsArr,a.item.parentObject.fillColor)).shape,this.item.class="clone",this.drag=!0,this.totalDelta=new Point(0,0),this.firstPosition=this.item.position):a.item.class=="clone"?(this.item=(new c(a.item.parentObject.pointsArr,a.item.parentObject.fillColor)).shape,this.item.class="clone",this.drag=!0,this.totalDelta=new Point(0,0),this.firstPosition=this.item.position,Interaction.clonesObjectArr.splice(Interaction.clonesObjectArr.indexOf(a.item),1),a.item.remove()):Interaction.selectedItem&&(Interaction.selectedItem.fullySelected=!1,Interaction.selectedItem=null)):Interaction.selectedItem&&(Interaction.selectedItem.fullySelected=!1,Interaction.selectedItem=null)},j.onMouseDrag=function(a){if(this.drag===!0){var b=new Point(this.firstPosition.add(this.totalDelta).add(a.delta));this.item.parentObject.setPos(b),this.totalDelta=this.totalDelta.add(a.delta);for(var c=0;c<Interaction.clonesObjectArr.length;c++)this.item.parentObject.trySnapTo(Interaction.clonesObjectArr[c].parentObject)}},j.onMouseUp=function(a){if(a.item){var b=0;for(var c=0;c<a.item.parentObject.pointsArr.length;c++)console.log(a.item.parentObject.pointsArr[c]),Interaction.dropArea.hitTest(a.item.parentObject.pointsArr[c])&&(b+=1);b==a.item.parentObject.pointsArr.length?(Interaction.selectedItem&&(Interaction.selectedItem.fullySelected=!1,Interaction.selectedItem=null),this.item.fullySelected=!0,Interaction.selectedItem=this.item,Interaction.clonesObjectArr.push(a.item)):this.item.remove(),this.drag=!1,this.item=null}},j.activate(),Interaction.selectedItem=null,Interaction.appendStatus({left:"240px",top:"275px",width:"300px",height:"20px",fontWeight:"normal",color:"red",textAlign:"center"}),Interaction.prepareNextQuestion()},nextQuestion:function(a){},preCheck:function(){},isAnswerCorrect:function(a){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){},rotateSelectedItem:function(){Interaction.selectedItem===null?Interaction.setStatus("Lütfen döndürmek için bir şekil seçiniz."):(Interaction.selectedItem.parentObject.rot(30),Interaction.setStatus(""))},getNewPage:function(){Interaction.selectedItem=null;for(var a=0;a<Interaction.clonesObjectArr.length;a++)Interaction.clonesObjectArr[a].remove();Interaction.clonesObjectArr=[]}};