$(document).ready( () => {

    //MENU
    $(".navbar__menu-btn").on('click' , function() {
        $(".navbar__links").toggleClass("active");
        $(this).find('i').toggleClass("fa-solid fa-bars-staggered");
        $(this).find('i').toggleClass("fa-solid fa-xmark");
    });

    // CAROUSEL    
   const slickOptions = {
          autoplay:true,
          dots: false,
          prevArrow:
          '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
          nextArrow:
          '<button type="button" class="slick-next slider__next-arrow">Next</button>'
    }

    $('.slider').slick(slickOptions);
});