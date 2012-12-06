<<<<<<< HEAD
function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {
    init:function(container){
        Animation.container = container;

        $(container).append('<div id="animDiv"></div>')
        $('#animDiv').css("position", "absolute")
            .css("top", "60px")
            .css("left", "40px")
            .css("width", "280px")
            .css("height", "100px")
            .css("font-size", 24)
        $(container).append('<div id="animDiv2"></div>')
        $('#animDiv2').css("position", "absolute")
            .css("top", "60px")
            .css("left", "440px")
            .css("width", "280px")
            .css("height", "100px")
            .css("font-size", 24)
        // five square
        $(container).append('<p id="five">5</p>')
        $('#five').css("position", "absolute")
            .css("top", "30px")
            .css("left", "390px")
            .css("font-size", 24)
            .css("opacity", 0)
            .delay(1000)
            .animate({opacity:1}, 1000)

        $('#animDiv').append('<p id="fiveT">5\'in karesi:</p>')
        $('#fiveT').css("position", "absolute")
            .css("top", "22px")
            .css("left", "98px")
            .css("opacity", 0)
            .delay(2000)
            .animate({opacity:1}, 1000)

        $('#animDiv').append('<p id="fiveE">5 x 5</p>')
        $('#fiveE').css("position", "absolute")
            .css("top", "56px")
            .css("left", "96px")
            .css("font-size", 26)
            .css("font-weight", "bold")
            .css("opacity", 0)
            .delay(3000)
            .animate({opacity:1}, 1000)
        $('#animDiv').append('<p id ="eq2">=</p>');
        $('#eq2').css("position", "absolute")
            .css("left", "162px")
            .css("top", "56px")
            .css("font-size", 26)
            .css("font-weight", "bold")
            .css("opacity", 0)
            .delay(5000)
            .animate({opacity:1}, 1000)

        $('#animDiv').append('<div id ="fs"><p id="f">5</p><p id="s">2</p></div>');
        $('#fs').css("position", "absolute")
            .css("left", "184px")
            .css("top", "56px")
            .css("font-size", 26)
            .css("font-weight", "bold")
        //	.css("opacity", 0)
        $('#f').css("position", "absolute")
            .css("left", "0px")
            .css("top", "0px")
            .css("opacity", 0)
            .delay(5000)
            .animate({opacity:1}, 1000)
        $('#s').css("position", "absolute")
            .css("left", "-78px") // 16px
            .css("top", "36px")	// -6px
            .css("font-size", 16)  // font-size 16
            .css("font-weight", "bold")
            .css("color", "red")
            .css("opacity", 0)
            .delay(6000).animate({left: '16px', top:'-6px', opacity: 4}, 1500)

        $('#animDiv').append('<img id="curv1" src="/assets/animations/curve.png" />')
        $('#curv1').css("position", "absolute")
            .css("top", "80px")
            .css("left", "96px")
            .css("width", "58px")
            .css("height", "14px")
            .css("opacity", 0)
            .delay(4000)
            .animate({opacity:1}, 1000)
        $('#animDiv').append('<p id="tw">2 tane</p>')
        $('#tw').css("position", "absolute")
            .css("top", "94px")
            .css("left", "108px")
            .css("font-size", 12)
            .css("opacity", 0)
            .delay(4000)
            .animate({opacity:1}, 1000)

        // five cube

        $('#animDiv2').append('<p id="fiveT2">5\'in küpü:</p>')
        $('#fiveT2').css("position", "absolute")
            .css("top", "22px")
            .css("left", "96px")
            .css("opacity", 0)
            .delay(8500)
            .animate({opacity:1}, 1000)

        $('#animDiv2').append('<p id="fiveE2">5 x 5 x 5</p>')
        $('#fiveE2').css("position", "absolute")
            .css("top", "56px")
            .css("left", "76px")
            .css("font-size", 26)
            .css("font-weight", "bold")
            .css("opacity", 0)
            .delay(9500)
            .animate({opacity:1}, 1000)
        $('#animDiv2').append('<p id ="eq3">=</p>');
        $('#eq3').css("position", "absolute")
            .css("left", "182px")
            .css("top", "56px")
            .css("font-size", 26)
            .css("font-weight", "bold")
            .css("opacity", 0)
            .delay(11500)
            .animate({opacity:1}, 1000)

        $('#animDiv2').append('<div id ="fs2"><p id="f2">5</p><p id="s2">3</p></div>');
        $('#fs2').css("position", "absolute")
            .css("left", "204px")
            .css("top", "56px")
            .css("font-size", 26)
            .css("font-weight", "bold")
        $('#f2').css("position", "absolute")
            .css("left", "0px")
            .css("top", "0px")
            .css("opacity", 0)
            .delay(11500)
            .animate({opacity:1}, 1000)
        $('#s2').css("position", "absolute")
            .css("left", "-98px")
            .css("top", "36px")
            .css("font-size", 16)
            .css("font-weight", "bold")
            .css("color", "red")
            .css("opacity", 0)
            .delay(12500).animate({left: '16px', top:'-6px', opacity: 4}, 1500)

            .delay(0).animate({opacity:1, left: '16px', top: '-6px', fontSize: '16px', fontWeight: 'bold'}, 2000)
        $('#animDiv2').append('<img id="curv2" src="/assets/animations/curve.png" />')
        $('#curv2').css("position", "absolute")
            .css("top", "80px")
            .css("left", "78px")
            .css("width", "96px")
            .css("height", "14px")
            .css("opacity", 0)
            .delay(10500)
            .animate({opacity:1}, 1000)
        $('#animDiv2').append('<p id="th">3 tane</p>')
        $('#th').css("position", "absolute")
            .css("top", "94px")
            .css("left", "108px")
            .css("font-size", 12)
            .css("opacity", 0)
            .delay(10500)
            .animate({opacity:1}, 1000)

        var fCirc = new Path.Circle(new Point(382, 28), 14);
        fCirc.strokeColor = "black";
        fCirc.opacity = 0;

        var fLine = new Path.Line(new Point(382.5, 50.5), new Point(382.5, 180.5));
        fLine.strokeColor = "grey";
        fLine.dashArray = [3,2];
        fLine.opacity = 0;

        fCirc.animate({
            style: {
                opacity: 1,
            },
            duration: 1000,
            delay: 1000,
            animationType: 'easeInEaseOut'
        });

        fLine.animate({
            style: {
                opacity: 1,
            },
            duration:1000,
            delay: 1000,
            animationType: 'easeInEaseOut'
        });

        Main.animationFinished(15000);

    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendStatus({
            bottom:'50px',
            right:'160px'
        });
        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
        })


        Interaction.setRandomGenerator(2)
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;

        if($('#questionDiv'))
            $('#questionDiv').remove();
        Interaction.flushInputs();

        if(randomNumber == 0){
            Main.setObjective('Yandaki ifadenin açılımını yazınız.');
            Interaction.num = Util.randomInteger(2, 11);
            Interaction.power = Util.randomInteger(2, 4);

            // creating neccessary html element
            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "154px")
                .css("top", "52px")
                .css("width", "266")
                .css("height", "100")
            $('#questionDiv').append('<p id ="num"></p>');
            $('#num').css("position", "absolute")
                .css("right", "232px")
                .css("top", "40px")
                .css("font-size", 28)
                .css("text-align", "right")
            $('#questionDiv').append('<p id ="power"></p>');
            $('#power').css("position", "absolute")
                .css("left", "34px")
                .css("top", "30px")
                .css("font-size", 16)
                .css("font-weight", "bold")
            $('#questionDiv').append('<p id ="eq">=</p>');
            $('#eq').css("position", "absolute")
                .css("left", "50px")
                .css("top", "40px")
                .css("font-size", 28)
                .css("text-align", "right")

            $('#num').html(Interaction.num);
            $('#power').html(Interaction.power);

            Interaction.appendInput({
                width: '116px',
                height: '30px',
                textAlign: 'center',
                position: 'absolute',
                left: '72px',
                top: "39px",
                fontSize: '24px',
            }, false);
            $(Interaction.inputs[0]).attr('maxlength', '8')
            $('#questionDiv').append(Interaction.inputs[0]);

        }
        else{
            Main.setObjective('Yandaki ifadeyi üslü biçimde yazınız.');

            Interaction.num = Util.randomInteger(2, 11);
            Interaction.power = Util.randomInteger(2, 4);

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "154px")
                .css("top", "52px")
                .css("width", "266")
                .css("height", "100")
            $('#questionDiv').append('<p id="ques"></p>');
            $('#ques').css("position", "absolute")
                .css("top", "40px")
                .css("right", "200px")
                .css("text-align", "right")
                .css("font-size", 28)
            $('#questionDiv').append('<p id ="eq">=</p>');
            $('#eq').css("position", "absolute")
                .css("left", "70px")
                .css("top", "40px")
                .css("font-size", 28)
                .css("text-align", "right")

            var quesStr;
            if(Interaction.power == 2)
                quesStr = ""+Interaction.num+"x"+Interaction.num;
            else
                quesStr = ""+Interaction.num+"x"+Interaction.num+"x"+Interaction.num;
            $('#ques').html(quesStr);

            Interaction.appendInput({
                width: '32px',
                height: '30px',
                textAlign: 'center',
                position: 'absolute',
                left: '90px',
                top: "36px",
                fontSize: '24px',
            });

            Interaction.appendInput({
                width: '22px',
                height: '20px',
                textAlign: 'center',
                position: 'absolute',
                left: '124px',
                top: "14px",
                fontSize: '16px',
            });

            $(Interaction.inputs[0]).attr('maxlength', '2');
            $(Interaction.inputs[1]).attr('maxlength', '2');
            $('#questionDiv').append(Interaction.inputs[0]);
            $('#questionDiv').append(Interaction.inputs[1]);

        }


    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){
        if(Interaction.randomNumber == 0){
            var ans1 = $(Interaction.inputs[0]).val();
            var ans1 = ans1.replace(/ /g, "");
            if(ans1.search("x") == -1){
                Interaction.setStatus("Lütfen çarpma işlemini \'x\' işareti ile gösteriniz.", 'alert')
                return false;
            }
            else
                return true;
        }
        else
            return true;

    },
    isAnswerCorrect : function(value){
        if(Interaction.randomNumber == 0){
            var ans1 = value.replace(/ /g, "");
            if(Interaction.power == 2)
                Interaction.answer1 = ""+Interaction.num+"x"+Interaction.num;
            else
                Interaction.answer1 = ""+Interaction.num+"x"+Interaction.num+"x"+Interaction.num;

            if(ans1 == Interaction.answer1)
                return true;
            else
                return false;
        }
        else{
            if(value[0] == Interaction.num && value[1] == Interaction.power)
                return true;
            else
                return false;

        }

    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        if(Interaction.randomNumber == 0){
            Interaction.input.value = Interaction.answer1;
            Interaction.input.style.color = "green";

        }
        else{
            Interaction.inputs[0].value = Interaction.num;
            Interaction.inputs[1].value = Interaction.power;
            Interaction.inputs[0].style.color = "green";
            Interaction.inputs[1].style.color = "green";

        }
    }
=======
// JavaScript Document

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Animation.init = function(container){
	Animation.container = container;
	
	$(container).append('<div id="animDiv"></div>')
	$('#animDiv').css("position", "absolute")
				.css("top", "60px")
				.css("left", "40px")
				.css("width", "280px")
				.css("height", "100px")
				.css("font-size", 24)
	$(container).append('<div id="animDiv2"></div>')
	$('#animDiv2').css("position", "absolute")
				.css("top", "60px")
				.css("left", "440px")
				.css("width", "280px")
				.css("height", "100px")
				.css("font-size", 24)
	// five square			
	$(container).append('<p id="five">5</p>')
	$('#five').css("position", "absolute")
				.css("top", "30px")
				.css("left", "390px")
				.css("font-size", 24)
				.css("opacity", 0)
				.delay(1000)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<p id="fiveT">5\'in karesi:</p>')
	$('#fiveT').css("position", "absolute")
				.css("top", "22px")
				.css("left", "98px")
				.css("opacity", 0)
				.delay(2000)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<p id="fiveE">5 x 5</p>')
	$('#fiveE').css("position", "absolute")
				.css("top", "56px")
				.css("left", "96px")
				.css("font-size", 26)
				.css("font-weight", "bold")
				.css("opacity", 0)
				.delay(3000)
				.animate({opacity:1}, 1000)
	$('#animDiv').append('<p id ="eq2">=</p>');
	$('#eq2').css("position", "absolute")
				.css("left", "162px")
				.css("top", "56px")
				.css("font-size", 26)
				.css("font-weight", "bold")
				.css("opacity", 0)
				.delay(5000)
				.animate({opacity:1}, 1000)
	
	$('#animDiv').append('<div id ="fs"><p id="f">5</p><p id="s">2</p></div>');
	$('#fs').css("position", "absolute")
				.css("left", "184px")
				.css("top", "56px")
				.css("font-size", 26)
				.css("font-weight", "bold")
			//	.css("opacity", 0)
	$('#f').css("position", "absolute")
				.css("left", "0px")
				.css("top", "0px")
				.css("opacity", 0)
				.delay(5000)
				.animate({opacity:1}, 1000)
	$('#s').css("position", "absolute")
				.css("left", "-78px") // 16px
				.css("top", "36px")	// -6px
				.css("font-size", 16)  // font-size 16
				.css("font-weight", "bold")
				.css("color", "red")
				.css("opacity", 0)
				.delay(6000).animate({left: '16px', top:'-6px', opacity: 4}, 1500)
	
	$('#animDiv').append('<img id="curv1" src="/assets/animations/curve.png" />')	
	$('#curv1').css("position", "absolute")
				.css("top", "80px")
				.css("left", "96px")
				.css("width", "58px")
				.css("height", "14px")
				.css("opacity", 0)
				.delay(4000)
				.animate({opacity:1}, 1000)
	$('#animDiv').append('<p id="tw">2 tane</p>')
	$('#tw').css("position", "absolute")
				.css("top", "94px")
				.css("left", "108px")
				.css("font-size", 12)
				.css("opacity", 0)
				.delay(4000)
				.animate({opacity:1}, 1000)
	
	// five cube
	
	$('#animDiv2').append('<p id="fiveT2">5\'in küpü:</p>')
	$('#fiveT2').css("position", "absolute")
				.css("top", "22px")
				.css("left", "96px")
				.css("opacity", 0)
				.delay(8500)
				.animate({opacity:1}, 1000)
	
	$('#animDiv2').append('<p id="fiveE2">5 x 5 x 5</p>')
	$('#fiveE2').css("position", "absolute")
				.css("top", "56px")
				.css("left", "76px")
				.css("font-size", 26)
				.css("font-weight", "bold")
				.css("opacity", 0)
				.delay(9500)
				.animate({opacity:1}, 1000)
	$('#animDiv2').append('<p id ="eq3">=</p>');
	$('#eq3').css("position", "absolute")
				.css("left", "182px")
				.css("top", "56px")
				.css("font-size", 26)
				.css("font-weight", "bold")
				.css("opacity", 0)
				.delay(11500)
				.animate({opacity:1}, 1000)
	
	$('#animDiv2').append('<div id ="fs2"><p id="f2">5</p><p id="s2">3</p></div>');
	$('#fs2').css("position", "absolute")
				.css("left", "204px")
				.css("top", "56px")
				.css("font-size", 26)
				.css("font-weight", "bold")
	$('#f2').css("position", "absolute")
				.css("left", "0px")
				.css("top", "0px")
				.css("opacity", 0)
				.delay(11500)
				.animate({opacity:1}, 1000)
	$('#s2').css("position", "absolute")
				.css("left", "-98px")
				.css("top", "36px")
				.css("font-size", 16)
				.css("font-weight", "bold")
				.css("color", "red")
				.css("opacity", 0)
				.delay(12500).animate({left: '16px', top:'-6px', opacity: 4}, 1500)
				
				.delay(0).animate({opacity:1, left: '16px', top: '-6px', fontSize: '16px', fontWeight: 'bold'}, 2000)
	$('#animDiv2').append('<img id="curv2" src="/assets/animations/curve.png" />')	
	$('#curv2').css("position", "absolute")
				.css("top", "80px")
				.css("left", "78px")
				.css("width", "96px")
				.css("height", "14px")
				.css("opacity", 0)
				.delay(10500)
				.animate({opacity:1}, 1000)
	$('#animDiv2').append('<p id="th">3 tane</p>')
	$('#th').css("position", "absolute")
				.css("top", "94px")
				.css("left", "108px")
				.css("font-size", 12)
				.css("opacity", 0)
				.delay(10500)
				.animate({opacity:1}, 1000)
	
	var fCirc = new Path.Circle(new Point(382, 28), 14);
	fCirc.strokeColor = "black";
	fCirc.opacity = 0;
	
	var fLine = new Path.Line(new Point(382.5, 50.5), new Point(382.5, 180.5));
	fLine.strokeColor = "grey";
	fLine.dashArray = [3,2];
	fLine.opacity = 0;
	
	fCirc.animate({
		style: {
			opacity: 1,
		},
		duration: 1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	fLine.animate({
		style: {
			opacity: 1,
		},
		duration:1000,
		delay: 1000,
		animationType: 'easeInEaseOut'
	});
	
	
}

// interaction init
Interaction.init = function(container){
	Interaction.container = container;
	
	var randomize = Math.floor(Math.random() * 2) + 1;
	
	if(randomize == 1){
		Main.setObjective('Yandaki ifadenin açılımını yazınız.');
		
		var num = Math.floor(Math.random() * 9) + 2;
		var power = Math.floor(Math.random() * 2) + 2;
		
		// creating neccessary html element
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "52px")
						.css("width", "266")
						.css("height", "100")
		$('#questionDiv').append('<p id ="num"></p>');
		$('#num').css("position", "absolute")
				.css("right", "232px")
				.css("top", "40px")
				.css("font-size", 28)
				.css("text-align", "right")
		$('#questionDiv').append('<p id ="power"></p>');
		$('#power').css("position", "absolute")
				.css("left", "34px")
				.css("top", "30px")
				.css("font-size", 16)
				.css("font-weight", "bold")
		$('#questionDiv').append('<p id ="eq">=</p>');
		$('#eq').css("position", "absolute")
				.css("left", "50px")
				.css("top", "40px")
				.css("font-size", 28)
				.css("text-align", "right")
		
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="8"/>');
		$('#textInput1').css("width", "116px")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 24)
						.css("position", "absolute")
						.css("left", "72px")
						.css("top", "39px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		
		$('#num').html(num);
		$('#power').html(power);
		
	}
	else{
		Main.setObjective('Yandaki ifadeyi üslü biçimde yazınız.');
		
		var num = Math.floor(Math.random() * 9) + 2;
		var power = Math.floor(Math.random() * 2) + 2;
		
		// creating neccessary html element
		$(container).append('<div id="questionDiv"></div>');
		$('#questionDiv').css("position", "absolute")
						.css("left", "154px")
						.css("top", "52px")
						.css("width", "266")
						.css("height", "100")
		$('#questionDiv').append('<p id="ques"></p>');
		$('#ques').css("position", "absolute")
						.css("top", "40px")
						.css("right", "200px")
						.css("text-align", "right")
						.css("font-size", 28)
		$('#questionDiv').append('<p id ="eq">=</p>');
		$('#eq').css("position", "absolute")
				.css("left", "70px")
				.css("top", "40px")
				.css("font-size", 28)
				.css("text-align", "right")
		$('#questionDiv').append('<input id="textInput1" class="inp" type="text" pattern="[0-9]*" maxlength="2"/>');
		$('#textInput1').css("width", "32")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "30")
						.css("font-size", 24)
						.css("position", "absolute")
						.css("left", "90px")
						.css("top", "36px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		$('#questionDiv').append('<input id="textInput2" class="inp" type="text" pattern="[0-9]*" maxlength="1"/>');
		$('#textInput2').css("width", "22")
						.css("box-sizing","border-box")
						.css("padding", "0")
						.css("height", "20")
						.css("font-size", 16)
						.css("font-weight", "bold")
						.css("position", "absolute")
						.css("left", "122px")
						.css("top", "16px")
						.css("text-align", "center");					
		$('#textInput1').addClass('input');
		
		var quesStr;
		if(power == 2)
			quesStr = ""+num+"x"+num;
		else
			quesStr = ""+num+"x"+num+"x"+num;
		$('#ques').html(quesStr);
			
	}
	
	$(container).append('<button id="checkBtn" class="control_button"></button>');
	$('#checkBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "30px");
//	$('#checkBtn').hide();
	
	$(container).append('<button id="nextBtn" class="next_button"></button>');
	$('#nextBtn').css("position", "absolute")
					.css("bottom", "30px")
					.css("right", "30px");
	$('#nextBtn').hide();
	
	$(container).append('<div id="statuss" class="status_true"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "144px")
					.css("top", "258px")
					.css("width", "240px")
					.css("text-align", "center")
					.css("height", "30px");
	
	var trial = 0;
	var deactivate = 0;				
	submit = function() {
		// if this is the 3rd trial or more do nothing
		if(trial == 2)
			return;
		
		var ans1, ans2;
		var answer1, answer2;
		if(randomize == 1){
			ans1 = $('#textInput1').val();
			ans1 = ans1.replace(/ /g, "");
			if(power == 2)
				answer1 = ""+num+"x"+num;
			else
				answer1 = ""+num+"x"+num+"x"+num;

			if(ans1 == ""){
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucukları doldurunuz.");
			}
			else {
				if(ans1.search("x") == -1){
					$('#statuss').get(0).className = "status_alert";
					$('#statuss').html("Lütfen çarpma işlemini \'x\' işareti ile gösteriniz.");	
				}
				else{
					if(ans1 == answer1){
						$('#statuss').get(0).className = "status_true";
						$('#statuss').html("Tebrikler!");
						$('#checkBtn').hide();
						$('#nextBtn').show();
						deactivate = 1;
						$('.inp').each(function(index, element) {
							$(this).get(0).onkeydown = function(event){
													if(event.keyCode != 13)
														return false;
													$("#nextBtn").click();
												}   
					  });
					}
					else if(trial == 1){	
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
						$('#textInput1').val(answer1);
						$('#textInput1').css("color", inputBoxAnswerColor);
						$('#checkBtn').hide();
						$('#nextBtn').show();
						trial += 1;
						deactivate = 1;
						$('.inp').each(function(index, element) {
            			$(this).get(0).onkeydown = function(event){
												if(event.keyCode != 13)
													return false;
												$("#nextBtn").click();
											}   
          		  	});
					}
					else if(trial == 0){		
						trial += 1;
						$('#statuss').get(0).className = "status_false";
						$('#statuss').html("Tekrar deneyiniz.");
					}
				}
			}
		}
		else{
			ans1 = $('#textInput1').val();
			ans2 = $('#textInput2').val();
			answer1 = num;
			answer2 = power;
			if(ans1 == "" || ans2 == "" || !Util.isNumber(ans1) || !Util.isNumber(ans2)) {
				$('#statuss').get(0).className = "status_alert";
				$('#statuss').html("Lütfen kutucuklara sayı giriniz.");	
			}
			else{
				if(ans1 == answer1 && ans2 == answer2){
					$('#statuss').get(0).className = "status_true";
					$('#statuss').html("Tebrikler!");
					$('#checkBtn').hide();
					$('#nextBtn').show();
					deactivate = 1;
					$('.inp').each(function(index, element) {
						$(this).get(0).onkeydown = function(event){
												if(event.keyCode != 13)
													return false;
												$("#nextBtn").click();
											}   
				  });
				}
				else if(trial == 1){	
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
					$('#textInput1').val(answer1);
					$('#textInput2').val(answer2);
					$('#textInput1').css("color", inputBoxAnswerColor);
					$('#textInput2').css("color", inputBoxAnswerColor);
					$('#checkBtn').hide();
					$('#nextBtn').show();
					trial += 1;
					deactivate = 1;
					$('.inp').each(function(index, element) {
						$(this).get(0).onkeydown = function(event){
												if(event.keyCode != 13)
													return false;
												$("#nextBtn").click();
											}   
				  });
				}
				else if(trial == 0){		
					trial += 1;
					$('#statuss').get(0).className = "status_false";
					$('#statuss').html("Tekrar deneyiniz.");
				}
			}
		}
	}
	
	// checkBtn click func. -> call submit	
	$('#checkBtn').click(submit);
	
	$('#nextBtn').click(function() {
		var a = $('#interaction_canvas')
		$(Interaction.container).html("");
		$(Interaction.container).html(a);
		Interaction.init(container);
		
	});
	
	$('.inp').keydown(function() {
		if(deactivate == 0)
			$('#statuss').html("");
	});
		
	// enter keypress action
	$(".inp").keyup(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
>>>>>>> origin/abdullah-dev
}