jQuery(function () {
    'use strict';

    // Banner slider js start
    var swiper = new Swiper("#banner", {
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".arr_right",
            prevEl: ".arr_left",
        },
    });

    $("#banner").each(function(elem, target){
        var swp = target.swiper;
        $(this).hover(function() {
            swp.autoplay.stop();
        }, function() {
            swp.autoplay.start();
        });
    });
    

    // Counter js start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Accoudian js start
    $('.accordion-item').on('click', function(){
        $('.accordion-item').removeClass('border');
        $(this).toggleClass('border');
    });

})