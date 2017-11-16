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

$(document).ready(function() {
	$('#burger').on( "click", function() {
		$('#burger').toggleClass('hamburger_is_active');
		$("#myNav").css("width", "100%");
	});
});
$(document).ready(function() {
	$("#myNav:not(a)").on( "click", function() {
		$("#myNav").css("width", "0%");
		$('#burger').toggleClass('hamburger_is_active');
	});
});

$(document).ready(function() {
	$('.call_back_button').on( "click", function() {
		$("#myNav_1").css("width", "100%");
	});
});

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".overlay-content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$("#myNav_1").css("width", "0%"); // скрываем его
		}
	});
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
			$(this).parent().find("ul").slideUp("fast");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");

		} else {

			$(this).next("ul").slideToggle("fast");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("fast");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
$(document).ready(function(){

	$(".wr_service_select a").click(function(){

		if ($(this).parent().children().hasClass("in_active")){

			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");
		};	

		if ($(this).parent().children().hasClass("active")){

			$(this).parent().find("a").removeClass("active");
			$(this).parent().find("ul").slideUp("fast");
			$(this).parent().find("a").removeClass("in_active");
			$(this).parent().siblings().find("a").removeClass("in_active");
			$(this).parent().siblings().children().find("a").removeClass("in_active");

		} else {

			$(this).next("ul").slideToggle("fast");
			$(this).toggleClass("active");
			$(this).parent().siblings().find("ul").slideUp("fast");
			$(this).parent().siblings().find("a").removeClass("active");
			$(this).parent().siblings().find("a").addClass("in_active");

		};



	});

});
