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



	$(".Background , .Background-Pattern").css("height", Hh+"px");
	$(".Background , .Background-Pattern").css("width", Ww+"px");
	$(".Background , .Background-Pattern").css("min-height", LastDivHeight+CD+"px");




	}, 50);





//_____________________Logo_Size________________//



	setInterval(function(){


			var ScreenWidth = $( window ).width();
			var ScreenHeight = $( window ).height();

		
		$('.shield-container').css({'width': Math.sqrt(ScreenHeight*15)+'px'});

		
			
	

	},50);





});