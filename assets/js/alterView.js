$(document).ready(function(){

	$("#square_sw").click(function(){
		$('link[href="./assets/css/circle.css"]').attr({href : "./assets/css/square.css"});
		$("#square_sw").addClass("active");
		$("#circle_sw").removeClass("active");
	});

	$("#circle_sw").click(function(){
		$('link[href="./assets/css/square.css"]').attr({href : "./assets/css/circle.css"});
		$("#circle_sw").addClass("active");
		$("#square_sw").removeClass("active");
	});

	$("#dark_sw").click(function(){
		$('link[href="./assets/css/light.css"]').attr({href : "./assets/css/dark.css"});
		$('img[src="./img/switch.png"]').attr({src : "./img/switch_light.png"})
	});

	$("#light_sw").click(function(){
		$('link[href="./assets/css/dark.css"]').attr({href : "./assets/css/light.css"});
		$('img[src="./img/switch_light.png"]').attr({src : "./img/switch.png"})
	});



});



