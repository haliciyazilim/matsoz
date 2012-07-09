// JavaScript Document
var kucultButtonStyle = {fillColor: "#456"}

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container){
	Interaction.container = container;
	Main.setObjective("Aşağıdaki küpü küçültüp büyütünüz veya istediğiniz yönde döndürünüz.");
	
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	Interaction.UP = false;
	Interaction.DOWN = false;
	Interaction.LEFT = false;
	Interaction.RIGHT = false;
	space = new Space();
	scene = new Scene();
	
	inc = 15;
	$(container).append(
		'<div class="ezd_btn_rotate" style="position:absolute;top:40%;right:10px;text-align:center;">'+
			'<div class="ezd_btn_rotate_top" onclick="Interaction._3d.zAngle+=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_top.png" width="32" height="31" alt="Yukarı">'+
			'</div>'+
			'<div class="ezd_btn_rotate_right"  onclick="Interaction._3d.xAngle-=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_right.png" width="32" height="31" alt="Sağa">'+
			'</div>'+
			'<div class="ezd_btn_rotate_bottom" onclick="Interaction._3d.zAngle-=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_bottom.png" width="32" height="31" alt="Aşağı">'+
			'</div>'+
			'<div class="ezd_btn_rotate_left"  onclick="Interaction._3d.xAngle+=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_left.png" width="32" height="31" alt="Sola">'+
			'</div>'+
		'</div>'
	);
	$(container).append(
		'<div style="position:absolute;top:50%;left:10px;text-align:center;font-size:12px;line-height:20px;">'+
			'<div style="position:relative;padding-top:5px;float:left;" onclick="$(\'#distance\').val($(\'#distance\').val()-1);return false;"><img src="/assets/animations/3d_navigation/btn_gray_small.png" /></div>'+
			'<div style="position:relative;top:10px;width:60px;float:left;" id="slider">'+
				'<input type="range" min="0" max="10" value="5" id="distance"  style="width:60px;background:none" />'+
			'</div>'+
			'<div id="buyut" style="user-select:none;position:relative;left:1px;float:left;padding-top:5px;" onclick="$(\'#distance\').val(parseInt($(\'#distance\').val())+1);return false;"><img src="/assets/animations/3d_navigation/btn_gray_large.png" /></div>'+
		'</div>'
	);
	$(container).append('<input type="button" value="sonraki" class="next_button" style="position:absolute;bottom:15px;right:15px;" />')
	Interaction.next_button = $('.next_button').get(0);
	$("#buyut > img").show();
	//console.log(window.location.hash)
	switch(window.location.hash){
		case '#triangle':
	//		console.log('triangle');
			load_triangle_pyramid();
			break;
		case '#rectangle':
	//		console.log('rectangle');
			load_rectangle_pyramid();
			break;
		default:
	//		console.log('default');
			load_square_pyramid();
	}
	
	//$('#slider').slider();
	//var count =0;
	Interaction._3d = {};
	Interaction._3d.x=100;
	Interaction._3d.y=100;
	Interaction._3d.z=0;
	Interaction._3d.xAngle = 75;
	Interaction._3d.zAngle = 120;
	Interaction._3d.R_constant = 150;
	function changeXAngle(){
		Interaction._3d.x = Interaction._3d.R * Math.cos(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
		Interaction._3d.z = Interaction._3d.R * Math.sin(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
		
	}
	function changeZAngle(){
		Interaction._3d.y = Interaction._3d.R * Math.cos(Util.degreeToRadians(Interaction._3d.zAngle));
		Interaction._3d.x = Interaction._3d.R * Math.cos(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
		Interaction._3d.z = Interaction._3d.R * Math.sin(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
	}
	Interaction._3d.R = Interaction._3d.R_constant - $('#distance').val()*6;
	changeXAngle();
	changeZAngle();
	loop(Interaction._3d.x ,Interaction._3d.y ,Interaction._3d.z );
	var tool = new Tool();
	tool.onMouseDrag = function(event){
		Interaction._3d.zAngle -= event.delta.y;
		Interaction._3d.xAngle -= event.delta.x;
	}
	setInterval(
		function(){
			Interaction._3d.R = Interaction._3d.R_constant - $('#distance').val()*6;
			Interaction._3d.zAngle = Interaction._3d.zAngle > 160 ? 160 : (Interaction._3d.zAngle < 20 ? 20: Interaction._3d.zAngle);
			changeXAngle();
			changeZAngle();
			loop(Interaction._3d.x ,Interaction._3d.y ,Interaction._3d.z );
			//Interaction._3d.R++;
		},
		25
	);
}

/* -------------------------------------------------------------------- */


function loop(x,y,z) {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	scene.camera.x = x;
	scene.camera.y = y;
	scene.camera.z = z;
	//scene.cameraRotation = 0;

	scene.draw();
}

function load_square_pyramid() {	
	Interaction.next_button.onclick = function(){
		window.location.hash = "triangle";
		window.location.reload();
	};
	// Init drawing system
	canvas = $('canvas',Interaction.container).get(0);
	console.log(canvas);
	ctx = canvas.getContext("2d");

	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;

	// Init 3D components
	space = new Space();
	scene = new Scene();

	// Create a box shape and add it to the scene
	Interaction.oldShape = new Shape()
	scene.shapes['square_pyramid'] = Interaction.oldShape;
	var p = scene.shapes['square_pyramid'].points; // for convenience

	p[0] = new Point3(-10, -10, -10); // left  bottom front
	p[1] = new Point3(10, -10, -10);  // right bottom front
	p[2] = new Point3(0, 10, 0);   // right top    front
	p[3] = new Point3(-10, 10, -10);  // left  top    front

	p[4] = new Point3(-10, -10, 10);  // left  bottom back
	p[5] = new Point3(10, -10, 10);   // right bottom back
	p[6] = new Point3(10, 10, 10);    // right top    back
	p[7] = new Point3(-10, 10, 10);   // left  top    back
	
	p[3] = p[2];
	p[6] = p[2];
	p[7] = p[2];
//	p[5] = p[4];
//	p[6] = p[7];
	// Back
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100,0.8]
	));

	// Front
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100,0.8]
	));

	// Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.WIRE,
		[200, 200, 200,0.8]
	));

	// Transparent Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,0.8]
	));

	// Left
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150,0.8]
	));

	// Right
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50,0.8]
	));
	

	//Floor
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,0.8]
	));

	//setInterval('loop()', 20);
}

function load_triangle_pyramid(){
	Interaction.next_button.onclick = function(){
		window.location.hash = "rectangle";
		window.location.reload();
	};
	// Init drawing system
	canvas = $('canvas',Interaction.container).get(0);
	ctx = canvas.getContext("2d");
	//canvas.clearRect(0,0,canvas.width,canvas.height);
	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;


	// Create a box shape and add it to the scene
	scene.shapes['box'] = new Shape();
	var p = scene.shapes['box'].points; // for convenience

	p[0] = new Point3(-10, 0, -20*Math.sqrt(3)); // left  bottom front
	p[1] = new Point3(-10, 0, 20*Math.sqrt(3));  // right bottom front
	p[2] = new Point3(0, 20*Math.sqrt(3), 0);   // right top    front
	p[3] = new Point3(-10, 20*Math.sqrt(3), -5);  // left  top    front

	p[4] = new Point3(20 ,0, 0);  // left  bottom back
	p[5] = new Point3(20, 0, 0);   // right bottom back
	p[6] = new Point3(10, 20*Math.sqrt(3), 10);    // right top    back
	p[7] = new Point3(-10, 20*Math.sqrt(3), 10);   // left  top    back
	
	p[3] = p[2];
	p[6] = p[2];
	p[7] = p[2];
	// Back
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100]
	));

	// Front
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100]
	));


	

	// Left
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150]
	));

	// Right
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50]
	));

	//Floor
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200]
	));

}

function load_rectangle_pyramid(){
	Interaction.next_button.onclick = function(){
		window.location.hash = "square";
		window.location.reload();
	};
	canvas = $('canvas',Interaction.container).get(0);
	ctx = canvas.getContext("2d");

	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;

	// Init 3D components
	space = new Space();
	scene = new Scene();

	// Create a box shape and add it to the scene
	Interaction.oldShape = new Shape()
	scene.shapes['square_pyramid'] = Interaction.oldShape;
	var p = scene.shapes['square_pyramid'].points; // for convenience

	p[0] = new Point3(-20, -10, -10); // left  bottom front
	p[1] = new Point3(20, -10, -10);  // right bottom front
	p[2] = new Point3(0, 10, 0);   // right top    front
	p[3] = new Point3(-10, 10, -10);  // left  top    front

	p[4] = new Point3(-20, -10, 10);  // left  bottom back
	p[5] = new Point3(20, -10, 10);   // right bottom back
	p[6] = new Point3(10, 10, 10);    // right top    back
	p[7] = new Point3(-10, 10, 10);   // left  top    back
	
	p[3] = p[2];
	p[6] = p[2];
	p[7] = p[2];
//	p[5] = p[4];
//	p[6] = p[7];
	// Back
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100,0.8]
	));

	// Front
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100,0.8]
	));

	// Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.WIRE,
		[200, 200, 200,0.8]
	));

	// Transparent Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,0.8]
	));

	// Left
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150,0.8]
	));

	// Right
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50,0.8]
	));

	// Create a floor shape and add it to the scene
	//scene.shapes['floor'] = new Shape();
	//var p = scene.shapes['floor'].points; // for convenience


	//p[0]  = new Point3(-40, -10, -40);
	//p[1]  = new Point3(-40, -10,  40);
	//p[2] = new Point3( 40, -10,  40);
	//p[3] = new Point3( 40, -10, -40);

	//Floor
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,0.8]
	));

	//setInterval('loop()', 20);
}

/* -------------------------------------------------------------------- */