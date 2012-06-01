function animationInit(){
	center_x = canvasWidth/2 , center_y =  canvasHeight/2;
	var harf="A";
	line=Line.create(center_x,0,center_x,2*center_y);
	
	$('#controlPanel').append('<select name="select2" id="letters" size="1"></select>');
	var alphabet="A,B,C,Ç,D,E,F,G,Ğ,H,I,İ,J,K,L,M,N,O,Ö,P,R,S,Ş,T,U,Ü,V,Y,Z";
	var letters=alphabet.split(",");
	for(i=0; i<letters.length;i++){
		$('#letters').append('<option>'+letters[i]+'</option>');
	}

	letter=Label.create(center_x+50,center_y-150,harf);
	letter.movable=true;
	letter.rotatable=true;
	letter.setFontSize(96);
	
	revLetter=Label.create(center_x-50-letter.width(),center_y-150,harf);
	revLetter.setScale(-1,1);
	revLetter.setFontSize(96);
	
	$("select").change(function () {
          $("select option:selected").each(function () {
                 harf = $(this).text();
				 letter.setText(harf);
				 revLetter.setText(harf);
               });
    }).trigger('change');	 

	letter.onRotate = function(rotation){
		revLetter.setRotation(-rotation);
	}
	
	letter.onMove = function(){
		revLetter.setCenter(2*center_x-letter.centerX(),letter.centerY());
		if(letter.x() < center_x+5 ){
			letter.setX(center_x+5);
			revLetter.setX(center_x-letter.width()-5);
		}
		
		if(letter.x()+letter.width() > canvasWidth-5){
			letter.setX(canvasWidth-5-letter.width());
			revLetter.setX(5);
		} 
		
		if( letter.y() < 5 ){
			letter.setY(5);
			revLetter.setY(5);
		}
		
		if( letter.y()+letter.height() > canvasHeight-5 ){
				letter.setY(canvasHeight-letter.height()-5);
				revLetter.setY(canvasHeight-letter.height()-5);	
		}
	}

	scene.addDrawable(line);
	scene.addDrawable(letter);
	scene.addDrawable(revLetter);	
}