// JavaScript Document

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


// animation init
Animation.init = function(container){
	Animation.container = container;
	$(container).append('<img id="bookstore" src="/assets/animations/tablo/bookstore.png" />');
	$('#bookstore').css("width", "180px")
				.css("height", "100px")
				.css("position", "absolute")
				.css("left", "60px")
				.css("top", "30px");
	
	$(container).append('<div id="infoText">Bir kitapevinde hafta boyunca satılan kitapların tablosu yapılmıştır.</div>')
	$('#infoText').css("position", "absolute")
					.css("top", "134px")
					.css("left", "60px")
					.css("width", "180px")
					.css("height", "60px")
					.css("text-align", "center")
					.css("font-size", 14);
	
	var table2Group = new Group();
	
	var titleRect = new Path.Rectangle(new Point(300.5, 10.5), new Size(100, 30))
	titleRect.strokeColor = "#a9a9a9";
	titleRect.fillColor = "#E6E6E6";
	table2Group.addChild(titleRect);
	
	var titleLine = new Path.Line(new Point(300.5, 10.5), new Point(400.5, 40.5));
	titleLine.strokeColor = "#a9a9a9";
	table2Group.addChild(titleLine);
	
	// day Rects
	for(i = 0; i < 6; i++) {
		var daysRect = new Path.Rectangle(new Point(300.5, 40.5+(20*i)), new Size(100, 20))
		daysRect.strokeColor = "#a9a9a9";
		if(i % 2 == 1)
			daysRect.fillColor = "#E6E6E6";
		table2Group.addChild(daysRect);
	}
	
	// category Rects
	for(i = 0; i < 4; i++) {
		var categoriesRect = new Path.Rectangle(new Point(400.5+(60*i), 10.5), new Size(60, 30));
		categoriesRect.strokeColor = "#a9a9a9";
		categoriesRect.fillColor = "#E6E6E6";
		table2Group.addChild(categoriesRect);
	}
	
	// datas Rects
	
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 6; j++) {
			var datas2Rect = new Path.Rectangle(new Point(400.5+(60*i), 40.5+(20*j)), new Size(60, 20));
			datas2Rect.strokeColor = "#a9a9a9";
			if(j % 2 == 1)
				datas2Rect.fillColor = "#E6E6E6";
			table2Group.addChild(datas2Rect)
		}
	}
	
	$(container).append('<div id="table2Div"></div>');
	$('#table2Div').css("position", "absolute")
					.css("left", "310px")
					.css("top", "26px")
					.css("width", "344px")
					.css("height", "152px")
			//		.css("border", "solid")
	
	$('#table2Div').append('<p id="daysText" >Günler</p>');
	$('#daysText').css("position", "absolute")
				.css("left", "22px")
				.css("top", "14px")
				.css("font-size", 12)
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="categoriesText" >Kitaplar</p>');
	$('#categoriesText').css("position", "absolute")
				.css("left", "58px")
				.css("top", "0px")
				.css("font-size", 12)
				.css("text-align", "center");
				
	// days Texts
	$('#table2Div').append('<p id="mondayText" >Pazartesi</p>');
	$('#mondayText').css("position", "absolute")
				.css("left", "20px")
				.css("top", "30px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="tuesdayText" >Salı</p>');
	$('#tuesdayText').css("position", "absolute")
				.css("left", "20px")
				.css("top", "51px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="wednesdayText" >Çarşamba</p>');
	$('#wednesdayText').css("position", "absolute")
				.css("left", "20px")
				.css("top", "70px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="thursdayText" >Perşembe</p>');
	$('#thursdayText').css("position", "absolute")
				.css("left", "20px")
				.css("top", "90px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="fridayText" >Cuma</p>');
	$('#fridayText').css("position", "absolute")
				.css("left", "20px")
				.css("top", "110px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="saturdayText" >Cumartesi</p>');
	$('#saturdayText').css("position", "absolute")
				.css("left", "20px")
				.css("top", "130px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	
	// categories Texts
	$('#table2Div').append('<p id="novelText" >Roman</p>');
	$('#novelText').css("position", "absolute")
				.css("left", "112px")
				.css("top", "10px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="storyText" >Hikâye</p>');
	$('#storyText').css("position", "absolute")
				.css("left", "172px")
				.css("top", "10px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="poemText" >Şiir</p>');
	$('#poemText').css("position", "absolute")
				.css("left", "242px")
				.css("top", "10px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	$('#table2Div').append('<p id="otherText" >Diğer</p>');
	$('#otherText').css("position", "absolute")
				.css("left", "298px")
				.css("top", "10px")
				.css("font-size", 14)
				.css("font-weight", "bold")
				.css("text-align", "center");
	
	var datas2 = new Array(6, 9, 2, 5, 4, 5, 0, 7, 7, 2, 1, 4, 3, 2, 3, 6,
							7, 5, 2, 2, 5, 8, 4, 9);
	
	for(i = 0; i < 6; i++)
	{
		var topStr = ""+(32+20*i)+"px";
		for(j = 0; j < 4; j++)
		{
			var leftStr = ""+(136+60*j)+"px";
			var id = 'ddata'+(i*4+j);
			$('#table2Div').append('<p id="'+id+'"></p>');
			
			$('#'+id).html(datas2[i*4+j]);
			$('#'+id).css("position", "absolute")
						.css("left", leftStr)
						.css("top", topStr)
						.css("font-size", 14)
						.css("opacity",0);
			$('#'+id).delay(7500+(500*i)+250*(i*4+j)).animate({opacity:1},250)
		}
	}
	
	table2Group.opacity = 0;
	
	exampleHelper = {
		bookstoreOpacity: 0,
		infoTextOpacity: 0,
		daysTextOpacity: 0,
		categoriesTextOpacity: 0,
		mondayTextOpacity: 0,
		tuesdayTextOpacity: 0,
		wednesdayTextOpacity: 0,
		thursdayTextOpacity: 0,
		fridayTextOpacity: 0,
		saturdayTextOpacity: 0,
		novelTextOpacity: 0,
		storyTextOpacity: 0,
		poemTextOpacity: 0,
		otherTextOpacity: 0,	
	};
	
	exampleHelper.animate = Item.prototype.animate;
	Animation.onFrame = function(event){
		$('#bookstore').css("opacity", exampleHelper.bookstoreOpacity);
		$('#infoText').css("opacity", exampleHelper.infoTextOpacity);
		$('#daysText').css("opacity", exampleHelper.daysTextOpacity);
		$('#categoriesText').css("opacity", exampleHelper.categoriesTextOpacity);
		$('#novelText').css("opacity", exampleHelper.novelTextOpacity);
		$('#storyText').css("opacity", exampleHelper.storyTextOpacity);
		$('#poemText').css("opacity", exampleHelper.poemTextOpacity);
		$('#otherText').css("opacity", exampleHelper.otherTextOpacity);
		$('#mondayText').css("opacity", exampleHelper.mondayTextOpacity);
		$('#tuesdayText').css("opacity", exampleHelper.tuesdayTextOpacity);
		$('#wednesdayText').css("opacity", exampleHelper.wednesdayTextOpacity);
		$('#thursdayText').css("opacity", exampleHelper.thursdayTextOpacity);
		$('#fridayText').css("opacity", exampleHelper.fridayTextOpacity);
		$('#saturdayText').css("opacity", exampleHelper.saturdayTextOpacity);
	}
	
	exampleHelper.animate({
		style: {
			bookstoreOpacity: 1
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			infoTextOpacity: 1
		},
		duration: 1000,
		delay: 2000,
		animationType: 'easeInEaseOut'
	});
	
	table2Group.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			categoriesTextOpacity: 1
		},
		duration: 500,
		delay: 4000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			daysTextOpacity: 1
		},
		duration: 500,
		delay: 4500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			novelTextOpacity: 1
		},
		duration: 500,
		delay: 5000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			storyTextOpacity: 1
		},
		duration: 500,
		delay: 5500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			poemTextOpacity: 1
		},
		duration: 500,
		delay: 6000,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			otherTextOpacity: 1
		},
		duration: 500,
		delay: 6500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			mondayTextOpacity: 1
		},
		duration: 500,
		delay: 7000,
		animationType: 'easeInEaseOut'
	});
	
		exampleHelper.animate({
		style: {
			tuesdayTextOpacity: 1
		},
		duration: 500,
		delay: 8500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			wednesdayTextOpacity: 1
		},
		duration: 500,
		delay: 10000,
		animationType: 'easeInEaseOut'
	});
	
		exampleHelper.animate({
		style: {
			thursdayTextOpacity: 1
		},
		duration: 500,
		delay: 11500,
		animationType: 'easeInEaseOut'
	});
	
	exampleHelper.animate({
		style: {
			fridayTextOpacity: 1
		},
		duration: 500,
		delay: 13000,
		animationType: 'easeInEaseOut'
	});
	
		exampleHelper.animate({
		style: {
			saturdayTextOpacity: 1
		},
		duration: 500,
		delay: 14500,
		animationType: 'easeInEaseOut'
	});
}



// interaction init
Interaction.init = function(container){
	Interaction.container = container;
	// set interaction title
	Main.setObjective('Yanda bir okulda bazı spor dallarını seçen öğrenci sayıları tabloda verilmiştir. Tabloya göre soruları cevaplayınız.');
	
	var questions = new Array();
	questions[0] = "5. sınıftan Yüzmeyi seçen kaç öğrenci var?";
	questions[1] = "Voleybolu seçen toplam kaç öğrenci var?";
	questions[2] = "5. sınıfta kaç öğrenci var?";
	
	var datas = new Array();
	for(i = 0; i < 12; i++) {
		datas[i] = Math.floor(Math.random() * 11) + 5;
	}
	
	// Create Table
	var tableGroup = new Group();
	
	var titleClassRect = new Path.Rectangle(new Point(20.5, 40.5), new Size(110, 60));
	titleClassRect.strokeColor = "black";
	titleClassRect.fillColor = "#F7BE81";
	tableGroup.addChild(titleClassRect);
	
	// class Rects
	for(i = 0; i < 4; i++) {
		var classesRect = new Path.Rectangle(new Point(20.5, 100.5 +(30*i)), new Size(110, 30))
		classesRect.strokeColor = "black";
		classesRect.fillColor = "#F7BE81";
		tableGroup.addChild(classesRect);
	}
	
	// sports Rects
	for(i = 0; i < 3; i++) {
		var sportsRect = new Path.Rectangle(new Point(130.5+(70*i), 40.5), new Size(70, 60))
		sportsRect.strokeColor = "black";
		sportsRect.fillColor = "#F7BE81";
		tableGroup.addChild(classesRect);
	}
	
	// datas Rects
	for(i = 0; i < 3; i++) {
		for(j = 0; j < 4; j++) {
			var datasRect = new Path.Rectangle(new Point(130.5+(70*i), 100.5+(30*j)), new Size(70, 30));
			datasRect.strokeColor = "black";
		//	datasRect.fillColor = "#F7BE81";
			tableGroup.addChild(datasRect)
		}
	}
	
	// line
	var classLine = new Path.Line(new Point(20.5, 40.5), new Point(130.5, 100.5));
	classLine.strokeColor = "black";
	tableGroup.addChild(classLine);
	
	// table's texts
	
	$(container).append('<div id="tableDiv"></div>');
	$('#tableDiv').css("position", "absolute")
					.css("left", "16px")
					.css("top", "36px")
					.css("width", "324px")
					.css("height", "184px")
			//		.css("border", "solid")
	
	// title Texts
	$('#tableDiv').append('<p id="classesText" >Sınıflar</p>');
	$('#classesText').css("position", "absolute")
				.css("left", "18px")
				.css("top", "38px")
				.css("font-size", 12)
				.css("text-align", "center");
	
	$('#tableDiv').append('<p id="sportsText" >Spor Dalları</p>');
	$('#sportsText').css("position", "absolute")
				.css("left", "38px")
				.css("top", "8px")
				.css("font-size", 12)
				.css("text-align", "center");
	
	// classes Texts
	$('#tableDiv').append('<p id="fifthClassText" >5. Sınıf</p>');
	$('#fifthClassText').css("position", "absolute")
				.css("left", "18px")
				.css("top", "72px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	$('#tableDiv').append('<p id="sixthClassText" >6. Sınıf</p>');
	$('#sixthClassText').css("position", "absolute")
				.css("left", "18px")
				.css("top", "102px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	$('#tableDiv').append('<p id="seventhClassText" >7. Sınıf</p>');
	$('#seventhClassText').css("position", "absolute")
				.css("left", "18px")
				.css("top", "132px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	$('#tableDiv').append('<p id="eighthClassText" >8. Sınıf</p>');
	$('#eighthClassText').css("position", "absolute")
				.css("left", "18px")
				.css("top", "162px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	// sports Texts
	
	$('#tableDiv').append('<p id="swimmingText" >Yüzme</p>');
	$('#swimmingText').css("position", "absolute")
				.css("left", "122px")
				.css("top", "28px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	$('#tableDiv').append('<p id="volleyballText" >Voleybol</p>');
	$('#volleyballText').css("position", "absolute")
				.css("left", "188px")
				.css("top", "28px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	$('#tableDiv').append('<p id="athletismText" >Atletizm</p>');
	$('#athletismText').css("position", "absolute")
				.css("left", "260px")
				.css("top", "28px")
				.css("font-size", 16)
				.css("text-align", "center");
				
	// question div
	$(container).append('<p id="question" ></p>');
	$('#question').css("position", "absolute")
				.css("left", "360px")
				.css("top", "60px")
				.css("width", "190px")
				.css("font-size", 16)
				.css("text-align", "center");
	
	// input box
	$(container).append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 16)
					.css("position", "absolute")
					.css("left", "430px")
					.css("top", "130px")
					.css("text-align", "center");
					
	$('#textInput1').addClass('input');
	
	// statuss text
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "160px")
					.css("top", "260px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center")
	
	// buttons				
	$(container).append('<button id="checkBtn" class="control_button">Kontrol</button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "40px");
	
	$(container).append('<button id="nextBtn" class="next_button">Sonraki</button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "20px")
					.css("right", "40px");
	$('#nextBtn').hide();
	
	for(i = 0; i < 4; i++)
	{
		var topStr = ""+(74+28*i)+"px";
		for(j = 0; j < 3; j++)
		{
			if(datas[i*3+j] >= 10) {
				var leftStr = ""+(142+64*j)+"px";
			}
			else {
				var leftStr = ""+(146+64*j)+"px";
			}
			$('#tableDiv').append('<p id="data'+i*6+j+'"></p>');
			$('#data'+i*6+j).html(datas[i*3+j]);
			$('#data'+i*6+j).css("position", "absolute")
						.css("left", leftStr)
						.css("top", topStr)
						.css("font-size", 16)
		}
	}
	
	nextQuestion();
	
	var questionIndex;
	function nextQuestion()
	{
		$('#nextBtn').hide();
		$('#checkBtn').show();
		$('#statuss').html("");
		$('#textInput1').val("");
		$('#textInput1').css("color", inputBoxColor);
		var randQuestion = Math.floor(Math.random() * 3);
		questionIndex = randQuestion;
		$('#question').html("");
		$('#question').html(questions[randQuestion]);
		var trial2 = 0;
		trial = trial2;	
	}
	
	var trial;
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if (trial == 2)
			return;
			
		ans1 = $('#textInput1').val();
		// check whether input field is empty or not (also given input is integer or not)
		if(ans1 == "" || !Util.isInteger(ans1)) {
			$('#statuss').get(0).className = "status_alert";
			$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
		}
		else {
			// generate answer wrt. given question
			var answer = 0;
			switch(questionIndex) {
				case 0:
					answer = datas[0];
					break;
				case 1:
					answer = datas[1] + datas[4] + datas[7] + datas[10]
					break;
				case 2:
					answer = datas[0] + datas[1] + datas[2];
					break;
			}
			
			// correct answer state
			if(ans1 == answer) {
				$('#statuss').get(0).className = "status_true";
				$('#statuss').html("Tebrikler!");
				$('#checkBtn').hide();
				$('#nextBtn').show();
			}
			// second wrong answer state
			else if(trial == 1) {
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
				$('#textInput1').val(answer);
				$('#textInput1').css("color", inputBoxAnswerColor);
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
	
	
	$('#checkBtn').click(submit);
	
	$('#nextBtn').click(function() {
		nextQuestion();
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
}
