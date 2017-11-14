$(document).ready(function() {
	$('.metro_select_a').on( "click", function() {
		$('.metro_select_a').not(this).removeClass('is_active');
		$(this).addClass('is_active');
	});
});

$(document).ready(function() {
	var pageHref = window.location.pathname;
	console.log(pageHref)

	$('.top_menu_nav_anim').each(function(){
		var linkHref = $(this).attr('href');
		console.log(linkHref)
		if (pageHref == linkHref){
			$(this).addClass('top_menu_nav_anim_is_active');
			$('.top_menu_nav_anim').not(this).removeClass('top_menu_nav_anim_is_active');
		}
	})
});
