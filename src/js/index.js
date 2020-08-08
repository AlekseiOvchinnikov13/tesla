$(function () {
    /*new WOW({
        animateClass: 'animate__animated'
    }).init();*/
    /*$('.header-arrows').on('click', function() {
        $('html,body').animate({scrollTop:$('.surf').offset().top+"px"},{duration:1E3});
    });*/
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
    });

    $('.header-btn').on('click', function () {
       $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
    });
});