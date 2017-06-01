$(document).ready(function () {

    var newEventsLoaded = false;

    $('#fullpage').fullpage({
            sectionsColor: ['#17baef', '#f5f5f5', '#f5f5f5', '#17baef', '#f5f5f5', '#fffff', '#17baef'],
            responsive: 900,
            anchors: ['stronaGlowna', 'oNas', 'zespol', 'coRobimy', 'wydarzenia', 'partnerzy', 'kontakt'],
            menu: '#menu',
            autoScrolling: false,
            fitToSection: false,
            afterLoad: function(anchorLink){
                if(anchorLink == 'wydarzenia') {
                    if (!newEventsLoaded) {
                        $.ajax({
                            url: "data/wydarzenia.json"
                        })
                        .success(function (response) {
                            $('#wydarzenia-nowe').innerHTML = '';
                            $.each(response, function(index, wydarzenie) {
                                wydarzenie.id = 'wydarzenie' + index;

                                $('#wydarzenia-nowe').append(ich.wydarzenieSzczegolyTemplate(wydarzenie));
                                $('#wydarzenia-nowe').append(ich.wydarzenieTemplate(wydarzenie));

                                $('link' + wydarzenie.id).magnificPopup({
                                    type: 'inline',
                                    callbacks: {
                                        beforeOpen: function() {
                                            $('#header').removeClass('navbar-fixed-top');
                                        },
                                        afterClose: function() {
                                            document.documentElement.style.overflow="visible";
                                            $('#header').addClass('navbar-fixed-top');
                                        }
                                    }
                                });
                            });

                            //$.fn.fullpage.reBuild();
                            newEventsLoaded = true;
                        });
                    }
                }
            }
        });

    /* ======= Fixed header when scrolled ======= */
    $('#header').addClass('navbar-fixed-top');

    $('div.facebook').mouseenter(function () {
        $(this).stop(true, false).animate({"left": "0"}, 400);
    });
    $('div.facebook').mouseleave(function () {
        $(this).stop(true, false).animate({"left": "-462px"}, 400);
    });
});
	

