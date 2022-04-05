$(function(){
  $('#page-top').click(function(){
    var speed = 500;
    var href= $('a[href^="#"]').attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});