// JavaScript Document

/*Styles*/
var triangleStyle = {
	'fill': '#f55',
	'stroke-width':'2px'
};
var textStyle = {
	'font-size':'16px',
	'text-color': '#55f'
};
var edgeStyle = {
	'stroke-width':'2px'
};
var angleStyle = {
	'stroke-width': '2px'
};
var rulerStyle = {
	'fill' : '#fff',
};
var rulerTextStyle = {
};
var rulerLineStyle = {
};
/*Styles*/
var Interaction = function(){}; Interaction();
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki cetvel ve pergeli kullanarak seçeceğiniz yarıçap uzunluğuna sahip çemberi aşağıdaki “Çiz” düğmesine tıklayarak çiziniz.');
	Interaction.container = container;
	$(container).css('position','relative')
	Interaction.paper = new Raphael(container,$(container).width(),$(container).height());
	Interaction.button = document.createElement('input');
	Interaction.button.type = "button";
	Interaction.button.value = 'Çiz';
	Interaction.button.onclick = Interaction.drawCircle;
	Interaction.button.className = 'control_button'
	$(Interaction.button).css({
			position:'absolute',
			top:'30px',
			left:Interaction.paper.width * 0.5
		});
	Interaction.container.appendChild(Interaction.button);
	Interaction.radius = document.createElement('div');
	$(Interaction.radius).css({
			position:'absolute',
			top:'30px',
			left:Interaction.paper.width * 0.35,
			width:'30px',
			height:'30px'
		});
	Interaction.container.appendChild(Interaction.radius);
	Interaction.reinit();
}

Interaction.pause = false;
Interaction.reinit = function(){
	Interaction.paper.clear();
	Interaction.r = null;
	Interaction.drawRuler();
	Interaction.compassLayer = Interaction.paper.rect(0,0,20,20).attr({'cursor':'e-resize','fill':'#fff','opacity':0});
	Interaction.drawCompass();
	var start = function () {
		if(Interaction.pause === true)
			return;
        this.ox  = this.attr('x')+10;
		this.mx  = this.data('mx');
	},
    move = function (dx) {
		if(Interaction.pause === true)
			return;
		var _w= - this.mx + (this.ox + dx);
		;
		if(_w > Interaction.br * 3 && _w < Interaction.rulerSet[0].data('w')-Interaction.br){
			Interaction.compassSet.remove()
			Interaction.drawCompass(_w);
		}
    },
    up = function (){
    };
	Interaction.compassLayer.drag(move,start,up);
	
}

Interaction.setRadius = function(r){
	Interaction.r = r;
	Interaction.radius.innerHTML = Util.formatNumber(r/Interaction.br,2);
}

Interaction.drawCircle = function(){
	if(Interaction.pause === true)
		return;
	Interaction.pause = true;
	var x,y,xc,yc,xr,yr,R,_o;
	Interaction.drawCircle.x = Interaction.paper.width*0.65;
	Interaction.drawCircle.y = Interaction.paper.height*0.55;
	R = Interaction.rulerSet[0].data('w')*0.7;;
	if(Interaction.t)
		clearInterval(Interaction.t)
	if(Interaction.drawCircle.compass)
		Interaction.drawCircle.compass.remove();
	Interaction.drawCircle.compass = Interaction.compass(Interaction.drawCircle.x,Interaction.drawCircle.y,R,Math.acos(Interaction.r/(2*R)));
	if(Interaction.drawCircle.textO)
		Interaction.drawCircle.textO.remove();
	if(Interaction.drawCircle.textR)
		Interaction.drawCircle.textR.remove();
	Interaction._o = 20;
	Interaction.t = setInterval(function(){
		Interaction._o+=10;
		if(Interaction._o >= 360){
			clearTimeout(Interaction.t);
			Interaction.drawCircle.compass.remove();
			Interaction.drawCircle.textO = Interaction.paper.text(Interaction.drawCircle.x-10,Interaction.drawCircle.y+10, "O").attr(textStyle);
			Interaction.drawCircle.textR = Interaction.paper
												.text(Interaction.drawCircle.x+Interaction.r*0.5,Interaction.drawCircle.y+10,"r = "+Interaction.radius.innerHTML);
			Interaction._o = 359.9;
			Interaction.pause = false;
		}
		if(Interaction._o >= 180){
			var fa = 1;
			var fs = 1;
		}
		else if(Interaction._o < 180) {
			var fa = 0;
			var fs = 1;
		}
		var _x = Interaction.drawCircle.x + Interaction.r * Math.cos(Util.degreeToRadians(Interaction._o));
		var _y = Interaction.drawCircle.y + Interaction.r * Math.sin(Util.degreeToRadians(Interaction._o));
		if(Interaction.drawCircle.circle)
			Interaction.drawCircle.circle.remove();
		Interaction.drawCircle.circle = Interaction.paper.path(
									'M'+Interaction.drawCircle.x+','+Interaction.drawCircle.y+
									'L'+(Interaction.drawCircle.x+Interaction.r)+','+Interaction.drawCircle.y+
									'A'+Interaction.r+','+Interaction.r +
									' 0 '+fa+','+fs+' '+_x+','+_y);
		for(var i=0;i<Interaction.drawCircle.compass.length; i++)
			Interaction.drawCircle.compass[i].transform('r'+Interaction._o+','+Interaction.drawCircle.x+','+Interaction.drawCircle.y);

	},50 );
}

Interaction.compass = function(x,y,R,_o){
	var st = Interaction.paper.set();
	st.push(Interaction.paper.line(x,y,x+R*Math.cos(_o)*0.2,y+R*Math.sin(_o)*0.2));
	st.push(Interaction.paper.line(x+R*Math.cos(_o)*0.2,y+R*Math.sin(_o)*0.2,x+R*Math.cos(_o),y+R*Math.sin(_o)).attr('stroke-width',10));
	st.push(Interaction.paper.line(x+2*R*Math.cos(_o),y,x+R*Math.cos(_o),y+R*Math.sin(_o)).attr({'stroke-width':10}));
	st.push(Interaction.paper.circle(x+R*Math.cos(_o),y+R*Math.sin(_o),R*0.1).attr('fill','#fff'));
	st.push(Interaction.paper.line(x+R*Math.cos(_o),y+R*(Math.sin(_o)+0.1),x+R*Math.cos(_o),y+R*(Math.sin(_o)+0.2)).attr('stroke-width',10));
	return st;
}
Interaction.drawCompass = function(d){
	var x,y,xc,yc,xr,yr,R,_o;
	if(d==null || d=='undefined')
		d = Interaction.rulerSet[0].data('w')*0.6;
	Interaction.setRadius(d);
	x = Interaction.rulerSet[0].data('x');
	y = Interaction.rulerSet[0].data('y')+Interaction.rulerSet[0].data('h');
	R = Interaction.rulerSet[0].data('w')*0.7;
	_o= Math.acos(d/(2*R));
	Interaction.compassSet = Interaction.compass(x,y,R,_o);
	Interaction.compassLayer.toFront();
	Interaction.compassLayer.attr('x',x+2*R*Math.cos(_o)-11);
	Interaction.compassLayer.attr('y',y)
	Interaction.compassLayer.data({
			 	'x':x+2*R*Math.cos(_o)-20,
				'y':y,
				'mx':x,
				'my':y
			});
}

Interaction.drawRuler = function(){
	var x,y,w,h,b,st;
	Interaction.rulerSet = Interaction.paper.set();
	x = Interaction.paper.width*0.1;
	y = Interaction.paper.height*0.15;
	w = Interaction.paper.width*0.20;
	Interaction.br = Math.floor(w*0.1);
	h = Interaction.paper.height*0.1;
	Interaction.rulerSet.push(Interaction.paper.rect(x-Interaction.br*0.5,y,w,h).attr(rulerStyle).data({'x':x,'y':y,'w':w,'h':h}));
	var _y1 = y+h*0.6;
	var _yt = y+h*0.4;
	var _y2 = y+h; 
	for(var i=0; i<10; i++){
		var _x = x+Interaction.br*(i);
		Interaction.rulerSet.push(Interaction.paper.line(_x,_y1,_x,_y2).attr(rulerLineStyle).attr({'x':_x,'y':_y1}));
		Interaction.rulerSet.push(Interaction.paper.text(_x,_yt,i).attr(rulerTextStyle).attr({'x':_x,'y':_yt}));
	}
}