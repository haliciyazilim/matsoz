function LongDivision(n,d,container){
    this.num = n + "",
    this.numLength = this.num.length;
    this.remainder = 0;
    this.answer = '';
    this.i = 0;
	this.n = n;
	this.d = d;
	this.lastIndent = 0;
	this.container = container;
	$(container).html('<div id="dividend"></div><div id="divisor"></div><div id="answer"></div>');
	this.nodes = {};
	this.fontSize = parseInt($(container).css('font-size'),10)+2;

	this.nodes.dividend = $('#dividend',container).html(this.num).css({
		width:'50%',
		borderRight:'1px solid #000',
		float:'left',
		textAlign:'left',
		height:this.fontSize*2
	}).get(0);
	this.nodes.divisor = $('#divisor',container).html(this.d).css({
		width:'40%',
		borderBottom:'1px solid #000',
		float:'left',
		textAlign:'left',
		height:this.fontSize
	}).get(0);
	this.nodes.answer = $('#answer',container).css({
		width:'40%',
		float:'left',
		textAlign:'left',
		height:this.fontSize
	}).get(0);
	$(this.nodes.dividend).height($(this.nodes.divisor).height()+$(this.nodes.answer).height());
	
	$(this.nodes.answer).html(this.answer);
	this.nodes.steps = [];
	
	this.nextStep = function(){
		if(this.i >= this.numLength)
			return;
		var digit = this.i < this.numLength ? parseInt(this.num[this.i],10) : 0;
		var lastStepDown = ""+this.remainder+digit;
		var stepDividend = digit + (this.remainder * 10);
		var stepAnswer = Math.floor(stepDividend/this.d);
		this.answer = this.answer + stepAnswer;
		
		if(this.nodes.steps.length > 0){
			//lastStepDown += $('.down',this.nodes.steps[this.nodes.steps.length-1]).html();
			$('.down',this.nodes.steps[this.nodes.steps.length-1]).append(digit);
		}
		if(stepDividend < this.d){
			this.i++;
			
			$(this.nodes.answer).html(parseInt(this.answer,10));	
			this.remainder = stepDividend;
			this.nextStep();
			return;
		}
		this.remainder = stepDividend%this.d;
		var minus  = Math.floor((digit + (this.remainder * 10)));
		$(this.nodes.answer).html(parseInt(this.answer,10));
		this.i++;
		var div = document.createElement('div');
		$(this.container).append(div);
		$(div)
			.html('<div class="up"></div><div class="line"><img src="/assets/animations/minus_sign.png" /></div><div class="down"></div>')
			.css({
				position:'relative',
				top:-this.fontSize,
				left:this.fontSize*0.5*(this.nodes.steps.length),
				height:this.fontSize*2+2,
				float:'left',
				width:$(this.container).width()
			});
		$('.up',div)
			.html(stepAnswer*this.d)
			.css({
				height:this.fontSize,
				width:this.fontSize,
				paddingLeft:this.fontSize*0.5*(this.i -this.nodes.steps.length -  $('.up',div).html().length)
			})
		$('.line',div)
			.css({
				position:'relative',
				height:1,
				borderTop:'1px solid #000',
				width:this.fontSize*0.5*(this.num.length+2),
				left:-this.fontSize
			})
		$('.line img',div)
			.css({
				position:'relative',
				top:'-15px',	
				left:'0px',
				zIndex:2
			});
		$('.down',div)
			.html(this.remainder)
			.css({
				height:this.fontSize,
				paddingLeft:this.fontSize*0.5*(this.i -this.nodes.steps.length - $('.down',div).html().length)
			});
			
		this.nodes.steps.push(div);
	}
	
    
}
