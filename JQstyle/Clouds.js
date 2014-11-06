$(document).ready(function(){

setInterval(function(){


			var Hh = $( window ).height();
			var Ww = $( window ).width();

			var screen_ration = Hh/Ww ;

				if ( screen_ration > 1 ) {

					screen_ration = 1.5 ;
					
					}

					else if (screen_ration > 1.5) {

					screen_ration = screen_ration;

					}

				else {

					screen_ration = 1;

					};

			  		$(".cloud_fx").css({"background-size": (300*(screen_ration*screen_ration))+"%" });

			  		$(".cloud_fx2").css({"background-size": (200*(screen_ration*screen_ration))+"%" });

},50);


  function loop() {




        $(".cloud_fx").css({"background-position": "0%" + "bottom"});

        $(".cloud_fx").animate ({"background-position": 300+'%' + 'bottom',
        }, 800000, 'linear', function() {

            loop();

        });
    }

    loop();

  function loop2() {

        $(".cloud_fx_2").css({"background-position": "0%" + "bottom"});

        $(".cloud_fx_2").animate ({"background-position": '+=200%' + 'bottom',
        }, 50000, 'linear', function() {

            loop2();

        });
    }

    loop2();

});