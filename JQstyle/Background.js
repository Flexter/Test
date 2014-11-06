$( document ).ready(function() {





	setInterval(function(){

		var Hh = $( window ).height();
		var Ww = $( window ).width();
		var p = $( "#last" );
		var position = p.position();
		var LastDivHeight = $( "#last" ).height();
		var CD = position.top;

		var BGHheight = $(".Background-Pattern").height();
		var BGAdjust = $(".adjust").height();
		var BGpostion =  ((BGHheight/2)-(BGAdjust)/2);


		if (Hh > (LastDivHeight+CD)) {

			$(".Background , .Background-Pattern").css("height", Hh+"px");
			$(".Background , .Background-Pattern").css("width", "100%");
			$(".adjust").css({"margin-top": BGpostion+"px"});

		}

		else {


			$(".Background , .Background-Pattern").css("height", LastDivHeight+CD+"px");
			$(".Background , .Background-Pattern").css("width", "100%");
			$(".adjust").css({"margin-top": "0px"});

		};

			$('.shield-container').css({'width': Math.sqrt(Hh*15)+'px'});

		}, 50);





//_____________________Logo_Size________________//






});