var Animation = {
	init:function(container){
			Animation.container = container;	
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda verilen doğal sayı ile kesri karşılaştırınız. Aralarına küçük, büyük ya da eşit işaretlerini sürükleyerek yerleştiriniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.sortingDiv = document.createElement('div');
			Interaction.sortingDiv.id = 'sortingDiv';
			$(container).append(Interaction.sortingDiv);
			$(Interaction.sortingDiv).css({
							width: '100px',
							height: '50px',
							position: 'absolute',
							left: '200px',
							top: '10px',
							padding: 0,
							margin:0
						});	
			$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img id="lessThan" class="drg" src="/assets/animations/yuzdeleri_karsilastirma/sol_ok.png" /></div>');
			
			$('#lessThanDiv').css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
							
			$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img id="greaterThan" class="drg" src="/assets/animations/yuzdeleri_karsilastirma/sag_ok.png"/></div>'); 
			$('#greaterThanDiv').css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
															
			$('.drg').draggable({revert: "invalid", helper: "clone"});
			
			$('#sortingDiv img').draggable({
				stack: "#sortingDiv img",
				start: function(){
					Interaction.setStatus('');
				},
			});
			
			Interaction.questionDiv = document.createElement('div');
			Interaction.questionDiv.id = 'questionDiv'
			$(container).append(Interaction.questionDiv);
			$(Interaction.questionDiv)
				.css({
					position:'absolute',
					left:'100px',
					top:'60px',
			//		border:'solid',
					width:'260px',
					height:'60px',
					padding:0,
					margin:0
				});
			Interaction.firstFracDiv = document.createElement('div');
			Interaction.firstFracDiv.id = 'firstFracDiv'
			$(Interaction.questionDiv).append(Interaction.firstFracDiv);
			$(Interaction.firstFracDiv).css({
					width:'100px',
					height:'60px',
					float:'left',
					fontSize:'24px'
			//		border:'solid'
				});
			Interaction.secondFracDiv = document.createElement('div');
			Interaction.secondFracDiv.id = 'secondFracDiv'
			$(Interaction.questionDiv).append(Interaction.secondFracDiv);
			$(Interaction.secondFracDiv).css({
					width:'100px',
					height:'60px',
					float:'right',
					fontSize:'24px'
		//			border:'solid'
				});
			
			
			Interaction.answerDiv = document.createElement('div');
			Interaction.answerDiv.id = 'answerDiv'
			$(Interaction.questionDiv).append(Interaction.answerDiv);
			$(Interaction.answerDiv).css({
							width: '40px',
							height: '40px',
							position: 'absolute',
							left: '110px',
							top: '0px',
							border: 'solid',
							paddingLeft: '8px',
							paddingTop: '8px'
						});
			$(Interaction.answerDiv).droppable({
						accept: '.drg',
						drop: function(event, ui){
							$(this).html('');
							clone = $(ui.draggable).clone();
							clone.attr('id', $(clone).get(0).id+"1");
							$(this).append(clone);
						}
					});
			
			Interaction.appendStatus({
				bottom:'20px',
				right:'160px',
				height:'40px',
				width:'300px',
				textAlign:'center'
			});
			Interaction.appendButton({
				bottom:'30px',
				right:'40px'
			})
			
			Interaction.firstFracD = $(Interaction.firstFracDiv).get(0);
			Interaction.secondFracD = $(Interaction.secondFracDiv).get(0);
			Interaction.answerD = $(Interaction.answerDiv).get(0);
			Interaction.setRandomGenerator(3);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			if($(Interaction.clone2)){
				$(Interaction.clone2).remove();
				Interaction.clone2 = null;
			}
			if($(Interaction.dropped)){
				$(Interaction.dropped).remove();
				Interaction.dropped = null;
			}
			$('#sortingDiv img').draggable("enable");
			$(Interaction.answerDiv).html('');
			$(Interaction.firstFracDiv).html('');
			$(Interaction.secondFracDiv).html('');
			
			var randomize = Math.floor(Math.random() * 2);
			Interaction.randomNumber = randomNumber;
			Interaction.randomize = randomize;
			
		//	if(randomNumber == 0){ // simple fraction and natural number sorting
			if(0){
				if(randomize == 0){
			//	if(0) {
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.firstFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "right")
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
						while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.secondFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "left")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","38px")
							.css("float", "left")
							.css("line-height","51px")
					
					Interaction.wh1 = Math.floor(Math.random() * 6);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);					
				}
				else{
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.secondFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "48px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "left")
						//		.css("border", "solid")
					
					$('#line1').css("height", "1px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("width", "30px")
								.css("float", "right")
									
					$('#nom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")
								
					$('#denom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")
								
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
						while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.firstFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "right")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","16px")
							.css("float", "right")
							.css("line-height","51px")
					
					Interaction.wh1 = Math.floor(Math.random() * 6);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
				}
			}
			
		//	else if(randomNumber == 1){ // compound fraction and natural number sorting
			else if(0){
				if(randomize == 0){
			//	if(0) {
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.firstFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "right")
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					Interaction.nom1 = Math.floor(Math.random() * 21) + 2;
					do
						Interaction.denom1 = Math.floor(Math.random() * 21) + 2;
						while(Interaction.denom1 > Interaction.nom1)
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.secondFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "left")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","38px")
							.css("float", "left")
							.css("line-height","51px")
					
					Interaction.wh1 = Math.floor(Math.random() * 6);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);					
				}
				else{
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.secondFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "48px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "left")
						//		.css("border", "solid")
					
					$('#line1').css("height", "1px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("width", "30px")
								.css("float", "right")
									
					$('#nom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")
								
					$('#denom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")
								
					Interaction.nom1 = Math.floor(Math.random() * 21) + 2;
					do
						Interaction.denom1 = Math.floor(Math.random() * 21) + 2;
						while(Interaction.denom1 > Interaction.nom1)
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.firstFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "right")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","16px")
							.css("float", "right")
							.css("line-height","51px")
					
					Interaction.wh1 = Math.floor(Math.random() * 6);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
				}
			}			
			else{ // fraction with wh and natural number sorting
				if(randomize == 0){
			//	if(0) {
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.firstFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="wh2"></div><div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "72px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "right")
					
					$('#wh2').css("width", "30px")
							.css("float", "left")
							.css("line-height", "51px")
							.css("text-align", "center")
							.css("height", "51px")
							
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("float", "left")
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					Interaction.wh2 = Math.floor(Math.random() * 5) + 1
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
						while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.wh2D = $('#wh2').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.wh2D).html(Interaction.wh2);
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.secondFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "left")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","38px")
							.css("float", "left")
							.css("line-height","51px")
					
					Interaction.wh1 = Math.floor(Math.random() * 6);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);					
				}
				else{
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.secondFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="wh2"></div><div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "72px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "left")
					
					$('#wh2').css("width", "30px")
							.css("float", "left")
							.css("line-height", "51px")
							.css("text-align", "center")
							.css("height", "51px")
							
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("float", "left")
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					Interaction.wh2 = Math.floor(Math.random() * 5) + 1
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
						while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.wh2D = $('#wh2').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.wh2D).html(Interaction.wh2);
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.firstFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "right")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","16px")
							.css("float", "right")
							.css("line-height","51px")
					
					Interaction.wh1 = Math.floor(Math.random() * 6);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
				}
			}
	
		},
	preCheck : function(){
			if($('#answerDiv').get(0).firstChild)
				Interaction.dropped = $('#answerDiv').get(0).firstChild;
			if(Interaction.dropped == null || Interaction.dropped == undefined){
				Interaction.setStatus('Lütfen küçük, eşit ya da büyük işaretlerinden birini kutucuğa sürükleyiniz.', 'alert')
				return false;
			}
		},
	isAnswerCorrect : function(value){
		//	if(Interaction.randomNumber == 0){
			if(0){
				if(Interaction.randomize == 0){
					if(Interaction.wh1 > 0)
						Interaction.answerIdStr = "lessThan";
					else
						Interaction.answerIdStr = "greaterThan";
				}
				else{
					if(Interaction.wh1 > 0)
						Interaction.answerIdStr = "greaterThan";
					else
						Interaction.answerIdStr = "lessThan";
				}
				
				if(Interaction.dropped.id == Interaction.answerIdStr+"1"){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
				else
					return false;
			}
			else if(0){
		//	else if(Interaction.randomNumber == 1){
				if(Interaction.randomize == 0){
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "greaterThan";
					else
						Interaction.answerIdStr = "lessThan";
				}
				else{
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "lessThan";
					else
						Interaction.answerIdStr = "greaterThan";
				}
				
				if(Interaction.dropped.id == Interaction.answerIdStr+"1"){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
				else
					return false;
			}
			else{
				if(Interaction.randomize == 0){
					if(Interaction.wh2 < Interaction.wh1)
						Interaction.answerIdStr = "lessThan";
					else
						Interaction.answerIdStr = "greaterThan";
				}
				else{
					if(Interaction.wh2 < Interaction.wh1)
						Interaction.answerIdStr = "greaterThan";
					else
						Interaction.answerIdStr = "lessThan";
				}
				if(Interaction.dropped.id == Interaction.answerIdStr+"1"){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
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
			$('#answerDiv').html('');
			Interaction.answerIdStr2 = "#"+Interaction.answerIdStr;
			Interaction.clone2 = $(Interaction.answerIdStr2).clone();
			Interaction.clone2.attr('id', $(Interaction.clone2).get(0).id+"1")
			$(Interaction.sortingDiv).append(Interaction.clone2);
			var top = $(Interaction.answerIdStr2).position().top;
			var left = $(Interaction.answerIdStr2).position().left;
			
			$(Interaction.clone2).css("position", "absolute")
					.css("top",top)
					.css("left", left)
					.css("opacity", 0)
			$(Interaction.clone2).delay(0).animate(
				{opacity:1, top: '61px', left:'21px'}, 
				1000,
				'easeInOutQuad',
				function(){
					$(Interaction.answerDiv).append(Interaction.clone2);
					$(Interaction.clone2).css("margin-left", "8px")
										.css("margin-top", "8px")
										.css("top", "0px")
										.css("left", "0px")
				}
			);
			$('#sortingDiv img').draggable("disable");
		},
}