// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
/*Styles*/

var Interaction =function(){};Interaction();
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki geometrik şekillerin alanlarını bulunuz ve “Kontrol” düğmesine fare ile tıklayarak  ya da “Enter” tuşuna basarak kontrol ediniz.');
	Interaction.container = container;
	Interaction.container.innerHTML = '<div id="L"></div><div id="R"></div>';
	Interaction.L = $('div#L',Interaction.container).get(0);
	Interaction.R = $('div#R',Interaction.container).get(0);
	$(Interaction.container).append('<style>div#L,div#R{float:left;}</style>');
	$(Interaction.container).append('<style>div#L{width:60%;height:100%;text-align:center;}</style>');
	$(Interaction.container).append('<style>div#R{width:40%;height:100%;}</style>');
	$(Interaction.container).append('<style>div#R > div#T{box-sizing:border-box;padding-top:40%;}</style>');
	$(Interaction.container).append('<style>div#R > div#B{box-sizing:border-box;text-align:right;padding-right:25%;padding-top:10%;}</style>');
	//$(Interaction.container).append('<style>div#R > div#B input[type="button"]{height:30px;font-weight:bold;border-radius:20px;border:1px solid #000;cursor:pointer;background-color:red;color:white;}</style>');
	$(Interaction.R).append('<div id="T"></div><div id="B"></div>');
	Interaction.paper = new Raphael(Interaction.L,$(Interaction.L).width()*0.8,$(Interaction.R).height()*0.8);
	//console.log(Interaction.paper);
	Interaction.input = document.createElement('input');
	Interaction.input.className = 'number_input_field';
	Interaction.input.setAttribute('type','text');
	Interaction.input.setAttribute('maxlength','3');
	
	Interaction.input.onkeyup = function(e){
		console.log(e.keyCode)
		if(e.keyCode == 13)
			TestGenerator.checkAnswer();		
	}
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
			var area = a*a;
			TestGenerator.values = {a:a,area:area};
			square(a,TestGenerator.getMeasure(),TestGenerator.paper);
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
			H = Math.floor(Math.random()*5)+5;
			TestGenerator.values = {a:a,b:b,H:H,area:(a+b)*H*0.5};
			triangle(a,b,H,TestGenerator.getMeasure(),TestGenerator.paper);
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
	console.log("Im here");
	var value = Interaction.input.value;
	var isWrong = false;
	if(isNaN(value)){
		isWrong = true;
		Interaction.setStatus('Lütfen sayı giriniz.');

	}
	else if(value == TestGenerator.values.area){
		Interaction.setStatus('Tebrikler !');
		Interaction.button.onclick = TestGenerator.nextQuestion;
		Interaction.button.value = 'Sonraki';
	}
	else{
		Interaction.setStatus('Tekrar deneyiniz. ');
		isWrong = true;
		
	}

	if(isWrong && TestGenerator.trial > 0){
		Interaction.input.style.color = 'red';
		Interaction.input.value = TestGenerator.values.area;
		Interaction.setStatus('Yanlış. Doğru cevap: '+TestGenerator.values.area+' '+TestGenerator.getMeasure());
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
	paper.rect(x,y,w,w).attr(edgeStyle);
	paper.text(x+(w*0.5),y+w*1.1,""+a+" "+measure).attr(textStyle);
	paper.text(x+w*1.15,y+(w*0.5),""+a+" "+measure).attr(textStyle);
	//letters
	paper.text(x-10,y+w+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+w+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x-10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	
}

function rectangle(a,b,measure,paper){
	var x,y,w,h,_t;
	if(a > b){
		_t = paper.width * (3 / 5);
		w = _t;
		h = _t * (b / a);
	}
	else{
		_t = paper.height * (3 / 5);
		w = _t * (a / b);
		h = _t;	
	}
	x = (paper.width - w) * 0.5;
	y = (paper.height - h) * 0.5;
	console.log([x,y,w,h,_t]);
	paper.rect(x,y,w,h).attr(edgeStyle);
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
	if(2*a+b > H){
		_t = paper.width * (4 / 5);
		w = _t * ((a+b)/(2*a+b));
		_w= _t * a / (2*a+b); 
		h = _t * (H/(2*a+b));	
	}else{
		_t = paper.height * (4 / 5);
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w+_w)) * 0.5;
	y = (paper.height - h) * 0.5;
	console.log([a,b,H]);
	console.log([_w,w,h]);
	paper.rhomboid(x,y,_w,w,h).attr(edgeStyle);
	paper.line(x+_w,y,x+_w,y+h).attr(edgeStyle);
	paper.text(x+(w*0.5),y+10+h,""+(a+b)+" "+measure).attr(textStyle);
	paper.text(x+25+_w,y+(h*0.5),""+H+" "+measure).attr(textStyle);
	paper.rect(x+_w-10,y+h-10,10,10).attr(edgeStyle);
	paper.circle(x+_w-5,y+h-5,1).attr(edgeStyle);
	//letters
	paper.text(x-10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+_w+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+_w-10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+_w-16,y+h-16,TestGenerator.letters.shift()).attr(textStyle);
}

function triangle(a,b,H,measure,paper){
	var x,y,w,_w,h,_t;
	if(a+b > H){
		_t = paper.width * (4 / 5);
		w = _t;
		_w= _t * a / (a+b); 
		h = _t * (H/(a+b));
	}
	else{
		_t = paper.height * (4 / 5);
		w = _t * ((a+b)/H);
		_w= _t * a / H; 
		h = _t;
	}
	x = (paper.width - (w)) * 0.5;
	y = (paper.height - h) * 0.5;
	console.log([a,b,H]);
	console.log([_w,w,h]);
	paper.triangle(x,y+h,x+w,y+h,x+_w,y).attr(edgeStyle);
	paper.line(x+_w,y,x+_w,y+h).attr(edgeStyle);
	paper.text(x+(w*0.5),y+10+h,""+(a+b)+" "+measure).attr(textStyle);
	paper.text(x+25+_w,y+(h*0.7),""+H+" "+measure).attr(textStyle);
	paper.rect(x+_w-10,y+h-10,10,10).attr(edgeStyle);
	paper.circle(x+_w-5,y+h-5,1).attr(edgeStyle);
	//letters
	paper.text(x-10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+w+10,y+h+10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+_w+10,y-10,TestGenerator.letters.shift()).attr(textStyle);
	paper.text(x+_w-16,y+h-16,TestGenerator.letters.shift()).attr(textStyle);
}

