// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {strokeColor:'#000',strokeWidth:2,fillColor:'#ff0',cursor:'move'};
var angleStyle = {'fill':'#DDD'};
/*Styles*/

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.images = [
	{
		id : 'curve',
		src : '/assets/animations/curve_thin.png'
	}
]
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki geometrik şekillerin alanlarını bulunuz ve “Kontrol” düğmesine fare ile tıklayarak  ya da “Enter” tuşuna basarak kontrol ediniz.');
	Interaction.container = container;
	
	$(Interaction.container).append('<div id="L"></div><div id="R"></div>');
	Interaction.L = $('div#L',Interaction.container).get(0);
	Interaction.R = $('div#R',Interaction.container).get(0);
	$(Interaction.container).append('<style>div#L,div#R{float:left;}</style>');
	$(Interaction.container).append('<style>div#L{position:absolute;top:0px;left:0px;width:60%;height:100%;text-align:center;}</style>');
	$(Interaction.container).append('<style>div#R{position:absolute;top:0px;left:60%;width:40%;height:100%;}</style>');
	$(Interaction.container).append('<style>div#R > div#T{box-sizing:border-box;padding-top:40%;}</style>');
	$(Interaction.container).append('<style>div#R > div#B{box-sizing:border-box;text-align:right;padding-right:25%;padding-top:10%;}</style>');
	$(Interaction.R).append('<div id="T"></div><div id="B"></div>');
	Interaction.input = document.createElement('input');
	Interaction.input.className = 'number_input_field';
	Interaction.input.setAttribute('type','text');
	Interaction.input.setAttribute('maxlength','3');
	$('div#T',Interaction.R).append('A =&nbsp;');
	$('div#T',Interaction.R).append(Interaction.input);
	$('div#T',Interaction.R).append('&nbsp;<span id="input_measure"></span>²');
	Interaction.button = document.createElement('input');
	Interaction.button.setAttribute('type','button');
	Interaction.button.value = 'Kontrol';
	Interaction.button.onclick = TestGenerator.checkAnswer;
	Interaction.button.className = 'control_button';
	$('div#B',Interaction.R).append(Interaction.button);
	$('div#B',Interaction.R).append('<div id="status"></div>');
	Interaction.status = $('div#B > div#status',Interaction.R).get(0);
	Interaction.status.style.fontSize = '12px';
	Interaction.status.style.fontWeight = 'bold';
	Interaction.status.style.paddingTop = '10px';
	TestGenerator.nextQuestion();
	
}

Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}

var TestGenerator = function(){}; TestGenerator();

TestGenerator.nextQuestion = function(){
	Interaction.input.onkeyup = function(e){
		//console.log(e.keyCode)
		if(e.keyCode == 13)
			TestGenerator.checkAnswer();		
	}
	TestGenerator.shape = null;
	TestGenerator.trial = 0;
	TestGenerator.values = null;
	project.activeLayer.removeChildren();
	Interaction.setStatus('');
	Interaction.button.value = 'Kontrol';
	Interaction.input.value = '';
	Interaction.input.style.color = '';
	Interaction.button.onclick = TestGenerator.checkAnswer;
	TestGenerator.shape = Math.floor(Math.random()*4);
	TestGenerator.paper = {width:300 , height:300}
	
	var m = Math.floor(Math.random()*2);
	TestGenerator.setMeasure(m);
	TestGenerator.letters = (Math.random()>0.5 ? ["A","B","C","D","E"]:["K","L","M","N","P"]);
	///*TEST*/TestGenerator.shape = 3;/*TEST*/
	switch(TestGenerator.shape){
		case 0:
			var a = Math.floor(Math.random()*10)+5;
			var area = a*a;
			TestGenerator.values = {a:a,area:area};
			new rectangle(a,a,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 1:
			var a,b;
			a = Math.floor(Math.random()*10)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*10)+5;
			TestGenerator.values = {a:a,b:b,area:a*b};
			rectangle(a,b,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 2:
			var a,b,H;
			a = Math.floor(Math.random()*5)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*5)+5;
			H = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,H:H,area:(a+b)*H};
			rhomboid(a,b,H,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
		case 3:
			var a,b,H;
			a = Math.floor(Math.random()*5)+5;
			b = a;
			while(a==b)
				b = Math.floor(Math.random()*5)+5;
			H = 1;
			while(H%2==1)
				H = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,H:H,area:(a+b)*H*0.5};
			triangle(a,b,H,TestGenerator.getMeasure(),TestGenerator.paper);
			break;
	}
	if(Interaction.viewDrawCalled == null || Interaction.viewDrawCalled == 'undefined'){
		//console.log('draw');
		paper.view.draw();
		Interaction.viewDrawCalled = true;
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
	if(value == "" ||isNaN(value)){
		isWrong = true;
		Interaction.setStatus('Lütfen bir sayı giriniz.');
		return;
	}
	else if(value == TestGenerator.values.area){
		Interaction.setStatus('Tebrikler !');
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		Interaction.button.value = 'Sonraki';
	}
	else{
		Interaction.setStatus('Tekrar deneyiniz. ');
		isWrong = true;
	}
	if(isWrong && TestGenerator.trial > 0){
		Interaction.input.style.color = 'red';
		Interaction.input.value = TestGenerator.values.area;
		Interaction.setStatus('Yanlış. Doğru cevap: '+TestGenerator.values.area+' '+TestGenerator.getMeasure() + '²');
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		Interaction.button.value = 'Sonraki';
	}	
	else{
		Interaction.button.onlick = TestGenerator.nextQuestion;
		Interaction.input.onkeyup = TestGenerator.nextQuestion;
		TestGenerator.trial++;
		TestGenerator.trial++;
	}
}
TestGenerator.printVertexLetters = function(p){
	for(var i=0; i<p.length;i++){
		var text = new PointText(p[i]);
		text.content = ""+TestGenerator.letters.shift();
		text.style = textStyle;
		text=null;
	}
}

function rectangle(a,b,measure,paper){
	var x,y,w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a,b) / 20);
	if(a > b){
		w = _t;
		h = _t * (b / a);
	}
	else{
		w = _t * (a / b);
		h = _t;	
	}
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.5;
	console.log([x,y,w,h,_t]);
	var rect = new Path.Rectangle(new Point(x,y),new Size(w,h));
	rect.style = edgeStyle;

	var t1 = new PointText(new Point(x+w*0.5-10,y+h+15));
	t1.content = ""+a+" "+measure;
	var t2 = new PointText(new Point(x+w+5,y+h*0.5));
	t2.content = ""+b+" "+measure;
	
	//letters
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+w+10,y-10),
				new Point(x-10,y-10)
			]
		);
}

function rhomboid(a,b,H,measure,paper){
	var x,y,w,_w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a+b,H) / 20);
	if(2*a+b > H){
		w = _t * ((a+b)/(2*a+b));
		_w= _t * a / (2*a+b); 
		h = _t * (H/(2*a+b));	
	}else{
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w+_w)) * 0.5;
	y = (paper.height - h) * 0.5;


	var rhomboid = new Path.Rhomboid(new Point(x,y), new Size(w,h), _w );
	rhomboid.style = edgeStyle;
	var line = new Path.Line(new Point(x+_w,y), new Point(x+_w,y+h));
	line.style = edgeStyle;
	
	var t1 = new PointText(new Point(x+w*0.5-10,y+h+15));
	t1.content = ""+(a+b)+" "+measure;
	var t2 = new PointText(new Point(x+_w+5,y+h*0.5));
	t2.content = ""+H+" "+measure;
	
	var rect = new Path.Rectangle( new Point(x+_w-10,y+h-10), new Size(10,10) );
	rect.style = edgeStyle;
	var circle = new Path.Circle(new Point(x+_w-5,y+h-5),1);
	circle.style = edgeStyle;
	
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+_w+w+10,y-10),
				new Point(x+_w-10,y-10),
				new Point(x+_w-16,y+h-16)
			]
		);
}

function triangle(a,b,H,measure,paper){
	var x,y,w,_w,h,_t;
	_t = Math.min(paper.width,paper.height) * (Math.max(a+b,H) / 20);
	if(a+b > H){
		w = _t;
		_w= _t * a / (a+b); 
		h = _t * (H/(a+b));
	}
	else{
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w)) * 0.5;
	y = (paper.height - h) * 0.5;
	console.log([a,b,H]);
	console.log([_w,w,h]);
	var triangle = new Path.Triangle( new Point(x,y+h), new Point(x+w,y+h), new Point(x+_w,y) );
	triangle.style = edgeStyle;
	var line = new Path.Line(new Point(x+_w,y), new Point(x+_w,y+h));
	line.style = edgeStyle;
	var t1 = new PointText(new Point(x+w*0.5-10,y+h+45));
	t1.content = ""+(a+b)+" "+measure;
	var t2 = new PointText(new Point(x+_w+5,y+h*0.5));
	t2.content = ""+H+" "+measure;
	var rect = new Path.Rectangle( new Point(x+_w-10,y+h-10), new Size(10,10) );
	rect.style = edgeStyle;
	var circle = new Path.Circle(new Point(x+_w-5,y+h-5),1);
	circle.style = edgeStyle;
	
	//curve for bottom edges
	var curve = new Raster('curve');
	curve.position= new Point(x+w*0.5,y+h+20)
	curve.size = new Size(w,curve.height);
	TestGenerator.printVertexLetters(
			[
				new Point(x-10,y+h+10),
				new Point(x+w+10,y+h+10),
				new Point(x+_w-10,y-10),
				new Point(x+_w,y+h+12)
			]
		);
}

