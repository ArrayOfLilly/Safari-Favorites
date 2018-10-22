$(document).ready(function(){

	var nav_array = {
		"all": 						$(".nav_list .nav_group"), 
		"active": 					$(".nav_group").hasClass("active"),
		"inactive":         		!$(".nav_group").hasClass("active"), 
		"search_gr":       			$("search_gr"),
		"entertainment_gr":        	$("entertainment_gr"),
		"acquisition_gr":        	$("acquisition_gr"),
		"read_gr":        			$("read_gr"),
		"design_gr":        		$("design_gr"),  
		"social_gr":        		$("social_gr"),
		"cloud_gr":        			$("cloud_gr"),
		"it_tabloid_gr":        	$("it_tabloid_gr"),
		"learn_gr":        			$("learn_gr"),
		"development_gr":        	$("development_gr"),
		"alimentary_gr":        	$("alimentary_gr"),
		"shop_gr":        			$("shop_gr")
	};

	var real_nav_array = $makeArray(nav_array);

	var item_array = {
		"all": 						$(".container .item"), 
		"hidden": 					$(".item").hasClass("display_toggle"),
		"visible":         			!$(".nav_group").hasClass("display_toggle"), 
		"search":       			$("search"),
		"entertainment":        	$("entertainment"),
		"acquisition":        		$("acquisition"),
		"read":        				$("read"),
		"design":        			$("design"),  
		"social":        			$("social"),
		"cloud":        			$("cloud"),
		"it_tabloid":        		$("it_tabloid"),
		"learn":        			$("learn"),
		"development":        		$("development"),
		"alimentary":        		$("alimentary"),
		"shop":        				$("shop")
	};

	var real_item_array = $makeArray(item_array);
});