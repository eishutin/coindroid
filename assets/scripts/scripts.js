jQuery(function ($) {
    $(".img-parallax-top").paroller({
        factor: -0.3,
        factorLg: -0.3,
        factorMd: -0.3,
        factorSm: -0.3,
        factorXs: -0.3,
        type: 'background',
        direction: 'vertical',
        //transition: 'transform 0.2s ease-in'
    });
    $(".img-parallax-bottom").paroller({
        factor: -0.9,
        factorLg: -0.8,
        type: 'background',
        direction: 'vertical',
        //transition: 'transform 0.2s ease-in'
    });

    $('.slider-perform').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinity: true,
        arrows: true,
        prevArrow: '<div class="arrow arrow-prev icon icon-arrow-left"></div>',
        nextArrow: '<div class="arrow arrow-next icon icon-arrow-right"></div>',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider-phone').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinity: true,
        arrows: true,
        prevArrow: '<div class="arrow arrow-prev icon icon-arrow-left"></div>',
        nextArrow: '<div class="arrow arrow-next icon icon-arrow-right"></div>',
        adaptiveHeight: true
    });

    $('.side-nav .sub-item > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');
    });

    $('.block-works .item-work').on('click', function (e) {
        e.preventDefault();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            return false;
        }

        $('.block-works .item-work').removeClass('open');
        $(this).addClass('open');
    });
    $('.main-nav  li.dropdown a').on('click', function (e) {
        e.preventDefault();
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
            return false;
        }

        $('.main-nav li.dropdown').removeClass('open');
        $(this).parent().addClass('open');
    });
    $(document).on('click', function (event) {
        if ($(event.target).closest('.block-works .item-work').length == 0 ) {
            $('.block-works .item-work').removeClass('open');
        }
        if ($(event.target).closest('.main-nav  li.dropdown').length == 0 ) {
            $('.main-nav  li.dropdown').removeClass('open');
        }
        if ($(event.target).closest('.block-wallet .mobile-select').length == 0 ) {
            $('.block-wallet .mobile-select').removeClass('open');
        }
        if ($(event.target).closest('.select-lang').length == 0 ) {
            $('.select-lang').removeClass('open');
        }
    });
    // $('.block-perform .slider-perform .slide').on('click', function (e) {
    //     e.preventDefault();

        // if($(this).hasClass('active')){
        //     $('.perform-info').removeClass('show');
        //     $(this).removeClass('active');
        //     return false;
        // }a
        //
        // $('.block-perform .slider-perform .slide').removeClass('active');
        // $(this).addClass('active');
        // $('.perform-info').addClass('show');

       /* if($('.perform-info').hasClass('show')){
            $(this).removeClass('show');
            return false;
        }

        $('.block-works .item-work').removeClass('show');
        $(this).addClass('open');
        $('.perform-info').addClass('show');*/
    // });
    $('header .toggle-nav').on('click', function (e) {
        e.preventDefault();
        $('.main-nav').addClass('open');
        $('body').addClass('no-scroll');
    });
    $('.main-nav .icon-close').on('click', function (e) {
        e.preventDefault();
        $('.main-nav').removeClass('open');
        $('body').removeClass('no-scroll');
    });


    $('.block-wallet .mobile-select .value').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');
    });

    $(window).scroll(function () {
        let header = $('header'),
            height = $('.block-perform').offset().top;
        console.log(height);

        if ($(this).scrollTop() > height) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    $('.select-lang .current-lang').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');
    });
    $('.select-lang .icon-close').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.select-lang').removeClass('open');
    });
    $('.select-lang .list-lang').on('click', 'li>a', function (e) {
        e.preventDefault();
        let select = $(this).closest('.select-lang');
        console.log(111);
        $("<li><a href='#'>" + $('.lang', select).val() + "</a></li>").appendTo($(this).closest('.list-lang ul'));
        $('.lang', select).val($(this).text());
        $(this).parent().remove();
    });

    $('.block-wallet .mobile-select a').on('click', function (e) {
        e.preventDefault();
        let select = $(this).closest('.mobile-select');

        $('.block-wallet .mobile-select li').removeClass('active');
        $(this).parent().addClass('active');
        $('.value', select).text($(this).text());
        select.removeClass('open');
    });

    $('header .btn-login').on('click', function (e) {
        e.preventDefault();
        $('header .user').removeClass('hide');
        $(this).addClass('hide');
    });

    $(window).on('resize load', function(){
        if($(window).width() > 600){
            //Закрепление при скроллинге
            $(".block-wallet .fixed-left").stick_in_parent({
                parent: '.block-wallet .wrap',
                offset_top: 100,
                recalc_every: 1
            });
            $(".block-wallet .fixed-right").stick_in_parent({
                parent: '.block-wallet .wrap',
                offset_top: 100,
                recalc_every: 1
            });
        }
    });
    $('.image').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $('[data-fancybox]').fancybox({
        beforeShow: function(){
            $("body").addClass('no-scroll');
        },
        afterClose: function () {
            $("body").removeClass('no-scroll');
        }
    });
});
