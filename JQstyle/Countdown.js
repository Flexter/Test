(function($){


	$.fn.countdown = function(options, callback) {

		var settings = { 'date' : null };

		if (options) {


			$.extend(settings, options);


		}


		this_sel = $(this);


		function count_exec() {



			eventDate = Date.parse(settings['date']) / 1000;
			
			currentDate = Math.floor($.now()/1000);

			secounds =  eventDate - currentDate;

			days = 		Math.floor(secounds/(60*60*24));



			if (eventDate <= currentDate) {

				//callback//

				callback.call(this);
				clearInterval(Clock_interval);


			};


			secounds-= 	days*60*60*24;

			hours = 	Math.floor(secounds/(60*60));

			secounds-= 	hours*60*60;

			minutes = 	Math.floor(secounds/(60));

			secounds-= 	minutes*60;



			if (!isNaN(eventDate)) {

			this_sel.find('.days').text(days);
			this_sel.find('.hours').text(hours);
			this_sel.find('.minutes').text(minutes);
			this_sel.find('.secounds').text(secounds);

		}

		else {

			this_sel.find('.days').text('00');
			this_sel.find('.hours').text('00');
			this_sel.find('.minutes').text('00');
			this_sel.find('.secounds').text('00');



		}

			//*secounds = (String(secounds).length !== 2) ? '0' + secounds : secounds; *//
		

				if ( String(days).length  < 2  ) {

				days_doublle = '0'+days;
				this_sel.find('.days').text(days_doublle);



				};


				if ( String(hours).length  < 2  ) {

				hours_double = '0'+ hours;
				this_sel.find('.hours').text(hours_double);


				};

				if ( String(minutes).length  < 2  ) {

				minutes_double = '0'+ minutes;
				this_sel.find('.minutes').text(minutes_double);


				};


				if ( String(secounds).length  < 2  ) {

				secounds_double = '0'+ secounds;
				this_sel.find('.secounds').text(secounds_double);





				};

				
		};





			Clock_interval = setInterval(count_exec, 1000);



	};















}) (jQuery);