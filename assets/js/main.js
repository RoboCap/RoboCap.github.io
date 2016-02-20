$(document).ready(function() {

	$('#fullpage').fullpage( {	
	
	sectionsColor: ['#17baef', '#f5f5f5', '#f5f5f5', '#17baef', '#f5f5f5', '#fffff', '#17baef'],
				responsive: 900,
				anchors: ['stronaGlowna', 'oNas', 'zespol', 'coRobimy', 'wydarzenia', 'partnerzy','kontakt'],
				menu: '#menu',
				autoScrolling: false,
        fitToSection: false,

	});

    /* ======= Fixed header when scrolled ======= */
    $('#header').addClass('navbar-fixed-top');
        
	$('div.facebook').mouseenter(function(){
		$(this).stop(true, false).animate({"left": "0"}, 400);	
	});
	$('div.facebook').mouseleave(function(){
		$(this).stop(true, false).animate({"left": "-462px"}, 400);
	});
});
	

