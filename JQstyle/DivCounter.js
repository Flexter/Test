$(document).ready(function() {



	function randomRange(min,max) {
		return Math.random() * (max-min) + min;
 }


 

setInterval(function(){

 	var RanN = randomRange(-7,7);

 	$("#Aircraft").css({'transform': 'rotate(' + RanN + 'deg)'});

 }, 5000)

setInterval(function(){

 	var RanN = randomRange(-7,7);

 	$("#Aircraft").css({"top": 30 + randomRange(-3,3) + "%"});
 	
 }, 7000)










$( "#Down_Navigation" ).click(function() {

	$("html, body").animate({ scrollTop: $(document).height() }, 1500 );

});




});