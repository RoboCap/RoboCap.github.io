$(document).ready(function () {

    var fpInitialize = function() {
        $('#fullpage').fullpage({

            sectionsColor: ['#17baef', '#f5f5f5', '#f5f5f5', '#17baef', '#f5f5f5', '#fffff', '#17baef'],
            responsive: 900,
            anchors: ['stronaGlowna', 'oNas', 'zespol', 'coRobimy', 'wydarzenia', 'partnerzy', 'kontakt'],
            menu: '#menu',
            autoScrolling: false,
            fitToSection: false,
        });
    }

    fpInitialize();

    /* ======= Fixed header when scrolled ======= */
    $('#header').addClass('navbar-fixed-top');

    $('div.facebook').mouseenter(function () {
        $(this).stop(true, false).animate({"left": "0"}, 400);
    });
    $('div.facebook').mouseleave(function () {
        $(this).stop(true, false).animate({"left": "-462px"}, 400);
    });

    /* ======= magnificPopup ======= */
    $('.ajax-popup-link').magnificPopup({
        closeOnContentClick: true,
        type: 'ajax',
        ajax: {
            settings: null,
            cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
            tError: '<a href="%url%">The content</a> could not be loaded.' //  Error message, can contain %curr% and %total% tags if gallery is enabled
        },
        callbacks : {
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
	

