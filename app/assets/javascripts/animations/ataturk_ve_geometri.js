// JavaScript Document

var Interaction = {};
var Animation = {
	images:[
			{
				id:'ornek0',
				src:'/assets/animations/ataturk_ve_geometri/ornek0.png'
			},
			{
				id:'ornek1',
				src:'/assets/animations/ataturk_ve_geometri/ornek1.png'
			},
			{
				id:'ornek2',
				src:'/assets/animations/ataturk_ve_geometri/ornek2.png'
			},
			{
				id:'ornek3',
				src:'/assets/animations/ataturk_ve_geometri/ornek3.png'
			}
		],
	init:function(container){
			Animation.container = container;
			var x=110,y=30;
			for(var i=0;i<4;i++){
				var img = document.createElement('img');
				img.src = Animation.images[i].src;
				$(container).append(img);
				$(img)
					.css({
						position:'absolute',
						top:y,
						left:x+150*i,
						opacity:0
					})
					.delay(1100*i)
					.animate(
						{opacity:1},
						1000
					);
			}
		}
};
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.images = [
	{
		id:'aciortay',
		src: '/assets/animations/ataturk_ve_geometri/aciortay.png'
	},
	{
		id:'dortgen',
		src: '/assets/animations/ataturk_ve_geometri/dortgen.png'
	},
	{
		id:'aci',
		src: '/assets/animations/ataturk_ve_geometri/aci.png'
	},
	{
		id:'besgen',
		src: '/assets/animations/ataturk_ve_geometri/besgen.png'
	},
	{
		id:'bolen',
		src: '/assets/animations/ataturk_ve_geometri/bolen.png'
	},
	{
		id:'bolme',
		src: '/assets/animations/ataturk_ve_geometri/bolme.png'
	},
	{
		id:'cap',
		src: '/assets/animations/ataturk_ve_geometri/cap.png'
	},
	{
		id:'carpan',
		src: '/assets/animations/ataturk_ve_geometri/carpan.png'
	},
	{
		id:'carpi',
		src: '/assets/animations/ataturk_ve_geometri/carpi.png'
	},
	{
		id:'cevre',
		src: '/assets/animations/ataturk_ve_geometri/cevre.png'
	},
	{
		id:'cikarma',
		src: '/assets/animations/ataturk_ve_geometri/cikarma.png'
	},
	{
		id:'daire_cember',
		src: '/assets/animations/ataturk_ve_geometri/daire_cember.png'
	},
	{
		id:'dik_ucgen',
		src: '/assets/animations/ataturk_ve_geometri/dik_ucgen.png'
	},
	{
		id:'dikdortgen',
		src: '/assets/animations/ataturk_ve_geometri/dikdortgen.png'
	},
	{
		id:'dikey',
		src: '/assets/animations/ataturk_ve_geometri/dikey.png'
	},
	{
		id:'kare',
		src: '/assets/animations/ataturk_ve_geometri/kare.png'
	},
	{
		id:'ondalik',
		src: '/assets/animations/ataturk_ve_geometri/ondalik.png'
	},
	{
		id:'pay',
		src: '/assets/animations/ataturk_ve_geometri/pay.png'
	},
	{
		id:'payda',
		src: '/assets/animations/ataturk_ve_geometri/payda.png'
	},
	{
		id:'piramid',
		src: '/assets/animations/ataturk_ve_geometri/piramid.png'
	},
	{
		id:'prizma',
		src: '/assets/animations/ataturk_ve_geometri/prizma.png'
	},
	{
		id:'sadelestirme',
		src: '/assets/animations/ataturk_ve_geometri/sadelestirme.png'
	},
	{
		id:'ucgen',
		src: '/assets/animations/ataturk_ve_geometri/ucgen.png'
	},
	{
		id:'yuzey',
		src: '/assets/animations/ataturk_ve_geometri/yuzey.png'
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
		left:Interaction.paper.width*0.5 - 290,
		textAlign:'right'
	});
	$(Interaction.new_word).css({
		left:Interaction.paper.width*0.5 + 150,
		textAlign:'left'
	});
	Interaction.next_button = document.createElement('input');
	Interaction.next_button.onclick = Interaction.nextQuestion;
	$(container).append(Interaction.next_button);
	Interaction.next_button.type = 'button';
	Interaction.next_button.className = 'next_button';
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
	///*TEST*/wordOrder=3;/*TEST*/
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
		shape: function(){
			var shape = new Raster('dortgen');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'müselles',
		newName:'üçgen',
		shape: function(){
			var shape = new Raster('ucgen');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'kaim zaviyeli müselles',
		newName:'dik üçgen',
		shape: function(){
			var shape = new Raster('dik_ucgen');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'muhit',
		newName:'çevre',
		shape: function(){
			var shape = new Raster('cevre');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'zarp',
		newName:'çarpı',
		shape: function(){
			var shape = new Raster('carpi');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
		
	},
	{
		oldName:'mazrup',
		newName:'çarpan',
		shape: function(){
			var shape = new Raster('carpan');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'muhit-i daire',
		newName:'çember',
		shape: function(){
			var shape = new Raster('daire_cember');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'tarh',
		newName:'çıkarma',
		shape: function(){
			var shape = new Raster('cikarma');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'aşa\'ri',
		newName:'ondalık',
		shape: function(){
			var shape = new Raster('ondalik');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'murabba',
		newName:'kare',
		shape: function(){
			var shape = new Raster('kare');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'satıh',
		newName:'yüzey',
		shape: function(){
			var shape = new Raster('yuzey');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'zâviye',
		newName:'açı',
		shape: function(){
			var shape = new Raster('aci');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'amûd',
		newName:'dikey',
		shape: function(){
			var shape = new Raster('dikey');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'mustatîl',
		newName:'dikdörtgen',
		shape: function(){
			var shape = new Raster('dikdortgen');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'muhammes',
		newName:'beşgen',
		shape: function(){
			var shape = new Raster('besgen');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'maksumunaleyh',
		newName:'bölen',
		shape: function(){
			var shape = new Raster('bolen');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'taksim',
		newName:'bölme',
		shape: function(){
			var shape = new Raster('bolme');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'ehram',
		newName:'piramid',
		shape: function(){
			var shape = new Raster('piramid');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'menşur',
		newName:'prizma',
		shape: function(){
			var shape = new Raster('prizma');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'ihtisar',
		newName:'sadeleştirme',
		shape: function(){
			var shape = new Raster('sadelestirme');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'suret',
		newName:'pay',
		shape: function(){
			var shape = new Raster('pay');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	},
	{
		oldName:'mahreç',
		newName:'payda',
		shape: function(){
			var shape = new Raster('payda');
			shape.position = [
				Math.floor(Interaction.shapeLimits.x+Interaction.shapeLimits.w*0.5),
				Math.floor(Interaction.shapeLimits.y+Interaction.shapeLimits.h*0.5)
			];
		}
	}
	
];
