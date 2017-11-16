$(document).ready(function() {
	$('.metro_select_a').on( "click", function() {
		$('.metro_select_a').not(this).removeClass('is_active');
		$(this).addClass('is_active');
	});
});

$(document).ready(function() {
	var pageHref = window.location.pathname;

	$('.top_menu_nav_anim').each(function(){
		var linkHref = $(this).attr('href');
		if (pageHref == linkHref){
			$(this).addClass('top_menu_nav_anim_is_active');
			$('.top_menu_nav_anim').not(this).removeClass('top_menu_nav_anim_is_active');
		}
	})
});

$(document).ready(function() {
	$('.metro_select_a').on( "click", function() {
		var a = $(this).text();
		console.log(a);


		if(a == 'ПРЕОБРАЖЕНСКАЯ ПЛОЩАДЬ'){
			$('#salon_1').show();
			$('.ssi').not('#salon_1').hide();
		}
		else
		if(a == 'КАШИРСКАЯ'){
			$('#salon_2').show();
			$('.ssi').not('#salon_2').hide();
		}
		else
		if(a == 'КРАСНЫЕ ВОРОТА'){
			$('#salon_3').show();
			$('.ssi').not('#salon_3').hide();
		}
		else
		if(a == 'ТАГАНСКАЯ'){
			$('#salon_4').show();
			$('.ssi').not('#salon_4').hide();
		}
		else
		if(a == 'РАМЕНКИ'){
			$('#salon_5').show();
			$('.ssi').not('#salon_5').hide();
		}
		else
		if(a == 'УНИВЕРСИТЕТ'){
			$('#salon_6').show();
			$('.ssi').not('#salon_6').hide();
		}
		else
		if(a == 'ПРОСПЕКТ ВЕРНАДСКОГО'){
			$('#salon_7').show();
			$('.ssi').not('#salon_7').hide();
		}
		else
		if(a == 'ЭЛЕКТРОЗАВОДСКАЯ'){
			$('#salon_8').show();
			$('.ssi').not('#salon_8').hide();
		}
	})
});




$(document).ready(function(){

	$(".wr_price_select a").click(function(){

		if ($(this).parent().children().hasClass("in_active")){

			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
		};	

		if ($(this).parent().children().hasClass("active")){

			$(this).parent().find("a").removeClass("active");
			$(this).parent().find("ul").slideUp("10");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
			
		} else {

			$(this).next("ul").slideToggle("10");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("10");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
