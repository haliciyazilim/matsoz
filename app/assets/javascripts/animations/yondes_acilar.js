function animationInit(){
	var clickCount=0;
	angle=2*Math.PI*53/360;
	center_x=canvasWidth/2;
	center_y=canvasHeight/2;
	
	labela=Label.create(10,10,"Aşağıdaki şekilde bulunan yöndeş açıları işaretleyiniz.");
	labela.fillStyle='black';
	
	labelc=Label.create(center_x-110,center_y+150,"");
	labelc.fillStyle='black';
	
	line_k=Line.create(canvasWidth/2-150,canvasHeight/2-60,canvasWidth/2+150,canvasHeight/2-60);
	line_l=Line.create(canvasWidth/2-150,canvasHeight/2+60,canvasWidth/2+150,canvasHeight/2+60);
	line_kesen=Line.create(canvasWidth/2+75,canvasHeight/2-100,canvasWidth/2-75,canvasHeight/2+100);

	retryButton=Rectangle.create(20,center_y+150,100,30);
	retryButton=fillStyle='#C0C0C0';
	retryLabel=Label.create(20,center_y,"Yeniden Dene");
	
	intersectionTop_x=center_x+45;
	intersectionTop_y=center_y-60;
	
	intersectionBottom_x=center_x-45;
	intersectionBottom_y=center_y+60;

	arc_a=Sector.create(intersectionTop_x, intersectionTop_y, 20,0,0-angle);
	arc_b=Sector.create(intersectionTop_x, intersectionTop_y, 15,0-angle,Math.PI);
	arc_c=Sector.create(intersectionTop_x, intersectionTop_y, 19,Math.PI,Math.PI-angle);
	arc_d=Sector.create(intersectionTop_x, intersectionTop_y, 16,Math.PI-angle,2*Math.PI);

	arc_e=Sector.create(intersectionBottom_x, intersectionBottom_y, 20,0,0-angle);
	arc_f=Sector.create(intersectionBottom_x, intersectionBottom_y, 16,0-angle,Math.PI);
	arc_g=Sector.create(intersectionBottom_x, intersectionBottom_y, 22,Math.PI,Math.PI-angle);
	arc_h=Sector.create(intersectionBottom_x, intersectionBottom_y, 17,Math.PI-angle,2*Math.PI);
	
	var arcs=new Array(arc_a,arc_b,arc_c,arc_d,arc_e,arc_f,arc_g,arc_h);
	var indexes=new Array();
	var colors=new Array('#00bfff','#ffa500','#7fff00','#b22222');
	colorsCount=0;
 	
	arc_a.onMouseDown = function(x,y){
		for(i=0; i < arcs.length; i++){
			if(clickCount == 2){
				clickCount=0;
				break;
			}
				
			if( arcs[i].contain(x,y) && arcs[i].regionNumber == (i%4)+1 && arcs[i].isSelectable){
				labelc.setText("");
				if(!arcs[i].isClicked){
					arcs[i].isClicked=true;
					arcs[i].fillStyle='silver';
					clickCount++;
					if(indexes.length == 2){
						lastSelected=indexes.pop();
						arcs[lastSelected].fillStyle='white';
						arcs[lastSelected].isClicked=false;
						indexes.push(i);
					}else{
						indexes.push(i);						
					}
				}else{
					labelc.setText("");
					arcs[i].isClicked=false;
					arcs[i].fillStyle='white';
					loc=indexes.indexOf(i);
					indexes.splice(loc,1);
					
				}
			}
		}
		
		if(indexes.length == 2){
			secondIndex=indexes.pop();
			firstIndex=indexes.pop();
			if( secondIndex % 4 == firstIndex % 4){
				if(secondIndex!=firstIndex){
					if(colorsCount == 4)
						colorsCount=0;
					arcs[secondIndex].fillStyle=colors[colorsCount];
					arcs[secondIndex].isSelectable=false;
					arcs[firstIndex].fillStyle=colors[colorsCount];
					arcs[firstIndex].isSelectable=false;
					labelc.fillStyle='green';
					labelc.setText("Tebrikler!");	
					colorsCount++;				
				}
			}else{	
					labelc.fillStyle='red';
					labelc.setText("Yanlış!");
					arcs[firstIndex].fillStyle='red';
					arcs[secondIndex].fillStyle='red';
					indexes.push(firstIndex);
					indexes.push(secondIndex);
					clickCount++;			
					}		
			}
		scene.redraw();
	}//end of mouse down

	scene.addDrawable(line_k);
	scene.addDrawable(line_l);
	scene.addDrawable(line_kesen);
	
	scene.addDrawable(arc_a);
	scene.addDrawable(arc_b);
	scene.addDrawable(arc_c);
	scene.addDrawable(arc_d);
	
	scene.addDrawable(arc_e);
	scene.addDrawable(arc_f);
	scene.addDrawable(arc_g);
	scene.addDrawable(arc_h);
	
	scene.addDrawable(labela);
	
	scene.addDrawable(labelc);
}
