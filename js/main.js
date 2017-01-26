$(document).ready(function() {



//Extension function for animateCss
$.fn.extend({
    animateCss: function(animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });




// $('window').on('scroll', function(){
// 	if (document.body.scrollTop > 1292 || document.documentElement.scrollTop > 1292) {
// 	$('#old-news-description').animateCss('slideInRight');
// 	} 
// });













});