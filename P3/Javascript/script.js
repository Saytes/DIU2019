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

    $('.contacto-button').click( () => {
        $('.contenido').hide()
        $('.contacto-container').fadeIn()
    })

    $('.acerca-button').click( () => {
        $('.contenido').hide()
        $('.acerca-container').fadeIn()
    })

    $('#buscar').click( () => {
        $('.contenido').hide()
        $('#modalBusqueda').modal('hide')
        $('.resultados-container').fadeIn()
    })


});

