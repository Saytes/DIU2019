$(document).ready(function () {
    $('.contenido').hide()
    $('.home-container').fadeIn()

    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });


    $('.inicio-button').click( () => {
        $('.contenido').hide()
        $('.home-container').fadeIn()
    })

    $('.ocio-button').click( () => {
        $('.contenido').hide()
        $('.ocio-container').fadeIn()
    })
    
    $('.conferencias-button').click( () => {
        $('.contenido').hide()
        $('.conferencias-container').fadeIn()
    })

    $('.exposiciones-button').click( () => {
        $('.contenido').hide()
        $('.exposiciones-container').fadeIn()
    })

    $('.canal-button').click( () => {
        $('.contenido').hide()
        $('.canal-container').fadeIn()
    })

    $('.hoja-button').click( () => {
        $('.contenido').hide()
        $('.hoja-container').fadeIn()
    })


});

