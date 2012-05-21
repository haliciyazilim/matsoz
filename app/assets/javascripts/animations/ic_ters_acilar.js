function animationInit(){
	var clickCount=0;
	angle=2*Math.PI*53/360;
	center_x=canvasWidth/2;
	center_y=canvasHeight/2;
	
	labela=Label.create(10,10,"Aşağıdaki şekilde bulunan iç ters açıları işaretleyiniz.");
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

	arc_a=Sector.create(intersectionTop_x, intersectionTop_y, 20,0,angle);
	arc_b=Sector.create(intersectionTop_x, intersectionTop_y, 15,angle,Math.PI);
	arc_c=Sector.create(intersectionTop_x, intersectionTop_y, 19,Math.PI,Math.PI+angle);
	arc_d=Sector.create(intersectionTop_x, intersectionTop_y, 16,Math.PI+angle,2*Math.PI);


	arc_e=Sector.create(intersectionBottom_x, intersectionBottom_y, 20,0,angle);
	arc_f=Sector.create(intersectionBottom_x, intersectionBottom_y, 16,angle,Math.PI);
	arc_g=Sector.create(intersectionBottom_x, intersectionBottom_y, 22,Math.PI,Math.PI+angle);
	arc_h=Sector.create(intersectionBottom_x, intersectionBottom_y, 17,Math.PI+angle,2*Math.PI);
	
	arc_a.regionNumber = 0;
	arc_b.regionNumber = 1;
	arc_c.regionNumber = 2;
	arc_d.regionNumber = 3;
	
	arc_e.regionNumber = 0;
	arc_f.regionNumber = 1;
	arc_g.regionNumber = 2;
	arc_h.regionNumber = 3;
	
	var arcs=new Array(arc_a,arc_b,arc_c,arc_d,arc_e,arc_f,arc_g,arc_h);
	var colors=new Array('#00bfff','#ffa500','#7fff00','#b22222');
 	
	var anglesFound = 0;

	var previousSelection = null;
	
	for (index in arcs) {
		var arc = arcs[index];
		
		arc.onMouseDown = function(x,y) {
			if (this.contains(x,y) && !this.finalized) {
				if (!previousSelection) {
					this.fillStyle = 'silver';
					
					previousSelection = this;
				} else {
					if (previousSelection == this) {
						this.fillStyle = 'white';
					} else {
						if((this == arcs[4] && previousSelection == arcs[2]) || (this == arcs[2] && previousSelection == arcs[4]) 
							||(this == arcs[3] && previousSelection == arcs[5])||(this == arcs[5] && previousSelection == arcs[3])) {
							
							this.fillStyle = colors[this.regionNumber];
							previousSelection.fillStyle = colors[this.regionNumber];
							
							this.finalized = true;
							previousSelection.finalized = true;
							
							anglesFound++;
							
							if (anglesFound == 2) {
								labelc.fillStyle='green';
								labelc.setText("Tebrikler! Bütün açıları buldunuz!");								
							} else {
								labelc.fillStyle='green';
								labelc.setText("Tebrikler!");
								
								setTimeout((function() {
									labelc.setText('');
									scene.redraw();
								}), 1000);	
							}
						} else {
							labelc.fillStyle='red';
							labelc.setText("Yanlış!");
							this.fillStyle='red';
							previousSelection.fillStyle='red';
							
							thisArc = this;
							previousArc = previousSelection;
							
							setTimeout((function() {
								thisArc.fillStyle = 'white';
								previousArc.fillStyle = 'white';
								labelc.setText('');
								scene.redraw();
							}), 1000);
						}
					}
					previousSelection = null;
				}
				
				scene.redraw();
			}
		}
	}

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
