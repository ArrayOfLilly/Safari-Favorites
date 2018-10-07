$(document).ready(function(){

	$('a.fav_link').hover(function(){
		$('a.fav_link').toggleClass('toggle');
	});

	$('a.fav_link').click(function(){
		$('a.fav_link').unbind('hover');
	});

})