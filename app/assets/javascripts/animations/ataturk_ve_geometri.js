// JavaScript Document

var Interaction = {};
var Animation = {};
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.images = [
	{
		id:'aciortay',
		src: '/assets/animations/ataturk_ve_geometri/aciortay.png'
	},
	{
		id:'cap',
		src: '/assets/animations/ataturk_ve_geometri/cap.png'
	}
]

Interaction.init = function(container){
	Main.setObjective('Atatürk’ün bulduğu ve bugün kullandığımız matematik sözcüklerinden bir kısmı:');
	Interaction.old_word = document.createElement('div');
	Interaction.new_word = document.createElement('div');
	Interaction.paper = {width:$(container).width(),height:$(container).height()};
	Interaction.shapeLimits = {
		x:Interaction.paper.width*0.5-75,
		y:Interaction.paper.height*0.5-75,
		w:150,
		h:150
	};
	$(container).append(Interaction.old_word);
	$(container).append(Interaction.new_word);
	$('div',container).css({
		position:'absolute',
		width:'150px',
		height:'30px',
		color:'rgb(111,47,159)',
		fontWeight:'bold',
		top:Interaction.paper.height*0.5-15
	});
	$(Interaction.old_word).css({
		left:Interaction.paper.width*0.5 - 250,
		textAlign:'right'
	});
	$(Interaction.new_word).css({
		left:Interaction.paper.width*0.5 + 100,
		textAlign:'left'
	});
	Interaction.next_button = document.createElement('input');
	Interaction.next_button.onclick = Interaction.nextQuestion;
	$(container).append(Interaction.next_button);
	Interaction.next_button.type = 'button';
	Interaction.next_button.className = 'control_button';
	Interaction.next_button.value = 'Sonraki';
	$(Interaction.next_button).css({
		position:'absolute',
		bottom:'10%',
		right:'10%',
		width:100,
		textAlign:'center'
	});
	Interaction.preventNextQuestion = false;
	var NUMBER_OF_SHAPES  = Interaction.words.length;
	Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
	Interaction.count = 0;
	Interaction.nextQuestion();
}
Interaction.nextQuestion = function(){
	if(Interaction.preventNextQuestion == true)
		return;
	Interaction.preventNextQuestion = false;
	project.activeLayer.removeChildren();
	var count = (Interaction.count++)%Interaction.shuffledArray.length;
	var wordOrder = Interaction.shuffledArray[count];
	/*TEST*/wordOrder=2;/*TEST*/
	var word = Interaction.words[wordOrder];
	$(Interaction.old_word).html(word.oldName);
	$(Interaction.new_word).html(word.newName);
	word.shape();
}

Interaction.words = [
	{
		oldName:'munassıf',
		newName:'açıortay',
		shape: function(){
			var shape = new Raster('aciortay');	
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5)+0.5,
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)+0.5
			];
		}
	},
	{
		oldName:'zait',
		newName:'artı',
		shape: function(){
			var hLine = new Path.Line(
				new Point(
					Interaction.shapeLimits.x+10,
					Interaction.shapeLimits.y + Interaction.shapeLimits.h*0.5
				),
				new Point(
					Interaction.shapeLimits.x + Interaction.shapeLimits.w - 10,
					Interaction.shapeLimits.y + Interaction.shapeLimits.h*0.5
				)
			);
			var vLine = new Path.Line(
				new Point(
					Interaction.shapeLimits.x + Interaction.shapeLimits.w*0.5,
					Interaction.shapeLimits.y + 10
				),
				new Point(
					Interaction.shapeLimits.x + Interaction.shapeLimits.w*0.5,
					Interaction.shapeLimits.y + Interaction.shapeLimits.h-10
				)
			);
			hLine.setStyle({
				strokeWidth:10,
				strokeColor:'#000'
			});
			vLine.setStyle({
				strokeWidth:10,
				strokeColor:'#000'
			});
		}
	},
	{
		oldName:'kutur',
		newName:'çap',
		shape: function(){
			var shape = new Raster('cap');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'zu-erbaat-ül-adlâ\'',
		newName:'dörtgen',
		shape: function(){}
	},
	{
		oldName:'müselles',
		newName:'üçgen',
		shape: function(){}
	},
	{
		oldName:'kaim zaviyeli müselles',
		newName:'dik üçgen',
		shape: function(){}
	},
	{
		oldName:'muhit',
		newName:'çevre',
		shape: function(){}
	},
	{
		oldName:'zarp',
		newName:'çarpı',
		shape: function(){}
	},
	{
		oldName:'mazrup',
		newName:'çarpan',
		shape: function(){}
	},
	{
		oldName:'muhit-i daire',
		newName:'çember',
		shape: function(){}
	},
	{
		oldName:'tarh',
		newName:'çıkarma',
		shape: function(){}
	},
	{
		oldName:'aşa\'ri',
		newName:'ondalık',
		shape: function(){}
	},
	{
		oldName:'murabba',
		newName:'kare',
		shape: function(){}
	},
	{
		oldName:'satıh',
		newName:'yüzey',
		shape: function(){}
	},
	{
		oldName:'zâviye',
		newName:'açı',
		shape: function(){}
	},
	{
		oldName:'amûd',
		newName:'dikey',
		shape: function(){}
	},
	{
		oldName:'mustatîl',
		newName:'dikdörtgen',
		shape: function(){}
	},
	{
		oldName:'muhammes',
		newName:'beşgen',
		shape: function(){}
	},
	{
		oldName:'maksumunaleyh',
		newName:'bölen',
		shape: function(){}
	},
	{
		oldName:'taksim',
		newName:'bölme',
		shape: function(){}
	},
	{
		oldName:'ehram',
		newName:'piramid',
		shape: function(){}
	},
	{
		oldName:'menşur',
		newName:'prizma',
		shape: function(){}
	},
	{
		oldName:'ihtisar',
		newName:'sadeleştirme',
		shape: function(){}
	},
	{
		oldName:'suret',
		newName:'pay',
		shape: function(){}
	},
	{
		oldName:'mahreç',
		newName:'payda',
		shape: function(){}
	}
	
];
