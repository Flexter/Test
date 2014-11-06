$(document).ready(function(){


 $('#clock').countdown('2020/10/10', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<span>%w<p>Weeks</p></span>'
     + '<span>%d<p>Days</p></span>'
     + '<span>%H<p>Hours</p></span>'
     + '<span>%M<p>Mounts</p></span>'
     + '<span>%S<p>Secounds</p></span>'));
 });






setInterval(function(){


    var font_size = ($(document).width()/40);

	var WC = $("#clock").width();

	$("#clock").css({"left" : (($(document).width()/2)-WC/2)+"px"})
    
    $("#clock").css({"font-size" : font_size + "px"});
 

}, 50);
	

});

