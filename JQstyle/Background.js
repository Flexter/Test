$( document ).ready(function() {


	$.fn.Div_Vertical_Align = function() {

		var Hh = $( window ).height();

		var Obj = $( this ).height();

		$( this ).css({'margin-top': ((Hh/2)-(Obj/2))+'px' });


	};


	$.fn.Div_Horizontal_Align = function() {

		var Ww = $( window ).width();

		var Obj = $( this ).width();

		$( this ).css({'margin-top': ((Ww/2)-(Obj/2))+'px' });


	};


	setInterval(function(){

		var Hh = $( window ).height();
		var Ww = $( window ).width();
		var p = $( ".last" );
		var position = p.position();
		var LastDivHeight = $( ".last" ).height();
		var CD = position.top;

		var BGHheight = $(".Background-Pattern").height();
		var BGAdjust = $(".adjust").height();
		var BGpostion =  ((BGHheight/2)-(BGAdjust)/2);


		if (Hh > (LastDivHeight+CD)) {

			$(".Background , .Background-Pattern").css("height", Hh+"px");
			$(".Background , .Background-Pattern").css("width", "100%");
			$('body').css({'overflow-y': 'hidden'});
			$(".adjust").css({"margin-top": BGpostion+"px"});

		}

		else {


			$(".Background , .Background-Pattern").css("height", LastDivHeight+CD+15+"px");
			$(".Background , .Background-Pattern").css("width", "100%");
			$(".adjust").css({"margin-top": "0px"});
			$('body').css({'overflow-y': 'scroll'});
		};

			$('.logo-container').css({'width': Math.sqrt(Hh*15)+'px'});



			$('.vertical-align').Div_Vertical_Align();
			$('.horizontal-align').Div_Horizontal_Align();




		}, 50);





//_____________________Logo_Size________________//


//______________________BG_SLIDE_EFFECT___________//



$('.arrow-container').click(function(){

	$('.adjust-visibility').fadeOut(250,0, function () {

    	$('.Page-menu').delay(100).fadeIn(100);

  });

});



$('#HOME').click(function(){

	$('.Page-menu').fadeOut(100,0, function(){

		$('.adjust-visibility').delay(150).fadeIn(450);		

	});

  });



$('#AU').click(function(){

	$('.Page-menu').fadeOut(100,0, function(){

		$('.AboutUs').delay(150).fadeIn(450);		

	});

  });













});