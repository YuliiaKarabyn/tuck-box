jQuery(function($){
    $('.case_carousel').slick({
        infinite: true,
        fade: true,
        dots: true,
        prevArrow: $('.case_carousel_prev_arrow'),
        nextArrow: $('.case_carousel_next_arrow'),
        slidesToShow: 1,
        slidesToScroll: 1
    });            
})

// Change Image
$('.paper-chair-items').on('click',  function() {
    $('#mainImage').attr('src', this.src);
    return false;
});

