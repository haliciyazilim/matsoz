// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {'stroke-width':'2px'};
var rectangularShapeStyle = {'shape-rendering':'crispEdges'}
var angleStyle = {'fill':'#DDD'};
/*Styles*/

var Interaction =function(){};Interaction();
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki çokgenin çevre uzunluğunu bulunuz.');
	Interaction.container = container;
	$(Interaction.container).html('<div id="T"></div><div id="B"></div>');
	$(Interaction.container).append('<style>div#L,div#R{float:left;}</style>');
	$(Interaction.container).append('<style>div#T{height:70%;text-align:center;padding-top:20px;}</style>');
	$(Interaction.container).append('<style>div#L{width:60%;height:100%;text-align:center;}</style>');
	$(Interaction.container).append('<style>div#R{width:40%;height:100%;}</style>');
	//$(Interaction.container).append('<style>div#R > div#B input[type="button"]{height:30px;font-weight:bold;border-radius:20px;border:1px solid #000;cursor:pointer;background-color:red;color:white;}</style>');
	Interaction.T = $('div#T',Interaction.container).get(0);
	Interaction.paper = new Raphael(Interaction.T,$(Interaction.T).width()*0.6,$(Interaction.T).height()*0.9);
	//console.log(Interaction.paper);
	Interaction.input = document.createElement('input');
	Interaction.input.className = 'number_input_field';
	Interaction.input.setAttribute('type','text');
	Interaction.input.setAttribute('maxlength','3');
	$('div#B',Interaction.container).html('<div id="L"></div><div id="R"></div>');
	$('div#B > div#L',Interaction.container).append('Ç =&nbsp;');
	$('div#B > div#L',Interaction.container).append(Interaction.input);
	$('div#B > div#L',Interaction.container).append('&nbsp;<span id="input_measure"></span>');
	Interaction.button = document.createElement('input');
	Interaction.button.setAttribute('type','button');
	Interaction.button.value = 'Kontrol';
	Interaction.button.onclick = TestGenerator.checkAnswer;
	Interaction.button.className = 'control_button';
	$('div#B > div#R',Interaction.container).append(Interaction.button);
	$('div#B > div#R',Interaction.container).append('<div id="status"></div>');
	Interaction.status = $('div#B > div#R > div#status',Interaction.R).get(0);
	Interaction.status.style.fontSize = '12px';
	Interaction.status.style.fontWeight = 'bold';
	Interaction.status.style.paddingTop = '10px';
	TestGenerator(Interaction.paper);
}

Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}

var TestGenerator = function(paper){
	TestGenerator.paper = paper;
	TestGenerator.nextQuestion();
}
TestGenerator.nextQuestion = function(){
	TestGenerator.shape = null;
	TestGenerator.trial = 0;
	TestGenerator.values = null;
	TestGenerator.paper.clear();
	Interaction.setStatus('');
	Interaction.button.value = 'Kontrol';
	Interaction.input.value = '';
	Interaction.input.onkeyup = function(e){
		console.log(e.keyCode)
		if(e.keyCode == 13)
			TestGenerator.checkAnswer();		
	}
	Interaction.input.style.color = '';
	Interaction.button.onclick = TestGenerator.checkAnswer;
	TestGenerator.shape = Math.floor(Math.random()*4);
	
	
	var m = Math.floor(Math.random()*2);
	TestGenerator.setMeasure(m);
	TestGenerator.letters = (Math.random()>0.5 ? ["A","B","C","D","E"]:["X","Y","Z","W","Q"]);
	///*TEST*/TestGenerator.shape = 3;/*TEST*/
	switch(TestGenerator.shape){
		case 0:
			var a = Math.floor(Math.random()*10)+5;
			var cevre = 4*a;
			TestGenerator.values = {a:a,cevre:cevre};
			square(a,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 1:
			var a,b;
			a = Math.floor(Math.random()*10)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*10)+5;
			TestGenerator.values = {a:a,b:b,cevre:2*(a+b)};
			rectangle(a,b,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 2:
			var a,b,_a;
			a = Math.floor(Math.random()*5)+5;
			_a = a;
			while(a==_a)
				_a = Math.floor(Math.random()*5)+5;
			b = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,cevre:2*(a+_a+b)};
			rhomboid(a,_a,b,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 3:
			var a,b,c;
			a = Math.floor(Math.random()*3)+5;
			b = Math.floor(Math.random()*4)+4;
			c = a+b;
			while(a+b <= c || Math.abs(a-b) >= c)
				c = Math.floor(Math.random()*5)+5;
			//console.log(a,b,c);
			TestGenerator.values = {a:a,b:b,c:c,cevre:(a+b+c)};
//			triangle(a,b,H,TestGenerator.getMeasure(),TestGenerator.paper);
			new Triangle(a,b,c,TestGenerator.getMeasure(),TestGenerator.paper).showEdge('a').showEdge('b').showEdge('c');
			break;
		case 4:
			var a,b,_a,c;
			a = Math.floor(Math.random()*5)+5;
			_a = a
			while(_a >= a)
				_a = Math.floor(Math.random()*5)+4;
			b = Math.floor(Math.random()*5)+5;
			c = Math.floor(Math.random()*3+b-1)
			TestGenerator.values = {a:a,b:b,c:c,cevre:(a+_a+b+c)};
			trapezoid(a,_a,b,c,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 5:
			var a,W;
			a = Math.floor(Math.random()*6)+4;
			W = 2*a;
			while(W >= 2*a)
				W = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,cevre:4*a};
			rhombus(a,W,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
	}
}
TestGenerator.setMeasure = function(m){
	TestGenerator.measure = m;
	$('#input_measure').html(TestGenerator.getMeasure());
}
TestGenerator.getMeasure = function(){
	if(TestGenerator.measure == null || TestGenerator.measure == 'undefined')
		throw 'TestGenerator.values.m is not defined';
	if(TestGenerator.measure == 0)
		return 'cm';
	else
		return 'm';
};

TestGenerator.checkAnswer = function(){
	//check the answer
	//console.log("Im here");
	var value = Interaction.input.value;
	var isWrong = false;
	if(isNaN(value)){
		isWrong = true;
		Interaction.setStatus('Lütfen sayı giriniz.');

	}
	else if(value == TestGenerator.values.cevre){
		Interaction.setStatus('Tebrikler !');
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.button.value = 'Sonraki';
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
	}
	else{
		Interaction.setStatus('Tekrar deneyiniz. ');
		isWrong = true;
	}
	if(isWrong && TestGenerator.trial > 0){
		Interaction.input.style.color = 'red';
		Interaction.input.value = TestGenerator.values.cevre;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		Interaction.setStatus('Yanlış. Doğru cevap: '+TestGenerator.values.cevre+' '+TestGenerator.getMeasure());
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.button.value = 'Sonraki';
	}	
	else{
		Interaction.button.onlick = TestGenerator.nextQuestion;
		TestGenerator.trial++;
		TestGenerator.trial++;
	}
}


function square(a,measure,paper){
	var x,y,w;
	w = Math.min(paper.width,paper.height) * (3 / 5);
	x = (paper.width - w) * 0.5;
	y = (paper.height - w) * 0.5;	
	paper.rect(x,y,w,w).attr(edgeStyle).attr(rectangularShapeStyle);
	paper.text(x+(w*0.5),y+w*1.1,""+a+" "+measure).attr(textStyle);
	paper.text(x+w+25,y+(w*0.5),""+a+" "+measure).attr(textStyle);
	//letters
	paper.text(x-10,y+w+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+w+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x-10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	
}

function rectangle(a,b,measure,paper){
	var x,y,w,h,_t;
	var length = Math.min(paper.width,paper.height);
	if(a > b){
		_t = length * (3 / 5);
		w = _t;
		h = _t * (b / a);
	}
	else{
		_t = length * (3 / 5);
		w = _t * (a / b);
		h = _t;	
	}
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.5;
	//console.log([x,y,w,h,_t]);
	paper.rect(x,y,w,h).attr(edgeStyle).attr(rectangularShapeStyle);
	paper.text(x+(w*0.5),y+10+h,""+a+" "+measure).attr(textStyle);
	paper.text(x+25+w,y+(h*0.5),""+b+" "+measure).attr(textStyle);
	//letters
	paper.text(x-10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x-10,y-10,TestGenerator.letters.shift()).attr(textStyle);
}

function rhomboid(a,b,H,measure,paper){
	var x,y,w,_w,h,_t;
	var length = Math.min(paper.width,paper.height);
	if(2*a+b > H){
		_t = length * (4 / 5);
		w = _t * ((a+b)/(2*a+b));
		_w= _t * a / (2*a+b); 
		h = _t * (H/(2*a+b));	
	}else{
		_t = length * (4 / 5);
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w+_w)) * 0.5;
	y = (paper.height - h) * 0.5;
	paper.rhomboid(x,y,_w,w,h).attr(edgeStyle);
	paper.text(x+(w*0.5),y+10+h,""+(a+b)+" "+measure).attr(textStyle);
	paper.text(x+w+_w*0.5+25,y+(h*0.5),""+H+" "+measure).attr(textStyle);

	paper.text(x-10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+_w+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+_w-10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	//paper.text(x+_w-16,y+h-16,TestGenerator.letters.shift()).attr(textStyle);
}
function rhombus(a,W,measure,paper){
	var x,y,w,h,_t;
	var length = Math.min(paper.width,paper.height)* 3.5 / 5 ;
	H = Math.sqrt(a*a-Math.pow(W*0.5,2));
	if(W > H){
		w = length;
		h = length * H / W;
	}else{
		w = length * W / H;
		h = length;
	}
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.6;
	paper.rhombus(x,y,w,h).attr(edgeStyle);
	paper.text(x+w*0.1,y+h*0.20,""+a+" "+measure).attr(textStyle);
	paper.text(x+w*0.1,y+h*0.80,""+a+" "+measure).attr(textStyle);
	paper.text(x+w*0.9,y+h*0.20,""+a+" "+measure).attr(textStyle);
	paper.text(x+w*0.9,y+h*0.80,""+a+" "+measure).attr(textStyle);
	paper.text(x-10,y+h*0.5,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w*0.5,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+h*0.5,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w*0.5,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
}
function trapezoid(a,_a,b,c,measure,paper){
	var x,y,w,_w,h,H,_t;
	H = Math.sqrt( b*b - Math.pow((a-_a)*0.5,2)  );
	
	var length = Math.min(paper.width,paper.height);
	if(a > H){
		_t = length * (3 / 5);
		w = _t;
		_w= _t * _a / a; 
		h = _t * H / a;	
	}else{
		_t = length * (3 / 5);
		w = _t * a / H;
		_w= _t * _a / H; 
		h = _t;
	}
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.5;
	//console.log([x,y,w,_w,h,_t,H]);
	paper.trapezoid(x,y,w,h,_w).attr(edgeStyle);
	paper.text(x+(w*0.5),y+10+h,""+a+" "+measure).attr(textStyle);
	paper.text(x+15+w,y+(h*0.5),""+c+" "+measure).attr(textStyle);
	paper.text(x-15,y+(h*0.5),""+b+" "+measure).attr(textStyle);
	paper.text(x+(w*0.5),y-15,""+_a+" "+measure).attr(textStyle);
	
	paper.text(x-10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w-(w-_w)*0.5+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+(w-_w)*0.5-10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	
}

function Triangle(i,j,k,measure,paper){
	var _x=10,_y=-20;
	this.i=i,this.j=j,this.k=k;
	this.p1={x:10,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
	this.a1=null,this.a2=null,this.a3=null;
	var a = paper.height;
	var _c = (a-40)/Math.max(i,j,k);
	//console.log(_c);
	this.p1.x = 60;
	this.p1.y = a-20;
	this.p2.x = this.p1.x + this.i*_c;
	this.p2.y = this.p1.y;
	var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
	//console.log('this.i:'+this.i+' this.j:'+this.j+' k:'+k+' a:'+a);
	this.p3.x = this.p1.x + Math.cos(a)*k*_c;
	this.p3.y = this.p1.y - Math.sin(a)*k*_c;
	this.p1.x += _x;
	this.p2.x += _x;
	this.p3.x += _x;
	this.p1.y += _y;
	this.p2.y += _y;
	this.p3.y += _y;
	//console.log(this);
	paper.triangle( this.p1.x,
					this.p1.y,
					this.p2.x,
					this.p2.y,
					this.p3.x,
					this.p3.y ).attr(edgeStyle);
	
	//letters
	paper.text(this.p1.x-10,this.p1.y+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(this.p2.x+10,this.p2.y+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(this.p3.x+10,this.p3.y-10,TestGenerator.letters.shift()).attr(textStyle);
	//paper.text(x+_w-16,y+h-16,TestGenerator.letters.shift()).attr(textStyle);

	this.drawEdgeText = function(p,a,k,L){
		var _x,_y;
		_x = p.x + k * Math.sin(a);
		_y = p.y + k * Math.cos(a);
		this.paper.text(_x,_y,L).attr(textStyle);
	
	}
	this.calculateAngles = function(){
		this.a1 = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
		this.a2 = Math.acos((this.i*this.i + this.j*this.j - this.k*this.k)/(2*this.i*this.j));
		this.a3 = Math.acos((this.k*this.k + this.j*this.j - this.i*this.i)/(2*this.k*this.j));			
		this._a1 = Math.floor(Util.radianToDegree(this.a1));
		this._a2 = Math.round(Util.radianToDegree(this.a2));
		this._a3 = Math.floor(Util.radianToDegree(this.a3));
	}
	this.drawAngle = function(p1,p2,p3,A,_A){
		function findAPointOn(p1,p2,k){
			var x,y,a;
			a = Util.findAngle(p1.x,p1.y,p2.x,p2.y);
			x = p1.x + Math.cos(a)*k ;
			y = p1.y - Math.sin(a)*k ;
			return {x:x,y:y}
		}
		var x1,y1,x2,y2,r,k;
		k = 30;
		
		var _p1,_p2;
		_p1 = findAPointOn(p1,p2,k);
		x1=_p1.x; y1=_p1.y;
		_p2 = findAPointOn(p1,p3,k);
		x2=_p2.x; y2=_p2.y;
		
		var fa = A > Math.PI ?1 : 0;
		var fs = A > 0 ? 0: 1;
		var _a = Util.findAngle(p1.x,p1.y,p2.x,p2.y);
		var _b = Util.findAngle(p1.x,p1.y,p3.x,p3.y);
		var _t = Math.abs(_a-_b)*0.5 + (Math.abs(_a) > Math.abs(_b) ? _b : _a);
		
		if(_A==90){
			var x,y;
			_p1 = findAPointOn(p1,p2,k/2);
			x1=_p1.x; y1=_p1.y;
			_p2 = findAPointOn(p1,p3,k/2);
			x2=_p2.x; y2=_p2.y;
			
			x = p1.x + Math.sqrt(2) * k/2 * Math.cos(_t);
			y = p1.y - Math.sqrt(2) * k/2 * Math.sin(_t);
			this.paper.line(x1,y1,x,y).attr(edgeStyle);
			this.paper.line(x2,y2,x,y).attr(edgeStyle);
			this.paper.circle((p1.x+x)*0.5,(p1.y+y)*0.5,1).attr('fill','#CCC');
			k = k/1.5;
		}
		else{
			r = Util.findDistance(p1.x, p1.y, x1, y1);
			this.paper.path('M'+p1.x+','+p1.y+' L'+x1+','+y1+' A'+r+','+r +
				   ' 0 '+fa+','+fs+' '+x2+','+y2+'  z').attr(angleStyle);
		}
		var _x,_y;//for the text
		_x = p1.x + 1.6 * k * Math.cos(_t);
		_y = p1.y - 1.6 * k * Math.sin(_t);
		this.paper.text(_x,_y,""+_A+"°").attr(textStyle);

		
	}
	this.showAngle = function(angle){
		switch(angle){
			case 'A':
				this.drawAngle(this.p1,this.p2,this.p3,this.a1,this._a1);
				break;
			case 'B':
				this.drawAngle(this.p2,this.p3,this.p1,this.a2,this._a2);
				break;
			case 'C':
				this.drawAngle(this.p3,this.p1,this.p2,this.a3,this._a3);
				break;
			default:
				throw 'invalid argument. valid arguments: [ A , B , C ]';
		}
	}
	
	this.showEdge = function(edge){
		var k = 10;
		switch(edge){
			case 'a':
				var a = Util.findAngle(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
				this.drawEdgeText({x:(this.p1.x+this.p2.x)*0.5,y:(this.p1.y+this.p2.y)*0.5},a,k,this.i+" "+measure);
				break;
			case 'b':
				var a = Util.findAngle(this.p2.x,this.p2.y,this.p3.x,this.p3.y);
				this.drawEdgeText({x:(this.p2.x+this.p3.x)*0.5+10,y:(this.p2.y+this.p3.y)*0.5},a,k,this.j+" "+measure);
				break;
			case 'c':
				var a = Util.findAngle(this.p3.x,this.p3.y,this.p1.x,this.p1.y);
				this.drawEdgeText({x:(this.p3.x+this.p1.x)*0.5-10,y:(this.p3.y+this.p1.y)*0.5},a,k,this.k+" "+measure);
				break;
			default:
				throw 'invalid argument. valid arguments: [ a , b , c ]';
		}
		return this;
	}
	this.calculateAngles();
	this.paper = paper;
}
