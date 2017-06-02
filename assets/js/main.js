$(document).ready(function () {

    var newEventsLoaded = false;

    function renderWydarzenie(wydarzenie, index) {
        var sekcja = (index > 5 ? '#wydarzenia-wszystkie' : '#wydarzenia-nowe')

        wydarzenie.id = 'wydarzenie' + index;

        $(sekcja).append(ich.wydarzenieSzczegolyTemplate(wydarzenie));
        $(sekcja).append(ich.wydarzenieTemplate(wydarzenie));

        $('#link' + wydarzenie.id).magnificPopup({
            type: 'inline',
            closeOnContentClick: true,
            callbacks: {
                beforeOpen: function () {
                    $('#header').removeClass('navbar-fixed-top');
                },
                afterClose: function () {
                    document.documentElement.style.overflow = "visible";
                    $('#header').addClass('navbar-fixed-top');
                }
            }
        });
    }

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
                            $('#wydarzenia-wszystkie').innerHTML = '';

                            $.each(response, function(index, wydarzenie) {
                                renderWydarzenie(wydarzenie, index);
                            });

                            $.fn.fullpage.reBuild();
                            newEventsLoaded = true;
                        })
                        .error(function(jqXHR, textStatus, errorThrown){
                            console.error(errorThrown);
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
	

