var cubeStyle = {
	strokeColor:'#000',
	strokeWidth:2,
	fillColor:'#fff'
};
var Animation = {
	init:function(container){
		
			project.activeLayer.removeChildren();
		}
}
var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.zeroPoint = new Point(Interaction.paper.width*0.2,Interaction.paper.height*0.4);
			Interaction.nextQuestion();
		},
	nextQuestion:function(){
			var zero = Interaction.zeroPoint;
			var a = 30;
			//var c = new UnitCube(0,0,0);
			var cubes = [];
			for(var i=0; i<3; i++)
				for(var j=0; j<6 ;j++)
					for(var k=0; k<3;k++)
						cubes.push(new UnitCube(i,j%k,k));
			
			cubes.sort(UnitCube.compare);
			
			for(var i=0; i<cubes.length;i++){
				//console.log(cubes[i].x,cubes[i].y,cubes[i].z)
				var p = zero.add(cubes[i].x*a,-cubes[i].y*a);
				p = p.add(-cubes[i].z*a*0.3,cubes[i].z*a*0.3)
				cubes[i].draw(p,a);
			}
		},
		
};

function UnitCube(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.draw = function(p,s){
		this.shape = new Path.Cube(p,s);
		this.shape.setStyle(cubeStyle);
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
