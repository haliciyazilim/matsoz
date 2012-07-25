var textRectStyle = {
	fillColor:'#fd0',
	strokeColor:'#000',
	strokeWidth:2,
	fontSize:24
}
var Animation = {
	init:function(container){
		
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
			Main.setObjective('Aşağıdaki rakamları ve virgül işaretini fare ile sürükleyerek istenen ondalık kesri oluşturunuz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.referencePoint = new Point(200,40);
			Interaction.textRectSize = new Size(45,40);
			Path.TextRect = function(p,s,t){
				var rect = new Path.Rectangle(p,s);
				var text = new PointText(p.add(s.width*0.5-textRectStyle.fontSize*0.4,s.height*0.5+textRectStyle.fontSize*0.5));
				text.content = t;
				var group = new Group();
				group.addChild(rect);
				group.addChild(text);
				group.text = text;
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
			
			var div = document.createElement('div');
			var tool = new Tool();
			tool.onMouseDown = function(event){
				if(event.item && event.item.class == 'draggable'){
					console.log(event.item);
					var parent = event.item.parent;
					parent.removeChildren(event.item);
					parent.addChild(event.item);
					this.item = event.item;
				}
			}
			tool.onMouseDrag = function(event){
				if(this.item){
					this.item.translate(event.delta);
				}
			}
			tool.onMouseUp = function(){
				this.item = false;
			}
			tool.activate();
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			if(Interaction.shapes){
				$(Interaction.shapes).each(function(index, element) {
                    this.remove();
                });
			}
			Interaction.shapes = [];
			Interaction.digits = [];
			for(var i=0;i<4;i++){
				var digit = Math.floor(Math.random()*(i+1)*2);
				Interaction.digits.push(digit);
				var shape = new Path.TextRect(
					Interaction.referencePoint,
					Interaction.textRectSize,
					digit
				);
				shape.set_style(textRectStyle);
				shape.class = 'draggable';
				shape.text.fontSize = textRectStyle.fontSize;
				Interaction.shapes.push();
			}
			Interaction.questionText = new PointText(Interaction.referencePoint.add(50,150));
			Interaction.permutations = permute((Interaction.digits.join('')+".").toString());
			for(var i=0; i<Interaction.permutations.length;i++){
				if(Interaction.permutations[i].indexOf('.')==0 ||Interaction.permutations[i].indexOf('.') == 4){
					Interaction.permutations.splice(i,1);
					i--;
				}
			}
			
		},
		
	//return true if it has numbers more than 'integer'
	hasLarger: function(integer){
			for(var i=0; i<Interaction.permutations.length;i++){
				if(integer < parseFloat(Interaction.permutations[i],10))
					return true
			return false;
			}
		},
	
	//return true if it has numbers less than 'integer'
	hasSmaller: function(integer){
			for(var i=0; i<Interaction.permutations.length;i++){
				if(integer > parseFloat(Interaction.permutations[i],10))
					return true
			return false;
			}
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