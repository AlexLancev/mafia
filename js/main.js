$(function () {

  $('.benefits-slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1
  });

  $('.benefits-mob__slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1
  });

  $('.recommend-slider').slick({
    arrows: true,
    slidesToShow: 3,
    responsive: [{
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

  $('.delivery-menu__slider').slick({
    arrows: true,
    slidesToShow: 4,
    responsive: [{
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




const headerBody = document.querySelector('.header__content');
const headerColumn = document.querySelector('.header-column');
const heightBody = headerBody.offsetHeight;

headerColumn.style.top = heightBody + 'px';
