$(document).ready(function(){




$.fn.Font_Rules = function(a,b) {

	var pxSize = parseInt($( this ).css("font-size"));

		if (pxSize > b ) {

			$( this ).css({"font-size": b +"px"});

		}

		else if (pxSize < a ) {

			$( this ).css({"font-size": a +"px"});

		};
			
};



$.fn.Font_Responsive = function(a,b) {

	if ( a = 1 ) {

		$( this ).css({"font-size": Math.sqrt($(window).width()) + b + "px"});

	}

	else if ( a = 2 ) {

		$( this ).css({"font-size": Math.sqrt($(window).height()) + b + "px"});

	}
			
};




	setInterval(function(){


		var Screen_Width = $(window).width();




		$(".font-l-default").Font_Responsive(1,10);
		$(".font-s-default").Font_Responsive(1,0);

		$(".font-xs-default").Font_Responsive(1,-5);
		$(".font-xs-default").Font_Rules(15,40);

		$(".font-xs-default-60px").Font_Responsive(1,0);
		$(".font-xs-default-60px").Font_Rules(15,60);

		$(".font-xs-default-min_5").Font_Responsive(1,-4);
		$(".font-xs-default-min_5").Font_Rules(5,25);



		$(".font-countdown").Font_Responsive(1,10);
		$(".font-countdown").Font_Rules(1,100);



	$(".font-s-default-test").Font_Responsive(1,10);
	$(".font-s-default-test").Font_Rules(15,80);


	}, 50);









});