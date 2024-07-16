// **..product-single-accordion js start..**
$(document).ready(function(){
  $('.single-product-accordion-item-title').on('click', function(){
      $(this).next().slideToggle();
      $(this).parent().toggleClass('active');
  });
})
// **..product-single-accordion js end..**

// **..product-single-slider js start..**
var swiper = new Swiper(".single-product-swiper", {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".single-product-swiper-2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
// **..product-single-slider js start..**

