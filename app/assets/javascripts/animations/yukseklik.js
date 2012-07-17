// JavaScript Document

var shapeStyle = {
	strokeColor:'#000',strokeWidth:2
};
var Animation = {
	init:function(container){
	
	}
};
var Interaction = {
	
	getFramework : function() {
		return 'paper';
	},
	
	init : function(container){
		Interaction.container = container;
		Interaction.paper = {width:$(container).width(), height: $(container).height()}
	
		
//		/* burdan itibaren tasinacak */
//					var p1 = new Point(100,200);
//					var p2 =  new Point(200,200);
//					var p =new Point(250,100);
//					
//					p1.showOnCanvas();
//					p2.showOnCanvas();
//					p.showOnCanvas();
//					
//					var h = p.projectToLine(p1,p2);
//					h.showOnCanvas();
//					var t = new Path.Triangle(p1,p2,p).setStyle({strokeColor:'#000',strokeWidth:2});
//					var a = new Path.Line(h,p1).setStyle({strokeColor:'#aaa',strokeWidth:1,dashArray:[3,2]});
//					var b = new Path.Line(h,p1).setStyle({strokeColor:'#aaa',strokeWidth:1,dashArray:[3,2]});
//					a.insertBelow(t);
//					b.insertBelow(t);
//					new Path.Line(p,h).setStyle({strokeColor:'#f00',strokeWidth:2}).insertBelow(t);
//		/* buraya kadar olan kisim tasinacak */
		Interaction.shapeCount = 0;
		Interaction.nextQuestion();
		Interaction.createTool();
	},
	nextQuestion : function(){
		project.activeLayer.removeChildren();
		
		var X = Interaction.paper.width*0.5-100;
		var Y = Interaction.paper.height*0.5-100;
		var W = 200;
		var H = 200;
		//console.log(X,Y);
		var NUMBER_OF_SHAPES  = 4;
		Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
		if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
		Interaction.shapeType = Interaction.shuffledArray[Interaction.shapeCount];	
		//console.log(Interaction.shapeType);
		switch(Interaction.shapeType){
			case 0:
			case 1:
			case 2:
			case 3:
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[100,160,200]);		
				break;
		};
		Interaction.shape.setStyle(shapeStyle);
		
		
	},
	createTool : function(){
		
		var POINT_HIT_TOLERANCE = 10;
		
		var tool = new Tool();
		tool.onMouseDown = function(event){
			if(Interaction.shape == null || Interaction.shape == undefined)
				return;
			for(var i=0;i<Interaction.shape.vertexArray.length;i++)
				if(POINT_HIT_TOLERANCE > Interaction.shape.vertexArray[i].getDistance(event.point) ){
					Interaction.drawHeightLine(i);
				}
		};
		tool.activate();	
	},
	drawHeightLine : function(index){
		//console.log(index);
		if(Interaction.heightLine)
			Interaction.heightLine.remove();
		switch(Interaction.shape.vertexArray.length){
			case 3:
				var p = Interaction.shape.vertexArray[index]
				var h = p.projectToLine(
					Interaction.shape.vertexArray[(index+1)%3],
					Interaction.shape.vertexArray[(index+2)%3]
				); 
				
				Interaction.heightLine = new Path.Line(p,h)
					.setStyle({strokeColor:'#f00',strokeWidth:2});
				
				
				
				break;
					
		}
	}
	
}
