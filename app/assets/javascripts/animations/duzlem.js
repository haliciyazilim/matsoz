function __Styles(){
	shapeStyle = {
		fillColor:new RgbColor(1,1,1)
	}
	typeDivCss = {
		position:'absolute',
		color:'#c90',
		border:'2px solid #c90',
		backgroundColor:'#900',
		width:'140px',
		height:'40px',
		top:'40px',
		right:'100px',
		fontWeight:'bold',
		lineHeight:'40px',
		textAlign:'center'
	}
	notExistDivCss = {
		position:'absolute',
		color:'#afa',
		border:'2px solid #afa',
		backgroundColor:'#030',
		width:'70px',
		height:'40px',
		top:'40px',
		right:'10px',
		lineHeight:'40px',
		textAlign:'center',
		borderRadius:'25px'
	}
	notExistDivSelectedCss = {
		toString:function(){
			return 'background-color:#363 !important';
		}
	}
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
	_types:{
			PARALLEL:'Paralel Düzlemler',
			INTERSECTING:'Kesişen Düzlemler'
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki geometrik cisimlerin istenen paralel ya da kesişen düzlem ikilisine fare ile tıklayarak gösteriniz. Olmayanlar için “Yok” düğmesine tıklayınız.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.appendStatus({
				bottom:'40px',
				right:'40px'
			});
			Interaction.appendButton({
				bottom:'80px',
				right:'40px'
			});
			Interaction.typeDiv = document.createElement('div');
			$(container).append(Interaction.typeDiv);
			$(Interaction.typeDiv)
				.attr('id','typeDiv')
				.css(typeDivCss)
			
			Interaction.notExistDiv = document.createElement('div');
			$(container).append(Interaction.notExistDiv);
			$(Interaction.notExistDiv)
				.attr({
					'id':'notExistDiv',
					'__selected':'false'
					})
				.css(notExistDivCss)
				.html('Yok')
				.click(function(){
						if($(this).attr('__selected') == 'false'){
							$(this).attr('__selected','true')
							$(this).addClass('selected');
						}
						else{
							$(this).attr('__selected','false')
							$(this).removeClass('selected');
						}
					});
			$(container).append('<style>#notExistDiv.selected { '+notExistDivSelectedCss.toString()+' }</style>')
			Interaction.setRandomGenerator(8);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			Interaction.shapeType = randomNumber;
			Interaction.qType = Util.rand01()==0?Interaction._types.INTERSECTING:Interaction._types.PARALLEL;
			$(Interaction.typeDiv).html(Interaction.qType);
			switch(randomNumber){
				case 0://cube
				case 1://square prisim
				case 2://rectangular prisim
				case 3://triangle prisim
				case 4://cylinder
				case 5://pyramid
				case 6://cone
				case 7://sphere
			}
		},
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		},
}