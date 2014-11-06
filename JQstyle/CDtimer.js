$( document ).ready(function() {




$('.countdown').countdown({ date: '29 November 2014 16:20:30'}, function(){


			$('.countdown').text('DONE !');

});




setInterval(function(){


var box_length = $('.countdown').width();

var Ww = $( window ).width();

$('.CD-container').css({'margin-left' : (Ww/2)-(box_length/2)+'px' });


}, 50);



//______________________________________Countdown_Timer_Screen_Size_______________________________________________//

setInterval(function(){

	var ScreenWidth = $( window ).width();
	var ScreenHeight = $( window ).height();

	var ScaleCoeff = 1000;

	var Ratio_Width = (ScreenWidth/ScaleCoeff);
	var Ratio_Height = (ScreenHeight/ScaleCoeff);

	//alert((ScreenWidth*ScreenHeight)/1000);

	
	// $('.CDTimer').css({'margin': (((ScreenWidth/1000)*(ScreenHeight/1000))+'px'}); //

	
	

			

		





			$('.CDTimer, .CD-number').css({'width': (ScreenWidth/13) + 'px', 'min-width' : 50 + 'px'});
			$('.CDTimer, .CD-number').css({'height': (ScreenWidth/13) + 'px', 'min-height' : 50 + 'px'});

			$('.CD-number').css({'font-size': ($('.CD-number').height()/1.8) + 'px'});


			if (ScreenWidth <= 920) {

				$('.SECOUNDS').text('SEC');
				$('.MINUTES').text('MIN');
				$('.HOURS').text('H');
				$('.DAYS').text('D');

			}

			else 

			{

				$('.SECOUNDS').text('SECOUNDS');
				$('.MINUTES').text('MINUTES');
				$('.HOURS').text('HOURS');
				$('.DAYS').text('DAYS');


			};





	},50);



	





});