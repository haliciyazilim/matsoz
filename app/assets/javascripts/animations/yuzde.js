// JavaScript Document

var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};

var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(paper){
	
	Main.setObjective('Aşağıda verilen renkli bölgeyi kesir, ondalık kesir ve yüzde olarak yazınız.');
	var rect;
	var frag;
	var circ;

	
	var firstNominator; 		// firstNominator must be less than firstDenominator
	var firstDenominator; 	// firstDenominator -> 2,4,5,10,20
 	var secondNominator;
	var secondDenominator = 100;
	
	do
	{
		firstDenominator = Math.floor(Math.random()*50);
	}
	while(firstDenominator != 2 && firstDenominator != 4 && firstDenominator != 5 && firstDenominator != 10 && firstDenominator != 20 )
	
	do
	{
		firstNominator = Math.floor(Math.random()*50) ;
	}
	while(firstNominator >= firstDenominator || firstNominator == 0)
	
	secondNominator = firstNominator * secondDenominator / firstDenominator;
//	console.log('firstNominator');
	
//	frag = new Path.Fraction(50,50, firstNominator, firstDenominator, 18);
	
	circ = new Path.SegmentedCircle(new Point(100, 100), 80, 0, 6);
	rect = new Path.SegmentedRectangle(380, 50, 100, 100, 10, 10);
	

}
