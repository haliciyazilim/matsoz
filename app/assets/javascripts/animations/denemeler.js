//Bütün kodlar animationInıt fonksiyonunun içinde olacak
function animationInit(){





	circle=Circle.create(70,70,15);

	circle.onMouseDown = function (x, y) {
		if (this.contains(x,y)) {
			this.fillStyle = 'blue';
			scene.redraw();
		}
		// 
		Movable.onMouseDown.call(this, x, y);
	}


//	circle.movable = true;
	
	scene.addDrawable(circle);

	circle2 = Circle.create(100,100,15);
	scene.addDrawable(circle2);
	circle2.movable=true;

}