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
			//		border:'solid',
					width:'260px',
					height:'90px',
					padding:0,
					margin:0
				});
			Interaction.firstFracDiv = document.createElement('div');
			Interaction.firstFracDiv.id = 'firstFracDiv'
			$(Interaction.questionDiv).append(Interaction.firstFracDiv);
			$(Interaction.firstFracDiv).css({
					width:'96px',
					height:'60px',
					float:'left',
					fontSize:'24px',
			//		border:'solid'
				});
			Interaction.secondFracDiv = document.createElement('div');
			Interaction.secondFracDiv.id = 'secondFracDiv'
			$(Interaction.questionDiv).append(Interaction.secondFracDiv);
			$(Interaction.secondFracDiv).css({
					width:'100px',
					height:'60px',
					float:'right',
					fontSize:'24px',
				//	border:'solid'
				});
			
			Interaction.dropDiv = document.createElement('div');
			Interaction.dropDiv.id = 'dropDiv';
			$(container).append(Interaction.dropDiv);
			$(Interaction.dropDiv).css({
							width: '54px',
							height: '54px',
							position: 'absolute',
							left: '206px',
							top: '68px',
						//	border: 'solid',
							paddin: 0,
							margin: 0,
						});
			$(Interaction.dropDiv).append('<div id="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" id="target" /></div>')
			
			$('#targetContainer').css("position", "relative")
								.css("height", "54px")
								.css("width", "54px")
								.css("float", "left")
			$('#target').css("position", "absolute")
						.css("top", "0px")
						.css("left", "0px")
			$(Interaction.dropDiv).droppable({
						accept: '.drg',
						drop: function(event, ui){
						//	console.log("im from drop start");
							if(Interaction.oldActiveStr){
								$("#"+Interaction.oldActiveStr).css("opacity", 0)
						//		console.log(Interaction.oldActiveStr);
								$("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
								$("#"+Interaction.oldStr).css("opacity", 1)
								
							}
							Interaction.activeStr = $(ui.draggable).get(0).id;
							$("#"+Interaction.activeStr).draggable({disabled: true});
							var oldStr = Interaction.activeStr.replace("Hover", "");
							Interaction.activeStr = Interaction.activeStr.replace("Hover", "Active");
							$("#"+Interaction.activeStr).css("opacity", 1);
							Interaction.oldActiveStr = Interaction.activeStr;
							Interaction.oldStr = oldStr;
					//		console.log("oldStr: "+Interaction.oldStr)
					//		console.log("oldActiveStr: "+Interaction.oldActiveStr);
							
						}
					});
			
			$(Interaction.dropDiv).append('<img id="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img id="equalToActive" src="/assets/animations/kesirleri_karsilastirma/oran_esittir_active.png" /><img id="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />')
			
			$('#lessThanActive').css("position", "absolute")
								.css("top", "11px")
								.css("left", "11px")
								.css("opacity", 0)
			
			$('#equalToActive').css("position", "absolute")
								.css("top", "11px")
								.css("left", "11px")
								.css("opacity", 0)
			
			$('#greaterThanActive').css("position", "absolute")
								.css("top", "11px")
								.css("left", "11px")
								.css("opacity", 0)
			
			Interaction.appendStatus({
				bottom:'26px',
				right:'160px',
				height:'40px',
				width:'300px',
				textAlign:'center',
			//	border: 'solid'
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
			if(Interaction.numericalAxis)
				Interaction.numericalAxis.remove();
			if($('#pointDiv'))
				$('#pointDiv').remove();
			
			if($(Interaction.clone2)){
				$(Interaction.clone2).remove();
				Interaction.clone2 = null;
			}
			if($(Interaction.dropped)){
				$(Interaction.dropped).remove();
				Interaction.dropped = null;
			}
			$('#sortingDiv img').draggable("enable");
			if(Interaction.oldActiveStr){
				//console.log("if oldActive? :")
//				console.log(Interaction.oldActiveStr)
				$("#"+Interaction.oldActiveStr).css("opacity" , 0)
			}
			
			if(Interaction.oldStr)
				$("#"+Interaction.oldStr).css("opacity", 1)
			
			if(Interaction.answerId)
				$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1)
			
			if(Interaction.ansF)
				$(Interaction.ansF).remove();
			
			$(Interaction.firstFracDiv).html('');
			$(Interaction.secondFracDiv).html('');
			
			Interaction.activeStr = null;
			
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
					
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do{
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
					}
					while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.wh1 = Math.floor(Math.random() * 4);
					
					Interaction.frac = Interaction.nom1/Interaction.denom1;
					
					Interaction.whD = $('#wh1').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);					
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
					
										
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
						while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.wh1 = Math.floor(Math.random() * 4);
					
					Interaction.frac = Interaction.nom1/Interaction.denom1;
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
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
					do{
						Interaction.nom1 = Math.floor(Math.random() * 21) + 2;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 > Interaction.nom1)
						
						Interaction.wh1 = Math.floor(Math.random() * 10);
					}
					while(Math.abs(Interaction.wh1 - (Interaction.nom1/Interaction.denom1)) > 3)
					
					Interaction.frac = Interaction.nom1 / Interaction.denom1;
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
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
					do{
						Interaction.nom1 = Math.floor(Math.random() * 21) + 2;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 > Interaction.nom1)
						
						Interaction.wh1 = Math.floor(Math.random() * 10);
					}
					while(Math.abs(Interaction.wh1 - (Interaction.nom1/Interaction.denom1)) > 3)
					
					Interaction.frac = Interaction.nom1 / Interaction.denom1;
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					
					
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
					
					do{
						Interaction.wh2 = Math.floor(Math.random() * 5) + 1
						Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 <= Interaction.nom1)
				
						Interaction.wh1 = Math.floor(Math.random() * 8);
					//	Interaction.wh1 = 0;
					}
					while(Math.abs(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1))) > 3)
				//	console.log(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1)));
				//	console.log(Math.abs(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1))));
					Interaction.frac = Interaction.wh2 + (Interaction.nom1/Interaction.denom1);
					
					
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
					
					Interaction.wh2D = $('#wh2').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.wh2D).html(Interaction.wh2);
										
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
					
					do{
						Interaction.wh2 = Math.floor(Math.random() * 5) + 1
						Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 <= Interaction.nom1)
				
						Interaction.wh1 = Math.floor(Math.random() * 8);
					//	Interaction.wh1 = 0;
					}
					while(Math.abs(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1))) > 3)
				//	console.log(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1)));
				//	console.log(Math.abs(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1))));
					Interaction.frac = Interaction.wh2 + (Interaction.nom1/Interaction.denom1);
					
					
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
					
					Interaction.wh2D = $('#wh2').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.wh2D).html(Interaction.wh2);
					
					
				}
			}
	
		},
	preCheck : function(){
			Interaction.dropped = Interaction.activeStr;
			if(Interaction.dropped == null || Interaction.dropped == undefined){
				Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
				return false;
			}
		},
	isAnswerCorrect : function(value){
			if(Interaction.randomNumber == 0){
		//	if(0){
				if(Interaction.randomize == 0){
					if(Interaction.wh1 > 0)
						Interaction.answerIdStr = "lessThanActive";
					else
						Interaction.answerIdStr = "greaterThanActive";
				}
				else{
					if(Interaction.wh1 > 0)
						Interaction.answerIdStr = "greaterThanActive";
					else
						Interaction.answerIdStr = "lessThanActive";
				}
			//	console.log("Interaction.dropped"+Interaction.dropped);
			//	console.log("Interaction.dropped"+Interaction.dropped);
				
				if(Interaction.dropped == Interaction.answerIdStr){
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
						Interaction.answerIdStr = "greaterThanActive";
					else if(Interaction.nom1 / Interaction.denom1 == Interaction.wh1)
						Interaction.answerIdStr = "equalToActive";
					else
						Interaction.answerIdStr = "lessThanActive";
				}
				else{
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "lessThanActive";
					else if(Interaction.nom1 / Interaction.denom1 == Interaction.wh1)
						Interaction.answerIdStr = "equalToActive";
					else
						Interaction.answerIdStr = "greaterThanActive";
				}
				
				if(Interaction.dropped == Interaction.answerIdStr){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
				else
					return false;
			}
			else{
				if(Interaction.randomize == 0){
					if(Interaction.wh2 < Interaction.wh1)
						Interaction.answerIdStr = "lessThanActive";
					else
						Interaction.answerIdStr = "greaterThanActive";
				}
				else{
					if(Interaction.wh2 < Interaction.wh1)
						Interaction.answerIdStr = "greaterThanActive";
					else
						Interaction.answerIdStr = "lessThanActive";
				}
				if(Interaction.dropped == Interaction.answerIdStr){
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
			$("#"+Interaction.oldActiveStr).css("opacity", 0);
			Interaction.answerId = Interaction.answerIdStr.replace("Active", "Hover");
			$("#"+Interaction.oldActiveStr.replace("Active", "")).css("opacity", 1)
			$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0)
			Interaction.clone2 = $("#"+Interaction.answerId).clone();
			Interaction.clone2.attr('id', 'flying');

			$(container).append(Interaction.clone2);
			$(Interaction.clone2).insertAfter($(Interaction.dropDiv));
		//	console.log($("#"+Interaction.answerId))
			var ansTop = $("#"+Interaction.answerId).offset().top - 417;
			var ansLeft = $("#"+Interaction.answerId).offset().left - 950;
			var flyTop = $(Interaction.dropDiv).position().top + 11;
			var flyLeft = $(Interaction.dropDiv).position().left + 11;
		/*	console.log("flyLeft: "+flyLeft)
			console.log("flyTop: "+flyTop)
			console.log("ansLeft: "+ansLeft)
			console.log("ansTop: "+ansTop)*/
	
			$(Interaction.clone2).css("position", "absolute")
					.css("top",ansTop)
					.css("left", ansLeft)
					.css("opacity", 0)

			$(Interaction.clone2).delay(0).animate(
				{opacity:2, top: flyTop, left:flyLeft}, 
				1000,
				'easeInOutQuad',
				function(){
					$(Interaction.clone2).css("opacity", 0);
					$("#"+Interaction.answerIdStr).css("opacity", 1)
				}
			);
			$('#sortingDiv img').draggable("disable");
			Interaction.oldActiveStr = Interaction.answerIdStr;
			
			var decide = (((Interaction.frac + Interaction.wh1)/2) - 1.5);
			var startP, endP;
			if(decide <= 0)
				startP = 0;
			else{
				if(Interaction.wh1 > Interaction.frac)
					startP = Math.round(decide);
				else
					startP = Math.round(decide);
			}
			
			endP = startP + 3;
			
			Interaction.GetNumericalAxis(startP, endP, Interaction.denom1);
		},
		
	GetNumericalAxis : function(startPoint, endPoint, piece){
		
		Interaction.pause = 1;
		
		setTimeout(
				'Interaction.pause = 0;'
				,2000);
		
		Interaction.numericalAxis = new Group();
		
		// numericalAxis
		var arr = new Group();
		var arrow = new Path.OneSidedArrow(new Point(40, 180), new Point(540, 180), 10, 30)
		var arrow2 = new Path.OneSidedArrow(new Point(540, 180), new Point(541, 180), 10, 30);
		arrow.rotate(180);
		arr.addChild(arrow);
		arr.addChild(arrow2);
		
		var iter = endPoint - startPoint;
		var pieceLength = 420/iter;
		// bigDots
		var bigDots = new Group();
		for(i = 0; i < iter + 1; i++){
			var dot = new Path.Circle(new Point(80+(pieceLength*i), 180), 4);
		//	dot.strokeColor = "black";
			dot.fillColor = "black";
			bigDots.addChild(dot);
		}
		
		var smallDots = new Group();
		for(i = 0; i < iter; i++){
			for(j = 1; j < piece; j++){
				//if(piece == 8 || piece == 9)
//					var dot2 = new Path.Circle(new Point(81+(pieceLength*i)+j*Math.floor(pieceLength/piece), 180), 2);
//				else
					var dot2 = new Path.Circle(new Point(80+(pieceLength*i)+Math.floor(j*(pieceLength/piece)), 180), 2);
			//	dot2.strokeColor = "black";
				dot2.fillColor = "black";
				smallDots.addChild(dot2);
			}
		}
		
		Interaction.numericalAxis.addChild(arr);
		Interaction.numericalAxis.addChild(bigDots);
		Interaction.numericalAxis.addChild(smallDots);
		
		var pointDiv = document.createElement('div');
		pointDiv.id = 'pointDiv'
		$(Interaction.container).append(pointDiv)
		$(pointDiv).html('<div id="fp"></div> <div id="sp"></div> <div id="tp"></div> <div id="lp"></div>')
		$(pointDiv).css("position", "absolute")
					.css("top", "150px")
					.css("left", "59px")
					.css("width", "480px")
					.css("height", "20px")
			//		.css("border", "solid")
					.css("font-size", 22)
		
		$('#fp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "14px")
				.css("width", "20px")
				.css("height", "20px")
			//	.css("border", "solid")
				.html(startPoint);
		$('#sp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "154px")
				.css("width", "20px")
				.css("height", "20px")
		//		.css("border", "solid")
				.html(startPoint+1);
		$('#tp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "294px")
				.css("width", "20px")
				.css("height", "20px")
			//	.css("border", "solid")
				.html(startPoint+2);
		$('#lp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "434px")
				.css("width", "20px")
				.css("height", "20px")
			//	.css("border", "solid")
				.html(startPoint+3);
		var l;
		for(l = 0; l < 4; l++){
			if(startPoint+l == Interaction.wh1)
				break;
		}
		switch(l){
			case 0:
				$('#fp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
			case 1:
				$('#sp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
			case 2:
				$('#tp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
			case 3:
				$('#lp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
		}
		
		var index;
		var a = Math.floor(Interaction.nom1/Interaction.denom1);
		var b = Interaction.nom1 % Interaction.denom1;
		var o;
		if(Math.floor(Interaction.frac) == Interaction.frac){
			var k;
			for(k = 0; k < 4; k++){
				if(startPoint+k == Interaction.frac)
					break;
			}
			o = k;
			switch(k){
				case 0:
					var centerX = bigDots.children[k].position.x;
					var centerY = bigDots.children[k].position.y;
			//		$('#fp').css("color", "#0066FF")
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(centerX, centerY-6), new Point(centerX, centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
				case 1:
					var centerX = bigDots.children[k].position.x;
					var centerY = bigDots.children[k].position.y;
			//		$('#sp').css("color", "#0066FF")
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(centerX, centerY-6), new Point(centerX, centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
				case 2:
					var centerX = bigDots.children[k].position.x;
					var centerY = bigDots.children[k].position.y;
			//		$('#tp').css("color", "#0066FF")
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(centerX, centerY-6), new Point(centerX, centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
				case 3:
					var centerX = bigDots.children[k].position.x;
					var centerY = bigDots.children[k].position.y;
				//	$('#lp').css("color", "#0066FF")
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(centerX, centerY-6), new Point(centerX, centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
			}
			
		}
		else{		
			if(Interaction.randomNumber == 0)
				index = Interaction.nom1 - 1
			else if(Interaction.randomNumber == 1)
				index = ((a - startPoint) * (Interaction.denom1 - 1)) + (b - 1);
			else
				index = ((Interaction.wh2 - startPoint) * (Interaction.denom1-1)) + (Interaction.nom1 - 1)
			
			var centerX = smallDots.children[index].position.x;
			var centerY = smallDots.children[index].position.y;
			
			smallDots.children[index].remove();
			
			var lline = new Path.Line(new Point(centerX, centerY-6), new Point(centerX, centerY+6))
			lline.strokeColor = "#0066FF"
			
			lline.strokeWidth = 3;
			Interaction.numericalAxis.addChild(lline);
			
			Interaction.ansF = document.createElement('div');
			Interaction.ansF.id = 'ansF'
			$(Interaction.container).append(Interaction.ansF);
			
			
		}
		
		
			if(Interaction.randomNumber == 0){
				if(Math.floor(Interaction.frac) == Interaction.frac){
					var ttop = Interaction.lline.position.y + 8;
					var lleft = Interaction.lline.position.x - 9;
				}
				else{
					var ttop = centerY + 8;
					var lleft = centerX - 9;
				}
				
				console.log(ttop);
				console.log(lleft);
				
				$(Interaction.ansF).html('<div id="nomm"></div><div id="linee"></div><div id="denomm"></div>');
				$(Interaction.ansF).css("position","absolute")
						.css("top", ttop)
						.css("left", lleft)
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "#0066FF")
						.css("font-size", "12px")
						.css("font-weight", "bold")
						.css("line-height", "16px")
				
				$('#linee').css("height", "1px")
							.css("border-top", "1px solid")
							.css("padding", 0)
				
				$('#nomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.nom1)
				
				$('#denomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.denom1)
						
			}
			else if(Interaction.randomNumber == 1){
				if(Math.floor(Interaction.frac) == Interaction.frac){
					console.log("got the coordinates")
					var ttop = Interaction.lline.position.y + 8;
					var lleft = Interaction.lline.position.x - 9;
					console.log("x: "+lleft+" y: "+ttop)
					console.log("x: "+(lleft-9)+" y: "+(ttop+8))
				}
				else{
					var ttop = centerY + 8;
					var lleft = centerX - 9;
				}
				
				console.log("nom:"+Interaction.nom1)
				console.log("denom:"+Interaction.denom1)
				$(Interaction.ansF).html('<div id="nomm"></div><div id="linee"></div><div id="denomm"></div>');
				$(Interaction.ansF)
					//	.css("position","absolute")
					//	.css("top", ttop)
					//	.css("left", lleft)
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "#0066FF")
						.css("font-size", "12px")
						.css("font-weight", "bold")
						.css("line-height", "16px")
				
				$('#linee').css("height", "1px")
							.css("border-top", "1px solid")
							.css("padding", 0)
				
				$('#nomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.nom1)
				
				$('#denomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.denom1)
				
				console.log(Interaction.ansF)
			}
			else{
				if(Math.floor(Interaction.frac) == Interaction.frac){
					var ttop = Interaction.lline.position.y + 8;
					var lleft = Interaction.lline.position.x - 20;
				}
				else{
					var ttop = centerY + 8;
					var lleft = centerX - 20;
				}
				
				console.log(ttop);
				console.log(lleft);
				
				$(Interaction.ansF).html('<div id="whh"></div><div id="nomm"></div><div id="linee"></div><div id="denomm"></div>');
				
				$(Interaction.ansF).css("position","absolute")
						.css("top", ttop)
						.css("left", lleft)
						.css("width", "32px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "#0066FF")
						.css("font-size", "12px")
						.css("font-weight", "bold")
						.css("line-height", "16px")
				
				$('#whh').css("height", "33px")
							.css("width", "16px")
							.css("text-align", "center")
							.css("float", "left")
							.css("line-height", "33px")
							.html(Interaction.wh2)
				
				$('#linee').css("height", "1px")
							.css("width", "16px")
							.css("border-top", "1px solid")
							.css("padding", 0)
							.css("float", "left")
				
				$('#nomm').css("text-align", "center")
							.css("width", "16px")
							.css("height", "16px")
							.css("float", "left")
							.html(Interaction.nom1)
				
				$('#denomm').css("text-align", "center")
							.css("height", "16px")
							.css("width", "16px")
							.css("float", "left")
							.html(Interaction.denom1)
			}
		
	}
}