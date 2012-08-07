
function SingleLineMultiply(point,delay,zero,factor1,factor2,textStyle){ 
	function textAnimate(point,content,style,animateStyle,delay,textStyle,callback){
        var pT1 = new PointText(point);
        pT1.content = content;
        pT1.set_style(textStyle);
        pT1.set_style(style);
        pT1.animate({
            style:animateStyle,
            duration:1000,
            delay:delay,
            callback:callback,
            animationType:'easeInEaseOut'
        });
        return pT1;
    }   
	var L = 0;//length
	var t1 = textAnimate(point,						factor1,	{opacity:0},{opacity:1},100+delay,textStyle);
	var rect = new Path.Rectangle(t1.bounds);
	rect.set_style({strokeColor:'#fff',strokeWidth:2});
	L += t1.getWidth();
	var t2 = textAnimate(point.add(L,0)	 ,	 ' × '+factor2,	{opacity:0},{opacity:1},600+delay,textStyle);
	L += t2.getWidth();
	var t3 = textAnimate(point.add(L,0)	 ,   		  zero,	{opacity:0},{opacity:1},600+delay,textStyle,
		function(){
			this.animate({
			style:{opacity:0},
			duration:500,
			callback:function(){
					this.animate({
						style:{opacity:1,fillColor:new RgbColor(1,0,0,0.9)},
						duration:500,
						delay:1500,
						callback:function(){
							this.animate({
								style:{fillColor:textStyle.fillColor},
								duration:500,
								delay:500
							});
						}								
					});
				}
			});
		}
	);
	L += t3.getWidth();
	var t4 = textAnimate(point.add(L,0),		 	   ' = ',	{opacity:0},{opacity:1},600+delay,textStyle);
	L += t4.getWidth();
	var t5 = textAnimate(point.add(L,0),factor1*factor2,{opacity:0},{opacity:1},2000+delay,textStyle);
	L += t5.getWidth();
	var t6 = textAnimate(t4.position,zero,{opacity:0},{opacity:1,position:point.add(L,0),fillColor:new RgbColor(1,0,0)},4000+delay,textStyle,
		function(){
			this.animate({
				style:{fillColor:textStyle.fillColor},
				duration:500
			});
		}
	);
}

