$('.owl-carousel').owlCarousel({
    dots: false,
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4500,
    autoplayHoverPause:true,
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
})