var Animation = {
	init:function(container){
		var fillColor = "#99f"
		var rect4 = new Path.SegmentedRectangle(60.5, 10.5, 80, 80, 1, 1, 1, fillColor);
		rect4.opacity = 0;
		var rect5 = new Path.SegmentedRectangle(280.5, 10.5, 40, 80, 1, 1, 1, fillColor)
		rect5.opacity = 0;
		var rect1 = new Path.SegmentedRectangle(60.5, 10.5, 160, 80, 2, 1, 1, fillColor);
		var rect2 = new Path.SegmentedRectangle(280.5, 10.5, 160, 80, 8, 1, 2, fillColor);
		var rect3 = new Path.SegmentedRectangle(500.5, 10.5, 160, 80, 8, 1, 0, fillColor);

		var arrow = new Path.OneSidedArrow(new Point(450, 50), new Point(490, 50), 10, 30);
		
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
		pluss.content = "+";
		var firstFracGroup = new Group();
		var firstNom = new PointText(new Point(224, 120));
		firstNom.justification = "center";
		firstNom.fillColor = "black";
		firstNom.content = "1";
		firstNom.fontSize = 12;
		var firstDenom = new PointText(new Point(225, 146));
		firstDenom.justification = "center";
		firstDenom.fillColor = "black";
		firstDenom.content = "2";
		firstDenom.fontSize = 12;
		var firstLine = new Path.Line(new Point(218, 126), new Point(232, 126));
		firstLine.strokeColor = "black";
		firstLine.strokeWidth = 2;
		firstFracGroup.addChild(firstNom);
		firstFracGroup.addChild(firstDenom);
		firstFracGroup.addChild(firstLine);
		firstFracGroup.position = new Point(30, 50)
		
		firstFracGroup.animate({
			style:{
			},
			duration:500,
			delay:1000,
			
			callback:function(){
				this.children[0].content = "1 x 4";
				this.children[1].content = "2 x 4";
				this.children[2].scale(2.4);
			},
			animationType: 'easeInEaseOut',
		});
		
		firstFracGroup.animate({
			style:{
			},
			duration:500,
			delay:2000,
			
			callback:function(){
				this.children[0].content = "4";
				this.children[1].content = "8";
				this.children[2].scale(0.42);
			},
			animationType: 'easeInEaseOut',
		});
		
		dashedLinesGroup.animate({
			style: {
				opacity:1
			},
			duration: 1000,
			delay: 1000,
			animationType: 'easeInEaseOut'
		});
		
			
		rect4.animate({
			style:{
				opacity: 0.5,
				position: new Point(300.5, 40.5)
			},
			duration: 2000,
			delay: 2000,
			animationType: 'easeIn'
		});
		
		rect4.animate({
			style:{
				opacity: 1,
				position: new Point(540.5, 50.5)
			},
			duration: 2000,
			delay: 4000,
			animationType: 'easeOut'
		});
		
		rect5.animate({
			style:{
				opacity: 0.5,
				position: new Point(480.5, 90.5)
			},
			duration: 2000,
			delay: 2000,
			animationType: 'linear'
		});
		
		rect5.animate({
			style:{
				opacity: 1,
				position: new Point(600.5, 50.5)
			},
			duration: 2000,
			delay: 4000,
			animationType: 'linear'
		});
	}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki toplama işlemini yapınız ve kontrol ediniz.');
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
				.html('<div id="firstNum"></div><p id="plus">+</p><p id="nom2"></p><div id="line2"></div><p id="denom2"></p><p id="eq">=</p><div id="line3">')
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
							a = Math.floor(Math.random() * 8) + 3;
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							do
								b = Math.floor(Math.random() * 9) + 1;
								while(b >= a)
							do
								c = Math.floor(Math.random() * 9) + 1;
								while(c >= a)
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							a = Math.floor(Math.random() * 4) + 2
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 1;
								while(c >= a)
							do
								d = Math.floor(Math.random() * 7) + 3;
								while(d >= b)
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
								while(c <= a || c % a == 0)
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							a = Math.floor(Math.random() * 4) + 2;
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 3;
								while(c <= a || c % a == 0)
							do
								d = Math.floor(Math.random() * 7) + 5;
								while(d <= b || d % b == 0)
							
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
							a = Math.floor(Math.random() * 8) + 3;
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							Interaction.wh = wh2;
							do
								b = Math.floor(Math.random() * 9) + 1;
								while(b >= a)
							do
								c = Math.floor(Math.random() * 9) + 1;
								while(c >= a)
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 4) + 2
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 1;
								while(c >= a)
							do
								d = Math.floor(Math.random() * 7) + 3;
								while(d >= b)
							if(Interaction.randomize4 % 2 == 0){
								Interaction.denom1 = a;
								Interaction.denom2 = b;
								Interaction.nom1 = c;
								Interaction.nom2 = d;
								Interaction.wh = wh2;
							}
							else{
								Interaction.denom1 = b;
								Interaction.denom2 = a;
								Interaction.nom1 = d;
								Interaction.nom2 = c;
								Interaction.wh = wh2;
							}		
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
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
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
						b = Math.floor(Math.random() * 12) + 4;
						while(b <= a || b % a == 0)
					Interaction.nom2 = b;
					Interaction.denom2 = a;
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
				Interaction.answer1 = Interaction.nom1 * (Interaction.maxDenom/Interaction.denom1) + Interaction.nom2 * (Interaction.maxDenom/Interaction.denom2);
				Interaction.answer2 = Interaction.maxDenom;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
			else if(Interaction.randomize % 3 == 1){
				Interaction.maxDenom = Math.max(Interaction.denom1, Interaction.denom2);
				Interaction.answer1 = (Interaction.nom1 * (Interaction.maxDenom/Interaction.denom1) + Interaction.nom2 * (Interaction.maxDenom/Interaction.denom2)) + (Interaction.maxDenom * Interaction.wh);
				Interaction.answer2 = Interaction.maxDenom;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
			else{
				Interaction.answer1 = Interaction.nom2 + (Interaction.wh * Interaction.denom2);
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