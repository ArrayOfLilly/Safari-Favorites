$('a.favorites').hover(function(){
	$('a.favorites').toggleClass('toggle');
});

// $('a.favorites').click(function(){
// 	$(a.favorites).toggleClass('toggle');
// });

$('a.favorites').click(function(){
	$(a.favorites).unbind('mouseenter mouseleave');
});