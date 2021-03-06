jQuery(function ($) {

	'use strict';


    // -------------------------------------------------------------
    //      Sticky Menu
    // -------------------------------------------------------------
        
        // (function () {
        //     var nav = $('.navbar');
        //     var scrolled = false;

        //     $(window).scroll(function () {

        //         if (110 < $(window).scrollTop() && !scrolled) {
        //             nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

        //             scrolled = true;
        //         }

        //         if (110 > $(window).scrollTop() && scrolled) {
        //             nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

        //             scrolled = false;
        //         }
        //     });
        // }());



    // -------------------------------------------------------------
    //  	Offcanvas Menu
    // -------------------------------------------------------------

        (function () {
            var menutoggle = $(".menu-toggle");
            var offcanvasmenu = $("#offcanvas-menu");
            var closemenu = $(".close-menu");

            menutoggle.on("click" ,function(){
                offcanvasmenu.addClass("toggled");
                return false;
            });

            closemenu.on("click" ,function() {
                offcanvasmenu.removeClass("toggled");
                return false;
            });
        }());



    // -------------------------------------------------------------
    //      Single-Page-Menu-Scrolling  Easy Plugin
    // -------------------------------------------------------------

        $(function() {
            $('a.page-scroll').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });


    // -------------------------------------------------------------
    // Sub-menu
    // -------------------------------------------------------------
        if ( $('.dropmenu').length) {
            $('.dropmenu').on("click" ,function(){
                $(this).parent().find('ul').slideToggle();
                return false;
            });
        }



    // -------------------------------------------------------------
    //  Testimonial-Carousel
    // -------------------------------------------------------------

        $('#testimonial-carousel').carousel({
            interval: 1500
        })


    // -------------------------------------------------------------
    //      LightBox-Js
    // -------------------------------------------------------------

        if ($('#lightBox').length) {
            $('#lightBox').poptrox({
                usePopupCaption: true,
                usePopupNav: true,
                popupPadding: 0
            });
        }

        if ($('#lightBox-2').length) {
            $('#lightBox-2').poptrox({
                usePopupCaption: true,
                usePopupNav: true,

                popupPadding: 0
            });
        }
  


 
        

        // 


    // -------------------------------------------------------------
    //      Client-Slider
    // -------------------------------------------------------------

        if ($('.client-carousel').length) {
            $('.client-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }

        if ($('.client-carousel-two').length) {
            $('.client-carousel-two').owlCarousel({
                loop:true,
                autoplay:true,
                margin:10,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }




    // -------------------------------------------------------------
    //      Screen-Slider
    // -------------------------------------------------------------

        if ($('.screen-carousel').length) {
            $('.screen-carousel').slick({
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3,
                autoplay: 'true',
                dots: true,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                ]
            });
        }


 
    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

        function backToTopBtnAppear() {
            if ($("#toTop").length) {
                var windowpos = $(window).scrollTop(),
                    backToTopBtn = $("#toTop");

                if (windowpos > 300) {
                    backToTopBtn.fadeIn();
                } else {
                   backToTopBtn.fadeOut();
                }
            }
        }

        function backToTop() {
            if ($("#toTop").length) {
                var backToTopBtn = $("#toTop");
                backToTopBtn.on("click", function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 1000);
                    
                    return false;
                })
            }
        }



	// -------------------------------------------------------------
    // 		Preloader
    // -------------------------------------------------------------

        function preloader() {
            if ($('#preloader').length) {
                $('#preloader').delay(100).fadeOut('slow' , function () {
                    new WOW().init();
                });
            }
        }



    // -------------------------------------------------------------
    //      WHEN WINDOW LOAD
    // -------------------------------------------------------------

        $(window).on("load", function() {

            preloader();

            new WOW().init();

            backToTop();

        })



    // -------------------------------------------------------------
    //      WHEN WINDOW SCROLL
    // -------------------------------------------------------------
        $(window).on("scroll", function() {

            backToTopBtnAppear();

        });

});   // Jquery-End