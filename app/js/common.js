$(document).ready(function() {
	$('.metro_select_a').on( "click", function() {
		$('.metro_select_a').not(this).removeClass('is_active');
		$(this).addClass('is_active');
	});
});
