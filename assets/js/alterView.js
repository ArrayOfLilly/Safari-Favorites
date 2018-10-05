$(document).ready(function(){

	$("#square_switch").click(function(){
		$('link[href="./assets/css/circle.css"]').attr({href : "./assets/css/square.css"});
		$("#square_switch").addClass("active");
		$("#circle_switch").removeClass("active");
	});

	$("#circle_switch").click(function(){
		$('link[href="./assets/css/square.css"]').attr({href : "./assets/css/circle.css"});
		$("#circle_switch").addClass("active");
		$("#square_switch").removeClass("active");
	});

	$("#dark_switch").click(function(){
		$('link[href="./assets/css/light.css"]').attr({href : "./assets/css/dark.css"});
		$('img[src="./img/switch.png"]').attr({src : "./img/switch_light.png"})
	});

	$("#light_switch").click(function(){
		$('link[href="./assets/css/dark.css"]').attr({href : "./assets/css/light.css"});
		$('img[src="./img/switch_light.png"]').attr({src : "./img/switch.png"})
	});



});



