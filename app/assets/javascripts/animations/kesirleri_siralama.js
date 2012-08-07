function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
	
	placeHolderColor = "#bfe8ef";
}

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
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			/*
			*	Initialize your interaction here
			*/
			
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
			
			if(Interaction.numericalAxis)
				Interaction.numericalAxis.remove();
			
			if(Interaction.questionDiv)
				$(Interaction.questionDiv).remove();
			
			Interaction.rand = randomNumber;
			Interaction.qType = Math.floor(Math.random() * 2);
	//		if(Interaction.rand == 0){ // sorting with 3 fractions
			if(1){
			Interaction.numOfFracs = 3;
			Interaction.fracIds = [];
			Interaction.fracIds[0] = "firstFrac";
			Interaction.fracIds[1] = "secondFrac";
			Interaction.fracIds[2] = "thirdFrac";
				if(Interaction.qType == 0){ // sorting in descending order
		//		if(1){
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.')
					console.log("sorting with 3 fractions in descending order");
					
					Interaction.questionDiv = document.createElement('div');
					Interaction.questionDiv.id = 'questionDiv';
					$(Interaction.container).append(Interaction.questionDiv);
					$(Interaction.questionDiv).css({
							position: 'absolute',
							top: '40px',
							left: '100px',
							width: '400px',
							height: '100px',
					//		border: 'solid'
						});
					
					Interaction.sortingUl = document.createElement('ul');
					Interaction.sortingUl.id = 'sortingUl';
					$(Interaction.questionDiv).append(Interaction.sortingUl);
					$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv">5</div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="secondFrac"><div id="secondFracDiv">4</div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv">6</div></li>');
					$(Interaction.sortingUl).css({
							width: '400px',
							height: '100px',
						//	border: 'solid'
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
						
					$(container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:50px; font-size:22px;}</style>");
				//	$(container).append("<style> #sortingUl img {float:left; width:32px; height:32px;}</style>");
					$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
					
					$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
					$('#firstFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line1').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
					$('#secondFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line2').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
					$('#thirdFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line3').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
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
					
				}
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					console.log("sorting with 3 fractions in ascending order");
					
					Interaction.questionDiv = document.createElement('div');
					Interaction.questionDiv.id = 'questionDiv';
					$(Interaction.container).append(Interaction.questionDiv);
					$(Interaction.questionDiv).css({
							position: 'absolute',
							top: '40px',
							left: '100px',
							width: '400px',
							height: '100px',
					//		border: 'solid'
						});
					
					Interaction.sortingUl = document.createElement('ul');
					Interaction.sortingUl.id = 'sortingUl';
					$(Interaction.questionDiv).append(Interaction.sortingUl);
					$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv">5</div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="secondFrac"><div id="secondFracDiv">4</div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv">6</div></li>');
					$(Interaction.sortingUl).css({
							width: '400px',
							height: '100px',
						//	border: 'solid'
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
						
					$(container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:50px; font-size:22px;}</style>");
				//	$(container).append("<style> #sortingUl img {float:left; width:32px; height:32px;}</style>");
					$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
					
					$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
					$('#firstFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line1').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
					$('#secondFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line2').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
					$('#thirdFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line3').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
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
				}
				
			}
			else if(Interaction.rand == 1){ // sorting with 4 fractions
			Interaction.numOfFracs = 4;
		//	else if(0){
				if(Interaction.qType == 0){ // sorting in descending order
			//	if(0){
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.')
					console.log("sorting with 4 fractions in descending order");
					
					Interaction.questionDiv = document.createElement('div');
					Interaction.questionDiv.id = 'questionDiv';
					$(Interaction.container).append(Interaction.questionDiv);
					$(Interaction.questionDiv).css({
							position: 'absolute',
							top: '40px',
							left: '80px',
							width: '400px',
							height: '100px',
						//	border: 'solid'
						});
					
					Interaction.sortingUl = document.createElement('ul');
					Interaction.sortingUl.id = 'sortingUl';
					$(Interaction.questionDiv).append(Interaction.sortingUl);
					$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="secondFrac"><div id="secondFracDiv"></div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><img id="lessThan3" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li>');
					$(Interaction.sortingUl).css({
							width: '400px',
							height: '100px',
						//	border: 'solid'
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
				//	$(container).append("<style> #sortingUl img {float:left; width:32px; height:32px;}</style>");
					$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
					
					$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
					$('#firstFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line1').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
					$('#secondFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line2').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
					$('#thirdFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line3').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
					$('#fourthFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line4').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					Interaction.nom3D = $('#nom3').get(0);
					Interaction.denom3D = $('#denom3').get(0);
					Interaction.nom4D = $('#nom4').get(0);
					Interaction.denom4D = $('#denom4').get(0);
					
					$(Interaction.nomD).html(Interaction.nom[0]);
					$(Interaction.denomD).html(Interaction.denom[0]);
					$(Interaction.nom2D).html(Interaction.nom[1]);
					$(Interaction.denom2D).html(Interaction.denom[1]);
					$(Interaction.nom3D).html(Interaction.nom[2]);
					$(Interaction.denom3D).html(Interaction.denom[2]);
					$(Interaction.nom4D).html(Interaction.nom[3]);
					$(Interaction.denom4D).html(Interaction.denom[3]);
					
				}
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					console.log("sorting with 4 fractions in ascending order");
					
					Interaction.questionDiv = document.createElement('div');
					Interaction.questionDiv.id = 'questionDiv';
					$(Interaction.container).append(Interaction.questionDiv);
					$(Interaction.questionDiv).css({
							position: 'absolute',
							top: '40px',
							left: '80px',
							width: '400px',
							height: '100px',
						//	border: 'solid'
						});
					
					Interaction.sortingUl = document.createElement('ul');
					Interaction.sortingUl.id = 'sortingUl';
					$(Interaction.questionDiv).append(Interaction.sortingUl);
					$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="secondFrac"><div id="secondFracDiv"></div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><img id="lessThan3" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li>');
					$(Interaction.sortingUl).css({
							width: '400px',
							height: '100px',
						//	border: 'solid'
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
				//	$(container).append("<style> #sortingUl img {float:left; width:32px; height:32px;}</style>");
					$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
					
					$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
					$('#firstFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line1').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
					$('#secondFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line2').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
					$('#thirdFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line3').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
					$('#fourthFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line4').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					Interaction.nom3D = $('#nom3').get(0);
					Interaction.denom3D = $('#denom3').get(0);
					Interaction.nom4D = $('#nom4').get(0);
					Interaction.denom4D = $('#denom4').get(0);
					
					$(Interaction.nomD).html(Interaction.nom[0]);
					$(Interaction.denomD).html(Interaction.denom[0]);
					$(Interaction.nom2D).html(Interaction.nom[1]);
					$(Interaction.denom2D).html(Interaction.denom[1]);
					$(Interaction.nom3D).html(Interaction.nom[2]);
					$(Interaction.denom3D).html(Interaction.denom[2]);
					$(Interaction.nom4D).html(Interaction.nom[3]);
					$(Interaction.denom4D).html(Interaction.denom[3]);
					
				}
			}
			else{ // sorting with 5 fractions
			Interaction.numOfFracs = 5;
				if(Interaction.qType == 0){ // sorting in descending order
			//	if(1){
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.')
					console.log("sorting with 5 fractions in descending order");
					
					Interaction.questionDiv = document.createElement('div');
					Interaction.questionDiv.id = 'questionDiv';
					$(Interaction.container).append(Interaction.questionDiv);
					$(Interaction.questionDiv).css({
							position: 'absolute',
							top: '40px',
							left: '40px',
							width: '500px',
							height: '100px',
						//	border: 'solid'
						});
					
					Interaction.sortingUl = document.createElement('ul');
					Interaction.sortingUl.id = 'sortingUl';
					$(Interaction.questionDiv).append(Interaction.sortingUl);
					$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="secondFrac"><div id="secondFracDiv"></div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><img id="lessThan3" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li><img id="lessThan4" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" /><li id="fifthFrac"><div id="fifthFracDiv"></div></li>');
					$(Interaction.sortingUl).css({
							width: '500px',
							height: '100px',
						//	border: 'solid'
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
				//	$(container).append("<style> #sortingUl img {float:left; width:32px; height:32px;}</style>");
					$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
					
					$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
					$('#firstFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line1').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
					$('#secondFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line2').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
					$('#thirdFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line3').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
					$('#fourthFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line4').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#fifthFracDiv').html('<div id="nom5">9</div><div id="line5"></div><div id="denom5">10</div>');
					$('#fifthFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line5').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom5').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom5').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					Interaction.nom3D = $('#nom3').get(0);
					Interaction.denom3D = $('#denom3').get(0);
					Interaction.nom4D = $('#nom4').get(0);
					Interaction.denom4D = $('#denom4').get(0);
					Interaction.nom5D = $('#nom5').get(0);
					Interaction.denom5D = $('#denom5').get(0);
					
					$(Interaction.nomD).html(Interaction.nom[0]);
					$(Interaction.denomD).html(Interaction.denom[0]);
					$(Interaction.nom2D).html(Interaction.nom[1]);
					$(Interaction.denom2D).html(Interaction.denom[1]);
					$(Interaction.nom3D).html(Interaction.nom[2]);
					$(Interaction.denom3D).html(Interaction.denom[2]);
					$(Interaction.nom4D).html(Interaction.nom[3]);
					$(Interaction.denom4D).html(Interaction.denom[3]);
					$(Interaction.nom5D).html(Interaction.nom[4]);
					$(Interaction.denom5D).html(Interaction.denom[4]);
					
				}
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					console.log("sorting with 5 fractions in ascending order");
					
					Interaction.questionDiv = document.createElement('div');
					Interaction.questionDiv.id = 'questionDiv';
					$(Interaction.container).append(Interaction.questionDiv);
					$(Interaction.questionDiv).css({
							position: 'absolute',
							top: '40px',
							left: '40px',
							width: '500px',
							height: '100px',
						//	border: 'solid'
						});
					
					Interaction.sortingUl = document.createElement('ul');
					Interaction.sortingUl.id = 'sortingUl';
					$(Interaction.questionDiv).append(Interaction.sortingUl);
					$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><img id="lessThan1" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="secondFrac"><div id="secondFracDiv"></div></li><img id="lessThan2" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><img id="lessThan3" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li><img id="lessThan4" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><li id="fifthFrac"><div id="fifthFracDiv"></div></li>');
					$(Interaction.sortingUl).css({
							width: '500px',
							height: '100px',
						//	border: 'solid'
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
				//	$(container).append("<style> #sortingUl img {float:left; width:32px; height:32px;}</style>");
					$(container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
					
					$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
					$('#firstFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line1').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
					$('#secondFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line2').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#denom2').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
					$('#thirdFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line3').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom3').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
					$('#fourthFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line4').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom4').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					$('#fifthFracDiv').html('<div id="nom5">9</div><div id="line5"></div><div id="denom5">10</div>');
					$('#fifthFracDiv').css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
							//	.css("float", "right")
								.css("cursor","pointer");
					
					$('#line5').css("height", "1px")
								.css("width", "32px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom5').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
						//		.css("border", "solid")
					
					$('#denom5').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
							//	.css("border", "solid")
					
					Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					Interaction.nom3D = $('#nom3').get(0);
					Interaction.denom3D = $('#denom3').get(0);
					Interaction.nom4D = $('#nom4').get(0);
					Interaction.denom4D = $('#denom4').get(0);
					Interaction.nom5D = $('#nom5').get(0);
					Interaction.denom5D = $('#denom5').get(0);
					
					$(Interaction.nomD).html(Interaction.nom[0]);
					$(Interaction.denomD).html(Interaction.denom[0]);
					$(Interaction.nom2D).html(Interaction.nom[1]);
					$(Interaction.denom2D).html(Interaction.denom[1]);
					$(Interaction.nom3D).html(Interaction.nom[2]);
					$(Interaction.denom3D).html(Interaction.denom[2]);
					$(Interaction.nom4D).html(Interaction.nom[3]);
					$(Interaction.denom4D).html(Interaction.denom[3]);
					$(Interaction.nom5D).html(Interaction.nom[4]);
					$(Interaction.denom5D).html(Interaction.denom[4]);
					
				}
			}
	
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
			
			Interaction.frac = [];
			Interaction.sortedFrac = [];
			Interaction.answerIdsArray = [];
			for(var i = 0; i < Interaction.numOfFracs; i++){
				Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
			}
			Interaction.sortedFrac = Interaction.frac.sort();
			for(var i = 0; i < Interaction.numOfFracs; i++){
				Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
			}
			console.log(Interaction.frac);
			console.log(Interaction.sortedFrac);
			console.log(Interaction.answerIdsArray);
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		},
	getFractionsToBeSorted: function(numOfFracs){
		Interaction.nom = [];
		Interaction.denom = [];
		
		Interaction.baseDenom = Util.randomInteger(4, 8);
	//	Interaction.denom[0] = baseDenom;
	//	Interaction.nom[0] = Util.randomInteger(1, Interaction.denom[0]);

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