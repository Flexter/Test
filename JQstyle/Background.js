$( document ).ready(function() {





	setInterval(function(){





		var Hh = $( window ).height();
		var Ww = $( window ).width();

		var Aspect_Ratio = Ww/Hh;

		var Screen_Ratio = (16/9);







var p = $( "#last" );

var position = p.position();

var LastDivHeight = $( "#last" ).height();

var CD = position.top;



	$(".Background , .Background-Pattern").css("height", LastDivHeight+CD+"px");
	$(".Background , .Background-Pattern").css("width", "100%");


		$('.shield-container').css({'width': Math.sqrt(Hh*15)+'px'});


}, false);

	}, 50);





//_____________________Logo_Size________________//








});