function animationInit(){center_x=canvasWidth/2,center_y=canvasHeight/2,x2=canvasWidth/2+100,y2=canvasHeight/2,x3=canvasWidth/2+100,y3=canvasHeight/2,startAngle=0,endAngle=Math.PI/2,radius=100,mainCircle=Circle.create(center_x,center_y,radius),mainCircle.strokeStyle="#AAA5A5",cemberYay=Arc.create(center_x,center_y,radius,0,Math.PI/2,!0),tip2=Circle.create(x2,y2,7),tip2.fillStyle="red",tip2.setMovable(!0),tip1=Circle.create(center_x,center_y-radius,7),tip1.fillStyle="blue",tip1.setMovable(!0),tip1.onMove=function(a,b){new_x=10+a,new_y=10+b,endAngle=Math.atan((new_y-center_y)/(new_x-center_x)),new_x>=center_x&&new_y<center_y?endAngle=0-endAngle:new_x<center_x&&new_y<=center_y?endAngle=Math.PI-endAngle:new_x<=center_x&&new_y>center_y?(endAngle=Math.PI-endAngle,new_x==center_x&&(endAngle=3*Math.PI/2)):new_x>center_x&&new_y>=center_y&&(endAngle=2*Math.PI-endAngle),tip1.setCenter(center_x+100*Math.cos(endAngle),center_y-100*Math.sin(endAngle)),cemberYay.setDirection(!0),cemberYay.setStartAngle(startAngle),cemberYay.setEndAngle(endAngle),tip2.setMovable(!0)},tip2.onMove=function(a,b){new_x=10+a,new_y=10+b,startAngle=Math.atan((new_y-center_y)/(new_x-center_x)),new_x>=center_x&&new_y<center_y?startAngle=0-startAngle:new_x<center_x&&new_y<=center_y?startAngle=Math.PI-startAngle:new_x<=center_x&&new_y>center_y?(startAngle=Math.PI-startAngle,new_x==center_x&&(startAngle=3*Math.PI/2)):new_x>center_x&&new_y>=center_y&&(startAngle=2*Math.PI-startAngle),tip2.setCenter(center_x+100*Math.cos(startAngle),center_y-100*Math.sin(startAngle)),cemberYay.setDirection(!1),cemberYay.setStartAngle(endAngle),cemberYay.setEndAngle(startAngle)},scene.addDrawable(mainCircle),scene.addDrawable(cemberYay),scene.addDrawable(tip1),scene.addDrawable(tip2)};