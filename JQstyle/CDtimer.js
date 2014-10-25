$( document ).ready(function() {

$('.countdown').countdown({ date: '29 October 2014 16:20:30'}, function(){


			$('.countdown').text('DONE !');

});




setInterval(function(){


var box_length = $('.countdown').width();

var Ww = $( window ).width();

$('.CD-container').css({'margin-left' : (Ww/2)-(box_length/2)+'px' });


}, 50);




});