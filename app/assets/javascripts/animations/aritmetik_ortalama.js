// Aritmetik ortalama interaction

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation =function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
	Animation.container = container;
	
	var tableGroup = new Group();
	
	var horiLine = new Path.Line(new Point(176.5, 60.5), new Point(602.5, 60.5));
	horiLine.strokeColor = "grey";
	horiLine.strokeWidth = 1;
	tableGroup.addChild(horiLine);

	var vertLine = new Path.Line(new Point(245.5, 40.5), new Point(245.5, 80.5));
	vertLine.strokeColor = "grey";
	vertLine.strokeWidth = 1;
	tableGroup.addChild(vertLine);
	
	var vertLine2 = new Path.Line(new Point(279.5, 40.5), new Point(279.5, 80.5));
	vertLine2.strokeColor = "grey";
	vertLine2.strokeWidth = 1;
	tableGroup.addChild(vertLine2);
	
	var vertLine3 = new Path.Line(new Point(356.5, 40.5), new Point(356.5, 80.5));
	vertLine3.strokeColor = "grey";
	vertLine3.strokeWidth = 1;
	tableGroup.addChild(vertLine3);
	
	var vertLine4 = new Path.Line(new Point(434.5, 40.5), new Point(434.5, 80.5));
	vertLine4.strokeColor = "grey";
	vertLine4.strokeWidth = 1;
	tableGroup.addChild(vertLine4);
	
	var vertLine5 = new Path.Line(new Point(480.5, 40.5), new Point(480.5, 80.5));
	vertLine5.strokeColor = "grey";
	vertLine5.strokeWidth = 1;
	tableGroup.addChild(vertLine5);
	
	var vertLine6 = new Path.Line(new Point(557.5, 40.5), new Point(557.5, 80.5));
	vertLine6.strokeColor = "grey";
	vertLine6.strokeWidth = 1;
	tableGroup.addChild(vertLine6);
			
	$(container).append('<img id="calendar" src="/assets/animations/aritmetik_ortalama/calendar.png" />');
	$('#calendar').css("width", "80px")
				.css("height", "60px")
				.css("position", "absolute")
				.css("left", "90px")
				.css("top", "46px");
	
	$(container).append('<img id="rainbow" src="/assets/animations/aritmetik_ortalama/rainbow.png" />');
	$('#rainbow').css("width", "80px")
				.css("height", "60px")
				.css("position", "absolute")
				.css("left", "640px")
				.css("top", "46px");
	
		
	$(container).append('<div id="datasHolderDiv"></div>');
	$('#datasHolderDiv').css("position", "absolute")
						.css("left", "206px")
						.css("top", "32px")
						.css("width", "400")
						.css("height", "100")
	
	$('#datasHolderDiv').append('<div id="context">Bir haftalık hava sıcaklığı sonuçları</div>');
	$('#context').css("position", "absolute")
					.css("left", "40px")
					.css("top", "-4px")
					.css("font-size", 18)
					.css("text-align", "center")
					.css("width", "320x");
	
	$('#datasHolderDiv').append('<div id="monday">Pazartesi</div>');
	$('#monday').css("position", "absolute")
					.css("left", "-14px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "50px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="mondayD">25°</div>');
	$('#mondayD').css("position", "absolute")
					.css("left", "6px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(4000).animate({opacity:1}, 500)
	
	$('#datasHolderDiv').append('<div id="tuesday">Salı</div>');
	$('#tuesday').css("position", "absolute")
					.css("left", "50px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "40px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="tuesdayD">27°</div>');
	$('#tuesdayD').css("position", "absolute")
					.css("left", "60px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(5000).animate({opacity:1}, 500)
	
	$('#datasHolderDiv').append('<div id="wednesday">Çarşamba</div>');
	$('#wednesday').css("position", "absolute")
					.css("left", "92px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "54px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="wednesdayD">30°</div>');
	$('#wednesdayD').css("position", "absolute")
					.css("left", "116px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(6000).animate({opacity:1}, 500)
	
	$('#datasHolderDiv').append('<div id="thursday">Perşembe</div>');
	$('#thursday').css("position", "absolute")
					.css("left", "170px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "54px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="thursdayD">29°</div>');
	$('#thursdayD').css("position", "absolute")
					.css("left", "196px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(7000).animate({opacity:1}, 500)
					
	$('#datasHolderDiv').append('<div id="friday">Cuma</div>');
	$('#friday').css("position", "absolute")
					.css("left", "244px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "44px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="fridayD">31°</div>');
	$('#fridayD').css("position", "absolute")
					.css("left", "258px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(8000).animate({opacity:1}, 500)
					
	$('#datasHolderDiv').append('<div id="saturday">Cumartesi</div>');
	$('#saturday').css("position", "absolute")
					.css("left", "292px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "54px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="saturdayD">28°</div>');
	$('#saturdayD').css("position", "absolute")
					.css("left", "316px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(9000).animate({opacity:1}, 500)
					
	$('#datasHolderDiv').append('<div id="sunday">Pazar</div>');
	$('#sunday').css("position", "absolute")
					.css("left", "366px")
					.css("top", "24px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("width", "46px")
					.css("font-weight", "bold");
	$('#datasHolderDiv').append('<div id="sundayD">26°</div>');
	$('#sundayD').css("position", "absolute")
					.css("left", "380px")
					.css("top", "48px")
					.css("font-size", 14)
					.css("text-align", "center")
					.css("opacity", 0)
					.delay(10000).animate({opacity:1}, 500)
					
	$(container).append('<div id="executionDiv"></div>');
	$('#executionDiv').css("position", "absolute")
						.css("left", "102px")
						.css("top", "128px")
						.css("width", "600")
						.css("height", "60")
					
	$('#executionDiv').append('<div id="averageText">Aritmetik Ortalama</div>');
	$('#averageText').css("position", "absolute")
					.css("left", "18px")
					.css("top", "20px")
					.css("font-size", 18)
					.css("text-align", "center")
					.css("width", "320x");
					
	$('#executionDiv').append('<p id="execEq">=</p>');
	$('#execEq').css("position", "absolute")
				.css("left", "176px")
				.css("top", "20px")
				.css("font-size", 20)
	
	$('#executionDiv').append('<div id="numerator"></div>');
	$('#numerator').css("position", "absolute")
					.css("left", "198px")
					.css("top", "9px")
					.css("font-size", 16)
					.css("text-align", "center")
					.css("width", "320x");
	
	$('#numerator').append('<div id="firstN">25</div>')
	$('#firstN').css("position", "absolute")
				.css("left", "0px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
	
	$('#numerator').append('<div id="secondN">+ 27</div>')
	$('#secondN').css("position", "absolute")
				.css("left", "20px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
				.css("width", "40px")
	
	$('#numerator').append('<div id="thirdN">+ 30</div>')
	$('#thirdN').css("position", "absolute")
				.css("left", "56px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="fourthN">+ 29</div>')
	$('#fourthN').css("position", "absolute")
				.css("left", "92px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="fifthN">+ 31</div>')
	$('#fifthN').css("position", "absolute")
				.css("left", "126px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="sixthN">+ 28</div>')
	$('#sixthN').css("position", "absolute")
				.css("left", "164px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="seventhN">+ 26</div>')
	$('#seventhN').css("position", "absolute")
				.css("left", "202px")
				.css("top", "2px")
				.css("font-size", 16)
				.css("text-align", "center")
				.css("width", "40px")
					
	$('#executionDiv').append('<div id="execLine"></div>');
	$('#execLine').css("position","absolute")
				.css("left", "196px")
				.css("top", "30px")
				.css("width", "242px")
				.css("height", "1px")
				.css("padding", 0)
			//	.css("font-weight", "bold")
				.css("border-top", "2px solid");
				
	$('#executionDiv').append('<div id="denumerator">7</div>');
	$('#denumerator').css("position", "absolute")
					.css("left", "311px")
					.css("top", "36px")
					.css("font-size", 16)
					.css("text-align", "center")
					.css("width", "20x");
					
	$('#executionDiv').append('<p id="execEq2" >=</p>');
	$('#execEq2').css("position", "absolute")
				.css("left", "449px")
				.css("top", "20px")
				.css("font-size", 20)
	
	$('#executionDiv').append('<div id="numerator2">196</div>');
	$('#numerator2').css("position", "absolute")
					.css("left", "474px")
					.css("top", "11px")
					.css("font-size", 16)
					.css("text-align", "center")
					.css("width", "320x");
					
	$('#executionDiv').append('<div id="execLine2"></div>');
	$('#execLine2').css("position","absolute")
				.css("left", "470px")
				.css("top", "30px")
				.css("width", "39px")
				.css("height", "1px")
			//	.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#executionDiv').append('<div id="denumerator2">7</div>');
	$('#denumerator2').css("position", "absolute")
					.css("left", "484px")
					.css("top", "36px")
					.css("font-size", 16)
					.css("text-align", "center")
					.css("width", "20x");
					
	$('#executionDiv').append('<p id="execEq3" >=</p>');
	$('#execEq3').css("position", "absolute")
				.css("left", "517px")
				.css("top", "20px")
				.css("font-size", 20)
				
	$('#executionDiv').append('<div id="lastNum">28</div>');
	$('#lastNum').css("position", "absolute")
					.css("left", "537px")
					.css("top", "22px")
					.css("font-size", 16)
					.css("text-align", "center")
					.css("width", "20x");
	
	horiLine.opacity = 0;
	for(i = 1; i < 7; i++) {
		tableGroup.children[i].opacity = 0;
	}
	
	exampleHelper = {
		averageTextOpacity: 0,
		firstNOpacity: 0,
		secondNOpacity: 0,
		thirdNOpacity: 0,
		fourthNOpacity: 0,
		fifthNOpacity:0,
		sixthNOpacity:0,
		seventhNOpacity:0,
		execLineOpacity: 0,
		execLine2Opacity: 0,
		execEqOpacity: 0,
		execEq2Opacity: 0,
		execEq3Opacity: 0,
		denumeratorOpacity: 0,
		denumerator2Opacity: 0,
		numerator2Opacity: 0,
		lastNumOpacity: 0,
		calendarOpacity: 0,
		rainbowOpacity: 0,
		contextOpacity: 0,
		mondayOpacity: 0,
		tuesdayOpacity: 0,
		wednesdayOpacity: 0,
		thursdayOpacity: 0,
		fridayOpacity: 0,
		saturdayOpacity: 0,
		sundayOpacity:0
	}
	
	exampleHelper.animate = Item.prototype.animate;
	
	Animation.onFrame = function(event) {
		$('#calendar').css("opacity", exampleHelper.calendarOpacity);
		$('#rainbow').css("opacity", exampleHelper.calendarOpacity);
		$('#context').css("opacity", exampleHelper.contextOpacity);
		$('#monday').css("opacity", exampleHelper.mondayOpacity);
		$('#tuesday').css("opacity", exampleHelper.tuesdayOpacity);
		$('#wednesday').css("opacity", exampleHelper.wednesdayOpacity);
		$('#thursday').css("opacity", exampleHelper.thursdayOpacity);
		$('#friday').css("opacity", exampleHelper.fridayOpacity);
		$('#saturday').css("opacity", exampleHelper.saturdayOpacity);
		$('#sunday').css("opacity", exampleHelper.sundayOpacity);
		$('#averageText').css("opacity", exampleHelper.averageTextOpacity);
		$('#execEq').css("opacity", exampleHelper.execEqOpacity);
		$('#execLine').css("opacity", exampleHelper.execLineOpacity);
		$('#firstN').css("opacity", exampleHelper.firstNOpacity);
		$('#secondN').css("opacity", exampleHelper.secondNOpacity);
		$('#thirdN').css("opacity", exampleHelper.thirdNOpacity);
		$('#fourthN').css("opacity", exampleHelper.fourthNOpacity);
		$('#fifthN').css("opacity", exampleHelper.fifthNOpacity);
		$('#sixthN').css("opacity", exampleHelper.sixthNOpacity);
		$('#seventhN').css("opacity", exampleHelper.seventhNOpacity);
		$('#denumerator').css("opacity", exampleHelper.denumeratorOpacity);
		$('#execEq2').css("opacity", exampleHelper.execEq2Opacity);
		$('#numerator2').css("opacity", exampleHelper.numerator2Opacity);
		$('#execLine2').css("opacity", exampleHelper.execLine2Opacity);
		$('#denumerator2').css("opacity", exampleHelper.denumerator2Opacity);
		$('#execEq3').css("opacity", exampleHelper.execEq3Opacity);
		$('#lastNum').css("opacity", exampleHelper.lastNumOpacity);
	}
	
	exampleHelper.animate({
		style: {
			calendarOpacity: 1
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			contextOpacity: 1
		},
		duration: 1000,
		delay: 2000,
		animationType: 'easeInEaseOut'
	});
	

	horiLine.animate({
		style: {
			opacity: 1
		},
		duration: 500,
		delay: 3000,
		animationType: 'easeIneaseOut'
	});
	
	for(i = 1; i < 7; i++) {
		tableGroup.children[i].animate({
			style: {
				opacity: 1
			},
			duration: 100,
			delay: 3700+(1000*i),
			animationType: 'easeIneaseOut'
		});
	}
	
	exampleHelper.animate({
		style: {
			mondayOpacity: 1
		},
		duration: 500,
		delay: 4000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			tuesdayOpacity: 1
		},
		duration: 500,
		delay: 5000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			wednesdayOpacity: 1
		},
		duration: 500,
		delay: 6000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			thursdayOpacity: 1
		},
		duration: 500,
		delay: 7000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fridayOpacity: 1
		},
		duration: 500,
		delay: 8000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			saturdayOpacity: 1
		},
		duration: 500,
		delay: 9000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			sundayOpacity: 1
		},
		duration: 500,
		delay: 10000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			averageTextOpacity: 1
		},
		duration: 1000,
		delay: 11000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execEqOpacity: 1
		},
		duration: 1000,
		delay: 12000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execLineOpacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut'
	});
	
		
	exampleHelper.animate({
		style: {
			firstNOpacity: 1
		},
		duration: 500,
		delay: 14000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			secondNOpacity: 1
		},
		duration: 500,
		delay: 14500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			thirdNOpacity: 1
		},
		duration: 500,
		delay: 15000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fourthNOpacity: 1
		},
		duration: 300,
		delay: 15500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fifthNOpacity: 1
		},
		duration: 500,
		delay: 16000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			sixthNOpacity: 1
		},
		duration: 500,
		delay: 16500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			seventhNOpacity: 1
		},
		duration: 500,
		delay: 17000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			denumeratorOpacity: 1
		},
		duration: 1000,
		delay: 17500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execEq2Opacity: 1
		},
		duration: 1000,
		delay: 18500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execLine2Opacity: 1
		},
		duration: 1000,
		delay: 19500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			numerator2Opacity: 1
		},
		duration: 1000,
		delay: 20500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			denumerator2Opacity: 1
		},
		duration: 1000,
		delay: 21500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execEq3Opacity: 1
		},
		duration: 1000,
		delay: 22500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			lastNumOpacity: 1
		},
		duration: 1000,
		delay: 23500,
		animationType: 'easeInEaseOut'
	});
	
}

// interaction init func.
Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Yandaki dizide yer alan sayıları ilgili kutucuklara giriniz ve aritmetik ortalamayı bulunuz. “Kontrol” düğmesine fare ile tıklayarak ya da “Enter” tuşuna basarak kontrol ediniz.');
	
	var total;
	var fraction1, fraction2;
	var datas = new Array();
	
	var randomize = Math.floor(Math.random() * 3);
//	var randomize = 2;
	
	if(randomize % 3 == 0){
		for(i = 0; i < 4; i++) {
			datas[i] = Math.floor(Math.random() * 19) + 2;
		}
		do {
			datas[i] = Math.floor(Math.random() * 19) + 2;
			for(var j = 0, total = 0; j < datas.length; j++)
				total += datas[j];
		}
		while(total % 5 != 0)
	}
	else if(randomize % 3 == 1){
		for(i = 0; i < 3; i++) {
			datas[i] = Math.floor(Math.random() * 19) + 2;
		}
		do {
			datas[i] = Math.floor(Math.random() * 19) + 2;
			for(var j = 0, total = 0; j < datas.length; j++)
				total += datas[j];
		}
		while(total % 4 != 0)
	}
	else{
		for(i = 0; i < 2; i++) {
			datas[i] = Math.floor(Math.random() * 19) + 2;
		}
		do {
			datas[i] = Math.floor(Math.random() * 19) + 2;
			for(var j = 0, total = 0; j < datas.length; j++)
				total += datas[j];
		}
		while(total % 3 != 0)
	}
	
	if(randomize % 3 == 0){
		$(container).append('<div id="datasDiv"></div>');
		$('#datasDiv').css("position", "absolute")
							.css("left", "180px")
							.css("top", "6px")
							.css("width", "200px")
							.css("height", "20px")
							.css("text-align", "center");
		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
							.css("left", "40px")
							.css("top", "35px")
							.css("width", "400px")
							.css("height", "210px");
		
		$('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
		$('#avgText').css("position", "absolute")
						.css("left", "0px")
						.css("top", "32px")
						.css("font-size", 18)
						.css("text-align", "center")
						.css("width", "100px");
						
		$('#questionDiv').append('<p id="equal1" >=</p>');
			$('#equal1').css("position", "absolute")
					.css("left", "120px")
					.css("top", "48px")
					.css("font-size", 18)
					
		$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
					.css("left", "144px")
					.css("top", "56px")
					.css("width", "252px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid")
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "20px")
						.css("text-align", "center");
						
		$('#textInput1').addClass('input');
				
		$('#questionDiv').append('<p id="plus1" >+</p>');
			$('#plus1').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "182px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "200px")
						.css("top", "20px")
						.css("text-align", "center");
						
		$('#textInput2').addClass('input');
			
		$('#questionDiv').append('<p id="plus2" >+</p>');
			$('#plus2').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "236px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "254px")
						.css("top", "20px")
						.css("text-align", "center");
		
		$('#textInput3').addClass('input');
			
		$('#questionDiv').append('<p id="plus3" >+</p>');
			$('#plus3').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "290px")
						.css("top", "28px");
			
		$('#questionDiv').append('<input id="textInput4" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput4').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "308px")
						.css("top", "20px")
						.css("text-align", "center");
		
		$('#textInput4').addClass('input');
			
		$('#questionDiv').append('<p id="plus4" >+</p>');
			$('#plus4').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "344px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput5" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput5').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "362px")
						.css("top", "20px")
						.css("text-align", "center");
		
		$('#textInput5').addClass('input');
			
		$('#questionDiv').append('<input id="textInput6" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput6').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "254px")
						.css("top", "64px")
						.css("text-align", "center");
		
		$('#textInput6').addClass('input');
			
		$('#questionDiv').append('<p id="equal2" >=</p>');
			$('#equal2').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "120px")
						.css("top", "160px");
	
		
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
					.css("left", "144px")
					.css("top", "168px")
					.css("width", "36px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid")
		
		$('#questionDiv').append('<input id="textInput7" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput7').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "132px")
						.css("text-align", "center");
						
		$('#textInput7').addClass('input');
						
		$('#questionDiv').append('<input id="textInput8" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput8').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "176px")
						.css("text-align", "center");
		
		$('#textInput8').addClass('input');
			
		$('#questionDiv').append('<p id="equal3" >=</p>');
			$('#equal3').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "190px")
						.css("top", "160px");
			
		$('#questionDiv').append('<input id="textInput9" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput9').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "210px")
						.css("top", "152px")
						.css("text-align", "center");
		$('#textInput9').addClass('input');
	}	
	else if(randomize % 3 == 1){
		$(container).append('<div id="datasDiv"></div>');
		$('#datasDiv').css("position", "absolute")
							.css("left", "180px")
							.css("top", "6px")
							.css("width", "200px")
							.css("height", "20px")
							.css("text-align", "center");
		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
							.css("left", "40px")
							.css("top", "35px")
							.css("width", "400px")
							.css("height", "210px");
		
		$('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
		$('#avgText').css("position", "absolute")
						.css("left", "0px")
						.css("top", "32px")
						.css("font-size", 18)
						.css("text-align", "center")
						.css("width", "100px");
						
		$('#questionDiv').append('<p id="equal1" >=</p>');
			$('#equal1').css("position", "absolute")
					.css("left", "120px")
					.css("top", "48px")
					.css("font-size", 18)
					
		$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
					.css("left", "144px")
					.css("top", "56px")
					.css("width", "202px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid")
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "20px")
						.css("text-align", "center");
						
		$('#textInput1').addClass('input');
				
		$('#questionDiv').append('<p id="plus1" >+</p>');
			$('#plus1').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "182px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "200px")
						.css("top", "20px")
						.css("text-align", "center");
						
		$('#textInput2').addClass('input');
			
		$('#questionDiv').append('<p id="plus2" >+</p>');
			$('#plus2').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "236px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "254px")
						.css("top", "20px")
						.css("text-align", "center");
		
		$('#textInput3').addClass('input');
			
		$('#questionDiv').append('<p id="plus3" >+</p>');
			$('#plus3').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "290px")
						.css("top", "28px");
			
		$('#questionDiv').append('<input id="textInput4" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput4').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "308px")
						.css("top", "20px")
						.css("text-align", "center");
		
		$('#textInput4').addClass('input');
			
		$('#questionDiv').append('<input id="textInput6" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput6').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "226px")
						.css("top", "64px")
						.css("text-align", "center");
		
		$('#textInput6').addClass('input');
			
		$('#questionDiv').append('<p id="equal2" >=</p>');
			$('#equal2').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "120px")
						.css("top", "160px");
	
		
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
					.css("left", "144px")
					.css("top", "168px")
					.css("width", "36px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid")
		
		$('#questionDiv').append('<input id="textInput7" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput7').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "132px")
						.css("text-align", "center");
						
		$('#textInput7').addClass('input');
						
		$('#questionDiv').append('<input id="textInput8" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput8').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "176px")
						.css("text-align", "center");
		
		$('#textInput8').addClass('input');
			
		$('#questionDiv').append('<p id="equal3" >=</p>');
			$('#equal3').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "190px")
						.css("top", "160px");
			
		$('#questionDiv').append('<input id="textInput9" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput9').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "210px")
						.css("top", "152px")
						.css("text-align", "center");
		$('#textInput9').addClass('input');
	}
	else {
		$(container).append('<div id="datasDiv"></div>');
		$('#datasDiv').css("position", "absolute")
							.css("left", "180px")
							.css("top", "6px")
							.css("width", "200px")
							.css("height", "20px")
							.css("text-align", "center");
		
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
							.css("left", "40px")
							.css("top", "35px")
							.css("width", "400px")
							.css("height", "210px");
		
		$('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
		$('#avgText').css("position", "absolute")
						.css("left", "0px")
						.css("top", "32px")
						.css("font-size", 18)
						.css("text-align", "center")
						.css("width", "100px");
						
		$('#questionDiv').append('<p id="equal1" >=</p>');
			$('#equal1').css("position", "absolute")
					.css("left", "120px")
					.css("top", "48px")
					.css("font-size", 18)
					
		$('#questionDiv').append('<div id="line1"></div>');
		$('#line1').css("position","absolute")
					.css("left", "144px")
					.css("top", "56px")
					.css("width", "152px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid")
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "20px")
						.css("text-align", "center");
						
		$('#textInput1').addClass('input');
				
		$('#questionDiv').append('<p id="plus1" >+</p>');
			$('#plus1').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "182px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput2').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "200px")
						.css("top", "20px")
						.css("text-align", "center");
						
		$('#textInput2').addClass('input');
			
		$('#questionDiv').append('<p id="plus2" >+</p>');
			$('#plus2').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "236px")
						.css("top", "28px");
		
		$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput3').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "254px")
						.css("top", "20px")
						.css("text-align", "center");
		
		$('#textInput3').addClass('input');
			
		$('#questionDiv').append('<input id="textInput6" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput6').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "202px")
						.css("top", "64px")
						.css("text-align", "center");
		
		$('#textInput6').addClass('input');
			
		$('#questionDiv').append('<p id="equal2" >=</p>');
			$('#equal2').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "120px")
						.css("top", "160px");
	
		
		$('#questionDiv').append('<div id="line2"></div>');
		$('#line2').css("position","absolute")
					.css("left", "144px")
					.css("top", "168px")
					.css("width", "36px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid")
		
		$('#questionDiv').append('<input id="textInput7" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput7').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "132px")
						.css("text-align", "center");
						
		$('#textInput7').addClass('input');
						
		$('#questionDiv').append('<input id="textInput8" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput8').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "146px")
						.css("top", "176px")
						.css("text-align", "center");
		
		$('#textInput8').addClass('input');
			
		$('#questionDiv').append('<p id="equal3" >=</p>');
			$('#equal3').css("position", "absolute")
						.css("font-size", 18)
						.css("left", "190px")
						.css("top", "160px");
			
		$('#questionDiv').append('<input id="textInput9" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput9').css("width", "32")
						.css("height", "30")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("font-size", 18)
						.css("position", "absolute")
						.css("left", "210px")
						.css("top", "152px")
						.css("text-align", "center");
		$('#textInput9').addClass('input');
	}
					
	
	
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "144px")
					.css("top", "258px")
					.css("width", "240px")
					.css("text-align", "center")
					.css("height", "30px");
					
	$(container).append('<button id="checkBtn" class="control_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
					
	$('#checkBtn').show();
	
	$(container).append('<button id="nextBtn" class="next_button"></button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
	$('#nextBtn').hide();
	
	
						
	for(i = 0; i < datas.length; i++) {
		if(datas[i-1] >= 10) {
			var leftStr = ""+(8+40*i)+"px";
		}
		else {
			var leftStr = ""+(8+38*i)+"px";
		}
		$('#datasDiv').append('<p id="data'+i+'"></p>');
		$('#data'+i).css("position", "absolute")
						.css("left", leftStr)
						.css("top", "0px")
						.css("text-align", "center")
						.css("font-size", 18)
		if(i != datas.length-1) {
			$('#data'+i).html(""+datas[i]+",");
		}
		else {
			$('#data'+i).html(""+datas[i]);
		}
	}
	
	function CheckDatas(datas, ans){
		var correctN = 0;
		
		for(var i = 0; i < datas.length; i++){
			for(var j = 0; j < datas.length; j++){
				if(ans[j] == datas[i])
					ans[j] = -1;
			}
		}
		
		for(var i = 0; i < datas.length; i++){
			if(ans[i] == -1)
				correctN += 1;
		}
		if (correctN == datas.length)
			return true;
		else
			return false;
	}
	
	var trial = 0;				
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if(trial == 2)
			return;
		
		if(randomize % 3 == 0){
			var ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9;
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			ans4 = $('#textInput4').val();
			ans5 = $('#textInput5').val();
			ans6 = $('#textInput6').val();
			ans7 = $('#textInput7').val();
			ans8 = $('#textInput8').val();
			ans9 = $('#textInput9').val();
			var ansArr = new Array();
			ansArr[0] = ans1;
			ansArr[1] = ans2;
			ansArr[2] = ans3;
			ansArr[3] = ans4;
			ansArr[4] = ans5;
			// check whether input field is empty or not (also given input is integer or not)
			if(ans1 == "" || ans2 == "" || ans3 == "" || ans4 == "" || ans5 == "" || ans6 == "" || ans7 == "" || ans8 == "" || ans9 == "" || 
				!Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3) || !Util.isInteger(ans4) || !Util.isInteger(ans5) || !Util.isInteger(ans6) || !Util.isInteger(ans7) ||
				!Util.isInteger(ans8) || !Util.isInteger(ans9)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
			}
			else {
				// generate answers wrt. given numbers
				answer1 = datas[0];
				answer2 = datas[1];
				answer3 = datas[2];
				answer4 = datas[3];
				answer5 = datas[4];
				answer6 = datas.length;
				answer7 = total;
				answer8 = datas.length;
				answer9 = total/datas.length;
				
				// correct answer state
				if(CheckDatas(datas, ansArr) && ans6 == answer6 && ans7 == answer7 && ans8 == answer8 && ans9 == answer9) {
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
				}
				// second wrong answer state
				else if(trial == 1) {
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').css("color", inputBoxAnswerColor);
					$('#textInput2').css("color", inputBoxAnswerColor);
					$('#textInput3').css("color", inputBoxAnswerColor);
					$('#textInput4').css("color", inputBoxAnswerColor);
					$('#textInput5').css("color", inputBoxAnswerColor);
					$('#textInput6').css("color", inputBoxAnswerColor);
					$('#textInput7').css("color", inputBoxAnswerColor);
					$('#textInput8').css("color", inputBoxAnswerColor);
					$('#textInput9').css("color", inputBoxAnswerColor);
					$('#textInput1').val(answer1);
					$('#textInput2').val(answer2);
					$('#textInput3').val(answer3);
					$('#textInput4').val(answer4);
					$('#textInput5').val(answer5);
					$('#textInput6').val(answer6);
					$('#textInput7').val(answer7);
					$('#textInput8').val(answer8);
					$('#textInput9').val(answer9);
					$('#checkBtn').hide();
					$('#nextBtn').show();
					trial += 1;
				}
				// first wrong answer state
				else if(trial == 0) {	
					trial += 1;
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Tekrar deneyiniz.");
				}
			}
		}
		else if(randomize % 3 == 2){
			var ans1, ans2, ans3, ans6, ans7, ans8, ans9;
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			ans6 = $('#textInput6').val();
			ans7 = $('#textInput7').val();
			ans8 = $('#textInput8').val();
			ans9 = $('#textInput9').val();
			var ansArr = new Array();
			ansArr[0] = ans1;
			ansArr[1] = ans2;
			ansArr[2] = ans3;
			// check whether input field is empty or not (also given input is integer or not)
			if(ans1 == "" || ans2 == "" || ans3 == "" || ans6 == "" || ans7 == "" || ans8 == "" || ans9 == "" || 
				!Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3) || !Util.isInteger(ans6) || !Util.isInteger(ans7) ||
				!Util.isInteger(ans8) || !Util.isInteger(ans9)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
			}
			else {
				// generate answers wrt. given numbers
				answer1 = datas[0];
				answer2 = datas[1];
				answer3 = datas[2];
				answer6 = datas.length;
				answer7 = total;
				answer8 = datas.length;
				answer9 = total/datas.length;
				
				// correct answer state
				if(CheckDatas(datas, ansArr) && ans6 == answer6 && ans7 == answer7 && ans8 == answer8 && ans9 == answer9) {
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
				}
				// second wrong answer state
				else if(trial == 1) {
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').css("color", inputBoxAnswerColor);
					$('#textInput2').css("color", inputBoxAnswerColor);
					$('#textInput3').css("color", inputBoxAnswerColor);
					$('#textInput6').css("color", inputBoxAnswerColor);
					$('#textInput7').css("color", inputBoxAnswerColor);
					$('#textInput8').css("color", inputBoxAnswerColor);
					$('#textInput9').css("color", inputBoxAnswerColor);
					$('#textInput1').val(answer1);
					$('#textInput2').val(answer2);
					$('#textInput3').val(answer3);
					$('#textInput6').val(answer6);
					$('#textInput7').val(answer7);
					$('#textInput8').val(answer8);
					$('#textInput9').val(answer9);
					$('#checkBtn').hide();
					$('#nextBtn').show();
					trial += 1;
				}
				// first wrong answer state
				else if(trial == 0) {	
					trial += 1;
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Tekrar deneyiniz.");
				}
			}
		}
		else {
			var ans1, ans2, ans3, ans4, ans6, ans7, ans8, ans9;
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			ans3 = $('#textInput3').val();
			ans4 = $('#textInput4').val();
			ans6 = $('#textInput6').val();
			ans7 = $('#textInput7').val();
			ans8 = $('#textInput8').val();
			ans9 = $('#textInput9').val();
			var ansArr = new Array();
			ansArr[0] = ans1;
			ansArr[1] = ans2;
			ansArr[2] = ans3;
			ansArr[3] = ans4;
			// check whether input field is empty or not (also given input is integer or not)
			if(ans1 == "" || ans2 == "" || ans3 == "" || ans4 == "" || ans6 == "" || ans7 == "" || ans8 == "" || ans9 == "" || 
				!Util.isInteger(ans1) || !Util.isInteger(ans2) || !Util.isInteger(ans3) || !Util.isInteger(ans4) || !Util.isInteger(ans6) || !Util.isInteger(ans7) ||
				!Util.isInteger(ans8) || !Util.isInteger(ans9)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
			}
			else {
				// generate answers wrt. given numbers
				answer1 = datas[0];
				answer2 = datas[1];
				answer3 = datas[2];
				answer4 = datas[3];
				answer6 = datas.length;
				answer7 = total;
				answer8 = datas.length;
				answer9 = total/datas.length;
				
				// correct answer state
				if(CheckDatas(datas, ansArr) && ans6 == answer6 && ans7 == answer7 && ans8 == answer8 && ans9 == answer9) {
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
				}
				// second wrong answer state
				else if(trial == 1) {
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').css("color", inputBoxAnswerColor);
					$('#textInput2').css("color", inputBoxAnswerColor);
					$('#textInput3').css("color", inputBoxAnswerColor);
					$('#textInput4').css("color", inputBoxAnswerColor);
					$('#textInput6').css("color", inputBoxAnswerColor);
					$('#textInput7').css("color", inputBoxAnswerColor);
					$('#textInput8').css("color", inputBoxAnswerColor);
					$('#textInput9').css("color", inputBoxAnswerColor);
					$('#textInput1').val(answer1);
					$('#textInput2').val(answer2);
					$('#textInput3').val(answer3);
					$('#textInput4').val(answer4);
					$('#textInput6').val(answer6);
					$('#textInput7').val(answer7);
					$('#textInput8').val(answer8);
					$('#textInput9').val(answer9);
					$('#checkBtn').hide();
					$('#nextBtn').show();
					trial += 1;
				}
				// first wrong answer state
				else if(trial == 0) {	
					trial += 1;
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Tekrar deneyiniz.");
				}
			}
		}
	}
	
	// checkBtn click func. -> call submit	
	$('#checkBtn').click(submit);
		
	// nextBtn click func. -> remove whole html elements and call interaction init again
	$('#nextBtn').click(function() {
			$('#questionDiv').remove();
			$('#datasDiv').remove();
			$('#checkBtn').remove();
			$('#nextBtn').remove();
			$('#statuss').remove();
			$('#line1').remove();
			$('#line2').remove();
			Interaction.init(container);
		});
	
	$('.inp').keydown(function() {
		$('#statuss').html("");
	});
		
	// enter keypress action
	$("#textInput1").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput2").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput3").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	if($("#textInput4")){
		$("#textInput4").keyup(function(event) {
			if(event.keyCode == 13) {
				submit();
			}
		});
	}
	
	if($("#textInput5")){
		$("#textInput5").keyup(function(event) {
			if(event.keyCode == 13) {
				submit();
			}
		});
	}
	
	
	$("#textInput6").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput7").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput8").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput9").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
}
