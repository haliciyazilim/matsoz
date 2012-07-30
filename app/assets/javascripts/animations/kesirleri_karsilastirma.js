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
							width: '150px',
							height: '50px',
							position: 'absolute',
							left: '180px',
							top: '10px',
							padding: 0,
							margin:0
						});	
			$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_hover.png" /></div>');
			
			$('#lessThanDiv').css("position", "relative")
							.css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
			
			$('#lessThan').css("position", "absolute")
							.css("top", "0px")
							.css("left", "0px")
							
			$('#lessThanHover').css("position", "absolute")
								.css("top", "0px")
								.css("left", "0px")
								.css("opacity", 0)
			
			$(Interaction.sortingDiv).append('<div id="equalToDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_esittir_base.png"/><img id="equalTo" src="/assets/animations/kesirleri_karsilastirma/oran_esittir_fg.png" /><img id="equalToHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_esittir_hover.png" /></div>');
			
			$('#equalToDiv').css("position", "relative")
							.css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
			
			$('#equalTo').css("position", "absolute")
							.css("top", "0px")
							.css("left", "0px")
			
			$('#equalToHover').css("position", "absolute")
								.css("top", "0px")
								.css("left", "0px")
								.css("opacity", 0)
							
			$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_hover.png" /></div>'); 
			
			$('#greaterThanDiv').css("position", "relative")
							.css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
			
			$('#greaterThan').css("position", "absolute")
							.css("top", "0px")
							.css("left", "0px")
			
			$('#greaterThanHover').css("position", "absolute")
								.css("top", "0px")
								.css("left", "0px")
								.css("opacity", 0)
															
			
			$('#sortingDiv .drg').draggable({
				revert: "invalid",
				helper: "clone",
				stack: "#sortingDiv .drg",
				start: function(event, ui){
					Interaction.setStatus('');
					$($(ui.helper.get(0)).siblings(this).get(1)).css("opacity", 0)
					$(ui.helper.get(0)).css("opacity", 1)
				},
				stop: function(event, ui){
					$(ui.helper.get(0)).css("opacity", 0)
					if(this.id != Interaction.oldStr+"Hover"){
						$($(ui.helper.get(0)).siblings(this).get(1)).css("opacity", 1)
					}
				//	console.log("im from drag stop");
			//		console.log(this.id)
				}
			});
			
			Interaction.questionDiv = document.createElement('div');
			Interaction.questionDiv.id = 'questionDiv'
			$(container).append(Interaction.questionDiv);
			$(Interaction.questionDiv)
				.css({
					position:'absolute',
					left:'100px',
					top:'70px',
				//	border:'solid',
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
			
			$(Interaction.answerDiv).html('<img id="target" src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png"/>')
			$(Interaction.answerDiv).css({
							width: '54px',
							height: '54px',
							position: 'absolute',
							left: '110px',
							top: '0px',
							border: 'solid',
							paddingLeft: '8px',
							paddingTop: '8px'
						});
			$('#target').css("position", "absolute")
						.css("top", "0px")
						.css("left", "0px")
			$(Interaction.answerDiv).droppable({
						accept: '.drg',
						drop: function(event, ui){
						//	console.log("im from drop start");
							if(Interaction.oldActiveStr){
								$("#"+Interaction.oldActiveStr).css("opacity", 0)
						//		console.log(Interaction.oldActiveStr);
								$("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
								$("#"+Interaction.oldStr).css("opacity", 1)
								
							}
							var activeStr = $(ui.draggable).get(0).id;
							$("#"+activeStr).draggable({disabled: true});
							var oldStr = activeStr.replace("Hover", "");
							activeStr = activeStr.replace("Hover", "Active");
							$("#"+activeStr).css("opacity", 1);
							Interaction.oldActiveStr = activeStr;
							Interaction.oldStr = oldStr;
					//		console.log("oldStr: "+Interaction.oldStr)
					//		console.log("oldActiveStr: "+Interaction.oldActiveStr);
							
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
			
			if(randomNumber == 0){ // simple fraction and natural number sorting
		//	if(0){
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
			
			else if(randomNumber == 1){ // compound fraction and natural number sorting
		//	else if(0){
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
			if(Interaction.randomNumber == 0){
		//	if(0){
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
		//	else if(0){
			else if(Interaction.randomNumber == 1){
				if(Interaction.randomize == 0){
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "greaterThan";
					else if(Interaction.nom1 / Interaction.denom1 == Interaction.wh1)
						Interaction.answerIdStr = "equalTo";
					else
						Interaction.answerIdStr = "lessThan";
				}
				else{
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "lessThan";
					else if(Interaction.nom1 / Interaction.denom1 == Interaction.wh1)
						Interaction.answerIdStr = "equalTo";
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
			var ansTop = $(Interaction.answerIdStr2).position().top;
			var ansLeft = $(Interaction.answerIdStr2).position().left;
			
			$(Interaction.clone2).css("position", "absolute")
					.css("top",ansTop)
					.css("left", ansLeft)
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