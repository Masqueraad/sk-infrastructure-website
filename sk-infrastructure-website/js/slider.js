$(".our-principes-block__slider").slick({
  dots: true,
  arrows: false,
  adaptiveHeight: true,
});
$(".btn-next").click(function (e) {
  $(".our-principes-block__slider").slick("slickNext");
});
$(".btn-prev").click(function (e) {
  $(".our-principes-block__slider").slick("slickPrev");
});
