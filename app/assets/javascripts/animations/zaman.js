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
					Interaction.yearDivs = [];
					Interaction.eventDivs = [];
					var divCss = {
							'transform':'rotate(-90deg)',
							'-webkit-transform':'rotate(-90deg)',
							position:'absolute',
							width:'80px',
							height:'40px',
							border:'1px solid #999',
							overflow:'hidden'
							
						}
					for(var i=0; i<7;i++){
						
						arr.addChild(new Path.Circle(startPoint.add(40+i*70,0),5).set_style({fillColor:'#000'}));
						
						var yearDiv = document.createElement('div');
						Interaction.yearDivs.push(yearDiv);
						$(Interaction.container).append(yearDiv);
						$(yearDiv)
							.attr('contenteditable','true')
							.css(divCss).css({top:'30px',left:45+i*70,fontSize:'30px'})
						
						var eventDiv = document.createElement('div');
						Interaction.eventDivs.push(eventDiv);
						$(Interaction.container).append(eventDiv);
						$(eventDiv)
							.attr('contenteditable','true')
							.css(divCss).css({top:'150px',left:30+i*70,width:'110px'})
					}
					$(Interaction.eventDivs[0]).html('Annem ve babam evlendi.')
					$(Interaction.eventDivs[2]).html('Doğum tarihim.')
					$(Interaction.eventDivs[4]).html('Okula başladım.')
				},
				dispose:function(f){
				
					
				}
			};
			Interaction.calendarPage = {
				init:function(){
				
				},
				dispose:function(f){
				
				}
			};
			Interaction.clockPage = {
				init:function(){
				
				},
				dispose:function(f){
				
				}
			};
			
			
			Interaction.prepareNextQuestion();
		},
	openPage: function(page){
			console.log('openpage : ' , page)
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
				//_openPage();
				console.log("not opened")
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
