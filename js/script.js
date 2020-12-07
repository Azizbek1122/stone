$(document).ready(function () {

    // SLIDER HEIGHT //

    headerHeight = $(window).height() - $('.nav').innerHeight();
    $('.header').css('height', headerHeight);
    $('.slider__item').css('height', headerHeight);

    // SLIDER HEIGHT //


    // BURGER//

    $('.nav__burger').click(function () {
        if (!$('.nav__menu').hasClass('active-menu')) {
            $('.nav__menu').addClass('active-menu').slideDown();
            $('.fa-bars').hide();
            $('.fa-close').show();

        } else {
            $('.nav__menu').removeClass('active-menu').slideUp();
            $('.fa-close').hide();
            $('.fa-bars').show();
        }
    })

    if ($('.nav__burger').css('display') == 'block') {
        $(window).scroll(function () {
            $('.nav__menu').removeClass('active-menu').slideUp();
            $('.fa-close').hide();
            $('.fa-bars').show();
        })
    }
    // BURGER //


    if ($(window).width() <= 767) {
        $('.nav__container').removeClass('container');
    }
    if ($(window).width() <= 320) {
        $('.nav__container').removeClass('container');
    }

    // SECTION SLIDE //

    $('.nav__menu_link').click(function (e) {
        e.preventDefault();
        $('.nav__menu_link').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, );
    })
    $('.slider__item_link').click(function (e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, );
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.product').offset().top - 72 && $(this).scrollTop() <= $('.product').offset().top + $('.product').innerHeight()) {
            $('.nav__menu').css('background', '#fff')
        } 
        else if ($(window).scrollTop() >= $('.quality').offset().top - 72 && $(this).scrollTop() <= $('.quality').offset().top + $('.quality').innerHeight()) {
            $('.nav__menu').css('background', '#fff')
        }
        else {
            $('.nav__menu').css('background', '#f5f5f5')
        }
    })

    // SECTION SLIDE //

    $('.materials__box_link').click(function (e) {
        e.preventDefault();
        $this = $(this).parent().parent().next();
        $this.fadeIn(500).css('display', 'flex');
    })


    // FIXED MENU // 

    var header = $('.header');
    var nav = $('.nav__menu');
    var flag = true;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= header.innerHeight() - nav.innerHeight() && flag == true) {
            nav.addClass('fixed-top').css('opacity', 0).animate({
                opacity: 1
            }, )
            flag = false;
        } else if ($(this).scrollTop() <= header.innerHeight() - nav.innerHeight() && flag == false) {
            nav.animate({
                opacity: 0
            }, 10, function () {
                nav.removeClass('fixed-top').css('opacity', 1)
            })
            flag = true;
        }
    })

    // FIXED MENU //


    // TOP BUTTON //

    $('.top').click(function () {
        $('html').animate({
            scrollTop: 0,
        }, 1000)
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.materials').offset().top) {
            $('.top').fadeIn()
        } else {
            $('.top').fadeOut()
        }
    })

    // TOP BUTTON //

    $('.box__back').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut(500);
    })
    $('.box__call').click(function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut(500);
        $('html').animate({
            scrollTop: $('.footer').offset().top,
        }, 500);

    })

    $(window).scroll(function () {
        var scroll = $(this).scrollTop()
        $('.nav__menu_link').each(function () {
            if (scroll >= $($(this).attr('href')).offset().top) {
                $('.nav__menu_link').removeClass('active');
                $(this).addClass('active');
            }
        })
    })



    var text = document.querySelector('.slider__item_title');
    var str = text.innerHTML;
    text.innerHTML = '';
    var count = 0;
    var timer;

    function print(params) {
        text.innerHTML += str.charAt(count);
        count++;
        if (str.length <= count) {
            clearInterval(timer);
        }
    }
    timer = setInterval(print, 30);








});