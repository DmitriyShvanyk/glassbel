;(function(){
	
	"use strict";	
		
	/*-------------------------------------------------*/
    /* =  load fonts
    /*-------------------------------------------------*/
	
	function loadFonts(linkHref){
		
		var head = document.querySelector('head');
		var link = document.createElement('link');
			link.href = linkHref;
			link.rel = 'stylesheet';
			
			head.appendChild(link);
		
	}
	loadFonts('https://fonts.googleapis.com/css?family=Play:400,700|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=cyrillic,cyrillic-ext,greek,latin-ext');
	
	
	
	/*-------------------------------------------------*/
    /* =  nav menu
    /*-------------------------------------------------*/
	
	function openMenu(){
		
		var btnMenu = document.querySelector('#btn-menu');
		var nav = document.querySelector('.b-nav');
		
		btnMenu.addEventListener('click', function(e){
			e.preventDefault();
			
			nav.classList.toggle('b-nav-open');
		})
		
	}
	openMenu();
	
	
	
	/*-------------------------------------------------*/
    /* =  scroll-pane
    /*-------------------------------------------------*/
	$('.scroll-pane').jScrollPane();
	
	
	/*-------------------------------------------------*/
    /* =  tab-products
    /*-------------------------------------------------*/
	
	$('.b-tab-products-head').on('click', function(e){		
		e.preventDefault();					
		
		$('.b-tab-products-head-current').removeClass('b-tab-products-head-current');			
				
		$(this).toggleClass('b-tab-products-head-current');

		$('.bg-section-inside-page-products').removeClass('bg-section-border');
				
		if($(this).next('.b-tab-products-content').is(":hidden")){			
			$(".b-tab-products-content").slideUp('slow', function(){
				$('.b-tab-products-section').removeClass('b-tab-products-section-current');				
			});				
		}     
		else{			
			$(this).toggleClass('b-tab-products-head-current');							
		}
		
		$(this).next('.b-tab-products-content').slideToggle('slow', function(){					
			
			if($('.b-tab-products-head').hasClass('b-tab-products-head-current')){					
				$(this).parents('.b-tab-products-section').addClass('b-tab-products-section-current');
			}
			else{						
				$(this).parents('.b-tab-products-section').removeClass('b-tab-products-section-current');
				$('.bg-section-inside-page-products').removeClass('bg-section-border');
			}	
			
		});   	
			
	});
	
	$('.b-tab-products-head').eq(0).on('click', function(e){		
		e.preventDefault();	
		$('.bg-section-inside-page-products').addClass('bg-section-border');	
	});	
	
	
	/*-------------------------------------------------*/
    /* =  scroll
    /*-------------------------------------------------*/	
	
	$('a[href=#b-section-1]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - -1
		}, 500);
		e.preventDefault();
	});	
	
	$('a[href=#up]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 500);
        e.preventDefault();
    });	
	
})();