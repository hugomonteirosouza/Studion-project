$(document).ready( () => {
    
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