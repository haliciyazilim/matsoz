// JavaScript Document

Raphael.fn.triangle = function(x1,y1,x2,y2,x3,y3){
	var st = this.set();
	st.push(this.line(x1,y1,x2,y2));
	st.push(this.line(x2,y2,x3,y3));
	st.push(this.line(x3,y3,x1,y1));
	return st;
}
Raphael.fn.line = function(x1,y1,x2,y2){
	return this.path('M'+x1+','+y1+'L'+x2+','+y2);
}


var InteractionStyler = function(){
	InteractionStyler.Init();
}; 
InteractionStyler.texts = new Array();
InteractionStyler.edges = new Array();
InteractionStyler.angles = new Array();
InteractionStyler.texts.attr = function(name,value){
	InteractionStyler.texts.push({name:name,value:value});
}

InteractionStyler.Init = function(){
	InteractionStyler.texts.attr('font-size','20px');
	InteractionStyler.edges.attr('stroke-width','2px');
	InteractionStyler.angles.attr('stroke-width','2px');
	InteractionStyler.angles.attr('fill','#888');
}

InteractionStyler.edges.attr = function(name,value){
	InteractionStyler.edges.push({name:name,value:value});
}
InteractionStyler.angles.attr = function(name,value){
	InteractionStyler.angles.push({name:name,value:value});
}
InteractionStyler.texts.apply = function(e){
	$(InteractionStyler.texts).each(function(){
			e.attr(this.name,this.value);
		});
}

InteractionStyler.edges.apply = function(e){
	$(InteractionStyler.edges).each(function(){
			e.attr(this.name,this.value);
		});
}
InteractionStyler.angles.apply = function(e){
	$(InteractionStyler.angles).each(function(){
			e.attr(this.name,this.value);
		});
}
InteractionStyler();

var TestGenerator = function(container){
	//generate some random numbers to enter a valid state
	TestGenerator.container = container;
	TestGenerator.NextQuestion();
	
}
TestGenerator.Shadow = function(li){
	$(li).addClass('shadow');
}
TestGenerator.RemoveShadow = function(li){
	$(li).removeClass('shadow');

}
TestGenerator.CheckAnswer = function(li){
	if(TestGenerator.stopCheckAnswer==true)
		return;
	if(li.className.indexOf("A") > -1){
		$('.A').removeClass('A_selected');
		$(li).addClass('A_selected');
		$('.E').each(function(){TestGenerator.RemoveShadow(this)});
		TestGenerator.selectedA = li.id;
	}
	if(li.className.indexOf("E") > -1){
		$('.E').removeClass('E_selected');
		$(li).addClass('E_selected');
		$('.A').each(function(){TestGenerator.RemoveShadow(this)});
		TestGenerator.selectedE = li.id;
	}
	
	switch(li.id){
		case "A1":
			TestGenerator.Shadow($('#E2').get(0));
			break;
		case "A2":
			TestGenerator.Shadow($('#E2').get(0));
			break;
		case "E2":
			TestGenerator.Shadow($('#A2').get(0));
			TestGenerator.Shadow($('#A1').get(0));
			break;
	}
	if(TestGenerator.selectedA != null && TestGenerator.selectedE != null){
		TestGenerator.stopCheckAnswer = true;
		var answer = "" + TestGenerator.selectedA.charAt(1) + TestGenerator.selectedE.charAt(1);
		var isCorrect= false;
		//console.log(answer);
		if(answer == TestGenerator.state)
			isCorrect = true;
		if(isCorrect == true){
			$('#status').html('<span style="color:red">Tebrikler!&emsp;</span><input type="button" value="Sonraki" onclick="TestGenerator.NextQuestion();"/>');
		}
		else if(TestGenerator.trial > 0){
			TestGenerator.stopCheckAnswer=true;
			$(".tg ul li").removeClass('A_selected');
			$(".tg ul li").removeClass('E_selected');
			$(".tg ul li").each(function(){TestGenerator.RemoveShadow(this);});
			$('#A'+TestGenerator.state.charAt(0)).addClass('A_selected');
			$('#E'+TestGenerator.state.charAt(1)).addClass('E_selected');
			var right_answer = 'Dogru cevap: ' + 
									$('#A'+TestGenerator.state.charAt(0)).html() + ' ' + 
									$('#E'+TestGenerator.state.charAt(1)).html() +
									' olmalıydı.&emsp;';
			$('#status').html(right_answer + '<input type="button" value="Sonraki" onclick="TestGenerator.NextQuestion();"/>');
		}
		else{
			TestGenerator.stopCheckAnswer=true;
			$('#status').html('Yanlış cevap&emsp;<input type="button" value="Tekrar Deneyiniz" onclick="TestGenerator.TryAgain();"/>');
		}
	
	}
	
}

TestGenerator.TryAgain = function(){
	$(".tg ul li").removeClass('A_selected');
	$(".tg ul li").removeClass('E_selected');
	$(".tg ul li").each(function(){TestGenerator.RemoveShadow(this);});
	TestGenerator.trial ++;
	TestGenerator.selectedA = null;
	TestGenerator.selectedE = null;
	$('#status').html('');
	TestGenerator.stopCheckAnswer = false;
}
TestGenerator.NextQuestion = function(){
	//prepare question
	$('#status').html('');
	$(".tg ul li").removeClass('A_selected');
	$(".tg ul li").removeClass('E_selected');
	$(".tg ul li").each(function(){TestGenerator.RemoveShadow(this);});
	var a,e;
	var container = TestGenerator.container;
	$(container).html('');
	a = Math.floor(Math.random()*3);
	e = Math.floor(Math.random()*(a>0?2:3));
	TestGenerator.state = "" + a + e;
	TestGenerator.selectedA = null;
	TestGenerator.selectedE = null;
	TestGenerator.trial = 0;
	TestGenerator.stopCheckAnswer = false;
	console.log(TestGenerator.state);
	//switch to a state
	switch(TestGenerator.state){
		case '00':
			//dar acili ve cesitkenar
			var a,b,c;
			a = Math.floor(Math.random()*5)+10;
			b=a;
			while(b == a)
				b = Math.floor(Math.random()*5)+10;
			c = Math.floor(Math.sqrt(a*a+b*b)-2);
			
			//console.log([a,b]);
			if(Math.random()*4 > 2)
				b = (a += b -= a) - b;//swap a and b 
			if(Math.random()*4 > 2)
				c = (a += c -= a) - c;//swap a and c 
			if(Math.random()*4 > 2)
				b = (c += b -= c) - b;//swap c and b 
			//console.log([a,b,c]);
			
			var triangle = new Triangle(a,b,c,container);
		
			if(a%2==0){
				triangle.showEdge('a');
				triangle.showEdge('b');
			}
			else{
				triangle.showEdge('c');
				triangle.showEdge('b');
			}
			if(a%2==0){
				triangle.showAngle('A');
				triangle.showAngle('B');
			}
			else{
				triangle.showAngle('C');
				triangle.showAngle('B');
			}
			break;
			
		case '01':
			//dar acili ve ikizkenar
			//two equal angles
			//or
			//two equal edges
			var a,c;
			a = Math.floor(Math.random()*10)+5;
			c = 2*a;
			while(c > Math.sqrt(2)*a || c == a)
				c = Math.floor(Math.random()*a)+5;
			//console.log([a,c])
			var triangle = new Triangle(a,a,c,container);
			//return;
			if(a % 2 ==0){
				triangle.showEdge('a');
				triangle.showEdge('b');
				triangle.showAngle('B');
			}
			else{
				triangle.showAngle('C');
				triangle.showAngle('A');
			
			}
			break;
			
		case '02':
			//dar acili ve eskenar
			//two equal angles
			var a;
			a = Math.floor(Math.random()*10)+5;
			var triangle = new Triangle(a,a,a,container);
			
			if(a % 3 == 0){
				triangle.showAngle('C');
				triangle.showAngle('B');
			}
			else if(a % 3 == 1){
				triangle.showAngle('C');
				triangle.showAngle('A');
			}
			else{
				triangle.showAngle('B');
				triangle.showAngle('A');
			}
			
			break;
			
		case '10':
			//genis acili ve cesitkenar
			//two angles
			//two edges
			var a,b,c;
			a = Math.floor(Math.random()*5)+10;
			b=a;
			while(b == a)
				b = Math.floor(Math.random()*5)+10;
			c = Math.floor(Math.sqrt(a*a+b*b)+2);
			
			//console.log([a,b]);
			if(Math.random()*4 > 2)
				b = (a += b -= a) - b;//swap a and b 
			if(Math.random()*4 > 2)
				c = (a += c -= a) - c;//swap a and c 
			if(Math.random()*4 > 2)
				b = (c += b -= c) - b;//swap b and c 
			//console.log([a,b,c]);
			
			var triangle = new Triangle(a,b,c,container);
		
			if(a%2==0){
				triangle.showEdge('a');
				triangle.showEdge('b');
			}
			else{
				triangle.showEdge('c');
				triangle.showEdge('b');
			}
			if(a%2==0){
				triangle.showAngle('A');
				triangle.showAngle('B');
			}
			else{
				triangle.showAngle('C');
				triangle.showAngle('B');
			}
			break;
			
		case '11':
			//genis acili ve ikizkenar
			//two random angles
			//two equal edges
			var a,c;
			a = Math.floor(Math.random()*10)+5;
			c = a;
			while(c == a || c < Math.sqrt(2)*a)
				c = Math.floor(Math.random()*2+Math.sqrt(2)*a+1);
			console.log([a,c]);
			
			
			if(a % 2 ==0){
				var triangle = new Triangle(a,a,c,container);
				triangle.showEdge('a');
				triangle.showEdge('b');
				triangle.showAngle('B');
			}
			else{
				var triangle = new Triangle(c,a,a,container);
				triangle.showAngle('C');
				triangle.showAngle('A');
			}
			break;
			
		case '20':
			//dik acili ve cesit kenar
			//non right angles
			//or
			//right angle
			var a,b,c;
			a = Math.floor(Math.random()*10)+5;
			b=a;
			while(b == a)
				b = Math.floor(Math.random()*5)+10;
			c = Math.sqrt(a*a+b*b);
			if(a % 2 ==0){
				var triangle = new Triangle(a,b,c,container);
				triangle.showAngle('B');
				triangle.showEdge('b');
			}
			else{
				var triangle = new Triangle(c,b,a,container);
				triangle.showAngle('B');
				triangle.showAngle('A');
				triangle.showEdge('c');
			}
			break;
			
		case '21':
			//dik acili ve ikizkenar
			//two equal edges and right angle
			var a,b,c;
			a = Math.floor(Math.random()*10)+5;
			b=a;
			c = Math.sqrt(a*a+b*b);
			if(a % 2 ==0){
				var triangle = new Triangle(a,b,c,container);
				triangle.showAngle('B');
				triangle.showEdge('a');
				triangle.showEdge('b');
			}
			else{
				var triangle = new Triangle(c,b,a,container);
				triangle.showAngle('C');
				triangle.showEdge('c');
				triangle.showEdge('b');
			}
			break;
	}
}
function Triangle(i,j,k,container){
	this.i=i,this.j=j,this.k=k;
	this.p1={x:10,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
	var a = 200;
	var _c = (a-40)/Math.max(i,j,k);
	//console.log(_c);
	var paper = new Raphael(container,a+50,a);
	
	this.p1.x = 60;
	this.p1.y = a-20;
	this.p2.x = this.p1.x + this.i*_c;
	this.p2.y = this.p1.y;
	var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
	//console.log('this.i:'+this.i+' this.j:'+this.j+' k:'+k+' a:'+a);
	this.p3.x = this.p1.x + Math.cos(a)*k*_c;
	this.p3.y = this.p1.y - Math.sin(a)*k*_c;
	//console.log(this);
	InteractionStyler.edges.apply(paper.triangle( this.p1.x,
					this.p1.y,
					this.p2.x,
					this.p2.y,
					this.p3.x,
					this.p3.y ));
	this.drawEdgeText = function(p,a,k,L){
		var _x,_y;
		_x = p.x + k * Math.sin(a);
		_y = p.y + k * Math.cos(a);
		InteractionStyler.texts.apply(this.paper.text(_x,_y,L));
	
	}
	this.drawAngle = function(p1,p2,p3,a){
		function findAPointOn(p1,p2,k){
			var x,y,a;
			a = FindAngle(p1.x,p1.y,p2.x,p2.y);
			x = p1.x + Math.cos(a)*k ;
			y = p1.y - Math.sin(a)*k ;
			return {x:x,y:y}
		}
		
		var x1,y1,x2,y2,r,k;
		r = 1;
		k = 15;
		
		var _p1,_p2;
		_p1 = findAPointOn(p1,p2,k);
		x1=_p1.x; y1=_p1.y;
		_p2 = findAPointOn(p1,p3,k);
		x2=_p2.x; y2=_p2.y;
		
		var fa = a > Math.PI ?0 : 1;
		var fs = a > 0 ? 0: 1;
		var _a = FindAngle(p1.x,p1.y,p2.x,p2.y);
		var _b = FindAngle(p1.x,p1.y,p3.x,p3.y);
		var _t = Math.abs(_a-_b)*0.5 + (Math.abs(_a) > Math.abs(_b) ? _b : _a);
		
		if(_degree(a)==90){
			var x,y;
			x = p1.x + Math.sqrt(2) * k * Math.cos(_t);
			y = p1.y - Math.sqrt(2) * k * Math.sin(_t);
			InteractionStyler.edges.apply(this.paper.line(x1,y1,x,y));
			InteractionStyler.edges.apply(this.paper.line(x2,y2,x,y));
			InteractionStyler.edges.apply(this.paper.circle((p1.x+x)*0.5,(p1.y+y)*0.5,1).attr('fill','#CCC'));
		}
		else{
			InteractionStyler.angles.apply(this.paper.path('M'+p1.x+','+p1.y+' L'+x1+','+y1+' A'+r+','+r +
				   ' 0 '+fa+','+fs+' '+x2+','+y2+'  z').attr('fill','#CCC'));
		}
		var _x,_y;//for the text
		_x = p1.x + 2.4 * k * Math.cos(_t);
		_y = p1.y - 2.4 * k * Math.sin(_t);
		InteractionStyler.texts.apply(this.paper.text(_x,_y,""+_degree(a)+"°"));
		
	}
	this.showAngle = function(angle){
		switch(angle){
			case 'A':
				var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
				this.drawAngle(this.p1,this.p2,this.p3,a);
				break;
			case 'B':
				var a = Math.acos((this.i*this.i + this.j*this.j - this.k*this.k)/(2*this.i*this.j));
				this.drawAngle(this.p2,this.p3,this.p1,a);
				break;
			case 'C':
				var a = Math.acos((this.k*this.k + this.j*this.j - this.i*this.i)/(2*this.k*this.j));
				this.drawAngle(this.p3,this.p1,this.p2,a);
				break;
			default:
				throw 'invalid argument. valid arguments: [ A , B , C ]';
		}
	}
	
	this.showEdge = function(edge){
		var k = 10;
		switch(edge){
			case 'a':
				var a = FindAngle(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
				this.drawEdgeText({x:(this.p1.x+this.p2.x)*0.5,y:(this.p1.y+this.p2.y)*0.5},a,k,this.i);
				break;
			case 'b':
				var a = FindAngle(this.p2.x,this.p2.y,this.p3.x,this.p3.y);
				this.drawEdgeText({x:(this.p2.x+this.p3.x)*0.5,y:(this.p2.y+this.p3.y)*0.5},a,k,this.j);
				break;
			case 'c':
				var a = FindAngle(this.p3.x,this.p3.y,this.p1.x,this.p1.y);
				this.drawEdgeText({x:(this.p3.x+this.p1.x)*0.5,y:(this.p3.y+this.p1.y)*0.5},a,k,this.k);
				break;
			default:
				throw 'invalid argument. valid arguments: [ a , b , c ]';
		}
	}
	this.paper = paper;
}
function animationInit(){}
function interactionInit(container){
	var yonerge = document.createElement('div');
	yonerge.innerHTML = 'Üçgenleri açılarına ve kenarlarına göre soldaki ve sağdaki gruplarda yer alan uygun kutucukları tıklayarak sınıflandırınız.';
	yonerge.className = "objective";
	container.appendChild(yonerge);
	container.innerHTML += '<div><div id="L" style="width:25%" class="tg"></div>'+
						  '<div id="C" style="width:50%" class="tg"></div>'+
						  '<div id="R" style="width:25%" class="tg"></div></div>';
						  
	$('div.tg',container).css({
			float:'left',
			height:'200px',
			boxSizing:'border-box',
			fontSize:'12px'
		});
	$(container).append('<style>#'+container.id+' ul{list-style:none;padding:0;padding-top:50px;margin:0;}</style>');
	$(container).append('<style>#'+container.id+' ul li{height:35px;line-height:35px;background-color:rgb(214,227,188);padding-left:5px;margin-top:5px;border:1px solid #000;font-weight:bold;cursor:pointer;}</style>');
	$(container).append('<style>#'+container.id+' ul li.A{background-color:rgb(214,227,188);}</style>');
	$(container).append('<style>#'+container.id+' ul li.E{background-color:rgb(228,184,183);}</style>');
	$(container).append('<style>#'+container.id+' ul li.shadow{background-color:#DDD !important;}</style>');
	$(container).append('<style>#'+container.id+' ul li.A_selected{background-color:rgb(118,146,59) !important;color:#FFF !important;}</style>');
	$(container).append('<style>#'+container.id+' ul li.E_selected{background-color:rgb(147,54,52) !important;color:#FFF !important;}</style>');
	TestGenerator($('div#C',container).get(0));
	$('div#L',container).html('<ul>'+
							  '<li class="A" id="A0" onclick="TestGenerator.CheckAnswer(this)">Dar Açılı Üçgen</li>'+
							  '<li class="A" id="A1" onclick="TestGenerator.CheckAnswer(this)">Geniş Açılı Üçgen</li>'+
							  '<li class="A" id="A2" onclick="TestGenerator.CheckAnswer(this)">Dik Açılı Üçgen</li>'+
							  '</ul>');
	
	$('div#R',container).html('<ul>'+
							  '<li class="E" id="E0" onclick="TestGenerator.CheckAnswer(this)">Çeşitkenar Üçgen</li>'+
							  '<li class="E" id="E1" onclick="TestGenerator.CheckAnswer(this)">İkizkenar Üçgen</li>'+
							  '<li class="E" id="E2" onclick="TestGenerator.CheckAnswer(this)">Eşkenar Üçgen</li>'+
							  '</ul>');
	
	$(container).append('<div id="status"></div>');
	$('#status').css({
			textAlign:'center'
		});
	
	
}
$(document).ready(function(){interactionInit(document.getElementById('interaction_container'))});

function FindDistance(x1,y1,x2,y2){
	var _i = x1-x2;
	var _j = y1-y2;
	return Math.sqrt(_i*_i + _j*_j);
}

function FindAngle(x1, y1, x2, y2) {
	if (y1 == y2) {
		if (x1 > x2) {
			return Math.PI;
		} else {
			return 0;
		}
	}
	if (x1 == x2) {
		if (y1 > y2) {
			return Math.PI/2;
		} else {
			return 3*Math.PI/2;
		}
	}
	angle = -Math.atan((y2 - y1) / (x2 - x1));
	if (x2 < x1) {
		angle += Math.PI;
	} else if (y2 > y1) {
		angle += 2 * Math.PI;
	}
	return angle;
}

function _degree(a){
	var d = a * (180/Math.PI);
	d = Math.floor(d*10);
	if(d%10 == 5)
		return Math.floor(a * (180/Math.PI)) + 0.5;
	else
		return Math.round(a * (180/Math.PI));
}