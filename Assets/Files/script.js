$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    autoplay:true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
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


  // Testimonials
  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    dots: true,
    autoplay:true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev2"><i class="fa fa-chevron-left"></i></button>', 
    nextArrow: '<button type="button" class="slick-next2"><i class="fa fa-chevron-right"></i></button>', 
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

  // Navbar
  $('.menu-toggle').click(function() {
    $('.nav-menu').toggleClass('open');
});

$('.nav-menu a').click(function() {
    $('.nav-menu').removeClass('open'); /* Hide the menu by removing the 'open' class */
});
});
