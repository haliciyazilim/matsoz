function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
	init:function(container){
			Animation.container = container;
		
		}
}


var Interaction = {
	images:[
		{
			id:'time_interval',
			class:'menu_link_images',
			src:'/assets/animations/zaman/time_interval.png',
			linkTo:function(){
					Interaction.openPage(Interaction.timeIntervalPage);
				}	
		},
		{
			id:'calendar',
			class:'menu_link_images',
			src:'/assets/animations/zaman/calendar.png',
			linkTo:function(){
					Interaction.openPage(Interaction.calendarPage);
				}	
		},
		{
			id:'clock',
			class:'menu_link_images',
			src:'/assets/animations/zaman/clock.png',
			linkTo:function(){
					Interaction.openPage(Interaction.clockPage);
				}	
		},
		{
			id: "car",
			src: '/assets/animations/cizgi_grafigi/car.jpg'
		},
		{
			id: "kadran",
			src: '/assets/animations/cizgi_grafigi/kadran.png'
		},
		{
			id: "akrep",
			src: '/assets/animations/cizgi_grafigi/akrep.png'
		},
		{
			id: "yelkovan",
			src: '/assets/animations/cizgi_grafigi/yelkovan.png'
		}
	],
	
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki zaman çizelgesini doldurunuz. Belirtilen olayların tarihlerini üstteki kutulara klavye yardımıyla yazınız. Sizin için önemli diğer tarihleri ve olayları da ekleyebilirsiniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.centerPoint = new Point(Interaction.paper.width*0.5,Interaction.paper.height*0.5);
			$(Interaction.images).each(function(index, element) {
                if(index < 3){
					$(Interaction.container).append($('#'+this.id).get(0));
					$('#'+this.id)
						.addClass('menu_link_images')
						.css({
							position:'absolute',
							bottom:'100px',
							left:(50+200*index)+'px',
							height:'auto'						
						})
						.click(this.linkTo)
				}
            });
			
			
			
			Interaction.timeIntervalPage = {
				init:function(){
					var arr = new Group(); 
					var startPoint = Interaction.centerPoint.add(-250, -50);
					var endPoint = startPoint.add(501,0);
					var arrow = new Path.OneSidedArrow(startPoint,endPoint, 10, 30);
					var arrow2 = new Path.OneSidedArrow(startPoint, endPoint, 10, 30);
					arrow.rotate(180,Interaction.centerPoint.add(0,-50));
					arr.addChild(arrow);
					arr.addChild(arrow2);
					Interaction.timeLine = arr;
					Interaction.yearDivs = [];
					Interaction.eventDivs = [];
					var divCss = {
							'transform':'rotate(-90deg)',
							'-webkit-transform':'rotate(-90deg)',
							'-ms-transform':'rotate(-90deg)', /* IE 9 */
							'-moz-transform':'rotate(-90deg)', /* Firefox */
							'-o-transform':'rotate(-90deg)', /* Opera */
							position:'absolute',
							width:'80px',
							height:'40px',
							border:'1px solid #999',
							overflow:'hidden',
							resize:'none'
							
						}
					for(var i=0; i<7;i++){
						
						arr.addChild(new Path.Circle(startPoint.add(40+i*70,0),5).set_style({fillColor:'#000'}));
						
						var yearDiv = document.createElement('textarea');
						yearDiv.setAttribute('type','text');
						Interaction.yearDivs.push(yearDiv);
						$(Interaction.container).append(yearDiv);
						$(yearDiv)
							.html('')
							.attr('contenteditable',true)
							.css(divCss).css({top:'30px',left:45+i*70,fontSize:'30px'})
						
						var eventDiv = document.createElement('textarea');
						eventDiv.setAttribute('type','text');
						Interaction.eventDivs.push(eventDiv);
						$(Interaction.container).append(eventDiv);
						$(eventDiv)
							.html('')
							.attr('contenteditable',true)
							.css(divCss).css({top:'150px',left:25+i*70,width:'120px'})
					}
					$(Interaction.eventDivs[0]).html('Annem ve babam evlendi.')
					$(Interaction.eventDivs[2]).html('Doğum tarihim.')
					$(Interaction.eventDivs[4]).html('Okula başladım.')
				},
				dispose:function(f){
					$(Interaction.yearDivs).each(function(index, element) {
                        $(this).remove();
                    });
					$(Interaction.eventDivs).each(function(index, element) {
                        $(this).remove();
                    });
					Interaction.timeLine.remove();
					
				}
				
			};
			Interaction.calendarPage = {
				init:function(){
					
					var calendarContainer = document.createElement('div');
					$(Interaction.container).append(calendarContainer);
					$(calendarContainer).css({
						position:'absolute',
						top:'10px',
						left:'50%'
					})
					var calendarImageContainer = document.createElement('div');
					$(calendarContainer).append('<style></style>');
					var calendar = document.createElement('div');
					$(calendarContainer).append(calendar);
					$( calendar ).datepicker({firstDay:1});
					var date = new Date();
					if(date.getMonth() > 8)
						date.setMonth(8);
					else{
						date.setMonth(8)
						date.setFullYear(date.getFullYear()-1);
					
					}
					$(calendar).datepicker('setDate',date)
				},
				dispose:function(f){
				
				}
			};
			Interaction.clockPage = {
				init:function(){
					Interaction.clock = new Clock(new Point(100,100));
					Interaction.clock.setTime({h:4,m:20});
					//clock.setTime({h:5,m:20});
					Interaction.appendButton({
						bottom:'40px',
						right:'40px'
					});
					Interaction.appendStatus({
						bottom:'10px',
						right:'40px'
					});			
					Interaction.prepareNextQuestion();

				},
				dispose:function(f){
				
				}
			};
			
			
		},
	openPage: function(page){
			if(page == Interaction._openedPage)
				return;
			Interaction._waitingPage = page;
			function _openPage(){
				Interaction._openedPage = Interaction._waitingPage;
				Interaction._openedPage.init();
				Interaction._waitingPage = null;
			}
			if(Interaction._openedPage){
				Interaction._openedPage.dispose(_openPage)
			}
			else{
				$('.menu_link_images').each(function(index, element) {
                    $(this).animate({width:$(this).width()*0.6,bottom:'0px',left:(100+70*index)+'px',marginLeft:-$(this).width()*0.63},1000)
                }); 
				setTimeout(_openPage,1000)
			}
			
		},
	nextQuestion: function(randomNumber){
	
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		},
}


function Clock(p){
	this.p = p;
	this.animating = false;
	this.kadran = new Raster('kadran');
	this.kadran.position = this.p;
	this.yelkovan = new Raster('yelkovan');
	this.yelkovan.position = this.p;
	this.akrep = new Raster('akrep');
	this.akrep.position = this.p;
	this.akrep.lastTransformation = this.akrep.matrix;
	this.yelkovan.lastTransformation = this.yelkovan.matrix;
	this.setTime = function(endTime,startTime){
		while(this.animating == true);
		this.animating = true;
		this.endTime = endTime;
		this.endTime.h = this.endTime.h%24;
		this.endTime.m = this.endTime.m%60;
		if(startTime){
			startTime.h = startTime.h%24;
			startTime.m = startTime.m%60;
		}
		else if(this.startTime){
			startTime = this.startTime;
			this.startTime = undefined;
		}
		else{
			startTime = {h:0,m:0}
		}
		this.clockHelper = new AnimationHelper({
			yelkovanAngle: 360*startTime.h + 6*startTime.m,
			akrepAngle: 30*startTime.h+startTime.m*0.5,
			owner:this
		});
		this.clockHelper.animate({
			style: {
				yelkovanAngle: 360*this.endTime.h + 6*this.endTime.m + (this.endTime.h < this.akrep360*12),
				akrepAngle: 30*this.endTime.h+this.endTime.m*0.5
			},
			duration: Math.abs(this.endTime.h - startTime.h + (this.endTime.m - startTime.m)/60)*400,
			animationType:'easeInEaseOut',
			update: function() {
				var matrix = new Matrix();
				matrix.rotate(this.akrepAngle, this.owner.p.x, this.owner.p.y);
				matrix.concatenate(this.owner.akrep.lastTransformation);
				this.owner.akrep.setMatrix(matrix);
				matrix = new Matrix();
				matrix.rotate(this.yelkovanAngle, this.owner.p.x, this.owner.p.y);
				matrix.concatenate(this.owner.yelkovan.lastTransformation);
				this.owner.yelkovan.setMatrix(matrix);
			},
			callback:function(){
				this.owner.startTime = this.owner.endTime;
				this.owner.animating = false;
			}
		});
	}
}