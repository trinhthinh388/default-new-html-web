

$(document).ready(function(){

    // Changing color of the fixed top header when scrolling
    jQuery('#nav').singlePageNav({
        offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            $("#navigation").css("background-color", "#0EB493");
        }
        else{
            $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
        }
    });
    //END

    //Set the height of slider **IDK why brandi use this????**
    // let sliderHeight = $(window).height();
    // $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css("height", sliderHeight);
    // $(window).resize(function(){
    //     'use strict',
    //     $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css("height", sliderHeight);
    // });
    //END


    //WOW animation
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 120,
        mobile: false,
        live: true
    });
    wow.init();
    //END
});