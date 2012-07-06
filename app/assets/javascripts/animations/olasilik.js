// JavaScript Document

/*Styles*/
var textStyle = {'font-size':'16px'};
var edgeStyle = {strokeColor:'#000',strokeWidth:2,fillColor:'#ff0',cursor:'move'};
var angleStyle = {'fill':'#DDD'};
/*Styles*/

var Animation = {};
var Interaction = {};

Interaction.images = [
	{
		id : 'tura',
		src : '/assets/animations/olasilik/tura.png'
	},
	{
		id : 'yazi',
		src : '/assets/animations/olasilik/yazi.png'
	},
	{
		id : 'hand',
		src : '/assets/animations/olasilik/hand.png'
	}
	
];
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Aşağıdaki madeni parayı yandaki resme fare ile tıklayarak istediğiniz kadar atarak tura geliş olasılığını izleyiniz.');
	Interaction.container = container;
	var w = $(container).width();
	var h = $(container).height();
	Interaction.position = [w*0.2,h*0.5]	
	
	Interaction.probability = {
		tura:0,
		total:0,
		div:document.createElement('div')
	};	
	Interaction.probability.div.innerHTML = 
		'<div id="numberoftura" style="width:50px;height:30px;padding:0;border:1px solid #000;margin:auto;"></div>'+
		'<div style="width:60px;height:1px;padding:0;border-top:2px solid #000;margin:auto;margin-top:5px;"></div>'+
		'<div id="total" style="width:50px;height:30px;padding:0;border:1px solid #000;margin:auto;margin-top:5px;"></div>';
	$(Interaction.probability.div).css({
		position:'absolute',
		top:h*0.5-105,
		right:'30px',
		textAlign:'center',
		lineHeight:'30px'
	});
	$(container).append(Interaction.probability.div);
	//
	$(container).append('<div style="position:absolute;right:95px;top:25%;">Tura gelme olasılığı = </div>')
	Interaction.side = new Raster(Util.rand01==1?'tura':'yazi')
	Interaction.side.position = Interaction.position;
	Interaction.hand = new Raster('hand');
	Interaction.hand.position = [w*0.6-20,h*0.6+10];
	Interaction.bindTool();
}

Interaction.setStatus = function(msg){
	Interaction.status.innerHTML = msg;
}


Interaction.nextQuestion = function(){
	Interaction.tool.remove();
	Interaction.side.remove();
	Interaction.probability.total++;
	if(Util.rand01() == 1){
		Interaction.sideName = "tura";
		Interaction.switchName = "yazi"
		Interaction.probability.tura++;
	}
	else{
		Interaction.sideName = "yazi";
		Interaction.switchName = "tura"
	}
	Interaction.angle = 0;
	Interaction.angle_old = 0;
	Interaction.startTime = new Date().getTime();
	
	var helper = {
		angle: 0
	}
	helper.animate = Item.prototype.animate;
	helper.animate({
		style:{angle:Math.PI*10},
		duration:3000,
		animationType: 'easeInEaseOut',
		callback:function(){
			Interaction.updateProbability();
		}
	});
	
	Interaction.onFrame = function(){

		if(Interaction.side)
			Interaction.side.remove();
		var angle = Math.floor(Util.radianToDegree(helper.angle)) % 360;
		
		if(angle < 90)
			Interaction.side = new Raster(Interaction.sideName);
		else if(angle <  270)
			Interaction.side = new Raster(Interaction.switchName);
		else
			Interaction.side = new Raster(Interaction.sideName);
			
		var h = Math.abs(Interaction.side.height * Math.cos(helper.angle));
		//w=0;
		if(h > 0 && h < 1)
			h=1;
		//console.log(Interaction.angle,w);
		var w = Interaction.side.width  //- Interaction.side.width*0.4 / z;
		Interaction.side.position = Interaction.position;
		Interaction.side.size = new Size(h,w );
		Interaction.angle_old = Interaction.angle;
	}

}

Interaction.updateProbability = function(){
	$('#numberoftura').html(Interaction.probability.tura);
	$('#total').html(Interaction.probability.total);
	Interaction.bindTool();
}

Interaction.bindTool = function(){
	var tool = new Tool();
	tool.onMouseDown = function(event){
		if(Interaction.hand.bounds.contains(event.point)){
			//Interaction.enterFullScreen();
			Interaction.nextQuestion();
		}
	}
	tool.activate();
	Interaction.tool = tool;
}














