$(document).ready(function() {
	drawDemo("#canvas3D");
});

function drawDemo(cvsID) // canvas ID is passed in as a string
{
  var g = new CvsGraphCtx3D(cvsID);  // create a graphics context
  g.clearCanvas("#eeeea0");          // fill canvas to lightYellow
  // define x,y coords of canvas lower left and the width of screen
  g.setWorldCoords3D(-200, -200, 800);  // x axis 800 units long

  // create a blue circle centered on 0,0 with radius 100
  var circle = g.arc3D(0, 0, 100, 0, 360, true, "cyan");
  // write text centered on the origin 100 units high
  var txt = g.text3D("Ab", 0, 0, 5, 100, "white");

  var grp = g.groupPaths(circle, txt);  // group 2 paths
  g.renderGroup3D(grp);      // draw group

  g.rotateGroup3D(grp, 20, -30, 0);
  g.translateGroup3D(grp, 300, 200, 100);
  g.renderGroup3D(grp);      // draw after moving
}