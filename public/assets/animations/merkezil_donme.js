function animationInit(){center_x=canvasWidth/2,center_y=canvasHeight/2,point=Circle.create(center_x,center_y,4),triangle=Triangle.create(center_x+80,center_y-80,center_x+110,center_y-160,center_x+140,center_y-80),triangle.setRotatable(!0),triangle.setMovable(!0),triReverse=Triangle.create(center_x-80,center_y+80,center_x-110,center_y+160,center_x-140,center_y+80),line1=DashedLine.create(triangle.x1(),triangle.y1(),triReverse.x1(),triReverse.y1()),line2=DashedLine.create(triangle.x2(),triangle.y2(),triReverse.x2(),triReverse.y2()),line3=DashedLine.create(triangle.x3(),triangle.y3(),triReverse.x3(),triReverse.y3()),triangle.onRotate=function(a){triReverse.setRotation(-a),console.debug(triangle.x1()),line1.setCorners(triangle.x1(),triangle.y1(),triReverse.x1(),triReverse.y1())},scene.addDrawable(triangle),scene.addDrawable(triReverse),scene.addDrawable(point),scene.addDrawable(line1)}var DashedLine=Movable.extend({construct:function(a,b,c,d){this.setCorners(a,b,c,d),Movable.construct.call(this,this.x(),this.y(),this.width(),this.height())},draw:function(){context.beginPath(),context.moveTo(this.x1(),this.y1());var a=this.x2()-this.x1(),b=this.y2()-this.y1(),c=Math.floor(Math.sqrt(a*a+b*b)/5),d=a/c,e=b/c,f=0,g=this.x1(),h=this.y1();while(f++<c)g+=d,h+=e,context[f%2==0?"moveTo":"lineTo"](g,h);context[f%2==0?"moveTo":"lineTo"](this.x2(),this.y2()),context.stroke(),context.closePath(),Movable.draw.call(this)},x1:function(){return this.x()+this._x1},y1:function(){return this.y()+this._y1},x2:function(){return this.x()+this._x2},y2:function(){return this.y()+this._y2},setCorners:function(a,b,c,d){this._width=Math.max(Math.abs(a-c),20),this._height=Math.max(Math.abs(b-d),20),this.setCenter((a+c)/2,(b+d)/2),this._x1=a-this.x(),this._y1=b-this.y(),this._x2=c-this.x(),this._y2=d-this.y(),scene.redraw()}});