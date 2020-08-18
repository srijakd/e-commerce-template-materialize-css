$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    height : 300, // default - height : 400
  });


$(document).ready(function(){
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.tabs').tabs({
      swipeable:true
    });
    $('.scrollspy').scrollSpy();
});
