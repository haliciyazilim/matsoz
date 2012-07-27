function __Styles(){
	planeStyle = {
		fillColor:new RgbColor(0.75,0.91,0.94,0.5),
		strokeColor:'#255b63',
		strokeWidth:1
	}
	clickableAreaStyle = {
		fillColor:new RgbColor(1,1,0.6,1),
		strokeColor:'#255b63',
		strokeWidth:1
	}
	planeSelectedStyle = {
		fillColor:new RgbColor(0.15,0.36,0.39,0.7),
	}
	typeDivCss = {
		position:'absolute',
		color:'#c90',
		border:'2px solid #c90',
		backgroundColor:'#900',
		width:'140px',
		height:'50px',
		top:'40px',
		right:'100px',
		fontWeight:'bold',
		lineHeight:'46px',
		textAlign:'center',
		boxSizing:'border-box'
	}
	notExistDivCss = {
		position:'absolute',
		color:'#cfc',
		border:'2px outset #afa',
		backgroundColor:'#363',
		width:'70px',
		height:'50px',
		top:'40px',
		right:'10px',
		lineHeight:'46px',
		textAlign:'center',
		borderRadius:'25px',
		boxSizing:'border-box'
	}
	notExistDivSelectedCss = {
		toString:function(){
			return  'background-color:#030 !important; '+
					/*'font-weight:bold !important;'+*/
					'border:2px inset #afa !important;';
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
			Interaction.createTool();
			if(Interaction.shape)
				Interaction.shape.remove();
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
			/*<[[TestCode*/
				//var cube = new Cube(new Point(150.5,150.5),130);
				var cube = new Cube(new Point(0,0),130);
				console.log(cube);
				Interaction.shape = cube.draw();
				console.log(Interaction.shape);
				//shape.set_style(shapeStyle);
			/*TestCode]]>*/
			
		},
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
			switch(Interaction.shapeType){
				case 0://cube
				case 1://square prisim
				case 2://rectangular prisim
				case 3://triangle prisim
				case 5://pyramid
					if(Interaction.qType == Interaction._types.INTERSECTING){
						if(Interaction);
					}
						
					break;
				case 4://cylinder
				case 6://cone
				case 7://sphere
					//if(Interaction.qType == Interaction._types.INTERSECTING)
						
			}
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		},
	createTool : function(){
			Interaction.tool = new Tool();
			Interaction.tool.count = 0;
			Interaction.tool.onMouseDown = function(event){
				if(event.item && event.item.class == "ClickableArea"){
					
					if(event.item.plane.isPlaneSelected == false){
						if(this.count < 2){
							event.item.plane.set_style(planeSelectedStyle);
							event.item.plane.isPlaneSelected = true;
							this.count++;
						}
					}
					else{
						event.item.plane.set_style(planeStyle);
						event.item.plane.isPlaneSelected = false;
						this.count--;
					}
				}
				console.log(this.count);
			}
			Interaction.tool.activate();
		}
}

function Plane(points){
	this.points = points;
	this.clickableArea = new ClickableArea(this);
	this.centerPoint = Util.centerOfPoint3s(this.points);
	this.set_style = function(style){
		this.style = style;
	}
	this.setParallelPlane = function(plane){
		this.parallelPlane = plane;
	}
	this.draw = function(){
		var shape = new Path();
		for(var i=0;i<this.points.length;i++){
			shape.add(projectPoint(this.points[i]));
		}
		shape.closed = true;
		if(this.style)
			shape.set_style(this.style);
		console.log("I'm ");
		shape.class = "Plane";
		shape.isPlaneSelected = false;
		shape.clickableArea = this.clickableArea.draw();
		shape.clickableArea.plane = shape;
		this.shape = shape;
		return shape;
	}
}
function ClickableArea(plane){
	this.plane = plane;
	this.draw = function(){
		var shape = new Path();
		var c = projectPoint(this.plane.centerPoint);
		for(var i=0;i<=this.plane.points.length;i++){
			var p = projectPoint(this.plane.points[i%this.plane.points.length]);
			var _p = c.findPointTo(p,20,true) 
			shape.add(Math.floor(_p.x)+0.5,Math.floor(_p.y)+0.5);
		}
		//var shape = new Path.Circle(c,10);
		shape.closed = true;
		shape.class = "ClickableArea";
		shape.set_style(clickableAreaStyle);
		this.shape = shape;
		return shape;
	}
}
function Cube(p,a){
	this.centerPoint = p;
	var x = p.x, y = p.y, z = a*5;
	p = [];
	p[0] = new Point3(x-a*0.5,y-a*0.5,z+a*0.5);
	p[1] = new Point3(x-a*0.5,y+a*0.5,z+a*0.5);
	p[2] = new Point3(x+a*0.5,y+a*0.5,z+a*0.5);
	p[3] = new Point3(x+a*0.5,y-a*0.5,z+a*0.5);
	p[4] = new Point3(x-a*0.5,y-a*0.5,z-a*0.5);
	p[5] = new Point3(x-a*0.5,y+a*0.5,z-a*0.5);
	p[6] = new Point3(x+a*0.5,y+a*0.5,z-a*0.5);
	p[7] = new Point3(x+a*0.5,y-a*0.5,z-a*0.5);
	/*
	*	generate planes here
	*/
	this.planes = [];
	//front
	this.planes.push(new Plane([p[0],p[1],p[2],p[3]]));
	//back
	this.planes.push(new Plane([p[4],p[5],p[6],p[7]]));
	//left
	this.planes.push(new Plane([p[0],p[1],p[5],p[4]]));
	//right
	this.planes.push(new Plane([p[3],p[2],p[6],p[7]]));
	//top
	this.planes.push(new Plane([p[0],p[3],p[7],p[4]]));
	//bottom
	this.planes.push(new Plane([p[1],p[2],p[6],p[5]]));
	
	//set parallelisim
	this.planes[0].setParallelPlane(this.planes[1]);//front to back
	this.planes[2].setParallelPlane(this.planes[3]);//left to right
	this.planes[4].setParallelPlane(this.planes[5]);//top to bottom
	
	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	
	/*<[[TestCode*/
	//	this.planes[2].set_style({fillColor:new RgbColor(0.5,1,1,0.5)});
	/*TestCode]]>*/
	
	this.draw = function(){
		//var shape = new Group();
		var shape = [];
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
		//	shape.addChild(this.planes[i].draw());
			shape.push(this.planes[i].draw())
		}
		shape.class = "Cube";
		
		return shape;
	}
}


function projectPoint(p){
	//var x,y;
	var matrix = Util.createProjectionMatrix(
		Interaction.paper.width, 
		Interaction.paper.height, 
		Interaction.paper.width, 
		Interaction.paper.height, 
		Interaction.paper.width
	);
	return Util.project([p.x,p.y,p.z], matrix);
//	x = p.x - p.z*Math.cos(Util.degreeToRadians(45));
//	y = p.y + p.z*Math.cos(Util.degreeToRadians(45));
//	//console.log(x,y);
//	
	//return new Point(Math.floor(x),Math.floor(y));
}



Plane.compare = function(p1,p2){
	var a = p1.centerPoint;
	var b = p2.centerPoint;
	if(a.z > b.z)
		return -1;
	if(a.z < b.z)
		return 1;
	if(a.y < b.y)
		return 1;
	if(a.y > b.y)
		return -1;
	if(a.x > b.x)
		return 1
	if(a.x < b.x)
		return -1;
	return 0;
}






