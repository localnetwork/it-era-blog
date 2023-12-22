(($, Drupal) => {
  "use strict";

  function slider() {
    console.log("slider");
    $(".custom-slider").slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });
  }

  $(window).on("load", function () {
    slider();
  });
  $(document).ready(function () {
    slider();
  });
})(jQuery, Drupal);
