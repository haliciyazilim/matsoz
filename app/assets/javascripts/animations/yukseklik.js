// JavaScript Document

var shapeStyle = {
	strokeColor:'#000',strokeWidth:2
};
var dashedLineStyle = {
	strokeColor:'#333',
	strokeWidth:1,
	dashArray:[3,2]
};
var heightLineStyle = {
	strokeColor:'#f00',
	strokeWidth:2
};
var textStyle = {

}
var Animation = {
	images:[
		{
			id:'wall',
			src:'/assets/animations/yukseklik/wall.png'	
		},
		{
			id:'redline',
			src:'/assets/animations/yukseklik/redline.png'	
		},
		{
			id:'height',
			src:'/assets/animations/yukseklik/height.png'	
		}
	],
	init:function(container){
		Animation.container = container;
		var w = $(container).width();
		var h = $(container).height();
		var p = new Point(w*0.5+0.5,h*0.5);
		
		var r1 = new Raster('wall');
		var r2 = new Raster('redline');
		var r3 = new Raster('height');
		
		r1.position = new Point(p);
		r2.position = new Point(p);
		r3.position = new Point(p);
		
		r1.opacity = 0;
		r2.opacity = 0;
		r3.opacity = 0;
		
		r1.animate({
			style:{opacity:1},
			duration:1000,
			delay:100
		});
		r2.animate({
			style:{opacity:1},
			duration:1000,
			delay:1200
		});
		r3.animate({
			style:{opacity:1},
			duration:1000,
			delay:2300
		});
		 
	}
};

var Interaction = {
	
	getFramework : function() {
		return 'paper';
	},
	
	init : function(container){
		Main.setObjective('Yandaki geometrik şeklin köşelerinden herhangi birine fare ile tıklayınız. Belirlediğiniz noktaya göre yüksekliğin bulunuşunu inceleyiniz.');
		Interaction.container = container;
		Interaction.paper = {width:$(container).width(), height: $(container).height()}

		Interaction.shapeCount = 0;
		Interaction.nextButton = document.createElement('input');
		Interaction.nextButton.setAttribute('type','button');
		$(container).append(Interaction.nextButton);
		$(Interaction.nextButton)
			.attr({
				value:'Sonraki',
				class:'control_button'
			})
			.css({
				position:'absolute',
				bottom:'10px',
				right:'10px'
			})
			.click(Interaction.nextQuestion);
		Interaction.nextQuestion();
		Interaction.createTool();
	},
	nextQuestion : function(){
		project.activeLayer.removeChildren();
		Interaction.shapeCount++;
		Interaction.drawHeightLine.vertexLetter = false;
		Interaction.letters = ["E","D","C","B","A"];
		var X = Interaction.paper.width*0.5-100;
		var Y = Interaction.paper.height*0.5-75;
		var W = 200;
		var H = 200;
		var NUMBER_OF_SHAPES  = 9 ;
		var phase = Math.floor(Math.random()*60)-30;

		Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
		if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
		Interaction.shapeType = Interaction.shuffledArray[Interaction.shapeCount];	
		/*TEST*/ 
		//	Interaction.shapeType = 8 ;
		/*TEST*/

		switch(Interaction.shapeType){
			case 0://square
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[45,135,225,315],phase);
				break;
			case 1://rectangle
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[60,120,240,300],phase);
				break;
			case 2:
				Interaction.shape = new Path.Rhomboid(new Point(X,Y),new Size(W*0.8,H*0.4),W*0.2,phase);
				break;
			case 3://wide angled triangle
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[100,160,240],phase);		
				break;
			case 4://equilateral triangle
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[90,210,340],phase);		
				break;
			case 5://isosceles triangle (ikizkenar ucgen)
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[90,240,300],phase);		
				break;
			case 6://trapezoid
				Interaction.shape = new Path.Trapezoid(new Point(X,Y),new Size(W,H*0.5),W*0.1,W*0.4,phase);
				break;
			case 7://IsoscelesTrapezoid
				Interaction.shape = new Path.IsoscelesTrapezoid(new Point(X,Y),new Size(W,H*0.5),W*0.3,phase);
				break;
			case 8://Right Trapezoid
				Interaction.shape = new Path.Trapezoid(new Point(X,Y),new Size(W*0.8,H*0.5),W*0.3,0,phase);
				break;
				
		};
		Interaction.shape.setStyle(shapeStyle);
		Interaction.drawHeightLine(0);
		for(var i=0;i<Interaction.shape.vertexArray.length;i++){
			var j = (i+1)%Interaction.shape.vertexArray.length;
			var p = Interaction.shape.vertexArray[i].findPointTo(Interaction.shape.centerPoint,-15)
			Interaction.printVertexLetters(p);
		}	
		
	},
	createTool : function(){
		
		var POINT_HIT_TOLERANCE = 40;
		
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
		if(Interaction.heightLine)
			Interaction.heightLine.remove();
		var p1,p2,p,h;
				p = Interaction.shape.vertexArray[index];
		switch(Interaction.shape.vertexArray.length){
			case 4:
				p1 = Interaction.shape.vertexArray[(index+1)%4];
				p2 = Interaction.shape.vertexArray[(index+2)%4];
				h = p.projectToLine(p1,p2); 
				break;
				
			case 3:
				p1 = Interaction.shape.vertexArray[(index+1)%3];
				p2 = Interaction.shape.vertexArray[(index+2)%3];
				h = p.projectToLine(p1,p2); 
				break;
		}
		//Interaction.shape.centerPoint.showOnCanvas();
		Interaction.heightLine = new Group();
		Interaction.heightLine.addChild(
			new Path.Line(p,h)
				.setStyle(heightLineStyle)
		)
		var d;//distant point
		var c;//closest point
		if(h.getDistance(p1) > h.getDistance(p2)){
			d = p1;
			c = p2;
		}
		else{
			c = p1;
			d = p2;
		}
		var d_ph = h.findPointTo(d,10);
		var p_ph = h.findPointTo(p,10);;
		var m_ph = Util.centerOfPoints([d_ph,p_ph]);
		var s_ph = h.symmetricTo(m_ph);
		var l1 = new Path.Line(d_ph,s_ph).setStyle(heightLineStyle);
		var l2 = new Path.Line(p_ph,s_ph).setStyle(heightLineStyle);
		var m  = new Path.Circle(m_ph,1).setStyle(heightLineStyle);
		Interaction.heightLine.addChild(l1);
		Interaction.heightLine.addChild(l2);
		Interaction.heightLine.addChild(m);
		//decide to draw a dahsed line
		if(!h.isBetweenTwoLinePoints(p1,p2))
			Interaction.heightLine.addChild(
				new Path.Line(h,c)
					.setStyle(dashedLineStyle)
			);
		var t_p = h.findPointTo(p,-15);
		if(Interaction.drawHeightLine.vertexLetter)
			Interaction.drawHeightLine.vertexLetter.position = t_p;
		else
			Interaction.drawHeightLine.vertexLetter = Interaction.printVertexLetters(t_p);
		var hText = new PointText(
			h.add(p)
				.multiply(0.5,0.5)
				.add(-10,10)
		); 
		hText.content = 'h';
		Interaction.heightLine.addChild(hText);
	},
	printVertexLetters : function(p){
			var text = new PointText(p);
			text.content = ""+Interaction.letters.shift();
			text.setStyle(textStyle);
			return text;
	}
}