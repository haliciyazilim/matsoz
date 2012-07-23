var cubeStyle = {
	strokeColor:'#000',
	strokeWidth:1,
	fillColor:'#ffd9d9'
};
var Animation = {
	init:function(container){
		
		}
}

var Interaction = {
	images:[
			{
				id:'isometric_paper',
				src:'/assets/animations/es_kupler/isometric_paper.png'
			}
		],
	getFramework:function(){
			return 'paper';
		},
	pathInit:function(){
		Path.IsometricCube = function(p,a,h){
			var p1,p2,p3,p4,p5,p6;
			p1 = p.add(0,h*0.5);
			p2 = p.add(0,h*0.5+a);
			p3 = p.add(a*Math.sqrt(2)*0.5,a+h);
			p4 = p.add(a*Math.sqrt(2),a+h*0.5);
			p5 = p.add(a*Math.sqrt(2),h*0.5);
			p6 = p.add(a*Math.sqrt(2)*0.5,0);
			p7 = p.add(a*Math.sqrt(2)*0.5,h);
			var vertexArray = [];
			vertexArray.push(p1);
			vertexArray.push(p2);
			vertexArray.push(p3);
			vertexArray.push(p4);
			vertexArray.push(p5);
			vertexArray.push(p6);
			var centerPoint = Util.centerOfPoints(vertexArray);
			var cube = new Group();
			var outline = new Path();
			for(var i=0;i<vertexArray.length;i++){
				outline.add(vertexArray[i]);
			}
			outline.closed = true;
			
			cube.addChild(outline);
			cube.addChild(new Path.Line(p1,p7));
			cube.addChild(new Path.Line(p5,p7));
			cube.addChild(new Path.Line(p3,p7));
			return cube;
		}
	},
	init:function(container){
			Interaction.pathInit();
			Interaction.container = container;
			Main.setObjective('Yandaki yapının hacminin kaç birim küp olduğunu bulunuz ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.xZ = 0.4;
			Interaction.yZ = 0.5;
			Interaction.appendInput({
				position:'static'
			});
			Interaction.appendButton({
				top:'170px',
				right:'95px'
			});
			Interaction.appendStatus({
				top:'210px',
				right:'20px'
			});
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.append('Bu yapının hacmi&emsp;')
				.append(Interaction.input)
				.append('&emsp;birim küptür.')
				.css({
					position:'absolute',
					top:'130px',
					right:'20px'
				});
			Interaction.xCubes = 0;
			Interaction.yCubes = 0;
			Interaction.zCubes = 0;
			Interaction.zeroPoint = new Point(150,130);
			Interaction.a = 40;
			Interaction.h = 30;
			Interaction.prepareNextQuestion();
		},
	nextQuestion:function(){
			if(Interaction.pause == true)
				return;
			Interaction.pause = false;
			Main.interactionProject.activeLayer.removeChildren();
			Interaction.isometricPaper = new Raster('isometric_paper');
			Interaction.isometricPaper.position = Interaction.zeroPoint.add(17,25);
			var zero = Interaction.zeroPoint;
			var a = Interaction.a;
			
			var cubes = [];
			var zCubes, xCubes, yCubes;
			do
				xCubes = Math.floor(Math.random()*4)+3;
				while(Interaction.xCubes == xCubes)
			do
				yCubes = Math.floor(Math.random()*3)+1;
				while(Interaction.yCubes == yCubes)
			do
				zCubes = Math.floor(Math.random()*7)+1;
			while(zCubes/4 > xCubes-2 || Interaction.zCubes == zCubes)
			
			Interaction.xCubes = xCubes;
			Interaction.yCubes = yCubes;
			Interaction.zCubes = zCubes;
			
			//console.log(xCubes,yCubes,zCubes);

			for(var i=0; i< xCubes ; i++)
				cubes.push(new UnitCube(i-1,0,0));
			for(var i=0; i< yCubes ; i++)
				cubes.push(new UnitCube(0,i+1,0));
			for(var i=0; i< zCubes ; i++)
				cubes.push(new UnitCube(Math.floor(i/3),0,i%3+1));
			
			Interaction.cubes = cubes;
			UnitCube.drawCubesOneByOne(cubes,zero,a,Interaction,500);
		},
	showCubes : function(distance){
			if(Interaction.pause == true)
				return;
			Interaction.pause = true;
			var animHelp = new AnimationHelper({
				distance:0,
				update:function(){
					UnitCube.explode(
						Interaction.cubes,
						Interaction.zeroPoint,
						Interaction.a,
						this.distance,
						Interaction
					);
				}
			});
			animHelp.animate({
				style:{distance:distance},
				duration:1000,
				update:animHelp.update,
				callback:function(){
					Interaction.pause = false;
					/*this.animate({
						style:{distance:0},
						duration:1000,
						delay:500,
						update:this.update,
						callback:function(){
							
						}
					});*/
				}
			});	
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.cubes.length )
				return true;
			else
				return false;
		},
	onCorrectAnswer : function(){
			Interaction.showCubes(20);
		},
	onWrongAnswer : function(){
	
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu '+Interaction.cubes.length + ' olacaktı.',false);
			Interaction.showCubes(20);
		},
};

function UnitCube(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.draw = function(p,a,_s){
		if(this.shape)
			this.shape.remove();
		this.shape = new Path.IsometricCube(p,a,Interaction.h);
		this.shape.set_style(cubeStyle);
	};
}
UnitCube.compare = function(a,b){
		if(a.z > b.z)
			return 1;
		if(a.z < b.z)
			return -1;
		if(a.y > b.y)
			return 1;
		if(a.y < b.y)
			return -1;
		if(a.x > b.x)
			return 1
		if(a.x < b.x)
			return -1;
		return 0;
}
UnitCube.drawCubes = function(cubes,zero,a,h){
	//decide the draw order 				
	cubes.sort(UnitCube.compare);
	
	//draw the cubes
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			0.5,
			Math.floor(-cubes[i].y*a)+0.5
		);
		p = p.add(
			Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].x*Interaction.h*0.5)
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].z*Interaction.h*0.5)
		);
		
		cubes[i].draw(p,a,_s);
	}
}
UnitCube.drawCubesOneByOne = function(cubes,zero,a,_s,delay){
	
	cubes.sort(UnitCube.compare);
	
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			0.5,
			Math.floor(-cubes[i].y*a)+0.5
		);
		p = p.add(
			Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].x*Interaction.h*0.5)
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].z*Interaction.h*0.5)
		);
		
		cubes[i].draw(p,a,_s);
		cubes[i].shape.opacity = 0;
		cubes[i].shape.animate({
			style:{opacity:1},
			delay:delay*i,
			duration:delay
			
		});
		
	}
}

UnitCube.explode = function(cubes,zero,a,distance,_s){
	//decide the draw order 				
	cubes.sort(UnitCube.compare);
	//draw the cubes
	for(var i=0; i<cubes.length;i++){
		//console.log(cubes[i].x,cubes[i].y,cubes[i].z)
		var p = zero.add(cubes[i].x*a,-cubes[i].y*a);
		p = p.add(-cubes[i].z*a*_s.xZ,cubes[i].z*a*_s.yZ);
		p = p.add(distance*cubes[i].x,0);
		p = p.add(0,-distance*cubes[i].y);
		p = p.add(-cubes[i].z*distance*_s.xZ,cubes[i].z*distance*_s.yZ);
		cubes[i].draw(p,a,_s);
	}
}

