(function (S) {
	$(document).ready(function(e) {
        
   
	
	$(".navscroll").hide();
	
	$(function () {
		$(window).scroll(function (){
			
			if ($ (this).scrollTop() > 100) {
				$('.navscroll').fadeIn();
			} else {
				$('.navscroll').fadeOut();
			}
		});
		});
		});
}
(jQuery));
