
(function ($) {
    "use strict";

    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="bi bi-arrow-up-square"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------ Wow Active ----*/
    new WOW().init();

    /*------ Hero slider active 1 ----*/
    $('.hero-slider-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="bi bi-chevron-compact-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="bi bi-chevron-compact-right"></i></span>',
    });

    /*------ Hero slider active 2 ----*/
    $('.hero-slider-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="bi bi-chevron-compact-left"></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="bi bi-chevron-compact-right"></i></span>',
    });

    /*------ Hero slider active 3 ----*/
    $('.hero-slider-active-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: false,
    });

    /*------ Product slider active ----*/
    $('.product-slider-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 2 ----*/
    $('.product-slider-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 3 ----*/
    $('.product-slider-active-3').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 4 ----*/
    $('.product-slider-active-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 5 ----*/
    $('.product-slider-active-5').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ product categories slider 1 ----*/
    $('.product-categories-slider-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*------ Product categories slider 3 ----*/
    $('.product-categories-slider-3').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        rows: 2,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });



    /*--------------------------------
        InstagramFeed active
    -----------------------------------*/

    $(window).on('load', function () {
        var instagramFeedSliderOne = function () {
            $.instagramFeed({
                username: "ecommerce.devitems",
                container: "#instagramFeedOne",
                display_profile: false,
                'display_biography': false,
                display_gallery: true,
                callback: null,
                styling: false,
                items: 8,
            });
        };
        instagramFeedSliderOne();
        $("#instagramFeedOne").on("DOMNodeInserted", function (e) {
            if (e.target.className === "instagram_gallery") {
                $(".instagram-carousel .instagram_gallery").slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: false,
                    dots: false,
                    arrows: false,
                    loop: true,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 2,
                            }
                        }
                    ]
                });
                $(".instagram-carousel-2 .instagram_gallery").slick({
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    autoplay: false,
                    dots: false,
                    arrows: false,
                    loop: true,
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 6,
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 2,
                            }
                        }
                    ]
                });
            }
        });

    });

    /*--- Language currency active ----*/
    $('.language-dropdown-active').on('click', function (e) {
        e.preventDefault();
        $('.language-dropdown').slideToggle(400);
    });
    $('.currency-dropdown-active').on('click', function (e) {
        e.preventDefault();
        $('.currency-dropdown').slideToggle(400);
    });

    /*--- Countdown timer active ----*/
    $('#timer-1-active , #timer-3-active').syotimer({
        year: 2020,
        month: 10,
        day: 22,
        hour: 8,
        minute: 48,
        layout: 'hms',
        periodic: false,
        periodUnit: 'm'
    });

    $('#timer-2-active').syotimer({
        year: 2020,
        month: 10,
        day: 22,
        hour: 8,
        minute: 48,
        layout: 'dhms',
        periodic: false,
        periodUnit: 'm'
    });

    /*====== SidebarCart ======*/
    function miniCart() {
        var navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');

        wrapper.prepend('<div class="body-overlay"></div>');

        navbarTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });

        endTrigger.on('click', function () {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });

        $('.body-overlay').on('click', function () {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    miniCart();

    /*-------------------------------
       Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.search-wrap-1').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.search-wrap-1').addClass('open');
        }
    })


    /* NiceSelect */
    $('.nice-select').niceSelect();


    /*-------------------------
      Category active
    --------------------------*/
    $('.categori-show').on('click', function (e) {
        e.preventDefault();
        $('.categori-hide , .categori-hide-2').slideToggle(900);
    });

    /*--------------------------------
        Deal slider active
    -----------------------------------*/
    $('.deal-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });


    /*--------------------------------
        Sidebar product active
    -----------------------------------*/
    $('.sidebar-product-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 3,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    });

    /*--------------------------------
        Sidebar blog active
    -----------------------------------*/
    $('.sidebar-blog-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 2,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    });

    /*--------------------------------
        Product categories slider
    -----------------------------------*/
    $('.product-categories-slider-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*--------------------------------
        Testimonial active
    -----------------------------------*/
    $('.testimonial-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
    });
    /*--------------------------------
        Testimonial active 2
    -----------------------------------*/
    $('.testimonial-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
    });

    /*--------------------------------
        Product slider active 6
    -----------------------------------*/
    $('.product-slider-active-6').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------------------
        Product slider active 7
    -----------------------------------*/
    $('.product-slider-active-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------------------
        Product slider active 8
    -----------------------------------*/
    $('.product-slider-active-8').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------------------
        Product slider active 9
    -----------------------------------*/
    $('.product-slider-active-9').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------- Color active -----*/
    $('.pro-details-color-content').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    });

    /*--------------------------------
        Social icon active
    -----------------------------------*/
    if ($('.pro-details-action').length) {
        var $body = $('body'),
            $cartWrap = $('.pro-details-action'),
            $cartContent = $cartWrap.find('.product-dec-social');
        $cartWrap.on('click', '.social', function (e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.product-dec-social').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.product-dec-social').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function (e) {
            var $target = e.target;
            if (!$($target).is('.pro-details-action') && !$($target).parents().is('.pro-details-action') && $cartWrap.hasClass('show')) {
                $cartWrap.removeClass('show');
                $cartContent.removeClass('show');
            }
        });
    }

    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function () {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function (event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    $('#exampleModal').on('shown.bs.modal', function () {
        $('.quickview-slide-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            fade: false,
            loop: true,
            dots: false,
            arrows: true,
            prevArrow: '<span class="icon-prev"><i class="icon-arrow-left"></i></span>',
            nextArrow: '<span class="icon-next"><i class="icon-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
        $('.quickview-slide-active a').on('click', function () {
            $('.quickview-slide-active a').removeClass('active');
        })
    })

    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $('.mobile-header-button-active'),
            endTrigger = $('.sidebar-close'),
            container = $('.mobile-header-active'),
            wrapper4 = $('.main-wrapper');

        wrapper4.prepend('<div class="body-overlay-1"></div>');

        navbarTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
            wrapper4.addClass('overlay-active-1');
        });

        endTrigger.on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('overlay-active-1');
        });

        $('.body-overlay-1').on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('overlay-active-1');
        });
    };
    mobileHeaderActive();

    /*---------------------
        mobile-menu
    --------------------- */
    var $offCanvasNav = $('.mobile-menu , .category-menu-dropdown'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });


    /*--- checkout toggle function ----*/
    $('.checkout-click1').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });


    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });

    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function () {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function () {
        $('.open-toggle').slideToggle(1000);
    });

    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $('.sin-payment input:checked')
    if (checked) {
        $(checked).siblings('.payment-box').slideDown(900);
    };
    $('.sin-payment input').on('change', function () {
        $('.payment-box').slideUp(900);
        $(this).siblings('.payment-box').slideToggle(900);
    });


    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();

    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });

    /*---------------------------------------
        Product details small image slider
    -----------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-right"></i></span>',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        }
        ]
    });

    /*----------------------------------------
        Product details small image slider 2
    ------------------------------------------*/
    $('.product-dec-slider-small-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-up"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-down"></i></span>',
        responsive: [{
            breakpoint: 1365,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        }
        ]
    });


    /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.related-product-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------------------------
        Sidebar sticky active
    -------------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 767,
    });

    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function (e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function (e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });


})(jQuery);

document.addEventListener("DOMContentLoaded", function (event) {
    function OTPInput() {
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function (event) { if (event.key === "Backspace") { inputs[i].value = ''; if (i !== 0) inputs[i - 1].focus(); } else { if (i === inputs.length - 1 && inputs[i].value !== '') { return true; } else if (event.keyCode > 47 && event.keyCode < 58) { inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode > 64 && event.keyCode < 91) { inputs[i].value = String.fromCharCode(event.keyCode); if (i !== inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); }
    } OTPInput();
});

function addToCart(proId) {
    $.ajax({
        url: '/add-to-cart/' + proId,
        method: 'get',
        success: (response) => {
            if (response.status) {
                let count = $('#cart-count').html()
                count = parseInt(count) + 1
                $('#cart-count').html(count)
                
                Swal.fire({
                    position: 'top-end',
                    width: 300,
                    height: 100,
                    icon: 'success',
                    text: "Item Added to Cart",
                    showConfirmButton: false,
                    timer: 1000
                })
            } else {
                Swal.fire({
                    title: 'Please Login ',
                    text: "Please Login to Add this Item Into Your Cart",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Continue with Login'
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.href = '/viewAllVerify'
                    }
                })
            }
        }
    })
}
function changeQuantity(cartId, proId, userId, price, count,itemsize,uniquekey) {
    let totalPrice = parseInt(document.getElementById(price+uniquekey).innerHTML)
    let totalPrice2=parseInt(document.getElementById(uniquekey+price).innerHTML)
    let quantity = parseInt(document.getElementById(uniquekey).innerHTML)
    count = parseInt(count)
    priceInt = parseInt(price)
    if (count == -1 && quantity == 1) {
        Swal.fire({
            title: 'Are you sure ?',
            text: "Only One Quantity Left In Your Cart !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: '/change-product-quantity',
                    data: {
                        user: userId,
                        cart: cartId,
                        product: proId,
                        count: count,
                        quantity: quantity,
                        price: priceInt,
                        totalPrice: totalPrice,
                        size:itemsize
                   
                    },
                    
                    method: 'post',
                    success: (response) => {
                        if (response.removeProduct) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            location.reload()
                        } else {
                            document.getElementById(proId + proId).innerHTML = quantity + count //chnage mobile ver
                            document.getElementById(proId).innerHTML = quantity + count// chnage laptop ver

                            document.getElementById('total').innerHTML = response.total
                            document.getElementById('g-total').innerHTML = response.total
                            if (count > 0) {
                                document.getElementById(price + price).innerHTML = totalPrice + priceInt
                                document.getElementById(price).innerHTML = totalPrice + priceInt
                            } else if (count < 0) {
                                document.getElementById(price + price).innerHTML = totalPrice - priceInt
                                document.getElementById(price ).innerHTML = totalPrice - priceInt
                            }

                        }
                    }
                })
            }
        })
    } else {
        console.log(itemsize);
      
        $.ajax({
            url: '/change-product-quantity',
            data: {
                user: userId,
                cart: cartId,
                product: proId,
                count: count,
                quantity: quantity,
                price: price,
                totalPrice: totalPrice,   
                size:itemsize
            },
            method: 'post',
            success: (response) => {
             
                if (response.removeProduct) {
                    alert("Product Removed from Cart")
                    location.reload()
                } else {
                    
                    document.getElementById(uniquekey + uniquekey ).innerHTML = quantity + count
                    document.getElementById(uniquekey ).innerHTML = quantity + count
                    document.getElementById('total').innerHTML = response.total
                    document.getElementById('g-total').innerHTML = response.total
                    if (count > 0) {
                        document.getElementById( uniquekey + price).innerHTML = totalPrice + priceInt
                        document.getElementById(price + uniquekey).innerHTML = totalPrice + priceInt
                    } else if (count < 0) {
                        document.getElementById(uniquekey + price ).innerHTML = totalPrice - priceInt
                        document.getElementById(price + uniquekey).innerHTML = totalPrice - priceInt
                    }
                }
            }
        })
    }
}
function removeCartProduct(cartId, proId) {
    $.ajax({
        url: '/removeProduct',
        data: {
            cart: cartId,
            product: proId
        },
        method: 'post',
        success(response) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            location.reload()
        }
    })

}

function getAddress() {
    let address = document.getElementById('address')
    let addressId = address.options[address.selectedIndex].value
    $.ajax({
        url: "/getAddress",
        data: {
            addressId: addressId
        },
        method: 'get',
        success: (response) => {
            if (response.status) {
                console.log(response)
                console.log(response.Name)
                document.getElementById('Name').value = response.Name
                document.getElementById('HouseNo').value = response.HouseNo
                document.getElementById('Street').value = response.Street
                document.getElementById('TownCity').value = response.TownCity
                document.getElementById('State').value = response.State
                document.getElementById('Country').value = response.Country
                document.getElementById('PostCode').value = response.PostCode
                document.getElementById('Country').value = response.Country
                document.getElementById('PostCode').value = response.PostCode
                document.getElementById('Mobile').value = response.Mobile
            } else {
                document.getElementById('Name').value = ""
                document.getElementById('HouseNo').value = ""
                document.getElementById('Street').value = ""
                document.getElementById('TownCity').value = ""
                document.getElementById('State').value = ""
                document.getElementById('Country').value = ""
                document.getElementById('PostCode').value = ""
                document.getElementById('Country').value = ""
                document.getElementById('Mobile').value = ""
            }

        }
    })
}

//coupons apply
function applyCoupon() {
    let couponCode = document.getElementById('couponDiscount').value
    $.ajax({
        url: "/admin/getCouponDiscount/" + couponCode,
        method: 'post',
        success: (response) => {
            if (response.status) {
                let discount
                let total
                let obj = response.coupon
                let subtotal = parseInt(document.getElementById('subTotal').innerHTML)
                if (subtotal >= obj.minSpend) {
                    discount = subtotal * obj.couponDiscount / 100
                    if (discount > obj.maxAmount) {    /*((subtotal + discount) > obj.maxAmount)*/
                        discount = obj.maxAmount
                    }
                    total = (subtotal - discount)
                    Swal.fire({
                        icon: 'success',
                        title: obj.couponDescription,
                        text: obj.couponDiscount + "% up to " + obj.maxAmount + " on min Spend " + obj.minSpend,

                    })
                    document.getElementById('error').innerHTML = obj.couponDescription  //change status
                    document.getElementById('offerDetail').innerHTML = obj.couponDiscount + "% up to " + obj.maxAmount + " on min Spend " + obj.minSpend
                    document.getElementById('discount').innerHTML = discount
                    document.getElementById('couponApplied').value = discount
                    document.getElementById('total').innerHTML = total
                    document.getElementById('remove').style.display = "block"
                    document.getElementById('add').style.display = "none"

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: "Coupon not applied",
                        text: "You need to spend minimum " + obj.minSpend + " to avail this offer",
                    })

                }


            } else {
                Swal.fire({
                    icon: 'warning',
                    title: response.err,
                })
                document.getElementById('error').innerHTML = response.err
            }
        }
    })


}

function removeCoupon() {
    Swal.fire({
        icon: 'success',
        title: "Removed  ",
        text: "Coupon Removed Successfully ",
        showConfirmButton: false,
        timer: 1000
    })
    document.getElementById('couponDiscount').value = ""
    document.getElementById('error').innerHTML = ""
    document.getElementById('offerDetail').innerHTML = ""
    document.getElementById('discount').innerHTML = "Coupon Removed"
    document.getElementById('couponApplied').value = 0
    document.getElementById('total').innerHTML = parseInt(document.getElementById('subTotal').innerHTML)
    document.getElementById('remove').style.display = "none"
    document.getElementById('add').style.display = "block"
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function search() {
    let strings = document.getElementById('searchBox').value
    console.log(strings);
    $.ajax({
        url: "/getSearch",
        data: {
            searchKey: strings
        },
        method: 'get',
        success: (response) => {
            if (response.length != 0) {
                document.getElementById("drop").innerHTML = ''
                for (i = 0; i < response.length; i++) {
                    const div1 = document.getElementById("drop");
                    const aTag = document.createElement('a');
                    aTag.setAttribute('href', "/details/" + response[i]._id);
                    aTag.innerText = response[i].title;
                    div1.appendChild(aTag);
                    const bTag = document.createElement('br');
                    div1.appendChild(bTag);
                }

            } else {
                document.getElementById("drop").innerHTML = ''
 

            }
        }
    })

}
function search2() {
    let searchKey = document.getElementById('searchBox').value
    console.log(searchKey);



    $.ajax({
        url: "/viewAll",
        // data: {
        //     searchKey: searchKey
        // },
        method: 'get',
        success: (response) => {
            location.href = "/viewAll"
        }
    })

}
function searchMobile() {
    console.log("helooooooooooo");
    let strings = document.getElementById('searchBoxMobile').value
    console.log(strings);
    $.ajax({
        url: "/getSearch",
        data: {
            searchKey: strings
        },
        method: 'get',
        success: (response) => {
            if (response.length != 0) {
                console.log(response);
                document.getElementById("dropMobile").innerHTML = ''
                for (i = 0; i < response.length; i++) {
                    const div1 = document.getElementById("dropMobile");
                    const aTag = document.createElement('a');
                    aTag.setAttribute('href', "/details/" + response[i]._id);
                    aTag.innerText = response[i].title;
                    div1.appendChild(aTag);
                    const bTag = document.createElement('br');
                    div1.appendChild(bTag);
                }

            } else {
                document.getElementById("dropMobile").innerHTML = ''
 

            }
        }
    })

}

function searchSide() {
    let strings = document.getElementById('searchBoxSide').value
    console.log(strings);
    $.ajax({
        url: "/getSearch",
        data: {
            searchKey: strings
        },
        method: 'get',
        success: (response) => {
            if (response.length != 0) {
                document.getElementById("dropSide").innerHTML = ''
                for (i = 0; i < response.length; i++) {
                    const div1 = document.getElementById("dropSide");
                    const aTag = document.createElement('a');
                    aTag.setAttribute('href', "/details/" + response[i]._id);
                    aTag.innerText = response[i].title;
                    div1.appendChild(aTag);
                    const bTag = document.createElement('br');
                    div1.appendChild(bTag);
                }

            } else {
                document.getElementById("dropSide").innerHTML = ''
 

            }
        }
    })

}







