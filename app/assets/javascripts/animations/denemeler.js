//Bütün kodlar animationInıt fonksiyonunun içinde olacak
function animationInit(){
	rect = Rectangle.create(100, 100, 300, 10);
	rect.setRotation(Math.PI/2);
	
	rect2 = Rectangle.create(200, 200, 100, 100);
	rect.movable = true;
	rect2.movable = true;
	scene.addDrawable(rect);
	//scene.addDrawable(rect2);
	
	rect3 = Rectangle.create(10,10,80,80);
//	rect.addChild(rect3);
	
	rect4 = Rectangle.create(10,10,60,60);
//	rect3.addChild(rect4); 
	
	rect3.movable = true;
	rect4.movable = true;
	
		rect3.setRotation(Math.PI/6);
}