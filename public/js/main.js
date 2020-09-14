$(document).scroll(function(){
  $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});

console.log('connected');
