'use strict'; 
$(window).on("load", function(){

    //LOADER
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })

    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }

    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 3500);


    // HOME PAGE HEIGHT
    if ($('.home').length) {
        function fullhome() {
            var hometext = $('.home')

            hometext.css({
                "height": $(window).height() + "px"
            });
        }
        fullhome();
        $(window).resize(fullhome);
    }

    // HOME TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2')],
                loop: $(this).data('loop') ? $(this).data('loop') : false ,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
                typeSpeed: 10,
            });
        });
    }
    
    // OWL CAROUSEL GENERAL JS
    if ($('.owl-carousel').length) {
        $('.owl-carousel').each(function () {
            $(this).owlCarousel({
                items: $(this).data('items') ? $(this).data('items') : 3
                , autoPlay: $(this).data('autoplay') ? $(this).data('autoplay') : 2500
                , pagination: $(this).data('pagination') ? $(this).data('pagination') : false
                , itemsDesktop: [1199, 3]
                , itemsDesktopSmall: [979, 2]
            });
        });
    }
    
    // LOGO BLACK
    $('.nav-icon').on("click", function(){
        $('body').toggleClass('full-open');
        if($('body').hasClass('full-open')){
            $(".lg").attr("src","images/logo-w.png");
        }
        else{
            $(".lg").attr("src","images/logo-b.png");            
        }
    });

    $('nav ul li a').on("click", function(){
            $('body').removeClass('full-open'); 
            $(".lg").attr("src","images/logo-b.png"); 
    });

    //NAVBAR SHOW - HIDE
    if ($('.home').length) {
        $(window).scroll(function() {				
        var scroll = $(window).scrollTop();
        var homeheight = $(".home").height();			

        if (scroll > homeheight - 1 ) {	
                $("header").slideDown(100);
            } else {
            if(!$('body').hasClass('full-open')){
                $("header").slideUp(100);
            }
            }
         }); 
    }

    // PORTFOLIO ISOTOPE
	if ($('.isotope_items').length) {

	     var $container = $('.isotope_items');
	     $container.isotope();

	    $('.portfolio_filter ul li').on("click", function(){
	        $(".portfolio_filter ul li").removeClass("select-cat");
	        $(this).addClass("select-cat");				 
	        var selector = $(this).attr('data-filter');
	        $(".isotope_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	    });
	        return false;
	    });  
	    
	}

	// LIGHTBOX VIDEO
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	// MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });


    //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        });
            
        $(this).addClass('active');
      
        var target = this.hash,
        menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });
        
    function onScroll(event){
        if ($('#home').length) {     
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
            });
        }              
    }    
    
}); // document load end 


