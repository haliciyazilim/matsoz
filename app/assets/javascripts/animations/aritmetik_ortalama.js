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
			
	$(container).append('<img id="calendar" src="/assets/animations/aritmetik_ortalama/calendar.png" />');
	$('#calendar').css("width", "80px")
				.css("height", "60px")
				.css("position", "absolute")
				.css("left", "90px")
				.css("top", "40px");
	
	$(container).append('<img id="rainbow" src="/assets/animations/aritmetik_ortalama/rainbow.png" />');
	$('#rainbow').css("width", "80px")
				.css("height", "60px")
				.css("position", "absolute")
				.css("left", "640px")
				.css("top", "40px");
	
		
	$(container).append('<div id="datasHolderDiv"></div>');
	$('#datasHolderDiv').css("position", "absolute")
						.css("left", "206px")
						.css("top", "28px")
						.css("width", "400")
						.css("height", "100")
			//			.css("border", "solid")
	
	$('#datasHolderDiv').append('<div id="context">Bir haftalık hava sıcaklığı sonuçları</div>');
	$('#context').css("position", "absolute")
					.css("left", "28px")
					.css("top", "0px")
					.css("font-size", 22)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "320x");
	
	$('#datasHolderDiv').append('<div id="monday">Pazartesi 25°</div>');
	$('#monday').css("position", "absolute")
					.css("left", "2px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "50px")
					.css("height", "26px");
	
	$('#datasHolderDiv').append('<div id="tuesday">Salı 27°</div>');
	$('#tuesday').css("position", "absolute")
					.css("left", "60px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "40px")
					.css("height", "26px");
	
	$('#datasHolderDiv').append('<div id="wednesday">Çarşamba 30°</div>');
	$('#wednesday').css("position", "absolute")
					.css("left", "104px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "54px")
					.css("height", "26px");
	
	$('#datasHolderDiv').append('<div id="thursday">Perşembe 29°</div>');
	$('#thursday').css("position", "absolute")
					.css("left", "172px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "54px")
					.css("height", "26px");
					
	$('#datasHolderDiv').append('<div id="friday">Cuma 32°</div>');
	$('#friday').css("position", "absolute")
					.css("left", "234px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "44px")
					.css("height", "26px");
					
	$('#datasHolderDiv').append('<div id="saturday">Cumartesi 28°</div>');
	$('#saturday').css("position", "absolute")
					.css("left", "286px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "54px")
					.css("height", "26px");
					
	$('#datasHolderDiv').append('<div id="sunday">Pazar 26°</div>');
	$('#sunday').css("position", "absolute")
					.css("left", "348px")
					.css("top", "28px")
					.css("font-size", 12)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "46px")
					.css("height", "26px");
					
	$(container).append('<div id="executionDiv"></div>');
	$('#executionDiv').css("position", "absolute")
						.css("left", "102px")
						.css("top", "128px")
						.css("width", "600")
						.css("height", "60")
				//		.css("border", "solid")
					
	$('#executionDiv').append('<div id="averageText">Aritmetik Ortalama</div>');
	$('#averageText').css("position", "absolute")
					.css("left", "2px")
					.css("top", "20px")
					.css("font-size", 20)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "320x");
					
	$('#executionDiv').append('<p id="execEq">=</p>');
	$('#execEq').css("position", "absolute")
				.css("left", "176px")
				.css("top", "20px")
				.css("font-size", 24)
				//.css("font-family", "Helvetica Neue");
	
	$('#executionDiv').append('<div id="numerator"></div>');
	$('#numerator').css("position", "absolute")
					.css("left", "198px")
					.css("top", "8px")
					.css("font-size", 20)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "320x");
	
	$('#numerator').append('<div id="firstN">25</div>')
	$('#firstN').css("position", "absolute")
				.css("left", "0px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
	
	$('#numerator').append('<div id="secondN">+ 27</div>')
	$('#secondN').css("position", "absolute")
				.css("left", "28px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
				.css("width", "40px")
	
	$('#numerator').append('<div id="thirdN">+ 30</div>')
	$('#thirdN').css("position", "absolute")
				.css("left", "72px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="fourthN">+ 29</div>')
	$('#fourthN').css("position", "absolute")
				.css("left", "116px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="fifthN">+ 32</div>')
	$('#fifthN').css("position", "absolute")
				.css("left", "158px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="sixthN">+ 28</div>')
	$('#sixthN').css("position", "absolute")
				.css("left", "202px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
				.css("width", "40px")
				
	$('#numerator').append('<div id="seventhN">+ 26</div>')
	$('#seventhN').css("position", "absolute")
				.css("left", "246px")
				.css("top", "0px")
				.css("font-size", 20)
				.css("text-align", "center")
				.css("width", "40px")
					
	$('#executionDiv').append('<div id="execLine"></div>');
	$('#execLine').css("position","absolute")
				.css("left", "196px")
				.css("top", "30px")
				.css("width", "292px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
				
	$('#executionDiv').append('<div id="denumerator">7</div>');
	$('#denumerator').css("position", "absolute")
					.css("left", "336px")
					.css("top", "36px")
					.css("font-size", 20)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
		//			.css("border", "solid")
					.css("width", "20x");
					
	$('#executionDiv').append('<p id="execEq2" >=</p>');
	$('#execEq2').css("position", "absolute")
				.css("left", "492px")
				.css("top", "20px")
				.css("font-size", 24)
				//.css("font-family", "Helvetica Neue");
	
	$('#executionDiv').append('<div id="numerator2">196</div>');
	$('#numerator2').css("position", "absolute")
					.css("left", "512px")
					.css("top", "6px")
					.css("font-size", 20)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "320x");
					
	$('#executionDiv').append('<div id="execLine2"></div>');
	$('#execLine2').css("position","absolute")
				.css("left", "510px")
				.css("top", "30px")
				.css("width", "40px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#executionDiv').append('<div id="denumerator2">7</div>');
	$('#denumerator2').css("position", "absolute")
					.css("left", "524px")
					.css("top", "36px")
					.css("font-size", 20)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "20x");
					
	$('#executionDiv').append('<p id="execEq3" >=</p>');
	$('#execEq3').css("position", "absolute")
				.css("left", "556px")
				.css("top", "20px")
				.css("font-size", 24)
				//.css("font-family", "Helvetica Neue");
				
	$('#executionDiv').append('<div id="lastNum">28</div>');
	$('#lastNum').css("position", "absolute")
					.css("left", "576px")
					.css("top", "20px")
					.css("font-size", 20)
			//		//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
			//		.css("border", "solid")
					.css("width", "20x");
	
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
	

	
	console.log("contextOpacity: "+exampleHelper.contextOpacity);
	
	exampleHelper.animate({
		style: {
			mondayOpacity: 1
		},
		duration: 400,
		delay: 3000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			tuesdayOpacity: 1
		},
		duration: 400,
		delay: 3400,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			wednesdayOpacity: 1
		},
		duration: 400,
		delay: 3800,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			thursdayOpacity: 1
		},
		duration: 400,
		delay: 4200,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fridayOpacity: 1
		},
		duration: 400,
		delay: 4600,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			saturdayOpacity: 1
		},
		duration: 400,
		delay: 5000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			sundayOpacity: 1
		},
		duration: 400,
		delay: 5400,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			averageTextOpacity: 1
		},
		duration: 1000,
		delay: 6000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execEqOpacity: 1
		},
		duration: 1000,
		delay: 7000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execLineOpacity: 1
		},
		duration: 1000,
		delay: 8000,
		animationType: 'easeInEaseOut'
	});
	
		
	exampleHelper.animate({
		style: {
			firstNOpacity: 1
		},
		duration: 500,
		delay: 9000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			secondNOpacity: 1
		},
		duration: 500,
		delay: 9500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			thirdNOpacity: 1
		},
		duration: 500,
		delay: 10000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fourthNOpacity: 1
		},
		duration: 300,
		delay: 10500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fifthNOpacity: 1
		},
		duration: 500,
		delay: 11000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			sixthNOpacity: 1
		},
		duration: 500,
		delay: 11500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			seventhNOpacity: 1
		},
		duration: 500,
		delay: 12000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			denumeratorOpacity: 1
		},
		duration: 1000,
		delay: 12500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execEq2Opacity: 1
		},
		duration: 1000,
		delay: 13500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execLine2Opacity: 1
		},
		duration: 1000,
		delay: 14500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			numerator2Opacity: 1
		},
		duration: 1000,
		delay: 15500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			denumerator2Opacity: 1
		},
		duration: 1000,
		delay: 16500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			execEq3Opacity: 1
		},
		duration: 1000,
		delay: 17500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			lastNumOpacity: 1
		},
		duration: 1000,
		delay: 18500,
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
	
	for(i = 0; i < 4; i++) {
		datas[i] = Math.floor(Math.random() * 19) + 2;
	}
	do {
		datas[i] = Math.floor(Math.random() * 19) + 2;
		total = datas[0] + datas[1] + datas[2] + datas[3] + datas[4];
	}
	while(total % 5 != 0)

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
					.css("top", "30px")
					.css("font-size", 22)
		//			//.css("font-family", "Helvetica Neue")
					.css("text-align", "center")
					.css("width", "100px");
					
	$('#questionDiv').append('<p id="equal1" >=</p>');
		$('#equal1').css("position", "absolute")
				.css("left", "120px")
				.css("top", "46px")
				.css("font-size", 22)
			//	//.css("font-family", "Helvetica Neue");
				
	//fraction1 = new Path.Fraction(154, 89, null, null, 18, 14.2);
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
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "20px")
					.css("text-align", "center");
					
	$('#textInput1').addClass('input');
			
	$('#questionDiv').append('<p id="plus1" >+</p>');
		$('#plus1').css("position", "absolute")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("left", "182px")
					.css("top", "28px");
	
	$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput2').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "200px")
					.css("top", "20px")
					.css("text-align", "center");
					
	$('#textInput2').addClass('input');
		
	$('#questionDiv').append('<p id="plus2" >+</p>');
		$('#plus2').css("position", "absolute")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("left", "236px")
					.css("top", "28px");
	
	$('#questionDiv').append('<input id="textInput3" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput3').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "254px")
					.css("top", "20px")
					.css("text-align", "center");
	
	$('#textInput3').addClass('input');
		
	$('#questionDiv').append('<p id="plus3" >+</p>');
		$('#plus3').css("position", "absolute")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("left", "290px")
					.css("top", "28px");
		
	$('#questionDiv').append('<input id="textInput4" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput4').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "308px")
					.css("top", "20px")
					.css("text-align", "center");
	
	$('#textInput4').addClass('input');
		
	$('#questionDiv').append('<p id="plus4" >+</p>');
		$('#plus4').css("position", "absolute")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("left", "344px")
					.css("top", "28px");
	
	$('#questionDiv').append('<input id="textInput5" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput5').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
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
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "254px")
					.css("top", "62px")
					.css("text-align", "center");
	
	$('#textInput6').addClass('input');
		
	$('#questionDiv').append('<p id="equal2" >=</p>');
		$('#equal2').css("position", "absolute")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("left", "120px")
					.css("top", "158px");

	
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
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
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
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "146px")
					.css("top", "174px")
					.css("text-align", "center");
	
	$('#textInput8').addClass('input');
		
	$('#questionDiv').append('<p id="equal3" >=</p>');
		$('#equal3').css("position", "absolute")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("left", "190px")
					.css("top", "158px");
		
	$('#questionDiv').append('<input id="textInput9" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
	$('#textInput9').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 22)
					//.css("font-family", "Helvetica Neue")
					.css("position", "absolute")
					.css("left", "210px")
					.css("top", "150px")
					.css("text-align", "center");
	$('#textInput9').addClass('input');
					
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "204px")
					.css("top", "260px")
					.css("width", "200px")
					.css("height", "30px");
					
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
					
	$('#checkBtn').show();
	
	$(container).append('<button id="nextBtn" class="next_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "66px");
	$('#nextBtn').hide();
	
	
						
	for(i = 0; i < 5; i++) {
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
		if(i != 4) {
			$('#data'+i).html(""+datas[i]+",");
		}
		else {
			$('#data'+i).html(""+datas[i]);
		}
	}
	
	var trial = 0;				
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if(trial == 2)
			return;
			
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
			answer6 = 5;
			answer7 = total;
			answer8 = 5;
			answer9 = total/5;
			
			// correct answer state
			if(ans1 == answer1 && ans2 == answer2 && ans3 == answer3 && ans4 == answer4 && ans5 == answer5 && ans6 == answer6 &&
			ans7 == answer7 && ans8 == answer8 && ans9 == answer9) {
				$('#statuss').get(0).className = "status_true";
				$('#statuss').html("Tebrikler!");
				$('#checkBtn').hide();
				$('#nextBtn').show();
			}
			// second wrong answer state
			else if(trial == 1) {
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Olmadı!");
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
	
	// checkBtn click func. -> call submit	
		$('#checkBtn').click(submit);
		
	// nextBtn click func. -> remove whole html elements and call interaction init again
	$('#nextBtn').click(function() {
			$('#questionDiv').remove();
			$('#datasDiv').remove();
			$('#checkBtn').remove();
			$('#nextBtn').remove();
			$('#answer').remove();
			$('#statuss').remove();
			$('#line1').remove();
			$('#line2').remove();
			Interaction.init(container);
		});
	
	$('.inp').keydown(function() {
		$('#statuss').html("");
	});
		
	// enter keypress action
	$("#textInput1").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput2").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput3").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput4").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput5").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput6").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput7").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput8").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
	
	$("#textInput9").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
}
