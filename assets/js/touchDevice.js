$(document).ready(function() {
	document.getElementById('colorful_sw').style.display = "none";
	document.getElementById('gray_sw').style.display = "none";

	function hasTouch() {
	    return 'ontouchstart' in document.documentElement
	           || navigator.maxTouchPoints > 0
	           || navigator.msMaxTouchPoints > 0;
	}

	if (!hasTouch()) {
	    document.body.className += ' hasHover';
	}

	function watchForHover() {
	    var hasHoverClass = false;
	    var container = document.body;
	    var lastTouchTime = 0;

	    function enableHover() {
	        // filter emulated events coming from touch events
	        if (new Date() - lastTouchTime < 500) return;
	        if (hasHoverClass) return;

	        container.className += ' hasHover';
	        hasHoverClass = true;

	        document.getElementById('colorful_sw').style.display = "initial";
			document.getElementById('gray_sw').style.display = "initial";
	    }

	    function disableHover() {
	        if (!hasHoverClass) return;

	        container.className = container.className.replace(' hasHover', '');
	        hasHoverClass = false;

	        document.getElementById('colorful_sw').style.display = "none";
			document.getElementById('gray_sw').style.display = "none";
	    }

	    function updateLastTouchTime() {
	        lastTouchTime = new Date();
	    }

	    document.addEventListener('touchstart', updateLastTouchTime, true);
	    document.addEventListener('touchstart', disableHover, true);
	    document.addEventListener('mousemove', enableHover, true);

	    enableHover();
	}

	watchForHover();
 
});





