jQuery(document).ready(function($){

$(window).scroll(function() {
var scroll = $(window).scrollTop();
if (scroll > 0) {
$(".bts-popup").addClass('is-visible');
}
});

//close popup
$('.bts-popup').on('click', function(event){
	if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
		event.preventDefault();
		$(this).removeClass('is-visible');
	}
});
//close popup when clicking the esc keyboard button
$(document).keyup(function(event){
	if(event.which=='27'){
		$('.bts-popup').removeClass('is-visible');
    }
});
});