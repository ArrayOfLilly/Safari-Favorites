$(document).ready(function() {
    
//     $('.hover').on('touchstart touchend', function(e) {
//         e.preventDefault();
//         $(this).removeClass('favorites');
//     });


	function hasTouch() {
	    return 'ontouchstart' in document.documentElement
	           || navigator.maxTouchPoints > 0
	           || navigator.msMaxTouchPoints > 0;
	}
	
	if (hasTouch()) {
		    $('#colorful_sw').css("display" "none");
		    $('#gray_sw').css("display" "none");
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
	    }

	    function disableHover() {
	        if (!hasHoverClass) return;

	        container.className = container.className.replace(' hasHover', '');
	        hasHoverClass = false;
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





