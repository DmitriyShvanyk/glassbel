(function($){
	
	"use strict";			
		
	$('.b-projects-list-item').on('click', function(e){
		e.preventDefault();
		$('.b-projects-list-item-current').removeClass('b-projects-list-item-current');
		$(this).addClass('b-projects-list-item-current');
	});
	
	$('.b-projects-list-item-facades').on('click', function(e){
		e.preventDefault();			
		$('.b-project').parent('[class*=col-]').fadeOut();
		$('.b-project-fasades').parent('[class*=col-]').fadeIn();				
	});
	$('.b-projects-list-item-roof').on('click', function(e){
		e.preventDefault();		
		$('.b-project').parent('[class*=col-]').fadeOut();
		$('.b-project-roof').parent('[class*=col-]').fadeIn();		
	});
	$('.b-projects-list-item-residential').on('click', function(e){
		e.preventDefault();		
		$('.b-project').parent('[class*=col-]').fadeOut();
		$('.b-project-residential').parent('[class*=col-]').fadeIn();		
	});
	$('.b-projects-list-item-sports').on('click', function(e){
		e.preventDefault();		
		$('.b-project').parent('[class*=col-]').fadeOut();
		$('.b-project-sports').parent('[class*=col-]').fadeIn();		
	});	
	
})(window.jQuery);