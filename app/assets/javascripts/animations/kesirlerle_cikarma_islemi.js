var Animation = {
	init:function(container){
		var fillColor = "#FFDEAD"
		var rect4 = new Path.SegmentedRectangle(560.5, 10.5, 20, 80, 1, 1, 1, fillColor);
		rect4.opacity = 0;
		var rect5 = new Path.SegmentedRectangle(500.5, 10.5, 60, 80, 1, 1, 1, fillColor)
		rect5.opacity = 0;
		var rect1 = new Path.SegmentedRectangle(60.5, 10.5, 160, 80, 2, 1, 1, fillColor);
		rect1.opacity = 0;
		var rect2 = new Path.SegmentedRectangle(280.5, 10.5, 160, 80, 8, 1, 1, fillColor);
		rect2.opacity = 0;
		var rect3 = new Path.SegmentedRectangle(500.5, 10.5, 160, 80, 8, 1, 0, fillColor);
		rect3.opacity = 0;

		var arrow = new Path.OneSidedArrow(new Point(450, 50), new Point(490, 50), 10, 30);
		arrow.opacity = 0;
		
		var dashedLinesGroup = new Group();
		for(i = 0; i < 7; i++){
			var dashedLine = new Path.Line(new Point(80.5+(i*20),10.5), new Point(80.5+(i*20),90.5))
			dashedLine.strokeColor = "black";
			dashedLine.dashArray = [3, 2];
			dashedLinesGroup.addChild(dashedLine);
		}
		dashedLinesGroup.opacity = 0;
			
		var pluss = new PointText(new Point(253, 64));
		pluss.justification = "center";
		pluss.fillColor = "black";
		pluss.fontSize = 26;
		pluss.content = "-";
		pluss.opacity = 0;
		
		var arr = new Group(); 
		var arroww = new Path.OneSidedArrow(new Point(50, 164), new Point(690, 164), 10, 30);
		var arroww2 = new Path.OneSidedArrow(new Point(690, 164), new Point(691, 164), 10, 30);
		arroww.rotate(180);
		arr.addChild(arroww);
		arr.addChild(arroww2);
		arr.opacity = 0;
		
		var bigDots = new Group();
		var bigDot1 = new Path.Circle(new Point(90.5, 164.5), 4);
		bigDot1.strokeColor = "black";
		bigDot1.fillColor = "black";
		var bigDot2 = new Path.Circle(new Point(650.5, 164.5), 4);
		bigDot2.strokeColor = "black";
		bigDot2.fillColor = "black";
		bigDots.addChild(bigDot1);
		bigDots.addChild(bigDot2);
		bigDots.opacity = 0;
		
		var smallDots = new Group();
		for(i = 0; i < 7; i++){
			var smallDot = new Path.Circle(new Point(160.5+(70*i), 164.5), 2);
			smallDot.strokeColor = "black";
			smallDot.fillColor = "black";
			smallDots.addChild(smallDot);
		}
		smallDots.opacity = 0;
		
		var arcGroup = new Group();
		var arc = new Path.Arc(new Point(360, 159), new Point(346, 150), new Point(310, 154));
		arc.strokeColor = "black";
		var linee1 = new Path.Line(new Point(310,154), new Point(314,146));
		linee1.strokeColor = "black";
		var linee2 = new Path.Line(new Point(310,154), new Point(320,156));
		linee2.strokeColor = "black";
		arcGroup.addChild(arc);
		arcGroup.addChild(linee1);
		arcGroup.addChild(linee2);
		arcGroup.opacity = 0;
		
		$(container).append('<div id="frac22"><p id="nom22">1</p><div id="line22"></div><p id="denom22">2</p></div>')
		
		$('#frac22').css({
				position: "absolute",
				left: "0px",
				top: "0px"
			});
		
		$('#line22')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "148px",
				top: "123px",
			});
		$('#nom22')
			.css({
				position: "absolute",
				left: "140px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom22')
			.css({
				position: "absolute",
				left: "140px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#frac22').css("opacity", 0);
		$('#frac22').delay(2000).animate({opacity: 1}, 1000)
					.delay(1000).animate({opacity: 0}, 1000)
		
		$(container).append('<div id="frac33"><p id="nom33">1 x 4</p><div id="line33"></div><p id="denom33">2 x 4</p></div>')
		
		$('#frac33').css({
				position: "absolute",
				left: "0px",
				top: "0px"
			});
		
		$('#line33')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "34px",
				height: "1px",
				position: "absolute",
				left: "139px",
				top: "123px",
			});
		$('#nom33')
			.css({
				position: "absolute",
				left: "140px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom33')
			.css({
				position: "absolute",
				left: "140px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#frac33').css("opacity", 0);
		$('#frac33').delay(4000).animate({opacity: 1}, 1000)
					.delay(1000).animate({opacity: 0}, 1000)

		
		$(container).append('<div id="frac44"><p id="nom44">4</p><div id="line44"></div><p id="denom44">8</p></div>')
		
		$('#frac44').css({
				position: "absolute",
				left: "0px",
				top: "0px"
			});
		
		$('#line44')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "148px",
				top: "123px",
			});
		$('#nom44')
			.css({
				position: "absolute",
				left: "140px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom44')
			.css({
				position: "absolute",
				left: "140px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		$('#frac44').css("opacity", 0);
		$('#frac44').delay(6000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac55"><p id="nom55">1</p><div id="line55"></div><p id="denom55">8</p></div>')
		
		$('#frac55').css({
				position: "absolute",
				left: "0px",
				top: "0px"
			});
		
		$('#line55')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "368px",
				top: "123px",
			});
		$('#nom55')
			.css({
				position: "absolute",
				left: "360px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom55')
			.css({
				position: "absolute",
				left: "360px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		$('#frac55').css("opacity", 0)
		$('#frac55').delay(2000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac66"><p id="nom66">4</p><div id="line66"></div><p id="denom66">8</p><p id="pls">-</p><p id="nom666">1</p><div id="line666"></div><p id="denom666">8</p><p id="eqq">=</p><p id="nom6666">3</p><div id="line6666"></div><p id="denom6666">8</p></div>')
		
		$('#line66')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "558px",
				top: "123px",
			});
		$('#nom66')
			.css({
				position: "absolute",
				left: "550px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom66')
			.css({
				position: "absolute",
				left: "550px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#pls')
			.css({
				position: "absolute",
				left: "578px",
				top:"117px",	
			});
			
		$('#line666')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "590px",
				top: "123px",
			});
		$('#nom666')
			.css({
				position: "absolute",
				left: "582px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom666')
			.css({
				position: "absolute",
				left: "582px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#eqq')
			.css({
				position: "absolute",
				left: "610px",
				top:"117px",	
			});
		
		$('#line6666')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "622px",
				top: "123px",
			});
		$('#nom6666')
			.css({
				position: "absolute",
				left: "614px",
				top:"108px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom6666')
			.css({
				position: "absolute",
				left: "614px",
				top:"126px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#frac66').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000)
		$('#line6666').css("opacity", 0).delay(12500).animate({opacity: 1}, 1000)
		$('#nom6666').css("opacity", 0).delay(12500).animate({opacity: 1}, 1000)
		$('#denom6666').css("opacity", 0).delay(12500).animate({opacity: 1}, 1000)
		
		$(container).append('<p id="zerro">0</p>')
		$('#zerro').css({
			position: "absolute",
			left: "99px",
			top: "150px",
			fontSize: 24,
		//	fontWeight: "bold"
		});
		$('#zerro').css("opacity", 0).delay(16000).animate({opacity: 1}, 1000)
		
		$(container).append('<p id="onne">1</p>')
		$('#onne').css({
			position: "absolute",
			left: "657px",
			top: "150px",
			fontSize: 24,
		//	fontWeight: "bold"
		});
		$('#onne').css("opacity", 0).delay(16000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac222"><p id="nom222">1</p><div id="line222"></div><p id="denom222">2</p></div>')
		
		$('#line222')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "378px",
				top: "159px",
			});
		$('#nom222')
			.css({
				position: "absolute",
				left: "370px",
				top:"144px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom222')
			.css({
				position: "absolute",
				left: "370px",
				top:"162px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#frac222').css("opacity", 0);
		$('#frac222').delay(18000).animate({opacity: 1}, 1000)
					 .delay(2000).animate({opacity: 0}, 1000)
		
		$(container).append('<div id="frac333"><p id="nom333">4</p><div id="line333"></div><p id="denom333">8</p></div>')
		
		$('#line333')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "378px",
				top: "159px",
			});
		$('#nom333')
			.css({
				position: "absolute",
				left: "370px",
				top:"144px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom333')
			.css({
				position: "absolute",
				left: "370px",
				top:"162px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		
		$('#frac333').css("opacity", 0);
		$('#frac333').delay(21000).animate({opacity: 1}, 1000)
		
		
		$(container).append('<div id="frac444"><p id="nom444">3</p><div id="line444"></div><p id="denom444">8</p></div>')
		
		$('#line444')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "308px",
				top: "159px",
			});
		$('#nom444')
			.css({
				position: "absolute",
				left: "300px",
				top:"144px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom444')
			.css({
				position: "absolute",
				left: "300px",
				top:"162px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		$('#frac444').css("opacity", 0);
		$('#frac444').delay(22000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac555"><p id="nom555">1</p><div id="line555"></div><p id="denom555">8</p></div>')
		
		$('#line555')
			.css({
				padding: 0,
				borderTop: "2px solid",
				width: "14px",
				height: "1px",
				position: "absolute",
				left: "343px",
				top: "143px",
			});
		$('#nom555')
			.css({
				position: "absolute",
				left: "335px",
				top:"128px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"
			});
		$('#denom555')
			.css({
				position: "absolute",
				left: "335px",
				top:"146px",
				textAlign: "center",
				width: "30px",
			//	border: "solid"	
			});
		$('#frac555').css("opacity", 0)
		$('#frac555').delay(19000).animate({opacity: 1}, 1000)
		
		
		
		rect1.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 1000,
			animationType: 'easeOut'
		});
		
		rect2.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 1000,
			animationType: 'easeOut'
		});
		
		dashedLinesGroup.animate({
			style: {
				opacity:1
			},
			duration: 1000,
			delay: 6000,
			animationType: 'easeInEaseOut'
		});
		
		pluss.animate({
			style:{
				opacity:1
			},
			duration: 1000,
			delay: 8000,
			animationType: 'easeInEaseOut'
		});
		
		arrow.animate({
			style:{
				opacity: 1
			},
			duration: 1000,
			delay: 8000,
			animationType: 'easeInEaseOut'
		
		});
		
		rect3.animate({
			style:{
				opacity: 1
			},
			duration: 1000,
			delay: 9000,
			animationType: 'easeInEaseOut'
		});
		
		rect4.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 10000,
			animationType: 'easeInEaseOut'
		});
		
		rect4.animate({
			style:{
				opacity: 0,
			},
			duration: 1000,
			delay: 12000,
			animationType: 'easeInEaseOut'
		});
		
		
		rect5.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 10000,
			animationType: 'easeInEaseOut'
		});
		
		arr.animate({
			style:{
				opacity: 1,
			},
			duration:1000,
			delay:14000,
			animationType: 'easeInEaseOut'
		});
		
		bigDots.animate({
			style:{
				opacity: 1,
			},
			duration:1000,
			delay:15000,
			animationType: 'easeInEaseOut'
		});
		
		smallDots.animate({
			style:{
				opacity: 1,
			},
			duration:1000,
			delay:17000,
			animationType: 'easeInEaseOut'
		});
		
		arcGroup.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay:19000,
			animationType: 'easeInEaseOut'
		});
	}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki çıkarma işlemini yapınız ve kontrol ediniz.');
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
			});
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			if(Interaction.questionDiv)
				$(Interaction.questionDiv).remove();
			Interaction.flushInputs();
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '152px',
				top: "22px",
				fontSize: '20px', 
			});
			
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '152px',
				top: "66px",
				fontSize: '20px', 
			});
			
			$(Interaction.inputs[0]).attr('maxlength', '2')
			$(Interaction.inputs[1]).attr('maxlength', '2')
			
			
			Interaction.inputs[0].style.color = "black";
			Interaction.inputs[1].style.color = "black";
			Interaction.questionDiv = document.createElement('div')
			Interaction.questionDiv.id = 'questionDiv';
			$(Interaction.container).append(Interaction.questionDiv);
			$(Interaction.questionDiv)
				.html('<div id="firstNum"></div><p id="plus">-</p><p id="nom2"></p><div id="line2"></div><p id="denom2"></p><p id="eq">=</p><div id="line3">')
				.append(Interaction.inputs[0])
				.append(Interaction.inputs[1])
				.css({
					width: '200px',
					height: '120px',
					position:'absolute',
					left: '160px',
					top: '40px',
					fontSize: '24px',
					textAlign: 'left',
			//		border: "solid"
				});
			$('#plus')
				.css({
					position: "absolute",
					left: "62px",
					top:"48px",	
				});
			$('#line2')
				.css({
					padding: 0,
					borderTop: "2px solid",
					width: "30px",
					height: "1px",
					position: "absolute",
					left: "84px",
					top: "60px",
				});
			$('#nom2')
				.css({
					position: "absolute",
					left: "83px",
					top:"34px",
					textAlign: "center",
					width: "30px",
				//	border: "solid"
				});
			$('#denom2')
				.css({
					position: "absolute",
					left: "82px",
					top:"64px",
					textAlign: "center",
					width: "30px",
				//	border: "solid"	
				});
			$('#eq')
				.css({
					position: "absolute",
					left: "126px",
					top:"49px",	
				});
			$('#line3')
				.css({
					padding: 0,
					borderTop: "2px solid",
					width: "32px",
					height: "1px",
					position: "absolute",
					left: "152px",
					top: "60px",
				});
			
			Interaction.randomize = Math.floor(Math.random() * 3);	 // operation type
			Interaction.randomize2 = Math.floor(Math.random() * 2);	// fraction type
			Interaction.randomize3 = Math.floor(Math.random() * 2);	// denominator relationship
			Interaction.randomize4 = Math.floor(Math.random() * 2 )   // small fraction
			var a, b, c, d, wh;
		//	if(0){
			if(Interaction.randomize % 3 == 0){ // two fraction
				$('#firstNum').html('<p id="nom1"></p><div id="line1"></div><p id="denom1"></p>')
				
				$('#line1')
					.css({
						padding: 0,
						borderTop: "2px solid",
						width: "30px",
						height: "1px",
						position: "absolute",
						left: "20px",
						top: "60px",
					});
				$('#nom1')
					.css({
						position: "absolute",
						left: "19px",
						top:"34px",
						textAlign: "center",	
						width: "30px",
					});
				$('#denom1')
					.css({
						position: "absolute",
						left: "18px",
						top:"64px",
						textAlign: "center",
						width: "30px",
					});
					if(Interaction.randomize2 % 2 == 0){ // simple fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							a = Math.floor(Math.random() * 10) + 3;
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							do
								b = Math.floor(Math.random() * 11) + 1;
								while(b >= a)
							do
								c = Math.floor(Math.random() * 11) + 1;
								while(c >= a || c == b)
							
							Interaction.nom1 = Math.max(b,c);
							Interaction.nom2 = Math.min(b,c);
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							a = Math.floor(Math.random() * 6) + 2
							b = a * 2;
							do
								c = Math.floor(Math.random() * 5) + 1;
								while(c >= a)
							if(Interaction.randomize4 % 2 == 0){
							do
								d = Math.floor(Math.random() * 13) + 1;
								while(d >= b || d >= 2*c)
							}
							else{
							do
								d = Math.floor(Math.random() * 9) + 1;
								while(d >= b || d <= 2*c)
							}
							
							if(Interaction.randomize4 % 2 == 0){
								Interaction.denom1 = a;
								Interaction.denom2 = b;
								Interaction.nom1 = c;
								Interaction.nom2 = d;
							}
							else{
								Interaction.denom1 = b;
								Interaction.denom2 = a;
								Interaction.nom1 = d;
								Interaction.nom2 = c;
							}		
						}
					}
					else{ // compound fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							a = Math.floor(Math.random() * 6) + 2
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							do
								b = Math.floor(Math.random() * 12) + 4;
								while(b <= a || b % a == 0)
							do
								c = Math.floor(Math.random() * 12) + 4;
								while(c <= a || c % a == 0 || c == b)
							
							Interaction.nom1 = Math.max(b,c);
							Interaction.nom2 = Math.min(b,c);
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							a = Math.floor(Math.random() * 4) + 2;
							b = a * 2;
							do
								c = Math.floor(Math.random() * 5) + 3;
								while(c <= a || c % a == 0)
							if(Interaction.randomize4 % 2 == 0){
								do
									d = Math.floor(Math.random() * 12) + 5;
									while(d <= b || d % b == 0 || d >= 2*c)
							}
							else{
								do
									d = Math.floor(Math.random() * 12) + 5;
									while(d <= b || d % b == 0 || d <= 2*c)
							}
							
							if(Interaction.randomize4 % 2 == 0){
								Interaction.denom1 = a;
								Interaction.denom2 = b;
								Interaction.nom1 = c;
								Interaction.nom2 = d;
							}
							else{
								Interaction.denom1 = b;
								Interaction.denom2 = a;
								Interaction.nom1 = d;
								Interaction.nom2 = c;
							}		
						}
					}
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.nom2D).html(Interaction.nom2);
					$(Interaction.denom2D).html(Interaction.denom2);	
			}
	//		else if(0){
			else if(Interaction.randomize % 3 == 1){ // two fraction -> one of them with wh
				$('#firstNum').html('<p id="wh1"></p><p id="nom1"></p><div id="line1"></div><p id="denom1"></p>')
				$('#wh1')
					.css({
						position: "absolute",
						left: "-20px",
						top: "48px",
						textAlign: "right",
						width: "30px",
					});
				$('#line1')
					.css({
						padding: 0,
						borderTop: "2px solid",
						width: "30px",
						height: "1px",
						position: "absolute",
						left: "20px",
						top: "60px",
					});
				$('#nom1')
					.css({
						position: "absolute",
						left: "19px",
						top:"34px",
						textAlign: "center",	
						width: "30px",	
					});
				$('#denom1')
					.css({
						position: "absolute",
						left: "18px",
						top:"64px",
						textAlign: "center",
						width: "30px",
					});
				
				if(Interaction.randomize2 % 2 == 0){ // simple fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 10) + 3;
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							Interaction.wh = wh2;
							do
								b = Math.floor(Math.random() * 11) + 1;
								while(b >= a)
							do
								c = Math.floor(Math.random() * 11) + 1;
								while(c >= a )
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 6) + 2
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 1;
								while(c >= a)
							do
								d = Math.floor(Math.random() * 7) + 3;
								while(d >= b)
							
							Interaction.denom1 = a;
							Interaction.denom2 = b;
							Interaction.nom1 = c;
							Interaction.nom2 = d;
							Interaction.wh = wh2;
							
						}
					}
					else{ // compound fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 6) + 2
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							Interaction.wh = wh2;
							do
								b = Math.floor(Math.random() * 12) + 4;
								while(b <= a || b % a == 0)
							do
								c = Math.floor(Math.random() * 12) + 4;
								while(c <= a || c % a == 0)
							
							Interaction.nom1 = Math.max(b,c);
							Interaction.nom2 = Math.min(b,c);
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 4) + 2;
							Interaction.wh = wh2;
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 3;
								while(c <= a || c % a == 0)
							do
								d = Math.floor(Math.random() * 7) + 5;
								while(d <= b || d % b == 0)
							
							
							Interaction.denom1 = a;
							Interaction.denom2 = b;
							Interaction.nom1 = c;
							Interaction.nom2 = d;		
						}
					}
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					Interaction.whD = $('#wh1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.nom2D).html(Interaction.nom2);
					$(Interaction.denom2D).html(Interaction.denom2);
					$(Interaction.whD).html(Interaction.wh);
			}
			else{ // one natural number and one fraction
				$('#firstNum').html('<p id="wh1"></p>')
				$('#wh1')
					.css({
						position: "absolute",
						left: "26px",
						top: "48px",
						textAlign: "right",
						width: "30px",
					});
				
				wh2 = Math.floor(Math.random() * 4) + 1;
				Interaction.wh = wh2;
				if(Interaction.randomize2 % 2 == 0){ // simple fraction
					a = Math.floor(Math.random() * 9) + 2
					do
						b = Math.floor(Math.random() * 9) + 1;
						while(b >= a)
					Interaction.nom2 = b;
					Interaction.denom2 = a;
				}
				else{ // compound fraction
					a = Math.floor(Math.random() * 6) + 2;
					do
						b = Math.floor(Math.random() * 12) + 3;
						while(b <= a || b % a == 0 || b / a >= 5)
					Interaction.nom2 = b;
					Interaction.denom2 = a;
					do
						wh2 = Math.floor(Math.random() * 4 + 2);
						while(wh2 * a < b)
					Interaction.wh = wh2;
				}
				
				Interaction.nom2D = $('#nom2').get(0);
				Interaction.denom2D = $('#denom2').get(0);
				Interaction.whD = $('#wh1').get(0);
				
				$(Interaction.nom2D).html(Interaction.nom2);
				$(Interaction.denom2D).html(Interaction.denom2);
				$(Interaction.whD).html(Interaction.wh);
			}
		},
	isAnswerCorrect : function(values){
			if(Interaction.randomize % 3 == 0){
				Interaction.maxDenom = Math.max(Interaction.denom1, Interaction.denom2);
				Interaction.answer1 = Interaction.nom1 * (Interaction.maxDenom/Interaction.denom1) - Interaction.nom2 * (Interaction.maxDenom/Interaction.denom2);
				Interaction.answer2 = Interaction.maxDenom;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
			else if(Interaction.randomize % 3 == 1){
				Interaction.maxDenom = Math.max(Interaction.denom1, Interaction.denom2);
				Interaction.answer1 = ((Interaction.maxDenom * Interaction.wh)+(Interaction.nom1 * (Interaction.maxDenom/Interaction.denom1)) - Interaction.nom2 * (Interaction.maxDenom/Interaction.denom2));
				Interaction.answer2 = Interaction.maxDenom;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
			else{
				Interaction.answer1 = (Interaction.wh * Interaction.denom2) - Interaction.nom2;
				Interaction.answer2 = Interaction.denom2;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
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
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.');
			Interaction.inputs[0].value = Interaction.answer1;
			Interaction.inputs[1].value = Interaction.answer2;
			Interaction.inputs[0].style.color = "green";
			Interaction.inputs[1].style.color = "green";
		},
}