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





// var showMoreDescription = function(e) {
// 	e.preventDefault();
// 	$('#chances-description-hidden').text('it calculates a "Chances Rating" from 1 to 10 of the likelihood of a customer getting food poisoning. Users can search by restaurant name, zipcode or cuisine type.')
// 	var paperfold = $('#chances-description-hidden').paperfold();
// 	$('.readMore').click(paperfold.toggle);
// }

// $('.readMore').click(showMoreDescription);





});