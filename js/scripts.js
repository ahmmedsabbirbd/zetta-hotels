(function ($) {

	/*** BrowserDetect */
	var BrowserDetect = {
	    init: function () {
	        this.browser = this.searchString(this.dataBrowser) || "Other";
	        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
	    },
	    searchString: function (data) {
	        for (var i = 0; i < data.length; i++) {
	            var dataString = data[i].string;
	            this.versionSearchString = data[i].subString;

	            if (dataString.indexOf(data[i].subString) !== -1) {
	                return data[i].identity;
	            }
	        }
	    },
	    searchVersion: function (dataString) {
	        var index = dataString.indexOf(this.versionSearchString);
	        if (index === -1) {
	            return;
	        }

	        var rv = dataString.indexOf("rv:");
	        if (this.versionSearchString === "Trident" && rv !== -1) {
	            return parseFloat(dataString.substring(rv + 3));
	        } else {
	            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	        }
	    },

	    dataBrowser: [
	        {string: navigator.userAgent, subString: "Edge", identity: "MSEdge"},
	        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
	        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
	        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
	        {string: navigator.userAgent, subString: "Opera", identity: "Opera"},  
	        {string: navigator.userAgent, subString: "OPR", identity: "Opera"},  

	        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, 
	        {string: navigator.userAgent, subString: "Safari", identity: "Safari"}       
	    ]
	};

	BrowserDetect.init();
	document.body.classList.add( BrowserDetect.browser );

	/*** Get OS Selector */
	var os = ['iphone', 'ipad', 'windows', 'mac', 'linux'];
	var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
	if (match) {
	    $('body').addClass(match[0]);
	};
	 
	/*** Sticky header */
	$(window).scroll(function(){
		if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
			$(".header").addClass("stop");
		} else {
			$(".header").removeClass("stop");
		}
	});

	/*** Sticky header */
	const body = document.body;
	const scrollUp = "scroll-up";
	const scrollDown = "scroll-down";
	let lastScroll = 100;

	window.addEventListener("scroll", () => {
	  	const currentScroll = window.pageYOffset;
	  	if (currentScroll <= 0) 
	  	{
	    	body.classList.remove(scrollUp);
	    	return;
	  	}

	  	if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) 
	  	{
	    	// down
	    	body.classList.remove(scrollUp);
	    	body.classList.add(scrollDown);
	  	} 
	  	else if ( currentScroll < lastScroll && body.classList.contains(scrollDown) ) 
	  	{
	    	// up
	    	body.classList.remove(scrollDown);
	    	body.classList.add(scrollUp);
	  	}

	  	lastScroll = currentScroll;
	});

	/*** Navbar Menu */
    $('.navbar-toggle').sidr({
        name: 'sidr-main',
        side: 'right',
        source: '#sidr',
        displace: false,
        renaming: false,
    });

    $('.navbar-toggle.in').on('click', function(){
        $.sidr('close', 'sidr-main');
    });

    $(".sidr .dropdown span.dropdown-toggle").dropdown('dispose');

    $(".sidr .dropdown span.dropdown-toggle").click(function(e){
        e.preventDefault();
        $(this).parents('.dropdown').toggleClass("show");
        $(this).parents('.dropdown').children(".dropdown-menu").slideToggle();
    });

    /*** lastNobullet */
	function lastNobullet() {
	    var lastElement = false;
	    $(".lastNobullet li").each(function() {
	        if (lastElement && lastElement.offset().top != $(this).offset().top) {
	            $(lastElement).addClass("nobullet");
	        } else {
	            $(lastElement).removeClass("nobullet");
	        }
	        lastElement = $(this);
	    }).last().addClass("nobullet");
	};
	lastNobullet();

	$(window).resize(function(){
	    lastNobullet();
	});

	 /*** ScrollDown */
	$('.scrollDown').click(function() {
	    var target = $('#primary');
	    var space = $(this).data('space');

	    if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - space
	        }, 1e3, "easeInOutExpo");
	    }
	});

	/*** Smooth scroll */
    $('.smoothScroll, .smoothScroll a').click(function() {
       	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           	var target = $(this.hash);
           	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           	if (target.length) {
               	$('html,body').animate({
                   scrollTop: target.offset().top - 40
               	}, 1e3, "easeInOutExpo");

               return false;
           }
       	}
    });

    /*** Testimonials Slider */
	var $pageHeaderslick;

	$pageHeaderslick = $('.page-header-slider');

	$pageHeaderslick.slick({
		autoplay: true,
	  	speed: 250,
	  	dots: true,
	  	arrows: true,
	  	infinite: true, 
	  	slidesToShow: 1, 
	  	prevArrow: $('.page-header_slider_control .prev'),
	  	nextArrow: $('.page-header_slider_control .next'),
	}); 


    /*** Testimonials Slider */
	var $testimonialsslick;

	$testimonialsslick = $('.testimonials-slider');

	$testimonialsslick.slick({
		autoplay: true,
	  	speed: 250,
	  	dots: true,
	  	arrows: true,
	  	infinite: true, 
	  	slidesToShow: 1, 
	  	prevArrow: $('.testimonial_slider_control .prev'),
	  	nextArrow: $('.testimonial_slider_control .next'),
	}); 

    /*** Bring Slider */
	var $bringslick;

	$bringslick = $('.bring-slider');

	$bringslick.slick({
		autoplay: true,
	  	speed: 300,
	  	dots: false,
	  	arrows: true,
	  	infinite: true, 
	  	slidesToShow: 4, 
	  	adaptiveHeight: true,  
	  	responsive: [
		    {
		      	breakpoint: 1367,
		      	settings: {
		        	slidesToShow: 3 
		      	}
		    },
		    {
		      	breakpoint: 992,
		      	settings: {
		        	slidesToShow: 2
		      	}
		    },
		    {
		      	breakpoint: 768,
		      	settings: {
		        	slidesToShow: 1
		      	}
		    }
	  	]
	}); 

    /*** Gallery Slider */
	var $galleryslick;

	$galleryslick = $('.gallery-slider');

	$galleryslick.slick({
		autoplay: true,
	  	speed: 200,
	  	dots: false,
	  	arrows: true,
	  	infinite: true, 
	  	slidesToShow: 4, 
	  	// centerMode: true,
	  	// centerPadding: '0px 0px 0px', 
	  	responsive: [
		    {
		      	breakpoint: 1367,
		      	settings: {
		        	slidesToShow: 3 
		      	}
		    },
		    {
		      	breakpoint: 992,
		      	settings: {
		        	slidesToShow: 2
		      	}
		    },
		    {
		      	breakpoint: 768,
		      	settings: {
		        	slidesToShow: 1
		      	}
		    }
	  	]
	}); 

    /*** Read more js */
	function readMore() {

		$('.read-more').readmore({
			speed: 500,
			collapsedHeight: 203,
			moreLink: '<a href="#" class="read-more">Keep Reading</a>',
	        lessLink: '<a href="#" class="read-more">Less Reading</a>',
		});
	}
	readMore(); 
	
	/*** Rellax */
	var rellax = new Rellax('.rellax');
	var _parallax = $(".parallax-mobile"),
		_speed = 0.6;

	window.onscroll = function(){
	    [].slice.call(_parallax).forEach(function(el,i){
	      var rect = el.getBoundingClientRect();
	      var windowYOffset = window.pageYOffset,
	          elBackgrounPos = "0 " + (windowYOffset * _speed) + "px";
	      
	      el.style.top = elBackgrounPos;

	    });
	};

	/** parallax js*/
	var _parallax = $(".parallax"),
      _speed = -0.2;

	window.onscroll = function(){
	    [].slice.call(_parallax).forEach(function(el,i){
	      var rect = el.getBoundingClientRect();
	      var windowYOffset = window.pageYOffset,
	          elBackgrounPos = "0 " + (windowYOffset * _speed) + "px";
	      
	      el.style.backgroundPosition = elBackgrounPos;

	    });
	};

    /*** Image to SVG */
	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');
	
	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');
	
	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }
	
	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');
	        
	        // Check if the viewport is set, else we gonna set it if we can.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }
	
	        // Replace image with new SVG
	        $img.replaceWith($svg);
	
	    }, 'xml');
	});

	$(document).on("scroll", function(){

		var pixels = $(document).scrollTop();
		// console.log(pixels);
		var pageHeight = $(document).height() - $(window).height();
		// console.log($(document).height());
		// console.log($(window).height());
		// console.log(pageHeight);
		var progress = 100 * pixels / pageHeight;

		$("div.progress").css("width", progress + "%");

		// console.log(progress);

		// // for(color=1; color<10; color++) {
		// // 	console.log(color);
		// // }

		// color = ['#000', '#fff'];
		// // console.log(color[0]);

		// colorCounter = 1;
		// var currentColor = color[colorCounter];

		// console.log(currentColor);

		// // $("div.progress").css("background-color", color[0]);
	}) 
    
}(jQuery));

/*** Google map */
var mapId = document.getElementById("map");

if (mapId) {

	function initMap() {
		var location = { lat: 24.249972, lng: 89.022778 };

		var mapOptions = { 
	        zoom: 15,
	        center: location,
	        scrollwheel: true,
	        disableDefaultUI: true,

	        styles: [ 
	        {elementType: 'geometry', stylers: [{color: '#F6F6F6'}]},
	        {elementType: 'labels.text.stroke', stylers: [{color: '#F6F6F6'}]},
	        {elementType: 'labels.text.fill', stylers: [{color: '#F6F6F6'}]},
	        {
	          featureType: 'administrative.locality',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#000000'}]
	        },
	        {
	          featureType: 'poi',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#000000'}]
	        },
	        {
	          featureType: 'poi.park',
	          elementType: 'geometry',
	          stylers: [{color: '#000000'}]
	        },
	        {
	          featureType: 'poi.park',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road',
	          elementType: 'geometry',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road',
	          elementType: 'geometry.stroke',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#606060'}]
	        },
	        {
	          featureType: 'road.highway',
	          elementType: 'geometry',
	          stylers: [{color: '#B3B3B3'}]
	        },
	        {
	          featureType: 'road.highway',
	          elementType: 'geometry.stroke',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'road.highway',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#CECECE'}]
	        },
	        {
	          featureType: 'transit',
	          elementType: 'geometry',
	          stylers: [{color: '#FFFFFF'}]
	        },
	        {
	          featureType: 'transit.station',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#404040'}]
	        },
	        {
	          featureType: 'water',
	          elementType: 'geometry',
	          stylers: [{color: '#A0A09A'}]
	        },
	        {
	          featureType: 'water',
	          elementType: 'labels.text.fill',
	          stylers: [{color: '#5F5F5F'}]
	        },
	        {
	          featureType: 'water',
	          elementType: 'labels.text.stroke',
	          stylers: [{color: '#A0A09A'}]
	        }
	      ]
	    }; 


		var map = new google.maps.Map(mapId, mapOptions) ;

		var marker = new google.maps.Marker({
			position: location,
			map: map
		});
	}
}