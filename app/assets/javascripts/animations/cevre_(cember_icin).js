
/*Styles*/
var triangleStyle = {
	'fill': '#f55',
	'stroke-width':'2px'
};
var textStyle = {
	fontSize : 14,
	strokeColor : "#000",
	fillColor : "#000"
};
var edgeStyle = {
	strokeWidth : 2,
	strokeColor : "#000",
	fillColor: '#fff'
};
var angleStyle = {
	'stroke-width': '2px'
};
var rulerStyle = {
	strokeColor:'#000',
	strokeWidth: 2,
	fillColor : '#EED'
	
};
var rulerTextStyle = {
	
	
};
var rulerLineStyle = {
	strokeWidth: 2,
	strokeColor:'#000'
};
/*Styles*/

var Interaction = function(){}; Interaction();
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çemberin yarıçapını cetvel yardımıyla ölçünüz ve çevresini hesaplayınız. Bulduğunuz sonucu aşağıdaki kutucuğa yazınız ve “Kontrol” düğmesine basınız. <span style="font-weight:bold;">(π = 3 alınız.)</span>');
	Interaction.container = container;
	$(Interaction.container).append('<div id="B" style="position:absolute; top:70%; left:0%; width:100%; "></div>');
	//Interaction.paper = new Raphael( $('div#T',Interaction.container).get(0) ,$('div#T',Interaction.container).width(),$(Interaction.container).height()*0.6);
	Interaction.paper = {width:500,height:200}
	$('div#B',Interaction.container).html('<div style="text-align:center;">Çevre&nbsp;=&nbsp;<input type="text" style="width:35px;height:30px;font-size:16px;font-weight:bold;text-align:center;" id="input" maxlength="3" />&nbsp;br²</div><div style="text-align:right;"><span id="status"></span>&emsp;<input type="button" id="control" class="control_button" value="Kontrol" onclick="Interaction.checkAnswer()" /></div>');
	Interaction.control = $('#control',Interaction.container).get(0);
	Interaction.input = $('#input',Interaction.container).get(0);
	Interaction.drawRuler();
	Interaction.nextQuestion();
}
Interaction.generateCircle = function(){
	var x,y,r;
	x = Interaction.paper.width*0.4;
	y = Interaction.paper.height*0.5+10;
	do
		r = Math.floor(Math.min(x,y) * (Math.random()*0.7+0.3) /Interaction.br) * Interaction.br ;
	while(Interaction.r == r)
	Interaction.circleSet = new Group();
	var point = new Path.Circle(new Point(x,y),1);
	point.style = edgeStyle;
	var circle = new Path.Circle(new Point(x,y),r+1);
	circle.style = edgeStyle;
	var line = new Path.Line(new Point(x,y), new Point(x+r,y));
	line.style = edgeStyle;
	var text1 = new PointText(new Point(x-15,y+15));
	text1.content = "O";
	text1.style = textStyle;
	var text2 = new PointText(new Point(x+r*0.5-5,y+15));
	text2.content = "r";
	text2.style = textStyle;
	Interaction.circleSet.addChild(circle);
	Interaction.circleSet.addChild(point);
	Interaction.circleSet.addChild(line);
	Interaction.circleSet.addChild(text1);
	Interaction.circleSet.addChild(text2);
	Interaction.circleSet.insertBelow(Interaction.rulerSet);
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

	var callback = function(){
		Interaction.preventDrag = false;
	}
	var anim = Raphael.animation({transform:'t'+(-Interaction.odx)+' '+(-Interaction.ody)+' ...'},200);
	AnimationManager.translate(
		Interaction.rulerSet,
		new Point(
			Interaction.rulerSet.firstPosition.x - Interaction.rulerSet.position.x,
			Interaction.rulerSet.firstPosition.y - Interaction.rulerSet.position.y
			),
		500
	);
	setTimeout(callback,200);

	Interaction.odx=0;
	Interaction.ody=0;
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
	Interaction.rulerSet = new Group();
	Interaction.rulerSet.name = 'rulerSet';
	x = Interaction.paper.width*0.7;
	y = Interaction.paper.height*0.2;
	w = Interaction.paper.width*0.2;
	Interaction.br = Math.floor(w*0.1);
	h = Interaction.paper.height*0.2;
	var rect = new Path.Rectangle(new Point(x,y), new Size(w,h));
	rect.style = rulerStyle;
	Interaction.rulerSet.addChild(rect);
	var _y1 = y+h*0.6;
	var _yt = y+h*0.4;
	var _y2 = y+h; 
	for(var i=0; i<10; i++){
		var _x = x+Interaction.br*(0.5+i);
		var line = new Path.Line(new Point(_x,_y1), new Point(_x,_y2));
		line.style = rulerLineStyle;
		Interaction.rulerSet.addChild(line);
		var text = new PointText(new Point(_x-4,_yt));
		text.style= rulerTextStyle;
		text.content = i;
		Interaction.rulerSet.addChild(text);
	}
	Interaction.rulerX=-1;Interaction.rulerY=-1;
	var move = function (dx,dy) {
		if(Interaction.preventDrag === true)
			return;
		if(this._x + dx+Interaction.odx <= 0 || this._xw + dx +Interaction.odx >= Interaction.paper.width)
			dx=0;
		if(this._y + dy +Interaction.ody<= 0 || this._yh + dy +Interaction.ody >= Interaction.paper.height)
			dy=0;
		
		Interaction.rulerSet.position = [Interaction.rulerSet.position.x + dx, Interaction.rulerSet.position.y+ dy];

    },
    up = function () {
		if(Interaction.preventDrag === true)
			return;
		Interaction.odx = this.odx;
		Interaction.ody = this.ody;
		
    };
	var drag = new Tool();
	drag.onMouseDown = function(event){
		this.drag = false;
		if(event.item.name == 'rulerSet'){
			this.drag = true;
		}
	}

	drag.onMouseDrag = function(event){
		if(this.drag==true){
			Interaction.rulerSet.move(event.delta.x,event.delta.y);
		}
	}
	drag.onMouseUp  = function(){
		this.drag = false;
	}
	drag.activate();
	Interaction.rulerSet.move = move;
	Interaction.rulerSet.up = up;
	Interaction.rulerSet.firstPosition = new Point(Interaction.rulerSet.position.x,Interaction.rulerSet.position.y);

}