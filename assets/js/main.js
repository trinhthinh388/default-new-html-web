

$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            $("#navigation").css("background-color", "#0EB493");
        }
        else{
            $("#navigation").css("background-color", "rgba(16, 22, 54, 0.2)");
        }
        if($('.work__lightbox').css('display') == 'none')
            return;
        $('.work__lightbox').css('opacity', '0');
        setTimeout(()=>{
            $('.work__lightbox').css('display', 'none');
        }, 400);
    });
    //END

    // Set the height of slider
    // let sliderHeight = $(window).height();
    // $('.slider__inner').css("height", sliderHeight);
    // $(window).resize(function(){
    //     'use strict',
    //     $('.slider__inner').css("height", sliderHeight);
    // });
    // END

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

    //Logo
    function translateLogo(viewport){
       
        if(viewport.matches){
            $('.navigation__header').addClass("row");
            $('.navbar-brand i').css("display", "none");
            let widthLogo = $('.navbar-brand').width();
            $('.navbar-brand').css("transform", `translateX(calc(100vw/2 ))`);
        }
        else{
            $('.navigation__header').removeClass("row");
            $('.navbar-brand i').css("display", "block");
            $('.navbar-brand').css("transform", `translateX(0px)`);
        }
    }
    let viewport = window.matchMedia("(max-width: 40rem)");
    translateLogo(viewport);
    viewport.addListener(translateLogo);
    //END

    //Init Slick
    $('.container__slider').slick({
        dots: true,
        speed: 500,
        arrows: false,
        slideToShow: 1,
        draggable: false,
    });

    $('.slider__inner').slick({
        dots: true,
        speed: 500,
        arrows: false,
        slideToShow: 1,
        draggable: false,
    });

    $('.slider__inner').on('init', function(slick){
    });
    //END

    //Work photo filter
    function onFilterBtnClick(){
        let dataOffset = [{
            'x': $('.photo').offset().left,
            'y': $('.photo').offset().top
        }];
        let width = $('.photo').width();
        let height = $('photo').height();
        let filters = [".branding", ".photography", ".web", ".logo-design"];
        let dataFilter = $(this).attr("data-filter");
        $('.filter-btn a').removeClass("filter--selected");
        $(`[data-filter="${dataFilter}"]`).addClass("filter--selected");
        for(let i = 1; i < $(dataFilter).length; i++){
            if((i % 4) === 0 && i >= 4){
                dataOffset = [...dataOffset, {
                    'x': dataOffset[i-1].x + width,
                    'y': dataOffset[i-1].y + height,
                }];
            }
            dataOffset = [...dataOffset, {
                'x': dataOffset[i-1].x + width,
                'y': dataOffset[i-1].y,
            }];
        }
        
        console.log(dataOffset);
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
    $('.filter-btn a').on('click', onFilterBtnClick);
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

});