
//
$(document).ready(function () {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});
});

// wow
$(function () {
	new WOW().init();
	$(".rotate").textrotator();
})

// scroll to top webpage
function scrollToTop() {
    // Only scroll to the top if the page was not navigated via history (like the back button)
    if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'manual';  // Prevents the browser from restoring the scroll position
    }
    
    window.scrollTo(0, 0);
}

window.addEventListener('load', scrollToTop);