const navigationToggler = document.getElementById("navigationToggler");
const navigationLinks = document.getElementById("navigationLinks");

navigationToggler.addEventListener("click", () => {
  navigationToggler.classList.toggle("active");
  navigationLinks.classList.toggle("active");
});

// Slick
$(document).ready(function () {
  $(".carousel__list").slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
