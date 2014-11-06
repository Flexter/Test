$(document).ready(function(){




 	var canvas = document.getElementById('canvas');

    var context = canvas.getContext('2d');
    var text = canvas.getContext('2d');

	var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);

	grd.addColorStop(0, '#8ED6FF');
	grd.addColorStop(1, '#004CB3');
      // set line width for all lines





      // miter line join (left)
    context.beginPath();

	context.moveTo(0,0);
    context.quadraticCurveTo(0,0,1366,0);
    context.quadraticCurveTo(1366,0,1366,300); /* X1,Y1, X2,Y2 */
    context.quadraticCurveTo(950,200,350,400);/* X1,Y1, X2,Y2 */

    context.quadraticCurveTo(180,450,0,400); /* X1,Y1, X2,Y2 */
     


      context.lineJoin = 'miter';

      context.fillStyle = grd;

      context.shadowColor = '#494949';
      context.shadowBlur = 20;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;



      context.fill();


      text.font = 'italic 40pt Calibri';
      text.fillText('Hello World!', 150, 100);
      
      text.shadowColor = '#F91C21';
      text.shadowBlur = 0;
      text.shadowOffsetX = 0;
      text.shadowOffsetY = 0;

    

 



});