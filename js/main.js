$(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.nav__list-content').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });

  $(function(){
    $('.benefits-slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        slidesToShow: 1
     });
  });

  $(function(){
    $('.benefits-mob__slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        slidesToShow: 1
     });
  });







  $(function(){
    $('.recommend-slider').slick({
        arrows: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1145,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 810,
            settings: {
              slidesToShow: 1
            }
          }
        ]
     });
  });

  $(function(){
    $('.delivery-menu__slider').slick({
        arrows: true,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1145,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 810,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
     });
  });