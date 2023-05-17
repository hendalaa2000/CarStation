//intialization plugins
$(document).ready(function() {
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //smooth_scroll
    smoothScroll.init();
    var amountScrolled = 300;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('#scroll-btn').fadeIn('slow');
        } else {
            $('#scroll-btn').fadeOut('slow');
        }
    });
    $('#scroll-btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
})
var swiper = new Swiper('.swiper-container', {
    speed: 1200,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        direction: 'vertical',
        el: '.swiper-pagination',
        clickable: true,
        type: ''
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
$(function() {
    $('.selectpicker').selectpicker();
});

function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("29 April 2021 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $(".days").html(days + "<span>ساعة</span>");
    $(".hours").html(hours + "<span>دقيقة</span>");
    $(".minutes").html(minutes + "<span>دقيقة</span>");
    $(".seconds").html(seconds + "<span>ثانية</span>");

}
setInterval(function() { makeTimer(); }, 1000);
//animation icon toggler of navbar
$(`.navbar-toggler`).click(function() {
    $(`.navbar-toggler`).toggleClass(`active`);
    $(`.menu-outer`).toggleClass(`is-active`);
});
$(".search_icon").on("click", function() {
    $(".searching").fadeIn(500);
})
$(".searching .close").on("click", function() {
    $(".searching").fadeOut(500);
})

// search effect 
$(".search_icon").on("click", function() {
    $(".searching").fadeIn(500);
})
$(".searching .close").on("click", function() {
    $(".searching").fadeOut(500);
})


// Scroll from header to secound section
$('header .swiper-container .swiper-wrapper .swiper-slide .car-info .down').on("click", function() {
    $('body,html').animate({
        scrollTop: $('.services').offset().top //secound section
    }, 1000);
});
// start swiper gallery
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
var swiper = new Swiper('.rating-swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    // loop: true,
    speed: 800,
    autoplay: true,
    pagination: {
        el: '.bullet',
        clickable: true,
    },
});
// var swiper = new Swiper('.comments-swiper', {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//         el: '.bullet2',
//         clickable: true,
//     },
// });
var myApp = angular.module("myApp", []);
myApp.controller("RegisterCtrl", function($scope) {

});
$('#myTab a').on('click', function(event) {
    event.preventDefault()
    $(this).tab('show')
})
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

$(document).ready(function() {

    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });
});

