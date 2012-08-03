function __Styles(){
	
	placeHolderColor = "#bfe8ef";
}

var Animation = {
	init:function(container){
			Animation.container = container;
			
			var fillColor = "#FFDEAD"
			var rect1 = new Path.SegmentedRectangle(182.5, 10.5, 20, 80, 1, 8, 5, fillColor);
			rect1.rotate(180);
		//	rect1.opacity = 0;
			var rect2 = new Path.SegmentedRectangle(282.5, 10.5, 20, 80, 1, 4, 1, fillColor)
			rect2.rotate(180);
		//	rect2.opacity = 0;
			var rect3 = new Path.SegmentedRectangle(382.5, 10.5, 20, 80, 1, 8, 6, fillColor)
			rect3.rotate(180);
			var rect4 = new Path.SegmentedRectangle(482.5, 10.5, 20, 80, 1, 8, 3, fillColor)
			rect4.rotate(180);
			var rect5 = new Path.SegmentedRectangle(582.5, 10.5, 20, 80, 1, 2, 1, fillColor)
			rect5.rotate(180);
			
			Animation.numericalAxis = new Group();
			var arr = new Group();
			var arrow = new Path.OneSidedArrow(new Point(110, 136), new Point(670, 136), 10, 30)
			var arrow2 = new Path.OneSidedArrow(new Point(670, 136), new Point(671, 136), 10, 30);
			arrow.rotate(180);
			arr.addChild(arrow);
			arr.addChild(arrow2);
			
			var bigDots = new Group();
			var bigDot1 = new Path.Circle(new Point(150, 136), 6);
			bigDot1.fillColor = "black";
			var bigDot2 = new Path.Circle(new Point(630, 136), 6);
			bigDot2.fillColor = "black";
			bigDots.addChild(bigDot1);
			bigDots.addChild(bigDot2);
			
			var pieceLength = 480/8;
			
			Interaction.smallDots = new Group();
			for(var i = 0; i < 7; i++){
				var smallDot = new Path.Circle(new Point(150+pieceLength*(i+1), 136), 3)
				smallDot.fillColor = "black";
				Interaction.smallDots.addChild(smallDot);
			}
			
			Animation.numericalAxis.addChild(arr);
			Animation.numericalAxis.addChild(bigDots);
			Animation.numericalAxis.addChild(Interaction.smallDots);
			
			$(container).append('<div id="frac22"><div id="nom22">5</div><div id="line22"></div><div id="denom22">8</div></div>')
		
			$('#frac22').css("position", "absolute")
						.css("top", "108px")
						.css("left", "198px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line22').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom22').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom22').css("text-align", "center")
						.css("height", "16px")
			
			$(container).append('<div id="frac33"><div id="nom33">1</div><div id="line33"></div><div id="denom33">4</div></div>')
		
			$('#frac33').css("position", "absolute")
						.css("top", "108px")
						.css("left", "298px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line33').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom33').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom33').css("text-align", "center")
						.css("height", "16px")
			
			$(container).append('<div id="frac44"><div id="nom44">6</div><div id="line44"></div><div id="denom44">8</div></div>')
		
			$('#frac44').css("position", "absolute")
						.css("top", "108px")
						.css("left", "398px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line44').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom44').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom44').css("text-align", "center")
						.css("height", "16px")
			
			$(container).append('<div id="frac55"><div id="nom55">3</div><div id="line55"></div><div id="denom55">8</div></div>')
		
			$('#frac55').css("position", "absolute")
						.css("top", "108px")
						.css("left", "498px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line55').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom55').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom55').css("text-align", "center")
						.css("height", "16px")
			
			$(container).append('<div id="frac66"><div id="nom66">1</div><div id="line66"></div><div id="denom66">2</div></div>')
		
			$('#frac66').css("position", "absolute")
						.css("top", "108px")
						.css("left", "598px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line66').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom66').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom66').css("text-align", "center")
						.css("height", "16px")
			
			$(container).append('<div id="frac77"><div id="nom77">1</div><div id="line77"></div><div id="denom77">2</div></div>')
		
			$('#frac77').css("position", "absolute")
						.css("top", "108px")
						.css("left", "598px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line77').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom66').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom66').css("text-align", "center")
						.css("height", "16px")
			
			$(container).append('<div id="frac66"><div id="nom66">1</div><div id="line66"></div><div id="denom66">2</div></div>')
		
			$('#frac66').css("position", "absolute")
						.css("top", "108px")
						.css("left", "598px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
			
			$('#line66').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom66').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom66').css("text-align", "center")
						.css("height", "16px")
		
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
				bottom:'26px',
				right:'160px',
				height:'40px',
				width:'300px',
				textAlign:'center',
			});
			
			Interaction.appendButton({
				bottom:'30px',
				right:'40px'
			});
			
			Interaction.setRandomGenerator(3);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			if(Interaction.sortingUl)
				$(Interaction.sortingUl).sortable({disabled: false});
				
			if(Interaction.pointDiv)
				$(Interaction.pointDiv).remove();
			if(Interaction.ansF){
				for(i = 0; i < Interaction.ansF.length; i++){
					$(Interaction.ansF[i]).remove();
				}
			}
			
			if(Interaction.lline){
				Interaction.lline.remove();
			}
			
			if(Interaction.numericalAxis)
				Interaction.numericalAxis.remove();
			
			if(Interaction.questionDiv)
				$(Interaction.questionDiv).remove();
			
			Interaction.rand = randomNumber;
			Interaction.qType = Math.floor(Math.random() * 2);
			
			if(Interaction.rand == 0){ // sorting with 3 fractions
				Interaction.numOfFracs = 3;
				// creating question divs and fractions to be sorted in it
				Interaction.questionDiv = document.createElement('div');
				Interaction.questionDiv.id = 'questionDiv';
				$(Interaction.container).append(Interaction.questionDiv);
				$(Interaction.questionDiv).css({
						position: 'absolute',
						top: '40px',
						left: '120px',
						width: '400px',
						height: '100px',
					});
						
				Interaction.sortingUl = document.createElement('ul');
				Interaction.sortingUl.id = 'sortingUl';
				$(Interaction.questionDiv).append(Interaction.sortingUl);
				$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv">5</div></li><img id="lessThan1"  /><li id="secondFrac"><div id="secondFracDiv">4</div></li><img id="lessThan2"/><li id="thirdFrac"><div id="thirdFracDiv">6</div></li>');
				$(Interaction.sortingUl).css({
						width: '400px',
						height: '100px',
					});
						
				$(Interaction.sortingUl).sortable({
						items: 'li:not(.images)',
						placeholder: 'placeHolder',
						tolerance: 'pointer',
						cursor:'pointer',
						start: function(event, ui){
							Interaction.setStatus('');
						},
					});
						
				$('#lessThan1').css({
						position:'absolute',
						left: '94px',
						top: '10px'
					});
						
				$('#lessThan2').css({
						position:'absolute',
						left: '180px',
						top: '10px'
					});
							
				$(container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:50px; font-size:22px;}</style>");
				$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
						
				$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
				$('#firstFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
						
				$('#line1').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
										
				$('#nom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
				$('#secondFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line2').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
						
				$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
				$('#thirdFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line3').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
						
				
				
				if(Interaction.qType == 0){ // sorting in descending order
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
				}
				
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
				}
				
			}
			else if(Interaction.rand == 1){ // sorting with 4 fractions
				
				Interaction.numOfFracs = 4;
				
				Interaction.questionDiv = document.createElement('div');
				Interaction.questionDiv.id = 'questionDiv';
				$(Interaction.container).append(Interaction.questionDiv);
				$(Interaction.questionDiv).css({
						position: 'absolute',
						top: '40px',
						left: '100px',
						width: '400px',
						height: '100px',
					});
				
				Interaction.sortingUl = document.createElement('ul');
				Interaction.sortingUl.id = 'sortingUl';
				$(Interaction.questionDiv).append(Interaction.sortingUl);
				$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><img id="lessThan1"/><li id="secondFrac"><div id="secondFracDiv"></div></li><img id="lessThan2"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li><img id="lessThan3" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li>');
				$(Interaction.sortingUl).css({
						width: '400px',
						height: '100px',
					});
				
				$(Interaction.sortingUl).sortable({
						items: 'li:not(.images)',
						placeholder: 'placeHolder',
						tolerance: 'pointer',
						cursor:'pointer'
					});
				
				$('#lessThan1').css({
						position:'absolute',
						left: '94px',
						top: '10px'
					});
				
				$('#lessThan2').css({
						position:'absolute',
						left: '180px',
						top: '10px'
					});
				$('#lessThan3').css({
						position:'absolute',
						left: '266px',
						top: '10px'
					});
					
				$(container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:50px; font-size:22px;}</style>");
				$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
				
				$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
				$('#firstFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line1').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
				$('#secondFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line2').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
				$('#thirdFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line3').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
				$('#fourthFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line4').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				if(Interaction.qType == 0){ // sorting in descending order
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
				}
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
				}
			}
			else{ // sorting with 5 fractions
				Interaction.numOfFracs = 5;
				Interaction.questionDiv = document.createElement('div');
				Interaction.questionDiv.id = 'questionDiv';
				$(Interaction.container).append(Interaction.questionDiv);
				$(Interaction.questionDiv).css({
						position: 'absolute',
						top: '40px',
						left: '55px',
						width: '500px',
						height: '100px',
					});
				
				Interaction.sortingUl = document.createElement('ul');
				Interaction.sortingUl.id = 'sortingUl';
				$(Interaction.questionDiv).append(Interaction.sortingUl);
				$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="secondFrac"><div id="secondFracDiv"></div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><img id="lessThan3" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li><img id="lessThan4" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="fifthFrac"><div id="fifthFracDiv"></div></li>');
				$(Interaction.sortingUl).css({
						width: '500px',
						height: '100px',
					});
				
				$(Interaction.sortingUl).sortable({
						items: 'li:not(.images)',
						placeholder: 'placeHolder',
						tolerance: 'pointer',
						cursor:'pointer'
					});
				
				$('#lessThan1').css({
						position:'absolute',
						left: '94px',
						top: '10px'
					});
				
				$('#lessThan2').css({
						position:'absolute',
						left: '180px',
						top: '10px'
					});
				$('#lessThan3').css({
						position:'absolute',
						left: '266px',
						top: '10px'
					});
				$('#lessThan4').css({
						position:'absolute',
						left: '352px',
						top: '10px'
					});
					
				$(container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:50px; font-size:22px;}</style>");
				$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
				
				$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
				$('#firstFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line1').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
				$('#secondFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line2').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
				$('#thirdFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line3').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
				$('#fourthFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line4').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#fifthFracDiv').html('<div id="nom5">9</div><div id="line5"></div><div id="denom5">10</div>');
				$('#fifthFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px")
							.css("cursor","pointer");
				
				$('#line5').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom5').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom5').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				if(Interaction.qType == 0){ // sorting in descending order
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.');
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan4').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					
				}
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan4').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
				}
			}
			
			Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
			Interaction.nomD = $('#nom1').get(0);
			Interaction.denomD = $('#denom1').get(0);
			Interaction.nom2D = $('#nom2').get(0);
			Interaction.denom2D = $('#denom2').get(0);
			Interaction.nom3D = $('#nom3').get(0);
			Interaction.denom3D = $('#denom3').get(0);
			
			$(Interaction.nomD).html(Interaction.nom[0]);
			$(Interaction.denomD).html(Interaction.denom[0]);
			$(Interaction.nom2D).html(Interaction.nom[1]);
			$(Interaction.denom2D).html(Interaction.denom[1]);
			$(Interaction.nom3D).html(Interaction.nom[2]);
			$(Interaction.denom3D).html(Interaction.denom[2]);
			if(Interaction.numOfFracs == 4){
				Interaction.nom4D = $('#nom4').get(0);
				Interaction.denom4D = $('#denom4').get(0);
				$(Interaction.nom4D).html(Interaction.nom[3]);
				$(Interaction.denom4D).html(Interaction.denom[3]);
			}
			else if(Interaction.numOfFracs == 5){
				Interaction.nom4D = $('#nom4').get(0);
				Interaction.denom4D = $('#denom4').get(0);
				Interaction.nom5D = $('#nom5').get(0);
				Interaction.denom5D = $('#denom5').get(0);
				$(Interaction.nom4D).html(Interaction.nom[3]);
				$(Interaction.denom4D).html(Interaction.denom[3]);
				$(Interaction.nom5D).html(Interaction.nom[4]);
				$(Interaction.denom5D).html(Interaction.denom[4]);
			}
			
			Interaction.fracIds = [];
			Interaction.fracIds[0] = "firstFrac";
			Interaction.fracIds[1] = "secondFrac";
			Interaction.fracIds[2] = "thirdFrac";
			if(Interaction.numOfFracs == 4)
				Interaction.fracIds[3] = "fourthFrac";
			else if(Interaction.numOfFracs == 5){
				Interaction.fracIds[3] = "fourthFrac";
				Interaction.fracIds[4] = "fifthFrac";
			}
	
		},
		
	
	/*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled */
	
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
			Interaction.userAnswerArr = [];
			if(Interaction.qType == 1){
				Interaction.frac = [];
				Interaction.sortedFrac = [];
				
				Interaction.answerIdsArray = [];
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
				}
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.sortedFrac[i] = Interaction.frac[i];
				}
				Interaction.sortedFrac.sort(function(a,b){return a-b});
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
				}
				
			}
			else{
				Interaction.frac = [];
				Interaction.sortedFrac = [];
				
				Interaction.answerIdsArray = [];
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
				}
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.sortedFrac[i] = Interaction.frac[i];
				}
				Interaction.sortedFrac.sort(function(a,b){return b-a});
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
				}
			}
			
			for(i = 0; i < Interaction.numOfFracs; i++){
				Interaction.userAnswerArr[i] = $(Interaction.sortingUl).find('li')[i].id;
			}
			var trueNum;
			for(i = 0, trueNum = 0; i < Interaction.numOfFracs; i++){
				if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
					trueNum += 1;
			}
			if(trueNum == Interaction.numOfFracs)
				return true;
			else
				return false;
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
			for(var i = 0; i < Interaction.numOfFracs; i++){
				if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
					$("#"+Interaction.userAnswerArr[i]).css("color", "green");
				else
					$("#"+Interaction.userAnswerArr[i]).css("color", "red");
			}
			Interaction.nom2 = [];
			Interaction.denom2 = [];
			$(Interaction.sortingUl).sortable({disabled: true});
		
			if(Interaction.numOfFracs == 5)
				Interaction.lcm = Util.lcm(Interaction.denom[0], Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4]));
			else
				Interaction.lcm = Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]) 
			
			for(var i = 0; i < Interaction.numOfFracs; i++){
				Interaction.nom2[i] = Interaction.nom[i]*(Interaction.lcm/Interaction.denom[i]);
				Interaction.denom2[i] = Interaction.lcm;
			}
			
			Interaction.GetNumericalAxis(Interaction.lcm);
		},
	
	GetNumericalAxis : function(piece){
		Interaction.numericalAxis = new Group();
		var arr = new Group();
		var arrow = new Path.OneSidedArrow(new Point(20, 160), new Point(560, 160), 10, 30)
		var arrow2 = new Path.OneSidedArrow(new Point(560, 160), new Point(561, 160), 10, 30);
		arrow.rotate(180);
		arr.addChild(arrow);
		arr.addChild(arrow2);
		
		var bigDots = new Group();
		var bigDot1 = new Path.Circle(new Point(50, 160), 6);
		bigDot1.fillColor = "black";
		var bigDot2 = new Path.Circle(new Point(530, 160), 6);
		bigDot2.fillColor = "black";
		bigDots.addChild(bigDot1);
		bigDots.addChild(bigDot2);
		
		var pieceLength = 480/piece;
		
		Interaction.smallDots = new Group();
		for(var i = 0; i < piece-1; i++){
			var smallDot = new Path.Circle(new Point(50+pieceLength*(i+1), 160), 3)
			smallDot.fillColor = "black";
			Interaction.smallDots.addChild(smallDot);
		}
		
		Interaction.numericalAxis.addChild(arr);
		Interaction.numericalAxis.addChild(bigDots);
		Interaction.numericalAxis.addChild(Interaction.smallDots);
		
		var posX, posY;
		Interaction.index = [];
		Interaction.index2 = [];
		Interaction.lline = new Group();
		Interaction.nom22 = [];
		Interaction.posX2 = [];
		Interaction.posY2 = [];
		for(var i = 0; i < Interaction.numOfFracs; i++)
			Interaction.nom22[i] = Interaction.nom2[i];
		Interaction.nom22.sort(function(a,b){return a-b})
		Interaction.ansF = [];
		for(var i = 0; i < Interaction.numOfFracs; i++){
			Interaction.index[i] = Interaction.nom22[i] - 1;
			Interaction.index2[i] = Interaction.nom2[i] - 1;
			posX = Interaction.smallDots.children[Interaction.index[i]].position.x;
			posY = Interaction.smallDots.children[Interaction.index[i]].position.y;
			Interaction.posX2[i] = Interaction.smallDots.children[Interaction.index2[i]].position.x-8;
			Interaction.posY2[i] = Interaction.smallDots.children[Interaction.index2[i]].position.y+8;
			
			Interaction.smallDots.children[Interaction.index[i]].opacity = 0;
			
			var lline = new Path.Line(new Point(posX, posY-6), new Point(posX, posY+6))
			
			lline.strokeColor = "#0066FF";
			lline.strokeWidth = 2;
			Interaction.lline.addChild(lline);
			
			Interaction.ansF[i] = document.createElement('div');
			Interaction.ansF[i].id = 'ansF'+i
			$(Interaction.container).append(Interaction.ansF[i]);
			$(Interaction.ansF[i]).html('<div id="nomm'+i+'"></div><div id="linee'+i+'"></div><div id="denomm'+i+'"></div>');
			$(Interaction.ansF[i]).css("position","absolute")
					.css("top", Interaction.posY2[i])
					.css("left", Interaction.posX2[i])
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("color", "#0066FF")
					.css("font-size", "12px")
					.css("font-weight", "bold")
					.css("line-height", "16px")
			
			$('#linee'+i).css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
			
			$('#nomm'+i).css("text-align", "center")
						.css("height", "16px")
						.html(Interaction.nom[i])
			
			$('#denomm'+i).css("text-align", "center")
						.css("height", "16px")
						.html(Interaction.denom[i])
		}
		Interaction.ansF.sort(function(a,b){
			if($(a).offset().left < $(b).offset().left)
				return -1;
			else if($(a).offset().left > $(b).offset().left)
				return 1;
			else
				return 0;
		})
		for(var i = 0; i < Interaction.ansF.length; i++){
			if(i % 2 == 1){
				var newTop = $(Interaction.ansF[i]).position().top -50;
				$(Interaction.ansF[i]).css("top", newTop);
			}
		}
		
		Interaction.pointDiv = document.createElement('div');
		Interaction.pointDiv.id = 'pointDiv'
		$(Interaction.container).append(Interaction.pointDiv)
		$(Interaction.pointDiv).html('<div id="fp"></div> <div id="sp"></div>')
		$(Interaction.pointDiv).css("position", "absolute")
					.css("top", "120px")
					.css("left", "30px")
					.css("width", "480px")
					.css("height", "20px")
					.css("font-size", 22)
		
		$('#fp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "14px")
				.css("width", "20px")
				.css("height", "20px")
				.html(0);
		$('#sp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "492px")
				.css("width", "20px")
				.css("height", "20px")
				.html(1);
	},
	
	getFractionsToBeSorted: function(numOfFracs){
		Interaction.nom = [];
		Interaction.denom = [];
		
		Interaction.baseDenom = Util.randomInteger(4, 8);

		var noOfBaseDenoms = 0;

		for(var i = 0; i < numOfFracs; i++){
			var factor;
			
			if (noOfBaseDenoms == numOfFracs - Interaction.baseDenom) {
				factor = Util.randomInteger(2, Math.ceil(16/Interaction.baseDenom))
			} else {
				factor = Util.randomInteger(1, Math.ceil(16/Interaction.baseDenom))
			}
			
			if (factor == 1) {
				noOfBaseDenoms++;
			}

			Interaction.denom[i] = Interaction.baseDenom * factor;
			var excludingArr = [];
			for(var j = 0; j < i; j++){
				excludingArr[j] = Interaction.nom[j] * (Interaction.denom[i]/Interaction.denom[j]);
			}
			Interaction.nom[i] = Util.randomInteger(1, Interaction.denom[i], excludingArr);
			// fraction simplification
			var simplifiedFraction = [];
			simplifiedFraction = Util.reduceFractions(Interaction.nom[i], Interaction.denom[i]);
			Interaction.nom[i] = simplifiedFraction[0];
			Interaction.denom[i] = simplifiedFraction[1];
		}
	}
}