$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>', 
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>', 
    responsive: [
      {
        breakpoint: 1029,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});