$(document).ready(function(){
	// Mobile Menu
	$('.containers').click(function(){
		$('.menu ul').slideToggle(700);

		return false
	});

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });





});
function myFunction(x) {
	x.classList.toggle("change");
  }