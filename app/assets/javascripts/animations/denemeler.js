//Bütün kodlar animationInıt fonksiyonunun içinde olacak
function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	x2 = canvasWidth/2 + 100, y2 = canvasHeight/2;
	x3 = canvasWidth/2 + 100, y3 = canvasHeight/2;
	aci = 0;
	yaricap = 50;
	//çizgi çizdirmek
	line1=Line.create(center_x,center_y,x2,y2);
	
	//çember çizdir
	circle=Circle.create(70,70,yaricap);
	
	//Üçgenin üç ucu için de koordinat gir
	triangle=Triangle.create(center_x,center_y, center_x/2 - 50,center_y - 50, center_x/2+50,center_y/2-50);
	triangle.fillStyle='blue'; //mavi üçgen oldu
	triangle.movable=true; // şimdi üçgen hareket ediyor
	//dikdörtgen çiz, sol üst köşesinin koordinatları, genişlik ve uzunluk gir
	rectangle=Rectangle.create(50,150,100,50);
	
	scene.addDrawable(circle);
	scene.addDrawable(line1);
	scene.addDrawable(triangle);
	scene.addDrawable(rectangle);
	
}