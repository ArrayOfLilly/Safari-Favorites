$(document).ready(function(){

	$(".nav_list .nav_group").removeClass("active");
	$(".all").addClass("active");

	function clickAll(){
		if ($(".all").hasClass("active")) {
			return;
		} else {
			$(".nav_list .nav_group").removeClass("active");
			$(".all").addClass("active");
			$(".item").removeClass("display_toggle");
		}
	}


	$(".all").click(clickAll);

	$(".clear").click(function(){
		if ($(".clear").hasClass("active")) {
			return;
		} else {
			$(".nav_list .nav_group").removeClass("active");
			$(".clear").addClass("active");
			$(".item").addClass("display_toggle");
		}
	});


	$(".nav_group").click(function(){
		if (!$(this).hasClass("all") && $(".all").hasClass("active")){
			$(".all").toggleClass("active");
			$(".item").toggleClass("display_toggle");
		}
		if (!$(this).hasClass("clear") && $(".clear").hasClass("active")){
			$(".clear").toggleClass("active");
		}
		if ($(this).hasClass("search_gr")){
			$(".search_gr").toggleClass("active");
			$(".search").toggleClass("display_toggle");
		}
		if ($(this).hasClass("entertainment_gr")){
			$(".entertainment_gr").toggleClass("active");
			$(".entertainment").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("acquisition_gr")){
			$(".acquisition_gr").toggleClass("active");
			$(".acquisition").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("read_gr")){
			$(".read_gr").toggleClass("active");
			$(".read").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("design_gr")){
			$(".design_gr").toggleClass("active");
			$(".design").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("social_gr")){
			$(".social_gr").toggleClass("active");
			$(".social").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("cloud_gr")){
			$(".cloud_gr").toggleClass("active");
			$(".cloud").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("it_tabloid_gr")){
			$(".it_tabloid_gr").toggleClass("active");
			$(".it_tabloid").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("learn_gr")){
			$(".learn_gr").toggleClass("active");
			$(".learn").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("development_gr")){
			$(".development_gr").toggleClass("active");
			$(".development").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("alimentary_gr")){
			$(".alimentary_gr").toggleClass("active");
			$(".alimentary").toggleClass("display_toggle");
		}	
		if ($(this).hasClass("shop_gr")){
			$(".shop_gr").toggleClass("active");
			$(".shop").toggleClass("display_toggle");
		}	
	});

});