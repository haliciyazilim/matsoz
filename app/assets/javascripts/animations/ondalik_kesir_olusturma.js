var textRectStyle = {
	fillColor:'#fd0',
	strokeColor:'#000',
	strokeWidth:2,
	fontSize:24
}
var animationTextRectStyle = {
	fillColor:'#fdd',
	strokeColor:'#000',
	strokeWidth:1,
	fontSize:13
}
var questionTextStyle = {
	fontSize:15,
	justification:'center'
}
var Animation = {
	init:function(container){
			Animation.container = container;
			Animation.referencePoint = new Point(100.5,15.5);
			Animation.textRectSize = new Size(30,30);
			function TextRect (p,s,t){
				var rect = new Path.Rectangle(p,s);
				var text = new PointText(p.add(s.width*0.5-animationTextRectStyle.fontSize*0.4,s.height*0.5+animationTextRectStyle.fontSize*0.5));
				text.content = t;
				var group = new Group();
				group.addChild(rect);
				group.addChild(text);
				group.text = text;
				return group;
			}
			function createNumber(p,arr,delay){
				var shapes = [];
				var group = new Group();
				for(i=arr.length-1;i>=0;i--){
					var shape = TextRect(
						p.add(Math.floor(i*Animation.textRectSize.width),0),
						Animation.textRectSize,
						arr[i].text
					);
					shape.set_style(animationTextRectStyle);
					shape.text.fontSize = animationTextRectStyle.fontSize;
					shape.translate(arr[i].translate);
					shape.translatePoint = new Point(0,0);
					shape.firstPosition = shape.position;
					//console.log("I'm here");
					shape.opacity=1;
					shape.animate({
						init:function(){
							this.opacity=1;
						},
						style:{translatePoint:arr[i].translate.negate(),opacity:1},
						duration:1000,
						animationType:'easeIn',
						update:function(){
						//	console.log(this.opacity);
							this.position = this.firstPosition.add(this.translatePoint);
						},
						delay:delay+300*i
					});
					shapes.push(shape);
					group.addChild(shape);
				}
			}
			
			createNumber(
				Animation.referencePoint,
				[
					{text:'4',translate:new Point(0,0)},
					{text:'1',translate:new Point(0,0)},
					{text:'7',translate:new Point(0,0)},
					{text:'8',translate:new Point(0,0)},
					{text:',',translate:new Point(0,0)}
				],
				0
			);

			var tP1 = new Point(200,50);
			createNumber(
				Animation.referencePoint.add(tP1),
				[
					{text:'1',translate:tP1.negate().add(Animation.textRectSize.width,0)},
					{text:'4',translate:tP1.negate().add(-Animation.textRectSize.width,0)},
					{text:',',translate:tP1.negate().add(Animation.textRectSize.width*2,0)},
					{text:'7',translate:tP1.negate().add(-Animation.textRectSize.width,0)},
					{text:'8',translate:tP1.negate().add(Animation.textRectSize.width*-1,0)}
				],
				8000
			);
			var tP1 = new Point(-50,100);
			createNumber(
				Animation.referencePoint.add(tP1),
				[
					{text:'7',translate:tP1.negate().add(Animation.textRectSize.width*2,0)},
					{text:',',translate:tP1.negate().add(Animation.textRectSize.width*3,0)},
					{text:'8',translate:tP1.negate().add(Animation.textRectSize.width,0)},
					{text:'1',translate:tP1.negate().add(Animation.textRectSize.width*-2,0)},
					{text:'4',translate:tP1.negate().add(Animation.textRectSize.width*-4,0)}
				],
				6000
			);
			var tP1 = new Point(300,100);
			createNumber(
				Animation.referencePoint.add(tP1),
				[
					{text:'1',translate:tP1.negate().add(Animation.textRectSize.width,0)},
					{text:'7',translate:tP1.negate().add(Animation.textRectSize.width,0)},
					{text:'8',translate:tP1.negate().add(Animation.textRectSize.width,0)},
					{text:',',translate:tP1.negate().add(Animation.textRectSize.width,0)},
					{text:'4',translate:tP1.negate().add(Animation.textRectSize.width*-4,0)}
				],
				4000
			);
			var tP1 = new Point(400,10);
			createNumber(
				Animation.referencePoint.add(tP1),
				[
					{text:'8',translate:tP1.negate().add(Animation.textRectSize.width*3,0)},
					{text:'4',translate:tP1.negate().add(Animation.textRectSize.width*-1,0)},
					{text:',',translate:tP1.negate().add(Animation.textRectSize.width*2,0)},
					{text:'7',translate:tP1.negate().add(Animation.textRectSize.width*-1,0)},
					{text:'1',translate:tP1.negate().add(Animation.textRectSize.width*-3,0)}
				],
				2000
			);
		} 
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	__type:{
		LARGEST_OF_THE_SMALLERS : 0,
		SMALLEST_OF_THE_LARGERS : 1,
		SMALLEST_IN_BETWEEN : 2,
		LARGEST_IN_BETWEEN : 3,
		SMALLER_THAN : 4,
		LARGER_THAN : 5		
	},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki rakamları ve virgül işaretini fare ile sürükleyerek istenen ondalık kesri oluşturunuz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.referencePoint = new Point(130,40);
			Interaction.textRectSize = new Size(45,40);
			Path.TextRect = function(p,s,t){
				var rect = new Path.Rectangle(p,s);
				var text = new PointText(p.add(s.width*0.5-textRectStyle.fontSize*0.4,s.height*0.5+textRectStyle.fontSize*0.5));
				text.content = t;
				var group = new Group();
				group.addChild(rect);
				group.addChild(text);
				group.text = text;
				group.rect = rect;
				group.firstposition = group.position;
				return group;
			}
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			});
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			
			Interaction.questionText = new PointText(new Point(Interaction.paper.width*0.5,110));
			Interaction.questionText.set_style(questionTextStyle);
			
			var div = document.createElement('div');
			var tool = new Tool();
			tool.onMouseDown = function(event){
				if(event.item && event.item.class == 'draggable'){
					//console.log(event.item);
					var parent = event.item.parent;
					parent.removeChildren(event.item);
					parent.addChild(event.item);
					this.item = event.item;
				}
			}
			tool.onMouseDrag = function(event){
				if(this.item){
					this.item.position = this.item.position.add(event.delta)
					if(intersectWithOthers(this.item,Interaction.shapes,event))
						this.item.position = this.item.position.add(event.delta.negate())
					else
						this.item._mousePosition = event.point;
				}
			}
			tool.onMouseUp = function(){
				this.item = false;
			}
			function intersectWithOthers (shape,arr,event){
				for(var i=0;i<arr.length;i++){
					if(shape.id != arr[i].id && arr[i].children[0].bounds.contains(event.point)){
						return true;
					}
				}
				return false
			}
			
			tool.activate();
			Interaction.setRandomGenerator(6);
			Interaction.prepareNextQuestion();
			
		},
		
	nextQuestion: function(randomNumber){
			if(Interaction.shapes){
				$(Interaction.shapes).each(function(index, element) {
                    this.remove();
                });
			}
			Interaction.shapes = [];
			Interaction.digits = [];
			var i,randomDigits = Util.getShuffledArray(10);
			for(i=0;i<4;i++){
				var digit = randomDigits[i];
				var shape = new Path.TextRect(
					Interaction.referencePoint.add(Math.floor(i*Interaction.textRectSize.width*1.4),0),
					Interaction.textRectSize,
					digit
				);
				
				shape.set_style(textRectStyle);
				shape.class = 'draggable';
				shape.text.fontSize = textRectStyle.fontSize;
				Interaction.shapes.push(shape);
				Interaction.digits.push(digit);
			}
			var comma = new Path.TextRect(
				Interaction.referencePoint.add(Math.floor(i*Interaction.textRectSize.width*1.4),0),
				Interaction.textRectSize,
				","
			);
			comma.set_style(textRectStyle);
			comma.class = 'draggable';
			comma.text.fontSize = textRectStyle.fontSize;
			Interaction.shapes.push(comma);
			//console.log(Interaction.digits)
			Interaction.permutations = permute((Interaction.digits.join('')+".").toString());
			for(var i=0; i<Interaction.permutations.length;i++){
				if(Interaction.permutations[i].indexOf('.')==0 ||Interaction.permutations[i].indexOf('.') == 4){
					Interaction.permutations.splice(i,1);
					i--;
				}
			}
			/*<[[TEST*/
			//	randomNumber = Interaction.__type.SMALLEST_IN_BETWEEN;
			/*TEST]]>*/
			Interaction.qType = randomNumber;
			switch(randomNumber){
				
				case Interaction.__type.LARGEST_OF_THE_SMALLERS : 
					do{
						Interaction.digit = Util.randomInteger(0,1000);
					}while(!Interaction.hasSmaller(Interaction.digit))
					Interaction.setQuestionText(Interaction.digit + ' sayısından küçük en büyük ondalık kesri oluşturunuz.');
					break;
				
				case Interaction.__type.SMALLEST_OF_THE_LARGERS :
					do{
						Interaction.digit = Util.randomInteger(0,1000);
					}while(!Interaction.hasLarger(Interaction.digit))
					Interaction.setQuestionText(Interaction.digit + ' sayısından büyük en küçük ondalık kesri oluşturunuz.');
					break;
				
				case Interaction.__type.SMALLEST_IN_BETWEEN : 
					do{
						Interaction.digit_larger = Util.randomInteger(0,1000);
					}while(!Interaction.hasSmaller(Interaction.digit_larger))
					
					do{
						Interaction.digit_smaller = Util.randomInteger(0,1000);
					}while(
						Interaction.digit_larger == Interaction.digit_smaller || 
						!(
							Interaction.hasNumberBetween(Interaction.digit_smaller,Interaction.digit_larger) ||
							Interaction.hasNumberBetween(Interaction.digit_larger,Interaction.digit_smaller)
							)
						)
					if(Interaction.digit_smaller > Interaction.digit_larger){//swap
						Interaction.digit_smaller = (Interaction.digit_larger += Interaction.digit_smaller -= Interaction.digit_larger) - Interaction.digit_smaller;
					}
						
					Interaction.setQuestionText(Interaction.digit_smaller + ' ile '+Interaction.digit_larger+' sayıları arasındaki en küçük ondalık kesri oluşturunuz.');
					break;
				
				case Interaction.__type.LARGEST_IN_BETWEEN :
					do{
						Interaction.digit_larger = Util.randomInteger(0,1000);
					}while(!Interaction.hasSmaller(Interaction.digit_larger))
					
					do{
						Interaction.digit_smaller = Util.randomInteger(0,1000);
					}while(
						Interaction.digit_larger == Interaction.digit_smaller || 
						!(
							Interaction.hasNumberBetween(Interaction.digit_smaller,Interaction.digit_larger) ||
							Interaction.hasNumberBetween(Interaction.digit_larger,Interaction.digit_smaller)
							)
						)
					if(Interaction.digit_smaller > Interaction.digit_larger){//swap
						Interaction.digit_smaller = (Interaction.digit_larger += Interaction.digit_smaller -= Interaction.digit_larger) - Interaction.digit_smaller;
					}
					Interaction.setQuestionText(Interaction.digit_smaller + ' ile '+Interaction.digit_larger+' sayıları arasındaki en büyük ondalık kesri oluşturunuz.');
					break;
				
				case Interaction.__type.SMALLER_THAN :
					do{
						Interaction.digit = Util.randomInteger(0,1000);
					}while(!Interaction.hasSmaller(Interaction.digit))
					Interaction.setQuestionText(Interaction.digit + ' sayısından küçük ondalık kesri oluşturunuz.'); 
					break;
				
				case Interaction.__type.LARGER_THAN :
					do{
						Interaction.digit = Util.randomInteger(0,1000);
					}while(!Interaction.hasLarger(Interaction.digit))
					Interaction.setQuestionText(Interaction.digit + ' sayısından büyük ondalık kesri oluşturunuz.'); 
					
					break;		
			}
			
		},
		
	//return true if it has numbers more than 'integer'
	hasLarger: function(integer){
			for(var i=0; i<Interaction.permutations.length;i++)
				if(integer < parseFloat(Interaction.permutations[i],10))
					return true
			return false;
			
		},
	
	//return true if it has numbers less than 'integer'
	hasSmaller: function(integer){
			for(var i=0; i<Interaction.permutations.length;i++)
				if(integer > parseFloat(Interaction.permutations[i],10))
					return true
			return false;
			
		},
	
	hasNumberBetween : function(nSmall,nLarge){
			for(var i=0; i<Interaction.permutations.length;i++){
				var num = parseFloat(Interaction.permutations[i],10);
				if(nSmall < num && num < nLarge)
					return true
			}
			return false;
		},
	shapeToNumber : function(){
			var str = "";
			Interaction.shapes.sort(
				function(s1,s2){
				if(s1.children[0].bounds.x < s2.children[0].bounds.x)
					return -1;
				else if(s1.children[0].bounds.x > s2.children[0].bounds.x)
					return 1;
				else
					return 0;
				}
			);
			for(var i=0; i< Interaction.shapes.length;i++)
				str += Interaction.shapes[i].text.content;
			str = str.replace(',','.');
			return parseFloat(str,10);
		},
	setQuestionText : function(text){
			Interaction.questionText.content = text;
		},
	preCheck: function(){
			for(var i=0; i< Interaction.shapes.length;i++)
				if(Interaction.shapes[i]._mousePosition == undefined || Interaction.shapes[i]._mousePosition.y < 130){
					Interaction.setStatus('Lütfen bütün sayıları yazının altına taşıyınız.');
					return false;
				}
			return true;
		},
	findAnswer : function(answerCondition){
			for(var i=0; i<Interaction.permutations.length;i++){
				var val = Interaction.permutations[i];
				if(answerCondition(parseFloat(val,10)))
					return val;
			}
		},
	answerCondition : {
			LARGEST_OF_THE_SMALLERS:function(value){
					return (value < Interaction.digit && !Interaction.hasNumberBetween(value,Interaction.digit));
				},
			SMALLEST_OF_THE_LARGERS:function(value){
					return (value > Interaction.digit && !Interaction.hasNumberBetween(Interaction.digit,value))
				},
			SMALLEST_IN_BETWEEN:function(value){
					return ( value > Interaction.digit_smaller && 
						value < Interaction.digit_larger &&
						!Interaction.hasNumberBetween(Interaction.digit_smaller,value));
				},
			LARGEST_IN_BETWEEN:function(value){
					return ( value > Interaction.digit_smaller && 
						value < Interaction.digit_larger &&
						!Interaction.hasNumberBetween(value,Interaction.digit_larger));
				},
			SMALLER_THAN:function(value){
					return ( value < Interaction.digit);
				},
			LARGER_THAN:function(value){
					return ( value > Interaction.digit);
				}
		},
	isAnswerCorrect : function(){
			var value = Interaction.shapeToNumber();
			  switch(Interaction.qType){
				case Interaction.__type.LARGEST_OF_THE_SMALLERS : 
					Interaction.correctAnswer = Interaction.findAnswer(Interaction.answerCondition.LARGEST_OF_THE_SMALLERS);
					if(Interaction.answerCondition.LARGEST_OF_THE_SMALLERS(value))
						return true;
					break;
				
				case Interaction.__type.SMALLEST_OF_THE_LARGERS :
					Interaction.correctAnswer = Interaction.findAnswer(Interaction.answerCondition.SMALLEST_OF_THE_LARGERS);
					if(Interaction.answerCondition.SMALLEST_OF_THE_LARGERS(value))
						return true;
					
					break;
				
				case Interaction.__type.SMALLEST_IN_BETWEEN :
					Interaction.correctAnswer = Interaction.findAnswer(Interaction.answerCondition.SMALLEST_IN_BETWEEN); 
					if(Interaction.answerCondition.SMALLEST_IN_BETWEEN(value))
						return true;
					break;
				
				case Interaction.__type.LARGEST_IN_BETWEEN :
					Interaction.correctAnswer = Interaction.findAnswer(Interaction.answerCondition.LARGEST_IN_BETWEEN);
					if(Interaction.answerCondition.LARGEST_IN_BETWEEN(value))
						return true;
					break;
				
				case Interaction.__type.SMALLER_THAN :
					Interaction.correctAnswer = Interaction.findAnswer(Interaction.answerCondition.SMALLER_THAN);
					if(Interaction.answerCondition.SMALLER_THAN(value))
						return true;
					break;
				
				case Interaction.__type.LARGER_THAN :
					Interaction.correctAnswer = Interaction.findAnswer(Interaction.answerCondition.LARGER_THAN);
					if(Interaction.answerCondition.LARGER_THAN(value))
						return true;
					
					break;		
			}
			return false;
		},
	onCorrectAnswer : function(){
			
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.shapes.sort(function(s1,s2){
				var i1,i2;
			//	console.log(s1,s2);
				i1 = (""+Interaction.correctAnswer).replace('.',',').indexOf(s1.text.content);
				i2 = (""+Interaction.correctAnswer).replace('.',',').indexOf(s2.text.content);
			//	console.log(s1.text.content +': '+i1,s2.text.content +': '+i2);
				if(i1 < i2)
					return -1;
				else 
					return 1;
			});
			for(var i=0;i<Interaction.shapes.length;i++){
				var point = Interaction.referencePoint.add(Math.floor(i*Interaction.textRectSize.width*1.4),130);
				var rectPosition = point;
				var textPosition = point.add(
					-textRectStyle.fontSize*0.4,
					+textRectStyle.fontSize*0.5
				);
				//Interaction.shapes[i].rect.position = rectPosition;
				console.log(point.toString());
				Interaction.shapes[i].rect.animate({
					style:{position:rectPosition},
					duration:1000
				})
				Interaction.shapes[i].text.animate({
					style:{position:textPosition},
					duration:1000
				})
			}
			Interaction.setStatus('Yanlış cevap. Doğrusu '+Interaction.correctAnswer.replace('.',',')+' olacaktı',false);
		},
}















