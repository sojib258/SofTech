// For Search Bar 
const search_button = document.querySelector(".menu__search");
const search_icon = document.querySelector(".menu__searchIcon")
    search_icon.addEventListener("click", () => {
    search_button.classList.toggle("active");
})

// Add Sticky on Menu
window.addEventListener("scroll",function(){
    var menu = document.querySelector(".menu");
    menu.classList.toggle("sticky", window.scrollY > 230);
});


$(document).ready(function () {
    // For Brand Area Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // For Brands Bx Slider
    $('.bxslider').bxSlider({
        auto: false,
        speed: 1200,
        pause: 10000,
        pager: true,
        touchEnabled: false
    });
});


// Counter Up Jquery Plugin
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});






