//Bütün kodlar animationInıt fonksiyonunun içinde olacak
function animationInit(){
	// rect = Rectangle.create(70, 70, 200, 200);
	// rect.movable=true;
	// rect.rotatable=true;
	// rect.fillStyle = 'teal';
	// scene.addDrawable(rect);
	// 
	// rect2 = Rectangle.create(20, 20, 100, 100);
	// rect2.movable=true;
	// rect2.rotatable=true;
	// rect2.fillStyle = 'teal';
	// rect.addChild(rect2);
	// 
	// triangle = Triangle.create(200,200,300,300,100,300);
	// triangle.movable = true;
	// triangle.rotatable = true;
	// triangle.fillStyle = 'teal';
	// scene.addDrawable(triangle);
	// 
	// arc = Sector.create(300, 200, 30, 0, Math.PI/3, true);
	// arc.movable = true;
	// arc.rotatable = true;
	// scene.addDrawable(arc);
	
	label = Label.create(100, 100, "R");
	label.setFontSize(96);
	label.setScale(-1, 1);
	scene.addDrawable(label);
	
	label2 = Label.create(300, 100, "R");
	label2.setFontSize(96);
	label2.movable = true;
	label2.rotatable = true;
	scene.addDrawable(label2);
	label2.onRotate = function(rotation) {
		label.setRotation(-rotation);
	}
}