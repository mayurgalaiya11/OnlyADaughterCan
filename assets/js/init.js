/**
 * Created by User on 17/07/2020.
 */
(function ($) {
    $(document).ready(function () {
        //Expert Slider
        $('.expert-slider').owlCarousel({
            loop:false,
            dots:false,
            margin:10,
            nav: true,
            navText: ['<img src="arrow-left.png" class="img-fluid arrow-left">','<img src="arrow-right.png" class="img-fluid arrow-right">'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
    });
})(jQuery);



