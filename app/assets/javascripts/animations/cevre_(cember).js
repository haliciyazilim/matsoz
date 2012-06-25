
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
	'cursor' : 'move'
};
var rulerTextStyle = {
	'cursor' : 'move'
};
var rulerLineStyle = {
	'cursor' : 'move'
};
/*Styles*/

var Interaction = function(){}; Interaction();
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çemberin yarıçapını cetvel yardımıyla ölçünüz ve çevresini hesaplayınız. Bulduğunuz sonucu aşağıdaki kutucuğa yazınız ve “Kontrol” düğmesine basınız. <span style="font-weight:bold;">(π = 3 alınız.)</span>');
	Interaction.container = container;
	Interaction.container.innerHTML = '<div id="T" style="padding-top:5px;"></div><div id="B"></div>';
	Interaction.paper = new Raphael( $('div#T',Interaction.container).get(0) ,$('div#T',Interaction.container).width(),$(Interaction.container).height()*0.6);
	$('div#B',Interaction.container).html('<div style="text-align:center;">Çevre&nbsp;=&nbsp;<input type="text" style="width:35px;height:30px;font-size:16px;font-weight:bold;text-align:center;" id="input" maxlength="3" />&nbsp;br²</div><div style="text-align:right;"><span id="status"></span>&emsp;<input type="button" id="control" class="control_button" value="Kontrol" onclick="Interaction.checkAnswer()" /></div>');
	Interaction.control = $('#control',Interaction.container).get(0);
	Interaction.input = $('#input',Interaction.container).get(0);
	Interaction.drawRuler();
	Interaction.nextQuestion();
}
Interaction.generateCircle = function(){
	var x,y,r;
	x = Interaction.paper.width*0.4;
	y = Interaction.paper.height*0.5;
	
	do
		r = Math.floor(Math.min(x,y) * (Math.random()*0.7+0.3) /Interaction.br) * Interaction.br ;
	while(Interaction.r == r)
	Interaction.circleSet = Interaction.paper.set();
	Interaction.circleSet.push(Interaction.paper.circle(x,y,1).attr(edgeStyle).toBack());
	Interaction.circleSet.push(Interaction.paper.circle(x,y,r+1).attr(edgeStyle).toBack());
	Interaction.circleSet.push(Interaction.paper.line(x,y,x+r,y).attr(edgeStyle).toBack());
	Interaction.circleSet.push(Interaction.paper.text(x-7,y+7,"O").attr(textStyle).toBack());
	Interaction.circleSet.push(Interaction.paper.text(x+r*0.4,y+7,"r").attr(textStyle).toBack());
	Interaction.r = r;
	Interaction.input.onkeyup = function(e){
		console.log(e.keyCode)
		if(e.keyCode == 13)
			Interaction.checkAnswer();		
	}
	
}
Interaction.nextQuestion = function(){
	if(Interaction.circleSet)
		Interaction.circleSet.remove();
	Interaction.control.onclick = Interaction.checkAnswer;
	Interaction.control.value = 'Kontrol';
	Interaction.input.value = '';
	Interaction.setStatus('');
	Interaction.trial = 0;
	Interaction.preventDrag = false;
	
	Interaction.generateCircle();
	if(Interaction.odx){
		var callback = function(){
			Interaction.preventDrag = false;
		}
		var anim = Raphael.animation({transform:'t'+(-Interaction.odx)+' '+(-Interaction.ody)+' ...'},200);
		for(var i=0; i<Interaction.rulerSet.length ;i++)
			Interaction.rulerSet[i].animateWith(Interaction.rulerSet[0],anim,anim);
		setTimeout(callback,200);
	}
}
Interaction.checkAnswer = function(){
	var answer = Interaction.input.value;
	var rightAnswer = 2 * Interaction.r * 3 / Interaction.br;
	
	if(answer == rightAnswer){
		Interaction.setStatus('Tebrikler!',true);
		Interaction.control.value = 'Sonraki';
		Interaction.control.onclick = Interaction.nextQuestion;
		Interaction.input.onkeyup = Interaction.nextQuestion;
	}
	else if(Interaction.trial == 0){
		if(answer == '' || isNaN(answer))
			Interaction.setStatus('Lütfen bir sayı giriniz',false);
		else
			Interaction.setStatus('Yanlış cevap, tekrar deneyiniz',false);
		Interaction.trial++;
	}
	else{
		Interaction.setStatus('Yanlış cevap. Doğru cevap '+rightAnswer+' olacaktı.',false);
		Interaction.control.onclick = Interaction.nextQuestion;
		Interaction.input.onkeyup = Interaction.nextQuestion;
		Interaction.input.value = rightAnswer;
	}
}
Interaction.setStatus = function(str,cls){
	$('#status').html(str);
	if(cls === true)
		$('#status').get(0).className = 'status_true';
	else if(cls === false)
		$('#status').get(0).className = 'status_false';
	else
		$('#status').get(0).className = 'status';
}
Interaction.drawRuler = function(){
	var x,y,w,h,b,st;
	Interaction.rulerSet = Interaction.paper.set();
	x = Interaction.paper.width*0.7;
	y = Interaction.paper.height*0.2;
	w = Interaction.paper.width*0.2;
	Interaction.br = Math.floor(w*0.1);
	h = Interaction.paper.height*0.2;
	Interaction.rulerSet.push(Interaction.paper.rect(x,y,w,h).attr(rulerStyle).data({'x':x,'y':y,'w':w,'h':h}));
	var _y1 = y+h*0.6;
	var _yt = y+h*0.4;
	var _y2 = y+h; 
	for(var i=0; i<10; i++){
		var _x = x+Interaction.br*(0.5+i);
		Interaction.rulerSet.push(Interaction.paper.line(_x,_y1,_x,_y2).attr(rulerLineStyle).attr({'x':_x,'y':_y1}));
		Interaction.rulerSet.push(Interaction.paper.text(_x,_yt,i).attr(rulerTextStyle).attr({'x':_x,'y':_yt}));
	}
	var start = function () {
		if(Interaction.preventDrag)
			return;
        this.ox  = this.attr('x');
        this.oy  = this.attr('y');
		this.odx = 0;
 		this.ody = 0;
		this._x  = Interaction.rulerSet[0].data('x');
		this._xw = Interaction.rulerSet[0].data('x') + Interaction.rulerSet[0].data('w');
		this._y  = Interaction.rulerSet[0].data('y');
		this._yh = Interaction.rulerSet[0].data('y') + Interaction.rulerSet[0].data('h');
	},
    move = function (dx,dy) {
		if(Interaction.preventDrag)
			return;
		if(this._x + dx <= 0 || this._xw + dx  >= Interaction.paper.width)
			dx=this.odx;
		if(this._y + dy <= 0 || this._yh + dy  >= Interaction.paper.height)
			dy=this.ody;
		for(var i=0; i<Interaction.rulerSet.length ;i++){
			Interaction.rulerSet[i].transform('T'+(dx-this.odx )+','+(dy-this.ody)+' ...');
		}
		this.odx = dx;
		this.ody = dy;
    },
    up = function () {
		if(Interaction.preventDrag)
			return;
		Interaction.odx = this.odx;
		Interaction.ody = this.ody;
		Interaction.preventDrag = true;
		
		
    };
	for(var i=0; i<Interaction.rulerSet.length ; i++){
		if(Interaction.rulerSet[i]=='undefined' || Interaction.rulerSet[i]==null){
			continue;
		}
		Interaction.rulerSet[i].drag(move,start,up);
	}
}