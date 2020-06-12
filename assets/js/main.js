

$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            $("#navigation").css("background-color", "#0EB493");
            $("#navigation .navbar-brand i").css("color", "#ffffff").css("border-color", "#000000");
        }
        else{
            $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
            $("#navigation .navbar-brand i").css("color", "rgba(245, 245, 245, 0.5)").css("border-color", "rgba(50,176,238, 0.5)");
        }
        if($('.work__lightbox').css('display') == 'none')
            return;
        $('.work__lightbox').css('opacity', '0');
        setTimeout(()=>{
            $('.work__lightbox').css('display', 'none');
        }, 400);
    });
    //END
    //Set focus nav btn
    $(window).scroll(function(){
        let home = $("#slider").offset().top - 50;
        let feature = $("#feature").offset().top - 50;
        let work = $("#work").offset().top - 50;
        let teams = $("#teams").offset().top - 50;
        let contact = $("#discuss").offset().top - 50;
        $(".nav__btn").removeClass("nav__btn--focus-begin")
                      .removeClass("nav__btn--focus")
                      .removeClass("nav__btn--focus-smartphone");
        if($(window).scrollTop() > home && $(window).scrollTop() < feature){
            console.log("home");
            $("#slider-btn").addClass("nav__btn--focus-begin");
            $(".row__main-nav--smartphone #slider-btn").addClass("nav__btn--focus-smartphone");
        }
        else if($(window).scrollTop() >= feature && $(window).scrollTop() < work){
            console.log("feature");
            $("#feature-btn").addClass("nav__btn--focus");
            $(".row__main-nav--smartphone #feature-btn").addClass("nav__btn--focus-smartphone");
        }
        else if($(window).scrollTop() >= work && $(window).scrollTop() < teams){
            console.log("work");
            $("#work-btn").addClass("nav__btn--focus");
            $(".row__main-nav--smartphone #work-btn").addClass("nav__btn--focus-smartphone");
        }
        else if($(window).scrollTop() >= teams && $(window).scrollTop() < contact){
            console.log("teams");
            $("#teams-btn").addClass("nav__btn--focus");
            $(".row__main-nav--smartphone #teams-btn").addClass("nav__btn--focus-smartphone");
        }else if($(window).scrollTop() >= contact){
            console.log("contact");
            $("#discuss-btn").addClass("nav__btn--focus");
            $(".row__main-nav--smartphone #discuss-btn").addClass("nav__btn--focus-smartphone");
        }
    });
    //END

    //Hover nav button
    $(window).scroll(function(){
        if($(window).scrollTop() > 400)
        {
            $(".nav__btn").hover(function(){
                $(this).css("border-top", "1px solid #FFC300");
            }, function(){
                $(this).css("border-top", "1px solid transparent");
            });
        }
        else{
            $(".nav__btn").hover(function(){
                $(this).css("border-top", "1px solid #32b0ee");
            }, function(){
                $(this).css("border-top", "1px solid transparent");
            });
        }
    })
    //END

    //Set the figure caption category
    $('#work .container-fluid .branding figcaption p').toArray()
    .forEach(item => {
        item.textContent = "Branding";
    });
    $('#work .container-fluid .web figcaption p').toArray()
    .forEach(item => {
        item.textContent = "Web";
    })
    $('#work .container-fluid .logo-design figcaption p').toArray()
    .forEach(item => {
        item.textContent = "Logo Design";
    })
    $('#work .container-fluid .photography figcaption p').toArray()
    .forEach(item => {
        item.textContent = "Photography";
    })
    //End
    // Header nav collapse
    $('.row__button--collapse').click(function(){
        if($('.row__main-nav--smartphone').css('display') === 'block'){
            
            $('.row__main-nav--smartphone').css('transform', 'translateX(100%)');
            setTimeout(()=>{
                $('.row__main-nav--smartphone').css('display', 'none');
            }, 200);
            $('.row__button--collapse i').removeClass('fas');
            $('.row__button--collapse i').removeClass('fa-times');
            $('.row__button--collapse i').addClass('fa');
            $('.row__button--collapse i').addClass('fa-bars');
        }
        else{
            $('.row__main-nav--smartphone').css('display', 'block');
            setTimeout(()=>{
                $('.row__main-nav--smartphone').css('transform', 'translateX(0%)');
            }, 100);
            $('.row__button--collapse i').removeClass('fa');
            $('.row__button--collapse i').removeClass('fa-bars');
            $('.row__button--collapse i').addClass('fas');
            $('.row__button--collapse i').addClass('fa-times');
        }
    })
    //END

    //Logo
    function translateLogo(viewport){
       
        if(viewport.matches){
            $('.navigation__header').addClass("row");
            $('.navbar-brand i').css("display", "none");
            let widthLogo = $('.navbar-brand').width();
            console.log(`translateX(50vw - ${widthLogo / 2}px)`);
            $('.navbar-brand').css("transform", `translateX(calc(50vw - ${widthLogo / 2}px))`);
        }
        else{
            $('.navigation__header').removeClass("row");
            $('.navbar-brand i').css("display", "block");
            $('.navbar-brand').css("transform", `translateX(0px)`);
        }
    }
    let viewport = window.matchMedia("(max-width: 800px)");
    translateLogo(viewport);
    viewport.addListener(translateLogo);
    //END

    

    //Init Slick
    $('.container__slider').slick({
        dots: true,
        speed: 500,
        prevArrow: null,
		nextArrow: null,
        slideToShow: 1,
        draggable: true,
    });

    $('.slider__slide').slick({
        dots: true,
		loop: true,
		infinite: true,
		prevArrow: null,
		nextArrow: null,
		speed: 300,
		slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.slider__row--team').slick({
        dots: true,
        loop: true,
        infinite: true,
        prevArrow: null,
        nextArrow: null,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1201,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //END

    //Work photo filter
    function onFilterBtnClick(){
        let filters = [".branding", ".photography", ".web", ".logo-design"];
        let dataFilter = $(this).attr("data-filter");
        $('.container__button a').removeClass("filter--selected");
        $(`[data-filter="${dataFilter}"]`).addClass("filter--selected");
        if(dataFilter === 'all'){
            let timeOut1, timeOut2;
            $('.photo').css('opacity', '0');
            timeOut1 = setTimeout(()=>{
                $('.photo').css('display', 'block');
                
                timeOut2 = setTimeout(()=>{
                    $('.photo').css('opacity', '1');
                }, 200);
            }, 400);
        }
        else{
            $('.photo').css('opacity', '0');
            setTimeout(()=>{
                filters.filter(item => item !== dataFilter)
                    .forEach(item => {
                        $(item).css('opacity', '0');
                        setTimeout(()=>{
                            $(item).css('display', 'none');
                        }, 400);
                    });
                $(dataFilter).css('display','block');
                setTimeout(()=>{
                    $(dataFilter).css('opacity','1');
                }, 400);
            },400);

        }
    }

    $('[data-filter="all"]').addClass('filter--selected');
    $('.container__button a').on('click', onFilterBtnClick);
    //END

    //Lightbox 
    $('.fancybox').on('click', function(event){
        event.preventDefault();
        let source = $(this).attr("data-source");
        $('.work__lightbox').css('display', 'block');
        setTimeout(()=>{
            $('.work__lightbox').css('opacity', '1');
        }, 200); 
        $('.work__lightbox .lightbox__content img').attr('src', source);
    });

    //Fade out
    $('.work__lightbox').click(function(){
        $(this).css('opacity', '0');
        setTimeout(()=>{
            $(this).css('display', 'none');
        }, 400);
    });
    //END

    //Smooth Scroll
    $('.nav__btn').on('click',function(e){
        let des = $(this).attr("href");
        if($(des).length === 0)
            return;
        e.preventDefault();
        $('.row__main-nav--smartphone').css('transform', 'translateX(100%)');
        setTimeout(()=>{
            $('.row__main-nav--smartphone').css('display', 'none');
        }, 200);
        $('.row__button--collapse i').removeClass('fas');
        $('.row__button--collapse i').removeClass('fa-times');
        $('.row__button--collapse i').addClass('fa');
        $('.row__button--collapse i').addClass('fa-bars');
        $('html, body').animate({
            scrollTop: ($(des).offset().top - 50),
        }, 1000);
    });
    //END
});