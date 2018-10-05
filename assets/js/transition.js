$(document).ready(function(){

	$('a.favorites').hover(function(){
		$('a.favorites').toggleClass('toggle');
	});

	$('a.favorites').click(function(){
		$('a.favorites').unbind('hover');
	});

})