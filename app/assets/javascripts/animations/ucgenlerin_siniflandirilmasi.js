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
/*Styles*/


var Interaction =function(){};Interaction();
Interaction.init = function(container){
	/*var yonerge = document.createElement('div');
	yonerge.innerHTML = 'Üçgenleri açılarına ve kenarlarına göre soldaki ve sağdaki gruplarda yer alan uygun kutucukları tıklayarak sınıflandırınız.';
	yonerge.className = "objective";
	container.appendChild(yonerge);*/
	Main.setObjective('Üçgenleri açılarına ve kenarlarına göre soldaki ve sağdaki gruplarda yer alan uygun kutucukları tıklayarak sınıflandırınız.');
	container.innerHTML += '<div><div id="L" style="width:25%;padding-left:10px" class="tg"></div>'+
						  '<div id="C" style="width:50%" class="tg"></div>'+
						  '<div id="R" style="width:25%;padding-right:10px" class="tg"></div></div>';
						  
	$('div.tg',container).css({
			float:'left',
			height:'200px',
			boxSizing:'border-box',
			fontSize:'12px'
		});
	$(container).append('<style>ul{list-style:none;padding:0;padding-top:50px;margin:0;}</style>');
	$(container).append('<style> ul li{height:35px;line-height:35px;background-color:rgb(214,227,188);padding-left:5px;margin-top:5px;border:1px solid #000;font-weight:bold;cursor:pointer;}</style>');
	$(container).append('<style> ul li.A{background-color:rgb(214,227,188);}</style>');
	$(container).append('<style> ul li.E{background-color:rgb(228,184,183);}</style>');
	$(container).append('<style> ul li.shadow{background-color:#DDD !important;}</style>');
	$(container).append('<style> ul li.A_selected{background-color:rgb(118,146,59) !important;color:#FFF !important;}</style>');
	$(container).append('<style> ul li.E_selected{background-color:rgb(147,54,52) !important;color:#FFF !important;}</style>');
	TestGenerator($('div#C',container).get(0));
	$('div#L',container).html('<ul>'+
							  '<li class="A" id="A0" onclick="TestGenerator.checkAnswer(this)">Dar Açılı Üçgen</li>'+
							  '<li class="A" id="A1" onclick="TestGenerator.checkAnswer(this)">Geniş Açılı Üçgen</li>'+
							  '<li class="A" id="A2" onclick="TestGenerator.checkAnswer(this)">Dik Açılı Üçgen</li>'+
							  '</ul>');
	
	$('div#R',container).html('<ul>'+
							  '<li class="E" id="E0" onclick="TestGenerator.checkAnswer(this)">Çeşitkenar Üçgen</li>'+
							  '<li class="E" id="E1" onclick="TestGenerator.checkAnswer(this)">İkizkenar Üçgen</li>'+
							  '<li class="E" id="E2" onclick="TestGenerator.checkAnswer(this)">Eşkenar Üçgen</li>'+
							  '</ul>');
	
	$(container).append('<div id="status"></div>');
	$('#status').css({
			textAlign:'center'
		});
	TestGenerator($('div#C',container).get(0));
	
}


var TestGenerator = function(container){
	//generate some random numbers to enter a valid state
	TestGenerator.container = container;
	TestGenerator.nextQuestion();
	
}
TestGenerator.shadow = function(li){
	$(li).addClass('shadow');
}
TestGenerator.removeShadow = function(li){
	$(li).removeClass('shadow');

}
TestGenerator.removeAnswer = function(li){
	if(li.className.indexOf("A") > -1){
		$('.A').removeClass('A_selected');
		$('.E').each(function(){TestGenerator.removeShadow(this)});
		TestGenerator.selectedA = null;
	}
	if(li.className.indexOf("E") > -1){
		$('.E').removeClass('E_selected');
		$('.A').each(function(){TestGenerator.removeShadow(this)});
		TestGenerator.selectedE = null;
	}
}
TestGenerator.checkAnswer = function(li){
	if(TestGenerator.stopCheckAnswer==true)
		return;
	if(li.className.indexOf('A_selected') > -1 || li.className.indexOf('E_selected') > -1){
		TestGenerator.removeAnswer(li);
		return;
	}
		
	if(li.className.indexOf("A") == 0){
		$('.A').removeClass('A_selected');
		$(li).addClass('A_selected');
		$('.E').each(function(){TestGenerator.removeShadow(this)});
		TestGenerator.selectedA = li.id;
	}
	if(li.className.indexOf("E") == 0){
		$('.E').removeClass('E_selected');
		$(li).addClass('E_selected');
		$('.A').each(function(){TestGenerator.removeShadow(this)});
		TestGenerator.selectedE = li.id;
	}
	
	switch(li.id){
		case "A1":
			TestGenerator.shadow($('#E2').get(0));
			break;
		case "A2":
			TestGenerator.shadow($('#E2').get(0));
			break;
		case "E2":
			TestGenerator.shadow($('#A2').get(0));
			TestGenerator.shadow($('#A1').get(0));
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
			$('#status').html('<span class="status_true">Tebrikler!&emsp;</span><input type="button" class="control_button" value="Sonraki" onclick="TestGenerator.nextQuestion();"/>');
		}
		else if(TestGenerator.trial > 0){
			TestGenerator.stopCheckAnswer=true;
			$(".tg ul li").removeClass('A_selected');
			$(".tg ul li").removeClass('E_selected');
			$(".tg ul li").each(function(){TestGenerator.removeShadow(this);});
			$('#A'+TestGenerator.state.charAt(0)).addClass('A_selected');
			$('#E'+TestGenerator.state.charAt(1)).addClass('E_selected');
			var right_answer = '<span class="status_false">Doğru cevap <span style="font-weight:bold">' + 
									$('#A'+TestGenerator.state.charAt(0)).html() + ', ' + 
									$('#E'+TestGenerator.state.charAt(1)).html() +
									'</span> olmalıydı.&emsp;</span>';
			$('#status').html(right_answer + '<input type="button" class="control_button" value="Sonraki" onclick="TestGenerator.nextQuestion();"/>');
		}
		else{
			TestGenerator.stopCheckAnswer=true;
			$('#status').html('<span class="status_false">Yanlış cevap&emsp;</span><input type="button" class="control_button" value="Tekrar Deneyiniz" onclick="TestGenerator.tryAgain();"/>');
		}
	}
}

TestGenerator.tryAgain = function(){
	$(".tg ul li").removeClass('A_selected');
	$(".tg ul li").removeClass('E_selected');
	$(".tg ul li").each(function(){TestGenerator.removeShadow(this);});
	TestGenerator.trial ++;
	TestGenerator.selectedA = null;
	TestGenerator.selectedE = null;
	$('#status').html('');
	TestGenerator.stopCheckAnswer = false;
}
TestGenerator.nextQuestion = function(){
	//prepare question
	TestGenerator.letters = (Math.random()>0.5 ? ["A","B","C"]:["B","C","A"]);
	$('#status').html('');
	$(".tg ul li").removeClass('A_selected');
	$(".tg ul li").removeClass('E_selected');
	$(".tg ul li").each(function(){TestGenerator.removeShadow(this);});
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
			a = Math.floor(Math.random()*5)+5;
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
				triangle.showEdge('a');
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
	this.a1=null,this.a2=null,this.a3=null;
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
	paper.triangle( this.p1.x,
					this.p1.y,
					this.p2.x,
					this.p2.y,
					this.p3.x,

					this.p3.y ).attr(triangleStyle);
	
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
			x = p1.x + Math.sqrt(2) * k * Math.cos(_t);
			y = p1.y - Math.sqrt(2) * k * Math.sin(_t);
			this.paper.line(x1,y1,x,y).attr(edgeStyle);
			this.paper.line(x2,y2,x,y).attr(edgeStyle);
			this.paper.circle((p1.x+x)*0.5,(p1.y+y)*0.5,1).attr('fill','#CCC');
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
				this.drawEdgeText({x:(this.p1.x+this.p2.x)*0.5,y:(this.p1.y+this.p2.y)*0.5},a,k,this.i);
				break;
			case 'b':
				var a = Util.findAngle(this.p2.x,this.p2.y,this.p3.x,this.p3.y);
				this.drawEdgeText({x:(this.p2.x+this.p3.x)*0.5,y:(this.p2.y+this.p3.y)*0.5},a,k,this.j);
				break;
			case 'c':
				var a = Util.findAngle(this.p3.x,this.p3.y,this.p1.x,this.p1.y);
				this.drawEdgeText({x:(this.p3.x+this.p1.x)*0.5,y:(this.p3.y+this.p1.y)*0.5},a,k,this.k);
				break;
			default:
				throw 'invalid argument. valid arguments: [ a , b , c ]';
		}
	}
	this.calculateAngles();
	this.paper = paper;
}

function _degree(a){
	var d = Util.radianToDegree(a);
	d = Math.floor(d*10);
	if(d%10 == 5)
		return Math.floor(Util.radianToDegree(a)) + 0.5;
	else
		return Math.round(Util.radianToDegree(a));
}