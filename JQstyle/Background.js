$( document ).ready(function() {

	setInterval(function(){


		var Hh = $( window ).height();
		var Ww = $( window ).width();

				$(".Background").css("height", Hh+"px");
				$(".Background").css("width", Ww+"px");

				$(".shield-container").css({"width" : Hh*0.2+"px"});


}, 50);



});