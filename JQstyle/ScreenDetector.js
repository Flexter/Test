$( window ).ready(function() {

	setInterval(function(){


		var Hh = $( window ).height();
		var Ww = $( window ).width();


		var Size_a = 120; 													// Static Size
		var Size_b = 0.3*Hh;												// Dynamic Size


			if (Size_b < Size_a) {


				$("#General_menu").css({"height" : Size_a + "px"});
				$("#General_menu").css({"margin-top" : Hh - Size_a });

			}

			else {

				$("#General_menu").css({"height" : 0.3*Hh + "px"});
				$("#General_menu").css({"margin-top" : Hh-0.3*Hh});

	}


}, 50);


});