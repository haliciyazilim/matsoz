var cubeStyle = {
	strokeColor:'#000',
	strokeWidth:1,
	fillColor:'#ffd9d9'
};
var Animation = {
	pathInit:function(){
			Path.Cube3d = function(p,a,xAngle,yAngle,zAngle){
				//p.showOnCanvas();
				yAngle = yAngle%90 - 45;
				if(zAngle == undefined)
					zAngle =0;
				function calculateRotation(p,o,angle){
					return p.getRotatedPoint(angle,o)
						.subtract(o)
						.multiply(1,Math.sin(Util.degreeToRadian(xAngle)))
						.add(o);
				}
				var p1,p2,p3,p4,p5,p6;
				var poBottom,poTop,poCenter;
				//a = a*Math.cos(Util.degreeToRadian(xAngle));
				var a_2_ = a*Math.sqrt(2);
				p1 = p.add(0,a_2_*0.5);
				p2 = p.add(0,a_2_*0.5+a*Math.cos(Util.degreeToRadian(xAngle)));
				p3 = p.add(a*Math.sqrt(2)*0.5,a*Math.cos(Util.degreeToRadian(xAngle))+a_2_);
				p4 = p.add(a*Math.sqrt(2),a*Math.cos(Util.degreeToRadian(xAngle))+a_2_*0.5);
				p5 = p.add(a*Math.sqrt(2),a_2_*0.5);
				p6 = p.add(a*Math.sqrt(2)*0.5,0);
				p7 = p.add(a*Math.sqrt(2)*0.5,a_2_);
				
				poBottom = Util.centerOfPoints([p2,p4]);
				poTop = Util.centerOfPoints([p1,p5]);
				poCenter = Util.centerOfPoints([p1,p2,p3,p4,p5,p6]);
				
				poBottom = poBottom.getRotatedPoint(zAngle,poCenter); 
				poTop = poTop.getRotatedPoint(zAngle,poCenter);
				
				p1 = calculateRotation(p1,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p5 = calculateRotation(p5,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p6 = calculateRotation(p6,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p7 = calculateRotation(p7,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p2 = calculateRotation(p2,poBottom,yAngle).getRotatedPoint(zAngle,poCenter);
				p3 = calculateRotation(p3,poBottom,yAngle).getRotatedPoint(zAngle,poCenter);
				p4 = calculateRotation(p4,poBottom,yAngle).getRotatedPoint(zAngle,poCenter);
				//rotate top points;
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
				//poBottom.showOnCanvas();
				//poTop.showOnCanvas();
				//poCenter.showOnCanvas();
				return cube;
			}
		},
	init:function(container){
			Animation.pathInit();
			Animation.container = container;
			Animation.angle = 0;
			var p = new Point(340,10);
			Animation.a = 50;
			var animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:0
			});
//			Animation.text = new PointText(300,50);
			
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30},
				duration:3000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube1)
						Animation.cube1.remove();
					//Animation.text.content = ""+Math.floor(this.angle);	
					Animation.cube1 = new Path.Cube3d(p,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube1.set_style(cubeStyle);
				}
			});
			
			animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:0,
				position:p.add(520,-120)
			})
			
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30,position:p.add(Animation.a*Math.sqrt(2)*0.5,Animation.a*Math.sqrt(2)*0.5*Math.sin(Util.degreeToRadian(30)))},
				duration:3000,
				delay:3000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube2)
						Animation.cube2.remove();
					//Animation.text.content = ""+Math.floor(this.angle);	
					Animation.cube2 = new Path.Cube3d(this.position,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube2.set_style(cubeStyle);
				}
			});
			
			animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:0,
				position:p.add(-200,+120)
			})
			
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30,position:p.add(-Animation.a*Math.sqrt(2)*0.5,Animation.a*Math.sqrt(2)*0.5*Math.sin(Util.degreeToRadian(30)))},
				duration:3000,
				delay:6000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube3)
						Animation.cube3.remove();
					//Animation.text.content = ""+Math.floor(this.angle);	
					Animation.cube3 = new Path.Cube3d(this.position,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube3.set_style(cubeStyle);
				}
			});
			
			
			
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
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki yapının kaç tane eş küp ile oluşturulduğunu bulunuz.');
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
				xCubes = Math.floor(Math.random()*4)+2;
				while(Interaction.xCubes == xCubes)
			do
				yCubes = Math.floor(Math.random()*2)+1;
				while(Interaction.yCubes == yCubes)
			do
				zCubes = Math.floor(Math.random()*4)+1;
			while(Interaction.zCubes == zCubes)
			
			Interaction.xCubes = xCubes;
			Interaction.yCubes = yCubes;
			Interaction.zCubes = zCubes;
			
			//console.log(xCubes,yCubes,zCubes);

			for(var i=0; i< xCubes ; i++)
				cubes.push(new UnitCube(i,0,0));
			for(var i=0; i< yCubes ; i++)
				cubes.push(new UnitCube(0,i+1,0));
			for(var i=0; i< zCubes ; i++)
				cubes.push(new UnitCube(0,0,i+1));
			
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
		this.shape = new Path.Cube3d(p,a,Interaction.h,45,0);
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
	var dY = a*Math.sqrt(2)*0.5;
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			0.5,
			Math.floor(-cubes[i].y*a*Math.cos(Util.degreeToRadian(Interaction.h)))+0.5
		);
		p = p.add(
			Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].x*dY*0.5)
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].z*dY*0.5)
		);
		
		cubes[i].draw(p,a,_s);
		cubes[i].shape.opacity = 0;
		cubes[i].shape.animate({
			style:{opacity:1},
			delay:delay*i,
			duration:100
			
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

