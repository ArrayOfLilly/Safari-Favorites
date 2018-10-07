$(document).ready(function(){

	$("#circle_sw").addClass("selected");
	$("#dark_sw").addClass("selected");
	$("#gray_sw").addClass("selected");

	$("#square_sw").click(function(){
		$('link[href="./assets/css/circle.css"]').attr({href : "./assets/css/square.css"});
		$("#square_sw").addClass("selected");
		$("#circle_sw").removeClass("selected");
	});

	$("#circle_sw").click(function(){
		$('link[href="./assets/css/square.css"]').attr({href : "./assets/css/circle.css"});
		$("#circle_sw").addClass("selected");
		$("#square_sw").removeClass("selected");
	});

	$("#dark_sw").click(function(){
		$('link[href="./assets/css/light.css"]').attr({href : "./assets/css/dark.css"});
		$('img[src="./img/icons/dark_switch_on_light_mdpi.png"]').attr({src : "./img/icons/dark_switch_on_dark_mdpi.png"});
		$('img[src="./img/icons/light_switch_on_light_mdpi.png"]').attr({src : "./img/icons/light_switch_on_dark_mdpi.png"});
		$("#dark_sw").addClass("selected");
		$("#light_sw").removeClass("selected");
	});

	$("#light_sw").click(function(){
		$('link[href="./assets/css/dark.css"]').attr({href : "./assets/css/light.css"});
		$('img[src="./img/icons/dark_switch_on_dark_mdpi.png"]').attr({src : "./img/icons/dark_switch_on_light_mdpi.png"});
		$('img[src="./img/icons/light_switch_on_dark_mdpi.png"]').attr({src : "./img/icons/light_switch_on_light_mdpi.png"});
		$("#light_sw").addClass("selected");
		$("#dark_sw").removeClass("selected");
	});

	$("#colorful_sw").click(function(){
		$('link[href="./assets/css/gray.css"]').attr({href : "./assets/css/colorful.css"});
		$("#colorful_sw").addClass("selected");
		$("#gray_sw").removeClass("selected");
	});

	$("#gray_sw").click(function(){
		$('link[href="./assets/css/colorful.css"]').attr({href : "./assets/css/gray.css"});
		$("#gray_sw").addClass("selected");
		$("#colorful_sw").removeClass("selected");
	});

});



