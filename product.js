$(document).ready(function() {

    $('.colourChoose input').on('click', function() {
        var productColour = $(this).attr('data-image');

        $('.active').removeClass('active');
        $('.leftColumn img[data-image = ' + productColour + ']').addClass('active');
        $(this).addClass('active');
    });

});
