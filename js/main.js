;(function($) {
	"use strict";
	$('.ba-menu-tab').on('click', function(e){
		e.preventDefault();
			$('.ba-menu-tab').removeClass('active');
			$(this).addClass('active');

			var name = $(this).find('a').attr('href');

			$('.ba-game-tab').removeClass('active');
			$(name).addClass('active');
		});
})(jQuery);

