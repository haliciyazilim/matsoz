// JavaScript Document

var Main = function(){
	$(document).ready(Main.init);
}

Main.config = {
	defaultLibrary: "raphael"
};

Main.init = function(){
	Main.interaction = $('#interaction_container > .interaction').get(0);
	Main.animation = $('#animation_container > .animation').get(0);
	Main.objective = $('#interaction_container > .objective').get(0);
	Main.objective.className = "objective";
	//Main.InteractionContainer.appendChild(Main.ObjectiveContainer);
	var framework;
	if (typeof(Interaction.getFramework) == "function") {
		framework = Interaction.getFramework();
	} else {
		framework = Main.config.defaultLibrary;
	}
	
	if (framework == 'raphael') {
		Main.raphaelInit();
		Interaction.init(Main.interaction);
	} else if (framework == 'paper') {
		Main.scale = 1;
		paper.install(window);
		Main.paperInit();
		
		interactionWidth = 512;
		interactionHeight = 320;
		Main.interaction.innerHTML = "<canvas id='interaction_canvas' class='interaction_canvas' keepalive='true' width='"+interactionWidth*Main.scale+"px' height='"+interactionHeight*Main.scale+"px'></canvas>"
		canvas = $('.interaction_canvas').get(0);
		paper.setup(canvas);
		Main.interactionProject = paper.project;
		interactionView = paper.view;
		paper.defaultProject = Main.interactionProject;
		
		animationWidth = 512;
		animationHeight = 200;
		Main.animation.innerHTML = "<canvas id='animation_canvas' class='animation_canvas' keepalive='true' width='"+animationWidth*Main.scale+"px' height='"+animationHeight*Main.scale+"px'></canvas>"
		canvas = $('.animation_canvas').get(0);
		paper.setup(canvas);
		Main.animationProject = paper.project;
		animationView = paper.view;
		
		AnimationManager();
		
		animationReady = false;
		interactionReady = false;
		
		initializeRunLoop = function () {
			if (animationReady === true && interactionReady === true) {
				interactionView.onFrame = function(event) {
					Main.interactionProject.activate();
					AnimationManager.update(event);
					if (typeof(Interaction.onFrame) == 'function') {
						Interaction.onFrame(event);
					}
				}
				animationView.onFrame = function(event) {
					Main.animationProject.activate();
					AnimationManager.update(event);
					if (typeof(Animation.onFrame) == 'function') {
						Animation.onFrame(event);
					}
				}
			}
		}
	
		if(Animation.images == null || Animation.images == undefined) {
			Main.animationProject.activate();
			if (Animation.init) {
				Animation.init(Main.animation);
			}
			animationReady = true;
			initializeRunLoop();
		}
		else {
			Util.loadImages(
				Animation.images, 
				function(){
					Main.animationProject.activate();
					if (Animation.init) {
						Animation.init(Main.animation);
					}
					animationReady = true;
					initializeRunLoop();
				}
			);
		}
			
		if(Interaction.images == null || Interaction.images == undefined) {
			Main.interactionProject.activate();
			Interaction.init(Main.interaction);
			interactionReady = true;
			initializeRunLoop();
		}
		else {
			Util.loadImages(
				Interaction.images,
				function(){
					Main.interactionProject.activate();
					Interaction.init(Main.interaction);
					interactionReady = true;
					initializeRunLoop();
				}
			);
		}
	}
};

Main.paperInit = function() {
	// Custom Paths
	Path.Point = function(p){
		var circle = new Path.Circle(p,2);
		circle.setStyle({fillColor:'#000'});
		return circle;
	}
	Path.Triangle = function(p1,p2,p3){
		var triangle = new Path();
		triangle.add(p3);
		triangle.add(p1);
		triangle.add(p2);
		triangle.closed = true;
		return triangle;
	}
	Path.Bowl = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var bowl = new Path();
		bowl.add([x,y]);
		bowl.add([x+w,y]);
		bowl.add([x+w*0.8,y+h]);
		bowl.add([x+w*0.2,y+h]);
		bowl.closed = true;
		return bowl;
	};
	Path.Rhomboid = function(p,s,_w){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var rhomboid = new Path();
		rhomboid.add([x+_w,y]);
		rhomboid.add([x+_w+w,y]);
		rhomboid.add([x+w,y+h]);
		rhomboid.add([x,y+h]);
		rhomboid.closed = true;
		return rhomboid;
	}
	Path.Cube = function(p,a){
		var x=p.x,y=p.y;
		var _x=x+a*0.3,_y=y+a*0.3;
		var cube = new Path();
		cube.add([x	,_y]);
		cube.add([x	,_y+a]);
		cube.add([x+a  ,_y+a]);
		cube.add([x+a  ,_y]);
		cube.add([x	,_y]);
		cube.add([_x   ,y]);
		cube.add([_x+a ,y]);
		cube.add([x+a  ,_y]);
		cube.add([x+a  ,_y+a]);
		cube.add([_x+a ,y+a]);
		cube.add([_x+a ,y]);
		cube.add([x+a	,_y])
		cube.closed = true;
		return cube;
	}
	Path.Rhombus = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var rhombus = new Path();
		rhombus.add([x,y+h*0.5]);
		rhombus.add([x+w*0.5,y]);
		rhombus.add([x+w,y+h*0.5]);
		rhombus.add([x+w*0.5,y+h]);
		rhombus.closed = true;
		return rhombus;
	}
	Path.Trapezoid = function(p,s,_w){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var trapezoid = new Path();
		trapezoid.add([x,y+h]);
		trapezoid.add([x+(w-_w)*0.5,y]);
		trapezoid.add([x+(w-_w)*0.5+_w,y]);
		trapezoid.add([x+w,y+h]);
		trapezoid.closed = true;
		return trapezoid;
	}
	Path.RegularPolygon = function(p,s,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return new Path.EquiradialPolygon(p,s,angles,o);
	};
	Path.EquiradialPolygon = function(p,s,angles,o){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var polygon = new Path();
		for(var i=0; i<angles.length ;i++){
			var _angle = Util.degreeToRadians(_o+angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			polygon.add([_x,_y]);
		};
		polygon.closed=true;
		return polygon;
	}
	Path.OneSidedArrow = function(point1, point2, arrowHeadSize, angle) {
		if (arrowHeadSize == null) {
			arrowHeadSize = 3;
		}
		if(angle == null && angle == 'undefined')
			angle = 30;
		var group = new Group();
		var path = new Path.Line(point1, point2);
		
		var _a = Util.radianToDegree(
							Math.asin( 
								(point1.y-point2.y) / 
								point1.getDistance(point2) 
								) 
							);
		var a1 = Util.degreeToRadians(180 + _a + angle);
		var a2 = Util.degreeToRadians(180 + _a - angle);
		var path2 = new Path.Line(
							point2,
							new Point( 
									point2.x + arrowHeadSize*Math.cos(a1),
									point2.y - arrowHeadSize*Math.sin(a1)
								) 
							);
		var path3 = new Path.Line(
							point2,
							new Point( 
									point2.x + arrowHeadSize*Math.cos(a2) , 
									point2.y - arrowHeadSize*Math.sin(a2) 
								) 
							);
		var pt = new Path();
		pt.add(point2);
		pt.add(new Point( 
						point2.x + arrowHeadSize*Math.cos(a1),
						point2.y - arrowHeadSize*Math.sin(a1)
					));
		pt.add(new Point( 
						point2.x + arrowHeadSize*Math.cos(a2) , 
						point2.y - arrowHeadSize*Math.sin(a2) 
					) );
		pt.closed = true;
		path.strokeColor = 'black';
		pt.style = {
			strokeColor: 'black',
			fillColor : 'black'
		};
		group.addChild(path);
		group.addChild(pt);
		return group;
	}
	Path.Cylinder = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var x1,y1,x2,y2;		
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y-h*0.2;
		y2 = y-h*0.2;
		var group = new Group();
		var cylinder = new Path();
		cylinder.add(new Point(x,y) );
		cylinder.cubicCurveTo( 
			new Point(x1,y1), 
			new Point(x2,y2), 
			new Point(x+w,y)
		);
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		cylinder.cubicCurveTo(
			new Point(x2,y2), 
			new Point(x1,y1), 
			new Point(x,y)
		);
		cylinder.lineTo( new Point(x,y+h) );
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h+h*0.2;
		y2 = y+h+h*0.2;
		cylinder.cubicCurveTo(
			new Point(x1,y1), 
			new Point(x2,y2),
			new Point(x+w,y+h)
		);
		cylinder.lineTo(new Point(x+w,y) );
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		cylinder.cubicCurveTo(
			new Point(x2,y2),
			new Point(x1,y1),	
			new Point(x,y) 
		);
		
		cylinder.closed = true;
		group.addChild(cylinder);
		var dline = new Path();
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h-h*0.2;
		y2 = y+h-h*0.2;
		
		dline.add(new Point(x,y+h));
		dline.cubicCurveTo(
			new Point(x1,y1), 
			new Point(x2,y2),
			new Point(x+w,y+h)
		);
		dline.style = {dashArray: [3.2]};
		group.addChild(dline);
		return group;
	}
	Path.Pyramid = function(p,s){
		var pyramid = new Group();
		var path = new Path();
		var p1 = new Point(p.x+s.width*0,p.y+s.height*0.8);
		var p2 = new Point(p.x+s.width*0.45,p.y+s.height);
		var p3 = new Point(p.x+s.width,p.y+s.height*0.8);
		var p4 = new Point(p.x+s.width*0.5,p.y);
		var px = new Point(p.x+s.width*0.55,p.y+s.height*0.6);
		path.add(p1);
		path.add(p2);
		path.add(p3);
		path.add(p4);
		path.closed = true;
		pyramid.addChild(path);
		pyramid.addChild( new Path.Line(p2,p4) );
		var dline1 = new Path.Line(p1,px);
		var dline2 = new Path.Line(p3,px);
		var dline3 = new Path.Line(p4,px);

		dline1.style = {dashArray:[3,2]};
		dline2.style = {dashArray:[3,2]};
		dline3.style = {dashArray:[3,2]};
		pyramid.addChild(dline1);
		pyramid.addChild(dline2);
		pyramid.addChild(dline3);
		return pyramid;
	}
	Path.Cone = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var p1 = new Point(x,y+h*0.9),
		p2 = new Point(x+w*0.5,y+h),
		p3 = new Point(x+w,y+h*0.9),
		p4 = new Point(x+w*0.5,y),
		px = new Point(x+w*0.5,y+h*0.8);
		var cone = new Group();
		var path = new Path();
		path.add(p1);
		path.arcTo(p2,p3);
		path.add(p4);
		path.closed = true;
		var path2 = new Path();
		path2.add(p1);
		path2.arcTo(px,p3);
		path2.style = {dashArray:[3,2]};
		cone.addChild(path);
		cone.addChild(path2);
		return cone;
		
	};
	Path.Sphere  = function(p,a){
		var x=p.x,y=p.y;
		
		var p1 = new Point(x-a,y),
		p2 = new Point(x+a,y);
		px1 = new Point(x,y+a*0.2);
		px2 = new Point(x,y-a*0.2);
		
		var sphere = new Group();
		var circle = new Path.Circle(p,a);
		var curve1 = new Path();
		var curve2 = new Path();
		
		curve1.add(p1);
		curve1.arcTo(px1,p2);
		
		curve2.add(p1);
		curve2.arcTo(px2,p2);
		curve2.style = {dashArray:[3,2]};
		
		sphere.addChild(circle);
		sphere.addChild(curve1);
		sphere.addChild(curve2);
		return sphere;
	}
	Path.SquarePrisim = function(p,a,d){
		return new Path.RectanglePrisim(p,new Size(a,a),new Size(d,d));
	}
	
	Path.RectanglePrisim = function(p,s,_s){
		var x=p.x,y=p.y;
		var p1 = new Point(x,y+_s.height),
		p2 = new Point(x,y+s.height+_s.height),
		p3 = new Point(x+s.width,y+_s.height),
		p4 = new Point(x+_s.width,y),
		p5 = new Point(x+s.width+_s.width,y),
		p6 = new Point(x+_s.width+s.width,y+s.height)
		p7 = new Point(x+_s.width,y+s.height);
		p8 = new Point(x+s.width,y+s.height+_s.height);
				
		var squarePrisim = new Group();
		var side = new Path();
		side.add(p1);
		side.add(p4);
		side.add(p5);
		side.add(p6);
		side.add(p8);
		side.add(p2);
		side.add(p1);
		side.add(p3);
		side.add(p8);
		var line1 = new Path.Line(p3,p5);
		var dline1 = new Path.Line(p2,p7);
		var dline2 = new Path.Line(p7,p4);
		var dline3 = new Path.Line(p7,p6);
		//var square = new Path.Rectangle(p1,new Size(a,a));
		
		dline1.style = {dashArray:[3,2]};
		dline3.style = {dashArray:[3,2]};
		dline2.style = {dashArray:[3,2]};
		
		//squarePrisim.addChild(square);
		squarePrisim.addChild(side);
		squarePrisim.addChild(line1);
		squarePrisim.addChild(dline1);
		squarePrisim.addChild(dline2);
		squarePrisim.addChild(dline3);
		
		return squarePrisim;
		
	}
	
	Path.TrianglePrisim = function(p,s){
		var x=p.x,y=p.y,w=s.width,h=s.height;
		var i = 0.5;
		var j = 0.3;	
		var trianglePrisim = new Group();
		var p1 = new Point(x,y+h),
		p2 = new Point(x+w*(1-i),y+h),
		p3 = new Point(x+w*(1-i)*0.5,y+h*j),
		p4 = new Point(x+w,y+h*(1-j)),
		p5 = new Point(x+w*(1-i)*0.5+w*i,y),
		p6 = new Point(x+w*i,y+h*(1-j));
		var triangle = new Path();
		triangle.add(p2);
		triangle.add(p1);
		triangle.add(p3);
		triangle.add(p2);
		triangle.add(p4);
		triangle.add(p5);
		triangle.add(p3);
		
		var dline1 = new Path.Line(p1,p6);
		var dline2 = new Path.Line(p5,p6);
		var dline3 = new Path.Line(p4,p6);
		dline1.style = {dashArray:[3,2]};
		dline3.style = {dashArray:[3,2]};
		dline2.style = {dashArray:[3,2]};
		
		trianglePrisim.addChild(triangle);
		trianglePrisim.addChild(dline1);
		trianglePrisim.addChild(dline2);
		trianglePrisim.addChild(dline3);
		
		return trianglePrisim;
	}
	
	Path.SegmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments, paintedSegments) {
		var segRec = new Group();
		var Rec = new Path();
		var paint = 0;
		
		for(j = 0; j < verticalSegments; j++)
		{
			for(i = 0; i < horizontalSegments; i++)
			{
				Rec = Path.Rectangle(new Point(x + i * width/horizontalSegments, y + j * height/verticalSegments), new Size(width/horizontalSegments, height/verticalSegments));
				Rec.strokeColor = '#000';
				segRec.addChild(Rec);
				if(paint < paintedSegments)
				{
					Rec.fillColor = "#00AF33";
					paint += 1;
				}
			}
		}
		return segRec;
		
	};
	
	Path.SegmentedCircle = function (center, radius, paintedPieces, totalPieces) {
		var segCirc = new Group();
		var i;
		var angle =  2 * Math.PI / totalPieces;
		var startAngle = 0;
		var endAngle = angle;
		var paint = 0;

		for(i=0; i < totalPieces; i++)
		{
			var Circ = new Path();
			var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
							
			var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
							   center.y + Math.sin((startAngle+endAngle)/2) * radius);
							
			var point3 = new Point(center.x + Math.cos(endAngle) * radius,
							   center.y + Math.sin(endAngle) * radius);
						   
			Circ.moveTo(center);
			Circ.lineTo(point1);
			Circ.arcTo(point2, point3);
			Circ.lineTo(center);
			Circ.closePath();
			startAngle += angle;
			endAngle += angle;
			Circ.strokeColor = 'black';
			segCirc.addChild(Circ);
			if(paint < paintedPieces)
			{
				Circ.fillColor = "#00AF33";
				paint += 1;
			}

		}
		
		return segCirc;
	};
	
	Path.Fraction = function(top_x, top_y, nom, denom,scale, length)
	{
		var frag = new Group();
		var cizgi = new Path();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		if (nom) {
			pay=new PointText(top_x+scale*5/7, top_y);
			pay.content = nom;
			pay.style = textStyle;
			frag.addChild(pay);	
		}
		if (denom) {
			payda=new PointText(top_x+scale*5/7, c2+scale);
			payda.content = denom;
			payda.style = textStyle;
			frag.addChild(payda);			
		}
		cizgi.strokeColor = 'black' ;
		cizgi.add(new Point(top_x, Math.floor(top_y+scale)+0.5));
		cizgi.add(new Point(top_x+scale*length, Math.floor(top_y+scale)+0.5));
		frag.addChild(cizgi);
		return frag;

	}
	
	// Additions to Item
	Item.prototype.animate = function (animation) {
		if ((typeof(animation) != typeof({})) || (animation instanceof Array)) {
			throw "The argument to Item.animate needs be a Hash";
		}
		
		AnimationManager.animate(new AnimationManager.Animation(this, animation));
	}
	Item.prototype.setStyle = function (style) {
		if ((typeof(style) != typeof({})) || (style instanceof Array)) {
			throw "The argument to Item.setStyle needs be a Hash";
		}
		
		for (var key in style) {
			if (style.hasOwnProperty(key)) {
				this.style[key] = style[key];
			}
		}
	}
};

Main.raphaelInit = function(){
	Raphael.fn.triangle = function(x1,y1,x2,y2,x3,y3){
		var pathstring ='';
		pathstring += 'M'+x1+','+y1+'L'+x2+','+y2;
		pathstring += 'L'+x3+','+y3+' z';
		var triangle = this.path(pathstring);
		triangle.attr({x:x1,y:y3});
		return triangle;
	};
	
	Raphael.fn.line = function(x1,y1,x2,y2){
		var line = this.path('M'+x1+','+y1+'L'+x2+','+y2);
		line.attr('x',x1);
		line.attr('y',y1);
		line.data('isPath',true);
		return line;
	};
	
	Raphael.fn.bowl = function(x,y,w,h){
		var bowl = this.path('M'+x+','+y+'L'+(x+w)+','+y+'L'+(x+w*0.8)+','+(y+h)+'L'+(x+0.2*w)+','+(y+h)+' z');
		bowl.attr('x',x);
		bowl.attr('y',y);
		bowl.attr('width',w);
		bowl.attr('height',h);
		return bowl;
	};
	
	Raphael.fn.rhomboid = function(x,y,_w,w,h){
		var pathstring = '';
		pathstring += 'M'+(x+_w)+','+y+'L'+(x+_w+w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += 'L'+x+','+(y+h)+' z';
		var rhomboid = this.path(pathstring);
		rhomboid.attr({'x':x,'y':y});
		return rhomboid;
	};
	
	Raphael.fn.cube = function(x,y,a){
		var _x=x+a*0.4,_y=y+a*0.2;	
		var cube = this.path('M'+x+','+_y+'L'+x+','+(_y+a)+'L'+(x+a)+','+(_y+a)+'L'+(x+a)+','+_y+'L'+x+','+_y+'L'+_x+','+y+'L'+(_x+a)+','+y+'L'+(x+a)+','+_y+'L'+(x+a)+','+(_y+a)+'L'+(_x+a)+','+(y+a)+'L'+
		(_x+a)+','+y);
		cube.data('isPath',true);
		cube.attr('x',x);
		cube.attr('y',y);
		return cube;
	};
	Raphael.fn.rhombus = function(x,y,w,h){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y);
		pathstring += 'L'+(x+w)+','+(y+h*0.5);
		pathstring += 'L'+(x+w*0.5)+','+(y+h);
		pathstring += 'z';
		var rhombus = this.path(pathstring);
		rhombus.data({'x':x,'y':y,'w':w,'h':h});
		return rhombus;
	}
	Raphael.fn.trapezoid = function(x,y,w,h,_w){
		var pathstring = '';
		pathstring += 'M'+x+','+(y+h);
		pathstring += 'L'+(x+(w-_w)*0.5)+','+y;
		pathstring += 'L'+(x+(w-_w)*0.5+_w)+','+y;
		pathstring += 'L'+(x+w)+','+(y+h);
		pathstring += ' z';
		var trapezoid = this.path(pathstring);
		trapezoid.data({'x':x,'y':y,'w':w,'h':h});
		return trapezoid;
	}
	Raphael.fn.sphere = function(x,y,r,fill){
		var sphere = this.ellipse(x, y, r, r).attr({
			fill: "r(.3,.25) white-" + fill,
			stroke: "none"
		});
		sphere.data('isEllipse',true);
		sphere.attr('x',x);
		sphere.attr('y',y);
		return sphere;
	};
	Raphael.fn.sline = function(x,y,l){
		var pathstring='';
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y-10);
		pathstring += 'M'+x+','+y+'L'+(x+10)+','+(y+10);
		pathstring += 'M'+x+','+y+'L'+(x+l)+','+y;
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y-10);
		pathstring += 'M'+(x+l)+','+y+'L'+(x+l-10)+','+(y+10);
		var sline = this.path(pathstring);
		sline.attr('x',x);
		sline.attr('y',y);
		return sline;
	}
	Raphael.fn.cylinder = function(x,y,w,h){
		var x1,y1,x2,y2;
		var pathstring='';
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y-h*0.2;
		y2 = y-h*0.2;
		pathstring += 'M'+x+','+y+'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		pathstring += 'L'+x+','+(y+h);
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h+h*0.2;
		y2 = y+h+h*0.2;
		pathstring += 'C'+x1+','+y1+','+x2+','+y2+','+(x+w)+','+(y+h);
		pathstring += 'L'+(x+w)+','+y;
		x1 = x+w*0.2;
		x2 = x+w*0.8;
		y1 = y+h*0.2;
		y2 = y+h*0.2;
		pathstring += 'C'+x2+','+y2+','+x1+','+y1+','+x+','+y;
		var cylinder = this.path(pathstring);
		cylinder.data('isPath',true);
		cylinder.attr('x',x);
		cylinder.attr('y',y);
		cylinder.attr('fill','#fff');
		return cylinder;
	};
	
	Raphael.fn.fraction = function(top_x, top_y, nom, denom,scale) {
		var st = this.set();
		c2=top_y+scale;
		c3=top_x+scale*1.5;
		if (nom) {
			pay=this.text(top_x+scale*5/7, top_y, nom);
			pay.attr({"font-size" :scale});
			st.push(pay);	
		}
		if (denom) {
			payda=this.text(top_x+scale*5/7, c2+scale, denom);
			payda.attr({"font-size" :scale});
			st.push(payda);			
		}
		var kesirCizgi="M"+top_x+" "+c2+"L"+c3+" "+c2;
		st.push(this.path(kesirCizgi));
		return st;
	};
	
	Raphael.fn.segmentedUmbrella = function (cx, cy, r, numberOfSegments) {
		var st = this.set();
		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(-i)/numberOfSegments - 90, 360*(-i-1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	};
	
	Raphael.fn.segmentedCircle = function (cx, cy, r, numberOfSegments) {
		var st = this.set();
		for (i = 0; i < numberOfSegments; i++) {
			st.push(
				this.path().attr({
					segment:[cx, cy, r, 360*(i)/numberOfSegments - 90, 360*(i+1)/numberOfSegments - 90]
				})
			);
		}
		return st;
	};
	
	Raphael.fn.segmentedRectangle = function (x, y, width, height, horizontalSegments, verticalSegments) {
		var st = this.set();
		for (i = 0; i < horizontalSegments; i++) {
			for (j = 0; j < verticalSegments; j++) {
				st.push(
					this.rect(x + i * width/horizontalSegments, y + j * height/verticalSegments, width/horizontalSegments, height/verticalSegments)
				);
			}
		}
		return st;
	};
	
	Raphael.fn.regularPolygon = function(x,y,w,h,k,o){
		var angles = [];
		for(var i=0; i<k ;i++){
			angles[i] = 360/k*i;
		}
		return this.equiradialPolygon(x,y,w,h,angles,o)
	};
	Raphael.fn.equiradialPolygon = function(x,y,w,h,angles,o){
		var _o=Math.random()*60;
		if(o != null)
			_o=o;
		var a = Math.min(w,h)*0.5;
		var mx = x + w*0.5;
		var my = y + h*0.5;
		var pathstring = '';
		for(var i=0; i<angles.length ;i++){
			pathstring += (i==0?'M':'L');
			var _angle = Util.degreeToRadians(_o+angles[i]);
			var _x = mx + a*Math.cos(_angle);
			var _y = my + a*Math.sin(_angle);
			pathstring += _x + ',' + _y;
		}
		pathstring += 'z';
		return this.path(pathstring);
	}
	
};

Main.setObjective = function(str){
	Main.objective.innerHTML = str;
};

Main();

var Util = {
	isInteger: function (value) {
		var intRegex = /^\d+$/;
		return intRegex.test(value);
	},
	
	isNumber: function (n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	},

	findDistance:function (x1,y1,x2,y2){
			var _i = x1-x2;
			var _j = y1-y2;
			return Math.sqrt(_i*_i + _j*_j);
		},
	
	findAngle:function (x1, y1, x2, y2) {
			if (y1 == y2) {
				if (x1 > x2) {
					return Math.PI;
				} else {
					return 0;
				}
			}
			if (x1 == x2) {
				if (y1 > y2) {
					return Math.PI/2;
				} else {
					return 3*Math.PI/2;
				}
			}
			angle = -Math.atan((y2 - y1) / (x2 - x1));
			if (x2 < x1) {
				angle += Math.PI;
			} else if (y2 > y1) {
				angle += 2 * Math.PI;
			}
			return angle;
			
		},
	radianToDegree: function(a){
			return Math.round(a * (180/Math.PI));
		},
	
	//keep these two functions
	degreeToRadian : function (angle){
			return angle * (Math.PI / 180);
		},
	degreeToRadians: function (angle){
			return angle * (Math.PI / 180);
		},
		
		
	formatNumber: function(number,decimal){
			return Math.floor(number * decimal * 10) / (decimal * 10);
		},
	numberTurkishFloating: function(number,decimal){
			if(decimal==null || decimal==undefined)
				decimal = 1;
			var float = number - Math.floor(number);
			float = Math.floor(float*Math.pow(10,decimal)); 
			return ""+Math.floor(number)+","+float;
		},
	rand01: function(){
			return Math.floor(Math.random()*2);
		},
	
	loadImages: function(imageArray, callback) {
		var totalNoOfImages = imageArray.length;
		for (var key in imageArray) {
			image = imageArray[key];
			var img = $("<img id='"+image.id+"' />").attr('src', image.src).load(function() {
				if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0 || this.naturalWidth == null) {
					throw "Broken Image: " + image;
					totalNoOfImages--;
				} else {
					totalNoOfImages--;
					if (totalNoOfImages == 0) {
						callback();
					}
				}
			});
			$("head").append(img);
		}
	},
	getShuffledArray : function(to,from){
		if(from == null || from == undefined )
			from = 0;
		var a = [];
		for(var i=from,index=0; i<to ;i++,index++){
			a[index] = i;
		}
		var len = Math.floor(to - from);
		
		for(var i = len-1; i>=0 ; i--) {
			var p = parseInt(Math.random()*len);
			var t = a[i];
			a[i] = a[p];
			a[p] = t;
		}
		return a;	
	
	}
};

var AnimationManager = function(){
	AnimationManager.animationAnimations = [];
	AnimationManager.interactionAnimations = [];	
}

AnimationManager.Animation = function (item, animationHash) {
	this.item = item;
	
	this.style = animationHash.style;
	this.duration = animationHash.duration;
	
	if (animationHash.delay) {
		this.startTime = new Date().getTime() + animationHash.delay;
	} else {
		this.startTime = new Date().getTime();
	}
	
	if (animationHash.animationType) {
		this.animationType = animationHash.animationType;
		if (this.animationType == 'custom') {
			this.mappingFunction = animationHash.mappingFunction;
		}
	} else {
		this.animationType = 'linear';	
	}
	
	if (typeof(animationHash.callback) == "function") {
		this.item.callback = animationHash.callback;
	}
	
	this.idle = true;
	
	this.map = function(ratio) {
		if (this.animationType == 'linear') {
			return ratio;
		} else if (this.animationType == 'easeIn') {
			return ratio * ratio;
		} else if (this.animationType == 'easeOut') {
			return ratio * (-ratio+2);
		} else if (this.animationType == 'easeInEaseOut') {
			return (ratio*ratio) * (3-2*ratio);
		} else if (this.animationType == 'custom') {
			return this.mappingFunction(ratio);
		} else {
			return ratio;
		}
	}
}


AnimationManager.animate = function(animation) {
	if (paper.project == Main.animationProject) {
		AnimationManager.animationAnimations.push(animation);
	} else if (paper.project == Main.interactionProject) {
		AnimationManager.interactionAnimations.push(animation);
	}
}

AnimationManager.clearAnimations = function () {
	if (paper.project == Main.animationProject) {
		AnimationManager.animationAnimations = [];
	} else if (paper.project == Main.interactionProject) {
		AnimationManager.interactionAnimations = [];
	}
}

AnimationManager.update = function(event) {
	var animations;
	
	if (paper.project == Main.animationProject) {
		animations = AnimationManager.animationAnimations;
	} else if (paper.project == Main.interactionProject) {
		animations = AnimationManager.interactionAnimations;
	}
	
	for(var i=0; i<animations.length; i++){		
		var animation = animations[i];
		
		currentTime = new Date().getTime();
		
		if (animation.startTime < currentTime) {
			if (animation.idle) {
				animation.startHash = {};
				animation.endHash = {};
				for (var key in animation.style) {
					if (animation.style.hasOwnProperty(key)) {
						animation.startHash[key] = (animation.item[key]);
					}
				}
				
				animation.idle = false;
			} else if (animation.startTime + animation.duration < currentTime) {
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
						animation.item[key] = animation.style[key];
						animations.splice(i,1);
						if (animation.item.callback) {
							animation.item.callback();
						}
					}
				}
			} else {
				for (var key in animation.startHash) {
					if (animation.startHash.hasOwnProperty(key)) {
				    	startValue = animation.startHash[key];
						endValue = animation.style[key];
				
						ratio = animation.map((currentTime - animation.startTime) / animation.duration);
						if (Util.isNumber(startValue)) {
							animation.item[key] = startValue + (endValue - startValue) * ratio;
						} else if (startValue instanceof Point) {
							x = startValue.x + (endValue.x - startValue.x) * ratio;
							y = startValue.y + (endValue.y - startValue.y) * ratio;
							animation.item[key] = new Point(x, y);
						}
					}
				}
			}
		}	
	}
};
