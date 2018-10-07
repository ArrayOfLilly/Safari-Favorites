$(document).ready(function(){

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
		$('img[src="./img/switch.png"]').attr({src : "./img/switch_light.png"})
		$("#dark_sw").addClass("selected");
		$("#light_sw").removeClass("selected");
	});

	$("#light_sw").click(function(){
		$('link[href="./assets/css/dark.css"]').attr({href : "./assets/css/light.css"});
		$('img[src="./img/switch_light.png"]').attr({src : "./img/switch.png"})
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



