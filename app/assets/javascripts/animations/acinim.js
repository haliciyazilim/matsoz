
function createSurface(p1, p2, p3, p4, matrix) {
	var pp1 = Util.project(p1, matrix);
	var pp2 = Util.project(p2, matrix);
	var pp3 = Util.project(p3, matrix);
	var pp4 = Util.project(p4, matrix);

	var path = new Path();

	pp1.x = Math.floor(pp1.x) + 0.5;
	pp1.y = Math.floor(pp1.y) + 0.5;
	pp2.x = Math.floor(pp2.x) + 0.5;
	pp2.y = Math.floor(pp2.y) + 0.5;
	pp3.x = Math.floor(pp3.x) + 0.5;
	pp3.y = Math.floor(pp3.y) + 0.5;
	pp4.x = Math.floor(pp4.x) + 0.5;
	pp4.y = Math.floor(pp4.y) + 0.5;
	

	path.add(pp1);
	path.add(pp2);
	path.add(pp3);
	path.add(pp4);
	path.closed = true;
	
	return path;
}

var Animation = {
	
	init: function(container){
		var width = $(container).width();
		var height = $(container).height();
	
		var halfSize = 30;
		
		var matrix = Util.createProjectionMatrixForObjectAt(100, 100);
	
		var p1 = [-halfSize, -halfSize, -halfSize];
		var p2 = [ halfSize, -halfSize, -halfSize];
		var p3 = [ halfSize,  halfSize, -halfSize];
		var p4 = [-halfSize,  halfSize, -halfSize];
			
		var rect = createSurface(p1, p2, p3, p4, matrix);
		rect.strokeColor = '#f55';		
		
		p1 = [halfSize, -halfSize,  halfSize];
		p2 = [halfSize, -halfSize, -halfSize];
		p3 = [halfSize,  halfSize, -halfSize];
		p4 = [halfSize,  halfSize,  halfSize];
		
		rect = createSurface(p1, p2, p3, p4, matrix);
		
		rect.strokeColor = '#f55';
		
		p1 = [-halfSize, halfSize,  halfSize];
		p2 = [-halfSize, halfSize, -halfSize];
		p3 = [halfSize,  halfSize, -halfSize];
		p4 = [halfSize,  halfSize,  halfSize];
		
		rect = createSurface(p1, p2, p3, p4, matrix);
		
		rect.strokeColor = '#f55';
	}
}


var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init: function(container){
		Main.setObjective('Yandaki geometrik cisimlerden açınımını elde etmek istediğinize basınız.');
	}
}