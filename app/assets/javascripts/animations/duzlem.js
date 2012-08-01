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
							$(this).attr('__selected','true');
							$(this).addClass('selected');
							Interaction.deselectPlanes();
						}
						else{
							$(this).attr('__selected','false');
							$(this).removeClass('selected');
						}
					});
			Interaction.notExistDiv.deselect = function(){
				$(Interaction.notExistDiv).attr('__selected','false');
				$(Interaction.notExistDiv).removeClass('selected');
			}
			Interaction.notExistDiv.isSelected = function(){
				return $(Interaction.notExistDiv).attr('__selected') == 'true' ? true : false;
			}
			$(container).append('<style>#notExistDiv.selected { '+notExistDivSelectedCss.toString()+' }</style>')
			Interaction.setRandomGenerator(8);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			Interaction.createTool();
			Main.interactionProject.activeLayer.removeChildren()
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
				var cube = new Cube(new Point(150,150),130);
				Interaction.shape = cube.draw();
				Interaction.shapeType = 0;
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
					if(Interaction.notExistDiv.isSelected())
						return false;
					var planes = Interaction.getSelectedPlanes();
					if(Interaction.qType == Interaction._types.INTERSECTING)
						return !planes[0].isParallelTo(planes[1]);
					if(Interaction.qType == Interaction._types.PARALLEL)
						return planes[0].isParallelTo(planes[1]);
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
	getParallelPlanePairs : function(){
			var planes = [];
			function _recursive(node){
				if(node.class == 'Plane'){
					planes.push({plane:node.plane,hasParallel:false});
				}
				else{
					$(node.children).each(function(index, element) {
                    	_recursive(this);   
                    });
				}
			}
			_recursive(Main.interactionProject.activeLayer);
			
			var planePairs = [];
			for(var i=0; i<planes.length;i++)
				for(var j=0; j<planes.length;j++){
					if(i==j || planes[i].hasParallel == true || planes[j].hasParallel == true)
						continue;
					if(planes[i].plane.isParallelTo(planes[j].plane)){
						planes[i].hasParallel = true;
						planes[j].hasParallel = true;
						planePairs.push([
							planes[i].plane,
							planes[j].plane
						]);
						
					}
				}
			return planePairs;
		},
	getSelectedPlanes : function(){
			var resultArray = [];
			function _recursive(node){
				if(node.class == 'ClickableArea' && node.plane.isSelected() == true){
					resultArray.push(node.plane.plane);
				}
				else{
					$(node.children).each(function(index, element) {
                    	_recursive(this);   
                    });
				}
			}
			_recursive(Main.interactionProject.activeLayer);
			return resultArray;
		},
	deselectPlanes : function(){
			Interaction.tool.count = 0;
			function _recursive(node){
				if(node.class == 'ClickableArea'){
					node.plane.set_style(planeStyle);
					node.plane.isPlaneSelected = false;
				}
				else{
					$(node.children).each(function(index, element) {
                    	_recursive(this);   
                    });
				}
			}
			_recursive(Main.interactionProject.activeLayer);
		},
	createTool : function(){
			Interaction.tool = new Tool();
			Interaction.tool.count = 0;
			Interaction.tool.onMouseDown = function(event){
				$(Main.interactionProject.activeLayer.getItemsByClass('ClickableArea')).each(function(index, element) {
                    if(this.bounds.contains(event.point))
						event.item = this;
                });
				if(event.item.plane.plane.isSelected() == false){
					if(this.count < 2){
						event.item.plane.plane.select()
						this.count++;
						Interaction.notExistDiv.deselect();
					}
				}
				else{
					event.item.plane.plane.deselect()
					this.count--;
				}
			}
			Interaction.tool.activate();
		}
}

function Plane(points){
	this.points = points;
	this.centerPoint = Util.centerOfPoint3s(this.points);
	this.clickableArea = new ClickableArea(this);
	this.isPlaneSelected = false;
	this.setParent = function(parent){
		this.parent = parent;
		this.matrix = this.parent.matrix;
		this.clickableArea.setParent(this);
		return this;
	}
	this.isParallelTo = function(other){
		var n1 = this.getNormal();
		var n2 = other.getNormal();
		var d1 = n1.dot(n2);
		var d2 = n1.dot(n2);
		if(d1 == 1 || d2== -1)
			return true;
		else
			return false;
	}
	this.getNormal = function(){
		var p1 = this.points[1].subtract(this.points[0]);
		var p2 = this.points[2].subtract(this.points[0]);
		var c = p1.cross(p2);
		return c.normalize();
	}
	this.isSelected = function(){
		return this.isPlaneSelected;
	}
	this.select = function(time){
		if(!time)
			time = 0;
		Interaction.pause = true;
		this.shape.animate({
			style:{fillColor:planeSelectedStyle.fillColor},
			duration:time,
			callback:function(){
				this.isPlaneSelected = true;
				Interaction.pause = false;
			}
		});			
	}
	this.deselect = function(time){
		if(!time)
			time = 0;
		Interaction.pause = true;
		this.shape.animate({
			style:{fillColor:planeStyle.fillColor},
			duration:time,
			callback:function(){
				this.isPlaneSelected = false;
				Interaction.pause = false;
			}
		});			
	}
	this.set_style = function(style){
		this.style = style;
	}
	this.draw = function(){
		var shape = new Path();
		for(var i=0;i<this.points.length;i++){
			shape.add(projectPoint(this.points[i],this.matrix));
		}
		shape.closed = true;
		if(this.style)
			shape.set_style(this.style);
		shape.class = "Plane";
		shape.isPlaneSelected = false;
		shape.plane = this;
		shape.clickableArea = this.clickableArea.draw();
		shape.clickableArea.plane = shape;
		this.shape = shape;
		return shape;
	}
}
function ClickableArea(plane){
	this.plane = plane;
	this.matrix = this.plane.matrix;
	
	this.setParent = function(parent){
		this.parent = parent;
		this.matrix = this.parent.matrix;
		return this;
	}
	this.draw = function(){
		var shape = new Path();
		var c = projectPoint(this.plane.centerPoint,this.matrix);
		for(var i=0;i<=this.plane.points.length;i++){
			//console.log(this.matrix);
			var p = projectPoint(this.plane.points[i%this.plane.points.length],this.matrix);
			var _p = c.findPointTo(p,20,true) 
			shape.add(Math.floor(_p.x)+0.5,Math.floor(_p.y)+0.5);
		}
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
	p[0] = new Point3(-a*0.5,-a*0.5,+a*0.5);
	p[1] = new Point3(-a*0.5,+a*0.5,+a*0.5);
	p[2] = new Point3(+a*0.5,+a*0.5,+a*0.5);
	p[3] = new Point3(+a*0.5,-a*0.5,+a*0.5);
	p[4] = new Point3(-a*0.5,-a*0.5,-a*0.5);
	p[5] = new Point3(-a*0.5,+a*0.5,-a*0.5);
	p[6] = new Point3(+a*0.5,+a*0.5,-a*0.5);
	p[7] = new Point3(+a*0.5,-a*0.5,-a*0.5);
	/*
	*	generate planes here
	*/
	this.matrix = Util.createProjectionMatrixForObjectAt(x,y);
	//console.log(this.matrix);
	this.planes = [];
	//front
	this.planes.push(new Plane([p[0],p[1],p[2],p[3]]).setParent(this));
	//back
	this.planes.push(new Plane([p[4],p[5],p[6],p[7]]).setParent(this));
	//left
	this.planes.push(new Plane([p[0],p[1],p[5],p[4]]).setParent(this));
	//right
	this.planes.push(new Plane([p[3],p[2],p[6],p[7]]).setParent(this));
	//top
	this.planes.push(new Plane([p[0],p[3],p[7],p[4]]).setParent(this));
	//bottom
	this.planes.push(new Plane([p[1],p[2],p[6],p[5]]).setParent(this));

	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	
	/*<[[TestCode*/
	//	this.planes[2].set_style({fillColor:new RgbColor(0.5,1,1,0.5)});
	/*TestCode]]>*/
	
	this.draw = function(){
		var shape = [];
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
			shape.push(this.planes[i].draw())
		}
		shape.class = "Cube";
		return shape;
	}
}

function projectPoint(p,matrix){
	//var x,y;
	if(p == undefined)
		throw 'p is not defined';
	if(matrix == undefined)
		throw 'matrix is not defined';
	return Util.project([p.x,p.y,p.z], matrix);
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