$(function(){
    $("#page-top a").click(function() {
      var position = $('html').offset().top;
      $('html').animate({scrollTop:position}, 600, 'swing');
      return false;
    });
});
