$(document).ready(function() {

	$('#fullpage').fullpage( {	
	
	sectionsColor: ['#17baef', '#f5f5f5', '#f5f5f5', '#17baef', '#f5f5f5', '#f5f5f5', '#17baef'],
				responsive: 900,
				anchors: ['stronaGlowna', 'oNas', 'zespol', 'coRobimy', 'wydarzenia', 'partnerzy','kontakt'],
				menu: '#menu',
				scrollOverflow: true

	});

    /* ======= Fixed header when scrolled ======= */
    $('#header').addClass('navbar-fixed-top');
        
	 $('div.facebook').mouseenter(function(){

			$(this).stop(true, false).animate({"right": "0"}, 400);	
	 });
	 $('div.facebook').mouseleave(function(){
			$(this).stop(true, false).animate({"right": "-462px"}, 400);
	});
	var linksdata = ['Piotr Smyk', 'Łukasz Gadomski', 'Marcin Motowidło', 'Dawid Rolla', 'Tomek Łaszkiewicz', 'Krzysiu Sobkowiak', 
		'Łukasz Łaszkiewicz', 'Marek Lis', 'Zuza Pacholczyk', 'Piotr Kałużny', 'Jacek Cząstkiewicz', 'Ty?', 'Marek Puchalski', 
		'Kasia Dębowa', 'Sylwia Robak', 'Natalia Jarczyńska', 'Dagmara Krent', 'Paweł Błach'];
	$("[id*='links']").mouseenter(function(){
		$(this).attr("title", linksdata[$(this).attr("id").substr(5)]);
	});
	$("[id*='links']").mouseleave(function(){
		$(this).attr("title", "");
	});
});
	

