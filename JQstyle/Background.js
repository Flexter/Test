$( document ).ready(function() {





	setInterval(function(){


window.addEventListener("resize", function() {
	// Get screen size (inner/outerWidth, inner/outerHeight)
	


		var Hh = $( window ).height();
		var Ww = $( window ).width();

		var Aspect_Ratio = Ww/Hh;

		var Screen_Ratio = (16/9);







var p = $( "#last" );

var position = p.position();

var LastDivHeight = $( "#last" ).height();

var CD = position.top;



	$(".Background , .Background-Pattern").css("height", Hh+"px");
	$(".Background , .Background-Pattern").css("width", Ww+"px");
	$(".Background , .Background-Pattern").css("min-height", LastDivHeight+CD+"px");


		$('.shield-container').css({'width': Math.sqrt(Hh*15)+'px'});


}, false);

	}, 50);





//_____________________Logo_Size________________//








});