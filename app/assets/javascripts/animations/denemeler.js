//Bütün kodlar animationInıt fonksiyonunun içinde olacak
function animationInit(){
	rect = Rectangle.create(70, 70, 200, 200);
	rect.movable=true;
	rect.rotatable=true;
	rect.fillStyle = 'teal';
	scene.addDrawable(rect);
	
	rect2 = Rectangle.create(20, 20, 100, 100);
	rect2.movable=true;
	rect2.rotatable=true;
	rect2.fillStyle = 'teal';
	rect.addChild(rect2);
	
	triangle = Triangle.create(200,200,300,300,100,300);
	triangle.movable = true;
	triangle.rotatable = true;
	triangle.fillStyle = 'teal';
	scene.addDrawable(triangle);
	
	arc = Sector.create(300, 200, 30, 0, Math.PI/3, true);
	arc.movable = true;
	arc.rotatable = true;
	scene.addDrawable(arc);
}